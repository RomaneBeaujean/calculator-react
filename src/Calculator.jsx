import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            power: false,
            display: '',
            currentFormula:'',
            currentNumber:'',
            prevInput: '',
            result: '',
        };
    };

    handleResult = (e) => {
        e.preventDefault();
        if (this.state.power){
            if (this.state.prevInput !== '=') {
                let formula = this.state.currentFormula;
                let result = eval(formula);
                let currentFormula = formula + '=' + result;
                this.setState({
                    currentFormula,
                    display: result,
                    prevInput: "=",
                    result
                });
            };
        };
    };

    handleClear = () => {
        if (this.state.power){
            this.setState({
                display: '',
                currentFormula: '',
                currentNumber: '',
                prevInput: '',
                result: '',
            });
        };
    };

    handleOn = () => {
        let power = !this.state.power;
        if (power){
            this.setState({
                power,
                display: 'ON'
            });
        } else {
            this.setState({
                power,
                display: '',
                currentFormula: '',
                currentNumber: '',
                prevInput: '',
                result: '',
            });
        };
    };

    handleNumbers = (e) => {
        e.preventDefault();
        if (this.state.power) {
            let value = e.target.value;
            let currentFormula = this.state.currentFormula + value;
            let currentNumber = this.state.currentNumber + value;
            if (this.state.prevInput === "=") {
                currentFormula = value;
                currentNumber = value;
            };
            let dot = /\./
            if (!dot.test(this.state.currentNumber)){
                this.setState({
                    currentNumber,
                    currentFormula,
                    display: currentNumber,
                    prevInput: value
                });
            }; 
        };
    };

    handleFormula = (e) => {
        e.preventDefault();
        if (this.state.power) {
            let value = e.target.value;
            let currentFormula = this.state.currentFormula + value;
            if (this.state.prevInput === "=") {
                currentFormula = this.state.result + value
            };
            this.setState({
                currentFormula,
                currentNumber: '',
                display: value,
                prevInput: value,
            });
        };
    };

    render(){
        return(<div id="inner">

        <div id="calculator" >

        <div id="calculator-display" className="col">
            <div>{this.state.currentFormula}</div>
            <div>{this.state.display}</div>
        </div>

            <div id="keys">

                <div id="row-1" className="row">
                    <button onClick={this.handleNumbers} id="seven" className="button" value="7">7</button>
                    <button onClick={this.handleNumbers} id="eight" className="button" value="8">8</button>
                    <button onClick={this.handleNumbers} id="nine" className="button" value="9">9</button>
                    <button onClick={this.handleFormula} id="multiply" className="button button-2" value="*">x</button>
                    <button onClick={this.handleOn} id="on" className="button button-3" value="ON">ON</button>
                </div>

                <div id="row-2" className="row">
                    <button onClick={this.handleNumbers} id="four" className="button" value="4">4</button>
                    <button onClick={this.handleNumbers} id="five" className="button" value="5">5</button>
                    <button onClick={this.handleNumbers} id="six" className="button" value="6">6</button>
                    <button onClick={this.handleFormula} id="substract" className="button button-2" value="-">-</button>
                    <button onClick={this.handleFormula} id="divide" className="button button-2" value="/">/</button>  
                </div>

                <div id="row-3" className="row">
                    <button onClick={this.handleNumbers} id="one" className="button" value="1">1</button>
                    <button onClick={this.handleNumbers} id="two" className="button" value="2">2</button>
                    <button onClick={this.handleNumbers} id="three" className="button" value="3">3</button>
                    <button onClick={this.handleResult} id="equal" className="button button-2" value="=">=</button>
                    <button onClick={this.handleFormula} id="add" className="button button-2" value="+">+</button>
                </div>
                
                <div id="row-4" className="row">
                    <button onClick={this.handleNumbers} id="zero" className="button" value="0">0</button>
                    <button onClick={this.handleNumbers} id="decimal" className="button" value=".">.</button>
                    <button onClick={this.handleClear} id="clear" className="button button-3" value="C">C</button>
                </div>


            </div>

        </div>
        
        </div>);
    };
};

export default Calculator;