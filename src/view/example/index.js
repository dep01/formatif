import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {view} from 'react-easy-state';
import {sys_colors} from '../../utils/constants';
import {GlobalHeader, BackButton} from '../../components';
import * as store from './store';
import tinycolor from 'tinycolor2';

export default view(({navigation}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [navigation, store]);
  const renderItem = (item, index) => {
    var color = store.RandomColor();
    return (
      <View
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
          {`${item.index + 1}. code  : ${color}`}
        </Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <GlobalHeader
        title="ListView"
        type="secondary"
        right={
          <BackButton
            iconName="east"
            style={{alignItems: 'center'}}
            onPress={() => store.NavigateBlank({navigation})}
          />
        }
      />
      <View style={styles.page}>
        <FlatList
          renderItem={renderItem}
          style={{width: '100%'}}
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
    width: '100%',
    borderRadius: 5,
    marginBottom: 5,
    height: 50,
    justifyContent: 'center',
    padding: 5,
  },
});
