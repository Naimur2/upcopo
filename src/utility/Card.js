import { Pressable } from 'native-base';
import React from 'react';

export default function Card({children,onPress,...rest}) {

return (
   <Pressable onPress={onPress} shadow={1} bg="white" p="2" borderRadius={10} {...rest} >
      {children}
   </Pressable>
);
}