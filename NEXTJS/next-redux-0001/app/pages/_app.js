// pages/_app.js
import { Provider } from 'react-redux';
import store from '../store'; // Asegúrate de que la ruta a tu store sea correcta

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
