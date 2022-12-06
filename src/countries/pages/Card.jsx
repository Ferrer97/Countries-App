import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Card = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((request) => request.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  const element = data.find((countries) => countries.cca3 === id);
  const handleClick = () => {
    navigate("/");
  };

  const hasBorders = () => {
    return element?.borders ? (
      element?.borders.map((border, index) => (
        <span
          key={index}
          className="shadow-md dark:text-white text-black py-1 px-4 bg-white dark:bg-slate-700 rounded text-sm"
        >
          {border}
        </span>
      ))
    ) : (
      <span className="shadow-md dark:text-white text-black py-1 px-4 bg-white dark:bg-slate-700 rounded text-sm">
        No Borders
      </span>
    );
  };

  const hasCapital = () => {
    return element?.capital ? (
      element.capital
    ) : (
      <span className="shadow-md dark:text-white text-black py-1 px-4 bg-slate-700 rounded text-sm">
        No Capital
      </span>
    );
  };

  const languagesMap = () => {
    if (!element?.languages) return;
    const languages = Object.values(element?.languages);
    return languages.map((lang) => (
      <span key={lang} className="text-gray-400 pl-1 font-semibold">
        {lang}
      </span>
    ));
  };

  const currenciesMap = () => {
    if (!element?.currencies) return;
    const currencies = Object.values(element.currencies);
    return (
      <span className="text-gray-400 pl-1 font-semibold">
        {currencies[0].name}
      </span>
    );
  };

  return (
    <section className="bg-white dark:bg-slate-800 min-h-screen">
      <section className="max-w-xs mx-auto lg:max-w-4xl">
        <button
          className="shadow-md dark:text-white text-black py-1 px-4 bg-white dark:bg-slate-700 rounded my-8 text-sm"
          onClick={handleClick}
        >
          Back
        </button>
        <div className="lg:grid lg:grid-cols-[250px_minmax(280px,_1fr)_100px] lg:grid-flow-row lg:overflow-hidden">
          <img
            className="max-w-[100%] w-full sm:w-[280px] sm:h-[220px] place-self-start"
            src={element?.flags.png}
            alt="Flag"
          />
          <div className="px-6 py-4 lg:grid lg:grid-cols-2 gap-2">
            <div>
              <h3 className="font-bold text-xl mb-2 dark:text-white text-black">
                {element?.name.common}
              </h3>
              <p className="dark:text-white text-black text-base font-bold my-2">
                {" "}
                Native Name:{" "}
                <span className="text-gray-400 pl-1 font-semibold">
                  {element?.name.official}
                </span>
              </p>
              <p className="dark:text-white text-black my-2 text-base font-bold">
                {" "}
                Population:{" "}
                <span className="text-gray-400 pl-1 font-semibold">
                  {element?.population}
                </span>
              </p>
              <p className="dark:text-white text-black my-2 text-base font-bold">
                Region:
                <span className="text-gray-400 pl-1 font-semibold">
                  {element?.region}
                </span>
              </p>
              <p className="dark:text-white text-black my-2 text-base font-bold">
                Sub Region:
                <span className="text-gray-400 pl-1 font-semibold">
                  {element?.subregion}
                </span>
              </p>
              <p className="dark:text-white text-black my-2 mb-8 text-base font-bold">
                Capital:{" "}
                <span className="text-gray-400 pl-1 font-semibold">
                  {hasCapital()}
                </span>
              </p>
            </div>
            <div>
              <p className="dark:text-white text-black my-2 text-base font-bold">
                Top Level Domain:{" "}
                <span className="text-gray-400 pl-1 font-semibold">
                  {element?.tld[0]}
                </span>
              </p>
              <p className="dark:text-white text-black my-2 text-base font-bold">
                Currencies:{" "}
                <span className="text-gray-400 pl-1 font-semibold">
                  {currenciesMap()}
                </span>
              </p>
              <p className="dark:text-white text-black my-2 text-base font-bold mb-8">
                Languages: {languagesMap()}
              </p>
              <p className="dark:text-white text-black my-2 text-base font-bold flex gap-2 flex-wrap">
                Border Countries: {hasBorders()}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
