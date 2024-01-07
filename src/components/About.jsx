// import React from "react";
// import User from "./User";
//  const About = () => {
//     return (
//       <div class="about">
//         <h1>About Us</h1>
//         <h1>Namaste React web Series</h1>
//         <User name={"Akshay Saini"}/>
        
//       </div>
//     );
//   };
//   export default About;
// import React from "react";
// import User from "./User";
// import chefImage from "./Images/chef.jpeg";
// import restaurantImage from "./Images/restaurant.jpg";
// import dish1Image from "./Images/dish1.jpeg";
// import dish2Image from "./Images/dish2.jpeg";
// import dish3Image from "./Images/dish3.jpeg";

// const DishCard = ({ image, title, description }) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <img src={image} alt={title} className="rounded-md mb-4" />
//       <h3 className="text-xl font-bold mb-2">{title}</h3>
//       <p className="text-gray-700">{description}</p>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div className="about bg-gray-100 p-8">
//       <h1 className="text-4xl font-bold mb-4">About Us</h1>
//       <p className="text-gray-700 mb-6">
//         Welcome to Namaste React Web Series! We take pride in delivering an
//         exceptional dining experience with a touch of innovation and tradition.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <img
//             src={restaurantImage}
//             alt="Restaurant Interior"
//             className="rounded-lg w-full"
//           />
//         </div>

//         <div>
//           <h2 className="text-2xl font-bold mb-4">Our Chef - Akshay Saini</h2>
//           <img
//             src={chefImage}
//             alt="Chef Akshay Saini"
//             className="rounded-lg mb-4"
//           />
//           <p className="text-gray-700">
//             Chef Akshay Saini is the heart and soul of our culinary journey. His
//             passion for creating exquisite dishes is reflected in every plate
//             served at our restaurant.
//           </p>
//           <User name={"Akshay Saini"} />
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Our Qualities</h2>
//         <ul className="list-disc list-inside text-gray-700">
//           <li>Fresh and locally sourced ingredients</li>
//           <li>Attention to detail in every recipe</li>
//           <li>Warm and inviting ambiance</li>
//           <li>Exceptional customer service</li>
//         </ul>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Specialties</h2>
//         <p className="text-gray-700 mb-4">
//           At Namaste React Web Series, we are known for our unique specialties
//           that tantalize taste buds and create memorable dining experiences.
//         </p>
//         <ul className="list-disc list-inside text-gray-700">
//           <li>Signature dishes crafted by Chef Akshay</li>
//           <li>Exclusive wine and cocktail pairings</li>
//           <li>Customizable catering services for special events</li>
//         </ul>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Featured Dishes</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <DishCard
//             image={dish1Image}
//             title="Spicy Chicken Curry"
//             description="A tantalizing blend of spices with tender chicken pieces, served with basmati rice."
//           />
//           <DishCard
//             image={dish2Image}
//             title="Vegetarian Delight"
//             description="Fresh and seasonal vegetables cooked to perfection, accompanied by homemade sauce."
//           />
//           <DishCard
//             image={dish3Image}
//             title="Chocolate Decadence"
//             description="Indulge in the rich and velvety chocolate dessert that will satisfy your sweet cravings."
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


// const About = () => {
//   return (
//     <div class="about">
//       <h1>About Us</h1>
//       <h1>Namaste React web Series</h1>
//       <User name={"Akshay Saini"}/>
//       <UserClass name={"Akshay Saini"} location={"Dehradun"}/>
//     </div>
//   );
// };
import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext"
// import{Component} from  "react";
class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount(){
    console.log("Parent component Did Mount");
  }
  // byUserContext.consumer use to userContex in classBased component
  render(){
    console.log("Parent render");
    return (
      <div class="about">
        <h1>About Us</h1>
        <div>
           LoggedIn User
           <UserContext.Consumer>
            {(loggedInUser)=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
           </UserContext.Consumer>
        </div>
        <h1>Namaste React Web series</h1>
        {/* <User name={"Akshay Saini"}/> */}
        <UserClass name={"Akshay Saini"} location={"Dehradun"}/>
        
      </div>
    )
  }
}
export default About;
