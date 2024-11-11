import Link from "next/link";

export default function Header(): JSX.Element {
   return (
      <div className="home-container">
         <div className="home">
            <ul className="home-ul">
               <Link href={"/"}>
               <li>Home</li>
               </Link>
               <Link href={"/about-us"}>
               <li>About us</li>
               </Link>
               <Link href={"/contact-us"}>
               <li>Contact us</li>
               </Link>
               <Link href={"/our-service"}>
               <li>Our Service</li>
               </Link>
            </ul>
         </div>
      </div>
   );
}
