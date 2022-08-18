import React from 'react';
import { DeleteDepositButton } from './DeleteDepositButton';

export const TableDeposits = (props) => {
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
                    <th scope="col" className="text-md font-medium text-white px-6 py-4">
                      Borrar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.map((x) => {
                    return (
                      <tr key="x.Codigo" className="[border-bottom:2px_solid_#000] hover:bg-gray-300">
                        <td className="truncate p-3">{x.Codigo}</td>
                        <td className="truncate p-3">{x.Descripcion}</td>
                        <td className="truncate p-3">{x.Direccion1}</td>
                        <td className="truncate p-3">{x.Representante}</td>
                        <td className="truncate p-3">{x.Telefono}</td>
                        <td className="truncate p-3">
                          <DeleteDepositButton id={x.Codigo} />
                        </td>
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
