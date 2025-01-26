import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllUsers = () => {
  const allUsers = useLoaderData();
  console.log(allUsers);

  const handleUserDelete = (id) => {
    console.log(id);
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
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
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
    <div className="border w-1/2 mx-auto">
      {allUsers?.map((user) => (
        <li key={user._id} className="flex items-center gap-8">
          {user.name} : <span> {user.email}</span>
          <img
            className="w-15 h-15 flex items-end rounded-full"
            src={user.photo}
            alt=""
          />
          <button
            onClick={() => {
              handleUserDelete(user._id);
            }}
            className="btn"
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
};

export default AllUsers;
