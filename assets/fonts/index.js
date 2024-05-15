import * as Font from 'expo-font';

export const LoadFonts = async (getFontsLoadedState) => {

    let isFontLoadeed = false;
    await Font.loadAsync({
        // Mona Sans Wide
        'Mona-Sans Wide Black': require('./Mona Sans/Mona-Sans-BlackWide.ttf'),
        'Mona-Sans Wide Bold': require('./Mona Sans/Mona-Sans-BoldWide.ttf'),
        'Mona-Sans Wide SemiBold': require('./Mona Sans/Mona-Sans-SemiBoldWide.ttf'),
        'Mona-Sans Wide': require('./Mona Sans/Mona-Sans-RegularWide.ttf'),
    });

    isFontLoadeed = true;
    getFontsLoadedState(isFontLoadeed)

};
