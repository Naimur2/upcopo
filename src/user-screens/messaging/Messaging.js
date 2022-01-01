import { ScrollView } from "native-base";
import React from "react";
//import Icon from '../../utility/Icon';
import MessagingBody from '../../user-screens/messaging/MessagingBody';

export default function Messaging() {
    const messageBodyData = [
        {
            _id:'1',
            username:'Joel Noris',
            avaterUrl: '',
            lastMessageText:'Call ended',
            lastMessageTime:'11.14AM',
            countUnreadedMessages:'0',
        },
        {
            _id:'2',
            username:'Joel Noris',
            avaterUrl: '',
            lastMessageText:"Hey Jol, if you're free now we can..",
            lastMessageTime:'09.14AM',
            countUnreadedMessages:'3',
        },
        {
            _id:'3',
            username:'Crypto punks',
            avaterUrl: '',
            lastMessageText:'Yeah, can i call you back later',
            lastMessageTime:'11.14AM',
            countUnreadedMessages:'0',
        },
        {
            _id:'4',
            username:'Jrny club',
            avaterUrl: '',
            lastMessageText:"Hey Jol, If you're free now we can..",
            lastMessageTime:'09.14AM',
            countUnreadedMessages:'3',
        },


    ]
    const renderItem = ({ item }) => {
        return (
            <MessagingBody
            username={item.username}
            avaterUrl={item.avaterUrl}
            lastMessageText={item.lastMessageText}
            lastMessageTime={item.lastMessageTime}
            countUnreadedMessages={item.countUnreadedMessages}

            />
        );
    };

    return (
        <ScrollView>
            
            
             {/*  <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={messageBodyData}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        /> */}
        </ScrollView>
    );
}
