import Navigation from 'src/ui/Navigation';
import Layout from 'src/ui/Layout';
import List from 'src/ui/List';
import { getLabel } from 'src/utils/api';
import { parseLabel } from 'src/parsers/parserLabel';

function HomePage(props){
    return (
        <div>
            <Navigation />
            <Layout>
                <h1>Home page</h1>
                <List data={props.results} />
            </Layout>
        </div>
    );
}
export async function getServerSideProps() {
    const responseData = await getLabel({ limit: 10 });
    const parsedData = parseLabel(responseData);
    return {
        props: parsedData || {},
    };
}

export default HomePage;


