import React from 'react';
import Link from 'next/link';
export default function Projects() {
    return (
        <div>
            <h1 className="text-6xl font-bold text-center text-white mb-13 mt-4">Our Projects</h1>
            <div className='text-white ml-18 border-[1px] border-white rounded-[20px] bg-black/50 backdrop-blur-sm  bg-opacity-10 mr-13'>
                <h1 className='mt-5 ml-3 text-[40px] font-mono underline'>Rocketry - Project Vayu</h1>
                <p className='mt-4 mx-4'>Project Vayu is a student-led experimental rocketry mission aimed at building and launching a low-altitude sounding rocket. The rocket is designed to carry custom-built telemetry modules to measure altitude, temperature, and acceleration during flight. It features a two-stage deployment system with a parachute for safe recovery and reusability. The project helps members gain hands-on experience with propulsion, aerodynamics, and structural design, simulating the real-world challenges of aerospace engineering.</p>
                <h1 className='mt-5 ml-3 text-[40px] font-mono underline'>CanSat Competition – Mission Janus</h1>
                <p className='mt-4 mx-4'>Mission Janus was developed for the annual international CanSat competition, where student teams build and launch a soda-can-sized satellite that performs specific scientific missions during descent. Our payload was designed to autonomously deploy and rotate like a maple seed, transmitting live telemetry and capturing orientation data. The team successfully reached the Critical Design Review (CDR) stage in 2021 and 2022, despite challenges posed by the COVID-19 pandemic. This project emphasizes systems integration, electronics, and communication protocols.</p>
                <h1 className='mt-5 ml-3 text-[40px] font-mono underline'>Mars Rover Prototype – Project Ares</h1>
                <p className='mx-4 mt-4 mb-8'>Project Ares is a Mars rover prototype engineered to navigate uneven terrain and simulate autonomous surface exploration. Equipped with a 6-wheel rocker-bogie suspension, soil collection mechanism, and wireless camera feed, the rover is capable of remote operation over varied surfaces. The project is a multidisciplinary effort combining mechanical design, embedded systems, and computer vision. It aims to provide members with exposure to real planetary exploration concepts used by agencies like NASA and ISRO.</p>
            </div>
            <h1 className="text-6xl font-bold text-center text-white mb-13 mt-15">🏆Our Achievements🏆</h1>
            <div className='text-white ml-18 border-[1px] border-white rounded-[20px] bg-black/50 backdrop-blur-sm  bg-opacity-10 mr-13 mb-5'>
                <h1 className='mt-5 ml-3 text-[40px] font-mono underline'>Finalist – International CanSat Competition (2022)</h1>
                <p className='mx-4 mt-4'>SEDS-BPHC secured a place in the Top 10 internationally in the prestigious CanSat Competition hosted by the American Astronautical Society. Competing against over 100 global teams, our payload design demonstrated advanced autonomous deployment, stable descent orientation, and accurate telemetry transmission. This achievement marked a significant milestone in our club’s history and showcased our ability to perform on an international stage with limited resources.</p>
                <h1 className='mt-5 ml-3 text-[40px] font-mono underline'>National Recognition for Project Vayu at IIT Techfest</h1>
                <p className='mx-4 mt-4'>Our student-built rocket, Project Vayu, received national recognition at IIT Bombay’s Techfest, one of India’s largest student-run science and tech exhibitions. The rocket's unique design—featuring a custom telemetry system, parachute-based recovery, and lightweight carbon structure—was praised for innovation and engineering excellence. The project was featured in multiple showcases and gained attention from aerospace professionals and startups alike.</p>
                <h1 className='mt-5 ml-3 text-[40px] font-mono underline'>Hosted Hyderabad’s First Student Space Symposium</h1>
                <p className='mx-4 mt-4 mb-10'>SEDS-BPHC successfully organized Hyderabad’s first-ever Student Space Symposium, drawing participation from universities and clubs across India. The event featured expert talks, technical paper presentations, and interactive workshops on rocketry, satellites, and astrophysics. It provided a platform for budding space enthusiasts to collaborate, innovate, and share ideas. This initiative established SEDS-BPHC as a thought leader in promoting space education and student-led research.</p>

            </div>
        </div>
    );
}