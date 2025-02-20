import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faUsers, faPrayingHands } from '@fortawesome/free-solid-svg-icons';
const ServiceSection = () => {
  const items = [
    {
      icon:faSchool, // You can replace this with an actual icon
      title: 'Sunday school',
      description: 'Naturing young children to emulate the teachings of the bible',
    },
    {
      icon: faUsers, // You can replace this with an actual icon
      title: 'Youth Service',
      description: 'Giving youths opportunity to spread the gospel for posterity of the nations.',
    },
    {
      icon:faPrayingHands, // You can replace this with an actual icon
      title: 'Main Service',
      description: 'Join   us today for spiritual growth and nourishement in Christ, deliverance and fulfilling miracles',
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="flex flex-wrap justify-center space-x-6 mt-6 text-blue-600">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-6 m-4 rounded-md shadow-md shadow-blue-600/50  w-80 text-center hover:-translate-y-3 transition-all cursor-pointer hover:shadow-2xl">
            <div className=" serviceicon text-3xl mb-4"><FontAwesomeIcon icon={item.icon} /></div>
            <h3 className="font-bold text-3xl">{item.title}</h3>
            <p className="mt-2 text-gray-900">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
