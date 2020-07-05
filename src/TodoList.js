import React, { Fragment, useContext } from 'react';
import { TodosContext } from './context/todos.context';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo';

function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, index) => (
            <Fragment key={index}>
              <Todo {...todo} key={todo.id} />
              {index < todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
