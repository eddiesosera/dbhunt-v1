import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, Animated } from 'react-native';;

export const CustomTab = ({ state, descriptors, navigation }) => {
    let screenWidth = Dimensions.get('window').width

    return (
        <View style={[styles.container]}>
            {
                state.routes.map((route, index) => {
                    // Assigning variables
                    const { options } = descriptors[route.key];
                    // Assigns the `label` variable with the route name
                    const label = options.tabBarLabel !== undefined
                        ? options.tabBarLabel : options.title !== undefined
                            ? options.title : route.name;
                    const isFocused = state.index === index;
                    console.log(state)
                    // Event handlers
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };
                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (

                        <Pressable
                            role="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.navItem}
                            key={index}
                        >
                            {/* <Icon variant={isFocused ? 'fill' : 'outline'} name={iconName} 
                            fill={isFocused ? '#B7BAFF' : '#6F6C76'} size={28} /> */}

                            {/* Screen name conditional rendering if page is active */}
                            <Text style={[styles.navText, { color: isFocused ? 'red' : '#6F6C76', }]}>
                                {label}
                            </Text>
                        </Pressable>

                    );
                })
            }
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        padding: 20
    },
    animateItem: {
        flex: 1,
        // width: '100%',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // gap: 2,
    },
    navItem: {
        // flex: 1,
        // width: '100%',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // gap: 5,
    },
    navText: {
        marginTop: -7,
        fontSize: 16,
        color: '#000'
        // fontFamily: "Jakarta",
    }
})