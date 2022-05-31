import React, { useState } from 'react';
import '../style/quiz.css'
import cat from '../assets/img/confused-confusing.gif'
import {Image} from 'react-bootstrap'
import congrats from '../assets/img/congratulations.gif'

function Questions() {
	const Token = localStorage.getItem('token')

	const questions = [
		{
			questionText: 'What is the correct spelling for more than one wolf?',
			answerOptions: [
				{ answerText: 'Wolf', isCorrect: false },
				{ answerText: 'Wolves', isCorrect: true },
				{ answerText: 'Wolfes', isCorrect: false },
				{ answerText: 'Wolfs', isCorrect: false },
			],
		},
		{
			questionText: '"Maurice plays trumpet....." \nWhich of the following is the correct answer?',
			answerOptions: [
				{ answerText: 'Good', isCorrect: false },
				{ answerText: 'Well', isCorrect: true },
				{ answerText: 'Best', isCorrect: false },
				{ answerText: 'Excellent', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is an adjective?',
			answerOptions: [
				{ answerText: 'Slow', isCorrect: true },
				{ answerText: 'Run', isCorrect: false },
				{ answerText: 'Walk', isCorrect: false },
				{ answerText: 'Sprint', isCorrect: false },
			],
		},
		{
			questionText: '"I give her the best birthday present."\n Which of the following is the antonym of best?',
			answerOptions: [
				{ answerText: 'Bad', isCorrect: false },
				{ answerText: 'Worse', isCorrect: false },
				{ answerText: 'Worsen', isCorrect: false },
				{ answerText: 'Worst', isCorrect: true },
			],
		},
		{
			questionText: '"Do not play on the pool while it is raining!"\n The statement above is a ... sentence.',
			answerOptions: [
				{ answerText: 'Interogative', isCorrect: false },
				{ answerText: 'Warning', isCorrect: false },
				{ answerText: 'Imperative', isCorrect: true },
				{ answerText: 'Scolding', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	if (Token == null) {
		alert("Silahkan masuk terlebih dahulu!")
		window.location.href = "/login"
	}
	else {
		return (
			<div className='play'>
				{showScore ? (
					<div className='score-section'>
						Kamu benar {score} pertanyaan dari {questions.length} pertanyaan.
						<Image className="minion" src={congrats} height="300" />
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question  {currentQuestion + 1}</span>
							</div>
							<Image rounded src={cat} />
						</div>
						<div className='answer-section'>
								<div className='question-text'>{questions[currentQuestion].questionText}</div>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button className="answer" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		);
	}
}

export default Questions