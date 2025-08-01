import { Link, useLocation} from "react-router-dom";

const NavLinks=()=>{
    const links =[
        {name:"Home",url:"/home"},
        {name:"Modules",url:"/modules"},
        {name:"About",url:"/about"},
        {name:"Contact",url:"/contact"}, 
    ];
const location = useLocation();
return <div className="flex gap-20 items-center h-full text-slate-300">
    {    
        links.map((link, index)=>(<div className={`${location.pathname==link.url
            ?"border-slate-300 text-slate-300"
            :"border-transparent"} 
            border-b-[2px] flex items-center h-full`}>
            <Link key={index} to={link.url}>{link.name}</Link>
        </div>))
    }
</div>
}
export default NavLinks;