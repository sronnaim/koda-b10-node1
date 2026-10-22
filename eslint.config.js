import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { 
      js, 
      "@stylistic": stylistic 
    }, 
    extends: ["js/recommended"],
    rules: { 
      "@stylistic/array-bracket-newline": [
        "error", {
          "multiline": true,
          "minItems": 5
        }
      ],
      "@stylistic/brace-style": ["error", "stroustrup"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/curly-newline": ["error", "always"],
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/function-paren-newline": ["error", { "minItems": 3 }],
      "@stylistic/implicit-arrow-linebreak": ["error", "below"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/nonblock-statement-body-position": ["error", "below"],
    },
    languageOptions: { globals: globals.browser } 
  },
]);
