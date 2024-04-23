import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Main from "./layout/Main";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <section className="max-w-7xl mx-auto mt-24">
        <Main />
        <h1 className="text-4xl text-blue-400">
          Numbers of Coffee: {loadedCoffees.length}
        </h1>
        <div className="grid grid-cols-2 gap-12">
          {loadedCoffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
