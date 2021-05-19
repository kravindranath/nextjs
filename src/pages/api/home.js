  

export default async function homeHandler({ query: { limit, page, keyword, field } }, res) {
    
    res.status(200).json({
        status: 200,
        description: 'Api call success'
    });
}