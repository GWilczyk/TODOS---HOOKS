import React, { useContext } from 'react';
import { DispatchContext } from './context/todos.context';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, task, toggleIsEditing }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: 'EDIT', id: id, newTask: value });
        reset();
        toggleIsEditing();
      }}
      style={{ marginLeft: '1rem', width: '80%' }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        margin='normal'
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
