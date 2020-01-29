import React from 'react';

import { Icon } from '../../../index';

const SVG_S = (
  <g>
    <path d="M8 1C7.44772 1 7 1.44772 7 2C7 2.04201 7.00259 2.08342 7.00762 2.12406C5.27853 2.56545 4 4.13342 4 6V9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H12C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9V6C12 4.13342 10.7215 2.56545 8.99238 2.12406C8.99741 2.08342 9 2.04201 9 2C9 1.44772 8.55228 1 8 1Z" />
    <path d="M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12H10Z" />
  </g>
);

const SVG_M = (
  <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.89 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16H5.5C4.67157 16 4 16.6716 4 17.5C4 18.3284 4.67157 19 5.5 19H18.5C19.3284 19 20 18.3284 20 17.5C20 16.6716 19.3284 16 18.5 16H18Z" />
);

const Ring = props => {
  let svg;

  if (props.size === 'xs')
    // TODO
    svg = SVG_S;
  else if (props.size === 's') svg = SVG_S;
  else if (props.size === 'm') svg = SVG_M;

  return <Icon {...props}>{svg}</Icon>;
};

export default Ring;
