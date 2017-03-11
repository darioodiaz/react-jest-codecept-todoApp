import React, { PropTypes } from 'react';

function ButtonToolBar(props) {
    let buttons = [
        <input type="button" name="btn-add" key="0" onClick={props.onAdd} value="Add" />, 
        <input type="button" name="btn-clear" key="1" value="Clear" onClick={props.onClear} />];
    if (props.showRemove) {
        buttons.push(<input type="button" name="btn-remove" key="2" value="Remove" onClick={props.onRemove} />);
    }
    return (<div className="button-toolbar">{buttons}</div>);
}

ButtonToolBar.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  showRemove: PropTypes.bool
}

export default ButtonToolBar;