
class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header title="Test Value"/>
        <Action />
        <Options />
        <AddOptions />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    this.props
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <button>What should I do?</button>
    );
  }
}

class Options extends React.Component {
  render() {
    return(
      <div>
       some options
       <Option />
     </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>
        We be options
      </div>
    );
  }
}

class AddOptions  extends React.Component {
  render() {
    return (
      <div>
        Add some Options
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));