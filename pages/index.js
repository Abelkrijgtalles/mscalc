import styles from "../styles/Home.module.css";
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
   <div className={styles.body}>
      <h1>Standaard</h1>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
     </Grid>
   </div>
  )
}
