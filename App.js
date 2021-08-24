import React, {useState} from 'react'
import {Text, View, StyleSheet} from "react-native";
import Button from "./src/components/Button";

function App(){
	const buttons = ["AC", "DEL", "%", "/", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "+/-", "="]
	let [currentNumber, setCurrentNumber] = useState('')
	const [lastNumber, setLastNumber] = useState('')
	
	function handleInput(buttonPressed){
		if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" ) return setCurrentNumber(currentNumber + " " + buttonPressed + " ")
		if(buttonPressed === "+/-") return setCurrentNumber(currentNumber *= -1)
		
		switch(buttonPressed){
			case 'DEL':
				setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
				return
			case 'AC':
				setLastNumber("")
				setCurrentNumber("")
				return
			case '=':
				setLastNumber(currentNumber + " = ")
				calculator()
				return
			case '+/-':
				return
		}
		
		setCurrentNumber(currentNumber + buttonPressed)
	}
	
	function calculator(){
		const splitNumbers = currentNumber.split(' ')
		const firstNumber = parseFloat(splitNumbers[0])
		const lastNumber = parseFloat(splitNumbers[2])
		const operator = splitNumbers[1]
		
		if(!isNaN(firstNumber) && !isNaN(lastNumber)){
			switch(operator){
				case '+':
					setCurrentNumber((firstNumber + lastNumber).toString())
					return
				case '-':
					setCurrentNumber((firstNumber - lastNumber).toString())
					return
				case '*':
					setCurrentNumber((firstNumber * lastNumber).toString())
					return
				case '/':
					setCurrentNumber((firstNumber / lastNumber).toString())
					return
			}
		}
	}
	
	return (
		<View style={{flex: 1}}>
			<View style={styles.results}>
				<Text style={styles.historyText}>{lastNumber}</Text>
				<Text style={styles.resultText}>{currentNumber}</Text>
			</View>
			
			<View style={styles.buttons}>
				{buttons.map(button => <Button onClick={handleInput} text={button} /> )}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	results: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		backgroundColor: '#414141'
	},
	
	buttons: {
		flex: 1.5,
		flexDirection: 'row',
		flexWrap: 'wrap',
		backgroundColor: '#363636',
	},

	
	resultText: {
		color: "#f5f5f5",
		margin: 10,
		fontSize: 40
	},
	
	historyText:{
		color: "#B5B7BB",
		fontSize: 20,
		marginRight: 10,
		alignSelf: 'flex-end',
	},
})

export default App