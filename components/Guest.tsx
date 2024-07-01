import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div
      className="guest note"
      style={{ padding: '4rem 20px', borderRadius: '25px' }}
    >
      <h1>Welcome 🎉</h1>
      <p>Please sign in to manage your transactions</p>
      <SignInButton />
    </div>
  );
};

export default Guest;
