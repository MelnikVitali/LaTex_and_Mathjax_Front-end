import React, { useState, useRef } from 'react';
import axios from 'axios';

import {
    Box,
    Button, Container, Fab,
    Typography,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

import ShowLatex from '../ShowLatex';
import Preloader from '../Preloader';

import { APIUrls } from '../../configs/APIUrls';
import { useDispatch, useSelector } from 'react-redux';
import { convertedFile, fetchConvertFile } from '../../store/convertFileReducers';

import useStyles from './styles';

const LatexContainer = () => {
    const classes = useStyles();

    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const {html, loading} = useSelector(convertedFile);

    const [file, setFile] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];

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


        dispatch(fetchConvertFile(formData));
        setFile('');

        inputRef.current.value = '';
    };

    return (
        <>
            {loading ? <Preloader /> : null}
            <Container component="main" className={classes.root} >
                <Typography variant="h3" component="h1" className={classes.title} >
                    Upload and read LaTeX files in React.js
                </Typography >

                <form
                    id="uploadForm"
                    onSubmit={handleFileUpload}
                >
                    {file && <Box component="span" > {file.name}</Box >}
                    <label htmlFor="upload-file" className={classes.label} >
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
                            size="large"
                            color='primary'
                            component="span"
                            aria-label="add"
                            variant="extended"
                            className={classes.uploadBtn}
                        >
                            <AddIcon />Upload file
                        </Fab >
                    </label >

                    <Button
                        disabled={!file}
                        size='large'
                        htmlFor="sampleFile"
                        variant="contained"
                        type="submit"
                        className={classes.btn}
                    >
                        Submit file
                    </Button >
                </form >
                {html && <ShowLatex >{html}</ShowLatex >}
            </Container >
        </>
    );
};

export default LatexContainer;
