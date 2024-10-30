import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Brand from "./pages/brand";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/brand" element={<Brand />} />
    </Routes>
  );
}

export default App;
