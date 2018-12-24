import React, {Component} from 'react';

class TextareaGenerator extends Component{
    render(){
        return(
            <div className="form-group">
                <label className="form-label col-xs-4" htmlFor={this.props.id}>{this.props.label}</label>
                <textarea id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} required={this.props.isRequired==="true" ? true : false}/>
            </div>
        );
    }
}
export default TextareaGenerator;