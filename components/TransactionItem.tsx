'use client';

import { Transaction } from '@/types/Transaction';
import { addCommas } from '@/lib/utils';
import { toast } from 'react-toastify';
import { deleteTransaction } from '@/app/actions/deleteTransaction';
import { changeTransactionSign } from '@/app/actions/changeTransactionSign';
import { SVGProps } from 'react';

export function TwemojiPlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="#2ecc71"
        d="M31 15H21V5a3 3 0 1 0-6 0v10H5a3 3 0 1 0 0 6h10v10a3 3 0 1 0 6 0V21h10a3 3 0 1 0 0-6z"
      ></path>
    </svg>
  );
}

export function TwemojiMinus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="#cc2e3b"
        d="M34 18a3 3 0 0 1-3 3H5a3 3 0 1 1 0-6h26a3 3 0 0 1 3 3z"
      ></path>
    </svg>
  );
}

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  const handleDeleteTransaction = async (transactionId: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this transaction?'
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    }
    toast.success(message);
  };

  const handleSignToggle = async (transactionId: string) => {
    const { message, error } = await changeTransactionSign(transactionId);
    if (error) {
      toast.error('error');
    }

    if (message) {
      toast.success(message);
    }
  };

  return (
    <li
      className={transaction.amount < 0 ? 'minus note' : 'plus note'}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyItems: 'center',
      }}
    >
      <span style={{ marginRight: 'auto' }}>{transaction.text}</span>
      <button
        onClick={() => handleSignToggle(transaction.id)}
        style={{
          background: 'transparent',
          border: '1px solid #ccc',
          borderRadius: '15px',
          cursor: 'pointer',
        }}
      >
        <TwemojiPlus
          width={16}
          height={16}
          style={{ marginRight: '0.5rem' }}
        />
        <TwemojiMinus
          width={16}
          height={16}
        />
      </button>
      <span style={{ marginLeft: 'auto' }}>
        {sign}${addCommas(Math.abs(transaction.amount))}
      </span>

      <button
        className="delete-btn"
        onClick={() => handleDeleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;
