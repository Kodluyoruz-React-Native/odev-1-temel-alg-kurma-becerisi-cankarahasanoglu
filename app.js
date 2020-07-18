import React from 'react';
import { View, Text } from 'react-native';

class Stars extends React.Component{
  render(){

    const size=10;
    const rows=[];

    for(let i=0; i <= size; i++){

      rows[i]= '';

      for(let j=0; j<=size-i; j++)  rows[i]+=' ';

      for(let j=0; j<=2*i; j++) rows[i]+='*';
    }

    rows.forEach(r => console.log(r));

    const inverseArray=rows.reverse();
    inverseArray.forEach(r => console.log(r));

    return <Text></Text>
  }
}

export default Stars;
