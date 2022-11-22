import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Card = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((request) => request.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  const element = data.find((countries) => countries.alpha3Code === id);
  return (
    <div className="rounded overflow-hidden shadow-lg max-w-xs xl:max-w-4xl mx-auto">
      <img
        className="max-w-[100%] w-full sm:w-[280px] sm:h-[180px]"
        src={element?.flag}
        alt="Flag"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{element?.name}</div>
        <p className="text-white text-base font-bold">
          {" "}
          Native Name:{" "}
          <span className="text-gray-400 pl-1 font-semibold">
            {element?.altSpellings[2]}
          </span>
        </p>
        <p className="text-white text-base font-bold">
          {" "}
          Population:{" "}
          <span className="text-gray-400 pl-1 font-semibold">
            {element?.population}
          </span>
        </p>
        <p className="text-white text-base font-bold">
          Region:
          <span className="text-gray-400 pl-1 font-semibold">
            {element?.region}
          </span>
        </p>
        <p className="text-white text-base font-bold">
          Sub Region:
          <span className="text-gray-400 pl-1 font-semibold">
            {element?.subregion}
          </span>
        </p>
        <p className="text-white text-base font-bold">
          Capital:{" "}
          <span className="text-gray-400 pl-1 font-semibold">
            {element?.capital}
          </span>
        </p>
        <p className="text-white text-base font-bold">
          Top Level Domain:{" "}
          <span className="text-gray-400 pl-1 font-semibold">
            {element?.topLevelDomain[0]}
          </span>
        </p>
        <p className="text-white text-base font-bold">
          Currencies:{" "}
          <span className="text-gray-400 pl-1 font-semibold">
            {element?.currencies[0].name}
          </span>
        </p>
        <p className="text-white text-base font-bold">
          Languages:{" "}
          {element?.languages.map((lang) => {
            <span key={lang} className="text-white">{lang}</span>;
          })}
        </p>
      </div>
    </div>
  );
};
