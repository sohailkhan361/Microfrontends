import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 
window.renderContact = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
  serviceWorker.unregister();
};
 
window.unmountContact = containerId => {
  window.location.reload(false);
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
 
if (!document.getElementById('Contact-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
  serviceWorker.unregister();
}