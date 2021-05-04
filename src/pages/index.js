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
export async function getServerSideProps() {
    
    return {
        props: {},
    };
}

export default HomePage;


