import React from 'react';
import {Text,View} from 'react-native';
class cmain extends React.Component{
  render(){
    let initialArr = [];
    initialArr.push({id:1,text:"b33 for all"});
    initialArr.push({id:2,text:"b33 for one"});
    initialArr.push({id:3,text:"b33 is going all the way"});
    let Arr=(<View><Text>i'm one and all</Text></View>);
    let buttonsListArr = initialArr.map(buttonInfo => (
      <Text key={buttonInfo.id}>{buttonInfo.text}</Text>
    ));
    return(
      <View>
        {buttonsListArr}
        <Text>b3333</Text>
      </View>
    );
  }
}
export default cmain;
