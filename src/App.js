import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'
import Button from './components/Button'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    dataTestId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    dataTestId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    dataTestId: 'paperButton',
  },
]

class App extends Component {
  state = {
    score: 0,
    buttonView: true,
    para: '',
    randomImg: '',
    myImg: '',
    randomId: '',
    myId: '',
  }

  oncliked = (id, imageUrl) => {
    const randomNumber = Math.floor(Math.random() * 3)
    const randomImgg = choicesList[randomNumber].imageUrl
    const randomIdd = choicesList[randomNumber].id
    this.setState({
      randomImg: randomImgg,
      myImg: imageUrl,
      randomId: randomIdd,
      myId: id,
      buttonView: false,
    })
    if (randomIdd === id) {
      this.setState({para: 'IT IS DRAW'})
    } else if (randomIdd === 'ROCK' && id === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        para: 'YOU WON',
      }))
    } else if (id === 'SCISSORS' && randomIdd === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        para: 'YOU LOSE',
      }))
    } else if (id === 'ROCK' && randomIdd === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        para: 'YOU LOSE',
      }))
    } else if (id === 'SCISSORS' && randomIdd === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        para: 'YOU WON',
      }))
    } else if (id === 'ROCK' && randomIdd === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        para: 'YOU WON',
      }))
    } else if (id === 'PAPER' && randomIdd === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        para: 'YOU LOSE',
      }))
    }
  }

  renderButtons = () => (
    <div>
      {choicesList.map(eachChoice => (
        <Button
          detail={eachChoice}
          key={eachChoice.id}
          onclikedButton={this.oncliked}
        />
      ))}
    </div>
  )

  playAgain = () => {
    this.setState({buttonView: true})
  }

  renderResult = () => {
    const {myImg, randomImg, para} = this.state
    return (
      <div className="result-div">
        <div className="yi">
          <div className="div-3">
            <h1>YOU</h1>
            <img src={myImg} alt="your choice" className="img" />
          </div>
          <div className="div-3">
            <h1>OPPONENT</h1>
            <img src={randomImg} alt="opponent choice" className="img" />
          </div>
        </div>
        <p className="para">{para}</p>
        <button type="button" onClick={this.playAgain} className="again">
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {buttonView, score} = this.state
    return (
      <div className="div-main">
        <div className="div-1">
          <div className="heading">
            <h1>
              Rock <br />
              Paper <br />
              Scissors
            </h1>
          </div>
          <div className="score">
            <p>Score</p>
            <p className="scoree">{score}</p>
          </div>
        </div>
        {buttonView === true ? this.renderButtons() : this.renderResult()}
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Rules
              </button>
            }
          >
            {close => (
              <>
                <button
                  aria-label="close"
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  <RiCloseLine className="cross" />
                </button>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                    className="rulesimg"
                  />
                </div>
              </>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
