import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <div className="Button-wrapper">
                <button className="Button">
                    {this.props.name}
                </button>
            </div>
        );
    }
}

export default Button;
