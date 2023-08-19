import ResCard from '../components/ResCard';

import resList from '../utils/mockData';

const Body = () => {
    return (
        <div className='body-container' >
            <div className='search'>
                <input type='text' name='search' className='searchinput' placeholder='Search'></input> Search
            </div>
            <div className='res-container'>
                {/* <ResCard resname={resList[2]} /> */}
                {
                    resList.map((resitems) => <ResCard resData={resitems} key={resitems.info.id} />)
                }
            </div>
        </div>
    )
}

export default Body;