import React from 'react';
import {View,Text, ScrollView,TouchableOpacity} from 'react-native';

export default class Restoran_Getir extends React.Component{
  constructor(props){
    super(props)
    this.state={
      restoranlar:null,
      müsteriyorumlari:[]
    }
  }
  componentDidMount(){
    fetch('https://developers.zomato.com/api/v2.1/search?entity_type=city&q=ist&sort=rating&order=desc',{
      method:'GET',
      headers:{
        'user-key':'189dbe98536ba10a3129ce129789765d'
      }
    })
    .then(r=>{
      return r.json();
    })
    .then(res=>{
      this.setState({restoranlar:res.restaurants});
    })
    .catch(e=>{
      console.warn('error: ', e);
    });
  }
  tiklandi(id){
    var str = 'https://developers.zomato.com/api/v2.1/reviews?res_id=16694272';  //"https://developers.zomato.com/api/v2.1/reviews?res_id=7   https://developers.zomato.com/api/v2.1/reviews?res_id=16694272
    fetch(str,{
      method:'GET',
      headers:{
        'user-key':'189dbe98536ba10a3129ce129789765d'
      }
    })
    .then(r=>{
      return r.json();
    })
    .then(res=>{
      this.setState({müsteriyorumlari:res.user_reviews});
    })
    .catch(e=>{
      console.warn('error: ', e);
    });
  }
  render(){
    if (!this.state.restoranlar){
      return (<View><Text>Bekleniyor</Text></View>);
    }
    return(
      <View>
        <ScrollView style={{backgroundColor:'pink'}} >
        {
          this.state.restoranlar.map(v=>{
            return(<TouchableOpacity onPress={()=>this.tiklandi(v.restaurant.id)}>
              <Text key={v.restaurant.id}>{v.restaurant.name}</Text>
              </TouchableOpacity>)
          })
        }
        </ScrollView>
        
          <Text>İlgili Restoran'ın Müşteri Yorumları</Text>
          <ScrollView style={{backgroundColor:'gray',padding:20}} >
            {this.state.müsteriyorumlari.map(v=>{
              return(<Text key={v.review.id}>{v.review.review_text}</Text>)
            })}
          </ScrollView>
        </View>
      

)

  }
}