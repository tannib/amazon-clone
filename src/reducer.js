export const initialState = {
  basket: [
    {
      id: "12321341",
      title: "The Lean Startup",
      price: 11.96,
      rating: 5,
      img:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket...

      // we cloned the basket
      let newBasket = [...state.basket];

      // we check to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exists in basket, remove it...
        newBasket.splice(index, 1);
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
