import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row'
    },
    greeting: {
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        color: theme.colors.heading,
        marginRight: 6
    },
    username: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    },
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.secondary30,
        alignSelf: 'center',
        marginTop: 13
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'right',
        fontFamily: theme.fonts.text500
    },
    signOut: {
        marginTop: 10,
        marginBottom: 30,
        borderRadius: 10,
        width: '50%',
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary
    },
    modalContainer: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'flex-end',
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 25,
    },
    modalUsername: {
        fontFamily: theme.fonts.title700,
        fontSize: 38,
        color: theme.colors.heading
    },
    modalEmail: {
        fontFamily: theme.fonts.title500,
        fontSize: 18,
        color: theme.colors.heading,
        marginRight: 6
    },
    modalUserInfo: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    modalAvatar: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});