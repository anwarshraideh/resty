import React from 'react';
import './form.scss';


class Form extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            url: '',
            method: '',

        };
    }

    urlClicker = (e) => {

        e.preventDefault();
        this.setState({

            url: this.state.input,

        });

    };
    handleUrl = (e) => {
        e.preventDefault();
        this.setState({ input: e.target.value });

    };

    handleSubmit = async e => {
        e.preventDefault();
        const url = e.target.url.value;
        const method = e.target.method.value
        this.setState({url, method});
 
        let raw = await fetch(url);
        let data  = await raw.json();
      
        const count = data.count;
        const results = data.results;

        this.props.handler(results, count);
    }

    changeMethod = (e) => {

        e.preventDefault();
        this.setState({ method: e.target.value });

    };

    render() {
        return (

            <main>
                <form  onSubmit={this.handleSubmit}>
                    <label>URL: </label>
                    <input type="text" name="url" id='go' />

                    <button type="submit">GO!</button>

                    <div id="div-buttons">

                        <button value={`GET`} onClick={this.changeMethod}>GET</button>
                        <button value={`POST`} onClick={this.changeMethod}> POST</button>
                        <button value={`PUT`} onClick={this.changeMethod}>PUT</button>
                        <button value={`DELETE`} onClick={this.changeMethod}> DELETE</button>
                    </div>

                </form>

                <div id="textarea">
                    <span>
                        {this.state.method} {this.state.url}
                    </span>
                </div>

            </main>

        );

        }
    }

    export default Form;
