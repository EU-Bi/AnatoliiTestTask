import React from 'react';
import {Text, StyleSheet, ScrollView, View, Image, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../interface/interfaceProduct';
import {clearBasket, removeItemFromBasket} from '../redux/reducerBasket';

const BasketScreen = () => {
  const basket = useSelector((state: RootState) => state.root.basket);
  const dispatch = useDispatch();

  const handleDeleteOne = (id: number) => {
    dispatch(removeItemFromBasket(id));
  };
  const handleClearBasket = () => {
    dispatch(clearBasket());
  };
  return (
    <ScrollView style={styles.container}>
      <Button title="Очистить корзину" onPress={() => handleClearBasket()} />
      {basket.items.map(item => (
        <View style={styles.wrapPhotoTitle}>
          <Image style={styles.img} source={{uri: item.images[0]}} />
          <Text>{item.brand}</Text>
          <Text>{item.title}</Text>
          <Text>{item.quantity}</Text>

          <Button
            title="Удалить товар"
            onPress={() => handleDeleteOne(item.id)}
          />
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 90,
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  wrapPhotoTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  img: {
    width: 200,
    height: 200,
    objectFit: 'contain',
  },
});

export default BasketScreen;
