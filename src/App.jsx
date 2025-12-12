import './App.css';
import Greetings from './Greetings';
import User from './User';

function App() {
  return (
    <>
      <div className="card">
        <Greetings />
        <User name="Botiwin Nay" />
      </div>
    </>
  );
}

export default App;
