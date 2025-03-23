import { CheckIcon } from '@heroicons/react/20/solid';
import { UserCircleIcon } from '@heroicons/react/20/solid'
import './Pricing.css'

const tiers = [
  {
    name: 'Basic Package',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '₹15,000',
    description: 'The perfect package for budget travelers looking to explore Jammu and Kashmir.',
    features: [
      '3 days, 2 nights',
      'Standard accommodation',
      'Airport transfers',
      'Guided tours to major attractions',
      'Meals: Breakfast and Dinner',
    ],
    featured: false,
  },
  {
    name: 'Deluxe Package',
    id: 'tier-deluxe',
    href: '#',
    priceMonthly: '₹20,000',
    description: 'A premium experience with better accommodations and more exclusive services.',
    features: [
      '5 days, 4 nights',
      'Luxury accommodation',
      'Private transport',
      'Exclusive guided tours',
      'Meals: Full board (Breakfast, Lunch, Dinner)',
      'Adventure activities like trekking or skiing',
    ],
    featured: true,
  },
  {
    name: 'Premium Package',
    id: 'tier-premium',
    href: '#',
    priceMonthly: '₹25,000',
    description: 'The ultimate luxury experience with everything taken care of.',
    features: [
      '7 days, 6 nights',
      '5-star luxury accommodation',
      'Private chauffeur-driven car',
      'Helicopter tour to Vaishno Devi',
      'Personalized tour guide',
      'Exclusive cultural experiences and events',
      'All-inclusive meals and beverages',
    ],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TouristPackage() {
  return (
    <>
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">Tourist Packages</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Choose the perfect package for your Kashmir adventure
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Select a package that offers the best experience to explore the scenic beauty of Jammu and Kashmir.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
              'transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/package</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>



    


    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-[2vw] text-white font-bold font-serif  bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400">People's Experience</h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover how people have explored the beauty of Jammu and Kashmir and shared their unforgettable experiences.
        </p>
      </div>

      {/* Experience 1 */}
      <div className="mt-[5vw] mx-[13vw] cursor-pointer flex justify-center items-center space-x-10 w-full sm:w-3/4 lg:w-3/4">
        <div className="flex w-full items-center">
          <div className="h-16 w-16 rounded-full bg-gray-300">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User 1" className="h-16 w-16 rounded-full object-cover" />
          </div>
          <div className="ml-6 w-full">
            <p className="text-xl text-gray-900 font-semibold font-[Poppins]">Ankush</p>
            <p className="mt-2 text-gray-600">
              "My trip to Kashmir was absolutely breathtaking! From the snow-capped mountains to the beautiful gardens, every moment was unforgettable. The Shikara ride on Dal Lake was a magical experience, and the hospitality of the people made me feel like I was at home. The food was a perfect blend of spices and flavors, and I couldn’t have asked for a better vacation."
            </p>
          </div>
        </div>
      </div>

      {/* Experience 2 */}
      <div className="mt-12 mx-[13vw] cursor-pointer flex justify-center items-center space-x-10 w-full sm:w-3/4 lg:w-3/4">
        <div className="flex w-full items-center">
          <div className="h-16 w-16 rounded-full bg-gray-300">
            <UserCircleIcon className="h-16 w-16 text-indigo-600" aria-hidden="true" />
          </div>
          <div className="ml-6 w-full">
            <p className="text-xl text-gray-900 font-semibold font-[Poppins]">Jyoti</p>
            <p className="mt-2 text-gray-600">
              "The hospitality in Kashmir was second to none. I will always cherish the scenic views and the warm welcome I received from the locals. I particularly loved the rich cultural experiences, such as visiting the Mughal gardens and experiencing traditional Kashmiri cuisine. The landscapes were so diverse, from serene lakes to majestic mountains — every corner of Kashmir felt like a postcard."
            </p>
          </div>
        </div>
      </div>

      {/* Experience 3 */}
      <div className="mt-12 mx-[13vw]  cursor-pointer flex justify-center items-center space-x-10 w-full sm:w-3/4 lg:w-3/4">
        <div className="flex w-full items-center">
          <div className="h-16 w-16 rounded-full bg-gray-300">
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="User 2" className="h-16 w-16 rounded-full object-cover" />
          </div>
          <div className="ml-6 w-full">
            <p className="text-xl text-gray-900 font-semibold font-[Poppins] ">Ankita</p>
            <p className="mt-2 text-gray-600">
              "Kashmir is truly a paradise on Earth. The houseboats on Dal Lake were an experience I'll never forget. It felt like living in a dream. Waking up to the misty mornings with the sound of the water was serene. The local people were so welcoming, and I enjoyed interacting with them. The architecture of the old temples and mosques left me awestruck — every part of Kashmir has such a rich history and culture that I can't wait to explore again."
            </p>
          </div>
        </div>
      </div>

      {/* Experience 4 */}
      <div className="mt-12 mx-[13vw] cursor-pointer flex justify-center items-center space-x-10 w-full sm:w-3/4 lg:w-3/4">
        <div className="flex w-full items-center">
          <div className="h-16 w-16 rounded-full bg-gray-300">
            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="User 3" className="h-16 w-16 rounded-full object-cover" />
          </div>
          <div className="ml-6 w-full">
            <p className="text-xl text-gray-900 font-semibold font-[Poppins]">Manish</p>
            <p className="mt-2 text-gray-600">
              "The trekking experiences in Kashmir were unmatched. The breathtaking views of the Himalayas and the tranquil environment were just perfect. Whether it was a short trek through the pine forests or a more challenging hike up the mountains, every step brought a new, stunning vista. The guides were friendly and knowledgeable, making the journey even more enjoyable. I also had the chance to experience the vibrant markets of Srinagar, filled with fresh produce and local handicrafts."
            </p>
          </div>
        </div>
      </div>

      {/* Experience 5 */}
      <div className="mt-12 mx-[13vw] cursor-pointer flex justify-center items-center space-x-10 w-full sm:w-3/4 lg:w-3/4">
        <div className="flex w-full items-center">
          <div className="h-16 w-16 rounded-full bg-gray-300">
            <img src="https://randomuser.me/api/portraits/women/4.jpg " alt="User 4" className="h-16 w-16 rounded-full object-cover" />
          </div>
          <div className="ml-6 w-full">
            <p className="text-xl text-gray-900 font-semibold font-[Poppins]">Sunita Williams</p>
            <p className="mt-2 text-gray-600">
              "I had the most amazing time exploring Kashmir! The food was one of the highlights of my trip, from the succulent Rogan Josh to the mouth-watering Yakhni. We also visited some beautiful monasteries and temples that told the fascinating story of Kashmir’s diverse religious heritage. The natural beauty of places like Gulmarg and Pahalgam were beyond words. Each place had its own charm, and I look forward to coming back with my family!"
            </p>
          </div>
        </div>
      </div>
    </div>





    </>
  );
}
