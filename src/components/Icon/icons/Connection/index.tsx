import React from 'react';

import { Icon } from '../../../index';

const SVG_S = (
  <g>
    <path d="M5.50332 8.86064L5.77581 8.58815C6.20586 8.16285 6.78079 7.97235 7.34063 8.01663C7.39905 8.09554 7.46402 8.17112 7.53553 8.24264C7.88567 8.59278 8.33334 8.78595 8.79109 8.82216C8.80332 8.83868 8.81527 8.85535 8.82693 8.87216C8.82631 8.85627 8.82551 8.84039 8.82452 8.82453C9.37726 8.85899 9.94157 8.66503 10.364 8.24264L13.1924 5.41421C13.9734 4.63317 13.9734 3.36683 13.1924 2.58579C12.4113 1.80474 11.145 1.80474 10.364 2.58579L9.03816 3.91159C8.28627 3.58204 7.4757 3.42886 6.66926 3.45206L8.94975 1.17157C10.5118 -0.390524 13.0445 -0.390524 14.6066 1.17157C16.1687 2.73367 16.1687 5.26633 14.6066 6.82843L11.7782 9.65685C10.2161 11.219 7.68342 11.219 6.12132 9.65685C5.87716 9.41269 5.67116 9.14481 5.50332 8.86064Z" />
    <path d="M1.17157 8.94975C-0.390524 10.5118 -0.390524 13.0445 1.17157 14.6066C2.73367 16.1687 5.26633 16.1687 6.82843 14.6066L9.10888 12.3261C8.30244 12.3494 7.49187 12.1962 6.73997 11.8666L5.41421 13.1924C4.63316 13.9734 3.36683 13.9734 2.58579 13.1924C1.80474 12.4113 1.80474 11.145 2.58579 10.364L5.41421 7.53553C5.83661 7.11313 6.40094 6.91917 6.95369 6.95365C6.9527 6.93778 6.9519 6.9219 6.95128 6.90602C6.96294 6.92283 6.97489 6.93949 6.98712 6.95601C7.44486 6.99223 7.89251 7.1854 8.24264 7.53553C8.31415 7.60705 8.37912 7.68263 8.43754 7.76153C8.99953 7.806 9.57673 7.61387 10.0073 7.18513L10.2749 6.91758C10.107 6.63339 9.90103 6.3655 9.65685 6.12132C8.09476 4.55922 5.5621 4.55922 4 6.12132L1.17157 8.94975Z" />
  </g>
);

const SVG_M = (
  <g>
    <path d="M13.0295 6.72766L14.8283 4.92885C15.9999 3.75728 17.8994 3.75728 19.071 4.92885C20.2426 6.10042 20.2426 7.99992 19.071 9.17149L15.5355 12.707C14.3639 13.8786 12.4644 13.8786 11.2928 12.707C11.0995 12.5137 10.9381 12.3006 10.8085 12.0741C10.4709 12.2201 10.1545 12.4311 9.87858 12.707L9.2422 13.3434C9.4243 13.6182 9.63643 13.8791 9.8786 14.1212C11.8312 16.0739 14.997 16.0739 16.9497 14.1212L20.4852 10.5857C22.4378 8.63308 22.4378 5.46726 20.4852 3.51464C18.5326 1.56202 15.3668 1.56202 13.4141 3.51464L10.7119 6.21688C11.5017 6.25406 12.2864 6.42432 13.0295 6.72766Z" />
    <path d="M3.51464 13.4141C1.56202 15.3668 1.56202 18.5326 3.51464 20.4852C5.46726 22.4378 8.63308 22.4378 10.5857 20.4852L13.4856 17.5853C12.6653 17.5937 11.8439 17.4587 11.062 17.1804L9.17149 19.071C7.99992 20.2426 6.10042 20.2426 4.92885 19.071C3.75728 17.8994 3.75728 15.9999 4.92885 14.8283L8.46438 11.2928C9.63596 10.1212 11.5355 10.1212 12.707 11.2928C12.9003 11.4861 13.0618 11.6993 13.1913 11.9257C13.529 11.7797 13.8453 11.5688 14.1212 11.2928L14.7576 10.6564C14.5755 10.3816 14.3634 10.1208 14.1212 9.8786C12.1686 7.92598 9.00279 7.92598 7.05017 9.8786L3.51464 13.4141Z" />
  </g>
);

const Connection = props => {
  let svg;

  if (props.size === 'xs')
    // TODO
    svg = SVG_S;
  else if (props.size === 's') svg = SVG_S;
  else if (props.size === 'm') svg = SVG_M;

  return <Icon {...props}>{svg}</Icon>;
};

export default Connection;
