import { Box } from "native-base";
import React from "react";
import OtherUsersProfileBody from "./components/OtherUsersProfileBody";
import OtherUsersProfileBottom from "./components/OtherUsersProfileBottom";
import OtherUsersProfileHeader from "./components/OtherUsersProfileHeader";

export default function OtherUsersProfile() {
    const OtherUsersProfileHeaderData=[
        {
            _id:'1',
            avater:'https://image.freepik.com/free-vector/cute-panda-reading-book-cartoon-icon-illustration_138676-2683.jpg' ,
            userName:'Md Ahanf aksar',
            numberOfPosts:'231',
            numberOfFOllowers:'62267',
            numberOfFOllowing:'62267',
            intro:`Data processing it takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.”   -J. K. Rowling`
        }

    ]
   
    return (
        <Box bg={'#F9F9F9'}>
            <OtherUsersProfileHeader 
            avater={OtherUsersProfileHeaderData[0].avater}
            userName={OtherUsersProfileHeaderData[0].userName}
            numberOfPosts={OtherUsersProfileHeaderData[0].numberOfPosts}
            numberOfFOllowers={OtherUsersProfileHeaderData[0].numberOfFOllowers}
            numberOfFOllowing={OtherUsersProfileHeaderData[0].numberOfFOllowing}
            intro={OtherUsersProfileHeaderData[0].intro}
            />
            <OtherUsersProfileBody/>
            <OtherUsersProfileBottom/>
         
            
      
        </Box>
       
    );
}
