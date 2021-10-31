import React from 'react';
import { View, Image } from 'react-native';

import DiscordSVG from '../../assets/discord.svg'

import { styles } from './styles';

const { CDN_IMAGE } = process.env;

type Props = {
    guildId: string;
    iconId: string | null;
}

export function GuildIcon({ guildId, iconId} : Props) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
    //'https://i1.sndcdn.com/avatars-000610519161-0wdlr0-t500x500.jpg';

    return(
        <View style={styles.container}>
            {
                iconId ?    <Image source={{ uri }} style={styles.image} resizeMode='cover' /> :
                            <DiscordSVG  width={40} height={40} />
            }
        </View>
    );
}