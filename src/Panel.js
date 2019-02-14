import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: this.props.children,
            classes: this.props.classes
        }
        this.addLine = this.addLine.bind(this);
    }
    addLine() {
        if(typeof(this.state.classes) != "undefined" && 
            this.state.classes.includes("h-lines")){
            return(<div><hr className="h-line" /></div>);
        }
    }
    render() {
        return(
            <div className="Panel">
                {this.addLine()}
                {this.state.children}
                {this.addLine()}
            </div>
        );
    }
}

export default Panel;
