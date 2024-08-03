import React, { useContext, useEffect, useState } from 'react';
import { FaCartPlus, FaTimes } from 'react-icons/fa';
import { myContext } from './GlobalData';

const Header = () => {
  const [totalItem, setTotalItems] = useState(null);
  const [ifCartActive, setCartActive] = useState(false);
  const { cart } = useContext(myContext);

  useEffect(() => {
    let newTotal = 0;
    cart.forEach((product) => {
      newTotal += product.quantity;
    });
    setTotalItems(newTotal);
  }, [cart]);

  const decreaseQuantity = (index) => {
    // implement decrease quantity logic here
  };

  const increaseQuantity = (index) => {
    // implement increase quantity logic here
  };

  return (
    <>
      <div className="flex justify-between py-4 px-5">
        <div>LOGO</div>
        <div className="relative">
          <FaCartPlus
            className="text-[60px]"
            onClick={() => {
              setCartActive(true);
            }}
          />
          <div className="absolute top-[-10px] right-[-10px]">{totalItem}</div>
        </div>
      </div>
      <div
        style={{ right: ifCartActive ? '0%' : '-100%' }}
        className="w-[70vw] duration-700 fixed top-0 h-[100vh] bg-[rgba(0,0,0,0.6)] border border-red-600"
      >
        <div
          className="bg-white absolute p-4 font-[30px] right-0 cursor-pointer"
          onClick={() => {
            setCartActive(false);
          }}
        >
          <FaTimes />
        </div>
        <table>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cart.map((product, index) => (
            <tr key={index}>
              <td>
                <img src={product.thumbnail} alt={product.name} width={50} height={50} />
              </td>
              <td>{product.name}</td>
              <td>
                <div className="flex flex-col items-center">
                  <span>{product.quantity}</span>
                  <div className="flex mt-2">
                    <button
                      onClick={() => decreaseQuantity(index)}
                      className="px-2 py-1 bg-red-500 text-white"
                    >
                      -
                    </button>
                    <button
                      onClick={() => increaseQuantity(index)}
                      className="px-2 py-1 bg-green-500 text-white ml-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td>{product.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Header;