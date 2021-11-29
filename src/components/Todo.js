import React from 'react';

const Todo = props => {
	const handleClick = ()=>{
	}
	console.log(props);
	
		return (
		<div>
			<p>{props.todo.name}</p>
		</div>
		)
	
}

export default Todo;