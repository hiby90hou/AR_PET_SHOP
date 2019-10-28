import React, { useState, useEffect } from 'react';

const Cat = () => {
	const [strokeCount, setStrokeCount] = useState(0)
	// const [mood, setMood] = useState(3)
	const [feedback, setFeedback] = useState('')

	const handleStroke = () => {
		let msg;
		switch (strokeCount + 1) {
			case 1:
			case 2:
			case 3:
				msg = 'Meow';
				break;
			default:
				msg = 'Stop it!'
		}

		setFeedback(msg);
		setStrokeCount(strokeCount + 1)
	}

	useEffect(() => {
		const resetStrokeCount = setInterval(() => setStrokeCount(0), 60000);
		return () => clearInterval(resetStrokeCount);
	}, [])

	useEffect(() => {
		const resetFeedback = setTimeout(() => setFeedback(''), 1500);
		return () => clearTimeout(resetFeedback);
	}, [feedback])

	return (
		<div>
			<button onClick={handleStroke}>Stroke</button>
			<div>{feedback}</div>
		</div>
	)
}

export default Cat;