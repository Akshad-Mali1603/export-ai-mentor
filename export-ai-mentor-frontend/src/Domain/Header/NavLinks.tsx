import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const Links = [
    
    { name: "Home", url: "/home", identity:"home" },
    { name: "Modules", url: "/modules", identity:"modules" },
    { name: "About Us", url: "/about", identity:"about" },
    { name: "Contact", url: "/contact", identity:"contact" },
    { name: "SmartDocs", url: "/modules/SmartDocsPage", identity:"SmartDocs" }
  ];
  const location=useLocation();

  const scrollToSection = (identity: string) => {
    const section = document.getElementById(identity);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };




  return( <div className="flex gap-20 items-center h-full text-slate-300">
    {Links.map((link, index) =>(
      <Link onClick={()=>scrollToSection(link.identity)} className={`${location.pathname == link.url
      ? "border-slate-50 text-slate-50 border-b-2 "
      : "border-transparent"} 
            `} key={index} to={link.url}> {link.name} </Link>
    ))}
  </div>
  );
};
export default NavLinks;
