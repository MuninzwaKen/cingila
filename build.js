import * as esbuild from 'esbuild';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function build() {
  try {
    console.log('🏗️  Building client with Vite...');
    await execAsync('vite build');
    console.log('✅ Client build complete');

    console.log('🏗️  Building server with esbuild...');
    await esbuild.build({
      entryPoints: ['server/index.ts'],
      bundle: true,
      platform: 'node',
      format: 'esm',
      outfile: 'dist/server.js',
      packages: 'external',
      banner: {
        js: "import { createRequire } from 'module';const require = createRequire(import.meta.url);"
      }
    });
    console.log('✅ Server build complete');
    
    console.log('🎉 Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();
