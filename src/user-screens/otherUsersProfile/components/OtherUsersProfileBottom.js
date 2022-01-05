import { HStack, Image, Box } from "native-base";
import React from "react";

export default function OtherUsersProfileBottom() {
    const OtherUsersProfileBottomData = [
        {
            _id: "1",
            imgUrl: "https://image.freepik.com/free-photo/house-isolated-field_1303-23773.jpg",
            imgAlt: "img1",
        },
        {
            _id: "2",
            imgUrl: "https://img.freepik.com/free-photo/3d-rendering-modern-classic-house-with-luxury-garden_105762-111.jpg?size=338&ext=jpg",
            imgAlt: "img2",
        },
        {
            _id: "3",
            imgUrl: "https://img.freepik.com/free-photo/luxury-interior-exterior-design-pool-villa-with-livingroom_41487-70.jpg?size=338&ext=jpg",
            imgAlt: "img3",
        },
        {
            _id: "4",
            imgUrl: "https://image.freepik.com/free-photo/3d-rendering-large-modern-contemporary-house-wood-concrete-early-evening_190619-1492.jpg",
            imgAlt: "img4",
        },
        {
            _id: "5",
            imgUrl: "https://img.freepik.com/free-photo/3d-rendering-large-modern-contemporary-house-wood-concrete_190619-1484.jpg?size=338&ext=jpg",
            imgAlt: "img5",
        },
        {
            _id: "6",
            imgUrl: "https://image.freepik.com/free-vector/view-two-suburban-country-houses-with-thin-trees-foreground-flat-illustration_1284-62934.jpg",
            imgAlt: "img6",
        },
    ];

    const HouseImage = ({ houseUrl, index, ...rest }) => (
        <Box
            w="48%"
            h={160}
            pb={4}
            pr={index % 2 === 0 ? "2%" : 0}
            pl={index % 2 !== 0 ? "2%" : 0}
        >
            <Image
                source={{
                    uri: houseUrl,
                }}
                alt={"house image"}
                h={"100%"}
                w={"100%"}
                borderRadius={20}
            />
        </Box>
    );
    //hello
    return (
        <HStack alignItems={'center'} justifyContent={'center'} p={2} flexWrap={"wrap"} >
            {OtherUsersProfileBottomData.map((data, index) => (
                <HouseImage
                    index={index}
                    houseUrl={data.imgUrl}
                    key={data._id}
                />
            ))}
        </HStack>
    );
}
