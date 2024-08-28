import data from './data';
import { Link } from 'react-router-dom';
import styles from './NamingAgency.module.sass';

function NamingAgency () {
  const mapItems = ({ icon, title, body }, i) => (
    <li className={styles.item} key={i}>
      <img className={styles.img} src={icon} alt='icon' />
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.itemBody}>{body}</p>
    </li>
  );
  return (
    <div className={styles.contentWrapper}>
      <h2>Like A Naming Agency, But Better</h2>
      <p className={styles.subTitle}>
        With Atom's managed contests, leverage our team's naming expertise and
        our pool of 300K+ naming experts. Our hybrid-solution partners you with
        a trained Atom branding consultant who will guide your crowdsourcing
        process step-by-step to get the best results possible.
      </p>
      <ul className={styles.itemContainer}>{data.map(mapItems)}</ul>
      <Link className={styles.link}>Learn More</Link>
    </div>
  );
}

export default NamingAgency;
