import React from 'react';
import { getDeposits } from '../utils/api';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const TableDeposits = () => {
  const token = sessionStorage.getItem('token');

  const [list, setList] = useState([]);
  const [error, serError] = useState(false);

  const fetchData = async () => {
    const depositsList = await getDeposits(token);
    if (depositsList.Status === 0) {
      setList(depositsList.Data);
    } else {
      useNavigate('/annual-sdk-web/login');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-col w-full mx-auto mt-6 max-w-screen-lg">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8 w-full h-full">
            <div className="">
              <table className="min-w-full text-center bg-gray-200">
                <thead className=" bg-off-gray">
                  <tr className="[border-bottom:4px_solid_#ed581e]">
                    <th scope="col" className="text-md font-medium text-white px-6 py-4">
                      Codigo
                    </th>
                    <th scope="col" className="text-md font-medium text-white px-6 py-4">
                      Nombre
                    </th>
                    <th scope="col" className="text-md font-medium text-white px-6 py-4">
                      Direccion
                    </th>
                    <th scope="col" className="text-md font-medium text-white px-6 py-4">
                      Representante
                    </th>
                    <th scope="col" className="text-md font-medium text-white px-6 py-4">
                      Telefono
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((x) => {
                    return (
                      <tr key="x.Codigo" className="[border-bottom:2px_solid_#000] hover:bg-gray-300">
                        <td className="truncate p-3">{x.Codigo}</td>
                        <td className="truncate p-3">{x.Descripcion}</td>
                        <td className="truncate p-3">{x.Direccion1}</td>
                        <td className="truncate p-3">{x.Representante}</td>
                        <td className="truncate p-3">{x.Telefono}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
