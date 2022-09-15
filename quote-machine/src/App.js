
import React, { Component } from 'react'
import "./App.scss";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: '',
      author: '',
      randomIndex: ''

    };
    this.changer = this.changer.bind(this)
    this.handleChange = this.handleChange.bind(this);
  }

  changer() {
    this.setState(state => ({
      randomIndex: Math.floor(Math.random() * 4),
      quotes: state.quotes + '',
      author: state.author + ''
    }))
  };
  handleChange(event) {
    this.setState({
      quote: event.target.value,
      author: event.target.value
    });
  }
  render() {
    const possibleQuotes = ["Don’t be upset by the results you didn’t get with the work you didn’t do.",
      "Just because someone stumbles and loses their path, doesn't mean they're lost forever.",
      "We must all suffer from one of two pains: the pain of discipline or the pain of regret. The difference is discipline weighs ounces while regret weighs tons.",
      "Hard times create strong men. Strong men create good times. Good times create weak men. And, weak men create hard times.",

    ];
    const possibleAuthor = ["Inky Johnson",
      "Charles Xavier(X-Men)",
      "Jim Rohn",
      "G. Michael Hopf",]
    const answer = possibleQuotes[this.state.randomIndex];
    const changeAuthor = possibleAuthor[this.state.randomIndex] // Change this line
    return (

      <div id="quote-box">
        <h3 id="text" >{answer || "Hard times create strong men. Strong men create good times. Good times create weak men. And, weak men create hard times."}</h3>
        <p id="author">- {changeAuthor || "G. Michael Hopf."}</p>
        <div id="butons"><button id="new-quote" onClick={this.changer}>Fresh Quotes!</button>
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><button id="tweet-log">Tweet it</button></a>
        </div>
      </div>


    );
  }

}

