import React, { useState } from "react";
interface ITodo {
  id: number;
  name: string;
  email: string;
  img: string;
}
const Menu = () => {
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("todo") as string) || []
  );
  function deleteProduct(id: number) {
    let newData = JSON.parse(localStorage.getItem("todo") as string) || [];
    newData = newData.filter((el: ITodo) => el.id !== id);
    localStorage.setItem("todo", JSON.stringify(newData));
    setProduct(newData);
  }

  return (
    <div>
      {product.map((el: ITodo) => (
        <>
          <h2>{el.name}</h2>
          <h2>{el.email}</h2>
          <img src={el.img} alt="" />
          <button onClick={() => deleteProduct(el.id)}>delete</button>
        </>
      ))}
    </div>
  );
};

export default Menu;
