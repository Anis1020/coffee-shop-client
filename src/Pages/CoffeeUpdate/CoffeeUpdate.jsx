import { useLoaderData } from "react-router-dom";

const CoffeeUpdate = () => {
  const coffeeUpdate = useLoaderData();
  console.log(coffeeUpdate);
  return (
    <div>
      <h3>Update content of {coffeeUpdate._id}</h3>
    </div>
  );
};

export default CoffeeUpdate;
