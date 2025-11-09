import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const Links = [
    { name: "Home", url: "/home", identity:"home" },
    { name: "Modules", url: "/modules", identity:"modules" },
    { name: "About Us", url: "/about", identity:"about" },
    { name: "Contact", url: "/contact", identity:"contact" },
    { name: "SignUp", url: "/signup", identity:"signup" }
  ];
  const location=useLocation();

  /*
  const navigate= useNavigate();

    useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleClick = (link: any) => {
    if (location.pathname === link.url) {
      // same page → just scroll
      scrollToSection(link.identity);
    } else {
      // different page → navigate with state
      navigate(link.url, { state: { scrollTo: link.identity } });
    }
  };
  
  */


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
