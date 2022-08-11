import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      stockOnly: false,
    };
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  onInstockOnly = (e) => {
    this.setState({
      stockOnly: e.target.checked,
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.value}
          stockOnly={this.state.stockOnly}
          handleInputChange={this.handleInputChange}
          onInstockOnly={this.onInstockOnly}
        />
        <ProductTable
          products={this.props.products}
          value={this.state.value}
          stockOnly={this.state.stockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
