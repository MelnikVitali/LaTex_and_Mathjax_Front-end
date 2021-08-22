import React from 'react';

import MathJax from 'mathjax3-react';


const ShowLatex = (props) => {

    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }} >
            <MathJax.Provider>
                <MathJax.Html html={props.children}/>
            </MathJax.Provider>

        </div >
    );
};

export default ShowLatex;
