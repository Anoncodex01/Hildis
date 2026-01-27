'use client';

import { MapContainer, TileLayer, GeoJSON, Marker, Popup, useMap } from 'react-leaflet';
import L, { PathOptions } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState, useRef } from 'react';

// --- LEAFLET GLOBAL CONFIGS & HELPERS ---

// Fix for default marker icons in Next.js
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  });
}

// Custom location icon marker (plain icon, no background)
const createRedIcon = () => {
  return L.divIcon({
    className: 'custom-location-icon',
    html: `
      <svg width="32" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#dc2626"/>
      </svg>
    `,
    iconSize: [32, 40],
    iconAnchor: [16, 40],
  });
};

// Custom label icon for branch name
const createBranchLabelIcon = (name: string) => {
  return L.divIcon({
    className: 'branch-label-icon',
    html: `
      <div style="display: flex; align-items: center; gap: 6px; white-space: nowrap;">
        <div style="width: 6px; height: 6px; background-color: #dc2626; border-radius: 50%;"></div>
        <span style="color: #111827; font-size: 14px; font-weight: 600; text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.9), -1px -1px 2px rgba(255, 255, 255, 0.9), 1px -1px 2px rgba(255, 255, 255, 0.9), -1px 1px 2px rgba(255, 255, 255, 0.9);">${name}</span>
      </div>
    `,
    iconSize: [150, 30],
    iconAnchor: [75, 15],
  });
};

// Branch contact data
const BRANCH_CONTACTS: { [key: string]: { email: string; phone: string } } = {
  arusha: {
    email: 'info@hildiseastafrica.com',
    phone: '+255 123 456 789'
  },
  dar: {
    email: 'stephano.mkinga@hildiseastafrica.com',
    phone: '+255 754 434 247'
  },
  dodoma: {
    email: 'sarah@hildiseastafrica.com',
    phone: '+255 756 925 639'
  },
  mwanza: {
    email: 'jdaffa@hildiseastafrica.com',
    phone: '+255 718 796 079'
  },
  shinyanga: {
    email: 'francis.kiyeyeu@hildiseastafrica.com',
    phone: '+255 754 434 445'
  },
  geita: {
    email: 'info@hildiseastafrica.com',
    phone: '+255 123 456 789'
  },
  tanga: {
    email: 'betty@hildiseastafrica.com',
    phone: '+255 759 236 752'
  }
};

// --- DATA DEFINITIONS ---

const HIGHLIGHTED_REGIONS = [
  'Arusha',
  'Mwanza',
  'Geita',
  'Shinyanga',
  'Dodoma',
  'Tanga',
  'Dar es salaam',
];

const branchIdToRegion: { [key: string]: string } = {
  arusha: 'Arusha',
  dar: 'Dar es Salaam',
  dodoma: 'Dodoma',
  mwanza: 'Mwanza',
  shinyanga: 'Shinyanga',
  geita: 'Geita',
  tanga: 'Tanga',
};

const OFFICE_LOCATIONS = [
  { 
    name: 'Arusha (HQ)', 
    coords: [-3.3869, 36.6830] as [number, number], 
    isHQ: true,
    id: 'arusha'
  },
  { 
    name: 'Dar es Salaam', 
    coords: [-6.7924, 39.2083] as [number, number],
    id: 'dar'
  },
  { 
    name: 'Dodoma', 
    coords: [-6.1630, 35.7516] as [number, number],
    id: 'dodoma'
  },
  { 
    name: 'Mwanza', 
    coords: [-2.5164, 32.9176] as [number, number],
    id: 'mwanza'
  },
  { 
    name: 'Shinyanga', 
    coords: [-3.6610, 33.4211] as [number, number],
    id: 'shinyanga'
  },
  { 
    name: 'Geita', 
    coords: [-2.8725, 32.2295] as [number, number],
    id: 'geita'
  },
  { 
    name: 'Tanga', 
    coords: [-5.0690, 39.0986] as [number, number],
    id: 'tanga'
  },
];

// --- STYLING & INTERACTIVITY FUNCTIONS ---

