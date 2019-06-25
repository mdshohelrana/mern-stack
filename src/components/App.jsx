import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar history={this.props.history} />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;