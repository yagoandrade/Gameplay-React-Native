import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    urlImage: string;
}

export function ModalAvatar({ urlImage }: Props) {
    const { secondary40, secondary100 } = theme.colors;

    return(
        <View>
            <LinearGradient style={styles.container} colors={[theme.colors.discord, '#fafafa']}>
                <Image source={{ uri: urlImage }} style={styles.avatar}/>
            </LinearGradient>
        </View>
    );
}