import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { followingsAction } from "../../store/slices/followingsSlice";

export default function useFollow(followersId) {
    const [following, setFollowing] = React.useState(false);
    const dispatch = useDispatch();

    const followings = useSelector((state) => state.followings.followings);

    React.useEffect(() => {
        const isFollowing =
        followings.filter((like) => like.followersId === followersId).length > 0;
        setFollowing(isFollowing);
    }, [followersId]);

    const onFollow = () => {
        dispatch(followingsAction.followingsHandler(followersId));
    };

    return [following, onFollow];
}
