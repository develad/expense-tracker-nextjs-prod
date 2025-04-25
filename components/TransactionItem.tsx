'use client';

import { useState } from 'react';
import { Transaction } from '@/types/Transaction';
import { addCommas } from '@/lib/utils';
import { toast } from 'react-toastify';
import { changeTansactionSign } from '@/app/actions/changeTansactionSign';
import { SVGProps } from 'react';

import Modal from '@/components/Modal';

import { motion } from 'framer-motion';

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
  const [isModalOpen, setModalOpen] = useState(false);

  const sign = transaction.amount < 0 ? '-' : '+';

  const handleSignToggle = async (transactionId: string) => {
    const { message, error } = await changeTansactionSign(transactionId);
    if (error) {
      toast.error('error');
    }

    if (message) {
      toast.success(message, {
        style: {
          backgroundColor: `${sign === '+' ? '#cc2e3b' : '#2ecc71'}`,
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '14px',
        },
      });
    }
  };

  if (isModalOpen) {
    return (
      <Modal
        setModalOpen={setModalOpen}
        isModalOpen={isModalOpen}
        transaction={transaction}
      />
    );
  }

  return (
    !isModalOpen && (
      <motion.li
        layout
        // viewport={{ once: true }}
        // key={transaction.id}
        // initial={{ opacity: 1, x: 0 }}
        // animate={{ opacity: 1, x: 0 }}
        // transition={{
        //   ease: 'backInOut',
        //   duration: 0.4,
        // }}
        // exit={{ opacity: 0, x: 25 }}
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
          onClick={() => {
            setModalOpen(true);
          }}
        >
          x
        </button>
      </motion.li>
    )

    // {/* </AnimatePresence> */}
  );
};

export default TransactionItem;
