import Main from './Container/Main'
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Main />
    </div>
    </BrowserRouter>
  );
}

export default App;
