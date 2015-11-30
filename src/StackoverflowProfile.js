import React, { PropTypes } from 'react';
import axios from 'axios';

class StackoverflowProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      profile_image: ''
    }
  }
  componentDidMount() {
    axios.get(`https://api.stackexchange.com/2.2/users/${this.props.id}`, {
      params: {
        site: 'stackoverflow'
      }
    }).then((res) => {
      this.setState({
        profile_image: res.data.items[0].profile_image
      });
    });
  }
  render() {
    return (
      <img src={this.state.profile_image} />
    )
  }
}

StackoverflowProfile.propTypes = {
  id: PropTypes.string.isRequired
};

export default StackoverflowProfile;
