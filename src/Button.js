import React from 'react';
import './Button.css';

function ButtonEnabled(props) {
    return (
        <div className="Button-wrapper">
            <button className="Button">
                {props.name}
            </button>
        </div>
    );
}

function ButtonDisabled(props) {
    return (
        <div className="Button-wrapper">
            <button className="Button" disabled="disabled">
                {props.name}
            </button>
        </div>
    );
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.name = 'Save';
        this.state = {
            enabled: true,
            value: null
        };
    }

    render() {
        console.log(this.state.enabled);
        if (this.state.enabled) {
            return <ButtonEnabled name={this.name} onClick={() => {
                this.setState({enabled: false});
            }
            }/>;
        } else {
            return <ButtonDisabled name={this.name} onClick={() => {
                this.setState({enabled: true});
            }
            }/>;
        }
    }
}

export default Button;
