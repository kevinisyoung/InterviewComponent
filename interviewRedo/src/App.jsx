import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import json from './data.json'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FoodGallery />
    </>

  )
}

export default App


function FoodGallery() {
  //map the json to return an ItemSection component for each item section
  return (
    <div className='foodGallery'>
      {json.map((section) =>
        <ItemSection sectionData={section} />
      )}
    </div>
  );

}

function ItemSection(props) {
  //map the json to return an item component for each item 
  const sectionData = props.sectionData;
  console.log(sectionData);

  return (
    <>
      <h2 className='sectionTitle'>
        {sectionData.sectionName}
      </h2>
      <div className='itemSection'>
        {sectionData.sectionItems.map((item) =>
          <Item itemData={item} />
        )}
      </div>
    </>

  );
}

function Item(props) {

  const itemData = props.itemData;

  const image = itemData.image;
  const title = itemData.title;
  const price = itemData.price;
  const description = itemData.description;
  const id = itemData.id;

  const defaultImg = "https://cdn.mos.cms.futurecdn.net/3ghyHDzz2nL7vMVYD7tsaE.jpeg";

  return (
    <div className='itemCard'>
      <img className='itemImage' src={image ? image : defaultImg}></img>
      <div className='itemTitle'>{title}</div>
      <div className='priceIdContainer'>
        <div className='itemPrice'>${price ? price : "0"}</div>
        <div className='itemId'>#{id}</div>
      </div>
      <br />
      <div className='itemDescription'>{description}</div>
    </div>


  );
}