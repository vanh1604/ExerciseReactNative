import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Multi_style = () => {
  const [isRed, setIsRed] = useState(false);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: isRed ? 'red' : 'blue' }}>Colored Text</Text>
      <Button title="Toggle Color" onPress={toggleColor} />
    </View>
  );
};

export default Multi_style;
