import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";

const CoffeeCard = ({ coffee,coffees, setCoffees }) => {
  const { _id, photo, name, chef, supplier, taste, category, details } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this coffee!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'delete'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.deletedCount > 0 ){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Coffee has been deleted.",
                    icon: "success",
                  });

                  const remaining = coffees.filter(cof => cof._id !== _id)
                  setCoffees(remaining);
            }
            
          });
      }
    });
  };

  return (
  
    <div className="card bg-base-100 shadow-xl ">
      <div className="flex">
        <div>
          <figure>
            <img className="w-60" src={`${photo}`} alt="Shoes" />
          </figure>
        </div>
        <div className=" mr-24">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{category}</div>
          </h2>
          <p>{details}</p>
          <div className="card-actions justify-end"></div>
        </div>
        <div className="flex flex-col space-y-10">
          <button className="btn btn-primary">View</button>
          <Link to={`updatecoffee/${_id}`}>
          <button className="btn btn-primary">Edit</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
  
};

export default CoffeeCard;
