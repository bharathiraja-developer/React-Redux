const initialValue = {
  cart: 0,
  cartArray: [],
  total: 0,
};
const cartValueHandler = (state, action) => {
  switch (action.type) {
    case "INC":
      let cartTotal = 0;
      let array = state.cartArray.concat(action.payload);
      for (let i = 0; i < array.length; i++) {
        array[i].newPrice = array[i].mrpPrice;
        cartTotal = cartTotal + array[i].mrpPrice;
      }
      return {
        cart: state.cart + 1,
        cartArray: array,
        total: cartTotal,
      };
    case "DEC":
      let id = action.payload;
      let dcartTotal = 0;
      let array1 = state.cartArray.filter((item) => item.id != id);
      for (let i = 0; i < array1.length; i++) {
        dcartTotal = dcartTotal + array1[i].mrpPrice;
      }
      return {
        cart: state.cart - 1,
        cartArray: array1,
        total: dcartTotal,
      };
    case "RETOTAL":
      let newValue = 0;
      const Newid = Number(action.payload.id);
      const value = Number(action.payload.value);
      for (let i = 0; i < state.cartArray.length; i++) {
        let temporary = 0;
        if (Newid == state.cartArray[i].id) {
          temporary = value * state.cartArray[i].mrpPrice;
          state.cartArray[i].newPrice = temporary;
        }
      }
      for (let i = 0; i < state.cartArray.length; i++) {
        newValue = newValue + state.cartArray[i].newPrice;
      }
      return {
        cart: state.cart,
        cartArray: state.cartArray,
        total: newValue,
      };
    default:
      return initialValue;
  }
};

const incHandle = (array) => {
  return {
    type: "INC",
    payload: {
      ...array,
    },
  };
};
const decHandle = (id) => {
  return {
    type: "DEC",
    payload: id,
  };
};

const reTotalHandle = (id, value) => {
  return {
    type: "RETOTAL",
    payload: {
      id: id,
      value: value,
    },
  };
};
export { initialValue, cartValueHandler, incHandle, decHandle, reTotalHandle };
