import { useLoaderData } from "react-router-dom";
import AddItem from "../../Forms/AddItemForm/AddItem";

const CoffeeUpdate = () => {
  const coffeeUpdate = useLoaderData();
  console.log(coffeeUpdate);
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.coffeeName.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const cofferInfo = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo,
      price,
    };
    console.log(cofferInfo);
  };
  return (
    <div>
      <form onSubmit={handleUpdateCoffee}>
        {/* row section */}
        <div className="row-container">
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              defaultValue={coffeeUpdate.name}
              name="coffeeName"
              style={{ width: "96%" }}
            />
          </div>
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Quantity</label>
            <input
              defaultValue={coffeeUpdate.quantity}
              type="text"
              name="quantity"
              style={{ width: "96%" }}
            />
          </div>
        </div>{" "}
        {/* row section */}
        <div className="row-container">
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Supplier</label>
            <input
              defaultValue={coffeeUpdate.supplier}
              type="text"
              name="supplier"
              style={{ width: "96%" }}
            />
          </div>
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Test</label>
            <input
              defaultValue={coffeeUpdate.test}
              type="text"
              name="test"
              style={{ width: "96%" }}
            />
          </div>
        </div>{" "}
        {/* row section */}
        <div className="row-container">
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Category</label>
            <input
              defaultValue={coffeeUpdate.category}
              type="text"
              name="category"
              style={{ width: "96%" }}
            />
          </div>
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Details</label>
            <input
              defaultValue={coffeeUpdate.details}
              type="text"
              name="details"
              style={{ width: "96%" }}
            />
          </div>
        </div>{" "}
        {/* row section */}
        <div className="row-container">
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Photo</label>
            <input
              defaultValue={coffeeUpdate.photo}
              type="text"
              name="photo"
              style={{
                width: "97%",
                textAlign: "center",
                padding: "10px",
              }}
            />
          </div>{" "}
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">price</label>
            <input
              defaultValue={coffeeUpdate.price}
              type="text"
              name="price"
              style={{
                width: "97%",
                textAlign: "center",
                padding: "10px",
              }}
            />
          </div>
        </div>{" "}
        {/* row section */}
        <div className="row-container">
          <div style={{ width: "93%", margin: "4px" }}>
            <input
              type="submit"
              value="submit"
              style={{
                width: "97%",
                backgroundColor: "pink",
                textAlign: "center",
                padding: "10px",
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CoffeeUpdate;
