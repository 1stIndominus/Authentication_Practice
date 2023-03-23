import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  mainTitleContainer: {
    justifyContent: 'center',
    marginTop: 70,
    marginBottom: 40,
  },
  mainTitle: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 33,
    color: '#394452',
  },
  navBarContainer: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  signInText: {
    color: '#858C94',
    fontFamily: 'SourceSansPro-Regular',
  },
  signUpcontainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  resetPassText: {
    color: '#6D5FFD',
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  checkboxWrapper: {
    marginBottom: 20,
    marginTop: 20,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  checkboxText: {
    color: '#2C3A4B',
    fontSize: 14,
    fontFamily: 'SourceSansPro-Regular',
  },
  highlightedText: {
    color: '#6D5FFD',
    fontSize: 14,
    fontFamily: 'SourceSansPro-Regular',
  },
});
