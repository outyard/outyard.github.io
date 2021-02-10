import React from 'react';

import './container.scss';

const Container = ({wide, wider, children}) => {
  return (
    <div className={'container ' + (wide ? 'container-wide' : '') + (wider ? 'container-wider' : '')}>
      {children}
    </div>
  );
};

export default Container;
