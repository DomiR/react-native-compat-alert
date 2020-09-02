/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Alert from 'react-native-compat-alert';

export default function App() {
	return (
		<View style={styles.container}>
			<Button
				title="Alert"
				onPress={() => {
					Alert.alert('test', 'message');
				}}
			></Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
