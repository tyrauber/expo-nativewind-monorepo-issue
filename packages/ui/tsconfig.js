{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@ui/*": ["./src/*"],
    }
  },
  "extends": "expo/tsconfig.base",
  "include": ["global.d.ts", "**/*.ts", "**/*.tsx", "../../packages/ui/src/**/*.ts", "../../packages/ui/src/**/*.tsx"],
}
