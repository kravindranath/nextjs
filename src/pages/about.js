import Navigation from 'src/ui/Navigation';
import Layout from 'src/ui/Layout/Layout';

function About() {
    return (
        <div>
            <Navigation />
            <Layout>
                <h1>About page</h1>
                <p>Example Next.js app using SSR</p>
            </Layout>
        </div>
    );
}

export default About;
