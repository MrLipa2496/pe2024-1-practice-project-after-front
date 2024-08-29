import { Link } from 'react-router-dom';
import data from './data';
import styles from './RecomendedForYou.module.sass';

function RecomendedForYou () {
  const mapItems = ({ icon, title, body, btn }, i) => (
    <li className={styles.item} key={i}>
      <img src={icon} alt='icon' />
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.itemBody}>{body}</p>
      <Link to='/' className={styles.linkBtn}>
        {btn}
      </Link>
    </li>
  );
  return (
    <div>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Recomended For You</h2>
        <p className={styles.subTitle}>
          Personalized recommendations based upon your browsing behavior
        </p>
      </div>
      <div className={styles.moreRecomWrapper}>
        <h2 className={styles.extendedTitle}>Need More Recommendations</h2>
        <p className={styles.subExtendedTitle}>
          Two options to find an awesome name
        </p>
        <ul className={styles.itemsWtapper}>{data.map(mapItems)}</ul>
      </div>
    </div>
  );
}

export default RecomendedForYou;
