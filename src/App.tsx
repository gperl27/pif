import React, {Component} from 'react';
import 'typeface-roboto';
import './App.css';
import {install} from '@material-ui/styles';
import {Background} from "./components/Background";
import {Grid} from "@material-ui/core";
import {MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from "./theme";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

install();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Background/>
                <Grid container justify={'center'}>
                    <Grid item xs={8}>
                        <Paper>
                            router here
                        </Paper>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        );
    }
}

export default App;
