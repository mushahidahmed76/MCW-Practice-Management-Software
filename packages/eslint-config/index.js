// @ts-check

import eslint from "@eslint/js";
import { globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  globalIgnores(["dist"]),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_.*",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_.*",
          destructuredArrayIgnorePattern: "^_.*",
          varsIgnorePattern: "^_.*",
          ignoreRestSiblings: true,
        },
      ],
      "max-lines-per-function": ["warn", 200],
      "max-lines": ["warn", 400],
    },
  },
);
