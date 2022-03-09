
import { Avatar, Container, Divider, ImageList, ImageListItem, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AvatarGroup } from '@material-ui/lab';

const useStyle = makeStyles(theme => ({
  container: {
    paddingTop : theme.spacing(10),
    position : 'sticky',
    top: 0,
  },
  title: {
    fontSize : 16,
    fontWeight : 500,
    color : "#555"
  },
  link : {
    marginRight : theme.spacing(2),
    fontSize : 16,
    color : '#555'
  },
}))

function Rightbar() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>Online Friends</Typography>
      <AvatarGroup max={5} style={{marginBottom : 20}}>
        <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhF0nMnhXqPFvMYzAVSLPGoXFh2J0axvyzibl6mPOJ6VndLZ9c_tMEvG-XA-DiEeddp1k&usqp=CAU" />
        <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa3--5ZNKTJCeAxDnSA8Zlxo3OKFg4bnnYh56wz4z1AoTTntgJZtXTk_58MzKRGQgT1eQ&usqp=CAU" />
        <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/839633/pexels-photo-839633.jpeg?cs=srgb&dl=pexels-daniel-xavier-839633.jpg&fm=jpg" />
        <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-sfF0xxEMHlmlRm5F_TTTYfo7jUDBOMGKWA&usqp=CAU" />
        <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhF0nMnhXqPFvMYzAVSLPGoXFh2J0axvyzibl6mPOJ6VndLZ9c_tMEvG-XA-DiEeddp1k&usqp=CAU" />
      </AvatarGroup>

      <Typography className={classes.title} gutterBottom>Gallery</Typography>
      <ImageList rowHeight={100} className={classes.imageList} cols={2} style={{marginBottom : 20}}>
          <ImageListItem >
            <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt=''/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://thumbs.dreamstime.com/b/fresh-fruit-salad-bowl-healthy-wooden-background-top-view-51971994.jpg" alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src='https://images.indianexpress.com/2021/12/christmas-snacks-kids-pexels.jpg' alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src="https://explore.liquorandwineoutlets.com/wp-content/uploads/2020/05/tea.jpeg" alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src="https://v4.mui.com/static/images/image-list/plant.jpg" alt=''/>
          </ImageListItem>
      </ImageList>

      <Typography className={classes.title} gutterBottom>Categories</Typography>
      <Link href="#" className={classes.link} variant='body2'>
        Sport 
      </Link>
      <Link href="#" className={classes.link} variant='body2'>
        Food 
      </Link>
      <Link href="#" className={classes.link} variant='body2'>
        Music 
      </Link>
      <Divider flexItem style={{marginBottom:5}}/>
      <Link href="#" className={classes.link} variant='body2'>
        Movies 
      </Link>
      <Link href="#" className={classes.link} variant='body2'>
        Science 
      </Link>
      <Link href="#" className={classes.link} variant='body2'>
        Life 
      </Link>
    </Container>
  );
}

export default Rightbar;