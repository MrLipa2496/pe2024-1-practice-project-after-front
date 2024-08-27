import { Link } from 'react-router-dom';
import data from './data';
import CONSTANTS from '../../../constants';
import styles from './FirstNamingPlatform.module.sass';

const { STATIC_IMAGES_PATH } = CONSTANTS;

function FirstNamingPlatform () {
  const mapItems = ({ icon, title, body }, i) => (
    <li className={styles.item} key={i}>
      <img src={icon} alt='icon' />
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.itemBody}>{body}</p>
    </li>
  );

  return (
    <div>
      <h2>Atom: The World's #1 Business Naming Platform</h2>
      <ul className={styles.itemsWrapper}>{data.map(mapItems)}</ul>
      <div className={styles.infoBtnWrapper}>
        <img src={`${STATIC_IMAGES_PATH}home/nh-theworld5.svg`} alt='icon' />
        <p>The Ultra Premium Marketplace Is Here</p>
        <Link className={styles.linkBtn}>Explore now</Link>
      </div>
    </div>
  );
}

export default FirstNamingPlatform;
