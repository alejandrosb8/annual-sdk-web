import { AddDepositForm } from '../components/AddDepositForm';
import { TableDeposits } from '../components/TableDeposits';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDeposits } from '../utils/api';
import { SearchBar } from '../components/SearchBar';
import { LoadingIcon } from '../components/LoadingIcon';

export default function home() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const depositsList = await getDeposits(token);
    setLoading(false);
    if (depositsList.Status === 0) {
      setData(depositsList.Data);
      setList(depositsList.Data);
    } else {
      navigate('/annual-sdk-web/login');
    }
  };

  const handleSubmit = (e, search) => {
    e.preventDefault();
    function filterItems(query) {
      return data.filter(function (el) {
        if (el.Codigo.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          return true;
        } else if (el.Descripcion.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          return true;
        } else if (el.Direccion1.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          return true;
        } else if (el.Representante.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          return true;
        } else if (el.Telefono.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          return true;
        }
        return false;
      });
    }
    setList(filterItems(search));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <AddDepositForm />
      <h2 className="text-center mt-10 text-3xl font-bold">Lista de depositos</h2>
      <SearchBar handleSubmit={handleSubmit} />
      {loading && <LoadingIcon />}
      <TableDeposits data={list} />
    </div>
  );
}
