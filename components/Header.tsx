import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { checkUser } from '@/lib/checkUser';
import ThemeToggle from '@/components/ThemeToggle';

const Header = async () => {
  const user = await checkUser();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2>Expense Tracker</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ThemeToggle />
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            {/* <SignOutButton /> */}
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;
