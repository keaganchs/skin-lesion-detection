// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App bg-primary dark:bg-darkPrimary">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="text-3xl font-bold underline">
          Skin Lesion Detection
        </h1>

        <p>This software is trained on the <a href="https://aistudio.baidu.com/datasetdetail/151696" target="_blank" rel="noopener noreferrer">HAM10000</a> dataset.</p>
      </header>
    </div>
  );
}

export default App;
