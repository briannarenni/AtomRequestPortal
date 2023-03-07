import { useState } from 'react';
import _ from 'lodash';
// Sort users by user.userId, user.fullName, user.dept

export default function useSortFilter(data) {
  const [sortedData, setSortedData] = useState(data);

  const sortData = (sortKey, sortOrder) => {
    const sorted = _.orderBy(sortedData, [sortKey], [sortOrder]);
    setSortedData(sorted);
  };

  const filterData = (filterKey, filterValue) => {
    const filtered = _.filter(data, [filterKey, filterValue]);
    setSortedData(filtered);
  };

  return {
    sortedData,
    sortData,
    filterData
  };
}
