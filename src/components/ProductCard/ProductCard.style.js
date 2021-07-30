import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 15,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    width: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    marginTop: 5,
    color: '#333333',
    fontWeight: "bold",
    fontSize: 16,
  },
  inner_container: {
    padding: 5,
  },
  inStock:{
    color: 'red',
    marginTop: 5,
  },
});
