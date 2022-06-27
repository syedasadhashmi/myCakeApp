import "./App.css";
// import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import IcecreamContainer from "./components/IcecreamContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
import { PersistGate } from "redux-persist/integration/react";
import PersistExample from "./components/PersistExample";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PersistGate persistor={persistor}>
          <PersistExample />
        </PersistGate>
        {/* <UserContainer /> */}
        {/* <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <IcecreamContainer />
        <NewCakeContainer />
        <CakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
