import { useState } from 'react';
import { PlaygroundLayout } from './playground-layout';


export const Playground = () => {
	const initialCells = [
		{ id: 1, state: '' },
		{ id: 2, state: '' },
		{ id: 3, state: '' },
		{ id: 4, state: '' },
		{ id: 5, state: '' },
		{ id: 6, state: '' },
		{ id: 7, state: '' },
		{ id: 8, state: '' },
		{ id: 9, state: '' },
	];

	const [cells, setCells] = useState(initialCells);
	const [symbol, setSymbol] = useState('X');
	const [move, setMove] = useState('ХОД X');
	const [winner, setWinner] = useState('');

	const handleRestartButtonClick = () => {
		setCells(initialCells);
		setMove('ХОД X');
		setWinner('');
	};

	const handleCellClick = (id) => {
		setMove(move === 'ХОД X' ? 'ХОД O' : 'ХОД X');
		setSymbol(symbol === 'X' ? 'O' : 'X');
		const updatedCells = cells.map((cell) => {
			if (cell.id === id) {
				return { ...cell, state: symbol };
			}
			return cell;
		});
		setCells(updatedCells);
		checkWinner(updatedCells);
	};

	const checkWinner = (updatedCells) => {
		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (const combination of winningCombinations) {
			const [a, b, c] = combination;
			if (
				updatedCells[a].state &&
				updatedCells[a].state === updatedCells[b].state &&
				updatedCells[b].state === updatedCells[c].state
			) {
				setWinner(updatedCells[a].state);
				setCells(initialCells);
				break;
			}
		}
	};
	return <PlaygroundLayout move={move} cells={cells} handleCellClick={handleCellClick} handleRestartButtonClick={handleRestartButtonClick} winner={winner}/>
};
