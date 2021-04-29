
const API_KEY = process.env.API_KEY;
const DOMAIN = process.env.domain;

export const API = {
    label: `https://api.fda.gov/drug/label.json?api_key=${API_KEY}`
};

export const COMMON = {
    DOMAIN : DOMAIN
};