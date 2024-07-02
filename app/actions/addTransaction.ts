'use server';

import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

type TransactionData = {
  text: string;
  amount: number;
};

type TransactionResult = {
  data?: TransactionData;
  error?: string;
};

const addTransaction = async (
  formData: FormData
): Promise<TransactionResult> => {
  const textValue = formData.get('text');
  const amountValue = formData.get('amount');

  // Check for input values
  if (!textValue || textValue === '' || !amountValue) {
    return { error: 'Text or amount is missing' };
  }

  if (parseFloat(amountValue.toString()) === 0) {
    return { error: 'Amount cannot be zero' };
  }

  const text: string = textValue.toString(); // Ensure text is a string
  const amount: number = parseFloat(amountValue.toString()); // Parse amount as number

  // Get logged in user
  const { userId } = auth();

  // Check for user
  if (!userId) {
    return { error: 'User not found' };
  }

  //   const transactionData: TransactionData = {
  //     text,
  //     amount,
  //   };

  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: {
        text,
        amount,
        userId,
      },
    });

    revalidatePath('/');

    return { data: transactionData };
  } catch (error) {
    return {
      error: 'Transaction not added',
    };
  }
};

export { addTransaction };
