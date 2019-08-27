
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { STATUSES } from '../../constants'

const TaskActions = ({ filter, onTaskAdding, onFilterChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  return (
    <div className="task-actions d-flex justify-content-between align-items-center">
      <div className="add-task">
        <button className="btn btn-primary" onClick={onTaskAdding}>
          <i className="fa fa-plus pr-1" /> Add a task
        </button>
      </div>
      <div className="filter-tasks">
        <div className="dropdown">
          <button 
            className="btn btn-outline-secondary dropdown-toggle" 
            type="button" 
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <i className="fas fa-filter" />
          </button>
          <div className={classNames("dropdown-menu", dropdownOpen && 'show')} >
            {
              STATUSES.map((status, index) => (
                <li 
                  key={index}
                  className={classNames("dropdown-item cursor-pointer", filter === index && 'active')}
                  onClick={() => onFilterChange(index)}
                >
                  { status.label }
                </li>
              ))
            }
            <li className="dropdown-item cursor-pointer" onClick={() => onFilterChange(null) }>
              reset filter
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

TaskActions.propTypes = {
  filter: PropTypes.number,
  onTaskAdding: PropTypes.func,
  onFilterChange: PropTypes.func,
}

TaskActions.defaultProps = {
  filter: null,
  onTaskAdding: () => null,
  onFilterChange: () => null,
}

export default TaskActions