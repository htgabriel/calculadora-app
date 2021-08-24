import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";

function Button({onClick, text}){
	console.log(text)
	return (
		<TouchableOpacity
			onPress={() => onClick && onClick(text)}
			key={text}
			style={styles.button}
		>
			<Text style={styles.textButton}> {text} </Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#363636',
		minHeight: 100,
		minWidth: 100,
		borderRadius: 100
	},
	
	textButton: {
		color: '#eaeaea',
		fontSize: 25
	},
})

export default Button