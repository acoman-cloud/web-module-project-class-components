import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

	handleChanges = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  };

  handleClick = (e)=> {
    e.preventDefault();
	  this.props.handleAddItem(this.state.input);
    this.state = {
      value: ''
    }
  }

	render() {
		return (
		<form>
			<input onChange={this.handleChanges} type='text' name='todo' placeholder='...todo'/>
			<button onClick={this.handleClick}>Add Todo</button>
      <button onClick={this.props.handleToggle}>Clear Completed</button>
		</form>
		)
	}
}

export default TodoForm;