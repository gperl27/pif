import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

interface Props {
    post: string;
    cheers: string[];
}

export function ShowPost(props: Props) {
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
                    {props.post}
                </Typography>
            </Grid>
            <Grid item>
                {props.cheers.map(cheer => {
                    return (
                        <Typography variant={'subtitle1'}>
                            {cheer}
                        </Typography>
                    )
                })}
            </Grid>
        </Grid>
    )
}
