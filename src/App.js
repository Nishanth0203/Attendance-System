// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import DashBoard from './components/DashBoard';
// import HomePage from './components/HomePage'; // Import the HomePage component
// import './App.css';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/" element={<HomePage />} /> {/* Add this route */}
//           <Route
//             path="/"
//             element={isLoggedIn ? <DashBoard /> : <LoginPage />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// src/App.js

// src/App.js

// src/App.js

// src/App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './components/LoginPage';
// import HomePage from './components/HomePage';
// import './App.css';

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           {/* Define a route for the root URL */}
//           <Route path="/" element={<LoginPage />} />
//           {/* <Route path="/HomePage" element={<HomePage />} */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


// App.js

// App.js

// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;







