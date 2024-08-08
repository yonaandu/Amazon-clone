import { Type } from './action.type'; 

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
 
    switch (action.type) {
        case Type.ADD_TO_BASKET:
          const existingitem = state.basket.find(
            (item) => item.id === action.item.id
          );
          if (!existingitem) {
            return {
              ...state,
              basket: [...state.basket, { ...action.item, amount: 1 }],
            };
          } else {
            const updatedBasket = state.basket.map((item) => {
              return item.id === action.item.id
                ? { ...item, amount: item.amount + 1 }
                : item;
            });
            return {
              ...state,
              basket: updatedBasket,
            };
          }
    
        case Type.REMOVE_FROM_BASKET:
         const itemToRemove = state.basket.find(
            (item) => item.id === action.item
          );
          if (itemToRemove && itemToRemove.amount > 1) {
            return {
             ...state,
              basket: state.basket.map((item) =>
                item.id === action.item
                 ? {...item, amount: item.amount - 1 }
                  : item
              ),
            };
          } else {
            return {
             ...state,
              basket: state.basket.filter((item) => item.id!== action.item),
            };
          }
          
    
        default:
          return state;
      }
    };