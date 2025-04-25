import { deleteTransaction } from '@/app/actions/deleteTransaction';
import { addCommas } from '@/lib/utils';
import { Transaction } from '@/types/Transaction';
import { Dispatch, SVGProps, SetStateAction } from 'react';
import { toast } from 'react-toastify';

import { motion } from 'framer-motion';

type ModalProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  transaction: Transaction;
};

export function OuiTrash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M11 3h5v1H0V3h5V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zm-7.056 8H7v1H4.1l.392 2.519c.042.269.254.458.493.458h6.03c.239 0 .451-.189.493-.458l1.498-9.576H14l-1.504 9.73c-.116.747-.74 1.304-1.481 1.304h-6.03c-.741 0-1.365-.557-1.481-1.304l-1.511-9.73H9V5.95H3.157L3.476 8H8v1H3.632zM6 3h4V1H6z"></path>
    </svg>
  );
}

const Modal = ({ setModalOpen, isModalOpen, transaction }: ModalProps) => {
  const handleDeleteTransaction = async (transactionId: string) => {
    const { message, error } = await deleteTransaction(transactionId);

    if (error) {
      toast.error(error);
    }
    toast.success(message);
    setModalOpen(false);
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      style={{
        display: isModalOpen ? 'grid' : 'none',
        zIndex: 500,
        alignContent: 'start',
        textAlign: 'center',
        gap: '2rem',
        paddingTop: '1rem',
      }}
    >
      <div
        className="note"
        style={{
          width: 'fit-content',
          margin: '0 auto',
          display: 'grid',
        }}
      >
        <OuiTrash
          width={25}
          height={25}
          fill="#888888"
          style={{ margin: '1rem auto' }}
        />
        <h3
          style={{
            margin: '0px auto',
            fontSize: '1rem',
            fontWeight: '400',
            color: '#888888',
            lineHeight: '1.2',
          }}
        >
          Are you sure you want to delete this transaction?
        </h3>

        <h2
          style={{
            margin: '0.5rem 0 0 0',
            fontSize: '1.2rem',
          }}
        >
          {transaction.text}
        </h2>
        <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>
          {transaction.amount < 0 ? '-' : ''} $
          {addCommas(Math.abs(transaction.amount))}
        </h2>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="btn-box"
        >
          <button
            className="btn guest"
            style={{
              padding: '10px 40px',
              background: '#e74c3c',
            }}
            onClick={() => {
              handleDeleteTransaction(transaction.id);
            }}
          >
            Delete
          </button>
          <button
            className="btn guest"
            style={{ padding: '10px 40px' }}
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
