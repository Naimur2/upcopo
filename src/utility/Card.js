import { Pressable } from 'native-base';
import React from 'react';

export default function Card({children,onPress,_pressed,...rest}) {

return (
   <Pressable _pressed={_pressed} onPress={onPress}  bg="white" p="2" borderRadius={10} {...rest} >
      {children}
   </Pressable>
);
}