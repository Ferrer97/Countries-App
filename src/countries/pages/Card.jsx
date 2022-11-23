import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Card = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((request) => request.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  const element = data.find((countries) => countries.alpha3Code === id);
  const handleClick = () => {
    navigate("/home");
  };

  const hasBorders = () => {
    return element?.borders ? (
      element?.borders.map((border, index) => (
        <span
          key={index}
          className="shadow-md text-white py-1 px-4 bg-slate-700 rounded text-sm"
        >
          {border}
        </span>
      ))
    ) : (
      <span className="shadow-md text-white py-1 px-4 bg-slate-700 rounded text-sm">
        No Borders
      </span>
    );
  };

  const hasCapital = () => {
    return element?.capital ? (
      element.capital
    ) : (
      <span className="shadow-md text-white py-1 px-4 bg-slate-700 rounded text-sm">
        No Capital
      </span>
    );
  };

  return (
    <section className="max-w-xs mx-auto lg:max-w-4xl">
      <button
        className="shadow-md text-white py-1 px-4 bg-slate-700 rounded my-8 text-sm"
        onClick={handleClick}
      >
        Back
      </button>
      <div className="lg:grid lg:grid-cols-[200px_minmax(280px,_1fr)_100px] lg:place-content-center lg:grid-flow-row lg:overflow-hidden">
        <img
          className="max-w-[100%] w-full sm:w-[280px] sm:h-[200px]"
          src={element?.flags.png}
          alt="Flag"
        />
        <div className="px-6 py-4 lg:grid lg:grid-cols-2">
          <div>
            <h3 className="font-bold text-xl mb-2 text-white">
              {element?.name}
            </h3>
            <p className="text-white text-base font-bold my-2">
              {" "}
              Native Name:{" "}
              <span className="text-gray-400 pl-1 font-semibold">
                {element?.altSpellings[2]
                  ? element?.altSpellings[2]
                  : element?.altSpellings[0]}
              </span>
            </p>
            <p className="text-white my-2 text-base font-bold">
              {" "}
              Population:{" "}
              <span className="text-gray-400 pl-1 font-semibold">
                {element?.population}
              </span>
            </p>
            <p className="text-white my-2 text-base font-bold">
              Region:
              <span className="text-gray-400 pl-1 font-semibold">
                {element?.region}
              </span>
            </p>
            <p className="text-white my-2 text-base font-bold">
              Sub Region:
              <span className="text-gray-400 pl-1 font-semibold">
                {element?.subregion}
              </span>
            </p>
            <p className="text-white my-2 mb-8 text-base font-bold">
              Capital:{" "}
              <span className="text-gray-400 pl-1 font-semibold">
                {hasCapital()}
              </span>
            </p>
          </div>
          <div>
            <p className="text-white my-2 text-base font-bold">
              Top Level Domain:{" "}
              <span className="text-gray-400 pl-1 font-semibold">
                {element?.topLevelDomain[0]}
              </span>
            </p>
            <p className="text-white my-2 text-base font-bold">
              Currencies:{" "}
              <span className="text-gray-400 pl-1 font-semibold">
                {element?.currencies[0].name}
              </span>
            </p>
            <p className="text-white my-2 text-base font-bold mb-8">
              Languages:{" "}
              {element?.languages.map((lang) => (
                <span
                  key={lang.name}
                  className="text-gray-400 pl-1 font-semibold"
                >
                  {lang?.name}
                </span>
              ))}
            </p>
            <p className="text-white my-2 text-base font-bold flex gap-2 flex-wrap">
              Border Countries: {hasBorders()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
