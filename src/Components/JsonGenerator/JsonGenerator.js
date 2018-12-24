import React, {Component} from 'react';

class JsonGenerator extends Component{
    state = {
        componentType: '',
        title:'',
        subTitle:'',
        elements: [],
        selectedElem: ""
    }
    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value} );
    }
    addElement = (event) => {
        event.preventDefault();
        //let elemObj = {};
       // elemObj[`${}`];
        const elemObj = Array.prototype.slice.call(event.target)
        .filter(el => el.name)
        .reduce((form, el) => ({
          ...form,
          [el.name]: el.value,
        }), {});
        console.log("elemArr", elemArr);
        let elemArr = [...this.state.elements];
        elemArr.push(elemObj);
        console.log("elemArr", elemArr);
        this.setState({elements: [...elemArr]})
    }
    handleSelect = (e) => {
        this.setState({selectedElem: e.target.value})
    }
    render(){
        
        return(
            <div className="container">
                <label>Component Type:
                    <input type="text" name="componentType" onChange={this.handleChange} />
                </label>
                <label>Title:
                    <input type="text" name="title" onChange={this.handleChange} />
                </label>
                <label>Sub Title:
                    <input type="text" name="subTitle" onChange={this.handleChange} />
                </label>
                {this.state.elements.map((item, index)=> console.log(item))}
                {this.state.elements.map((item, index)=>{
                    return(
                    <div key={index}>
                    <label>Element type:
                    <select name="element" onChange={this.handleSelect} value={item.element}>
                        <option value="">Select element</option>
                        <option value="input">Input</option>
                        <option value="input-radio">Radio</option>
                        <option value="input-check">Checkbox</option>
                        <option value="select">Select</option>
                        <option value="textarea">Textarea</option>
                        <option value="button">Button</option>
                    </select>
                </label>
                {item.element === "input" ? <label>Input type:
                    <select name="type" value={item.type}>
                        <option value="">Select input type</option>
                        <option value="text">Text</option>
                        <option value="password">Password</option>
                        <option value="email">Email</option>
                        <option value="date">Date</option>
                        <option value="color">Color</option>

                    </select>
                </label> : item.element === "button" ? <label>Input type:
                    <select name="type" value={item.type}>
                        <option value="">Select button type</option>
                        <option value="button">Button</option>
                        <option value="submit">Submit</option>
                        <option value="reset">Reset</option>
                    </select>
                </label> : null }
                
                
                <label>Field Name:
                    <input type="text" name="label"  value={item.label}/>
                </label>
                <label>Class Name:
                    <input type="text" name="class"  value={item.class}/>
                </label>
                <label>ID:
                    <input type="text" name="id" value={item.id} />
                </label>
                <label>Placeholder text:
                    <input type="text" name="placeholder" value={item.placeholder} />
                </label>
                <label>Required Field?:
                    <select name="required" >
                        <option value="">select yes/no</option>
                        <option value="true">yes</option>
                        <option value="false">no</option>
                    </select>
                </label>
                <button type="submit">Delete Element</button>
                </div>)
                })}
                <form onSubmit={this.addElement}>
                <label>Element type:
                    <select name="element" onChange={this.handleSelect}>
                        <option value="">Select element</option>
                        <option value="input">Input</option>
                        <option value="input-radio">Radio</option>
                        <option value="input-check">Checkbox</option>
                        <option value="select">Select</option>
                        <option value="textarea">Textarea</option>
                        <option value="button">Button</option>
                    </select>
                </label>
                {this.state.selectedElem === "input" ? <label>Input type:
                    <select name="type" >
                        <option value="">Select input type</option>
                        <option value="text">Text</option>
                        <option value="password">Password</option>
                        <option value="email">Email</option>
                        <option value="date">Date</option>
                        <option value="color">Color</option>

                    </select>
                </label> : this.state.selectedElem === "button" ? <label>Input type:
                    <select name="type" >
                        <option value="">Select button type</option>
                        <option value="button">Button</option>
                        <option value="submit">Submit</option>
                        <option value="reset">Reset</option>
                    </select>
                </label> : null }
                
                
                <label>Field Name:
                    <input type="text" name="label"  />
                </label>
                <label>Class Name:
                    <input type="text" name="class"  />
                </label>
                <label>ID:
                    <input type="text" name="id"  />
                </label>
                <label>Placeholder text:
                    <input type="text" name="placeholder"  />
                </label>
                <label>Required Field?:
                    <select name="required" >
                        <option value="">select yes/no</option>
                        <option value="true">yes</option>
                        <option value="false">no</option>
                    </select>
                </label>
                <button type="submit">Add Element</button>
                </form>

                <div>
                    <h1>Generated JSON</h1>
                    <div className="well">{JSON.stringify(this.state)}
                    </div>
                </div>
            </div>
        );
    }
}

export default JsonGenerator;