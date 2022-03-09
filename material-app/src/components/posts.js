
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    media : {
        height : 200,
        [theme.breakpoints.down('sm')]:{
            height:130,
        }
    },
    card : {
        marginBottom : theme.spacing(5),
    },
}))

function Posts(props) {
 
  const classes = useStyle();
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
            className={classes.media}
            image= {props.url}
            title = {props.text} />
            <CardContent>
                <Typography gutterBottom variant="h4">{props.text}</Typography>
                <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size= 'small' color='primary' >Share</Button>
            <Button size= 'small' color='primary' >Learn More</Button>
        </CardActions>
    </Card>
  );
}

export default Posts;
