import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { GlobalStyle } from '../../../../util/Style'

export const Bottom = () => {
  return (
    <View style={[styles.wrap]}>
      <TouchableOpacity style={[GlobalStyle.PrimaryIconButton, styles.playBtn]}>
        <Ionicons name="play" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.overviewWrap}>
        <Text style={styles.overviewText}>
          5 days left
        </Text>
        <View style={styles.separator}></View>
        <Text style={styles.overviewText}>
          2 balls left</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    // backgroundColor: '#fff',
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 1,
    width: '100%',
    alignSelf: 'flex-end',
    // paddingBottom: 10,
    // paddingHorizontal: 10
  },
  playBtn: {
    position: 'absolute',
    // top: 0,
    bottom: 15,
    right: 10
  },
  // OVERVIEW
  overviewWrap: {
    width: '100%',
    alignSelf: 'flex-end',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#C9D0FB',
    borderColor: '#3A4893',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    // borderRadius: 8,
  },
  overviewText: {
    fontFamily: 'Mona-Sans Wide Medium'
  },
  separator: {
    width: 1,
    height: '100%',
    backgroundColor: '#3A4893'
  }
})