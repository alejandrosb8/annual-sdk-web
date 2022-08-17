import { AddDepositForm } from '../components/AddDepositForm';
import { TableDeposits } from '../components/TableDeposits';

export default function home() {
  return (
    <div className="p-6">
      <AddDepositForm />
      <h2 className="text-center mt-10 text-3xl font-bold">Lista de depositos</h2>
      <TableDeposits />
    </div>
  );
}
