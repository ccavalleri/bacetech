import React,  {Component} from 'react';

class StackblitzComponent extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid h-75 pt-2">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://stackblitz.com/edit/react-ihsedt?embed=1&file=src/App.js&hideExplorer=1"
                  allowfullscreen="allowfullscreen"
                  frameborder="0"
                ></iframe>
          </div>
      </div>
    )
  }
}
export default StackblitzComponent;