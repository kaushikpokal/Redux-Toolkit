// import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

import Navigation from './navigation';

const App = () => {
    return (
        // <SafeAreaView>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navigation />
                </PersistGate>
            </Provider>
        // </SafeAreaView>
    );
}

export default App;
