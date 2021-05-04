import { COMMON } from 'src/utils/config';

export async function getLabel(params) {
    const { limit } = { ...params };
    const url = `${COMMON.DOMAIN}/api/label?limit=${limit}`;
    return await fetchAPI(url);
}

export async function getSearch(params) {
    const { field, limit, page, keyword } = { ...params };
    const url = `${COMMON.DOMAIN}/api/search?limit=${limit}&keyword=${keyword}&page=${page}&field=${field}`;
    return await fetchAPI(url);
}

export async function fetchAPI(url) {
    const responseData = await fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        });
    return responseData;
}

