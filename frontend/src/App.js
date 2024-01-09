import React from 'react';
import Header from './Header';
import WebcamComponent from './components/Webcam';
import { DarkModeProvider } from './components/context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>

        <Header />

        <div className="flex flex-col justify-center text-center items-center">
          <div className="WebcamContainer">
            <WebcamComponent />
          </div>
          
          <h1 className="text-3xl font-bold underline">
            Skin Lesion Detection
          </h1>

          <p>This software is trained on the <a href="https://aistudio.baidu.com/datasetdetail/151696" target="_blank" rel="noopener noreferrer">HAM10000</a> dataset.</p>
        </div>

    </DarkModeProvider>
  );
}

export default App;
