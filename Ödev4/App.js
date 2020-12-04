import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

let marmara = [
{Adı:"34 İstanbul",nüfusu:"15.519.267"},
{Adı:"41 Kocaeli",nüfusu:"1.953.035"},
{Adı:"10 Balıkesir",nufus:"1.228.620"},
{Adı:"17 Çanakkale",nüfusu:"542.157"},
{Adı:"54 Sakarya",nüfusu:"1.029.650"},
{Adı:"59 Tekirdağ",nüfusu:"1.055.412"},
{Adı:"22 Edirne",nüfusu:"413.903"},
{Adı:"39 Kırklareli",nüfusu:"361.836"},
{Adı:"77 Yalova",nüfusu:"270.976"},
{Adı:"11 Bilecik",nüfusu:"219.427"}];

let ege = [
{Adı:"35 İzmir",nüfusu:"4.367.251"},
{Adı:"45 Manisa",nüfusu:"1.440.611"},
{Adı:"9 Aydın",nüfusu:"1.110.972"},
{Adı:"20 Denizli",nüfusu:"1.037.208"},
{Adı:"48 Muğla",nüfusu:"983.142"},
{Adı:"3 Afyonkarahisar",nüfusu:"729.483"},
{Adı:"43 Kütahya",nüfusu:"579.257"},
{Adı:"64 Uşak",nüfusu:"370.509"}];

let icanadolu = [
{Adı:"06 Ankara",nüfusu:"5.639.076"},
{Adı:"42 Konya",nüfusu:"2.232.374"},
{Adı:"38 Kayseri",nüfusu:"1.407.409"},
{Adı:"26 Eskişehir",nüfusu:"887.475"},
{Adı:"58 Sivas",nüfusu:"638.956"},
{Adı:"66 Yozgat",nüfusu:"421.200"},
{Adı:"68 Aksaray",nüfusu:"416.367"},
{Adı:"51 Niğde",nüfusu:"362.861"},
{Adı:"50 Nevşehir",nüfusu:"303.010"},
{Adı:"71 Kırıkkale",nüfusu:"283.017"},
{Adı:"70 Karaman",nüfusu:"253.279"},
{Adı:"40 Kırşehir",nüfusu:"242.938"},
{Adı:"18 Çankırı",nüfusu:"195.789",}];

let akdeniz = [
{Adı:"07 Antalya",nüfusu:"2.511.700"},
{Adı:"01 Adana",nüfusu:"2.237.940"},
{Adı:"33 Mersin",nüfusu:"1.840.425"},
{Adı:"31 Hatay",nüfusu:"1.628.894"},
{Adı:"46 Kahramanmaraş",nüfusu:"1.154.102"},
{Adı:"80 Osmaniye",nüfusu:"538.759"},
{Adı:"32 Isparta",nüfusu:"444.914"},
{Adı:"15 Burdur",nüfusu:"270.796"}];

let doguanadolu = [
{Adı:"44 Malatya",nüfusu:"800.165"},
{Adı:"65 Van",nüfusu:"1.136.757"},
{Adı:"25 Erzurum",nüfusu:"762.062"},
{Adı:"23 Elazığ",nüfusu:"591.098"},
{Adı:"04 Ağrı",nüfusu:"536.199"},
{Adı:"73 Şırnak",nüfusu:"529.615"},
{Adı:"49 Muş",nüfusu:"408.809"},
{Adı:"13 Bitlis",nüfusu:"348.115"},
{Adı:"36 Kars",nüfusu:"285.410"},
{Adı:"12 Bingöl",nüfusu:"279.812"},
{Adı:"24 Erzincan",nüfusu:"234.747"},
{Adı:"76 Iğdır",nüfusu:"199.442"},
{Adı:"30 Hakkari",nüfusu:"280.991"},
{Adı:"75 Ardahan",nüfusu:"97.319"},
{Adı:"62 Tunceli",nüfusu:"84.660"}];

