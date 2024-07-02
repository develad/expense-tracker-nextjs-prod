'use client';

import { addTransaction } from '@/app/actions/addTransaction';
import { toast } from 'react-toastify';
import { useRef } from 'react';

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const clientAction = async (formData: FormData) => {
    // console.log(formData.get('text'), formData.get('amount'));

    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success('Transaction added');
      formRef.current?.reset();
    }
  };
  return (
    <>
      <h3>Add Transaction</h3>
      <form
        ref={formRef}
        action={clientAction}
      >
        <div className="form-control">
          <label htmlFor="text">Transaction Name</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label
            htmlFor="amount"
            style={{ textTransform: 'capitalize' }}
          >
            Amount <br />{' '}
            <span
              style={{
                color: 'red',
                textTransform: 'capitalize',
                marginRight: '4px',
              }}
            >
              negative
            </span>
            - expense
            <span style={{ margin: '0 8px' }}>|</span>
            <span
              style={{
                color: 'green',
                textTransform: 'capitalize',
                marginRight: '4px',
              }}
            >
              positive
            </span>
            - income
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step="0.01"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
