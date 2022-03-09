import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import ResumeStore from './resumeRedux/resumeStore';
import Header from './components/header';

function App() {
  return (
    <Provider store={ResumeStore}>
      <BrowserRouter>
        <div >
          <Header />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;