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

    changeMethod = (e) => {

        e.preventDefault();
        this.setState({ method: e.target.value });

    };


    render() {
        return (

            <main>
                <form>
                    <label>URL: </label>
                    <input type="text" name="url"
                        onChange={this.handleUrl} required />

                    <button type='button' onClick={this.urlClicker} >GO!</button>

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
