// import React from 'react';
import aryan from "./../assets/aryan1.jpg";
// import aryan from "./../assets/aryan.jpg";
import vakula from "./../assets/Vakula-di.jpeg";
import prachi from "./../assets/prachi.webp";
import ruwa from "./../assets/ruwa.webp";
import sumana from "./../assets/sumana.webp";
import sindhu from "./../assets/sindhu.jpeg";
import amarveer from "./../assets/amarveer.webp";

const teamMembers = [
  {
    name: "Vakula Giri",
    role: "COO & CFO",
    // image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
    image: vakula,
  },
  {
    name: "Aryan Kashyap",
    role: "CEO",
    // image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    image: aryan,
  },
  {
    name: "Amarveer Kaur",
    role: "Manager",
    // image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
    image: amarveer,
  },
  {
    name: "Pasupula Sindhu",
    // role: 'Head of Operations',
    // image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
    image: sindhu,
  },
  {
    name: "Prachi Sharma",
    // role: 'Communications Lead',
    // image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80'
    image: prachi,
  },
  {
    name: "Ruwa Muneer Ahmed",
    // role: 'Events Coordinator',
    // image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80'
    image: ruwa,
  },
  {
    name: "Sumana Krovvidi",
    // role: 'Student Relations',
    // image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80'
    image: sumana,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 mt-20 animate-glow">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-6 rounded-lg">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 p-6"
            >
              <div className="aspect-square overflow-hidden mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-full p-2"
              />
                  </div>
                  <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
