import React from 'react';

export const InputDeposit = (props) => {
  const textPlaceHolder = `Ingresa ${props.name}...`;
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="flex flex-col items-start w-full">
      <label htmlFor="codigo" className="text-md font-semibold text-gray-800">
        {capitalizeFirstLetter(props.name)}
      </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={textPlaceHolder}
        className="bg-white focus:outline-none focus:ring focus:ring-off-orange rounded px-2 text-lg h-8 w-full shadow-sm"
        required
      />
    </div>
  );
};
