import Navigation from 'src/ui/Navigation';
import Layout from 'src/ui/Layout';
import List from 'src/ui/List';
import { getSearch } from 'src/utils/api';
import { parseLabel } from 'src/parsers/parserLabel';
import Disclaimer from 'src/ui/Disclaimer';

function onSubmitSearch(event){
    event.preventDefault();
    const keywordInput = event.target.keyword || {};
    const keyword = keywordInput.value || '';
    location.href=`/search?keyword=${keyword}&page=1`;
}
function SearchPage(_props){
    const props = _props || {};
    const data = props.data || {};
    const query = props.query || {};
    const termsLink = data.terms;
    const licenseLink = data.license;
    return (
        <div>
            <Navigation />
            <Layout>
                <h1>Search</h1>
                <form className="searchForm" onSubmit={onSubmitSearch}>
                    <input name="keyword" type="text" placeholder="Search for ..." maxLength="80" defaultValue={query.keyword || ''} />
                    <button type="submit">Search</button>
                </form>
                <Disclaimer termsLink={termsLink} licenseLink={licenseLink} disclaimer={data.disclaimer} />
                <List className="card" data={data.results} />
            </Layout>
        </div>
    );
}
export async function getServerSideProps(context) {
    const { query } = { ...context };
    const keyword = query.keyword || '';
    const page = query.page || 0;
    const field = query.field || '';
    let parsedData = {};
    let responseData = {};

    if(keyword) {
        responseData = await getSearch({ limit: 10, page: page, keyword: keyword, field: field });
        parsedData = parseLabel(responseData);
    }
    return {
        props: {
            data: parsedData || {},
            query: query
        }
    };
}

export default SearchPage;


