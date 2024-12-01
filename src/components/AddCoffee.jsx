import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    // send data to the server

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "User Added Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
      });

    console.log(newCoffee);
    
  };
  return (
    <div className="bg-gray-300 p-24">
      <h2 className="text-6xl">Add a coffee</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
        consectetur! Ducimus saepe illum necessitatibus libero suscipit
        consectetur architecto eos quos accusantium deserunt? Soluta ipsam,
        eaque impedit cum exercitationem odio dolores!
      </p>
      <form onSubmit={handleAddCoffee}>
        <div className="space-y-4 mt-5">
          <div className="flex  justify-center ">
            <div className="mr-5">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div>
              <span>Chef</span>
              <input
                type="text"
                name="chef"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex  justify-center">
            <div className="mr-5">
              <span>Supplier</span>
              <input
                type="text"
                name="supplier"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div>
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex  justify-center">
            <div className="mr-5">
              <span>Category</span>
              <input
                type="text"
                name="category"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div>
              <span>Details</span>
              <input
                type="text"
                name="details"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <span>Photo</span>
          <div className="">
            <input
              type="text"
              name="photo"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn btn-block">Add coffee</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
