import { useEffect } from "react";
import { useState } from "react";
import Botol from "../botol/Botol";
import "./botols.css"
import { addToLS, getStoredCart } from "../utilities/LocalStorage";

const Botols = () => {
  const [botols, setBotols] = useState([]);
  const [cart, setCart] = useState([]);



  useEffect(()=>{
    fetch("botols.json")
    .then(res=>res.json())
    .then(data=>setBotols(data))
  },[])


  useEffect(()=> {
    console.log(botols.length);
    if(botols.length > 0){
      const storedCart = getStoredCart();
      console.log(storedCart, botols);

      const savedCart = [];

      for(const id of storedCart){
        const cartBottle = botols.find(bottle => bottle.id === id)
        if(cartBottle){
          savedCart.push(cartBottle);
        }
      }
      setCart(savedCart);
    }
  },[botols])

  const handleAddToCart = (botol) =>{
    addToLS(botol.id);
  }

  return (
    <div>
      <h2 className="text-2xl font-medium">Number of bottols: {botols.length}</h2>   
      <h4>Cart bottle added: {cart.length}</h4> 

      <div className="botol-container">
        {
          botols.map(botol =><Botol 
            key={botol.id} 
            botol={botol}
            handleAddToCart={handleAddToCart}
            ></Botol>)
        }
      </div>


    </div>
  );
};

export default Botols;