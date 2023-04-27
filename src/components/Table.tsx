import { useState } from "react";
import { Country } from "../types";
import Pagination from "./Pagination";

interface TableProps {
  countries: Country[];
}

const TableView = ({ countries }: TableProps) => {
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const currentCountries = countries.slice(startIndex, endIndex);

  return (
    <div className="overflow-auto  w-full flex flex-col justify-center items-center my-8">
      {/* <div className="btn-group grid grid-cols-2 w-80">
<button className="btn btn-outline" onClick={handlePreviousPageClick}>Previous page</button>
        <button className="btn btn-outline" onClick={handleNextPageClick}>Next</button>
</div> */}

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(countries.length / PAGE_SIZE)}
        onPageChange={handlePageChange}
      />
      <table className="table    max-w-screen-md  min-w-screen-md">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Flag</th>
            <th>Name</th>
            <th>Flag</th>
            <th>Population</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {currentCountries.map((country) => (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={country.flags.png}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className="font-bold">{country.name.official}</div>
                  <div className="text-sm opacity-50">
                    {country.name.common}
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold text-center">{country.flag} </div>
              </td>
              <th>
                <div className="font-semibold text-center">
                  {country.population}
                </div>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        {/* <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </tfoot> */}
      </table>
    </div>
  );
};

export default TableView;
