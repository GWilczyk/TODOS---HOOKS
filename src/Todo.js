import React, { useContext } from 'react';
import { DispatchContext } from './context/todos.context';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleIsEditing] = useToggleState();
  return (
    <MenuItem component='div' style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleIsEditing={toggleIsEditing} />
      ) : (
        <>
          <Checkbox
            checked={completed}
            tabIndex={-1}
            onClick={() => dispatch({ type: 'TOGGLE', id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Edit' onClick={() => toggleIsEditing()}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label='Delete'
              onClick={() => dispatch({ type: 'REMOVE', id: id })}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </MenuItem>
  );
}

export default Todo;
