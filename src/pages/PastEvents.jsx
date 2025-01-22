import React from 'react';
import { assets } from '../assets/assets';

const PastEvents = () => {
  const pastEvents = [
    {
      title: "Icon Coderz 2K24",
      date: "January 2024",
      winners: [
        { 
          name: "K Teja Venkata Vinesh Kumar", 
          redgno: "20B91A5424", 
          branch: "AIDS",
          image: assets.previouswinner1, // Placeholder image for example
        },
        { 
          name: "Marikanthi Sai", 
          redgno: "21B91A54A4", 
          branch: "AIDS",
          image: assets.admin, 
        },
        {
          name: "Chandaka Balaji", 
          redgno: "20B91A0435", 
          branch: "ECE",
          image: assets.admin,
        }
      ],
      eventpic: assets.eventpicfinal,
      impact: "Over 200 participants, with groundbreaking projects in AI and agriculture.",
    },
    {
      title: "Icon Coderz 2K25",
      date: "February 2025",
      winners:[
        {
          name:"Who gone be next Icon Coderz 2k25?",
          image:assets.adminf
        }
      ],
      eventpic:assets.winner
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white" id="winners" >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-100 tracking-wide uppercase">
          Previous Winners
        </h2>

        <div className="space-y-16">
          {pastEvents.map((event, index) => (
            <div key={index} className="bg-gray-700 p-10 rounded-3xl shadow-xl">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10">
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold mb-4 text-gray-100">{event.title}</h3>
                  <p className="text-lg mb-6 text-gray-400">Event Date: {event.date}</p>

                  <div className="space-y-8">
                    <h4 className="text-2xl font-semibold text-gray-200">Winners:</h4>
                    <ul className="space-y-4">
                      {event.winners.map((winner, winnerIndex) => (
                        <li key={winnerIndex} className="text-lg relative group hover:cursor-pointer">
                          <div className="flex items-center space-x-6">
                            <img
                              src={winner.image}
                              alt={winner.name}
                               className="object-contain w-20 h-auto rounded-full border-4 border-indigo-400 transition-transform duration-300 group-hover:scale-110"  Increased size from w-16 to w-24 
                              // className='object-contain rounded-full border-4 border-indigo-400 w-24 h-24'
                            />
                            <div>
                              <span className="font-semibold text-indigo-400"> {winner.name} </span> 
                              - {winner.redgno} {winner.branch}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex-none h-auto max-w-lg w-full">
                  <img src={event.eventpic} alt="" className="w-full h-auto rounded-xl mb-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
