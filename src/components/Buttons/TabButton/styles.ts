import {StyleSheet} from 'react-native';

import {Colors} from '@/const';

export const tabButtonStyles = StyleSheet.create({
  container: {
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    width: '33%',
    marginRight: 10,
  },
  bgActive: {
    backgroundColor: Colors.primary,
  },
  bgGrey: {
    backgroundColor: Colors.grey,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  textActive: {
    color: Colors.white,
  },
  textGrey: {
    color: Colors.greyText,
  },
});
