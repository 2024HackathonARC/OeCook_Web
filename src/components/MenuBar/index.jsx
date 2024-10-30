import * as _ from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "../../assets/Home";
import Brand from "../../assets/Brand";
import Recipe from "../../assets/Recipe";

const MenuBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, label: "메인", Icon: Home, location: "/" },
    { id: 2, label: "기업", Icon: Brand, location: "/brand" },
    { id: 3, label: "레시피", Icon: Recipe, location: "/recipe" },
  ];

  const getCurrentTab = () => {
    const currentItem = menuItems.find((item) => {
      return item.location === "/"
        ? location.pathname === item.location
        : location.pathname.startsWith(item.location);
    });
    return currentItem ? currentItem.id : 1;
  };

  const [selectState, setSelectState] = useState(getCurrentTab());

  useEffect(() => {
    setSelectState(getCurrentTab());
  }, [location.pathname]);

  const onTabClick = (id, location) => {
    navigate(location);
    setSelectState(id);
  };

  return (
    <_.MenuBar_Container>
      {menuItems.map(({ id, label, Icon, location }) => (
        <_.Menubar_Icon key={id} onClick={() => onTabClick(id, location)}>
          <Icon color={selectState === id ? "#e54325" : "#a7a7a7"} />
          <_.Menubar_Title select={selectState === id}>{label}</_.Menubar_Title>
        </_.Menubar_Icon>
      ))}
    </_.MenuBar_Container>
  );
};

export default MenuBar;
