import { Provider } from "react-redux";
import Kambaz from "./Kambaz";
import Labs from "./Labs";
import { HashRouter, Routes, Route, Navigate } from "react-router";
import store from "./Kambaz/store";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Kambaz" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kambaz/*" element={<Kambaz />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
