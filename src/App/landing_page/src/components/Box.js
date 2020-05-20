import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: '40px',
		textAlign: 'center',
		color: 'white',
		height: '400px',
	},
});

const Box = () => {

	const classes = useStyles();

	return (
		<div>
			<Grid container direction="row" justify="center" alignItems="center" spacing={0}>
				<Grid item xs={6} sm={3} >
					<Paper className={classes.paper} elevation={3} style={{ background: '#fd5f00' }}>
						<h4>Certified Teachers</h4>
						Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
					</Paper>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Paper className={classes.paper} elevation={3} style={{ background: '#0d1128' }}>
						<h4>Special Education</h4>
						Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
					</Paper>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Paper className={classes.paper} elevation={3} style={{ background: '#fd5f00' }}>
						<h4>Book & Library</h4>
						Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
					</Paper>
				</Grid>
				<Grid item xs={6} sm={3}>
					<Paper className={classes.paper} elevation={3} style={{ background: '#0d1128' }}>
						<h4>Sport Clubs	</h4>
						Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default Box;
