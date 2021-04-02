import React, {useEffect, useRef} from 'react';
import Routes from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-fast-toast';
import {global_state} from './src/utils/global_store';
import LoadingIndicator from './src/components/loading';

const App = () => {
  const toastRef = useRef(null);

  useEffect(() => {
    global_state.setToastRef(toastRef);
  }, [global_state]);

  return (
    <SafeAreaProvider>
      <Routes />
      <Toast ref={toastRef} />
      <LoadingIndicator />
    </SafeAreaProvider>
  );
};

export default App;
