import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProductData = async () => {
    try {
      const data = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      // console.log(data.data);
      setProduct(data.data);
    } catch (e) {}
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      <input
        type="text"
        placeholder="Search Here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {product
        .filter((item) => {
          if (search == "") {
            return item;
          } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        })
        .map((item) => {
          return (
            <p>
              {item.name} -{item.price}
            </p>
          );
        })}
    </div>
  );
}

export default App;
