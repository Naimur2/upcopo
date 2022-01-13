import { FlatList, Stack } from 'native-base';
import React from 'react';
//import SearchPagesBody from './components/SearchPagesBody';
import SearchPagesHeader from './components/SearchPagesHeader';

export default function SearchPages() {
    const searchPagesBodyData = [
        {
            _id:'1',
            imgUrl: 'https://image.freepik.com/free-vector/isometric-smart-home-concept_1284-38335.jpg',
            houseName: 'Turn key house',
            address1: '953 N orange Grove Ave',
            address2: 'West Hollywood, CA 90046',
            price: '3.20'

        },
        {
            _id:'2',
            imgUrl: 'https://image.freepik.com/free-vector/isometric-view-smart-home-controlled-by-smartphone_316839-264.jpg',
            houseName: 'Capstone house',
            address1: '2715 La Cuesta Dr',
            address2: 'Los Angeles, CA 90046',
            price: '3.40'

        },
        {
            _id:'3',
            imgUrl: 'https://image.freepik.com/free-vector/isometric-smart-home-concept_1284-38335.jpg',
            houseName: 'Broadleaf Homes',
            address1: '2715 La Cuesta Dr',
            address2: 'West Hollywood, CA 90046',
            price: '2.50'

        },
        {
            _id:'4',
            imgUrl: 'https://image.freepik.com/free-vector/isometric-smart-home-concept_1284-38335.jpg',
            houseName: 'Broadleaf Homes',
            address1: '2715 La Cuesta Dr',
            address2: 'West Hollywood, CA 90046',
            price: '2.50'

        }

    ]
    
    const renderItem = ({ item }) => {
        return (
            <Stack>

            </Stack>
          /** <SearchPagesBody 
            imgUrl={item.imgUrl}
            houseName={item.houseName}
            address1={item.address1}
            address2={item.address2}
            price={item.price}
            
            /> */
        );
    };
    return (
        <Stack bg={'#E5E5E5'}>
            
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={searchPagesBodyData}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}

                ListHeaderComponent={
                        <SearchPagesHeader 
                        imgUrl={searchPagesBodyData.imgUrl}
                        houseName={searchPagesBodyData.houseName}
                        address1={searchPagesBodyData.address1}
                        address2={searchPagesBodyData.address2}
                        price={searchPagesBodyData.price}
                        _id={searchPagesBodyData._id}

                        
                        key={"1"} />  
                }

            />
           

        </Stack>

    );
}