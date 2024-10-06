import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { useRouter } from "expo-router";

const articles = [
  {
    id: "1",
    title: "News Title 1",
    description: "Short description 1",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRS1fdfbyacOrcDNrnIs1c_iHBLxRjyvBfg&s",
  },
  {
    id: "2",
    title: "News Title 2",
    description: "Short description 2",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRS1fdfbyacOrcDNrnIs1c_iHBLxRjyvBfg&s",
  },
];

export default function Index() {
  const router = useRouter();

  return (
    <View>
      <FlatList
        data={articles}
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
        keyExtractor={(item) => item.id}
      />
      <Button title="Go to Sections" onPress={() => router.push("/section")} />
    </View>
  );
}
