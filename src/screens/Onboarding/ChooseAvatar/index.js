import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// Import Character Images
import char1 from '../../../../assets/img/characters/goku-crop.png';
import char2 from '../../../../assets/img/characters/belma-crop.png';
import char3 from '../../../../assets/img/characters/vegeta-crop.png';
import char4 from '../../../../assets/img/characters/trunks-crop.png';
import char5 from '../../../../assets/img/characters/majin-boo.png';
import { GlobalStyle } from '../../../util/Style';
import { Ionicons } from '@expo/vector-icons';
import { getItem, updateItem } from '../../../util/Services/Data';

const width = Dimensions.get("screen").width;

export const ChooseAvatarScreen = ({ route }) => {
  const { data } = route.params;
  const [username, setUsername] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState('1')

  const navigation = useNavigation();
  const goToScreen = () => {
    navigation.navigate('Account', { screen: 'AccountStack' });
  };

  const characters = [
    {
      id: 'ADD_NEW',
      img: ''
    },
    {
      id: '1',
      img: char1
    },
    {
      id: '2',
      img: char2
    },
    {
      id: '3',
      img: char3
    },
    {
      id: '4',
      img: char4
    },
    {
      id: '5',
      img: char5
    },
  ];
  const viewSelectedAvatar = characters.find(avatar => avatar.id === selectedAvatar);

  const saveAvatar = async () => {
    // Save avatar to profile
    // Design and show Profile animation, THEN navigate to account
    if(selectedAvatar !== "1"){
      const updatePlayer = await updateItem("players",data.user,{avatar: selectedAvatar})
      navigation.navigate('Account', { screen: 'AccountStack' });
    }else{
      navigation.navigate('Account', { screen: 'AccountStack' });
    }

  };

  useEffect(()=>{
    const getNewPlayer = async () => {
      const user = await getItem("players", data?.user);
      setUsername(user.username)
    }

    getNewPlayer()

  },[username])

  return (
    <View style={styles.container}>

      <View style={styles.topWrap}>
        <View style={styles.topBannerWrap}>
          {
            viewSelectedAvatar ? (
              <Image source={viewSelectedAvatar.img} style={styles.topBannerImg} />
            ) :
              <Text style={{ fontFamily: 'Mona-Sans Wide SemiBold', color: '#666', padding: 20 }}>
                ``Missing Image``
              </Text>
          }
          {/* <Ionicons name="pin" size={18} color="black" /> */}
        </View>
        <View style={styles.topHeader}>
          <Text style={styles.topHeader}>Welcome,</Text>
          <Text style={styles.topHeader}>{username}</Text>
        </View>
      </View>

      <View style={styles.bottomWrap}>
        <View style={styles.bottomTopWrap}>

          <Text style={styles.bottomTopHeaderText}>Choose Your Avatar</Text>

          <View style={styles.bottomAvatarsWrap}>
            {
              characters.map((character, i) => {
                return (
                  character.id !== "ADD_NEW"
                    ? (<TouchableOpacity
                    key={i}
                      onPress={() => { setSelectedAvatar(character.id) }}
                      style={[
                        styles.bottomImgWrap, selectedAvatar === character.id && styles.selectedWrap,]}>
                      {
                        selectedAvatar === character.id
                          ? (<Image source={character.img} style={styles.bottomImg} />)
                          : (
                            <Image source={character.img} style={styles.bottomImg} />
                          )
                      }

                    </TouchableOpacity>)
                    : (<TouchableOpacity style={styles.bottomImgWrap}>
                      <Ionicons name="cloud-upload-outline" size={36} color="#55575D" />
                    </TouchableOpacity>)
                )
              })
            }
          </View>

        </View>

        <View style={styles.bottomBtmWrap}>
          <TouchableOpacity
            onPress={goToScreen}
            style={[GlobalStyle.LightOutlineButton, styles.bottomBtmButtonOutline]}>
            <Text style={GlobalStyle.LightOutlineButtonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={saveAvatar}
            style={[GlobalStyle.PrimaryFillButton, styles.bottomBtmButtonFill]}>
            <Text style={GlobalStyle.PrimaryFillButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF2',
  },

  // Top Half Section
  topWrap: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  topHeader: {
    fontSize: 30,
    fontFamily: 'Saiyans Sans',
    alignItems: 'center',
    gap: 5,
  },
  topBannerWrap: {
    borderWidth: 2,
    borderColor: '#EBEBE0',
    borderRadius: 10,
    // padding: 20,
  },
  topBannerImg: {
    width: 175,
    height: 175,
    objectFit: 'cover'
  },
  topBannerIcon: {

  },

  // Bottom Half Section
  bottomWrap: {
    flex: 2,
    backgroundColor: '#F6F6EE',
    borderWidth: 1,
    borderColor: '#E0E0DA',
    borderTopLeftRadius: 20,
    borderTopRighttRadius: 20,
    justifyContent: 'space-between',
    padding: 20
  },
  bottomTopWrap: {
    gap: 20,
  },
  bottomTopHeader: {

  },
  bottomTopHeaderText: {
    marginBottom: 20,
    fontFamily: 'Mona-Sans Wide Bold',
    fontSize: 24,
  },
  bottomAvatarsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // width: 'auto'
    // justifyContent: 'space-between',
    gap: 10,

  },
  bottomImgWrap: {
    width: (width / 3 - 7.4) - (2 * 6.65),
    height: (width / 3 - 7.4) - (2 * 6.65),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    padding: 20,
    borderRadius: 10,
  },
  selectedWrap: {
    backgroundColor: '#C9D0FB',
    borderWidth: 0,
  },
  bottomImg: {
    width: 75,
    height: 75,
    // ob,
  },

  bottomBtmWrap: {
    flexDirection: 'row',
    gap: 10,
  },
  bottomBtmButtonOutline: {
    width: (width * 0.4 - 25)
  },
  bottomBtmButtonFill: {
    width: (width * 0.6 - 25)
  },
})