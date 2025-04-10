import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["packages/oxinion/src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  minify: true,
  treeshake: true,
  platform: "neutral",
  target: "es2017",
  outExtension({ format }) {
    return {
      js: `.${format === "esm" ? "mjs" : "js"}`,
    };
  },
});
