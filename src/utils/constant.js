export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const swiggy_menu_api =
  "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";

export const swiggy_api_url =
  "https://foodfire.onrender.com/api/restaurants?lat=12.96340&lng=77.58550&page_type=DESKTOP_WEB_LISTING";
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&page_type=DESKTOP_WEB_LISTING";
// "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&page_type=DESKTOP_WEB_LISTING%22)%20const%20json%20=%20await%20data.json();";

// menu items api card type key
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

// shimmer card unit
export const shimmer_card_unit = 20;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 4;

export const mailto = process.env.REACT_APP_MAIL_TO;
