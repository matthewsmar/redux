import React from 'react';
import PropTypes from 'prop-types';
// import {setVisibilityFilter} from '../features/todos/filtersSlice';

const Link = ({ active, children, setVisibilityFilter, filter }) => (
    <button
       onClick={() => setVisibilityFilter(filter)}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
}

export default Link
