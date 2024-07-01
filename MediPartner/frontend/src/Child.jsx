import React from 'react';
import PropTypes from 'prop-types';
const Child = ({name,address,mob}) => {
  return (
    <>
    <h1>Child component is running</h1>
    <h2>{name} {address} {mob}</h2>
    </>
  )
}
Child.defaultProps={
  name:'abc',
  address:'xyz',
  mob:12345
}
Child.propTypes={
  name:PropTypes.string,
  address:PropTypes.string,
  mob:PropTypes.number
}
export default Child