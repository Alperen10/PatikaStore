import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';

import product_data from './product_data.json';
import ProductCard from './components/ProductCard';

function App() {
  const renderProduct = ({item}) => <ProductCard product={item} />;
  const [text, onChangeText] = React.useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>

      <FlatList
        numColumns={2}
        ListHeaderComponent={() => (
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Ara..."
          />
        )}
        keyExtractor={item => item.id.toString()}
        data={product_data}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'purple',
    textAlign: 'center',
  },
  input: {
    height: 50,
    margin: 15,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
  },
});

export default App;
