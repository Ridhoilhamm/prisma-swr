import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [alamat, setAlamat] = useState("");
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/${id}`);
        setName(response.data.name);
        setPassword(response.data.password);
        setAlamat(response.data.alamat);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    getProductById();
  }, [id]);

  const editProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/user/${id}`, {
        name: name,
        password: password,
        alamat: alamat,
       
      });
      navigate("/user");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-500">
      <form onSubmit={editProduct} className="my-10">
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
              placeholder="Product Name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
