import {
    Modal
} from "native-base";
import React from "react";
import TransectionDetails from "./TransectionDetails";
import TransectionPageViewOne from './TransectionPageVievOne';


const transectionDetailsData = [
    {
        _id: "1",
        type: "Tracking Code",
        price: "20.00",
        date: "July 30,2020",
        succeed: true,
    },
    {
        _id: "2",
        type: "Refill Card",
        price: "24.00",
        date: "July 30,2020",
        succeed: true,

    },
    {
        _id: "3",
        type: "Accumulate points",
        price: "15.00",
        date: "July 30,2020",
        succeed: true,
    },
    {
        _id: "4",
        type: "Transfer money",
        price: "18.00",
        date: "July 30,2020",
        succeed: true,
    },
    {
        _id: "5",
        type: "Use points ",
        price: "8.00",
        date: "July 30,2020",
        succeed: false,
    },
];
const transectionData = [
    {
        _id: '1',
        gemBalance: '0.05',
        usdBalance: '5.00',
        trackingCode: '125245 85',
        transactionTime: 'July 30,2020',
        gemToUSD: '1'
    }
]


export default function TransectionPage({ isOPen, onClose, ...rest }) {
    const [showView1, setShowView1] = React.useState(true);

    return (
        <Modal isOpen={isOPen} onClose={onClose} {...rest}>
            <Modal.Content bg={"#F9F9F9"} w={"full"}>
                <Modal.Body>
                    {showView1 ? (
                        <TransectionPageViewOne
                            toggleTransection={() => setShowView1(false)}
                            gemBalance={transectionData[0].gemBalance}
                            usdBalance={transectionData[0].usdBalance}
                            trackingCode={transectionData[0].trackingCode}
                            transactionTime={transectionData[0].transactionTime}
                            gemToUSD={transectionData[0].gemToUSD}


                        />
                    ) : (
                        <TransectionDetails
                            toggleTransection={() => setShowView1(true)}
                            transectionDetailsData={transectionDetailsData}
                        />
                    )}
                </Modal.Body>
            </Modal.Content>
        </Modal>
    );
}
