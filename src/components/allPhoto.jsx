import React from 'react';
import { withRouter } from 'react-router';
import SinglePhoto from './singlePhoto.jsx';
// import Nav from './nav.jsx';

class AllPhoto extends React.Component {

}
  // this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
  // this.handleNextPageClick = this.handleNextPageClick.bind(this);

  render() {
    return (
      <div >

        <img className="polaroid" />
        <img className="polaroid" />
        <img className="polaroid" />
        <img className="polaroid" />
        <img className="polaroid" />
        <img className="polaroid" />
        <img className="polaroid" />
        <img className="polaroid" />
        <img className="polaroid" />
        <button className="button" onClick={this.props.handlePreviousPageClick}>Previous</button>
        <button className="button" onClick={this.props.handleNextPageClick}>Next</button>
      </div>
    );
  }
}
export default withRouter(AllPhoto);
