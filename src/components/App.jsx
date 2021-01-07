import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: null
    }
  }

  handleSubmit (event, jsonData) {
    event.preventDefault();
    console.log(jsonData);
  }

  render () {
    return(
      <div>
        <h1>Enter JSON DATA BELOW</h1>
         <form tpye="submit" onSubmit={(event)=> this.handleSubmit(event, document.getElementById("json-input").value)}>
           <textarea id="json-input" type="text"></textarea><br></br>
           <button type="submit">Submit</button>
         </form>
      </div>

    );
  }
}

export default App;