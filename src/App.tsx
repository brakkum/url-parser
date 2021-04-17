import React, {useState} from 'react';
import UrlDisplay from './UrlDisplay';
import './App.css';

function App() {

    const [userUrl, setUserUrl] = useState('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

    return (
        <div className='app'>
            <div className='container'>
                <div className='input-container'>
                    <h2>
                        Input a URL
                    </h2>
                    <textarea
                        value={userUrl}
                        cols={50}
                        rows={10}
                        placeholder='https://google.com'
                        onChange={e => setUserUrl(e.target.value)}
                    />
                </div>
                <UrlDisplay
                    urlString={userUrl ? userUrl : 'https://google.com'}
                />
            </div>
        </div>
    );
}

export default App;
