
import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ value, onChange }) => (
  <div className="search">
    <div className="input-group mb-3">
      <input 
        type="text" 
        placeholder="Search for a task" 
        className="form-control" 
        value={value} 
        onChange={onChange} 
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          <i className="fa fa-search" />
        </button>
      </div>
    </div>
  </div>
)

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

Search.defaultProps = {
  value: '',
  onChange: () => null
}

export default Search