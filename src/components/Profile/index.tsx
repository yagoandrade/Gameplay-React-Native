import React, { useState } from 'react';
import { View, Text, Alert, Modal, Pressable, TouchableWithoutFeedback} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';
import { ModalAvatar } from '../ModalAvatar';
import { styles } from './styles';
import { Background } from '../Background';
import { theme } from '../../global/styles/theme';


export function Profile() {
    const { user, signOut } = useAuth();
    const [openSignOutModal, setOpenSignOutModal] = useState(false);

    function handleOpenSignOut() {
        setOpenSignOutModal(true);
    }

    function handleCloseSignOut() {
        setOpenSignOutModal(false);
    }


    function handleSignOut() {
        Alert.alert('Logout', 'Deseja sair do Gameplay?',
        [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => signOut()
            }
        ])
    }

    return(
        <View style={styles.container}>
            <RectButton onPress={handleOpenSignOut}>
                <Avatar urlImage={user.avatar} />
            </RectButton>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        { user.firstName }
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View> 

            <Modal
                transparent
                animationType="slide"
                statusBarTranslucent
                visible={openSignOutModal}
                closeModal={handleCloseSignOut}
            >
                <TouchableWithoutFeedback onPress={handleCloseSignOut}>
                    <View style={styles.overlay}>
                        <View style={styles.modalContainer}>
                            <Background>
                                <View style={styles.bar} />
                                <View style={styles.modalAvatar}>
                                    <ModalAvatar urlImage={user.avatar} />
                                </View>
                                <View style={styles.modalUserInfo}>
                                    <Text style={styles.modalUsername}>
                                        { user.username }
                                    </Text>
                                    <Text style={styles.modalEmail}>
                                        { user.email }
                                    </Text>
                                </View>
                                <Pressable onPress={handleSignOut} style={styles.signOut}>
                                    <View style={styles.button}>
                                        <Text style={styles.title}>Sair do aplicativo</Text>
                                    </View>
                                </Pressable>
                            </Background>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}