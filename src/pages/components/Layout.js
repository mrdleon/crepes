import React from 'react';
import WhatsappButton from './WhatsappButton';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <WhatsappButton />
    </>
  );
};

export default Layout;