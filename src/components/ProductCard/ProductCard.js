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
        maxWidth: 345,
        maxHeight: 420
    },
});

function Product(props) {
    const classes = useStyles();
    
    const weekDiff = function diff_weeks(dt1) {
        let currentDate = new Date();
        let diff = (currentDate.getTime() - dt1.getTime()) / 1000;
        diff /= (60 * 60 * 24 * 7);
        return Math.abs(Math.round(diff));

    }

    let price=props.price
    price=price.toFixed(2);
    let a=price.toLocaleString('en', {useGrouping:true});
    console.log(a);

    return (
        <div className=" col-lg-3" key={props.id}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.id}
                        height="240"
                        image={props.src}

                    />
                    <CardContent>
                        <Typography  component="p" >
                            {props.title}
                        </Typography>


                        <Box component="fieldset" mb={1} borderColor="transparent">
                            <Typography component="p">{weekDiff(new Date(props.created_at))} weeks ago</Typography>
                            <Rating name="read-only" value={props.vote} readOnly />
                            <CardActions>
                                <h5>&#3647;{price}</h5>
                            </CardActions>
                        </Box>
                    </CardContent>
                    

                </CardActionArea>
            </Card>

        </div>
    );
}
const productCard = list.map((list) => <Product
    key={list.id}
    id={list.id}
    title={list.title}
    src={list.image_url + list.id}
    created_at={list.created_at}
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