import Guest from '@/components/Guest';
import { currentUser } from '@clerk/nextjs/server';
import AddTransaction from '@/components/AddTransaction';
import Greeting from '@/components/Greeting';
import Balance from '@/components/Balance';
import IncomeExpense from '@/components/IncomeExpense';
import TransactionList from '@/components/TransactionList';

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <div className="grid-container">
        <div>
          <h1 style={{ textTransform: 'capitalize' }}>
            Welcome {user.firstName?.toLowerCase()}
          </h1>
          <Greeting />
          <Balance />
          <IncomeExpense />
        </div>
        <div>
          <AddTransaction />
        </div>
        <div>
          <TransactionList />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
