import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    actionArea: {
        minHeight: '260px'
    },
    media: {
      height: 140
    },
});


function VendorCard({ title, services, img }) {

    const classes = useStyles();

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea className={classes.actionArea}>
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {services.join(', ')}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
}

export default VendorCard;