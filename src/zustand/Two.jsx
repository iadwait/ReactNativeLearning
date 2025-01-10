import { View, Text, Button } from 'react-native'
import React from 'react'
import { useCounterStore, useHandleLoginLogoutStore } from './store'

const Two = () => {
    const { count, increment, decrement, resetCount } = useCounterStore();
    const { isLoggedIn, user, makeLogin, makeLogout } = useHandleLoginLogoutStore();
    return (
        <View>
            <Text>Two Component</Text>
            <Text> Count: {count} </Text>
            <Button title='Increment' onPress={() => increment()} />
            <Button title='Decrement' onPress={() => decrement()} />
            <Button title='Reset' onPress={() => resetCount()} />
            <Text>Login Status: {isLoggedIn.toString()}</Text>
            {
                isLoggedIn && (
                    <View>
                        <Text>User Id: {user.id}</Text>
                        <Text>Username: {user.name}</Text>
                    </View>
                )
            }
            <Button title='Make Login' onPress={() => makeLogin({ id: '1', name: 'Adwait' })} />
            <Button title='Make Logout' onPress={() => makeLogout()} />
        </View>
    )
}

export default Two