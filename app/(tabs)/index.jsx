// rnfe to get basic template
import React from 'react'
// import { View, Text, Button } from 'react-native'
// import First from '../../src/components/First';
import { Text , Alert, Button, StyleSheet, TouchableOpacity, View } from 'react-native';
// import JSX from '../../src/components/JSX';
// import OnPress from '../../src/components/OnPress';
//import UseStateHook from '../../src/components/UseStateHook';
// import Props from '../../src/components/Props'
// import InputText from '../../src/components/InputText'
// import Styling from '../../src/components/Styling'
// import FlatListScreen from '../../src/components/FlatListScreen'
//import SectionListScreen from '../../src/components/SectionListScreen'
// import LoginForm from '../../src/components/LoginForm'
// import ContactListScreen from '../../src/Screens/Contact/ContactListScreen'
// import Grid from '../../src/components/Grid'
// import HorizontalScrollExample from '../../src/components/Grid';
// import ClassComponent, { ClassComponents } from '../../src/components/ClassComponents'
// import UseEffectHook from '../../src/components/UseEffectHook'
// import UseEffectHookUpdatePhase from '../../src/components/UseEffectHookUpdatePhase'
// import UseEffectHookUmmountingPhase from '../../src/components/UseEffectHookUmmountingPhase'
// import HideShowToggle from '../../src/components/HideShowToggle'
// import StyleWithButton from '../../src/components/StyleWithButton'
// import Loader from '../../src/components/Loader'
// import PressableComponent from '../../src/components/PressableComponent'
// import StatusBarExample from '../../src/components/StatusBarExample'
// import UseRefHook from '../../src/components/UseRefHook'
// import ModalDialogBox from '../../src/components/ModalDialogBox'
// import AlertExample from '../../src/components/AlertExample'
// import GET_API from '../../src/components/GET_API'
// import POST_API from '../../src/components/POST_API'
// import PUT_API from '../../src/components/PUT_API'
// import PATCH_API from '../../src/components/PATCH_API'
// import DELETE_API from '../../src/components/DELETE_API'
// import GET_API_LIST from '../../src/components/GET_API_LIST'
// import PlatformExample from '../../src/components/PlatformExample'
// import Search from '../../src/components/Search'
import Home from '../../src/NavigationScreens/Home'
import About from '../../src/NavigationScreens/About'
import Login from '../../src/NavigationScreens/Login'
import MyHeader from '../../src/NavigationScreens/MyHeader'
import Example from '../../src/NavigationScreens/Example'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler'

const HomeScreen = () => {
  return (
    // This View has flex 1 as for Grid.jsx we need to make it 1
    <View style={{ flex: 1 }}>
      {/* <Text style={{ fontSize: 30 }}>React Native Text Component</Text>
      <Text style={{ fontSize: 30 }}>React Native Text Component</Text>
      <Button title='This is a Button'/>
      <First />
      <First /> */}
      {/* <JSX /> */}
      {/* <OnPress /> */}
      {/* <UseStateHook /> */}
      {/* <Props /> */}
      {/* <InputText /> */}
      {/* <Styling /> */}
      {/* <FlatListScreen /> */}
      {/* <SectionListScreen /> */}
      {/* <LoginForm /> */}
      {/* <ContactListScreen /> */}
      {/* <Grid /> */}
      {/* <HorizontalScrollExample /> */}
      {/* <ClassComponents /> */}
      {/* <UseEffectHook /> */}
      {/* <UseEffectHookUpdatePhase /> */}
      {/* <UseEffectHookUmmountingPhase /> */}
      {/* <HideShowToggle /> */}
      {/* <StyleWithButton /> */}
      {/* <Loader /> */}
      {/* <PressableComponent /> */}
      {/* <StatusBarExample /> */}
      {/* <UseRefHook /> */}
      {/* <ModalDialogBox /> */}
      {/* <AlertExample /> */}
      {/* <GET_API /> */}
      {/* <POST_API /> */}
      {/* <PUT_API /> */}
      {/* <PATCH_API /> */}
      {/* < DELETE_API /> */}
      {/* <GET_API_LIST /> */}
      {/* <PlatformExample /> */}
      <Search />
    </View>
  )
}

