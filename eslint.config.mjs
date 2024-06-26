import globals from "globals";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import babelParser from "@babel/eslint-parser";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

export default [
  { languageOptions: { 
    globals: globals.browser, 
    parser: babelParser,
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        babelrc: false,
        configFile: false,
        presets: ["@babel/preset-env"]
      }
  } },
    
  },
  ...compat.extends("airbnb-base"),
  {
    rules: {
      "linebreak-style": 0,
      "import/extensions": ["error", "ignorePackages", {
        "js": "always",
      },
    ],
      "import/no-named-as-default": 0,
      "import/no-named-as-default-member": 0,
      "no-param-reassign":0
    }
  }
];
