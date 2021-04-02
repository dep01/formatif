import {store} from 'react-easy-state';
import {Alert} from 'react-native';
import {global_state} from '../../utils/global_store';

export const state = store({
  loading: true,
  count: 0,
  isMinus: false,
  array: [],
});
export async function initialized() {
  global_state.setLoading(true);
  var x = [];
  for (let index = 0; index < 40; index++) {
    x.push(index);
  }
  state.array = x;
  console.log(state.array);
  setTimeout(() => {
    global_state.setLoading(false);
  }, 1500);
}
export function cleanUp() {
  state.loading = false;
  state.count = 0;
  state.isMinus = false;
}
export function NavigateBlank({navigation}) {
  navigation.navigate('/blank');
}
export function PlusAction() {
  state.count++;
  global_state.toast?.current.show(state.count);
}
export function MinAction() {
  if (state.count > 0) {
    state.count--;
    global_state.toast?.current.show(state.count);
  } else {
    if (state.isMinus) {
      state.count--;
      global_state.toast?.current.show(state.count);
    } else {
      Alert.alert('Warning', 'Value is 0', [
        {
          text: 'close',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ]);
    }
  }
}
export function RandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export function AllowMinus() {
  if (state.count < 0) {
    state.isMinus = !state.isMinus;
    state.count = 0;
  } else {
    state.isMinus = !state.isMinus;
  }
}
export function TestLoading() {
  global_state.setLoading(true);
  setTimeout(() => {
    global_state.setLoading(false);
  }, 1850);
}
