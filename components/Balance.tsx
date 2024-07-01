import { getUserBalance } from '@/app/actions/getUserBalance';
import { addCommas } from '@/lib/utils';

const Balance = async () => {
  const { balance, error } = await getUserBalance();

  if (error) {
    return (
      <div className="note">
        <p>{error}</p>;
      </div>
    );
  }

  return (
    <div
      className={`note ${
        balance && balance < 0
          ? 'grad-minus'
          : balance && balance > 0
          ? 'grad-plus'
          : ''
      }`}
    >
      <h4>Your Balance</h4>
      <h1>${addCommas(Number(balance?.toFixed(2)) ?? 0)}</h1>
    </div>
  );
};

export default Balance;
