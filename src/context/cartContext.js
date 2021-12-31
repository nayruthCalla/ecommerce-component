import { createContext, useContext, useState } from "react";

// crear el contexto

const CartContext = createContext();

// crear componente Provider, state

export const CartProvider = ({ children }) => {
  // state
  const [data, setData] = useState([]);
  const [addNw, setAddNw] = useState(false);
  return (
    <CartContext.Provider
      value={{
        //states
        data,
        addNw,
        // func
        setData,
        setAddNw,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// custom hook
export const useStateCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useStateAuth must be used within a CartProvider");
  }

  return context;
};
