import { Link, useLocation} from "react-router-dom";
type NavLinksProps = {
  direction?: "horizontal" | "vertical"; // optional prop
};
const NavLinks: React.FC<NavLinksProps> = ({ direction = "horizontal" }) =>{
    const links =[
        {name:"Home",url:"/home"},
        {name:"Modules",url:"/modules"},
        {name:"About",url:"/about"},
        {name:"Contact",url:"/contact"}, 
    ];
const location = useLocation();

const wrapperClass = direction === "horizontal"
      ? "flex gap-10 items-center text-slate-300"
      : "flex flex-col gap-4 text-slate-300";

return <div className={wrapperClass}>
    <div className="flex gap-10 items-center [&>*]:hover:text-slate-50">{    
        links.map((link, index)=>(<div className={`${location.pathname==link.url
            ?"border-slate-300 text-slate-300"
            :"border-transparent"} 
            ${direction === "horizontal" ? "border-b-2" : "border-b-2 w-fit"}`}>
            <Link key={index} to={link.url}>{link.name}</Link>
        </div>))
    }</div>
</div>
}
export default NavLinks;