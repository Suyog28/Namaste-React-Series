import { useState } from 'react';
import ResCard from '../components/ResCard';
import resList from '../utils/mockData';

const Body = () => {
    const [listOfRest, setlistOfRest] = useState(resList);

    return (
        <div className='body-container' >
            <div className='search'>
                <input type='text' name='search' className='searchinput' placeholder='Search'></input> Search
            </div>
            <div className='filter-btn'>
                <button className='top-btn'
                    onClick={() => {
                        const filterData = listOfRest.filter((res) => res.info.avgRating > 4);
                        setlistOfRest(filterData);
                    }}>Top Rating</button>
            </div>
            <div className='res-container'>
                {
                    listOfRest.map((resitems) => <ResCard resData={resitems} key={resitems.info.id} />)
                }
            </div>
        </div>
    )
}

export default Body;