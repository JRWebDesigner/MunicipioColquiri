import { schema } from "./src/sanity/schemaTypes";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  projectId: "hm9h78ua",
  dataset: "production",
  plugins: [structureTool()],
  schema,
});