import { StyleSheet, FlatList } from "react-native";
import { useMemo } from "react";

import { View, Text, ScrollView } from "./Themed";
import ItemTable from "./ItemTable";

type TableItem = {
    id: string;
    [key: string]: string | number;
};

type TableProps = {
    data: TableItem[],
    columns: { [key: string]: string }; 
}

export const Table = ({data, columns}: TableProps) => {

    const columnKeys = useMemo(() => Object.keys(columns), [columns]);

    return (
        <ScrollView 
            horizontal 
            style={styles.scrollContainer} 
            contentContainerStyle={styles.scrollContainer}
        >
            <View style={styles.table}>
                {/* Encabezado dinámico con nombres personalizados */}
                <View style={styles.row}>
                    {columnKeys.map((col) => (
                        <Text key={col} style={[styles.cell, styles.header]}>
                            {columns[col]}
                        </Text>
                    ))}
                </View>

                {/* Filas de datos */}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ItemTable item={item} columns={columnKeys} />}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flex:1,
        backgroundColor: "transparent"
    },
    table: {
        flex:1,
        padding: 10,
        backgroundColor: "transparent",
        borderRadius: 5
    },
    row: { 
        flexDirection: "row", 
        borderBottomWidth: 1, 
        borderColor: "#ddd" 
    },
    cell: { 
        flex: 1, 
        padding: 10, 
        textAlign: "center" 
    },
    header: { 
        fontWeight: "bold", 
        backgroundColor: "#ddd" 
    },
});

export default Table;