const createStyleRegion = (activeBranch: string | null) => (feature: any): PathOptions => {
  const regionName = feature.properties.Region_Nam || feature.properties.name;
  const isHighlighted = HIGHLIGHTED_REGIONS.some(region => 
    region.toLowerCase() === regionName?.toLowerCase()
  );

  let isActive = false;
  if (activeBranch) {
    const activeRegionName = branchIdToRegion[activeBranch];
    isActive = activeRegionName?.toLowerCase() === regionName?.toLowerCase();
  }

  return {
    fillColor: isActive ? '#dc2626' : isHighlighted ? '#dc2626' : '#d1d5db',
    weight: isActive ? 2 : isHighlighted ? 2 : 1.5, // Changed from 4 to 2 for active
    opacity: 1,
    color: isActive ? '#ffffff' : '#ffffff',
    fillOpacity: isActive ? 0.9 : isHighlighted ? 0.75 : 0.5,
    // Removed dashArray to eliminate rectangle border effect
  };
};

const onEachFeature = (
  feature: any, 
  layer: L.Layer, 
  styleFunction: (feature: any) => PathOptions, 
  activeBranch: string | null,
  onRegionClick?: (regionName: string, branchId: string | null) => void
) => {
  const regionName = feature.properties.Region_Nam || feature.properties.name;
  const isHighlighted = HIGHLIGHTED_REGIONS.some(region => 
    region.toLowerCase() === regionName?.toLowerCase()
  );

  // Find branch ID for this region
  let branchIdForRegion: string | null = null;
  Object.entries(branchIdToRegion).forEach(([id, name]) => {
    if (name.toLowerCase() === regionName?.toLowerCase()) {
      branchIdForRegion = id;
    }
  });

  // Bind enhanced popup with contact info
  if (branchIdForRegion && BRANCH_CONTACTS[branchIdForRegion]) {
    const contacts = BRANCH_CONTACTS[branchIdForRegion];
    layer.bindPopup(`
      <div style="min-width: 200px; padding: 10px;">
        <h3 style="color: #dc2626; margin: 0 0 12px 0; font-weight: bold; font-size: 16px;">
          ${regionName} ${branchIdForRegion === 'arusha' ? '(HQ)' : ''}
        </h3>
        <div style="margin-bottom: 8px;">
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 2px;">Email</div>
          <a href="mailto:${contacts.email}" style="color: #111827; text-decoration: none; font-size: 14px; font-weight: 500;">
            ${contacts.email}
          </a>
        </div>
        <div>
          <div style="font-size: 12px; color: #6b7280; margin-bottom: 2px;">Phone</div>
          <a href="tel:${contacts.phone.replace(/\s+/g, '')}" style="color: #111827; text-decoration: none; font-size: 14px; font-weight: 500;">
            ${contacts.phone}
          </a>
        </div>
      </div>
    `);
  } else {
    layer.bindPopup(regionName);
  }

  // Create a tooltip that shows on hover
  layer.bindTooltip(regionName, {
    permanent: false,
    direction: 'top',
    className: 'region-tooltip',
    offset: [0, -10],
  });

  // Add click handler to trigger parent component
  if (branchIdForRegion) {
    layer.on('click', () => {
      if (onRegionClick) {
        onRegionClick(regionName, branchIdForRegion);
      }
    });
  }

  // REMOVED the pulsing animation section entirely to eliminate rectangle border
  // Just keep the hover effects

  layer.on({
    mouseover: (e) => {
      const targetLayer = e.target;
      targetLayer.setStyle({
        weight: 3,
        fillOpacity: 0.9,
      });
      targetLayer.openTooltip();
    },
    mouseout: (e) => {
      const targetLayer = e.target;
      targetLayer.setStyle(styleFunction(feature));
      targetLayer.closeTooltip();
    },
  });
};

// FitBounds component
function FitBounds({ geoJsonData }: { geoJsonData: any }) {
  const map = useMap();

  useEffect(() => {
    if (geoJsonData && geoJsonData.features && geoJsonData.features.length > 0) {
      const geoJsonLayer = L.geoJSON(geoJsonData);
      const bounds = geoJsonLayer.getBounds();
      if (bounds.isValid()) {
        map.fitBounds(bounds, {
          padding: [0, 0],
          maxZoom: 6,
        });
      }
    }
  }, [geoJsonData, map]);

  return null;
}

// --- MAIN COMPONENT ---

interface TanzaniaMapProps {
  activeBranch: string | null;
  onRegionClick?: (regionName: string, branchId: string) => void;
}

