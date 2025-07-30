import React from "react";
import { useEffect } from "react";

const ProductsPage = () => {
  useEffect(() => {
    window.location.href = "https://welljanhitchemist.com/";
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p>Redirecting to our official product site...</p>
    </div>
  );
};

export default ProductsPage;
