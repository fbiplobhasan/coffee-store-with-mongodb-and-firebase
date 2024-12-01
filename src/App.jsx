import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <Header></Header>
      <h1 className="text-6xl">Hot Hot Coffee {coffees.length}</h1>
      <div className="grid md:grid-cols-2 gap-5 mt-5">

        {coffees.map((coffee) => (
          <CoffeeCard 
          key={coffee._id} 
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
