import React from 'react';
import { ImageBackground, View, Text, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';
import { ListDivider} from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

import { Header } from '../../components/Header';
import BannerImg from '../../assets/banner.png';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Yago',
            avatar_url: 'https://xesque.rocketseat.dev/users/avatar/profile-0f41ad84-4376-4bc0-878c-cf7b8b127001-1634262213931.jpg',
            status: 'online'
        },
        {
            id: '2',
            username: 'Joel',
            avatar_url: 'https://instagram.fmcz3-1.fna.fbcdn.net/v/t51.2885-15/e35/212027852_263887112172437_8254027476799568618_n.jpg?_nc_ht=instagram.fmcz3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=UEOczt7dcPQAX_75dLg&edm=ALQROFkBAAAA&ccb=7-4&oh=60c6379ab1fd837c2bbfcd3cd7bb6195&oe=618403DA&_nc_sid=30a2ef&ig_cache_key=MjYxNDM3NTM3NDU5MTYxOTI4Mg%3D%3D.2-ccb7-4',
            status: 'offline'
        },
        {
            id: '3',
            username: 'Irving',
            avatar_url: 'https://media-exp1.licdn.com/dms/image/C4E03AQF5M19iFu9i2w/profile-displayphoto-shrink_800_800/0/1596239491774?e=1640822400&v=beta&t=mn_V4lEJqYP_Yfj-7zJLzq0noqUkDhQLYKJl-y58JNE',
            status: 'offline'
        }
    ]

    return(
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto name="share" size={24} color={theme.colors.primary}/>
                    </BorderlessButton>
                }
            />
            <ImageBackground source={BannerImg} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}> Lendários </Text>
                    <Text style={styles.subtitle}>É hoje que vamos chegar no challenger sem perder uma partida da MD10 </Text>
                </View>
            </ImageBackground>
            <ListHeader title="Jogadores" subtitle="Total 3"/>
            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    );
}