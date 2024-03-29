# Expo Nativewind Monorepo Issue

This is an Expo PNPM Monorepo with an Expo Application in the `./apps/example` and a UI package in `./packages/ui`.

There are two tabs. Both tabs load the exact same code. The first tab, Home, imports components from './apps/example/components'. The second tab, Package, imports the same code from './packages/ui/src'

The tailwind.config.js content declartion should tell Nativewind to style components in the UI package.
 
 ```content: ["./src/**/*.{js,jsx,ts,tsx}", "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"],```

However, as this test shows, that isn't the case and Nativewind fails to style the UI package.

## Fix

Looking back through @byCedric's expo-monorepo-example, I noticed this line in the [metro.config.js](https://github.com/byCedric/expo-monorepo-example/blob/main/apps/mobile/metro.config.js#L13C1-L14C50) which I hadn't included in this example:

```
// #3 - Force resolving nested modules to the folders below
config.resolver.disableHierarchicalLookup = true;
```

This line is REQUIRED to make Nativewind work within monorepo packages.

## Usage

1. Clone the repo `git clone git@github.com:tyrauber/expo-nativewind-monorepo-issue.git`
2. Cd into the directory and install dependencies `cd expo-nativewind-monorepo-issue; pnpm install`
3. Start the app `pnpm start`

## Dependencies

This repo uses Expo SDK 50 Preview 7 with the following libraries:

```
    "@expo/vector-icons": "^13.0.0",
    "expo": "^50.0.0-preview.7",
    "expo-constants": "~15.4.2",
    "expo-linking": "~6.2.1",
    "expo-router": "~3.4.1",
    "expo-splash-screen": "~0.26.1",
    "expo-status-bar": "~1.11.1",
    "nativewind": "^4.0.22",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.73.1",
    "react-native-reanimated": "~3.6.0",
    "react-native-safe-area-context": "4.7.4",
    "react-native-screens": "~3.27.0",
    "react-native-web": "~0.19.6",
    "tailwind-variants": "^0.1.19",
    "tailwindcss": "^3.4.0"
  ```

Any suggestions would be greatly appreciated.