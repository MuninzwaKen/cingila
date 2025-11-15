#!/bin/bash
set -e

echo "🏗️  Building client with Vite..."
vite build

echo "🏗️  Building server with esbuild..."
esbuild server/index.ts \
  --bundle \
  --platform=node \
  --format=esm \
  --outfile=dist/server.js \
  --packages=external \
  --external:vite \
  --external:@vitejs/plugin-react \
  --external:@replit/vite-plugin-cartographer \
  --external:@replit/vite-plugin-dev-banner \
  --external:@replit/vite-plugin-runtime-error-modal

echo "✅ Build completed successfully!"
