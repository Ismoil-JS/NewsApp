import { ScrollView, Text, Image } from "react-native";

export default function Article() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRS1fdfbyacOrcDNrnIs1c_iHBLxRjyvBfg&s",
        }}
        style={{ height: 200, width: "100%" }}
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginVertical: 10 }}>
        Article Title
      </Text>
      <Text>Long article content goes here...</Text>
    </ScrollView>
  );
}
