import _map from 'lodash/map';
import Link from 'next/link';

function List(_props){
    const props = _props || {};
    const data = props.data || {};
    const className = props.className || {};

    const resultsHtml = _map(data, (item, key)=>{
        const applicationNumber = item.applicationNumber || '';
        const name = item.name || '';
        const description = item.description || null;
        if(!name && !description) {
            return null;
        }
        const itemHref = `/item/${(applicationNumber.toLowerCase())}`;
        return (
            <div className={className} key={`${key}-${applicationNumber}`}>
                <h3>
                    {
                        itemHref ? <Link href={itemHref}>
                            {name}
                        </Link> :
                            {name}
                    }
                </h3>
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