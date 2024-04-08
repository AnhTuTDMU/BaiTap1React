import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [UserName, SetFullName] = useState("");
  const [Password, SetPassword] = useState("");
  const onPress = () =>{
    Alert.alert(`Đăng nhập thành công với ${UserName} và mật khẩu là ${Password}`)
  }
  return (
    <View style={styles.body}>
      <View>
        <Image
          style = {styles.image_backgroud}
         source={{
          uri: 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-nen-4K-cho-dien-thoai-bo-bien.jpg'
        }}
        />
      </View> 
      <View>
        <Image 
          style = {styles.logo_image}
          source={require('../BaiTap1/assets/Logo.png')}
        />
      </View>
    
      <View style={styles.container}>
      <Text style={styles.register}>
        register
      </Text>
         <TextInput 
          style ={
            {
              width: 300,
              color:"blue",
              fontSize: 20,
              margin: 10,
              paddingBottom: 10
            }
          }
          underlineColorAndroid={"black"}
          placeholderTextColor={"black"}
          placeholder='Username'
          onChangeText={SetFullName}
          value={UserName}
        />
        <TextInput 
          style ={
            {
              width: 300,
              color:"blue",
              fontSize: 20,
              margin: 10,
              paddingBottom: 10
            }
          }
          underlineColorAndroid={"black"}
          placeholderTextColor={"black"}
          placeholder='Password'
          onChangeText={SetPassword}
          value={Password}
        />
        <Button 
          title='Login'
          color= "green"
          onPress={onPress}
        />
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    position: 'relative',
  
  },
  image_backgroud:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logo_image:{
    width: 200, 
    height: 200,
    left: '50%',
    top: '-220%',
    transform: [{ translateX: -100 }, { translateY: -100 }],
  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    paddingTop: 10,
    top: '50%',
    left: '5%',
    right: '5%',
    bottom: '20%',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  register:{
    marginLeft: 220,
    fontSize: 16,
    fontWeight: 'bold',
  }
});
