import {StyleSheet} from 'react-native';

import {Colors} from '@/const';

export const addressStyles = StyleSheet.create({
  addressSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
    paddingRight: 20,
  },
  textWhite: {
    color: Colors.white,
  },
  address: {
    color: Colors.greyText,
    fontSize: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
});
