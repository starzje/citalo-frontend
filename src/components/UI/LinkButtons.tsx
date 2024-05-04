import { ReactNode } from '@mdx-js/react/lib';
import Link from 'next/link';
import React, { FC } from 'react';

interface LinkButtonsProps {
  link: string;
  label: string;
  openInNewTab?: boolean;
  icon: ReactNode;
}

const LinkButtons: FC<LinkButtonsProps> = ({
  link,
  label,
  openInNewTab = false,
  icon,
}) => {
  return (
    <Link
      href={link}
      target={openInNewTab ? '_blank' : ''}
      className="bg-dark-brown hover:bg-[#776258] font-semibold text-white rounded-2xl flex-1 inline-block py-2 "
      aria-label={`idi na ${label}`}
    >
      <div className="flex justify-center items-center gap-2">
        {icon}
        {label}
      </div>
    </Link>
  );
};

export default LinkButtons;
