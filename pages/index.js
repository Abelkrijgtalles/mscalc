import styles from "../styles/Home.module.css";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  elevation: 0
}));

export default function Home() {
  return (
   <div className={styles.body}>
      <h1>Standaard</h1>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>MC</Item>
        </Grid>
        <Grid item xs>
          <Item>MR</Item>
        </Grid>
        <Grid item xs>
          <Item>M+</Item>
        </Grid>
        <Grid item xs>
          <Item>M-</Item>
        </Grid>
        <Grid item xs>
          <Item>MS</Item>
        </Grid>
        <Grid item xs>
          <Item>Mꜜ</Item>
        </Grid>
     </Grid>
     <Grid container spacing={3}>
        <Grid item xs>
          <Item>%</Item>
        </Grid>
        <Grid item xs>
          <Item>2√x</Item>
        </Grid>
        <Grid item xs>
          <Item>x²</Item>
        </Grid>
        <Grid item xs>
          <Item>1/x</Item>
        </Grid>
     </Grid>
   </div>
  )
}
