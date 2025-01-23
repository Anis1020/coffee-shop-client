import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../../Components/coffeeCard/CoffeeCard";
import "./homePage.css";
import { useState } from "react";
const HomePage = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(coffees);
  return (
    <div>
      <h1>home page coming soon</h1>
      <div className="card-container">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
