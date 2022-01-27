import { useState, useEffect } from 'react';
import { CardGroup } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Book from './Books';


function App(){
    const [data, setData] = useState(null);        
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function getData() {
            const response = await fetch('./books.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])

    console.log('loaded:', loaded, 'data:', data);

    return (<>
        <div className="container">
            <h1 className="heading">My Recent Favorites</h1>
            <p className="intro"> These are 10 of my favorite books from 2021, with info from <a className="info-link" href="https://www.goodreads.com/" target="_blank" rel="noopener noreferrer">Goodreads.</a></p>
            <CardGroup>   
            {loaded && data.books.map((book,i) => <Book data={book} key={i}/>)}
            </CardGroup>
        </div>        
    </>);   
}

export default App;
