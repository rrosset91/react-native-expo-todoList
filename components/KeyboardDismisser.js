import { Keyboard, TouchableWithoutFeedback } from "react-native"
const DismissKeyboard = ({children}=> (
<TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>

</TouchableWithoutFeedback>
)