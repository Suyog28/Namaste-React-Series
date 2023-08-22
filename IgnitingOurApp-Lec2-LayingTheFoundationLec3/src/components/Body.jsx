import { useEffect, useState } from 'react';
import ResCard from '../components/ResCard';
// import resList from '../utils/mockData';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';


const Body = () => {

    const [listOfRest, setlistOfRest] = useState([]);
    const [searchInput, setSearchInput] = useState("")
    const [filterRestData, setFilterRestData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/homepage/getCards?lat=18.6101365&lng=73.7746293&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //   console.log(json);
        setlistOfRest(json?.data?.success?.cards[0]?.favourite?.cards);
        setFilterRestData(json?.data?.success?.cards[0]?.favourite?.cards);
    }


    return listOfRest.length === 0 ? <Shimmer /> : (
        <div className='body-container' >
            <div className='search'>
                <input type='text' name='search'
                    className='searchinput'
                    placeholder='Search'
                    value={searchInput}
                    onChange={(e) =>
                        setSearchInput(e.target.value)}
                />
                <button className='search-btn'
                    onClick={() => {
                        const searchData = listOfRest.filter(
                            (res) => res.data.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()));
                        // setlistOfRest(searchData);//Using this we can able to filter data only
                        setFilterRestData(searchData)
                    }}
                >Search</button>
            </div>
            <div className='filter-btn'>
                <button className='top-btn'
                    onClick={() => {
                        const filterData = listOfRest.filter((res) => res.data.avgRating > 4);
                        setFilterRestData(filterData);
                    }}>Top Rating</button>
            </div>
            <div className='res-container'>
                {
                    filterRestData.map((resitems) =>
                        <Link key={resitems.data.id} to={"/ResMenu/" + resitems.data.id}> <ResCard resData={resitems} /></Link>)
                }
            </div>
        </div>
    )
}

export default Body;