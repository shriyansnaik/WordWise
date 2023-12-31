import {View, Image} from 'react-native';
import React from 'react';
import MyText from './MyText';

const UsernameLabel = ({username = 'Shriyans_Naik', size = 0, style}) => {
  var usernameFontSize = 14;
  var ppDimensions = 30;
  if (size != 0) {
    usernameFontSize += size / 2;
    ppDimensions += size;
  }

  return (
    <View style={[Styles.containerStyle, style]}>
      <Image
        style={Styles.profilePhotoStyle(ppDimensions)}
        source={require('../assets/images/profilepic.jpg')}
      />
      <MyText
        fontColor="white"
        fontWeight={700}
        fontSize={usernameFontSize}
        content={username}
      />
    </View>
  );
};

export default UsernameLabel;

const Styles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePhotoStyle: ppDimensions => ({
    height: ppDimensions,
    width: ppDimensions,
    marginRight: 7,
    borderRadius: 75,
  }),
};
