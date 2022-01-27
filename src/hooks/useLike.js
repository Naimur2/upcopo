import React from 'react';

export default function useLike({houseId}) {
  const [isLiked,setIsLiked]=React.useState(false);


  return [isLiked,setIsLiked];
}
