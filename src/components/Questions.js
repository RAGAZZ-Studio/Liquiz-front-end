import React, { useState } from 'react';

function Questions() {
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
	return (
		<div className='play'>
			{showScore ? (
				<div className='score-section'>
					Kamu benar {score} pertanyaan dari {questions.length} pertanyaan.
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Pertanyaan {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Questions