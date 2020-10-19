import React from 'react';

import './container.scss';

const Container = ({wide, wider, children}) => {
  return (
    <div className={'container ' + (wider ? 'container--wider' : '') + (wide ? 'container--wide' : '')}>{children}</div>
  );
};

export default Container;
