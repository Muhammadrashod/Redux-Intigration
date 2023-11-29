const initialState = {
  customers: [],
};

const ADD_CUSTOMER = "ADD CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE CUSTOMER";

export const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(customer => customer !== action.payload)
      };
    default:
      return state;
  }
};

export const addCustomer = (payload) => ({ type: ADD_CUSTOMER, payload });

export const removeCustomer = (payload) => ({ type: REMOVE_CUSTOMER, payload });
