import React from 'react';
import {Link} from 'react-router-dom';
const ProjectDetails = () => {
    const data = [
        { label: 'Project Name', value: 'Hossaindi Bridge' },
        { label: 'Project ID', value: 'PR123' },
        { label: 'Location', value: 'Hossaindi,Gazaria,Munshiganj' },
        { label: 'Total Budget', value: 'BDT 50000000' },
        { label: 'Allocated Budget', value: 'BDT 35000000' },

      ];

  return (
    <>
    <div className="max-w-2xl mx-auto bg-white p-8 mt-8">
      <div>
        <div className="px-4 sm:px-0">
          <h1 className="text-base font-semibold leading-7 text-gray-900">Project Information</h1>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {data.map((item, index) => (
              <div key={index} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">{item.label}</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
            <Link to="/form" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
              Send Budget
            </Link>
        </div>
    </div>
    </>
  );
};

export default ProjectDetails;
