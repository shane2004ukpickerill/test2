import {useLayoutEffect} from 'react';
import { Button, View, Text } from 'react-native';

const NotificationsScreen = ({route, navigation }) => {

    const headerButtonPressHanler = () => {
        console.log("PRESSED")
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:() => {
                return(<Button title="CART" onPress={headerButtonPressHanler}/>)
            }
        })
        
    }, [navigation, headerButtonPressHanler])
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home dddd" />
      </View>
    );
}
export default NotificationsScreen