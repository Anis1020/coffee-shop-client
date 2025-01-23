import Swal from "sweetalert2";
import "./addItem.css";
const AddItem = () => {
  const handleAddCoffee = (e) => {
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
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cofferInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Item Added Successfully",
            text: "Modal with a custom image.",

            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image",
          });
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleAddCoffee}>
        {/* row section */}
        <div className="row-container">
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Name</label>
            <input type="text" name="coffeeName" style={{ width: "96%" }} />
          </div>
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Quantity</label>
            <input type="text" name="quantity" style={{ width: "96%" }} />
          </div>
        </div>{" "}
        {/* row section */}
        <div className="row-container">
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Supplier</label>
            <input type="text" name="supplier" style={{ width: "96%" }} />
          </div>
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Test</label>
            <input type="text" name="test" style={{ width: "96%" }} />
          </div>
        </div>{" "}
        {/* row section */}
        <div className="row-container">
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Category</label>
            <input type="text" name="category" style={{ width: "96%" }} />
          </div>
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Details</label>
            <input type="text" name="details" style={{ width: "96%" }} />
          </div>
        </div>{" "}
        {/* row section */}
        <div className="row-container">
          <div style={{ width: "46%", margin: "4px" }}>
            <label htmlFor="name">Photo</label>
            <input
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

export default AddItem;
