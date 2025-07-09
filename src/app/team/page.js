import React from 'react';
import Link from 'next/link';
import { Black_And_White_Picture } from 'next/font/google';
import TeamMemberCard from '@/components/TeamMemberCard';
export default function Team() {
    const teamMembers = [
  {
    name: "Member 1",
    role: "President",
    image: "/pfp.png",
  },
  {
    name: "Member 2",
    role: "Vice President",
    image: "/pfp.png",
  },
  {
    name: "Member 3",
    role: "Head of Outreach",
    image: "/pfp.png",
  },
  {
    name: "Member 4",
    role: "Tech Team",
    image: "/pfp.png",
  },
  {
    name: "Member 5",
    role: "Design Team",
    image: "/pfp.png",
  },
  {
    name: "Member 6",
    role: "Management",
    image: "/pfp.png",
  },
];
    return(
    <div className=''>
        <div className="min-h-screen py-10 px-5" id="Font">
            <h1 className="text-5xl font-bold text-center text-white mb-3">Executive Body</h1>
            <p className='flex items-center justify-center  text-[15px] text-white mb-10'>Meet our dedicated team — the passionate minds whose relentless hard work and vision have propelled SEDS to new heights.</p>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {teamMembers.map((member, index) => (
                <TeamMemberCard
                    key={index}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                />
                ))}
            </div>
            <h1 className="text-5xl font-bold text-center text-white mb-13 mt-16">Our Teams</h1>
            <div className='text-white ml-18 border-[1px] border-white rounded bg-black/50 backdrop-blur-sm  bg-opacity-10 mr-13'>
                <h1 className='mt-5 ml-3 text-[50px] font-mono underline'>Team Janus</h1>
                <p className='mt-4 mx-4'>Team Janus represents our campus in the annual international CanSat competition. The CanSat competition is designed to reflect a typical aerospace program on a small scale. Every year, unique challenges are designed to reflect real-world missions, including telemetry requirements, communications, and autonomous operations.
                    <br></br>For the 2021 mission, the team was required to develop two auto-rotating science payloads that descend like a maple-seed, to be integrated into the CanSat container. The team reached the CDR stage despite the covid pandemic!
                    For the 2022 competition, the payload should be connected to the container via a 10m long tether. The mission requires the payload camera to maintain an orientation of 45 degrees south consistently.
                    <br></br>We hope to achieve new apogees of success in the esteemed competition.</p>
                <h1 className='mt-5 ml-3 text-[50px] font-mono underline'>Team Artemis</h1>
                <p className='mt-4 mx-4'>SEDS BPHC made its debut in the prestigious competition of Spaceport America Cup in 2021. Among the four BITS Pilani campuses, we were the first & only one to participate in the SA Cup.
                <br></br>For our category, the goal was to build a rocket 8 feet long, weighing approximately 28kg, which flies upto 10,000 feet and uses Commercially-Off-The-Shelf (COTS) solid rocket motors. <br></br>Currently the team is working on building rckeets to participate in various global avenues.</p>
                <h1 className='mt-5 ml-3 text-[50px] font-mono underline'>Team Hyperion</h1>
                <p className='mt-4 mx-4'>Cubesats are small, highly sophisticated satellites with a wide range of applications, including communication, earth observation, and defence.<br></br>
                The team is working on two satellites: NEMOlite and NEMO.<br></br>
                The 1U satellite NEMOlite, which will be launched in the coming years, will act as a demonstration satellite, demonstrating our capabilities to build and deploy satellites. The primary goal is to gain some flight time and put the Altitude Determination and Control Subsystems(ADCS) to the test.<br></br> The NEMO satellite is a remote sensing satellite that will track the level of microplastic in the Gulf of Mannar. NEMO is expected to launch in the distant future.</p>
                <h1 className='ml-3 mt-5 text-[50px] font-mono underline'>Team Archangel</h1>
                <p className='mt-4 mx-4 mb-5'>This is the R&D division of SEDS BPHC. Once technologies mature here, they would be implemented into our various projects. <br></br><br></br><b>Currently we’re working on:</b><br></br><br></br>
                <b>Thrust Vector Control</b> - It is the ability of a rocket to maintain its trajectory in motion by manipulating the direction of thrust coming out of the exhaust of the engine.<br></br>
                <b>Rocket Motors</b> - We have designed, built and tested E, I, G, and K-class solid rocket motors. We intend to move towards M-class and hybrid rocket motors next.</p>
            </div>
        </div>
    </div>
    );
}