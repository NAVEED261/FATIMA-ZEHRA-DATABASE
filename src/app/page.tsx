"use client";
import React, { useEffect, useState } from "react";
import InputPage from "./input";

const HomePage = () => {
  let [data, setdata] = useState([]);
  let [obj,setobj]=useState({})
  useEffect(() => {
    let getdata = async () => {
      let fetchdata = await fetch("http://localhost:3000/api/users");
      let res = await fetchdata.json();
      setdata(res);
    };
    getdata();
  }, []);

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">
        SQL POSTGRES DATABASE WITH DRIZZLE QUERY
      </h1>
      <InputPage obj={obj}/>
      <br/>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((val: any, i: any) => {
          return (
            <li
              key={i}
              className="bg-white shadow-md rounded-md p-4 hover:bg-gray-100"
            >
              {val._id}
              <span className="text-gray-800 font-semibold mr-5 ml-5">
                {val.username}
              </span>
              {val.email}
              <button className="ml-5 mr-5" onClick={()=>setobj(val)}>EDIT</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
