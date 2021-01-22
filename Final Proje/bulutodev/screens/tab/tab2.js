import React, { Component } from 'react';
import { Alert, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button ,} from 'native-base';
//import { firebase } from '@react-native-firebase/auth';

import  {firebase}  from '@react-native-firebase/database';




export default class Tab2 extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
        }
    }
    componentDidMount(){
        firebase.database().ref('haber').on('value',(snapshot)=>{
            var li =[]
            snapshot.forEach((child)=>{
                li.push({
                    key: child.key,    
                    name:child.val().name,
                    age: child.val().title,
                    thumbnail:child.val().thumbnail
                })
            })
            this.setState({list:li})
        })
    }
    render(){
        return(
            <View style={{flex:1,alignSelf:'center',justifyContent:'center'}}>
                <FlatList style={{width:'100%'}}
                data={this.state.list}
                keyExtractor={(item)=>item.key}
                renderItem={({item})=>{
                    return(
                       <ListItem thumbnail>
                <Left>
                <Thumbnail square source={{
                        uri: item.urlToImage != null
                            ? item.urlToImage : 'https://via.placeholder.com/150'
                    }} />
                </Left>
                
                <Body>
                    <Text numberOfLines={2} >{item.title}</Text>
                    <Text note numberOfLines={3}>{item.description}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                        <Text note>{item.name}</Text>
                    </View>
                </Body>
              
                <Right>
                  
                  
                </Right>
            </ListItem>)
   }}/>
      </View>
        )
    }
}