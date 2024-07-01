import { getIncomeExpense } from '@/app/actions/getIncomeExpense';
import { addCommas } from '@/lib/utils';

const IncomeExpense = async () => {
  const { income, expense, error } = await getIncomeExpense();

  if (error) {
    return (
      <div className="note">
        <p>{error}</p>;
      </div>
    );
  }

  return (
    <div className="inc-exp-container note">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          $ {addCommas(Number(income?.toFixed(2)) ?? 0)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          $ {addCommas(Number(expense?.toFixed(2)) ?? 0)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
