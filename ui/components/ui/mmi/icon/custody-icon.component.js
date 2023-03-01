import React from 'react';
import PropTypes from 'prop-types';

const CustodyIcon = ({ className, width, height, color }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 11 11"
    version="1.1"
  >
    <g id="surface1">
      <path
        d="M 10.351562 9.167969 L 10.351562 9.777344 C 10.351562 10.449219 9.835938 11 9.203125 11 L 1.148438 11 C 0.511719 11 0 10.449219 0 9.777344 L 0 1.222656 C 0 0.550781 0.511719 0 1.148438 0 L 9.203125 0 C 9.835938 0 10.351562 0.550781 10.351562 1.222656 L 10.351562 1.832031 L 5.175781 1.832031 C 4.539062 1.832031 4.027344 2.382812 4.027344 3.054688 L 4.027344 7.945312 C 4.027344 8.617188 4.539062 9.167969 5.175781 9.167969 Z M 5.175781 7.945312 L 10.929688 7.945312 L 10.929688 3.054688 L 5.175781 3.054688 Z M 7.476562 6.417969 C 7 6.417969 6.613281 6.007812 6.613281 5.5 C 6.613281 4.992188 7 4.582031 7.476562 4.582031 C 7.953125 4.582031 8.339844 4.992188 8.339844 5.5 C 8.339844 6.007812 7.953125 6.417969 7.476562 6.417969 Z M 7.476562 6.417969 "
        fill={color}
      />
    </g>
  </svg>
);

CustodyIcon.defaultProps = {
  className: undefined,
};

CustodyIcon.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default CustodyIcon;