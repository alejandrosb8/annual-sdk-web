import React from 'react';
import { addDeposit } from '../utils/api';
import { InputDeposit } from './InputDeposit';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const AddDepositForm = () => {
  const token = sessionStorage.getItem('token');

  const [nav, setNav] = useState('none');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const codigo = document.getElementById('codigo');
    const nombre = document.getElementById('nombre');
    const direccion = document.getElementById('direccion');
    const representante = document.getElementById('representante');
    const telefono = document.getElementById('telefono');

    const deposito = {
      Codigo: codigo.value,
      Descripcion: nombre.value,
      Direccion1: direccion.value,
      Representante: representante.value,
      Telefono: telefono.value,
    };

    const submitData = await addDeposit(deposito, token);

    if (submitData.Status === 0) {
      window.location.reload();
    } else {
      sessionStorage.clear('token');
      window.location.reload();
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-y-8 items-center justify-evenly mx-auto mt-4 bg-gray-200 max-w-screen-sm shadow-lg p-4 rounded"
      >
        <h3 className="text-center text-2xl font-semibold">Agregar Deposito</h3>
        <div className="flex flex-col items-center gap-y-3 w-11/12">
          <InputDeposit name="codigo" type="text" />
          <InputDeposit name="nombre" type="text" />
          <InputDeposit name="direccion" type="text" />
          <InputDeposit name="representante" type="text" />
          <InputDeposit name="telefono" type="tel" />
        </div>
        <button className="bg-off-gray px-6 py-1 text-xl text-off-white rounded transition-colors hover:bg-off-orange shadow-md">
          Agregar
        </button>
      </form>
    </div>
  );
};
