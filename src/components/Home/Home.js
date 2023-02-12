import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 150
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Welcome to our CBD web shop
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            We offer a variety of high-quality CBD products to meet your needs. Take a look at our products and find the perfect one for you!
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    {/* Add a link to your products page here */}
                                    <a href="/products">See Our Products</a>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>
        </div>
    );
};

export default Home;
