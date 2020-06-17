import React, { Component } from 'react';
import styles from "./OpenArchive.css";

type Props = {
  loadArchive: (path:String) => void,
  showNewArchiveModal: (show:Boolean) => void
};

interface IState {
  createNew: Boolean;
}

export default class OpenArchive extends Component<Props,IState> {

  constructor(props: Props) {
    super(props);
    this.state = {
      createNew: false
    };
  }

  render(){
    const {
      showNewArchiveModal,
      loadArchive
    } = this.props
    const { createNew } = this.state

    return (
      <div className={styles.modalClickCapture} onClick={() => showNewArchiveModal(false)}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
        { createNew ? 
          <div>
            Create New
          </div>
          : 
          <div>
            <div onClick={()=>this.setState({createNew:true})}>Create New Archive</div>
            <div>Open Existing Archive</div>
          </div>
        }
        </div>
      </div>
    )
  }

}
