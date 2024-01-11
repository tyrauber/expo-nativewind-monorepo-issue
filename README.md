# Expo Nativewind Monorepo Issue

This is an Expo PNPM Monorepo with an Expo Application in the `./apps/example` and a UI package in `./packages/ui`.

There are two tabs. Both tabs load the exact same code. The first tab, Home, imports components from './apps/example/components'. The second tab, Package, imports the same code from './packages/ui/src'

The tailwind.config.js content declartion should tell Nativewind to style components in the UI package.
 
 ```content: ["./src/**/*.{js,jsx,ts,tsx}", "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"],```

However, as this test shows, that isn't the case and Nativewind fails to style the UI package.

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

#  Round 2: workspaceRoot Config 

Ok, Different approach.

Move global.css and tailwind.config.js to workspaceRoot, not app directory (projectRoot). Update the metro.config.js options, per the documentation, specifying the configPath and input relative to workspaceRoot.

```
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

module.exports = withTurborepoManagedCache(
  withMonorepoPaths(
    withNativeWind(getDefaultConfig(__dirname), { 
      projectRoot: projectRoot,
      configPath: "../../tailwind.config.js",
      input: "../../global.css" 
    })
  )
);
```

(I tried setting the projectRoot to workspaceRoot, but  [nativewindConfig doesn't taking into account the projectRoot config option when resolving the input path or tailwindConfig path](https://github.com/marklawlor/nativewind/blob/main/packages/nativewind/src/metro/index.ts#L53-L57). If you patch that resolving to workspaceRoot, then you need to resolve the outputDir to the projectRoot node modules. This seemed easier.)

Update global.css to point to tailwind.config.js, as per the [tailwind documentation](https://tailwindcss.com/docs/configuration#using-a-different-file-name).

```
@config "./tailwindcss-config.js";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Update references to global.css to reflect the workspaceRoot path.

Because tailwindcss is being run from projectRoot, the tailwind.config content must still relative to project root. 

```
content: ["../../apps/example/src/**/*.{js,jsx,ts,tsx}", "../../packages/ui/src/**/*.{js,jsx,ts,tsx}"],
```

This was counter intuitive to me - the goal of moving everything to workspace root was to make it relative to workspace root. BUT this does work. Atleast for the the example app.  The UI packages is still not rendering.

Somthing else must be happening here....