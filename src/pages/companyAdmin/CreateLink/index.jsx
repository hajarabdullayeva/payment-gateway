import React from "react";
import FormPayment from "../../../components/comapnyAdmin";
import "./link.css";

function CreateLink() {
  return (
    <div className="create-link">
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: "#fff",
          }}
        >
          <img
            src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
            alt="companylogo"
          />
          <h2>Company Name</h2>
        </div>
        <div className="description">
          <p>Description</p>
          <p className="price">Price</p>
        </div>
      </div>
      <FormPayment />
    </div>
  );
}

export default CreateLink;
