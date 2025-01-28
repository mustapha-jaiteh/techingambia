import React from "react";
import { NavLink, useLoaderData } from "react-router";
import { getCompanies } from "../data/companies";
import SearchBar from "../components/SearchBar";
import CompanyList from "../components/CompanyList";
import { useState } from "react";

const Home = () => {
  const companies = useLoaderData();

  const [query, setQuery] = useState("");
  const [filterBy, setFilterBy] = useState("name");

  // Filtered companies based on search query and filter
  const filteredCompanies = companies.filter((company) =>
    company[filterBy].toLowerCase().includes(query.toLowerCase())
  );

  // Handle search input change
  const handleSearch = (value) => {
    setQuery(value);
  };

  // Handle filter selection change
  const handleFilter = (value) => {
    setFilterBy(value);
  };

  return (
    <>
      {/* bg-[url('./images/bg-desktop.jpg')] lg:bg-[url('./images/bg-desktop.jpg')] */}
      <header className="App-header bg-gradient-to-r from-blue-900 to-slate-950 bg-cover bg-center w-full h-[700px] lg:h-[350px] relative  ">
        <div className="  text-gray-100 absolute mx-2 lg:mx-12 my-0 lg:my-4 justify-center items-center text-center  w-auto px-8 py-4   ">
          <h1 className="text-6xl mb-4 font-bold tracking-wide font-mono place-self-center">
            IT COMPANIES IN <br /> THE GAMBIA
          </h1>
          <p className="mb-4 text-xl font-semibold font-mono">
            This website aims to reduce time and cost for the general public in
            the Gambia to find the right IT companies to help them with their IT
            needs. We have listed all the IT companies, from GSM, ISP and
            Software companies, their various services and solutions for all
            your technology needs.
          </p>
        </div>
      </header>
      {/* main content */}
      <main className="App-content bg-gray-100 text-slate-950 max-w-6xl  ">
        <div className="w-full h-40 lg:h-32 bg-gradient-to-r from-blue-950 to-slate-950 py-4 "></div>
        <div className="py-2 gap-2 -mt-32 lg:-mt-24 z-10 bg-gray-100 my-4 mx-8 rounded-t-xl items-center justify-center text-center ">
          <SearchBar
            query={query}
            filterBy={filterBy}
            onSearch={handleSearch}
            onFilter={handleFilter}
          />
          {/* <h1 className="text-6xl font-bold font-mono mb-4 ">Companies</h1>
          <h2 className=" text-2xl font-bold font-mono ">
            The list of IT companies in The Gambia
          </h2> */}
        </div>
        <CompanyList companies={filteredCompanies} />
      </main>
    </>
  );
};

export default Home;
