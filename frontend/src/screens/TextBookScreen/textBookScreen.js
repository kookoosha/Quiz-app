import { StyleSheet, Dimensions } from 'react-native';

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  cardContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    backgroundColor: '#a29bfe',
    height: 130,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 9,
      height: 9,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },

});

export default styles;
