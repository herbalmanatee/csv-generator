import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: null
    }
  }

  render () {
    return(
      <div>React App component Rendered</div>
    );
  }
}

export default App;