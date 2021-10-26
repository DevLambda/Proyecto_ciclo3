// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import { Link } from 'react-router-dom';
// import Ventas from '../pages/Ventas';

// const PrivateRoute = (Ventas) => {
//   const { isAuthenticated } = useAuth0();

//   return isAuthenticated ? (
//     <>{Ventas}</>
//   ) : (
//     <div>
//       <div className='text-9xl text-red-500 '>No estas autorizado para ver este sitio.</div>
//       <Link to='/Index'>
//         <span className='text-blue-500 font-bold'>Llévame al home</span>
//       </Link>
//     </div>
//   );
// };

// export default PrivateRoute;