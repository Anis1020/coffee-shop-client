import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, photo, quality, category, price } = coffee;

  const handleSeeDetail = (id) => {
    console.log(id);
  };
  const handleUpdate = (id) => {
    console.log(id);
  };
  const handleDelete = (id) => {
    console.log(id);

    fetch(`http://localhost:3000/coffees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
  };
  return (
    <div style={{ border: "2px solid red", padding: "6px" }}>
      <img src={photo} style={{ width: "100%", height: "150px" }} />
      <h3>Coffee Name: {name}</h3>
      <h3>Coffee price: {price ? price : "500"}tk</h3>
      <p>{quality}</p>
      <p>{category}</p>
      <Link to={`/coffeeDetail/${_id}`}>
        <button onClick={() => handleSeeDetail(_id)}>See Details</button>
      </Link>
      <Link to={`/coffeeUpdate/${_id}`}>
        <button onClick={() => handleUpdate(_id)}>Update Coffee</button>
      </Link>
      <button onClick={() => handleDelete(_id)}>Delete Coffee</button>
    </div>
  );
};

export default CoffeeCard;
