import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
  const { width, height, ellipsisPosition } = props;

  return (
    <div className='lds-ellipsis-container' style={{ height, width }}>
      <div className='lds-ellipsis' style={{ top: ellipsisPosition.top }}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

Loader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  ellipsisPosition: PropTypes.shape({
    top: PropTypes.string,
  }),
};

Loader.defaultProps = {
  height: '500px',
  width: '100%',
  ellipsisPosition: {
    top: '60%',
  },
};

export default Loader;
