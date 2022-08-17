import { useNavigate } from 'react-router-dom';
import { getToken } from '../utils/api';
import { useState } from 'react';
import { LoadingIcon } from './LoadingIcon';

export default function LoginTab() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setLoading(true);

    const idUser = document.getElementById('idUser').value;
    const password = document.getElementById('password').value;

    const tokenData = await getToken(idUser, password);

    setLoading(false);

    if (tokenData.Status === 0) {
      sessionStorage.setItem('token', tokenData.Message);
      console.log(sessionStorage.getItem('token'));
      navigate('/');
    } else {
      setError('*' + tokenData.Message);
    }

    //navigate('/');
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-y-6 shadow-xl p-6 bg-gray-200 relative rounded">
        <span className="absolute [left:0] [top:0] [bottom:0] w-[3px] bg-off-orange"></span>
        <div className="flex flex-col items-center gap-y-3">
          <div className="flex flex-col items-start">
            <label htmlFor="idUser" className="text-md font-semibold text-gray-800">
              Nombre
            </label>
            <input
              type="text"
              id="idUser"
              name="idUser"
              placeholder="Ingresa el nombre de usuario..."
              className="bg-white focus:outline-none focus:ring focus:ring-off-orange rounded w-60 px-2 text-lg h-8 md:w-80 shadow-sm"
              required
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="password" className="text-md font-semibold text-gray-800">
              Clave
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Ingresa la clave..."
              className="bg-white focus:outline-none focus:ring focus:ring-off-orange rounded w-60 px-2 text-lg h-8 md:w-80 shadow-sm"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-off-gray px-6 py-1 text-xl text-off-white rounded transition-colors hover:bg-off-orange shadow-md"
        >
          Login
        </button>
      </form>
      {loading && <LoadingIcon />}
      <p className="text-center mt-4 font-semibold text-red-600">{error}</p>
    </div>
  );
}
