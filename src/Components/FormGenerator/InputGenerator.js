import React, {Component} from 'react';

class InputGenerator extends Component{
    render(){
        return(
            <div className="form-group">
                <label className="form-label col-xs-4" htmlFor={this.props.id}>{this.props.label}</label>
                <input type={this.props.type} id={this.props.id} placeholder={this.props.placeholder} className={this.props.class} required={this.props.isRequired==="true"?true:false}/>
            </div>
        );
    }
}
export default InputGenerator;