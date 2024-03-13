/* eslint-disable react/prop-types */
import "./botol.css"
const Botol = ({botol, handleAddToCart}) => {
  const {name, img, price} = botol;
  // console.log(botol);
  return (
    <div className="botol-card">
      <h4>{name}</h4>
      <img className="w-[200px]" src={img} alt={name} />
      <p>Price : {price}</p>


      <button className="py-2 px-4 bg-red-500 text-white" onClick={()=> handleAddToCart(botol)}>Add to cart</button>
    </div>
  );
};

export default Botol;