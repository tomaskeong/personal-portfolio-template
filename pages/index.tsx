import profilePicture from '@assets/images/profile-picture-male.jpg';
import Grid from '@mui/material/Unstable_Grid2';
import styles from '@styles/Home.module.scss';
import useDocTitle from 'hooks/useDocTitle';
import Image from 'next/image';

export default function Home() {
  useDocTitle('Home');
  return (
    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid xs={12} md={6}>
        <h1 className="text--xxxl">
          Hi, I&#39;m <span className={styles.name}>John Doe</span>
        </h1>
        <p className={styles.description}>
          I work as a senior frontend developer, passionate about the whole frontend ecosystem and making pixel perfect designs with
          excellent user experience. I focus on improving usability and simplifying users life, while always having high standards regarding
          code quality and maintainability.
        </p>
      </Grid>
      <Grid xs={12} md={6}>
        <Image src={profilePicture} alt="Profile Picture" fill className={styles.profilePic} draggable="false" />
      </Grid>
    </Grid>
  );
}
