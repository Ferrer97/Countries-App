import { Dropdown } from "../components/Dropdown"
import { Search } from "../components/Search"

export const Home = () => {
  return (
    <>
    <header className="bg-gray-700 p-6 flex justify-between items-center">
        <p className="text-white font-medium text-lg">where in the world?</p>
        <p className="text-white font-light text-lg">Dark Mode &#9789; </p>
    </header>
    <div className="flex flex-col items-center max-w-2xl md:flex-row lg:max-w-4xl lg:mx-auto">
     <Search/>
     <Dropdown/>

    </div>
    </>
  )
}
