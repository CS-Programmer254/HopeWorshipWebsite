
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers,faChurch,faProjectDiagram,faCheck} from '@fortawesome/free-solid-svg-icons';

export default function Cards() {
  const data = [
    {
      icon:faChurch, // Dollar sign icon faDollarSignfaPlusCircle
      title: "Branches",
      value: '5',
      comparison: 'Church Branches within Kenya',
      comparisonStyle: { color: 'green' }
    },
    {
      icon: faUsers, // Users icon
      title: "Members",
      value: '1,03',
      comparison: 'Across all Our Branches',
      comparisonStyle: { color: 'green' }
    },
    {
      icon:faProjectDiagram,
      title: 'Projects',
      value: '42',
      comparison: '+3 ongoing',
      comparisonStyle: { color: 'red' }
    },
    {
      icon: faCheck,
      title: 'Achievements',
      value: '83',
      comparison: 'As per 2024 July',
      comparisonStyle: { color: 'green' }
    }
  ];

  return (
    <div className="flex justify-between p-5 bg-white m-8 ">
      {data.map((item, index) => (
        <Link key={index} to={`/details/${item.title}`} className="bg-gray rounded-lg shadow-md p-5 mr-5 w-1/4 flex items-center  hover:bg-gray-50">
          <div className="text-3xl mr-4">
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <div className="flex flex-col ">
            <div className="text-sm text-gray-900">{item.title}</div>
            <div className="text-2xl font-bold my-1">{item.value}</div>
            <div className="text-sm" style={item.comparisonStyle}>{item.comparison}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
