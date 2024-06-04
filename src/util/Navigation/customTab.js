import { Ionicons } from '@expo/vector-icons';
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

                    let iconName;
                    // Renders icon based on name
                    switch (label) {
                        case 'Play':
                            if (isFocused) {
                                iconName = 'play';
                            } else {
                                iconName = 'play';
                            }
                            break;
                        case 'Fixture':
                            if (isFocused) {
                                iconName = 'ribbon';
                            } else {
                                iconName = 'ribbon';
                            }
                            break;
                        case 'Account':
                            if (isFocused) {
                                iconName = 'person';
                            } else {
                                iconName = 'person';
                            }
                            break;
                    };

                    return (
                        <Pressable
                            role="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[styles.navItem]}
                            key={index}
                        >

                            <Ionicons name={iconName} size={28} color={isFocused ? '#060612' : '#939398'} />

                            {/* Screen name conditional rendering if page is active */}
                            <Text style={[styles.navText, {
                                color: isFocused ? '#060612' : '#C1C3CC',
                                // fontWeight: isFocused ? 'bold' : 'bold',
                                fontFamily: 'Mona-Sans Wide SemiBold'
                            }]}>
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
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: '#E7E7E1',
        borderTopWidth: 1,
        height: 75,
    },
    animateItem: {
        flex: 1,
    },
    navItem: {
        gap: 10,
        alignItems: 'center'
    },
    navText: {
        marginTop: -7,
        fontSize: 10,
    }
})