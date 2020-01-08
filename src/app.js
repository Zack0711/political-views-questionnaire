import React from 'react'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'

import store from './store';
import i18n from './i18n';

const App = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
    </I18nextProvider>
  </Provider>  
)

export default App