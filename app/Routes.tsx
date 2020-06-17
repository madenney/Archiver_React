import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import NavBar from './containers/NavBar';
import Modals from './containers/Modals';
import DataPage from './containers/DataPage';
import LabelPage from './containers/LabelPage';
import ComboPage from './containers/ComboPage';
import UploadPage from './containers/UploadPage';

export default function Routes() {
  return (
    <App>
      <NavBar/>
      <Modals/>
      <Switch>
        <Route path={routes.DATA} component={DataPage} />
        <Route path={routes.LABEL} component={LabelPage} />
        <Route path={routes.COMBO} component={ComboPage} />
        <Route path={routes.UPLOAD} component={UploadPage} />
        <Route path={routes.HOME} component={DataPage} />
      </Switch>
    </App>
  );
}
