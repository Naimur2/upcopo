import { Stack, Text } from "native-base";
import React, { useEffect, useState } from "react";

export default function Counter({ expiresAt,...rest }) {
    const [remainingTime, setRemainingTime] = useState("");
    const [minWidth, setMinWidth] = useState(85);

    const getTwoDigit = (number) => {
        return number > 9 ? number : `0${number}`;
    };

    const updateTimeHandler = ({ days, hours, minutes, seconds }) => {
        const remDays = days > 0 ? `${getTwoDigit(days)}:` : "";
        const remHours = `${getTwoDigit(hours)}:`;
        const remMinuts = `${getTwoDigit(minutes)}:`;
        const remSeconds = `${getTwoDigit(seconds)}`;
        if (days > 0) {
            setMinWidth(110);
        }
        const time = remDays + remHours + remMinuts + remSeconds;

        setRemainingTime(time);
    };

    useEffect(() => {
        const countDownDate = new Date(expiresAt).getTime();
        // Update the count down every 1 second
        const x = setInterval(() => {
            // Get today's date and time
            const now = new Date().getTime();
            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );

            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            updateTimeHandler({ days, hours, minutes, seconds });
            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                setRemainingTime("Expired");
            }
        }, 1000);

        return () => clearInterval(x);
    }, [expiresAt]);

    return (
        <Stack
            alignItems={"center"}
            minW={minWidth}
            borderRadius={10}
            justifyContent={'center'}
            height={10}
            bg={"rgba(255, 255, 255, 0.85)"}
            {...rest}
        >
            <Text fontFamily={"body"} color={"dark.100"} fontWeight={500}>
                {remainingTime}
            </Text>
        </Stack>
    );
}
