import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
    const uri = 'https://i1.sndcdn.com/avatars-000610519161-0wdlr0-t500x500.jpg';

    return(
        <Image source={{ uri }} style={styles.image} resizeMode='cover' />
    );
}