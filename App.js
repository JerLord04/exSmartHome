import React ,{ useState} from 'react'
import {
  Switch,View,Text,StyleSheet,Button,TextInput,TouchableOpacity,Image,ScrollView,FlatList,Modal,TouchableHighlight, SafeAreaView
} from 'react-native'
import axios from 'react-native-axios';

// const API_URL = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

const App = () => { 
  const [switchValue, setSwitchValue] = useState(false);
  const [topic,setTopic] = React.useState("Test");
  var status = ""

  // const API_URL = Platform.OS === 'android' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
  
  const toggleSwicth =  (value) => {
    setSwitchValue(value);
    if(!switchValue){
      status = "on"
      // alert(`Topic : ${topic} status : ${status}`);
      var postData = {
        "topic" : `${topic}`,
        "status" : `${status}`
      }
      axios.post('http://192.168.45.98:5000/test',postData).then((res) => console.log(res.data)).catch((err) => console.error(err))
    }else{
      status = "off"
      // alert(`Topic : ${topic} status : ${status}`);
      var postData = {
        "topic" : `${topic}`,
        "status" : `${status}`
      }
      axios.post('http://192.168.45.98:5000/test',postData).then((res) => console.log(res.data)).catch((err) => console.error(err))
    }
    
  }
  
  const setValueIntextInput = () =>{
    setTopic(topic);
  }
  

  const sendData = () => {

  }

  return (
    <SafeAreaView style={{flex:4}}> 
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setTopic}
          value={topic}
        />
        <Switch
          style={{marginTop: 30}}
          onValueChange={toggleSwicth}
          value={switchValue}
        />
      </View>
    </SafeAreaView>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  input:{
    width:300,
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
  },
});


export default App;
