import Image from "next/image";

const ThemeSwith = ({mode ,setMode}) => {
    
    return ( <>
    <div className="themeSwitcher" onClick={()=>setMode(!mode)}><img src={`/brightness.png`}/></div>
   
   <style jsx>
    {`
    .themeSwitcher{
        border-radius:50%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    `}
   </style>
    </> );
}
 
export default ThemeSwith;