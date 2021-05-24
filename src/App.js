import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const getProductData = async () => {
    try {
      const data = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      console.log(data);
    } catch (e) {}
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
