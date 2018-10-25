import React from "react";
import { connect } from 'react-redux';
import { addApple } from '../../actions'

const mapStateToProps = state => {
  return { apples: state.apples };
};

class Home extends React.Component {
  addOne = ()=>{
    this.props.dispatch(addApple())
  }
  render() {
    return (
      <div>
        this is a test {this.props.apples} <button onClick={this.addOne}>add one</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
