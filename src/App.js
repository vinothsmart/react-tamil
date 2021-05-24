import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);

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
      <h1>Hello World</h1>
      {product.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
}

export default App;
