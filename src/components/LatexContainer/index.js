import React, { useState, useRef } from 'react';
import {
    Box,
    Button, Fab,
    Typography,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

import ShowLatex from '../ShowLatex';

import useStyles from './styles';
import axios from 'axios';
import Preloader from '../Preloader';

const LatexContainer = () => {
    const classes = useStyles();

    const inputRef = useRef(null);

    const [file, setFile] = useState('');
    const [html, setHtml] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        console.log(file);
        const fileExtension = file.name.split('.').splice(-1, 1)[0];

        if (fileExtension !== 'tex') {
            console.log(`Error occurred reading file:  The file format is not .tex`);
        } else {
            setFile(file);
        }
    };

    // handle file upload
    const handleFileUpload = e => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('filedata', file);

        setIsFetching(true);

        axios.post('http://localhost:5000/upload', formData, {}).then(res => {

            console.log(res.data);

            setFile('');
            setHtml(res.data);
            setIsFetching(false);

            inputRef.current.value = '';
        }).catch(error => {
            console.log(error);

            setHtml('');
            setFile('');
            setIsFetching(false);

            inputRef.current.value = '';
        });
    };

    return (
        <>
            {isFetching ? <Preloader /> : null}
            <div className={classes.root} >
                <Typography variant="h3" component="h1" className={classes.title} >
                    Upload and read LaTeX files in React.js
                </Typography >

                <form
                    id="uploadForm"
                    onSubmit={handleFileUpload}
                >
                    {file  && <Box component='span'> {file.name}</Box>}
                    <label htmlFor="upload-file" style={{marginRight: 30, marginLeft: 30, paddingRight: 10}} >
                        <input
                            // style={{display: 'none'}}
                            type="file"
                            id="upload-file"
                            accept=".tex"
                            name="filedata"
                            hidden
                            onChange={handleFileChange}
                            ref={inputRef}
                        />
                        <Fab
                            color="secondary"
                            size="small"
                            component="span"
                            aria-label="add"
                            variant="extended"
                            style={{textTransform: 'none'}}
                        >
                            <AddIcon />Upload file
                        </Fab >
                    </label >

                    <Button
                        disabled={!file}
                        htmlFor="sampleFile"
                        variant="contained"
                        color="primary"
                        // component="label"
                        type="submit"
                        style={{textTransform: 'none'}}
                    >
                        Submit file
                    </Button >
                </form >
                <ShowLatex >{html}</ShowLatex >
            </div >
        </>
    );
};

export default LatexContainer;
