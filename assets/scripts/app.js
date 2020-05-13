const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
	return parseInt(userInput.value);
}

function writeToLog(operationalIdentifier, prevResult, operationalNumber, newResult) {
	const logEntry = {
		operation: operationalIdentifier,
		prevResult: prevResult,
		number: operationalNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calculationDescription);
}

function calculationResult(calculationType) {
	const enteredNumber = getUserInput();

	if (calculationType !== 'ADD' &&
		calculationType !== 'SUBTRACT' &&
		calculationType !== 'MULTIPLY' &&
		calculationType !== 'DIVIDE'  ||
		!enteredNumber
	) {
		return;
	}

	const initialResult = currentResult;
	let mathOperator;

	if (calculationType === 'ADD') {
		currentResult += enteredNumber;
		mathOperator = '+';
	} else if (calculationType === 'SUBTRACT') {
		currentResult -= enteredNumber;
		mathOperator = '-';
	} else if (calculationType === 'MULTIPLY') {
		currentResult *= enteredNumber;
		mathOperator = '*';
	} else if (calculationType === 'DIVIDE') {
		currentResult /= enteredNumber;
		mathOperator = '/';
	}

	createAndWriteOutput(mathOperator, initialResult, enteredNumber);
	writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
	calculationResult('ADD');
}

function subtract() {
	calculationResult('SUBTRACT');
}

function multiplication() {
	calculationResult('MULTIPLY');
}

function divide() {
	calculationResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiplication);
divideBtn.addEventListener('click', divide);
