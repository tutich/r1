import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';


function App() {
  return (
    <div className="cont">
      <div className="container">
        <Display/>
        <Form/>
      </div>
    </div>
  );
}

export default App;
