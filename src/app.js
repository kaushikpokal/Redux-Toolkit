import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

import Counter from './components/counter';

const App = () => {
    return (
        <SafeAreaView>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Counter />
                </PersistGate>
            </Provider>
        </SafeAreaView>
    );
}

export default App;
