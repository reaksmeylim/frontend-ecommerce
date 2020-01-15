import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import moment from "moment";

import list from "../../data/list.json";
const useStyles = makeStyles({
  card: {
    maxWidth: 400,

    maxHeight: 440
  }
});

function Product(props) {
  const classes = useStyles();

  //calculate weeks difference between today and created_at
  const weekDiff = function diff_weeks(dt1) {
    let currentDate = moment(moment().format("YYYY-MM-DD HH:mm:ss"));

    let createdAt = moment(moment(dt1).format("YYYY-MM-DD HH:mm:ss"));

    //if the result is 1 week then return 1 week (singular) or else weeks (plural)

    let dif =
      currentDate.diff(createdAt, "week") > 1
        ? currentDate.diff(createdAt, "week") + " weeks"
        : currentDate.diff(createdAt, "week") + " week";
    return dif;
  };

  let price = props.price;

  //formating currency number Ex: '1,234.00'
  price = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

  return (
    <div className=" col-lg-3 col-md-4 col-6" key={props.id}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.id}
            height="240"
            image={props.src}
          />
          <CardContent>
            <Typography component="p">{props.title}</Typography>

            <p style={{ fontSize: 13 }}>{weekDiff(props.created_at)} ago</p>
            <Rating
              name="read-only"
              value={props.vote}
              readOnly
              size="small"
              style={{ color: "#eb7434" }}
            />
          </CardContent>
          <CardActions>
            <h6>&#3647;{price}</h6>
          </CardActions>
        </CardActionArea>
      </Card>
      <br />
    </div>
  );
}
const productCard = list.map(list => (
  <Product
    key={list.id}
    id={list.id}
    title={list.title}
    src={list.image_url + list.id}
    created_at={list.created_at}
    vote={list.vote}
    price={list.price}
  />
));

export default class ProductCard extends React.Component {
  render() {
    return (
      <div>
        <br />
        <div>
          <p>Item 1-12 of 23</p>
        </div>
        <br />
        <div className="row">{productCard}</div>
      </div>
    );
  }
}
