import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
    return(
        <View style={styles.container}>
            <Avatar urlImage="https://xesque.rocketseat.dev/users/avatar/profile-0f41ad84-4376-4bc0-878c-cf7b8b127001-1634262213931.jpg" />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        Yago
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View> 
        </View>
    );
}