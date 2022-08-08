import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className="img">
        <Image src="/asset/img/building.png" alt="preparing the site" width={422} height={420} />
      </div>
    </div>
  );
};

export default Home;
