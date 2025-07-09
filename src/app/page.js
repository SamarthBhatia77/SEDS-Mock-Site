import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="text-white">
      <div id="container"className="border border-white flex flex-col items-center justify-center text-center text-white bg-black/50 backdrop-blur-lg">
        <p className="text-[50px] my-3 font-bold">ABOUT SEDS</p>
        <p className="text-[17px]">SEDS BPHC was founded in April 2019 by a group of students with a burning passion for
           aerospace. Today the club has proudly grown into an 80+ member strong team. 
           The club started out by competing in the Spaceport America Cup, and has since expanded to cubesats,
            cansats, rocket motors as well as the thrust vector control projects.</p><br></br>
        <p className="text-[17px]">The team is an amalgamation of undergraduate students from almost all fields of 
          engineering and science in our college. Mechanical Engineering, Computer Science, 
          Biology, Electronics and Communication Engineering, Physics are to name a few.</p>
      </div>
    </div>
  );
}
