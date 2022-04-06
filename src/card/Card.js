import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>LoremS</h3>
      <p className={styles.card__desc}>brief description</p>
      <button className={styles.card__botn}>add a cart</button>
    </div>
  );
};
export default Card;
