import React from 'react';

import './container.scss';

export default ({wide, children}) => {
  return (
    <div className={'container ' + (wide ? 'container-wide' : '')}>
      {children}
    </div>
  );
};
