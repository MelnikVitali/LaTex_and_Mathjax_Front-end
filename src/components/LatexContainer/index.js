import React, { useState } from 'react';
import {
    Button,
    Typography,
} from '@material-ui/core';



import useStyles from './styles';
import Index from '../ShowLatex';
import { MathJax } from 'better-react-mathjax';
import ShowLatex from '../ShowLatex';

const str2 = `A Simple Sample LaTeX File

Stupid Stuff I Wish Someone Had Told Me Four Years Ago

*(Read the .tex file along with this or it won't make much sense)*

The first thing to realize about LaTeX is that it is not "WYSIWYG". In
other words, it isn't a word processor; what you type into your .tex
file is not what you'll see in your .dvi file. For example, LaTeX will
completely ignore extra spaces within a line of your .tex file.

Like this. But any carriage-returns after the first two will be
completely ignored; in other words, you can't add more space between

Actually there is one more way, used above; for example, this way. The
way that you get in and out of environment varies depending on which
kind of environment you want; for example, you use \`\\underline\`
"outside", but \`\\it\` "inside"; notice [this]{.ul} versus *this*.

The real power of LaTeX (for us) is in the math environment. You push
and pop out of the math environment by typing \`$\`. For example,
$2x^3 - 1 = 5$ is typed between dollar signs as \`$2x^3 - 1 = 5$\`.
Perhaps a more interesting example is
$\\lim_{N \\to \\infty} \\sum_{k=1}^N f(t_k) \\Delta t$.

You can get a fancier, display-style math environment by enclosing your
equation with double dollar signs. This will center your equation, and
display sub- and super-scripts in a more readable fashion:

$$\\lim_{N \\to \\infty} \\sum_{k=1}^N f(t_k) \\Delta t.$$

If you don't want your equation to be centered, but you want the nice
indicies and all that, you can use \`\\displaystyle\` and get your formula
"in-line"; using our example this is
$\\displaystyle \\lim_{N \\to \\infty} \\sum_{k=1}^N f(t_k) \\Delta t.$ Of
course this can screw up your line spacing a little bit.

There are many more things to know about LaTeX and we can't possibly
talk about them all here. You can use LaTeX to get tables, commutative
diagrams, figures, aligned equations, cross-references, labels,
matrices, and all manner of strange things into your documents. You can
control margins, spacing, alignment, *et cetera* to higher degrees of
accuracy than the human eye can percieve. You can waste entire days
typesetting documents to be "just so". In short, LaTeX rules.

The best way to learn LaTeX is by example. Get yourself a bunch of .tex
files, see what kind of output they produce, and figure out how to
modify them to do what you want. There are many template and sample
files on the department LaTeX page and in real life in the big binder
that should be in the computer lab somewhere. Good luck!`;

const LatexContainer = () => {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [errorReadFile, setErrorReadFile] = useState('');

    // handle file upload
    const handleFileUpload = e => {
        const file = e.target.files[0];

        console.log(file);

        const  fileExtension = file.name.split('.').splice(-1, 1)[0]
        if (  fileExtension !== 'md' ) {
            setErrorReadFile(`Error occurred reading file:  The file format is not .tex`);
            console.log(`Error occurred reading file:  The file format is not .tex`);
        } else {
            const reader = new FileReader();

            reader.readAsText(file);

            reader.onload = function () {
                console.log(reader.result);
                setValue(reader.result)
            };

            reader.onerror = function () {
                console.log('Failed to read file!' + reader.error);
            };
        }
    };

    return (
        <div className={classes.root} >
            <Typography variant="h3" component="h1" className={classes.title} >
                Upload and read CSV files in React.js
            </Typography >
            <Button
                variant="contained"
                component="label"
                className={classes.btn}
            >
                Import LaTeX document
                <input
                    type="file"
                    accept=".md"
                    onChange={handleFileUpload}
                    hidden
                />
            </Button >
            <ShowLatex >{value}</ShowLatex >
        </div >

    );
};

export default LatexContainer;
