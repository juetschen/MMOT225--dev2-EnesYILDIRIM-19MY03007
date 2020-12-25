import React from 'react';
import {FlatList, Text, View, ScrollView,TouchableOpacity} from 'react-native';
export default class PlaceHolder extends React.Component{
    constructor(props){
        super(props);
        this.state={
        e:[],
        }
    }
    componentDidMount = async ()=>{
        let aa =  await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r=>r.json());
        
            this.setState({e:aa})
    };
    handlePress = id =>{
        this.setState({y:id})
    }
    lst(){
        let render=[];
        this.state.e.map((v,k)=>{

            if(v.id===this.state.y){
               render.push(
               <Text style={{minHeight:75, fontSize:16, paddingLeft:5, marginTop:21}}>
              <Text style={{ fontSize:16,color:'magenta'}}>id:</Text> {v.id}
               <Text style={{ fontSize:16, color:'magenta'}}>{"\n"}title:</Text>{v.title}
               <Text style={{ fontSize:16,color:'magenta'}}>{"\n"}body:</Text>{v.body}</Text>
               )
            }
        }
        )
        return render
    }
    render(){
        return(
        <View style={{flex:1}}>
            <FlatList style = {{marginTop:10,flex:1,minHeight:257,backgroundColor: 'black'}}
                let data = {this.state.e}
                renderItem={({item})=>{
                    return(
                       <TouchableOpacity onPress={()=>this.handlePress(item.id)} style={{textAlign:'center', minHeight: 20, backgroundColor: 'white'}}>
                           <Text style={{textAlign:'center',color:'cyan', backgroundColor:'gray',fontSize:18}}>{item.title}</Text>
                       </TouchableOpacity> 
                    )
                }
                }
                />
             <ScrollView style={{flex:1,minHeight:400}}>
                {this.lst()}
                </ScrollView>
            <Text style={{color: 'white', fontSize:17, textAlign:'center', backgroundColor:'black', padding:7}}></Text>
        </View>
        )
    }
}