export default function TanzaniaMap({ activeBranch, onRegionClick }: TanzaniaMapProps) {
  const center: [number, number] = [-6.3690, 34.8888];
  const zoom = 6;
  const [geoJsonData, setGeoJsonData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const styleRegion = createStyleRegion(activeBranch);
  const [regionCenter, setRegionCenter] = useState<[number, number] | null>(null);

  // Load GeoJSON data
  useEffect(() => {
    const loadGeoJSON = async () => {
      try {
        const response = await fetch('/data/regions.geojson'); 
        const data = await response.json();
        setGeoJsonData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading GeoJSON:', error);
        setLoading(false);
      }
    };

    if (typeof window !== 'undefined') {
      loadGeoJSON();
    }
  }, []);

  // Calculate region center
  useEffect(() => {
    if (activeBranch && geoJsonData) {
      const activeRegionName = branchIdToRegion[activeBranch];
      const targetFeature = geoJsonData.features.find((feature: any) => {
        const regionName = feature.properties.Region_Nam || feature.properties.name;
        return activeRegionName?.toLowerCase() === regionName?.toLowerCase();
      });

      if (targetFeature) {
        const geoJsonLayer = L.geoJSON(targetFeature);
        const bounds = geoJsonLayer.getBounds();
        const center = bounds.getCenter();
        setRegionCenter([center.lat, center.lng]);
      } else {
        setRegionCenter(null);
      }
    } else {
      setRegionCenter(null);
    }
  }, [activeBranch, geoJsonData]);

  // Handle region click from map
  const handleRegionClick = (regionName: string, branchId: string | null) => {
    if (branchId && onRegionClick) {
      onRegionClick(regionName, branchId);
    }
  };

  if (typeof window === 'undefined') {
    return <div className="w-full h-[600px]" />;
  }

  if (loading) {
    return (
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="text-gray-600">Loading map data...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div 
        ref={mapContainerRef}
        className="relative"
      >
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          zoomControl={false}
          attributionControl={false}
          style={{ 
            height: '600px', 
            width: '100%', 
            backgroundColor: 'white',
            // Remove all borders and shadows
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            // Ensure no overflow clipping
            overflow: 'hidden'
          }}
          // Remove Leaflet's default classes that add borders
          className="leaflet-map-custom"
        >
          {/* Fit map bounds to GeoJSON */}
          {geoJsonData && <FitBounds geoJsonData={geoJsonData} />}

          {/* RENDER THE REGIONAL BOUNDARIES */}
          {geoJsonData && geoJsonData.features && geoJsonData.features.length > 0 && (
            <GeoJSON
              key={`geojson-${activeBranch || 'all'}`}
              data={geoJsonData}
              style={styleRegion}
              onEachFeature={(feature, layer) => 
                onEachFeature(feature, layer, styleRegion, activeBranch, handleRegionClick)
              }
            />
          )}

          {/* ADD MARKERS FOR SPECIFIC CITIES/OFFICES */}
          {OFFICE_LOCATIONS.map((location) => (
            <Marker key={location.name} position={location.coords} icon={createRedIcon()}>
              <Popup>
                <div style={{ minWidth: '200px', padding: '10px' }}>
                  <h3 style={{ color: '#dc2626', margin: '0 0 12px 0', fontWeight: 'bold', fontSize: '16px' }}>
                    {location.name}
                  </h3>
                  {BRANCH_CONTACTS[location.id] && (
                    <>
                      <div style={{ marginBottom: '8px' }}>
                        <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Email</div>
                        <a 
                          href={`mailto:${BRANCH_CONTACTS[location.id].email}`}
                          style={{ color: '#111827', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}
                        >
                          {BRANCH_CONTACTS[location.id].email}
                        </a>
                      </div>
                      <div>
                        <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '2px' }}>Phone</div>
                        <a 
                          href={`tel:${BRANCH_CONTACTS[location.id].phone.replace(/\s+/g, '')}`}
                          style={{ color: '#111827', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}
                        >
                          {BRANCH_CONTACTS[location.id].phone}
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Branch Name Label on Region */}
          {activeBranch && regionCenter && (
            <Marker 
              position={regionCenter} 
              icon={createBranchLabelIcon(branchIdToRegion[activeBranch] || activeBranch)}
              zIndexOffset={1000}
            />
          )}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 z-[1000] border border-gray-200 shadow-md">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[#dc2626] rounded border border-gray-300"></div>
            <span className="text-gray-900 text-sm font-medium">Red – Existing Offices</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-[#d1d5db] rounded border border-gray-300"></div>
            <span className="text-gray-900 text-sm font-medium">Grey – Areas Without Offices</span>
          </div>
          <div className="text-xs text-gray-500 pt-2 border-t border-gray-200">
            Click on any red region or marker to view contact details
          </div>
        </div>
      </div>
    </div>
  );
}