import { View, Text } from "./Themed";
import { Ionicons } from "@expo/vector-icons";

export default function UserProfileHeader() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
        <Text style={{ marginRight: 10, fontSize: 16, fontWeight: 'bold' }}>
          John Doe
        </Text>
        <Ionicons name="person-circle" size={30} color="black" />
      </View>
    );
}