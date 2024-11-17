import "dotenv/config";

export default {
  expo: {
    name: "dbhunt",
    slug: "dbhunt",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: ["expo-location"],
    newArchEnabled: true,
    extra: {
      eas: {
        config: {
          googleMaps: {
            apiKey: "${process.env.GOOGLE_API}",
          },
        },
        projectId: "${GOOGLE_PROJECT_ID}",
      },
    },
  },
};
