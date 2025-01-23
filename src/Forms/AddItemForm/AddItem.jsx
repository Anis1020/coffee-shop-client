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
    const cofferInfo = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photo,
    };
    console.log(cofferInfo);
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
          <div style={{ width: "93%", margin: "4px" }}>
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
