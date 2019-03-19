import React from 'react';

const Products = ({ products, onDeleteClick }) => {
  return (
    <ul className="list-group">
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          discount={product.discount}
          availability={product.availability}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </ul>
  );
};

const Product = ({
  id,
  name,
  price,
  discount,
  availability,
  onDeleteClick,
}) => {
  const discountedPrice = (price * (1 - discount / 100)).toFixed(2);

  return (
    <li className="list-group-item">
      {name}
      <br />
      <span
        style={{ textDecoration: discount > 0 ? 'line-through' : '' }}
      >{`$${price}`}</span>
      <div style={{ marginBottom: '5px' }}>
        <span className="badge badge-success" style={{ marginBottom: '5px' }}>
          {discount > 0 ? `$${discountedPrice}` : ''}
        </span>
      </div>
      <span
        className={
          availability === 'In Stock'
            ? 'badge badge-success'
            : 'badge badge-warning'
        }
        style={{ marginBottom: '5px' }}
      >
        {availability}
      </span>
      <br />
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          onDeleteClick(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default Products;

{
  /* <li className="list-group-item">
Bar
<br />
<span>$8</span>
<div style={{ marginBottom: '5px' }} />
<span className="badge badge-success" style={{ marginBottom: '5px' }}>
  In Stock
</span>
<br />
<button className="btn btn-danger btn-sm">Delete</button>
</li>
<li className="list-group-item">
Bazz
<br />
<span>$4</span>
<div style={{ marginBottom: '5px' }} />
<span className="badge badge-warning" style={{ marginBottom: '5px' }}>
  Backordered
</span>
<br />
<button className="btn btn-danger btn-sm">Delete</button>
</li>
<li className="list-group-item">
Quq
<br />
<span>$2</span>
<div style={{ marginBottom: '5px' }} />
<span className="badge badge-warning" style={{ marginBottom: '5px' }}>
  Discontinued
</span>
<br />
<button className="btn btn-danger btn-sm">Delete</button>
</li>
<li className="list-group-item">
prof
<br />
<span style={{ textDecoration: 'line-through' }}>$1.3</span>
<div style={{ marginBottom: '5px' }}>
  <span className="badge badge-success" style={{ marginBottom: '5px' }}>
    $1.0
  </span>
</div>
<span className="badge badge-success" style={{ marginBottom: '5px' }}>
  In Stock
</span>
<br />
<button className="btn btn-danger btn-sm">Delete</button>
</li> */
}
