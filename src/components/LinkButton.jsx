import { useState } from "react";

import Heart from "../assets/Icon/heart.svg";
import FullHeart from "../assets/Icon/fullHeart.svg";

import styles from "./LikeButton.module.css";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  return (
    <button className={styles.button} onClick={() => setLiked(!liked)}>
      {liked ? (
        <img src={FullHeart} className={styles.button} />
      ) : (
        <img src={Heart} className={styles.button} />
      )}
    </button>
  );
};

export default LikeButton;
