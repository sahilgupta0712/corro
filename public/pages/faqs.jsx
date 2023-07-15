import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

 function Faqs() {
  return (
    <MDBContainer>
      <section>
        <MDBTypography
          tag="h3"
          className="text-center mb-4 pb-2 text-primary fw-bold"
        >
          FAQ
        </MDBTypography>
        <p className="text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>

        <MDBRow>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon far icon="paper-plane text-primary pe-2" /> What is the status of my order?
            </MDBTypography>
            <p>
              <strong>
                <u>Absolutely!</u>
              </strong>{" "}
              To find out the status of your order on Carro, you will usually need to log in to your account on the website. Once you are logged in, you should be able to view the details of your order, including its current status.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="pen-alt text-primary pe-2" /> Can I change my order?
            </MDBTypography>
            <p>
            To find out if you can change your order, you may need to log in to your account on the website and view the details of your order. You may be able to find information about changing your order in the website's terms and conditions or customer service policies.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="user text-primary pe-2" /> What payment methods do you accept?
            </MDBTypography>
            <p>
            We accept a variety of payment methods, including credit and debit cards, PayPal, and bank transfers.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="rocket text-primary pe-2" /> How much does shipping cost?
            </MDBTypography>
            <p>
            The cost of shipping depends on the destination, the size and weight of your order, and the shipping method you choose. You can view the shipping options and costs at checkout before you complete your order.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="home text-primary pe-2" /> How long will it take for my order to arrive?
            </MDBTypography>
            <p>
            The estimated delivery time for your order will depend on the shipping method you choose and the destination of your order. You can view the estimated delivery time for each shipping option at checkout.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="book-open text-primary pe-2" /> Can I return or exchange an item?
            </MDBTypography>
            <p>
            Yes, we offer returns and exchanges for most items. Please refer to our returns policy for more information and to initiate a return or exchange.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}
        
        
        
        
export default Faqs