import { View, Text, SectionList, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const sections = [
  {
    title: "Sports",
    data: [
      {
        id: "1",
        title: "Sports Article 1",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRS1fdfbyacOrcDNrnIs1c_iHBLxRjyvBfg&s",
        description: "Description",
      },
    ],
  },
  {
    title: "Technology",
    data: [
      {
        id: "2",
        title: "Tech Article 1",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRS1fdfbyacOrcDNrnIs1c_iHBLxRjyvBfg&s",
        description: "Description",
      },
    ],
  },
];

export default function Sections() {
  const router = useRouter();

  return (
    <SectionList
      sections={sections}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push("/article")}>
          <View style={{ padding: 10 }}>
            <Image
              source={{ uri: item.imageUrl }}
              style={{ height: 100, width: "100%" }}
            />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          {section.title}
        </Text>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
