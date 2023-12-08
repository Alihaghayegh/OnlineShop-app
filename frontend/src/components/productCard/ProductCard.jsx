import React, { useState } from "react";
import axios from "axios";

export default function ProductCard() {
  const [items, setItems] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:8000/api/items?format=json")
      .then((res) => {
        setItems(res.data);
        console.log(res.data)
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
      });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}