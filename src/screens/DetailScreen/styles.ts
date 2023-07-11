import {StyleSheet} from 'react-native';

import {Colors, height, width} from '@/const';

export const detailScreenStyles = StyleSheet.create({
  map: {
    width: width,
    height: height,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 5,
  },
  modalHeadingDefault: {
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
  textWhite: {
    color: Colors.white,
  },
  backgroundWhite: {
    backgroundColor: Colors.white,
  },
  currentLocationButton: {
    position: 'absolute',
    top: -60,
    right: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  number: {
    fontSize: 20,
    fontWeight: '600',
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
  },
  carId: {
    color: Colors.greyText,
  },
  marginBottom2: {
    marginBottom: 2,
  },
  headerBackButton: {
    backgroundColor: Colors.white,
  },
  flex1: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  detailScreenTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginBottom15: {
    marginBottom: 15,
  },
  borderBottom: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 2,
  },
  contentContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  checkIconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.deepBlue,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginBottom: 40,
  },
  contentHeading: {
    color: Colors.deepBlue,
    fontSize: 20,
    fontWeight: '600',
  },
  contentHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  marginBottom40: {
    marginBottom: 40,
  },
  text16: {
    fontSize: 16,
  },
  fontWeight400: {
    fontWeight: '400',
  },
  fontWeight600: {
    fontWeight: '600',
  },
  textGrey: {
    color: Colors.greyText,
  },
});
