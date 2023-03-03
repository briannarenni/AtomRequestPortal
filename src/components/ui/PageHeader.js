import React from 'react';

export default function PageHeader({ title }) {
  return <h1 className="text-center display-6 mb-2">{title}</h1>;
}

// export default function PageHeader({ title }) {
//   return (
//     <div className="d-flex w-50 mx-auto justify-content-between align-items-center">
//       <p className="text-start">Back</p>
//       <h1 className="text-center display-6 mb-2">{title}</h1>
//     </div>
//   );
// }
