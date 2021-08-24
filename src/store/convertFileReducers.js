import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

import { APIUrls } from '../configs/APIUrls';

export const initialState = {
    loading: false,
    error: null,
    html: ''
};

const convertFile = createSlice({
    name: 'convertFile',
    initialState,
    reducers: {
        startLoading: state => {
            state.loading = true;
        },
        getConvertFileSuccess: (state, {payload}) => {
            state.html = payload;
            state.loading = false;
            state.errorMessage = null;
        },
        getError: (state, {payload}) => {
            state.loading = false;
            state.errorMessage = payload;
        },
    }
});

export const {
    startLoading,
    getConvertFileSuccess,
    getError,
} = convertFile.actions;

export const convertedFile = state => state.convertedFile;

export default convertFile.reducer;

export const fetchConvertFile = (body) => {
    return async dispatch => {
        dispatch(startLoading());

        try {
            const response = await axios.post(APIUrls.uploadFile, body);

            if (response) {
                dispatch(getConvertFileSuccess(response.data));
            }
        } catch (err) {
            const { data } = err?.response;

            toast.error(data?.message);

            dispatch(getError(data));
        }
    };
};

