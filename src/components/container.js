import React from 'react';

import './container.scss';

const Container = ({wide, children}) => {
  return (
    <div className={'container ' + (wide ? 'container-wide' : '')}>{children}</div>
  );
};

export default Container;
