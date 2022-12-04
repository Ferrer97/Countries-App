import { useState, useEffect } from "react";
import { Dropdown, ListOfCountries, Search } from "../components";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((request) => request.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  const onDropdown = async (value) => {
    const req = await fetch(`https://restcountries.com/v3.1/region/${value}`);
    const resp = await req.json();
    setData(resp);
  };

  const onSearch = async (value) => {
    value = value.toLowerCase();
    if (value < 2 || value === "") return;
    const req = await fetch(`https://restcountries.com/v3.1/name/${value}`);
    const resp = await req.json();
    setData(resp);
  };

  return (
    <div className="bg-white-700 dark:bg-slate-800 min-h-full">
      <div className="flex flex-col items-center max-w-2xl md:flex-row lg:max-w-4xl lg:mx-auto">
        <Search onSearch={onSearch} />
        <Dropdown onDropdown={onDropdown} />
      </div>

      <main className="w-[95%] grid min-h-screen sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mt-5 overflow-hidden">
        {data.map((country) => (
          <ListOfCountries key={country.cca3} country={country} />
        ))}
      </main>
    </div>
  );
};
