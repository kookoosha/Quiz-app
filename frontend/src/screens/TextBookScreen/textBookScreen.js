import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;

const styles = StyleSheet.create({
  container: {
    // width: deviceWidth - 20,
    // alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },

  cardContainer: {
    flex: 1,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    backgroundColor: '#a29bfe',
    height: 150,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },

});

export default styles;
