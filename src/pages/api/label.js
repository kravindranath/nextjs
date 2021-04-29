  
import { API } from 'src/utils/config';
import { fetchAPI } from 'src/utils/api';

export default async function labelHandler({ query: { limit, keyword, field } }, res) {
    const searchterm = field ? `${field}:${keyword}` : keyword;

    const url = `${API.label}&limit=${limit}&search=${searchterm}`;
    const response = await fetchAPI(url);

    res.status(200).json(response);
}