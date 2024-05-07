import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({itemData, OnDeleteItem}){
    return(
        <Pressable onPress={OnDeleteItem}>
            <View style={styles.goalsItem}>
                <Text style={styles.goalsText}>{itemData.item.text}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalsItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#8576ff',
        color: 'white'
    },
    goalsText: {
        color: 'white'
    }
})