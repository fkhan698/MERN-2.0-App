import "../styles/globals.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import store from "./store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
