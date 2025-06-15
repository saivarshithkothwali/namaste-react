import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-express-by-gigih-rudya-designcrowd.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li>ContactUs</li>
          <li>Cart</li>
        </ul>
      </div>

    </div>
  )
};

const styleCard={
  backgroundColor:"#f0f0f0",
}

const RestrauntCard=(props)=>{
  const {resName,rating,cuisine}=props;
  return(
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/d62fa6fe-c0a4-4a0f-a191-6bc58b8d7a72_77013.JPG"/>
      <h3 className="res-name">{resName}</h3>
      <h4 className="res-rating">{rating} </h4>
      <h4 className="res-cuisine">{cuisine}</h4>
    </div>
  )
};

const Body=()=>{
  return(
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        {/*restraunt cards*/}
        <RestrauntCard 
          resName="KFC"
          cuisine="Biryani,North Indian"
          rating="4.5"
        />
        <RestrauntCard
          resName="pizza Hut"
          cuisine="Pizza,Burger,FastFood"
          rating="4.4"
        />
        
        

      </div>
    </div>


  )
};

const AppLayout=()=>{
  return(
    <div className="app">
      
      <Header/>
      <Body/>
      
      {/* Footer */}


    </div>


  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);




