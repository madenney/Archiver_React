import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import OpenArchive from "../components/Modals/OpenArchive"
import { loadArchive } from "../actions/archive";
import { showNewArchiveModal } from "../actions/modals";

import { modalStateType } from '../reducers/types';

type Props = {
  isOpenArchiveModal: Boolean,
  showNewArchiveModal: (show: Boolean ) => void;
}

class Modals extends Component<Props>{

  constructor(props: Props) {
    super(props);
    this.state = {
      isOpenArchiveModal: false
    }
  }

  render(){
    const { isOpenArchiveModal, showNewArchiveModal } = this.props;
    return (
      <div>
        { isOpenArchiveModal ?  
          <OpenArchive
            loadArchive={loadArchive}
            showNewArchiveModal={showNewArchiveModal}
          /> 
        : "" }
      </div>
    );
  }

}

function mapStateToProps(state: {modals: modalStateType } ) {
  return {
    isOpenArchiveModal: state.modals.isOpenArchiveModal
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      loadArchive,
      showNewArchiveModal
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
