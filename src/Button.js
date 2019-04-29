import React from 'react';
import './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: false,
            value: null
        };
    }

    render() {
        console.dir(this.state.enabled);
        return (
            <div className="Button-wrapper">
                <button className="Button" {...() => {
                    if (!this.state.enabled) {
                        return "disabled=\"disabled\"";
                    }
                }} onClick={() => {
                    this.setState({enabled: !(this.state.enabled)});
                }}>
                    {this.props.name}
                </button>
            </div>
        );
    }
}

export default Button;
