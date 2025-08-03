import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div className="font-sans ">
        {/* Red Header Section */}
        <div className="bg-red-500 text-white py-6 px-6 text-center  rounded-lg shadow-md  w-full">
          <h1 className="text-3xl font-bold mb-2 ">About Food Express</h1>
          <p className="text-lg">Bringing delicious food to your doorstep</p>
        </div>

        {/* White Info Card Section */}
        <div className="max-w-4xl mx-auto bg-gray-100 p-8 mt-10 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 ">
            Our Story
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Welcome to Food Express — your go-to destination for fast, reliable,
            and delicious food delivery. We connect you with top-rated
            restaurants in your city, bringing your favorite meals right to your
            doorstep.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            At Food Express, our mission is to make food ordering simple,
            convenient, and enjoyable. With a wide range of cuisines, seamless
            ordering, and speedy delivery, we are here to satisfy your cravings
            anytime, anywhere.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="text-red-600 font-semibold text-lg mb-1">
                🚚 Fast Delivery
              </h3>
              <p className="text-gray-700">
                Lightning-fast delivery to satisfy your hunger instantly.
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="text-red-600 font-semibold text-lg mb-1">
                🍽️ Quality Food
              </h3>
              <p className="text-gray-700">
                Only the best restaurants to ensure high-quality meals.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
