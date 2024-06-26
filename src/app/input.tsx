import React, { useEffect, useState } from "react";

const InputPage = ({ obj }: any) => {
  let [username, setusername] = useState("");
  let [email, setemail] = useState("");
  let [_id, set_id] = useState("");
  let handlepost = async () => {
    // main.js

    // POST request using fetch()
    fetch("http://localhost:3000/api/users", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({ username, email,_id }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  let handleupdate = async () => {
    // main.js

    // UPDATE request using fetch()
    fetch("http://localhost:3000/api/users", {
      // Adding method type
      method: "PUT",

      // Adding body or contents to send
      body: JSON.stringify({ username, email,_id }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  useEffect(() => {
    setusername(obj.username);
    setemail(obj.email);
    set_id(obj._id);
  },[obj]);
  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setusername(e.target.value)}
        className="rounded-lg border border-gray-300 p-2 mr-2 focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => setemail(e.target.value)}
        className="rounded-lg border border-gray-300 p-2 mr-2 focus:outline-none focus:border-blue-500"
      />
      <br />
      {!_id && 
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handlepost}
        >
          ADD
        </button>
      }
      {_id && 
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 ml-5"
          onClick={handleupdate}
        >
          EDIT
        </button>
      }
    </div>
  );
};

export default InputPage;
