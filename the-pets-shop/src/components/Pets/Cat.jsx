import React, { useState } from 'react';

const Cat = () => {
	const [strokeCount, setStrokeCount] = useState(0)
	// const [mood, setMood] = useState(3)

	const renderMood = () => {
		switch (strokeCount) {
			case 0:
				return null;
			case 1:
			case 2:
			case 3:
				return <div>Meow</div>
			default:
				return <div>Stop It!</div>
		}
	}

	return (
		<div>
			<button onClick={() => setStrokeCount(strokeCount + 1)}>Stroke</button>
			{renderMood()}
		</div>
	)
}

export default Cat;