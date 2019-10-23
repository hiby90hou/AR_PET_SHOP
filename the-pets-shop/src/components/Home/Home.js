import React from "react";
import { connect } from 'react-redux';
import { addApple, removeApple } from '../../actions';

import Cat from '../Pets/Cat';

const mapStateToProps = state => {
  return { apples: state.apples };
};

class Home extends React.Component {
  addOne = ()=>{
    this.props.dispatch(addApple());
  }

  minusOne = ()=>{
    this.props.dispatch(removeApple());
  }
  render() {
    return (
      <div>
        This is a test {this.props.apples} <button onClick={this.addOne}>add one</button><button onClick={this.minusOne}>minus one</button>

        This is a Cat:
        <Cat/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
