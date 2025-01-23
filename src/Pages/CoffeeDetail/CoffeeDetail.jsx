import { useLoaderData } from "react-router-dom";

const CoffeeDetail = () => {
  const coffeeDetail = useLoaderData();
  console.log(coffeeDetail);
  return (
    <div>
      <h2>detail is coming: {coffeeDetail._id}</h2>
    </div>
  );
};

export default CoffeeDetail;