let guneydoguanadolu = [
{Adı:"63 Şanlıurfa",nüfusu:"2.073.614"},
{Adı:"27 Gaziantep",nüfusu:"2.069.364"},
{Adı:"21 Diyarbakır",nüfusu:"1.756.353"},
{Adı:"47 Mardin",nüfusu:"838.778"},
{Adı:"02 Adıyaman",nüfusu:"626.465"},
{Adı:"72 Batman",nüfusu:"608.659"},
{Adı:"56 Siirt",nüfusu:"330.280"},
{Adı:"79 Kilis",nüfusu:"142.490"}];

let karadeniz = [
{Adı:"55 Samsun",nüfusu:"1.348.542"},
{Adı:"61 Trabzon",nüfusu:"808.974"},
{Adı:"52 Ordu",nüfusu:"754.198"},
{Adı:"60 Tokat",nüfusu:"612.747"},
{Adı:"67 Zonguldak",nüfusu:"596.053"},
{Adı:"19 Çorum",nüfusu:"530.864"},
{Adı:"28 Giresun",nüfusu:"448.400"},
{Adı:"81 Düzce",nüfusu:"392.166"},
{Adı:"37 Kastamonu",nüfusu:"379.405"},
{Adı:"53 Rize",nüfusu:"343.212"},
{Adı:"05 Amasya",nüfusu:"337.800"},
{Adı:"14 Bolu",nüfusu:"316.126"},
{Adı:"78 Karabük",nüfusu:"248.458"},
{Adı:"57 Sinop",nüfusu:"218.243"},
{Adı:"74 Bartın",nüfusu:"198.249"},
{Adı:"08 Artvin",nüfusu:"170.875"},
{Adı:"29 Gümüşhane",nüfusu:"164.521"},
{Adı:"69 Bayburt",nüfusu:"84.843"}];

let bölgeler = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liste: bölgeler };
  }
  EgeBölgesi() {
    this.setState({liste:ege});
  }
  AkdenizBölgesi() {
    this.setState({liste:akdeniz});
  }
  KaradenizBölgesi() {
    this.setState({liste:karadeniz});
  }
  IcAnadoluBölgesi() {
    this.setState({liste:icanadolu});
  }
  GuneyDoguAnadoluBölgesi() {
    this.setState({liste:guneydoguanadolu});
  }
  MarmamaraBölgesi() {
    this.setState({liste:marmara});
  }
  DoguAnadoluBölgesi() {
    this.setState({liste:doguanadolu});
  }

  render(){

  return (
    <>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.ust}>
          <TouchableOpacity onPress={() => this.MarmamaraBölgesi()}>
            <Text style={{marginBottom:6}}>Marmara Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.EgeBölgesi()}>
            <Text style={{marginBottom:6}}>Ege Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.AkdenizBölgesi()}>
            <Text style={{marginBottom:6}}>Akdeniz Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.IcAnadoluBölgesi()}>
            <Text style={{marginBottom:6}}>İç Anadolu Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.DoguAnadoluBölgesi()}>
            <Text style={{marginBottom:6}}>Doğu Anadolu Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.GuneyDoguAnadoluBölgesi()}>
            <Text style={{marginBottom:6}}>Güney Doğu Anadolu Bölgesi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.KaradenizBölgesi()}>
            <Text style={{marginBottom:6}}>Karadeniz Bölgesi</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.alt}>
          <FlatList
            data={this.state.liste}
            renderItem={({item}) => (
              <ScrollView>
              <View style={{flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexWrap: 'wrap'}}>
                <Text style={styles.yazdırılan}> {item.Adı} - {item.nüfusu}</Text>
              </View>
              </ScrollView>
              )}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
};

const styles = StyleSheet.create({
    bolgeler:{
      fontSize: 15,
      fontWeight: "bold",
      marginBottom:5
    },
    yazdırılan:{
      flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        fontSize: 15,
        fontWeight: "bold"
    },
    safearea:{
      flex:1
    },
    ust:{
      flex:1,
      borderWidth:1,
      backgroundColor: 'white',
    },
    alt:{
      flex: 1,
      borderWidth:1,
      backgroundColor: 'cyan'
    }
});

export default App;