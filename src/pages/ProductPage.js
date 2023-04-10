import * as React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { URL } from "../utils/constants";
import { addItem } from "../state/checkout/checkoutSlice";
import { useDispatch } from "react-redux";
import "../styles/main.css";

const Class = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchClass = async () => {
      let res = await fetch(URL + id);
      let data = await res.json();
      setItem(data);
    };
    fetchClass();
  }, []);

  if (!item) {
    return <p>loading</p>;
  }

  const handleAdd = () => {
    dispatch(addItem({ name: item.title, price: item.price }));
  };

  return (
    <div>
      <img style={{ width: 240 }} alt={item.title} src={item.imageUrl} />
      <h1>{item.title}</h1>
      <h3>$ {item.price}</h3>
      <button class="add" onClick={handleAdd}>
        Add to Cart
      </button>
    </div>
  );
};

export default Class;
