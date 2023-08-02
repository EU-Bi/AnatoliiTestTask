import React, {useEffect} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../redux/actions';
import {BasketItem, RootState} from '../interface/interfaceProduct';
import {addItemToBasket} from '../redux/reducerBasket';

const CatalogScreen = () => {
  const products = useSelector(
    (state: RootState) => state.root.product.products,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const handleAddToBasket = (product: BasketItem) => {
    dispatch(addItemToBasket(product));
  };

  return (
    <ScrollView style={styles.container}>
      {products.map((product: BasketItem) => (
        <View style={styles.card} key={product.id}>
          <View style={styles.wrapPhotoTitle}>
            <Image style={styles.img} source={{uri: product.images[0]}} />
            <Text>{product.brand}</Text>
            <Text>{product.title}</Text>
          </View>
          <Button
            title="Add to basket"
            onPress={() => handleAddToBasket(product)}
          />
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 80,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20,
  },
  wrapPhotoTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
  img: {
    width: 300,
    height: 300,
    objectFit: 'fill',
  },
});

export default CatalogScreen;
