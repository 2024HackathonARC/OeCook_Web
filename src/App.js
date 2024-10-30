import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Brand from "./pages/brand";
import Recipe from "./pages/recipe";
import MenuDetail from "./pages/menuDetail";
import RecipeDetail from "./pages/recipeDetail";
import Map from "./pages/map";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/brand" element={<Brand />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/menu-detail/:id" element={<MenuDetail />} />
      <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}

export default App;
