import React from "react";
import  ReactDOM  from "react";

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };


  function App() {
      return(
        <div>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </div>
      );
  }
  export default App;