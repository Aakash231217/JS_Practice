import { useMemo, useState } from "react";

export default function UM()
{
    //const [m,UM]=useState("");
const languageList = ["HTML","JAVA","CSS","JS","REACT"];
const [languages, setLanguages] = useState(languageList);
const [searchLanguage, setSearchLanguage] = useState("");
function searchClick() {
    if (searchLanguage === "") 
    { setLanguages(languageList); return; }
    const filterBySearch = languageList.filter((item) => {
        if (item.toLowerCase()
            .includes(searchLanguage.toLowerCase())) { return item; }
    })
    setLanguages(filterBySearch);
}

const result= useMemo(()=>{return languageList.filter
    (l=>l.includes(searchLanguage))},[searchLanguage])

const r= result.map((language,i) => 
             <li key={i}>{language}</li>);
return(  <div>
    <div>
        <input onChange={e => setSearchLanguage(e.target.value)}>
        </input>
        <button onClick={searchClick}>Click</button>
    </div>
    <div>

  <ul>{r}</ul>
   

    </div>
</div>);
}