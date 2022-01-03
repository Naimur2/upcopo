import { HStack, Image, ScrollView } from "native-base";
import React from "react";

export default function OtherUsersProfileBottom() {
    const OtherUsersProfileBottomData=[
        {
            _id:'1',
            imgUrl:'https://image.freepik.com/free-photo/house-isolated-field_1303-23773.jpg',
            imgAlt:'img1'
        },
        {
            _id:'2',
            imgUrl:'https://img.freepik.com/free-photo/3d-rendering-modern-classic-house-with-luxury-garden_105762-111.jpg?size=338&ext=jpg',
            imgAlt:'img2'
        },
        {
            _id:'3',
            imgUrl:'https://img.freepik.com/free-photo/luxury-interior-exterior-design-pool-villa-with-livingroom_41487-70.jpg?size=338&ext=jpg',
            imgAlt:'img3'
        },
        {
            _id:'4',
            imgUrl:'https://image.freepik.com/free-photo/3d-rendering-large-modern-contemporary-house-wood-concrete-early-evening_190619-1492.jpg',
            imgAlt:'img4'
        },
        {
            _id:'5',
            imgUrl:'https://img.freepik.com/free-photo/3d-rendering-large-modern-contemporary-house-wood-concrete_190619-1484.jpg?size=338&ext=jpg',
            imgAlt:'img5'
        },
        {
            _id:'6',
            imgUrl:'https://image.freepik.com/free-vector/view-two-suburban-country-houses-with-thin-trees-foreground-flat-illustration_1284-62934.jpg',
            imgAlt:'img6'
        },
    ]
    return(
        <ScrollView>
            <HStack 
            justifyContent={"space-between"}
            p={2}
            flexWrap={"wrap"}
           
                      
            >
            <Image 
            source={{uri:'https://image.freepik.com/free-vector/view-two-suburban-country-houses-with-thin-trees-foreground-flat-illustration_1284-62934.jpg'}}
            alt={'img1'}
            h={200}
            w={"48%"}
            borderRadius={20}
            />
             <Image 
            source={{uri:'https://image.freepik.com/free-vector/view-two-suburban-country-houses-with-thin-trees-foreground-flat-illustration_1284-62934.jpg'}}
            alt={'img1'}
            h={200}
            w={"48%"}
            borderRadius={20}
            />
              <Image 
            source={{uri:'https://image.freepik.com/free-vector/view-two-suburban-country-houses-with-thin-trees-foreground-flat-illustration_1284-62934.jpg'}}
            alt={'img1'}
            h={200}
            w={"48%"}
            borderRadius={20}
            />
              <Image 
            source={{uri:'https://image.freepik.com/free-vector/view-two-suburban-country-houses-with-thin-trees-foreground-flat-illustration_1284-62934.jpg'}}
            alt={'img1'}
            h={200}
            w={"48%"}
            borderRadius={20}
            />
            
            </HStack>        

        </ScrollView>

    );
}