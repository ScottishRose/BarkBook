import React from 'react';
import { Link, withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import SinglePhoto from './singlePhoto.jsx';
import Add from './add.jsx';
import Nav from './nav.jsx';
// import AllPhoto from './allPhoto.jsx';

const propTypes = {
  // message: React.PropTypes.string.isRequired,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    // make ajax call to get data...
    request.get('https://barkbook-a096e.firebaseio.com/').then((res) => {
      this.setstate({
        posts: res.body,
      })
    })
  }

  render() {
  //   const posts = this.state.posts.map((post, idx) =>
  //   return (
  //     <Add
  //       key={idx}
  //     />
  //   );
  // });
    return (
      <div>
        {/* <h1>{this.props.message}</h1> */}
        <Nav />
        <SinglePhoto
          url="http://andrewmadden.com/face.png"
          name="Andy"
          social="@arlostails"
          tags="#profile #sideview"
          caption="'Profile viewz'"
        />
      </div>
    );
  }
}

App.propTypes = propTypes;

export default withRouter(App);
