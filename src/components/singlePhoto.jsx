import React from 'react';
import { withRouter } from 'react-router';
// import Add from './add.jsx';
import Nav from './nav.jsx';

class SinglePhoto extends React.Component {

  // this.handlePreviousClick = this.handlePreviousClick.bind(this);
  // this.handleNextClick = this.handleNextClick.bind(this);
  // this.handleUpdateClick = this.handleUpdateClick.bind(this);
  // this.handleDeleteClick = this.handleDeleteClick.bind(this);


  render() {
    return (

      <div>
        <button className="button" onClick={this.props.handlePreviousClick}>Previous</button>
        <button className="button" onClick={this.props.handleNextClick}>Next</button>

        <ul>
          <img className="polaroid" src={this.props.url} />
          <h2>{this.props.name}</h2>
          <h3>{this.props.social}</h3>
          <h4>{this.props.tags}</h4>
          <h4>{this.props.caption}</h4>
          <button className="button" onClick={this.props.handleUpdateClick}>Update</button>
          <button className="button" onClick={this.props.handleDeleteClick}>Delete</button>
        </ul>
      </div>
    )
  }
}

export default SinglePhoto;
