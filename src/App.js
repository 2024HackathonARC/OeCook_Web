import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Brand from "./pages/brand";
import Recipe from "./pages/recipe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/recipe" element={<Recipe />} />
    </Routes>
  );
}

export default App;
