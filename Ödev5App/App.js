/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NewsItem from './haber.js';

const App: () => React$Node = () => {
  return (
    <SafeAreaView>
      <View>
          <Text style={styles.anabaslik}>
              GÜNÜN HABERLERİ
          </Text>
      </View>
    <ScrollView>
      <NewsItem type='Siyaset' title="Eski Bakan Nevzat Ayaz son yolculuğuna uğurlandı" description="Eski Milli Savunma ve Milli Eğitim Bakanı Nevzat Ayaz Zincirlikuyu Cami'inde kılınan cenaze namazının ardından toprağa verildi." />
      <NewsItem type='Siyaset' title="Karşımızda Susuyorlar ....." description="Cumhurbaşkanı Erdoğan, PYD'yi terör örgütü olarak görmediğini açıklayan ABD'lilere tepkisini sürdürdü." />
      <NewsItem type='Spor' title="Fenerbahçe puan kaybetti." description="Fenerbahçe ve Beşiktaş maçında sevinen taraf beşiktaş oldu." />
      <NewsItem type='Spor' title="Türk sporunun övünç gecesi." description= "Volkswagen Arena’da düzenlenen gecede dünya şampiyonu güreşçimiz Rıza Kayaalp, ‘Yılın Sporcusu’ kategorisinde birincilik kürsüsüne oturdu." />
      <NewsItem type='Spor' title="Domagoj Vida maçtan covid-19 olduğu öğrenilince çıkartıldı" description="Hırvatistan Futbol Federasyonu, Türkiye maçında 45 dakika oynayan Beşiktaşlı Domagoj Vida'nın corona virüs testinin pozitif çıktığını açıkladı." />
      <NewsItem type='Ekonomi' title="Altında Büyük Düşüş!!" description="Altının gram fiyatı, kasım ayını yüzde 11,3 düşüşle 447,2 lira seviyesinden tamamladı ve tarihi düşüş kaydetti." />
      <NewsItem type='Ekonomi' title="Dünya gıda fiyatları endeksi 6 yılın zirvesinde" description="Kasım ayında dünya gıda fiyatları endeksi son 6 yılın en yüksek seviyesine ulaştı. Bitkisel yağ fiyatları ise palm yağı fiyatlarındaki yükselişin etkisiyle aylık yüzde 14.5 artışla endeksin genelindeki yükselişe öncülük etti"/>
      <NewsItem type='Ekonomi' title="Vergi borcu yapılandırma nasıl yapılır? İşte vergi borcu yapılandırma başvuru ekranı ve vergi borcu taksitlendirmesi" description="Vergi borcu yapılandırma kanununun kabul edilmesinin ardından borcu bulunan milyonlarca vatandaş vergi borcu yapılandırma başvurusu nasıl yapılır?" />
      <NewsItem type='Sağlık' title="Kan damarlarını incelten gıdalara dikkat!" description="Bazen kan damarlarınız vücut ısısı kaybını azaltmak, kan basıncını dengelemek, belirli organlara oksijen ve besin göndermek, kan veya sıvı kaybını önlemek için daralır." />
      <NewsItem type='Sağlık' title="Covid-19 salgınında son durum ne? " description="Dünyada yeni tip koronavirüs (COVID-19) vaka sayısı 64 milyon 214 bini geçti. Dünya genelinde 1 milyon 487 bin 112 kişi yaşamını yitirirken, 44 milyon 462 bin 715 kişi de virüsü yenerek iyileşti. Dünya Sağlık Örgütü'nün verilerine göre dünya genelinde son 24 saatte 453 bin 170 yeni vaka açıklandı." />
      <NewsItem type='Sağlık' title="Covid-19 Aşısı Ne Zaman Geliyor ?" description=" En erken 15 Aralık’tan sonra ruhsat alınabilir. FDA'ye müracaat edildi. Türkiye’ye verebileceği 1 milyon. Ocak ayından itibaren tedrici yıl içinde 25 milyona kadar olabileceği yönünde görüşmelerimiz var." />
      <NewsItem type='Bilim' title="Utah'da Bulunan Gizemli Monolit (Dünya Dışı Varlıklar Mı Getirdi )" description="Utah'ta bulunan bu monolit, helikopter ile oradan geçenler tarafından şans eseri fark edilmişti ve bir süredir orada olduğu düşünülüyordu. Monolotin gizemli bir şekilde ortaya çıkmasının ardından geçtiğimiz günlerde de monolit gizemli bir şekilde kayboldu." />
      <NewsItem type='Bilim' title='Karadeliklerin Gizemi!' description='Karadelikler uzay-zamanı işte böyle büküyor.'/>
      <NewsItem type='Bilim' title="Biyolojinin en büyük gizemlerinden biri yapay zeka sayesinde ‘büyük oranda çözüldü’" description="Yapay zeka programının pahalı ve uzun zaman alan laboratuvar yöntemleriyle kıyaslanabilecek bir başarıyla proteinlerin şekillerini ortaya koyabileceği belirtiliyor." />
    </ScrollView>
  
</SafeAreaView>
);
};


const styles = StyleSheet.create({
  anabaslik:{
    fontSize: 40,
    fontWeight: "bold"
  }
});
export default App;