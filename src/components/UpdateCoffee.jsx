import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { name, details, photo, _id, chef, category, supplier, taste } = coffee;

  const handleUpdatedCoffee = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // send data to the server

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    console.log(updatedCoffee);
  };

  return (
    <div className="bg-gray-300 p-24">
      <h2 className="text-6xl">Update a coffee{name}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
        consectetur! Ducimus saepe illum necessitatibus libero suscipit
        consectetur architecto eos quos accusantium deserunt? Soluta ipsam,
        eaque impedit cum exercitationem odio dolores!
      </p>
      <form onSubmit={handleUpdatedCoffee}>
        <div className="space-y-4 mt-5">
          <div className="flex  justify-center ">
            <div className="mr-5">
              <span>Name</span>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div>
              <span>Chef</span>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
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
                defaultValue={supplier}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div>
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
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
                defaultValue={category}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div>
              <span>Details</span>
              <input
                type="text"
                name="details"
                defaultValue={details}
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
              defaultValue={photo}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn btn-block"> Update coffee</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
