import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';

export default class App extends Component
{
  // Define constructor in our class. This constructor must contain a parameter.
  
  constructor(props)
  {
  
    // Inside the constructor we have to call the super class constructor.
  
  super(props);
  
  // We have to define two state variables, which are used to store the TextInput values. 0 is the default value.
  
  this.state={Num1:0, Num2:0};
  }

  // We have to define a function which is used to perform arithmetic operation on the Num1 and Num2.
  // This is called Arrow Function in React Native.
  
  Sum=()=>
  {
    
    // State variable values are stored in the local variables N1 and N2.
    // We also have to typecast or convert the local variables into the integer format.
    
    var N1 = parseInt(this.state.Num1);
    var N2 = parseInt(this.state.Num2);

    var R = N1 + N2;
    alert(R);
  }

  render()
  {
    return(
      <View>
        
        {/* We have to store the TextInput value into the state variable, for this use the onChangeText event. */} 
        {/* Here inside the event curly brackets "Num1" is the symbolic variable name.  */}
        {/* setState function is used to store textbox value into the state variable. */}

        <TextInput style={{borderWidth: 1, margin: 10}} placeholder="Enter First Number" keyboardType="numeric" onChangeText={Num1=>this.setState({Num1})}/>
        <TextInput style={{borderWidth: 1, margin: 10}} placeholder="Enter Second Number" keyboardType="numeric" onChangeText={Num2=>this.setState({Num2})}/>
        
        {/* We have to call the Sum function, for this use the onPress event of Button component */}
        
        <Button title="Add Numbers" onPress={this.Sum} />
      </View>
    );
  }
}