import { Provider } from "react-redux";
import { Counter } from "./features/components/Counter";
import { store } from "./store";

// React Redux - https://redux.js.org/ | https://react-redux.js.org/ | https://redux-toolkit.js.org/ | npm i react-redux @reduxjs/toolkit
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
