import React, {Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from "@material-ui/core/IconButton";
import Delete from '@material-ui/icons/Delete';

class TodoComponent extends Component {
    constructor(props) {
        super(props);

        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    }

    onChangeCheckbox(e) {
        this.props.updateTodo({
            id: this.props.id,
            status: e.target.checked
        });
    }

    render() {
        return (
            <div className="todo">
                <Checkbox checked={this.props.status}
                          onChange={this.onChangeCheckbox}
                />
                <div className="todoTitle">
                    {this.props.title}
                </div>
                <IconButton>
                    <Delete/>
                </IconButton>
            </div>
        );
    }
}

export default TodoComponent;