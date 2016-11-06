//this is from the ProfileList.jsx from project 2

import React from 'react';
import Profile from './profile.jsx';

const propTypes = {
  profile: React.PropTypes.array.isRequired,
  handlePublish: React.PropTypes.func,
  handleDelete: React.PropTypes.func,
};

class ProfileList extends React.Component {
  render() {
    if (this.props.data) {
      const profileElement = this.props.profile.map((profile, idx) => {
        return (
          <div>
          <li key={idx}>
            <Profile
              handleDelete={this.props.handleDelete}
              handlePublish={this.props.handlePublish}
              dog={profile.dog}
              breed={profile.breed}
              birthday={profile.birthday}
              id={profile.id}
            />
          </li>
          <div className="active-button">
          <button onClick={this.handleDeleteClick}>X</button>
        </div>
      </div>
      );

    });
  }
    return (
      <div>
      </div>
    );
  }
}

ProfileList.propTypes = propTypes;

export default ProfileList;
