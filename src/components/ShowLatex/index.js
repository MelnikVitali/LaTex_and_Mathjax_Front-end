import React from 'react';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

import MathJax from 'react-mathjax';
// import MathJax from 'mathjax3-react';
// import { MathJax, MathJaxContext } from 'better-react-mathjax';


const ShowLatex = (props) => {

    // const newProps = {
    //     ...props,
    //     plugins: [RemarkMathPlugin],
    //     renderers: {
    //         ...props.renderers,
    //         math: props => <MathJax.Node formula={props.value} />,
    //         inlineMath: props => <MathJax.Node inline formula={props.value} />
    //     }
    // };

    const newProps = {
        ...props,
        escapeHtml: false,
        plugins: [RemarkMathPlugin],
        renderers: {
            ...props.renderers,
            math: props => <BlockMath >{props.value}</BlockMath>,
            inlineMath: props => <InlineMath >{props.value}</InlineMath>
        }
    };


    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }} >

            {/*<MathJax.Provider input="tex">*/}
                <ReactMarkdown {...newProps} />
            {/*</MathJax.Provider>*/}

        </div >
    );
};

export default ShowLatex;
