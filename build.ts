import { $ } from "bun";
import { watch } from "fs";

const isDev = process.argv.includes('--dev');

async function build() {
  console.log("Building...");
  await $`rm -rf dist && mkdir -p dist`;
  await $`cp -r public/* dist/ 2>/dev/null || true`;
  
  let html = await Bun.file("index.html").text();
  html = html.replace('src="/src/main.tsx"', 'src="/main.js"');
  if (!html.includes('<link rel="stylesheet" href="/index.css" />')) {
      html = html.replace('</head>', '  <link rel="stylesheet" href="/index.css" />\n  </head>');
  }
  await Bun.write("dist/index.html", html);
  
  await $`bunx @tailwindcss/cli -i src/index.css -o dist/index.css`;
  const result = await Bun.build({
    entrypoints: ["src/main.tsx"],
    outdir: "dist",
    naming: {
      entry: '[dir]/[name].[ext]',
      chunk: '[name]-[hash].[ext]',
      asset: 'assets/[name]-[hash].[ext]'
    },
    target: "browser",
    minify: !isDev,
    sourcemap: isDev ? "inline" : "none"
  });
  
  if (result.success) {
      console.log("Build complete successfully.");
  } else {
      console.error("Build failed:", result.logs);
      process.exit(1);
  }
}

build();
