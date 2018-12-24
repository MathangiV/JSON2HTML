import React, { Component } from 'react';
import FormComponent from './Components/FormGenerator/FormComponent';
import JsonGenerator from './Components/JsonGenerator/JsonGenerator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <JsonGenerator />
       <FormComponent apiUrl="/JSON/data.json"/>
      </div>
    );
  }
}

export default App;
