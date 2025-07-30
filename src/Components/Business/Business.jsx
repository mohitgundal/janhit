// import React from "react";
// import BusinessHero from "./BusinessHero";
// import WhyBusinessWithUs from "./WhyBusinessWithUs";
// import BusinessPartner from "./BusinessPartner";
// import BusinessFranchise from "./BusinessFranchise";
// import BusinessFaq from "./BusinessFaq";
// import BusinessBrochure from "./BusinessBrochure";
// import BusinessApplication from "./BusinessApplication";
// import BusinessForm from "./BusinessForm";
// import BusinessMap from "./BusinessMap";
// import Footer from "../Footer/Footer";

// const Business = () => {
//   return (
//     <div className="business">
//       <BusinessHero />
//       <WhyBusinessWithUs />
//       <BusinessPartner />
//       <BusinessFranchise />
//       <BusinessFaq />
//       <BusinessBrochure/>
//       <BusinessApplication/>
//       <BusinessForm/>
//       <BusinessMap/>
//       <Footer/>
//     </div>
//   );
// };

// export default Business;



import React, { useRef } from "react";
import BusinessHero from "./BusinessHero";
import WhyBusinessWithUs from "./WhyBusinessWithUs";
import BusinessPartner from "./BusinessPartner";
import BusinessFranchise from "./BusinessFranchise";
import BusinessFaq from "./BusinessFaq";
import BusinessBrochure from "./BusinessBrochure";
import BusinessApplication from "./BusinessApplication";
import BusinessForm from "./BusinessForm";
import BusinessMap from "./BusinessMap";
import Footer from "../Footer/Footer";

const Business = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="business">
      <BusinessHero scrollToForm={scrollToForm} />
      <WhyBusinessWithUs />
      <BusinessPartner />
      <BusinessFranchise />
      <BusinessFaq />
      <BusinessBrochure />
      <BusinessApplication />
      
      {/* Add ref here to target this section */}
      <div ref={formRef}>
        <BusinessForm />
      </div>

      <BusinessMap />
      <Footer />
    </div>
  );
};

export default Business;
