import React from 'react';
import { deleteDeposit } from '../utils/api';
import { TrashIcon } from './TrashIcon';

export const DeleteDepositButton = (props) => {
  const handleClick = async () => {
    const codigoDeposito = props.id;
    const token = await sessionStorage.getItem('token');

    const deleteData = await deleteDeposit(codigoDeposito, token);

    if (deleteData.Status === 0) {
      window.location.reload();
    } else if (deleteData.Status !== -2) {
      sessionStorage.clear('token');
      window.location.reload();
    }
  };
  return (
    <button onClick={handleClick} className="p-1 border-2 border-blue-saint rounded transition-colors hover:bg-blue-saint">
      <TrashIcon color="#333636" />
    </button>
  );
};
