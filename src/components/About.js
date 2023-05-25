import React from 'react'


// function About({ image, about }) {
//   return (
//     <aside>
//       {image ? <img src={image} alt="blog logo" /> : "https://via.placeholder.com/215" }
   
//       <p>{about}</p>
//     </aside>
//   );
// }

// export default About
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      {image ? <img src={image} alt="blog logo" /> : "https://via.placeholder.com/215" }
   
      <p>{about}</p>
    </aside>
  );
}

export default About