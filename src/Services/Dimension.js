import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const rw = widthPercent => {
  return widthPercent * windowWidth;
};

export const rh = heightPercent => {
  return heightPercent * windowHeight;
};
