import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import store from "./Redux/Store";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
