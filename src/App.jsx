import { useState } from "react";

import LikeButton from "./components/LinkButton";

import LeftArrow from "./assets/Icon/left-arrow.svg";
import RightArrow from "./assets/Icon/right-arrow.svg";

import styles from "./App.module.css";

const images = [
  {
    id: 1,
    name: "Naruto eating ramen",
    image:
      "https://i.pinimg.com/originals/0a/66/6c/0a666cb60952d415c16e247c96291789.jpg",
  },
  {
    id: 2,
    name: "Naruto shippuden",
    image:
      "https://i.pinimg.com/originals/24/0b/45/240b450586e7fbb7df51a628276e6b1f.jpg",
  },
  {
    id: 3,
    name: "Kakashi sensei",
    image:
      "https://i.pinimg.com/originals/fe/86/7b/fe867ba1fe006009fefa4c9024f48c6c.jpg",
  },
  {
    id: 4,
    name: "Itachi Uchiha",
    image:
      "https://i.pinimg.com/originals/d8/14/10/d8141075886615a1d7b55ce3f9baaaa7.jpg",
  },
  {
    id: 5,
    name: "Sasuke Uchiha",
    image:
      "https://i.pinimg.com/originals/0a/a9/9f/0aa99fd35cf415c28bc0b02b4e0961cb.jpg",
  },
  {
    id: 6,
    name: "Minato Namikaze, Fourth Hokage",
    image:
      "https://i.pinimg.com/originals/37/6b/2f/376b2f400454649eca413e126c81f7bc.jpg",
  },
  {
    id: 7,
    name: "Tobirama senju, Second Hokage",
    image:
      "https://i.pinimg.com/originals/31/68/aa/3168aa9f461eb8f1e6e098814caa58f9.jpg",
  },
  {
    id: 8,
    name: "Hashirama senju, First Hokage and Ninja god",
    image:
      "https://i.pinimg.com/originals/b1/da/43/b1da43539b251887d674158bd612cc18.jpg",
  },
  {
    id: 9,
    name: "Hiruzen Sarutobi, Thrid  Hokage",
    image:
      "https://i.pinimg.com/originals/29/c4/bb/29c4bb72545b3548a49a261fd52dd077.jpg",
  },
  {
    id: 10,
    name: "Tsunade senju, Fifth  Hokage",
    image:
      "https://i.pinimg.com/originals/43/73/53/437353921d49b30ff60678f40af3fe93.jpg",
  },
  {
    id: 11,
    name: "Kakashi Hatake, Sixth  Hokage",
    image:
      "https://i.pinimg.com/originals/6a/8d/1a/6a8d1a83cae38480647b9d9f70ad9cb0.jpg",
  },
  {
    id: 12,
    name: "Naruto Uzumaki, Seventh  Hokage",
    image:
      "https://i.pinimg.com/originals/e7/88/60/e78860207a2c132c87768e0ebfc19c26.jpg",
  },
  {
    id: 13,
    name: "Boruto Uzumaki, with karma",
    image:
      "https://i.pinimg.com/originals/f2/99/e4/f299e46fcbb588d6f4257858443a18eb.jpg",
  },
  {
    id: 14,
    name: "Maito Guy, opening eight doors",
    image:
      "https://i.pinimg.com/originals/0a/23/b0/0a23b034b3a4fce1a76a47c885d7f932.jpg",
  },
  {
    id: 15,
    name: "Orochimaru",
    image:
      "https://i.pinimg.com/originals/f5/e3/79/f5e37954e382f99a4ab4d54dab261301.jpg",
  },
];

function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div className={styles.container}>
      <picture onClick={prevSlide}>
        {current === 0 ? (
          ""
        ) : (
          <img
            src={LeftArrow}
            alt="left-arrow"
            className={styles["left-arrow"]}
          />
        )}
      </picture>

      {images.map(
        (item, index) =>
          current === index && (
            <section className={styles.cardContainer} key={item.id}>
              <h2>{item.name}</h2>
              <picture>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.imageContainer}
                />
              </picture>
              <LikeButton id={item.id} />
            </section>
          )
      )}
      <picture onClick={nextSlide}>
        {current === images.length - 1 ? (
          ""
        ) : (
          <img
            src={RightArrow}
            alt="right-arrow"
            className={styles["right-arrow"]}
          />
        )}
      </picture>
    </div>
  );
}

export default App;