const Stack = createNativeStackNavigator();

const MyExampleHeaderLeft = () => <Example />

const sayHello = () => {
  Alert.alert('Hello', 'Hello Message')
}

// We added HeaderTitle and HeaderRight ref here to so that app does not call it again everytime
const HeaderTitle = () => (
  <TouchableOpacity style={{width: 50}}>
      <Button title='One' color="red" onPress={sayHello}/>
  </TouchableOpacity>
)

const HeaderRight = () => (
  <TouchableOpacity style={{width: 50}}>
      <Button title='Two' color="green" onPress={sayHello}/>
  </TouchableOpacity>
)


const HomeScreen2 = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator
      // screenOptions for common styling on all screens
        // screenOptions={
        //   {
  
        //   }
        // }
        screenOptions={({ route, navigation }) => ({
          header: ({ navigation }) => <Example navigation={navigation} hideBackButton={route.name === "MyHeader"} />,
          // header: () => <Example />,
          headerStyle: styles.header,
          // headerTitle: MyExampleHeaderLeft,
          //headerTitleStyle: styles.headerTitle,
          // headerTintColor: "#fff",
          contentStyle: styles.screen
        })}
      >
        <Stack.Screen name='MyHeader' component={MyHeader} 
          options={{
            title: '',
            // headerTitle: () => (
            //   <TouchableOpacity style={{width: 50}}>
            //       <Button title='One' color="red"/>
            //   </TouchableOpacity>
            // ),
            // headerRight: () => (
            //   <TouchableOpacity style={{width: 50}}>
            //       <Button title='Two' color="green"/>
            //   </TouchableOpacity>
            // ),
            headerTitle: MyExampleHeaderLeft,//HeaderTitle,
            // headerRight: HeaderRight
          }}
        />
        <Stack.Screen name='Drawer' component={HomeScreen3} />
        <Stack.Screen name='Login' component={Login} 
        // Options for screen specific styling
        // options={{
        //   title: 'Login Form',
        //   headerTintColor: 'red',
        //   headerTitleStyle: {
        //     fontSize: 30,
        //     fontWeight: 'bold'
        //     //color: 'yellow',
        //   },
        //   headerStyle: {
        //     backgroundColor: 'lightblue'
        //   },
        // }}
         options={{
          headerLeft: () => null
         }}/>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='About' component={About} />
      </Stack.Navigator>
    // </NavigationContainer>
  )
}

// const First = () => {
//   return(
//     <View>
//       <Text>This is reusable Component</Text>
//     </View>
//   )
// }



const HomeDrawer = ({ navigation }) => {
  return (
    <View style={styles1.screenContainer}>
      <Text style={styles1.title}>Home Screen</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
    </View>
  )
}

const Profile = ({ navigation }) => {
  return (
    <View style={styles1.screenContainer}>
      <Text style={styles1.title}>Profile Screen</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
    </View>
  )
}

const Setting = ({ navigation }) => {
  return (
    <View style={styles1.screenContainer}>
      <Text style={styles1.title}>Setting Screen</Text>
      <Button title='Open Drawer' onPress={() => navigation.openDrawer()} />
    </View>
  )
}


const Drawer = createDrawerNavigator();

const HomeScreen3 = () => {
  return (
    // <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        header: ({ navigation }) => <Example navigation={navigation} />,
        drawerStyle: {
          backgroundColor: '#e6e6e6',
          width: 240
        },
        // drawerLabelStyle: {
        //   fontSize: 18,
        //   color: '#333'
        // },
        // headerStyle: {
        //   backgroundColor: '#6200EE'
        // },
        // headerTintColor: '#fff',
        // headerTitleAlign: 'center'
      }}
      >
        <Drawer.Screen name="Home" component={HomeDrawer} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Setting} />
      </Drawer.Navigator>
    //</NavigationContainer>{/* </NavigationContainer> */}
  )
}

// export default HomeScreen
// export default HomeScreen2
export default HomeScreen3

const styles = StyleSheet.create({
  header: {
    backgroundColor: "lightblue"
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  screen: {
    backgroundColor: 'lightgreen'
  }
})

const styles1 = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  }
});


