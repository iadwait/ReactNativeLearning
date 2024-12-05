import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const { width: screenWidth } = Dimensions.get('window');

/*
List vs Grid
List is 1 dimentional, either row or a column
Grid is 2 dimentional, rows and column both
FlatList or SectionList has inbuilt ScrollView
For other custom Stuff you need to add ScrollView
In JSX we can't use forloop so we have to use map func for array
*/

const data = [
    { id: 1, title: 'title 1' },
    { id: 2, title: 'title 2' },
    { id: 3, title: 'title 3' },
    { id: 4, title: 'title 4' },
    { id: 5, title: 'title 5' },
    { id: 6, title: 'title 6' },
    { id: 7, title: 'title 7' },
    { id: 8, title: 'title 8' },
    { id: 9, title: 'title 9' },
    { id: 10, title: 'title 10' },
    { id: 11, title: 'title 11' },
    { id: 12, title: 'title 12' },
    { id: 13, title: 'title 13' },
]

const Grid = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.heading}>Grid</Text>
            <ScrollView contentContainerStyle={styles.container}>
                {
                    // If you don't have unique data pass index and assign key={index}
                    // data.map((item, index) => (
                    //     <View key={index}>
                    //         <Text>{item.title}</Text>
                    //     </View>
                    // ))
                    // If your array has Unique data no need to pass index assign key as item.uniqueKeyParam
                    data.map((item) => (
                        <View key={item.id} style={styles.gridItem}>
                            <Text style={styles.itemText}>{item.title}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const HorizontalScrollExample = () => (
    <SafeAreaView>
        <ScrollView
            horizontal
            contentContainerStyle={{
                flexDirection: 'row',
                justifyContent: 'flex-start', // Align items to the left
                padding: 10,
            }}
            showsHorizontalScrollIndicator={false} // Optional: Hide the scrollbar
            style={HorizontalScrollExampleStyles.container}
        >
            {Array.from({ length: 20 }).map((_, index) => (
                <View style={HorizontalScrollExampleStyles.item} key={index}>
                    <Text style={ {position: 'absolute', top: 10, left: 20 } }>Top Left</Text>
                    <Text style={ {position: 'absolute', top: 10, right: 20 } }>Top right</Text>
                    <Text>Card {index + 1}</Text>
                    <Text style={ {position: 'absolute', bottom: 10, left: 20 } }>Bottom Left</Text>
                    <Text style={ {position: 'absolute', bottom: 10, right: 20 } }>Bottom right</Text>
                </View>
            ))}
        </ScrollView>
    </SafeAreaView>
);

// MARK: - Styling
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, // This will allow the component to capture all the space like maing it full screen, 
                // but its parent should also have flex: 1 in our case index.jsx
        backgroundColor: 'lightgray'
    },
    heading: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between', // 'flex start to go 1 after another with wrap align from start'
        padding: 10,
        //overflowX: 'auto',
        //width: '100%'
        flexWrap: 'wrap'
    },
    gridItem: {
        backgroundColor: "#ff6f61",
        padding: 20,
        marginBottom: 10,
        width: '48%',
        height: 100,
        borderRadius: 15,
        alignItems: 'center', // Horizontally center
        justifyContent: 'center' // Verticall Center
    },
    itemText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase'
    }
})

const HorizontalScrollExampleStyles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray'
    },
    item: {
        backgroundColor: 'darkgray',
        margin: 10,
        padding: 10,
        width: screenWidth - 40,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center'
    },

})

// export default Grid
export default HorizontalScrollExample;