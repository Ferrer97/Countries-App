export const Dropdown = ({ onDropdown }) => {
  const getValueDropdown = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    if (value === "") return;
    onDropdown(value);
  };
  return (
    <>
      <label
        htmlFor="countries"
        className="sr-only"
      >
        Filter by Region
      </label>
      <select
        onChange={getValueDropdown}
        id="countries"
        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
      >
        <option desabled="true" value="">
          Choose a Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">América</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </>
  );
};
