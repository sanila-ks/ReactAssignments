
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Posts from './posts';

const useStyle = makeStyles(theme => ({
  container: {
    paddingTop : theme.spacing(10)
  },
}))

function Feed() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Posts text = "First" url = "https://thumbs.dreamstime.com/b/wooden-yo-yo-17044896.jpg"/>
      <Posts text = "Second" url = "https://v4.mui.com/static/images/image-list/breakfast.jpg"/>
      <Posts text = "Third" url = "https://thumbs.dreamstime.com/b/colorful-fresh-fruit-salad-top-view-delicious-colorful-fresh-fruit-salad-watermelon-blueberries-peach-slices-strawberry-123369852.jpg"/>
      <Posts text = "Forth" url = "https://akm-img-a-in.tosshub.com/indiatoday/styles/buzz_image/public/images/story/202012/pexels-visionpic-net-3278215_x.jpeg?f07qKPkrdYjV_eMPP02CoAVNyL0dd9Y5"/>
      <Posts text = "Fifth" url = "https://www.kuvo.org/wp-content/uploads/2019/07/fireworks-2019-1024x574.png"/>
      <Posts text = "Sixth" url = "https://nwsrg.org/wp-content/uploads/2020/12/pexels-ruvim-miksanskiy-1438761-scaled-600x373.jpg"/>
    </Container>
  );
}

export default Feed;
