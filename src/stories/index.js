import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button, Welcome} from '@storybook/react/demo';
import App from "../App";
import {Post} from "../components/CreatePost";
import Paper from "@material-ui/core/Paper";
import {ShowPost} from "../components/ShowPost";
import {Posts} from "../components/Posts";

const DemoContainer = function (props) {
    return (
        <Paper style={{padding: '20px'}}>
            {props.children}
        </Paper>
    )
};

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
        </Button>
    ));

storiesOf('App', module)
    .add('demo', () => <App/>);

storiesOf('Posts', module)
    .add('Create Post', () => (
        <DemoContainer>
            <Post/>
        </DemoContainer>
    ))
    .add('Show Post', () => {
        const cheers = ['You got this!', 'Good luck!'];

        return (
            <DemoContainer>
                <ShowPost
                    post={'Wish me luck on my math exam!'}
                    cheers={cheers}
                />
            </DemoContainer>
        )
    })
    .add('All Posts', () => {
        const posts = [
            'Wish me luck on my math exam!',
            'Big interview today!'
        ];

        return (
            <DemoContainer>
                <Posts posts={posts}/>
            </DemoContainer>
        )
    })

