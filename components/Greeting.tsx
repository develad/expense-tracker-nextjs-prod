'use client';

import { useState, useEffect, SVGProps } from 'react';

export function TwemojiShamrock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      {...props}
      width={20}
      height={20}
    >
      <path
        fill="#77B255"
        d="M32.34 19.208c.198-1.475 2.669-2.208 2.669-4.542C35.009 12.333 29.25 8.25 21 16c3.812-5.312 6.542-14.509 2.203-14.509c-1.47 0-2.579 1.342-4.328 1.342C16.5 2.833 16.208 0 14 0c-2.583 0-5 6.25 1 15c-1.5-1.625-11.083-6.625-13.002-1.269c-.628 1.753 1.731 2.781 1.544 4.519c-.178 1.654-2.597 2.037-2.597 4.372c0 3.293 8.048 4.834 16.044-1.613c-.245 4.524.557 10.515 3.857 14.158c1.344 1.483 2.407.551 2.822.187c.416-.365 1.604-1.414.185-2.822c-3.834-3.807-5.225-8.174-5.619-11.381c2.043 2.215 12.357 8.742 15.517 2.767c.881-1.668-1.643-2.977-1.411-4.71z"
      ></path>
    </svg>
  );
}

export function TwemojiSparkles(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      {...props}
      width={20}
      height={20}
    >
      <path
        fill="#FFAC33"
        d="m34.347 16.893l-8.899-3.294l-3.323-10.891a1 1 0 0 0-1.912 0l-3.322 10.891l-8.9 3.294a1 1 0 0 0 0 1.876l8.895 3.293l3.324 11.223a1 1 0 0 0 1.918-.001l3.324-11.223l8.896-3.293a.998.998 0 0 0-.001-1.875z"
      ></path>
      <path
        fill="#FFCC4D"
        d="m14.347 27.894l-2.314-.856l-.9-3.3a.998.998 0 0 0-1.929-.001l-.9 3.3l-2.313.856a1 1 0 0 0 0 1.876l2.301.853l.907 3.622a1 1 0 0 0 1.94-.001l.907-3.622l2.301-.853a.997.997 0 0 0 0-1.874zM10.009 6.231l-2.364-.875l-.876-2.365a.999.999 0 0 0-1.876 0l-.875 2.365l-2.365.875a1 1 0 0 0 0 1.876l2.365.875l.875 2.365a1 1 0 0 0 1.876 0l.875-2.365l2.365-.875a1 1 0 0 0 0-1.876z"
      ></path>
    </svg>
  );
}

export function TwemojiSun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="#FFAC33"
        d="M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2v-2z"
      ></path>
      <circle
        cx="18"
        cy="18"
        r="10"
        fill="#FFAC33"
      ></circle>
    </svg>
  );
}

const icons = {
  sun: <TwemojiSun />,
  leaf: <TwemojiShamrock />,
  stars: <TwemojiSparkles />,
};

type Greeting = {
  message: string;
  icon?: JSX.Element;
};

const Greeting = () => {
  const [greeting, setGreeting] = useState<Greeting>({
    message: '',
  });

  useEffect(() => {
    const hour: number = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting({ message: 'Good morning', icon: icons.sun });
    } else if (hour >= 12 && hour < 17) {
      setGreeting({ message: 'Good afternoon', icon: icons.leaf });
    } else if ((hour >= 17 && hour <= 23) || hour < 5) {
      setGreeting({ message: 'Good evening', icon: icons.stars });
    }
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
      }}
    >
      <h4 style={{ textTransform: 'capitalize' }}>
        {greeting.message.toLowerCase()}
      </h4>
      <div style={{ transform: 'translateY(0.2rem)' }}>{greeting.icon}</div>
    </div>
  );
};

export default Greeting;
