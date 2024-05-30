import * as Font from 'expo-font';

export const LoadFonts = async (getFontsLoadedState) => {

    let isFontLoadeed = false;
    await Font.loadAsync({
        // Mona Sans Wide
        'Mona-Sans Wide Black': require('./Mona Sans/Mona-Sans-BlackWide.ttf'),
        'Mona-Sans Wide Bold': require('./Mona Sans/Mona-Sans-BoldWide.ttf'),
        'Mona-Sans Wide SemiBold': require('./Mona Sans/Mona-Sans-SemiBoldWide.ttf'),
        'Mona-Sans Wide Medium': require('./Mona Sans/Mona-Sans-MediumWide.ttf'),
        'Mona-Sans Wide': require('./Mona Sans/Mona-Sans-RegularWide.ttf'),
        'Mona-Sans Wide Light': require('./Mona Sans/Mona-Sans-LightWide.ttf'),

        // Mona Sans Regular
        'Mona-Sans Black': require('./Mona Sans/Mona-Sans-Black.ttf'),
        'Mona-Sans Bold': require('./Mona Sans/Mona-Sans-Bold.ttf'),
        'Mona-Sans SemiBold': require('./Mona Sans/Mona-Sans-SemiBold.ttf'),
        'Mona-Sans Medium': require('./Mona Sans/Mona-Sans-Medium.ttf'),
        'Mona-Sans': require('./Mona Sans/Mona-Sans-Regular.ttf'),
        'Mona-Sans Light': require('./Mona Sans/Mona-Sans-Light.ttf'),

        // Obrazec
        'Obrazec': require('./Obrazec/obrazec.otf'),

        // Saiyans Sans
        'Saiyans Sans': require('./Saiyan Sans/Saiyan-Sans.ttf'),
        'Saiyans Sans Left Oblique': require('./Saiyan Sans/Saiyan-Sans Left Oblique.ttf'),
        'Saiyans Sans Right Oblique': require('./Saiyan Sans/Saiyan-Sans Right Oblique.ttf'),
    });

    isFontLoadeed = true;
    getFontsLoadedState(isFontLoadeed)

};
