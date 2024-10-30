import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/brand" element={<Main />} />
    </Routes>
  );
}

export default App;
