import { View, Text, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/slice/counterSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

const Counter = () => {
    // useSelector Hook used to fetch state from store
    const count = useSelector((state) => state.counter.value);
    // dispatch(increment(), basicaly dispatch will take increment action to reducer and reducer will see what action is to be 
    // performed like +1 and then update value in store
    const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Text>Counter: {count}</Text>
      <Button title='Increment' onPress={() => dispatch(increment())} />
        {/* send decrement action to reducer, reducer will check it's action, perform it and save in store */}
      <Button title='Decrement' onPress={() => dispatch(decrement())}/> 
      <Button title='Reset' onPress={() => dispatch(reset())}/>
    </SafeAreaView>
  )
}

export default Counter