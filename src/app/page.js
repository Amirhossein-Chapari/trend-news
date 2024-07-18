import Image from "next/image";
import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import TopTags from "../../components/TopTags/TopTags";


export default function Home() {
  return (
   <div>
    <Nav/>
    <Hero/>
    <TopTags />
   </div>
  );
}
