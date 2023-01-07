import profilePicture from '@assets/images/profile-picture-male.jpg';
import profilePictureCrop from '@assets/images/profile-picture-male-crop.jpg';
import LoopedText from '@components/looped-text';
import Grid from '@mui/material/Unstable_Grid2';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from '@styles/pages/Home.module.scss';
import { mediaQueries } from '@utils/mediaQueries';
import useDocTitle from 'hooks/useDocTitle';
import Image from 'next/image';

export default function Home() {
  const isMd = useMediaQuery(mediaQueries.md);
  useDocTitle('Home');
  return (
    <Grid container spacing={{ xs: 10 }} direction={`${!isMd ? 'row' : 'column-reverse'}`}>
      <Grid xs={12} md={6} alignSelf="center">
        <h1 className={`text--xxxl ${styles.greeting}`}>
          Hi, I&#39;m <span className={styles.name}>John Doe</span>
        </h1>
        <h3 className={styles.loopedText}>
          a <LoopedText text={['Developer', 'Web Designer', 'Music Enthusiast']} loopTiming={3} />
        </h3>
        <p className={styles.description}>
          I work as a senior frontend developer, passionate about the whole frontend ecosystem and making pixel perfect designs with
          excellent user experience. I focus on improving usability and simplifying users life, while always having high standards regarding
          code quality and maintainability.
        </p>
      </Grid>
      <Grid xs={12} md={6} display="flex" justifyContent="center">
        <div className={styles.profilePicContainer}>
          <Image
            src={!isMd ? profilePicture : profilePictureCrop}
            alt="Profile Picture"
            fill
            className={styles.profilePic}
            draggable="false"
            priority
            sizes="100%"
          />
        </div>
      </Grid>
    </Grid>
  );
}
