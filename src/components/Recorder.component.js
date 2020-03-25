import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';

import { recorderStart, recorderStop } from 'actions/index';

class RecorderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Button
          title={this.props.recording ? 'RECORDING' : 'START RECORDING'}
          onPress={
            this.props.recording
              ? this.props.recorderStopFunction
              : this.props.recorderStartFunction
          }
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    recording: state.recorder.recording,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    recorderStartFunction: () => dispatch(recorderStart()),
    recorderStopFunction: () => dispatch(recorderStop()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecorderComponent);
