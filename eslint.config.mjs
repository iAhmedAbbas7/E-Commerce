// <== IMPORTS ==>
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// <== FILENAME HELPER ==>
const __filename = fileURLToPath(import.meta.url);
// <== DIRNAME HELPER ==>
const __dirname = dirname(__filename);

// <== COMPATIBILITY CONFIGURATION ==>
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// <== ESLINT CONFIGURATION ==>
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
