import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, removeCustomer } from "./store/customersReducer";

function App() {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customersReducer.customers);

  const addCash = () => {
    dispatch({ type: "ADD CASH", payload: 1000000 });
  };

  const getCash = () => {
    dispatch({ type: "GET CASH", payload: 5000 });
  };

  const handleAddCustomer = () => {
    dispatch(addCustomer(userName));
  };

  const handleRemoveCustomer = () => {
    if (customers.length > 0) {
      dispatch(removeCustomer(customers[0])); 
    }
  };
  

  return (
    <>
      <h1>Баланс: {cash} сум</h1>
      <button onClick={() => addCash()}>Добавить</button>
      <button onClick={() => getCash()}>Снять деньги</button>

      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
      />

      <button onClick={() => handleAddCustomer()}>Добавить Пользвателя</button>
      <button onClick={() => handleRemoveCustomer()}>Удалить Пользвателя</button>


      {customers.length > 0 &&
        customers.map((customer) => <p key={customer}>{customer}</p>)}
    </>
  );
}

export default App;
