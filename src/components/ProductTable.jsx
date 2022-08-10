import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
const ProductTable = (props) => {
  const row = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(props.value.toLowerCase()) === -1) {
      return;
    }
    if (props.stockOnly && !product.stocked) {
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
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </table>
  );
};

export default ProductTable;
