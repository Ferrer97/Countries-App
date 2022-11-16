import React from "react";

export const ListOfCountries = ({ country }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg max-w-xs xl:max-w-4xl mx-auto">
      <img
        className="max-w-[100%] w-full sm:w-[280px] sm:h-[180px]"
        src={country.flag}
        alt="Flag"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{country.name}</div>
        <p className="text-white text-base font-bold">
          {" "}
          Population:{" "}
          <span className="text-gray-400 pl-1 font-semibold">
            {country.population}
          </span>
        </p>
        <p className="text-white text-base font-bold">
          Region:
          <span className="text-gray-400 pl-1 font-semibold">
            {country.region}
          </span>
        </p>
        <p className="text-white text-base font-bold">
          Capital:{" "}
          <span className="text-gray-400 pl-1 font-semibold">
            {country.capital}
          </span>
        </p>
      </div>
    </div>
  );
};