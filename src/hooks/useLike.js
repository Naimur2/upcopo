import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { likeAction } from "../../store/slices/likeSlice";

export default function useLike(houseId) {
    const [liked, setLiked] = React.useState(false);
    const dispatch = useDispatch();

    const likes = useSelector((state) => state.likes.likes);

    React.useEffect(() => {
        const isLiked =
            likes.filter((like) => like.houseId === houseId).length > 0;
        setLiked(isLiked);
    }, [likes]);

    const onLike = () => {
        dispatch(likeAction.likeHandler(houseId));
    };

    return [liked, onLike];
}
