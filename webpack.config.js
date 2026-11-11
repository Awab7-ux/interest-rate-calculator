import path from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./js/index.js",
  output: {
    path: path.resolve(projectDirectory, "dist"),
    filename: "bundle.js",
    clean: true,
  },
};