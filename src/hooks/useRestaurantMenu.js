import { useState, useEffect } from "react";
import {
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  swiggy_menu_api,
} from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [itemCategory, setItemCategories] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(swiggy_menu_api + resId);
      const json = await data.json();

      console.log(json);
      // set ResInfo;
      const restaurantData =
        json?.data?.cards
          ?.map((x) => x.card)
          ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setResInfo(restaurantData);

      // conso
      const categories = json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY);

        console.log(categories , "Categories")

      // json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      //   (c) =>
      //     c.card?.card?.["@type"] ===
      //     "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      // );

      console.log(categories);
      setItemCategories(categories);
      // setting Menu item data
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      console.log(resInfo);
      console.log(menuItemsData);

      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setResInfo(null);
      console.log(error);
    }
  }
  return [resInfo, menuItems, itemCategory];
};

export default useRestaurantMenu;
