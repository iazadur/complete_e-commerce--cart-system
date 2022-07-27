import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/store';
import Layout from './views/pages/layout';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
