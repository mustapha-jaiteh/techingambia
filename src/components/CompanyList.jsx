import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import CompanyDetails from "./CompanyDetails";

const CompanyList = ({ companies }) => {
  const [selestedCompany, setSelestedCompany] = useState(null);

  const handleReadMore = (company) => {
    setSelestedCompany(company);
  };

  const closeDetails = () => {
    setSelestedCompany(null);
  };

  return (
    <>
      <header className="bg-white shadow">
        <div className=" flex justify-between items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            IT COMPANIES IN THE GAMBIA
          </h1>
        </div>
      </header>
      <main className=" max-w-7xl   px-4 lg:px-6 mx-auto">
        <div>
          {/* Your content */}
          <div className="companies grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:flex-row py-8  rounded-xl">
            {companies.length > 0 ? (
              companies.map((company) => (
                <div
                  className="card bg-gray-100 hover:bg-blue-100 flex flex-col m-4  gap-2 shadow-2xl bg-transparent items-center justify-center text-center  rounded-2xl shadow-slate-950 p-2 relative  text-blue-950 break-all"
                  key={company.id}
                >
                  <img
                    src={company.logo}
                    alt=""
                    className="img  p-s3 rounded-md h-40 w-52"
                  />

                  <h2 className="name font-bold">
                    {/* <span className="text-slate-950  font-extrabold">
                      name:
                    </span>{" "} */}
                    {company.name}
                  </h2>

                  <p className="type font-bold font-mono">{company.type}</p>

                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website  text-blue-600 text-3x hover:text-blue-800 font-bold "
                  >
                    {/* <span className=" text-slate-950 font-bold">website:</span>
                    <br /> */}
                    {company.website}
                  </a>
                  <Link to={`/company_list/${company.id}`}>
                    <button
                      className=" font-bold bg-blue-100 hover:bg-blue-300 text-slate-950 p-2  rounded-lg border border-gray-50 place-self-center"
                      onClick={() => handleReadMore(company)}
                    >
                      More details...
                    </button>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-2xl font-bold font-mono">
                No companies found
              </p>
            )}
            {/* {selestedCompany && (
              <CompanyDetails closeDetails={closeDetails} />
            ) } */}
          </div>
        </div>
      </main>
    </>
  );
};

export default CompanyList;
