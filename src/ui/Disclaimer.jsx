function Disclaimer(props){
    const disclaimer = props.disclaimer || '';
    const licenseLink = props.licenseLink || '';
    const termsLink = props.termsLink || '';
    if(!disclaimer) return null;
    return(
        <div className="warning">
            <em>{disclaimer}</em>
            <div>
                <small>
                    <a href={termsLink}>{termsLink}</a> | <a href={licenseLink}>{licenseLink}</a>
                </small>
            </div>
        </div>
    );
}

export default Disclaimer;