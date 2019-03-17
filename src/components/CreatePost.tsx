import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export function Post() {
    const [postValue, setPostValue] = React.useState('')

    return (
        <Grid
            container
            justify={'center'}
            spacing={24}
            direction={'column'}
            alignItems={'center'}
        >
            <Grid item>
                <Typography variant={'h5'}>
                    Need a boost?
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant={'h5'}>
                    We've got your back!
                </Typography>
            </Grid>
            <Grid item style={{width: '100%'}}>
                <TextField
                    label="Wish me luck on this job interview..."
                    value={postValue}
                    onChange={(e) => setPostValue(e.target.value)}
                    fullWidth
                />
            </Grid>
        </Grid>
    )
}
