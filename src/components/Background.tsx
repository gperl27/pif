import * as React from "react";
import {makeStyles} from "@material-ui/styles";
import Particles from "react-particles-js";

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: -1
    },
});

export function Background() {
    const classes = useStyles();
    return (
        <Particles className={classes.root}/>
    )
}
