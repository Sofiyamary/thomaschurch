# Supabase Setup Guide (Free — No Credit Card)

---

## Step 1 — Create a Supabase Project

1. Go to https://supabase.com → click **Start your project**
2. Sign in with GitHub (free)
3. Click **New project**
   - Organization: your org
   - Name: `stthomaschurch`
   - Database password: choose a strong password (save it)
   - Region: **Southeast Asia (Singapore)**
   - Plan: **Free**
4. Click **Create new project** — wait ~2 minutes

---

## Step 2 — Create the Database Table

1. Left sidebar → **SQL Editor** → **New query**
2. Paste this SQL and click **Run**:

```sql
-- Create posts table
CREATE TABLE posts (
  id               uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  type             text NOT NULL CHECK (type IN ('bible', 'magazine')),
  month            text NOT NULL,
  title            text NOT NULL,
  description      text DEFAULT '',
  file_url         text DEFAULT '',
  questions_file_url text DEFAULT '',
  answers_file_url   text DEFAULT '',
  created_at       timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Anyone can read posts (public)
CREATE POLICY "Public read"
  ON posts FOR SELECT
  USING (true);

-- Only logged-in admin can insert
CREATE POLICY "Admin insert"
  ON posts FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Only logged-in admin can update
CREATE POLICY "Admin update"
  ON posts FOR UPDATE
  USING (auth.role() = 'authenticated');

-- Only logged-in admin can delete
CREATE POLICY "Admin delete"
  ON posts FOR DELETE
  USING (auth.role() = 'authenticated');
```

---

## Step 3 — Create Storage Bucket

1. Left sidebar → **Storage** → **New bucket**
2. Name: `uploads`
3. Toggle **Public bucket** → ON
4. Click **Save**

### Set Storage Policies

Go to **Storage → Policies** → click **New policy** for the `uploads` bucket:

Or run this SQL in the SQL Editor:

```sql
-- Public can read files
CREATE POLICY "Public read storage"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'uploads');

-- Authenticated users can upload
CREATE POLICY "Admin upload"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'uploads' AND auth.role() = 'authenticated');

-- Authenticated users can delete
CREATE POLICY "Admin delete storage"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'uploads' AND auth.role() = 'authenticated');
```

---

## Step 4 — Create Admin User

1. Left sidebar → **Authentication** → **Users** tab
2. Click **Add user** → **Create new user**
   - Email: `test@gmail.com`
   - Password: `123456`
   - Toggle **Auto Confirm User** → ON
3. Click **Create user**

---

## Step 5 — Get API Keys

1. Left sidebar → **Project Settings** (⚙️) → **API**
2. Copy:
   - **Project URL** (looks like `https://xxxx.supabase.co`)
   - **anon / public** key (long JWT string)

---

## Step 6 — Add to .env File

In your project root, open `.env` and fill in:

```
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_ADMIN_EMAIL=test@gmail.com
```

---

## Step 7 — Run the Project

```bash
npm run dev
```

Open http://localhost:5173/admin/login
- Email: `test@gmail.com`
- Password: `123456`

---

## How It Works

| Feature | Supabase Service |
|---|---|
| Login / Logout | Supabase Auth (Email/Password) |
| Store post metadata | Supabase Database (PostgreSQL) |
| Upload PDF/Image files | Supabase Storage (`uploads` bucket) |
| Public read | RLS policy: `USING (true)` |
| Admin-only write | RLS policy: `auth.role() = 'authenticated'` |

---

## Free Tier Limits (More Than Enough)

| Resource | Free Limit |
|---|---|
| Database | 500 MB |
| Storage | 1 GB |
| Bandwidth | 5 GB/month |
| Auth users | Unlimited |
| API requests | Unlimited |
