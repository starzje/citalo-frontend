import React, { FC, useState } from 'react';
import { Nav, Footer, MobileMenu } from 'src/components';

const PageConnectedLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  /**
   * Renders the Nav component and either the children components or the MobileMenu component based on the state of the isOpen variable.
   * Used as a fix for the issue that mobile menu had to be in seperate component (rather than inside Nav).
   * @param {boolean} isOpen - Determines whether the MobileMenu component or the children components are displayed.
   * @param {function} setIsOpen - A callback function to toggle the state of the isOpen variable.
   * @param {React.ReactNode} children - The components to be rendered when isOpen is false.
   */

  return (
    <>
      <Nav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {!isOpen ? (
        <>
          {children}
          <Footer />
        </>
      ) : (
        <MobileMenu setIsOpen={setIsOpen} />
      )}
    </>
  );
};

export default PageConnectedLayout;
