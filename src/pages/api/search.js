  
import { API } from 'src/utils/config';
import { fetchAPI } from 'src/utils/api';

export default async function searchHandler({ query: { limit, page, keyword, field } }, res) {
    const searchterm = field ? `${field}:${keyword}` : keyword;
    const skip = page ? (page*10) : 0;
    const url = `${API.label}&limit=${limit}&search=${searchterm}&skip=${skip}`;

    const response = await fetchAPI(url);

    res.status(200).json(response);
}