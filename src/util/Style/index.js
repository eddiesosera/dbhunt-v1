import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({
    PrimaryFillButton: {
        backgroundColor: '#3D58F2',
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 15,
        width: '100%',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
        // fontFamily: 'Mona-Sans Wide Bold'
    },
    PrimaryFillButtonText: {
        color: '#F4F1ED',
        fontSize: 16,
        fontFamily: 'Mona-Sans Wide Bold'
    },
    LightOutlineButton: {
        // backgroundColor: '#3D58F2',
        borderWidth: 1,
        borderColor: '#CDCDCD',
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 15,
        width: '100%',
        flexDirection: 'row',
        gap: 5,
        // fontFamily: 'Mona-Sans Wide Bold'
    },
    LightOutlineButtonText: {
        color: '#393939',
        fontSize: 16,
        fontFamily: 'Mona-Sans Wide Bold'
    },
})