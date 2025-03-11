import { StyleSheet } from "react-native";
import { View, Text } from "./Themed";

type ItemTableProps = {
    item: Record<string, any>;
    columns: string[];
};

export default function ItemTable({ item, columns }: ItemTableProps) {
    return (
        <View style={styles.row}>
            {columns.map((col) => (
                <Text key={col} style={styles.cell}>{item[col]}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    row: { 
        flexDirection: "row", 
        borderBottomWidth: 1, 
        borderColor: "#ddd",
        backgroundColor: "transparent"
    },
    cell: { 
        flex: 1, 
        padding: 10, 
        textAlign: "center" 
    }
});
