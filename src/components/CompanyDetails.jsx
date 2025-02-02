import React from "react";
import { companies } from "../data/companies";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const CompanyDetails = () => {
  const { id } = useParams();
  const company = companies.find((company) => company.id === parseInt(id));

  return (
    <div className="card  bg-gradient-to-r from-blue-950 to-slate-950 m-4 lg:mx-20  gap-2 shadow-2xl bg-transparent  rounded-2xl s p-4  text-gray-300 ">
      <div className="m-2 flex ">
        {/* Mobile menu button */}
        <Disclosure>
          <Link to={"/"}>
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-500 p-2 text-gray-200 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 w-8 h-8 lg:w-12 lg:h-12">
              <XMarkIcon
                aria-hidden="true"
                className=" size-6  group-data-[open]:block"
              />
            </DisclosureButton>
          </Link>
        </Disclosure>
      </div>
      <div>
        <img
          src={company.logo}
          alt=""
          className="img h-32 w-40 lg:h-40 lg:w-60 p-s3 rounded-lg place-self-center"
        />
        <h2 className=" font-bold  my-2 mx-1 ">
          <span className="text-gray-50 ">name:</span>{" "}
          <span className="font-bold text-2xl">{company.name}</span>
        </h2>
        <p className=" my-2 mx-1">
          <span className="font-bold text-gray-50">Type:</span> {company.type}
        </p>
        <p className=" my-2 mx-1">
          <span className="font-bold text-gray-50">Services:</span>{" "}
          {company.service}
        </p>
        <p className=" my-2 mx-1">
          <span className="font-bold text-gray-50">Address:</span>{" "}
          {company.location}
        </p>
        {/* <p className=" my-2 mx-1 text-blue-400">{company.website}</p> */}
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="website  text-blue-600 text-3x hover:text-blue-800 font-bold "
        >
          <span className="font-bold text-blue-50">Website:</span>{" "}
          {company.website}
        </a>
        <p className=" my-2 mx-1">
          <span className="font-bold text-gray-50">Email:</span> {company.email}
        </p>
        <p className=" my-2 mx-1">
          <span className="font-bold text-gray-50">Phone:</span> {company.phone}
        </p>

        <p className=" my-2 mx-1">
          <span className="font-bold text-gray-50">About Us:</span>{" "}
          {company.description}
        </p>
      </div>
    </div>
  );
};

export default CompanyDetails;
