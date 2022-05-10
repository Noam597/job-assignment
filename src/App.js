
import { ThemeProvider } from '@emotion/react';
import { Box, createTheme, Grid, Paper, Typography} from '@mui/material';
import { purple } from '@mui/material/colors';
// import { purple } from '@mui/material/colors';
import styles from './App.module.css';
import { DataFetching } from './components/dataFetching/DataFetching';
import { Profile } from './components/profile/Profile';

function App() {


  return (
    <div className={styles.App}>
      <Typography variant ="h3" color={"white"} p={"10px"}>MEET OUR 30 FEATURED INVESTORS</Typography>
 
    <DataFetching/>
    </div>
  );
}

export default App;
