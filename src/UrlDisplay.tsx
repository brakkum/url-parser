import React from 'react';

const UrlDisplay = ({urlString}: {urlString: string}) => {

    // let urlValid = false;
    let url: URL;
    try {
        url = new URL(urlString);
    } catch (e) {
        return (
            <div className="url-invalid">
                sorry, that URL is not valid
            </div>
        );
    }

    const urlParts = {
        href: url.href,
        origin: url.origin,
        protocol: url.protocol,
        username: url.username,
        password: url.password,
        host: url.host,
        hostname: url.hostname,
        port: url.port,
        search: url.search,
        params: url.searchParams,
        hash: url.hash,
    };

    return (
        <div className='url-info'>
            {Object.entries(urlParts).map(([key, part]) => {
                if (part instanceof URLSearchParams) {
                    let ret: any = [];
                    part.forEach((v, k) => {
                        ret.push(<div className='part param'>
                            {k}: <span style={{color: '#79ef63'}}>{v}</span>
                        </div>);
                    });
                    return <span>{ret}</span>;
                } else {
                    return <div className='part'>
                        {key}: <span style={{color: '#79ef63'}}>{part}</span>
                    </div>
                }
            })}
        </div>
    );
};

export default UrlDisplay;
