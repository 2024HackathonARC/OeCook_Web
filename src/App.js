import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Brand from "./pages/brand";
import Recipe from "./pages/recipe";
import MenuDetail from "./pages/menuDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/menu-detail/:id" element={<MenuDetail />} />
    </Routes>
  );
}

export default App;
