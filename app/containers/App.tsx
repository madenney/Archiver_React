import React, { Component, ReactNode } from 'react';

import { loadArchive } from "../actions/archive";
import { showNewArchiveModal } from "../actions/modals";
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

type Props = {
  children: ReactNode,
  loadArchive: (path: String) => {},
  showNewArchiveModal: (show: Boolean) => {}
}

class App extends Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  componentDidMount(){
    const { loadArchive, showNewArchiveModal } = this.props;
    if(localStorage.lastArchive){
      loadArchive(localStorage.lastArchive);
    } else {
      showNewArchiveModal(true);
    }
  }

  render(){
    const { children } = this.props;
    return <>{children}</>;
  }

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

export default connect(() => {return{}}, mapDispatchToProps)(App);
