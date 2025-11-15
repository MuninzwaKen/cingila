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
  --external:@*/* \
  --external:lightningcss \
  --external:postcss \
  --external:autoprefixer \
  --external:vite \
  --external:esbuild \
  --external:@vitejs/* \
  --external:@replit/* 

echo "✅ Build completed successfully!"

