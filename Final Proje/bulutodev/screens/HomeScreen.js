import React, { useContext,Component} from 'react';
import { Container, Header, Content,Text, Left, Body, Right, Title, Tab, Tabs, Button ,onPress} from 'native-base';
import Tab1 from '../screens/tab/tab1';
import Tab2 from '../screens/tab/tab2';
import { AuthContext } from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';


const HomeScreen = ({navigation}) => {
    const {logout} = useContext(AuthContext);


   

    
    
   
        
        return (
            <Container>
                
                <Header style={{ backgroundColor: '#2427FF' }} hasTabs >
                    <Left />
                    <Body>
                       
                        <Title style={{ color: 'white' }}>Günün Haberleri</Title>
                        
                    </Body>
                    <Right />
                    
                </Header>
                <Tabs>
                    <Tab tabStyle={{ backgroundColor: '#2427FF' }}
                        activeTabStyle={{ backgroundColor: '#0000FE' }}
                        heading="Haber">
                        <Tab1 />
                    </Tab>
                    <Tab tabStyle={{ backgroundColor: '#2427FF' }}
                        activeTabStyle={{ backgroundColor: '#0000FE' }}
                        heading="Kaydedilmiş Haber">
                        <Tab2 />
                    </Tab>
                    </Tabs>
                    <Button  buttonTitle='Logout' onPress={() => logout()} ><Text>Çıkış Yap</Text></Button>
            </Container>
            
        );
    }
    export default HomeScreen;
