import React from 'react';

const Todo = props => {
	const handleClick = ()=>{
		props.handleToggleItem(props.todo);
	}
	console.log(props);
		return (
		<div onClick={handleClick} className={`item${props.todo.completed ? ' completed' : ''}`}>
			<p>{props.todo.name}</p>
		</div>
		)
	
}

export default Todo;