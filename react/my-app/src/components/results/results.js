  
import React from 'react';
// import ReactJson from 'react-json-view'
import JSONPretty from 'react-json-pretty';
import './results.scss';

class Results extends React.Component {
    render() {
        return(
            <>
                <section>
                    { <JSONPretty data={this.props.data} ></JSONPretty> }
                   
                </section>
            </>
        );
    };
}
export default Results;