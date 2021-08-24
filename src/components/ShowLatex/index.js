import React from 'react';

import MathJax from 'mathjax3-react';

import useStyles from './styles';

const ShowLatex = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <MathJax.Provider >
                <MathJax.Html html={props.children} />
            </MathJax.Provider >
        </div >
    );
};

export default ShowLatex;
