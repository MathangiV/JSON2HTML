import React, { Component } from 'react';
import axios from 'axios';
import InputGenerator from './InputGenerator';
import RadioGenerator from './RadioGenerator';
import TextareaGenerator from './TextareaGenerator';
import SelectGenerator from './SelectGenerator';

class FormComponent extends Component{
    state = {
        data: {},
        elements: []
    }
    componentWillMount(){
        axios.get(this.props.apiUrl).then(async(response)=>{
            if(response.data){
                this.setState({data: response.data, elements: response.data.elements})
            }
        }).catch(error=>console.log(error))
    }
    render(){
        return(
            <div className="container">
                <h1>{this.state.data.title}</h1>
                <p>{this.state.data["subTitle"]}</p>
                <form className="well form-horizontal">
                {this.state.elements.map((item, index)=>{
                    return(
                        item.element ==="input" ?
                        <InputGenerator key = {index} type={item.type} label={item.label} isRequired = {item.required} id={item.id} class={item.class} placeholder = {item.placeholder}/>
                        :
                        item.element === "button" ?
                        <button className={item.class + " btn"} key = {index} type={item.type} id={item.id}>{item.label}</button>
                        :
                        item.element === "input-radio" || item.element === "input-check" ?
                        <RadioGenerator key = {index} type={item.type} id={item.id} label={item.label} name={item.name} class={item.class} value={item.value}/>
                        :
                        item.element ==="textarea" ?
                        <TextareaGenerator key = {index} type={item.type} label={item.label} isRequired = {item.required} id={item.id} class={item.class} placeholder = {item.placeholder}/>
                        :
                        item.element ==="select" ?
                        <SelectGenerator key = {index} type={item.type} label={item.label} isRequired = {item.required} id={item.id} class={item.class} placeholder = {item.placeholder} value={item.value}/>
                        :
                        null
                    )
                })}
                </form>
            </div>
        )
    }
}

export default FormComponent;