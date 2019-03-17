import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

interface Props {
    posts: string[];
}

export function Posts(props: Props) {
    return (
        <Grid
            container
            justify={'center'}
            spacing={24}
            direction={'column'}
            alignItems={'center'}
        >
            <Grid item>
                {props.posts.map(post => {
                    return (
                        <div>
                            <Typography variant={'subtitle'}>
                                {post}
                            </Typography>
                            <Button variant="contained">
                                Cheer
                            </Button>
                        </div>
                    )
                })}
            </Grid>
        </Grid>
    )
}
