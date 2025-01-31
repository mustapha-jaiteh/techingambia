import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className=" flex justify-between items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            ABOUT US
          </h1>
        </div>
      </header>
      <main className=" max-w-7xl   px-4 lg:px-6 mx-auto">
        <div>
          {/* Your content */}
          <div className="  text-slate-950  mx-2 lg:mx-12 my-0 lg:my-4 justify-center items-center text-center  w-auto px-8 py-4   ">
            <h1 className="text-4xl mb-4 font-bold tracking-wide font-mono place-self-center">
              IT COMPANIES IN THE GAMBIA
            </h1>
            <p className="mb-4 text-xl  font-normal">
              Welcome to TECH IN GAMBIA, the ultimate directory for IT companies
              in The Gambia. Our platform helps users discover and connect with
              tech companies, including software firms, ISPs, and GSM providers.
              <br />
              Start exploring now and discover the best IT companies in The
              Gambia! If you want to add your company, please
              <Link to={"/contact"} className="text-blue-600 underline">
                {" "}
                Contact us
              </Link>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          <div className="mission-statement h-40 lg:h-48 bg-gradient-to-r from-blue-900 to-slate-950 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
            <h3 className="font-bold text-sm text-center">Mission Statement</h3>

            <p className="text-gray-300">
              Our mission is to create a centralized platform where users can
              easily find IT service providers by name or type.
            </p>
          </div>
          <div className="how-it-works h-40 lg:h-48 bg-gradient-to-r from-blue-900 to-slate-950 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
            <h3 className="font-bold text-sm text-center">How It Works</h3>

            <p className="text-gray-300">
              You can search for companies by name or industry type. Our data is
              regularly updated to provide the most accurate information.
            </p>
          </div>
          <div className=" h-40 lg:h-48 bg-gradient-to-r from-blue-900 to-slate-950 text-white flex flex-col m-4  gap-2 shadow-2xl bg-transparent  rounded-2xl shadow-slate-950 p-2  items-center justify-center">
            <h3 className="font-bold text-sm text-center">Who Can Benefit</h3>
            <ol className="text-gray-300">
              <li>Individuals looking for IT services.</li>
              <li>Businesses needing tech solutions.</li>
              <li>IT professionals seeking partnerships.</li>
            </ol>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
