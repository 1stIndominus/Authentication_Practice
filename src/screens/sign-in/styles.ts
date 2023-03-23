import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  navBarContainer: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  checkboxWrapper: {
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkboxText: {
    color: '#2C3A4B',
    fontSize: 14,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  formWrapper: {
    flex: 1,
    marginTop: 80,
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginBottom: 40,
    height: 50,
  },
  title: {
    color: '#394452',
    fontSize: 33,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  highlightTitle: {
    color: '#6D5FFD',
  },
  resetPassword: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetPassText: {
    color: '#6D5FFD',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  signUpcontainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  signUpText: {
    color: '#858C94',
    fontFamily: 'SourceSansPro-Regular',
  },
});
