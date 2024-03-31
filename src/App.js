import { useState } from "react";
import styled from "../src/best.module.css";
import img from "./image/googlelogo.png";
import searchIcon from "./image/searchIcon.png";


export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);  
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("검색어:", searchTerm);
  };

  return (

    <form className={styled.loginfrom} onSubmit={handleSubmit}>
      <div className={styled.searchContainer}> 
      <img src={img} alt="" className={styled.logo} />
      <div className={styled.searchInputContainer}>
          <img src={searchIcon} alt="검색 아이콘" className={styled.searchIcon} />
          
    
           <input 
          type="text" 
          placeholder="Google 검색 또는 URL 입력"
          value={searchTerm} 
          onChange={handleInputChange}
          className={styled.searchInput}
          style={{ width: '500px' }}
           />
         </div>
       </div>
       
</form> 
  );
}