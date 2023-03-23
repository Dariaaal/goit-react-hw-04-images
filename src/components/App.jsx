import React, { useState, useEffect } from "react";
import Searchbar from "./searchbar/Searchbar";
import {ImageGallery} from "./imageGallery/ImageGallery";
import getImages from './api';
import {Loader} from './loader/Loader';
import {Button} from './button/Button';

export default function App () {

  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalhits] = useState(500);

  useEffect(() => {
    if(!searchText){
      return;
    }
    setIsLoading(true);
    async function Api (){
      try {
      setIsLoading(true);
      const data = await getImages(searchText, page)
      console.log(data)
      setItems([...items, ...data.hits]);
    }
      catch (error) {
        setError(true);
        setIsLoading(false);
        console.log(error);
    }
    finally {
      setIsLoading(false);
    }
}

Api();

}, [searchText, page])

  const handleSearch = (searchText) => {
    setSearchText(searchText);
    setItems([]);
    setIsLoading(false);
    setError(false);
    setPage(1);
  }

  const  onLoadMore = () => {
    setPage(state => state + 1);
  }

  {
      return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Searchbar handleSearch={handleSearch}/>
    {error && (<p>Nothing was found</p>)}
    {items && <ImageGallery items={items}/>}
    {isLoading && <Loader/> }
    {(items.length >=12 && items.length < totalhits  && !isLoading) && <Button onClick={onLoadMore}/>}
    </div>
  );
  }
}


