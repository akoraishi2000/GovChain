import React from 'react';

const C2Bform = () => {
  return (
    <div>
    <div className="max-w-2xl mx-auto bg-white p-8 mt-8">
      <h2 className="text-2xl font-bold mb-4">Budget Transfer</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="project_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Builder ID
          </label>
          <input
            type="text"
            id="project_id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="builder_address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Amount
          </label>
          <input
            type="text"
            id="builder_address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
    

    
  );
};

export default C2Bform;
