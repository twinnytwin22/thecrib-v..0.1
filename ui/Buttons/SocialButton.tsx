
import { ReactNode } from 'react';

export const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <button

     
      >
        <div>{label}</div>
        {children}
      </button>
    );
  };