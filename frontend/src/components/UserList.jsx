import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR, { mutate } from "swr";

const UserList = () => {
  // Fungsi fetcher untuk mengambil data dari server
  const fetcher = async () => {
    const response = await axios.get("http://localhost:5000/user/");
    return response.data;
  };

  // Fungsi untuk menghapus pengguna
  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:5000/user/${userId}`);
    mutate("user"); // Memperbarui cache data
  };

  // Menggunakan SWR untuk pengambilan data
  const { data } = useSWR("user", fetcher);
  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="flex flex-col mt-5">
      <div className="w-full">
        <Link
          to="/adduser"
          className="bg-blue-500 hover:bg-blue-700 border border-slate-200 text-white font-bold py-2 px-4 rounded-lg"
        >
          Tambah Pengguna Baru
        </Link>
        <div className="relative shadow rounded-lg mt-3"></div>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th className="py-3 px-1 text-center">No</th>
              <th className="py-3 px-6">Nama Pengguna</th>
              <th className="py-3 px-6">Password</th>
              <th className="py-3 px-6">Alamat</th>
              <th className="py-3 px-1 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr className="bg-white border-b" key={user.id}>
                <td className="py-3 px-1 text-center">{index + 1}</td>
                <td className="py-3 px-6 font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="py-3 px-6">{user.password}</td>
                <td className="py-3 px-6">{user.alamat}</td>
                <td className="py-3 px-1 text-center">
                  <Link
                    to={`/edituser/${user.id}`}
                    className="font-medium bg-green-400 hover:bg-green-700 px-3 py-1 rounded-lg text-white mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="font-medium bg-gray-400 hover:bg-gray-700 px-3 py-1 rounded-lg text-white mr-1"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
