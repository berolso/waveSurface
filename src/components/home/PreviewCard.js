import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 200,
  },
});

const PreviewCard = ({preview}) => {
  const classes = useStyles();


  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component={Link} to={preview.link}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {preview.title}
              </Typography>
              <Typography variant="subtitle1" color='textSecondary' paragraph>
                {preview.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                {preview.linkText}
              </Typography>
            </CardContent>
          </div>
            <CardMedia className={classes.cardMedia} image={preview.image} title={preview.imageTitle} />
        </Card>
      </CardActionArea>
    </Grid>
  );

}

export default PreviewCard
