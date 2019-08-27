
import React from 'react'
import PropTypes from 'prop-types'
import { STATUSES } from '../../constants'

const Todo = ({ title, status, description, onDelete, onEdit }) => (
  <div className="card mb-1">
    <div className="card-header d-flex justify-content-between">
      <div>
        <span className={`badge badge-${STATUSES[status].badgeType} mr-1`}>
          { STATUSES[status].label }
        </span>
        { title }
      </div>
      <div className="actions">
        <i className="far fa-edit ml-2" onClick={onEdit}/>
        <i className="fa fa-trash ml-2" onClick={onDelete}/>
      </div>
    </div>
    <div className="card-body">
      <p className="card-text">
        { description }
      </p>
    </div>
  </div>
)

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
}

Todo.defaultProps = {
  onDelete: () => null,
  onEdit: () => null,
}

export default Todo