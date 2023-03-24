import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  navBar: {
    height: 48,
    justifyContent: 'center',
    width: 20,
  },
  title: {
    color: '#394452',
    fontSize: 33,
    fontFamily: 'SourceSansPro-SemiBold',
    marginBottom: 40,
    marginTop: 106,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  inputWrapper: {
    width: 60,
    height: 55,
    backgroundColor: '#F0EFFF',
    marginRight: 20,
    borderRadius: 12,
  },
  input: {
    padding: 10,
    color: '#2C3A4B',
    fontSize: 23,
  },
  buttonWrapper: {
    marginTop: 260,
    // justifyContent: 'flex-end',
  },
  text: {
    marginTop: 40,
    textAlign: 'center',
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    // marginBottom: 50,
  },
  spacer: {
    marginTop: 100,
  },
});
