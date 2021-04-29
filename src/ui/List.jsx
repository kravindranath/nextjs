import _map from 'lodash/map';

function List(_props){
    const props = _props || {};
    const data = props.data || {};

    const resultsHtml = _map(data, (item)=>{
        const name = item.name || null;
        const description = item.description || null;
        return (
            <div key={name}>
                <h3>{name}</h3>
                {
                    description && 
                    <p>{description}</p>
                }
            </div>
        );
    });

    return(
        <header>
            <div className="list">
                {resultsHtml}
            </div>
        </header>
    );
}

export default List;