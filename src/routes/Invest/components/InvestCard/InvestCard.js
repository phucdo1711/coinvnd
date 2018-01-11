import React from 'react';
import Card, { CardActions, CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography';
import classes from './InvestCard.scss';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    card: {
        maxWidth: 300,
        marginLeft: 20,
        textAlign: 'center'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 17,
        color: 'rgb(32, 117, 214)',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    interest: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 16,
    },
    cashBack: {
        textTransform: 'uppercase'
    },
    media: {
        height: 150,
    },
});


export const InvestCard = ({ classes, invest }) => {
    return (
        <Card className={classes.card}>
            <CardHeader title={invest.TenGoi} />
            <CardMedia
                className={classes.media}
                image={invest.Anh}
                title="Contemplative Reptile"
                src={invest.Anh}
            />
            <CardContent >
                <Typography className={classes.title} >{invest.Min / 1000000} TR - {invest.Max /1000000} TR</Typography>
                <Typography className={classes.interest}>Lãi suất ngày {invest.LaiSuatNgay * 100}%</Typography>
                <Typography className={classes.cashBack}>Tất toán sau {invest.SoNgay} ngày</Typography>
            </CardContent>
        </Card>
    )
}

InvestCard.propTypes = {
    invest: PropTypes.object.isRequired
}

export default withStyles(styles)(InvestCard);