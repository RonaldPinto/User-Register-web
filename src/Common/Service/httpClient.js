import axios from 'axios';
import uuid from 'uuid';

const getHeaders = (flowId, extra) => ({
    ...extra,
    'x-flow-id': flowId,
    'x-home': 'cl',
    'Access-Control-Allow-Origin': '*'
});

const getData = (data={}, method) => {
    if (method === 'post') {
        return {
            data
        }
    }
    return {
        params: data
    }
}

const setOptions = (url, method, data, headers) => {
    const requestData = getData(data, method);
    const options = {
        ...requestData,
        headers,
        method,
        url
    }
    return options;
} 

const httpStatus = (url, method = 'get', data) => {
    const headers = {
        'X-Home': 'cl', 
        'X-Flow-Id': uuid.v4(),
        'Access-Control-Allow-Origin': '*'
    };
    return axios(setOptions(url, method, data, headers));
}

const httpClient = (url, flowId, method = 'get', data, extraHeaders = {}) => {
    const headers = getHeaders(flowId, extraHeaders);
    return axios(setOptions(url, method, data, headers));
}
  
export {
    httpClient,
    httpStatus
};
