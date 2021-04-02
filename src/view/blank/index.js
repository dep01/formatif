import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import {view} from 'react-easy-state';
import tinycolor from 'tinycolor2';
import {sys_colors} from '../../utils/constants';
import {GlobalHeader} from '../../components';
import * as store from './store';

const {width} = Dimensions.get('window');
export default view(({navigation}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [navigation, store]);
  const renderItem = (item, index) => {
    var color = store.RandomColor();
    console.log(item.index);
    return (
      <View
        key={item.index}
        style={[
          styles.containerConten,
          {
            backgroundColor: color,
          },
        ]}>
        <Text
          style={{
            color: tinycolor(color).isLight() ? '#000' : '#fff',
            fontSize: 16,
          }}>
          {item.index + 1}
        </Text>
        <Text
          style={{
            color: tinycolor(color).isLight() ? '#000' : '#fff',
            fontSize: 14,
          }}>
          {color}
        </Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <GlobalHeader title="gridview" type="primary" />
      <View style={styles.page}>
        <FlatList
          renderItem={renderItem}
          numColumns={4}
          columnWrapperStyle={{alignItems: 'center', justifyContent: 'center'}}
          data={store.state.array}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: sys_colors.primary,
  },
  containerConten: {
    width: width * 0.2,
    borderRadius: 5,
    margin: 5,
    height: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
