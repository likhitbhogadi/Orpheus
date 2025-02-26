import React, { useState } from 'react';
import { X } from 'lucide-react';

const eventCategories = [
  {
    title: 'Ongoing Events',
    events: []
  },
  {
    title: 'Scheduled Events',
    events: [
      {
        title: 'National Debate Championship 2024',
        image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80',
        date: 'March 15, 2024',
        description: 'Join us for the biggest debate championship of the year! This prestigious event brings together talented speakers from across the nation to compete and showcase their debating skills.',
        registrationLink: 'https://example.com/register',
        additionalImages: [
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80'
        ]
      }
    ]
  },
  {
    title: 'Completed Events',
    events: [
      {
        title: 'Public Speaking Workshop',
        image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80',
        date: 'January 2024',
        description: 'A successful workshop on mastering public speaking techniques, featuring expert speakers and hands-on practice sessions.',
        additionalImages: [
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80'
        ]
      },
      {
        title: 'Model United Nations',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
        date: 'December 2023',
        description: 'Students participated in simulated UN debates and discussions, developing diplomatic skills and global awareness.',
        additionalImages: [
          'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80'
        ]
      },
      {
        title: 'Leadership Summit',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
        date: 'November 2023',
        description: 'A gathering of young leaders discussing global challenges and developing leadership skills through workshops and seminars.',
        additionalImages: [
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80'
        ]
      },
      {
        title: 'Debate Competition',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
        date: 'October 2023',
        description: 'Inter-college debate competition where students showcased their argumentative and analytical skills on contemporary issues.',
        additionalImages: [
          'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
          'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80'
        ]
      }
    ]
  }
];

const EventModal = ({ event, isScheduled, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{event.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-4">{event.date}</p>
          <p className="text-gray-700 mb-8">{event.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg" />
            {event.additionalImages.map((img, index) => (
              <img key={index} src={img} alt={`${event.title} ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
            ))}
          </div>

          {isScheduled && event.registrationLink && (
            <a
              href={event.registrationLink}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 transition-all duration-300"
            >
              Register Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ event, isScheduled }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 
                   transition-transform duration-300 cursor-pointer"
      >
        <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <p className="text-gray-600 mb-4">{event.date}</p>
          <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>
          {isScheduled && event.registrationLink && (
            <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
              Register Now
            </span>
          )}
        </div>
      </div>

      {showModal && (
        <EventModal
          event={event}
          isScheduled={isScheduled}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

const Events = () => {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-glow">Our Events</h2>
        
        {eventCategories.map((category, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-semibold mb-8">{category.title}</h3>
            {category.events.length === 0 ? (
              <p className="text-gray-600 text-center">No events currently.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.events.map((event, eventIndex) => (
                  <EventCard
                    key={eventIndex}
                    event={event}
                    isScheduled={category.title === 'Scheduled Events'}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;