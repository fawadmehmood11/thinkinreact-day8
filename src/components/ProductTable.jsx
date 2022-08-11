import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
const ProductTable = ({ products, value, stockOnly }) => {
  let lastCategory = null;

  let rows = products.map((product) => {
    let row = [];
    if (product.name.toLowerCase().indexOf(value.toLowerCase()) === -1) {
      return;
    }
    if (stockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      row.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }

    row.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
    return row;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
