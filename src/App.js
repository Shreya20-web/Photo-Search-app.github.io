import React, {useState} from 'react'
import { LoadImages, SearchImages } from './api/api'
import Image from './components/Image'
import Pagination from './components/Pagination'

const App = () => {
  const [query, setQuery] = useState()
  const [searchQ, setSearch] = useState()
  const [state, setState] = useState([])

  // for pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(30);

const data =  LoadImages();

const search = () => {
  setSearch(query)
}

const searchData = SearchImages(searchQ)
console.log(searchData)

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = searchData.slice(indexOfFirstPost, indexOfLastPost);

const Paginate = (pageNumber) => {
  setCurrentPage(pageNumber)
}

  return (
  <div className="App">
    <div style={{
      textAlign:'center'
      }}>
      <h1>Welcome to PicsApp</h1>
      <input 
      className='searchBox'
      type="text" 
      placeholder='Search for photos...'
      value={query} 
      onChange={(event) => setQuery(event.target.value)}/>
      <button className='saerchbtn' onClick={search}>Search</button>
    </div>
    <div className="contain">
      {searchData ? searchData.map((img, key) => (
      <Image src={img.urls.thumb} key={key} posts={currentPosts} Paginate={Paginate} setState={setState} state={state} query={query} />
    )) 
    : data.map((img, key) => (
      <Image src={img.urls.thumb} key={key} posts={currentPosts}/>
    ))}
    </div>
    <Pagination 
    postsPerPage={postsPerPage} 
    totalPosts={data.length}/>
  </div>
  )
}

export default App

