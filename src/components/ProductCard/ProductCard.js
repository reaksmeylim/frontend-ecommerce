import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

import list from '../../data/list.json'
const useStyles = makeStyles({
    card: {
        maxWidth: 245,
        maxHeight: 345
    },
});



function Product(props) {
    const classes = useStyles();

    return (
        <div className=" col-lg-3">
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.id}
                        height="140"
                        image={props.img}

                    />
                    <CardContent >
                        <Typography gutterBottom component="p">
                            {props.title}
                        </Typography>

                    </CardContent>

                    <CardActions>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Typography component="p">2 weeks ago</Typography>
                            <Rating name="read-only" value={props.vote} readOnly />
                            <Typography component="p"></Typography>
                            <h4> &#3647; {props.price}</h4>
                        </Box>
                    </CardActions>
                    <CardActions>
                        <Box component="fieldset" mb={1} borderColor="transparent">


                        </Box>
                    </CardActions>

                </CardActionArea>
            </Card>

        </div>
    );
}
const productCard = list.map((list) => <Product
    id={list.id}
    title={list.title}
    img={list.img_url}
    vote={list.vote}
    price={list.price} />);

export default class ProductCard extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    {productCard}
                </div>
            </div>

        );
    }

}