import { useLoaderData } from "react-router-dom";
import AddItem from "../../Forms/AddItemForm/AddItem";
import CoffeeCard from "../../Components/coffeeCard/CoffeeCard";
import "./homePage.css";
const HomePage = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <h1>home page coming soon</h1>
      <div className="card-container">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>

      <AddItem></AddItem>
    </div>
  );
};

export default HomePage;
