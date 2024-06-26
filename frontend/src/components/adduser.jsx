import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [name, setName] = useState("");
  const [password, setPasword] = useState("");
  const [alamat, setAlamat] = useState("");
  const navigate = useNavigate();

  const SaveUser = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/user", {
      name: name,
      password: password,
      alamat: alamat,
    });
    navigate("/user");
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-500">
      <form onSubmit={SaveUser} className="my-10">
        <div className="flex flex-col">
          <div className="mb-5">
            <label className="font-bold text-slate-700">User Name</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 
                    focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Password</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 
                    focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="Password"
              value={password}
              onChange={(e) => setPasword(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label className="font-bold text-slate-700">Alamat</label>
            <input
              type="text"
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 
                    focus:outline-none focus:border-slate-500 hover:shadow"
              placeholder="alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500
                 rounded-lg border-indigo-500 hover:shadow"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
