import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-dark-100 font-bold">
        Hello! yes sirrry</Text>
      <Link href="/onboarding">Go to Onboarding</Link>
      <Link href={{ pathname: "/movie/[id]", params: { id: "avengers" } }}>Go to Movie Details</Link>
    </View>
  );
}
