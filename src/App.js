
import React, {useState} from "react"
import './App.css';
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes={111}
          messages={222}
          shares={333}
          name="Maria"
          description="Brecker o goleiro"
          music="Música épica"
          url="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
        />
        <Video 
          likes={444}
          messages={555}
          shares={666}
          name="Pedro"
          description="Gato Pulando"
          music="Música gatinho fofo"
          url="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
        />
      </div>
    </div>
  );
}

export default App;
