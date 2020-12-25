import React from 'react';

import {FlatList, Text, View, ScrollView,TouchableOpacity} from 'react-native';

export default class PlaceHolder extends React.Component{

    constructor(props){
        super(props);
        this.state={
            users:[],
            Kullanici:0,
        }
    }

    componentDidMount = async ()=>{
        let user =  await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r=>r.json());
        
            this.setState({users:user})
    };

    handlePress = id =>{
        this.setState({Kullanici:id})
    }

    userListView(){

        if(this.state.Kullanici<1){
            return(
                <Text style={{fontSize:15, margin:17}}>Görmek İstediğiniz Kullanıcı İd'sini Seçiniz</Text>
            ) 
        }
        let renderUserList=[];
        this.state.users.map((v,k)=>{

            if(v.id===this.state.Kullanici){
               renderUserList.push(<Text style={{minHeight:75, fontSize:16, paddingLeft:5, marginTop:21}}>
             <Text style={{color:'magenta', fontSize:16}}>ID:</Text> {v.id} {"\n\n"}
               <Text style={{color:'magenta', fontSize:16}}>TITLE:</Text> {v.title} {"\n\n"}
               <Text style={{color:'magenta', fontSize:16}}>BODY:</Text> {v.body} {"\n\n"}</Text>)
            }

        }
        )
        return renderUserList
    }

    render(){
        return(
        <View style={{flex:1}}>

              <Text style={{color: 'white', fontSize:17, textAlign:'center', backgroundColor:'black', padding:7}}>
                <Text style={{color: 'white', fontSize:17}}>KULLANICI İd'si : </Text>{this.state.Kullanici}</Text>

             <ScrollView style={{flex:1,minHeight:360}}>
                {this.userListView()}
                </ScrollView>

            <FlatList style = {{marginTop:10,flex:1,minHeight:257,backgroundColor: 'white'}}

                let data = {this.state.users}
                renderItem={({item})=>{

                    return(
                       <TouchableOpacity onPress={()=>this.handlePress(item.id)} style={{minHeight: 30, backgroundColor: 'white'}}>
                           <Text style={{fontSize:18,color:'black', backgroundColor:'cyan',textAlign:'center'}}>{item.id}</Text>
                       </TouchableOpacity> 
                    )
                }
            }
            />

                
        </View>
            

        )
    }
}