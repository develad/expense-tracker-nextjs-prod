'use server';

import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Transaction } from '@/types/Transaction';
import { revalidatePath } from 'next/cache';

type TransactionSign = {
  transaction?: Transaction;
  error?: string;
  message?: string;
};

const changeTansactionSign = async (id: string): Promise<TransactionSign> => {
  const { userId } = auth();

  if (!userId) {
    return {
      error: 'User not found',
    };
  }

  try {
    const transaction = await db.transaction.findUnique({
      where: {
        userId,
        id,
      },
    });

    const newSign = (transaction && -1 * transaction.amount) || 0;

    const updatedTransaction = await db.transaction.update({
      where: {
        id,
      },
      data: {
        amount: newSign,
      },
    });

    revalidatePath('/');

    return {
      message: `Update ${updatedTransaction.text} successfully as an ${
        updatedTransaction.amount < 0 ? 'expense (-)' : 'income (+)'
      }`,
    };
  } catch (error) {
    return {
      error: 'Database error',
    };
  }
};

export { changeTansactionSign };
