import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import routes from './routes';

import './index.css'

routes().then(component => {
  ReactDOM.render(
    component,
    document.getElementById('root'));
  registerServiceWorker();
})
