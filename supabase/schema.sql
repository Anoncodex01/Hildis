-- HILDIS Admin Panel Database Schema
-- Run this in your Supabase SQL Editor to set up all tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- SITE SETTINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  logo_url TEXT,
  company_name TEXT DEFAULT 'Hildis East Africa Ltd',
  tagline TEXT DEFAULT 'Reliable Industrial & Mining Solutions for Africa',
  phone TEXT DEFAULT '+255 XXX XXX XXX',
  email TEXT DEFAULT 'info@hildis.co.tz',
  address TEXT,
  facebook_url TEXT,
  instagram_url TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  hero_video_url TEXT DEFAULT '/video/hero.mp4',
  hero_title TEXT DEFAULT 'Reliable Industrial & Mining Solutions for Africa',
  hero_subtitle TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- SERVICES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL DEFAULT 'settings',
  image_url TEXT,
  link_text TEXT DEFAULT 'Learn More',
  link_url TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TEAM MEMBERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  image_url TEXT,
  bio TEXT,
  email TEXT,
  phone TEXT,
  linkedin_url TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDUSTRIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS industries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  image_url TEXT,
  stat_value TEXT DEFAULT '0+',
  stat_description TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TESTIMONIALS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  image_url TEXT,
  quote TEXT NOT NULL,
  rating INT DEFAULT 5,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PROJECTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  client TEXT NOT NULL,
  duration TEXT,
  year TEXT,
  solutions JSONB DEFAULT '[]'::jsonb,
  industry_id UUID REFERENCES industries(id) ON DELETE SET NULL,
  is_featured BOOLEAN DEFAULT false,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- CLIENT LOGOS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS client_logos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  website_url TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- BRANCHES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS branches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  label TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  address TEXT,
  phone TEXT,
  email TEXT,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  is_headquarters BOOLEAN DEFAULT false,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PRODUCT CATEGORIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS product_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  parent_id UUID REFERENCES product_categories(id) ON DELETE SET NULL,
  product_type TEXT CHECK (product_type IN ('chemical', 'equipment')) DEFAULT 'equipment',
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- PRODUCTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  short_description TEXT,
  image_url TEXT,
  gallery_images JSONB DEFAULT '[]'::jsonb,
  category_id UUID REFERENCES product_categories(id) ON DELETE SET NULL,
  applications TEXT,
  industries TEXT,
  partner TEXT,
  uses JSONB DEFAULT '[]'::jsonb,
  tags TEXT,
  specifications JSONB DEFAULT '{}'::jsonb,
  is_featured BOOLEAN DEFAULT false,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- CONTACT INQUIRIES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  inquiry_type TEXT CHECK (inquiry_type IN ('general', 'quote', 'support', 'partnership')) DEFAULT 'general',
  status TEXT CHECK (status IN ('new', 'in_progress', 'resolved', 'archived')) DEFAULT 'new',
  assigned_to UUID,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- COMPANY STATS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS company_stats (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  stat_key TEXT UNIQUE NOT NULL,
  stat_value TEXT NOT NULL,
  stat_suffix TEXT DEFAULT '+',
  label TEXT NOT NULL,
  icon TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ABOUT PAGE CONTENT TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS about_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_key TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ADMIN USERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT CHECK (role IN ('super_admin', 'admin', 'editor')) DEFAULT 'editor',
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ACTIVITY LOG TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS activity_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES admin_users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id UUID,
  details JSONB DEFAULT '{}'::jsonb,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- MEDIA LIBRARY TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS media_library (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INT,
  alt_text TEXT,
  folder TEXT DEFAULT 'general',
  uploaded_by UUID REFERENCES admin_users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- INDEXES FOR BETTER PERFORMANCE
-- ============================================
CREATE INDEX IF NOT EXISTS idx_services_active ON services(is_active);
CREATE INDEX IF NOT EXISTS idx_team_members_active ON team_members(is_active);
CREATE INDEX IF NOT EXISTS idx_industries_active ON industries(is_active);
CREATE INDEX IF NOT EXISTS idx_testimonials_active ON testimonials(is_active);
CREATE INDEX IF NOT EXISTS idx_projects_active ON projects(is_active);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_activity_logs_user ON activity_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_activity_logs_created ON activity_logs(created_at);

-- ============================================
-- UPDATED_AT TRIGGER FUNCTION
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- ============================================
-- APPLY TRIGGERS TO ALL TABLES
-- ============================================
DROP TRIGGER IF EXISTS update_site_settings_updated_at ON site_settings;
CREATE TRIGGER update_site_settings_updated_at BEFORE UPDATE ON site_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_services_updated_at ON services;
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_team_members_updated_at ON team_members;
CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON team_members FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_industries_updated_at ON industries;
CREATE TRIGGER update_industries_updated_at BEFORE UPDATE ON industries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_testimonials_updated_at ON testimonials;
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_projects_updated_at ON projects;
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_client_logos_updated_at ON client_logos;
CREATE TRIGGER update_client_logos_updated_at BEFORE UPDATE ON client_logos FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_branches_updated_at ON branches;
CREATE TRIGGER update_branches_updated_at BEFORE UPDATE ON branches FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_product_categories_updated_at ON product_categories;
CREATE TRIGGER update_product_categories_updated_at BEFORE UPDATE ON product_categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_products_updated_at ON products;
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_contact_inquiries_updated_at ON contact_inquiries;
CREATE TRIGGER update_contact_inquiries_updated_at BEFORE UPDATE ON contact_inquiries FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_company_stats_updated_at ON company_stats;
CREATE TRIGGER update_company_stats_updated_at BEFORE UPDATE ON company_stats FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_about_content_updated_at ON about_content;
CREATE TRIGGER update_about_content_updated_at BEFORE UPDATE ON about_content FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_admin_users_updated_at ON admin_users;
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_media_library_updated_at ON media_library;
CREATE TRIGGER update_media_library_updated_at BEFORE UPDATE ON media_library FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- INSERT DEFAULT DATA
-- ============================================

-- Insert default site settings
INSERT INTO site_settings (company_name, tagline, hero_title, hero_subtitle) 
VALUES (
  'Hildis East Africa Ltd',
  'Reliable Industrial & Mining Solutions for Africa',
  'Reliable Industrial & Mining Solutions for Africa',
  'Delivering high-quality industrial equipment, premium chemicals, and expert technical services. We guarantee peak performance, build unwavering trust, and ensure on-time, every time delivery across East Africa.'
) ON CONFLICT DO NOTHING;

-- Insert default company stats
INSERT INTO company_stats (stat_key, stat_value, stat_suffix, label, icon, display_order) VALUES
  ('years_experience', '14', '+', 'Years of Experience', 'target', 1),
  ('branches', '6', '+', 'Branches Nationwide', 'map-pin', 2),
  ('trained_staff', '50', '+', 'Trained Staff', 'users', 3),
  ('delivery_vehicles', '32', '+', 'Delivery Vehicles', 'truck', 4)
ON CONFLICT (stat_key) DO NOTHING;

-- Insert default about content
INSERT INTO about_content (section_key, title, content, display_order) VALUES
  ('mission', 'Our Mission', 'To build lasting partnerships with our customers by delivering reliable, innovative, and value-driven solutions. We embrace change, encourage innovation, and uphold the highest standards of professionalism in everything we do.', 1),
  ('vision', 'Our Vision', 'To be recognized as a leading and trusted partner in sourcing, packaging, timely delivery, and provision of quality goods and services across Africa. We aim to set the benchmark for excellence, reliability, and customer satisfaction in every market we serve.', 2),
  ('values', 'Our Values', 'At our core, we are guided by unwavering Integrity and Professionalism in all our actions. We foster Collaborative Teamwork and clear Communication, driven by a shared Passion to deliver exceptional results and achieve ultimate Customer Satisfaction.', 3)
ON CONFLICT (section_key) DO NOTHING;

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_logos ENABLE ROW LEVEL SECURITY;
ALTER TABLE branches ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_library ENABLE ROW LEVEL SECURITY;

-- Public read access for frontend
CREATE POLICY "Public read access" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public read access" ON services FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access" ON team_members FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access" ON industries FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access" ON testimonials FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access" ON projects FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access" ON client_logos FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access" ON branches FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access" ON product_categories FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access" ON products FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access" ON company_stats FOR SELECT USING (is_active = true);
CREATE POLICY "Public read access" ON about_content FOR SELECT USING (is_active = true);

-- Allow public to insert contact inquiries
CREATE POLICY "Public insert access" ON contact_inquiries FOR INSERT WITH CHECK (true);

-- Authenticated full access for admin
CREATE POLICY "Admin full access" ON site_settings FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON team_members FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON industries FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON projects FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON client_logos FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON branches FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON product_categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON products FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON contact_inquiries FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON company_stats FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON about_content FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON admin_users FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON activity_logs FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin full access" ON media_library FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- SUCCESS MESSAGE
-- ============================================
SELECT 'HILDIS Admin Database Schema Created Successfully!' as message;

