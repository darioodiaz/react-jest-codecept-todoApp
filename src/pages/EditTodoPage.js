import React, { Component } from 'react';

class EditTodoPage extends Component {
    render() {
        return (
            <div>
               Edit Todo { this.props.params.id } 
            </div>
        );
    }
}

export default EditTodoPage;