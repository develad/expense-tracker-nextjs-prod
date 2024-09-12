import { SignInButton } from '@clerk/nextjs';
import Image from 'next/image';
import guestImg from '@/public/image_01.png';
import { SVGProps } from 'react';

export function TwemojiBottleWithPoppingCork(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      {...props}
    >
      <circle
        cx="7.189"
        cy="27.5"
        r="1.5"
        fill="#CCD6DD"
      ></circle>
      <path
        fill="#CCD6DD"
        d="M9.609 13.234A3.5 3.5 0 0 0 6.189 9a3.489 3.489 0 0 0-3.45 3.005c-.017 0-.033-.005-.05-.005a2 2 0 0 0 0 4c.033 0 .063-.008.095-.01a1.49 1.49 0 0 0-.095.51c0 .46.212.867.539 1.143A1.985 1.985 0 0 0 2.689 19a2 2 0 0 0 2 2c0 .375.11.721.289 1.021A1.496 1.496 0 0 0 5.189 25a1.5 1.5 0 0 0 1.5-1.5c0-.18-.037-.35-.095-.51c.032.002.062.01.095.01a2 2 0 0 0 2-2c0-.601-.27-1.133-.69-1.5c.419-.367.69-.899.69-1.5a1.98 1.98 0 0 0-.294-1.03c.097.015.193.03.294.03a2 2 0 0 0 2-2c0-.771-.441-1.432-1.08-1.766z"
      ></path>
      <circle
        cx="5.689"
        cy="19"
        r="1"
        fill="#E4EBEF"
      ></circle>
      <path
        fill="#E4EBEF"
        d="M8.689 13a2 2 0 1 0-4 0c0 .032.008.063.01.095a1.49 1.49 0 0 0-.51-.095a1.5 1.5 0 1 0 .558 2.89c.172.638.749 1.11 1.442 1.11a1.5 1.5 0 0 0 1.5-1.5c0-.248-.066-.478-.172-.684A1.996 1.996 0 0 0 8.689 13z"
      ></path>
      <path
        fill="#C1694F"
        d="M7.301 3.076s-.817-.798-.873-.842c.233-.618.164-1.269-.25-1.692c-.627-.616-1.758-.488-2.536.29L1.521 2.953c-.777.777-.906 1.909-.29 2.536c.423.413 1.073.483 1.692.25c.045.055.842.873.842.873c.781.78 2.047.78 2.828 0l.707-.708a2 2 0 0 0 .001-2.828z"
      ></path>
      <path
        fill="#A95233"
        d="M6.727 3.985c.096-.096.395-.412.703-.75c-.043-.053-.08-.109-.13-.159c0 0-.817-.798-.873-.842c-.112.298-.289.59-.542.842L3.766 5.197c-.253.253-.545.43-.843.542c.045.055.842.873.842.873c.049.049.106.086.159.13c.291-.261.584-.537.682-.634l2.121-2.123z"
      ></path>
      <path
        fill="#264612"
        d="m34.9 23.787l-5.067-5.067c-3.664-3.664-7.322-4.14-14.358-6.945l-3.149 3.149c3.231 6.61 3.236 10.739 6.9 14.403l5.068 5.068c.993.993 1.787 1.81 2.782.816l8.409-8.412c.996-.996.408-2.019-.585-3.012z"
      ></path>
      <path
        fill="#FFE8B6"
        d="M16.205 12.164s1.739.644-.56 2.943c-2.122 2.122-2.917.651-2.917.651l-3.447-3.447l3.536-3.536l3.388 3.389z"
      ></path>
      <path
        fill="#FFD983"
        d="M13.124 9.083L12.11 8.068l-3.536 3.535l1.014 1.015c.994.993.819 1.055 2.644-.77l.592-.593c1.442-1.443 1.293-1.179.3-2.172z"
      ></path>
      <path
        fill="#264612"
        d="M12.463 7.007a1.5 1.5 0 0 1-.001 2.122l-2.827 2.827a1.5 1.5 0 1 1-2.122-2.122l2.827-2.827a1.503 1.503 0 0 1 2.123 0z"
      ></path>
      <path
        fill="#FFE8B6"
        d="M28.373 20.089a2.003 2.003 0 0 0-2.829 0l-4.949 4.95a2 2 0 0 0 0 2.828l4.242 4.242a2 2 0 0 0 2.829 0l4.949-4.949a2 2 0 0 0 0-2.828l-4.242-4.243z"
      ></path>
    </svg>
  );
}

const Guest = () => {
  return (
    <div className="grid-container-2">
      <div style={{ justifySelf: 'end' }}>
        <Image
          src={guestImg}
          width={0}
          height={0}
          alt="guest image"
          className="grid-image"
        />
      </div>
      <div className="welcome-guest">
        <h1
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Welcome
          <TwemojiBottleWithPoppingCork
            width={50}
            height={50}
            style={{ marginLeft: '0.5rem' }}
          />
        </h1>
        <p>
          Take control of your finances with Expense Tracker, the powerful and
          intuitive expense tracker designed to help you manage your money
          effortlessly. Whether you're budgeting for personal expenses or
          tracking business expenditures, Expense Tracker simplifies your
          financial life with its robust features and user friendly interface.
        </p>

        <p>Please sign in to manage your transactions</p>
        <div
          className="guest button"
          style={{ margin: '1rem auto' }}
        >
          <SignInButton mode="modal" />
        </div>
      </div>
    </div>
  );
};

export default Guest;
