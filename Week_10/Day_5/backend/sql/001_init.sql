CREATE TABLE IF NOT EXISTS Users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Stories (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  author_id INT REFERENCES Users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

CREATE TABLE IF NOT EXISTS Contributors (
  id SERIAL PRIMARY KEY,
  story_id INT REFERENCES Stories(id) ON DELETE CASCADE,
  user_id INT REFERENCES Users(id) ON DELETE CASCADE,
  UNIQUE (story_id, user_id)
);

-- simple touch
CREATE INDEX IF NOT EXISTS idx_stories_author ON Stories(author_id);
CREATE INDEX IF NOT EXISTS idx_contrib_story ON Contributors(story_id);