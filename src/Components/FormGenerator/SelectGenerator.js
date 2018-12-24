import React, {Component} from 'react';

class SelectGenerator extends Component{
    render(){
        return(
            <div className="form-group">
                <label className="form-label col-xs-4" htmlFor={this.props.id}>{this.props.label}</label>
                <select id={this.props.id} className={this.props.class} >
                    {this.props.value.map((val,index) => {
                        return(
                            <option value={val} key={index}>{val}</option>
                        )
                    })}
                </select>
            </div>
        );
    }
}
export default SelectGenerator;