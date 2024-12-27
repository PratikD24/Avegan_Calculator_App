import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

export default function App() {
  const [input, setInput] = useState('');

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <View style={styles.container}>
      {/* Input display */}
      <TextInput
        label="Enter Expression"
        value={input}
        onChangeText={setInput}
        style={styles.input}
        editable={false}
      />
      {/* Button row */}
      <View style={styles.buttonRow}>
        <Button title="1" onPress={() => handleButtonPress('1')} />
        <Button title="2" onPress={() => handleButtonPress('2')} />
        <Button title="3" onPress={() => handleButtonPress('3')} />
        <Button title="+" onPress={() => handleButtonPress('+')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="4" onPress={() => handleButtonPress('4')} />
        <Button title="5" onPress={() => handleButtonPress('5')} />
        <Button title="6" onPress={() => handleButtonPress('6')} />
        <Button title="-" onPress={() => handleButtonPress('-')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="7" onPress={() => handleButtonPress('7')} />
        <Button title="8" onPress={() => handleButtonPress('8')} />
        <Button title="9" onPress={() => handleButtonPress('9')} />
        <Button title="*" onPress={() => handleButtonPress('*')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="0" onPress={() => handleButtonPress('0')} />
        <Button title="." onPress={() => handleButtonPress('.')} />
        <Button title="/" onPress={() => handleButtonPress('/')} />
        {/* Green background for "=" button */}
        <TouchableOpacity onPress={handleCalculate} style={styles.greenButton}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        {/* Clear button */}
        <Button title="C" onPress={handleClear} />
      </View>
      {/* Footer */}
      <Text style={styles.footer}>Calc by PratikDatir</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  input: {
    marginBottom: 20,
    backgroundColor: 'white',
    fontSize: 30,
    textAlign: 'right',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  greenButton: {
    backgroundColor: 'green',
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
