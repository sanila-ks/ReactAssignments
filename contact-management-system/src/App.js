
import './App.css';
import HeaderComponent from './headerComponent/headerComponent';

import { Provider } from 'react-redux'
import UserStore from './store/userStore';

import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <Provider store = {UserStore}>
      <BrowserRouter>
        <div >
            <HeaderComponent/>
        </div>
      </BrowserRouter> 
    </Provider>
  );
}

export default App;
