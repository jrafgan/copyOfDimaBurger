import React, {Fragment} from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";

import './Layout.css';

const Layout = ({children}) => (
  <Fragment>
    <Toolbar />
    <main className="Layout-Content">
      {children}
    </main>
  </Fragment>
);

export default Layout;
