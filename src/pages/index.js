import Navigation from 'src/ui/Navigation';
import Layout from 'src/ui/Layout';

function HomePage(){
    return (
        <div>
            <Navigation />
            <Layout>
                <h1>Home page</h1>
            </Layout>
        </div>
    );
}

export async function getServerSideProps(context) {
    console.log('process =>', process.env.API_KEY);
    const url = `https://api.fda.gov/drug/label.json?api_key=${process.env.API_KEY}&limit=10`;
    const responseData = await fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        });
    return {
        props: responseData || {}, // will be passed to the page component as props
    };
}

export default HomePage;