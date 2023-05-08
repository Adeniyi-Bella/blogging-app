import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Header />
    {/* children in this case are the rest of the components */}
    {children}
  </>
);

export default Layout;