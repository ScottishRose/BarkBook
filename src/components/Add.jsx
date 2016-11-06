import React from 'react';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
// import Nav from './nav.jsx';


class Add extends React.Component {


  // this.handleUploadImageSubmit = this.handleUploadImageSubmit.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);


  render() {
    return (

      <div>
        <form className="add">
        <input className="upload" type="file"
          onChange={this.handleImageChange} />
        <button className="button" onClick={this.handleUploadImageSubmit}>Upload Image</button>

        <input type="text"
          placeholder="Pup's name"
          // value={this.state.value}
          onChange={this.handleNameChange} />
        <input type="text"
          placeholder="Social Media Handle"
          // value={this.state.value}
          onChange={this.handleSocialChange} />
        <input type="text"
          placeholder="Tags"
          // value={this.state.value}
          onChange={this.handleTagsChange} />
        <input type="text"
          placeholder="Caption"
          // value={this.state.value}
          onChange={this.handleCaptionChange} />
        <button className="button" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Add);
