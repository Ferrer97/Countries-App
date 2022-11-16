import { useState, useEffect } from "react";
import { Dropdown } from "../components/Dropdown";
import { ListOfCountries } from "../components/ListOfCountries";
import { Search } from "../components/Search";

export const Home = () => {
  const [dropDownValue, setDropDownValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((request) => request.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  const onDropdown = (value) => {
    setDropDownValue(value);
  };

  return (
    <>
      <header className="bg-gray-700 p-6 flex justify-between items-center">
        <p className="text-white font-medium text-lg">where in the world?</p>
        <p className="text-white font-light text-lg">Dark Mode &#9789; </p>
      </header>
      <div className="flex flex-col items-center max-w-2xl md:flex-row lg:max-w-4xl lg:mx-auto">
        <Search />
        <Dropdown onDropdown={onDropdown} />
      </div>

      <main className="w-[95%] grid place-content-center sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mt-5">
        {data.map((country) => (
          <ListOfCountries key={country.alpha3Code} country={country} />
        ))}
      </main>
    </>
  );
};
