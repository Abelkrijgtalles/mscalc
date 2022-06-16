import styles from "../styles/Home.module.css";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
   <div className={styles.body}>
      <h1>Standaard</h1>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item elevation={0} square={false}>MC</Item>
        </Grid>
        <Grid item xs>
          <Item elevation={0} square={false}>MR</Item>
        </Grid>
        <Grid item xs>
          <Item elevation={0} square={false}>M+</Item>
        </Grid>
        <Grid item xs>
          <Item elevation={0} square={false}>M-</Item>
        </Grid>
        <Grid item xs>
          <Item elevation={0} square={false}>MS</Item>
        </Grid>
        <Grid item xs>
          <Item elevation={0} square={false}>Mꜜ</Item>
        </Grid>
     </Grid>
     <Grid container spacing={3}>
        <Grid item xs>
          <Item elevation={1} square={false}>%</Item>
        </Grid>
        <Grid item xs>
          <Item elevation={1} square={false}>2√x</Item>
        </Grid>
        <Grid item xs>
          <Item elevation={1} square={false}>x²</Item>
        </Grid>
        <Grid item xs>
          <Item elevation={1} square={false}>1/x</Item>
        </Grid>
     </Grid>
   </div>
  )
}
