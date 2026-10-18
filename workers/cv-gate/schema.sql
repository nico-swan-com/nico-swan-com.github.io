CREATE TABLE IF NOT EXISTS cv_downloads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  user_agent TEXT,
  country TEXT,
  ip_hash TEXT
);
CREATE INDEX IF NOT EXISTS idx_cv_downloads_email ON cv_downloads (email);
CREATE INDEX IF NOT EXISTS idx_cv_downloads_ip_time ON cv_downloads (ip_hash, created_at);
