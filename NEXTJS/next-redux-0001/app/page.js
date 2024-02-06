import Image from "next/image";
import { Provider } from 'react-redux';
import store from '../app/store'; // Asegúrate de que la ruta a tu store sea correcta

export default function Home() {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
