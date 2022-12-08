import { StyleSheet, Dimensions } from 'react-native';

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
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    backgroundColor: '#6200ef',
    height: 130,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },

  titleStyle: {
    fontSize: 21,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },

});

export default styles;
