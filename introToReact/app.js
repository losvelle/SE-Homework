
class Player extends React.Component {
  render () {
    return (
      <div className={this.props.whichPlayer}>
        <h2>Player {this.props.whichPlayer} </h2>
        <h3>Wins: </h3>
      </div>
    )
  }
}

class Header extends React.Component {
    render() {
        return (
            <h1>React Tac Toe</h1>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Player whichPlayer='O'/>
                <Player whichPlayer='X'/>
                <Board/>
            </div>
        )
    }
}

class Board extends React.Component {
  render () {
    return (
      <div className='board'>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    )
  }
}

class Square extends React.Component {
  render () {
    return (
      <div>
        <h4>square</h4>
      </div>
    )
  }
}
// REACT
ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
