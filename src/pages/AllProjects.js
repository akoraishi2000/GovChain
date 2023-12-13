import React from 'react';
import {Link} from 'react-router-dom';


const AllProjects = () => {
  return (
    <>
      <div>
        {/* Tailwind CSS Table */}
        <div className="container mx-auto p-8 mt-8">
          <table className="min-w-full bg-white border border-gray-300 table-auto">
            {/* Table header */}
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Project ID</th>
                <th className="py-2 px-4 border-b">Project Name</th>
                <th className="py-2 px-4 border-b">Details</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">PR001</td>
                <td className="py-2 px-4 border-b">Project A</td>
                <td className="py-2 px-4 border-b">
                  <Link to="/ProjectDetails">
                    <a href='/' className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                      Details
                    </a>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">PR002</td>
                <td className="py-2 px-4 border-b">Project B</td>
                <td className="py-2 px-4 border-b">
                  <Link to="/ProjectDetails">
                    <a href='/' className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                      Details
                    </a>
                  </Link>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
