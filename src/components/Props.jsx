import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from '../../src/components/Child'

const Props = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(2);
    const arrData = [
        {id: '1', name: 'Adwait'},
        {id: '2', name: 'John'}
    ]
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Props</Text>
            <Text style={{ fontSize: 18 }}>Description: Props is used to pass data from one component to another, here in example we
                are passing data from Prop.jsx to Child.jsx
            </Text>
            <View style={{ margin: 10 }}>
                <Button title='Counter' onPress={() => setCount(count + 1)} />
            </View>
            <View style={{ margin: 10 }}>
                <Button title='Item' onPress={() => setItem(item * 2)} />
            </View>
            {/* variable name while passing can be anything */}
            <Child data={count} item={item} arrData={arrData} />
        </View>
    )
}

export default Props