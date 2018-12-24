import React, {Component} from 'react';

class RadioGenerator extends Component{
    render(){
        return(
            <div className="form-group">
                <span className="form-label col-xs-4" >{this.props.label}</span>
                    {this.props.value.map((val,index) => {
                        return(
                            <div className="radio-group" key={index}>
                                <label htmlFor={val}>{val}
                                <input type={this.props.type} id={val} className={this.props.class} name={this.props.name}/>
                                </label>
                            </div>
                        )
                    })}
            </div>
        );
    }
}
export default RadioGenerator;