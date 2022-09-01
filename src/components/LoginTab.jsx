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
      navigate('/annual-sdk-web');
    } else {
      setError('*' + tokenData.Message);
    }

    //navigate('/');
  };
  return (
    <main className="w-full mx-auto">
      <div className="h-auto w-full max-w-xl mx-auto mt-32 relative">
        <div className="w-4/5 h-auto bg-white rounded-xl mx-auto max-w-xl z-10 shadow-xl">
          <form onSubmit={handleSubmit} className="flex justify-between items-center flex-col gap-12 px-6 py-16 z-10">
            <h2 className="text-3xl font-bold text-blue-saint">{'Iniciar Sección'}</h2>
            <div className="flex justify-between items-center flex-col gap-4 w-4/5">
              <input type="text" id="idUser" placeholder="Correo..." className="w-full bg-gray-100 text-xl py-1 px-2" />
              <input type="text" id="password" placeholder="Contraseña..." className="w-full bg-gray-100 text-xl py-1 px-2" />
            </div>
            <button
              type="submit"
              className="border-transparent border-2 px-3 py-1 bg-blue-saint text-white transition-colors hover:bg-white hover:border-blue-saint hover:text-blue-saint font-bold"
            >
              {'Iniciar Sección'}
            </button>
            {loading && <LoadingIcon />}
          </form>
          <p className="w-full text-center text-red-600 py-1">{error}</p>
        </div>
      </div>
    </main>
  );
}
