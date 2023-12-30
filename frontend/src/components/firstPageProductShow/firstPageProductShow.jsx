import ProductCard from "../productCard/productCard";

const generateProductCardValues = (baseValue, count) => {
  const productCardValues = [];
  for (let index = 1; index <= count; index++) {
    productCardValues.push(baseValue * index);
  }
  return productCardValues;
};

const FirstPageProductShow = () => {
  const baseCardValue = 1;
  const productCardValues = generateProductCardValues(baseCardValue, 10);

  return (
    <div
      className="container py-2 w-75"
      style={{ width: "100%", overflowX: "auto" }}
    >
      <div className="d-flex flex-nowrap card-container">
        {productCardValues.map((value, index) => (
          <div key={index} style={{ flex: "0 0 auto", marginRight: "16px"}}>
            <ProductCard
              className="p-4"
              value={value}
              style={{ minWidth: "50px", maxWidth: "50px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstPageProductShow;
