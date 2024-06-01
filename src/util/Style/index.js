import { StyleSheet } from "react-native";

export const GlobalStyle = StyleSheet.create({

    // BUTTONS
    PrimaryFillButton: {
        backgroundColor: '#FFB10A',
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 15,
        // width: '100%',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center',
    },
    PrimaryFillButtonText: {
        color: '#141310',
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
    PrimaryIconButton: {
        borderRadius: 10,
        backgroundColor: '#FFB10A',
        alignItems: 'center',
        width: 60,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: -5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 4
    },

    // INPUT FIELDS
    inputField: {
        padding: 15,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#D8D2C9',
        borderRadius: 8,
        width: '100%',
        fontFamily: 'Mona-Sans Wide',
    },
    inputText: {
        fontFamily: 'Mona-Sans Wide',
    }
})