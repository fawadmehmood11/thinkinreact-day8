import logo from "./logo.svg";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";

const PRODUCTS = require("./Products.json");

const App = () => {
  return <FilterableProductTable products={PRODUCTS} />;
};

export default App;
