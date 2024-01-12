import { Text, View } from "react-native";

export { H1 } from "@expo/html-elements";

// export const H1 = ({children})=> (
//   <Text
//     role="heading"
//     className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
//   >
//     {children}
//   </Text>
// );


export const P = ({children})=> (
  <Text className="leading-10 text-lg text-gray-800 md:text-xl dark:text-gray-200">
    {children}
  </Text>
);

export const Code = ({children})=> (
  <View className="py-1 px-4 border border-gray-400 bg-gray-200 rounded-md">
    <Text className="text-lg text-center">
      {children}
    </Text>
  </View>
);