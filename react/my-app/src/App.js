import React from 'react';
import './App.scss';

import Header from './components/header/header' ;
import Form from './components/form/form';
import Results from './components/results/results';
import Footer from './components/footer/footer';


class App extends React.Component { 

  constructor(props){
    super(props);

    this.state = {
      results: {},
      count: 0
    }

  }

  handleForm = (results, count) => {
  this.setState({results: results, count: count});
}

  render(){
    return(
      <>  
      <Header />
      <Form handler={this.handleForm} />
      <Results data={this.state} /> 
      <Footer />
      </>
    )
  }


}



export default App;

