import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist');

// Serve static files from Vite build directory with optimized caching headers for speed
app.use(express.static(distPath, {
  maxAge: '1y',
  setHeaders: (res, filePath) => {
    const filename = path.basename(filePath);
    if (filename === 'index.html') {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    } else if (filename === 'sw.js' || filename === 'manifest.json') {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    } else {
      // Vite assets (hashes in name) can be cached indefinitely
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// Fallback all routes to index.html to support client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Production server running on port ${PORT}`);
});
