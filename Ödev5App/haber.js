import React from 'react';
import {
  View,
  Text,
  StatusBar,  
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity

} from 'react-native';

export default class NewsItem extends React.Component{

  render (){

    const {type, title, description } = this.props;
    let buttonBackground;

     if (type === 'Sağlık') {
        buttonBackground = 'magenta';
    } else if (type === 'Siyaset') {
        buttonBackground = 'gray';
    } else if (type === 'Spor') {
        buttonBackground = 'pink';
    } else if (type === 'Ekonomi') {
        buttonBackground = 'green'
    } else if (type === 'Bilim') {
        buttonBackground = 'cyan'
    }



    return (
        <SafeAreaView
            style={{
                backgroundColor: buttonBackground,
                flex: 1,
                height: 190,
                width: 'auto',
                marginTop: 15
            }}>

            <Text
                style={{ color: 'black', fontSize: 20, textAlign: 'center' }}
            >{title}</Text>

            <Text
                style={{ color: 'black', fontSize: 15, textAlign: 'center', marginTop: 20 }}


            >{description}</Text>

        </SafeAreaView>
    )

}


}