import { useState } from 'react'
import './App.css'

function App() {
  const [questionCount, setQuestionCount] = useState(0)
  const [optionSelected, setOption] = useState(-1)
  const [marks, setMarks] = useState(0)
  const [buttonText, setButtonText] = useState("Next")
  const [displayRetry, setDisplayRetry] = useState(false)
  const [displayQuestion, setDisplayQuestion] = useState(true)

  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Tool Markup Language",
        "Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyperlinks Text Mark Language"
      ],
      correctAnswer: 1
    },
    {
      question: "Which event triggers on button click?",
      options: [
        "onClick",
        "onLoad",
        "load",
        "click"
      ],
      correctAnswer: 0
    },
    {
      question: "Which operator checks value and type?",
      options: [
        "==",
        "!=",
        "=",
        "==="
      ],
      correctAnswer: 3
    },
    {
      question: "How do you select an element with id container?",
      options: [
        "#container",
        "*container",
        "container",
        ".container"
      ],
      correctAnswer: 0
    },
    {
      question: "Which CSS property adds space inside an element?",
      options: [
        "spacing",
        "border",
        "padding",
        "margin"
      ],
      correctAnswer: 2
    }
  ]
  // let temp = 1
  function nextQuestion() {
    console.log(questionCount)


    if (optionSelected != -1) {
      if (optionSelected == questions[questionCount].correctAnswer) {
        setMarks(marks + 1);
      }
      if (questionCount == 4) {
        setDisplayRetry(true);
        setDisplayQuestion(false);
      } else {
        setQuestionCount(questionCount + 1);
        setOption(-1);
      }

      if (questionCount == 3) {
        setButtonText("Submit");
      }
    }
    console.log(questionCount)
  }

  function chooseOption(e) {
    setOption(e.target.id)
  }

  function retry() {
    setQuestionCount(0);
    setMarks(0);
    setButtonText("Next");
    setDisplayRetry(false);
    setDisplayQuestion(true);
    setOption(-1);
  }

  return (
    <>
      <div className='temp'>


        <div className='mainWrapper'>
          <div style={{ display: displayQuestion ? 'block' : 'none' }}>
            <h2>{questions[questionCount].question}</h2>

            <div className='options'>
              <div>
                <input type='radio' id='0' name='option' onChange={chooseOption} checked={optionSelected == 0} />
                {questions[questionCount].options[0]}
              </div>
              <div>
                <input type='radio' id='1' name='option' onChange={chooseOption} checked={optionSelected == 1} />
                {questions[questionCount].options[1]}
              </div>
              <div>
                <input type='radio' id='2' name='option' onChange={chooseOption} checked={optionSelected == 2} />
                {questions[questionCount].options[2]}
              </div>
              <div>
                <input type='radio' id='3' name='option' onChange={chooseOption} checked={optionSelected == 3} />
                {questions[questionCount].options[3]}
              </div>

            </div>

            <div>
              {/* selected option: {optionSelected}
          <br/> */}
              <button onClick={nextQuestion}>{buttonText}</button>
            </div>
          </div>





          <div className='retry' style={{ display: displayRetry ? 'block' : 'none' }}>
            <h2>Total Marks: {marks}</h2>

            <button onClick={retry}>Retry</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App