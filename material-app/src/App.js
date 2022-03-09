
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './components/navbar';
import { Grid } from '@material-ui/core';
import Leftbar from './components/leftbar';
import Feed from './components/feed';
import Rightbar from './components/rightbar';
import Add from './components/add';

const useStyle = makeStyles(theme => ({
  right : {
    [theme.breakpoints.down('sm')] : {
      display : 'none',
    },
  },
}))

function App() {
  const classes = useStyle();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}

export default App;
