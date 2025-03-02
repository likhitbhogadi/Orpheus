import { useState } from "react";
import { X } from "lucide-react";
// import companyLogo from './../assets/orpheusLogo.jpeg';
import varnanLogo from "./../assets/varnanLogo.png";
import neetiLogo from "./../assets/neetiLogo.jpg";
import ramdas from "./../assets/ramdas.webp";
import mun from "./../assets/mun.webp";
import vaktritaLogo from "./../assets/vaktritaLogo.webp";
import asian1 from "./../assets/asian1.jpg";
import asian2 from "./../assets/asian2.jpg";
import mun1 from "./../assets/mun1.jpg";
import mun2 from "./../assets/mun2.jpg";
import mun3 from "./../assets/mun3.jpg";
import neeti1 from "./../assets/neeti1.jpg"
import neeti2 from "./../assets/neeti2.jpg"
import neeti3 from "./../assets/neeti3.jpg"
import neeti4 from "./../assets/neeti4.jpg"

const eventCategories = [
  {
    title: "Ongoing Events",
    events: [
      {
        title: "Varnan - 1st National essay writing competition",
        image: varnanLogo,
        date: "March 05, 2024",
        description:
          "Participate in our first national essay writing competition and showcase your writing skills on a national platform.",
        registrationLink: "https://example.com/register",
        brochureLink:
          "https://drive.google.com/file/d/1O4a8ZTSw0nlOx1gGN3Wle0VIa_uLUp-D/view?fbclid=PAZXh0bgNhZW0CMTEAAaYbHgdvFiN9P5RCiOlcEH0m0FILRsW4m3XmjvLyFpBFUR2V7dRYBvZUpvI_aem_T-OuA0tsH5iTLDpHc2eMMw",
        additionalImages: [
          // 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
          // 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80'
        ],
      },
    ],
  },
  {
    title: "Upcoming Events",
    events: [
      // {
      //   title: 'Varnan - 1st National essay writing competition',
      //   image: varnanLogo,
      //   date: 'March 05, 2024',
      //   description: 'Participate in our first national essay writing competition and showcase your writing skills on a national platform.',
      //   registrationLink: 'https://example.com/register',
      //   brochureLink: 'https://drive.google.com/file/d/1O4a8ZTSw0nlOx1gGN3Wle0VIa_uLUp-D/view?fbclid=PAZXh0bgNhZW0CMTEAAaYbHgdvFiN9P5RCiOlcEH0m0FILRsW4m3XmjvLyFpBFUR2V7dRYBvZUpvI_aem_T-OuA0tsH5iTLDpHc2eMMw',
      //   additionalImages: [
      //     'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
      //     'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80'
      //   ]
      // }
    ],
  },
  {
    title: "Completed Events",
    events: [
      {
        title: "Awareness Programmes",
        image: ramdas,
        // date: "January 2024",
        description:
          "A successful awareness program featuring expert speakers and interactive sessions to educate and inform participants.\nWe have conducted 20 plus free workshops (Online) which were taken by experienced speakers who have experience of multiple conferences.Apart from online conferences, we have conducted 3 offline workshop at FIMT UNIVERSITY, ASIAN LAW COLLEGE, and RAMJAS COLLEGE DELHI UNIVERSITY.Collectively we have witnessed a total turnout of 1500 students in these workshops.",
        additionalImages: [asian1, asian2],
      },
      {
        title: "MUN and Youth Parliamentary Debate",
        image: mun,
        date: "April, May 2023",
        description:
          "Students participated in simulated UN debates and discussions, developing diplomatic skills and global awareness.\nAfter 5 successful online editions we organized our first edition of Model United Nations and Youth Parliamentary Debate on 30th April, and 1st May 2023 at Conference Center, Delhi University.\nThe event witnessed the participation of 250+ delegates, and was graced by the presence of eminent Chief Guests such as:\nSMT. Kalpana Sharma: Former additional Secretary Lok Sabha, Parliament Of India.\nMr. Sobha Kar: Served in the Indian Revenue Service; Indian delegate for two international tax committees of OCED Paris.\nSMT. Lipika Majumdar Roy Choudhary: Retired in 2014 as member of CBEC and Special Secretary of India Government of India; Over 9 year of experience in the UN panel of experts and 37 years in National administration.\nLt. Gen. (Retd) Sanjay Kulkarni: Captain of Operation Polar Bear and Operation Meghdoot. Shaurya Chakra Awardee.",
        additionalImages: [
          mun1,
          mun2,
          mun3
          // 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80',
          // 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80'
        ],
      },
      {
        title: "Neeti - 1st National Policy Drafting competition",
        image: neetiLogo,
        date: "May 2024",
        description:
          "Join us for the first national policy drafting competition, where young minds come together to draft innovative policies.\nNeeti is a National Policy Drafting Competition which was conducted in collaboration with Drishtikon, a student run committee of National Law University, Vishakhapatnam. This competition saw participation of over 230 students from 65 plus universities across the country. The theme of the competition was Deepfake. Deepfake technology poses a formidable challenge in the digital age blurring the lines between reality and fiction. Leveraging artificial intelligence deepfake manipulates or fabricate content to convincingly depict individuals saying or doing thing which they never did.",
        additionalImages: [
          neeti1,
          neeti2,
          neeti3,
          neeti4
          // 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
          // 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80'
        ],
      },
      {
        title: "Vaktrita - 1st National Online moot court competition",
        image: vaktritaLogo,
        date: "October 2023",
        description:
          "Participate in our first national online moot court competition and showcase your legal acumen and advocacy skills.",
        additionalImages: [
          // 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
          // 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80'
        ],
      },
    ],
  },
];

const EventModal = ({ event, isScheduled, isOngoing, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{event.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-4">{event.date}</p>
          <p
            className="text-gray-700 mb-8"
            dangerouslySetInnerHTML={{
              __html: event.description.replace(/\n/g, "<br />"),
            }}
          ></p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            {event.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${event.title} ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>

          {isScheduled && event.registrationLink && (
            <a
              href={event.registrationLink}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 transition-all duration-300"
              target="_blank"
            >
              Register Now
            </a>
          )}
          {event.brochureLink && (
            <a
              href={event.brochureLink}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 transition-all duration-300"
              target="_blank"
            >
              View Brochure
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const EventCard = ({ event, isScheduled, isOngoing }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 
                   transition-transform duration-300 cursor-pointer"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <p className="text-gray-600 mb-4">{event.date}</p>
          <p className="text-gray-700 mb-4 line-clamp-2">{event.description}</p>
          {/* {isScheduled && event.registrationLink && (
            <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
              Register Now
            </span>
          )}
          {isOngoing && event.brochureLink && (
            <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
              View Brochure
            </span>
          )} */}
        </div>
      </div>

      {showModal && (
        <EventModal
          event={event}
          isScheduled={isScheduled}
          isOngoing={isOngoing}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

const Events = () => {
  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 mt-20 animate-glow">
          Our Events
        </h2>

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
                    isScheduled={category.title === "Scheduled Events"}
                    isOngoing={category.title === "Ongoing Events"}
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
