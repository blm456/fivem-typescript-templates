const esbuild = require("esbuild");

const IS_WATCH_MODE = process.env.IS_WATCH_MODE;

const TARGET_ENTRIES = [
  {
    target: "node16",
    entryPoints: ["src/server/server.ts"],
    platform: "node",
    outfile: "./dist/server.js",
  },
  {
    target: "es2020",
    entryPoints: ["src/client/client.ts"],
    outfile: "./dist/client.js",
  },
];

async function buildBundle() {
  try {
    // Define base options
    const baseOptions = {
      logLevel: "info",
      bundle: true,
      charset: "utf8",
      minifyWhitespace: true,
      absWorkingDir: process.cwd(),
    };

    // Iterate through target builds
    for (const targetOpts of TARGET_ENTRIES) {
      // Compile build options
      const mergedOpts = { ...baseOptions, ...targetOpts };

      if (IS_WATCH_MODE) {
        // Perform watch build
        const context = await esbuild.context(mergedOpts);
        await context.watch();
      } else {
        // Build without watching for changes
        const { errors } = await esbuild.build(mergedOpts);

        // Log build errors
        if (errors.length) {
          console.error(`[ESBuild] Bundle failed with ${errors.length} errors`);
          console.error(errors);
          process.exit(1);
        }
      }
    }
  } catch (err) {
    console.error("[ESBuild] Build failed with error");
    console.error(err);
    process.exit(1);
  }
}

buildBundle().catch(() => process.exit(1));
