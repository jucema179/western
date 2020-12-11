import React, { Component } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Parallax, Background } from "react-parallax";
import './css/styles.css';
import { Image, Button, Col, Container, Row, Form } from 'react-bootstrap';

import Footer from '../globalComponents/footer';
import ContactForm from '../globalComponents/contactForm';

class HeaderImage extends Component {
  componentWillMount() {

  }

  test = (e) => {
    e.preventDefault();
    alert('This is a modal')
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h3>PRIVACY POLICY</h3>
          </Row>
          <Row>
            <h4>
              1. INTRODUCTION
            </h4>
          </Row>
          <Row>
            <h5>
              1.1. PURPOSE OF POLICY
            </h5>
          </Row>
          <Row>
            <p>
              Greenspire (“us,” “we,” or “Company”) is committed to respecting the privacy rights of its customers, visitors, and other users of the Company Website (the “Site”). We created this Website Privacy Policy (this “Policy”) to give you confidence as you visit and use the Site, and to demonstrate our commitment to fair information practices and the protection of privacy. This Policy is only applicable to the Site, and not to any other websites that you may be able to access from the Site, each of which may have data collection and use practices and policies that differ materially from this Policy. Please read this Policy carefully before using any of our services. By using any such services you are acknowledging that you have read and understood this Policy and that you consent to have your personal information used in the ways that we identify below. If you do not agree to be bound by the terms of this Policy, simply exit this page without accessing or using our Site or any of our services.
            </p>
          </Row>
          <Row>
            <h4>
            2. INFORMATION COLLECTION PRACTICES
            </h4>
          </Row>
          <Row>
            <h5>
            2.1. WHAT BASIC INFORMATION DOES THE COMPANY COLLECT?
            </h5>
          </Row>
          <Row>
            <p>
            In operating the Site, Company may include registration, online surveys, and other online forms that ask users to provide their names, e-mail addresses, and other contact information, information about users’ bills, and other information that is relevant to an assessment of the users’ suitability for Company’s services.
            </p>
          </Row>
          <Row>
            <h5>
            2.2. WHAT ADDITIONAL INFORMATION DOES COMPANY COLLECT?
            </h5>
          </Row>
          <Row>
            <p>
            (a) AUTOMATIC COLLECTION. Our servers automatically recognize visitors’ domain names and IP addresses (the number assigned to computers on the Internet). No personal information about you is revealed in this process. The Site may also gather anonymous “traffic data” that does not personally identify you, but that may be helpful for marketing purposes or for improving the services we offer.
            </p>
          </Row>
          <Row>
            <p>
            (b) COOKIES. From time to time, we may use the standard “cookies” feature of major browser applications that allows us to store a small piece of data on your computer about your visit to our Web site. We do not set any personally identifiable information in cookies, nor do we employ any data capture mechanisms on our website other than cookies. Cookies help us learn which areas of our site are useful and which areas need improvement. You can choose whether to accept cookies by changing the settings on your browser. However, if you choose to disable this function, your experience at our Web site may be diminished and some features may not work as they were intended.
            </p>
          </Row>


3. USE AND SHARING OF INFORMATION
3.1. WHAT DOES COMPANY DO WITH COLLECTED INFORMATION?

(a) PERSONAL INFORMATION. We may share your personal information with third parties without further notice to you, to provide you with the services offered by us (or by third parties that we have contracted with) or to comply with the law. We may use your personal information to verify your identity, to check your qualifications, or to follow up with transactions or inquiries initiated on the Site. We may also use your contact information to provide you information of any changes to the Site, or to send you additional information about our Company or its products and services. By providing your telephone number, you expressly consent to Greenspire or its vendors and affiliates to contact you about our services using an automatic telephone dialing system and/or an artificial or pre-recorded voice.

(b) ANONYMOUS INFORMATION. We use anonymous information to analyze our Site traffic, but we do not examine this information for individually identifying information. In addition, we may use anonymous IP addresses to help diagnose problems with our server, to administer our site, or to display the content according to your preferences. Traffic and transaction information may also be shared with business partners and advertisers on an aggregate and anonymous basis.

(c) USE OF COOKIES. We may use cookies to deliver content specific to your interests, to save your password so you don’t have to re-enter it each time you visit our site, or for other purposes. Promotions or advertisements displayed on our site may contain cookies. We do not have access to or control over information collected by outside advertisers on our site.

(d) DISCLOSURE OF PERSONAL INFORMATION. We may disclose personal information if required to do so by law or in the good-faith belief that such action is necessary to (1) conform to the edicts of the law or comply with legal process served on Company or its parent company, subsidiaries or affiliates, (2) protect and defend the rights or property of Company or the users of the Site, or (3) act under exigent circumstances to protect the safety of the public or users of the Site.

(e) SALE OF INFORMATION. In order to accommodate changes in our business, we may sell or buy portions of our company or other companies or assets, including the information collected through this Web site. If Company or substantially all of its assets are acquired, customer information will be one of the assets transferred to the acquirer.

(f) CONSENT. By providing your telephone number and clicking ‘submit,’ you expressly consent to Greenspire or its vendors and affiliates to contact you regarding your inquiry using an automatic telephone dialing system and/or an artificial or pre-recorded voice. You are not required to submit your information via this website as a condition of purchasing any goods or services.

4. SECURITY
The Site has security measures in place to prevent the loss, misuse, and alteration of the information that we obtain from you, but we make no assurances about our ability to prevent any such loss, misuse, to you or to any third party arising out of any such loss, misuse, or alteration.

5. WEBSITE AREAS BEYOND COMPANY’S CONTROL
5.1. PUBLIC FORUMS

The Site may include interactive forums such as message boards and chat rooms. Please remember that any information that is disclosed in these areas becomes public information and you should exercise caution when deciding to disclose your personal information.

5.2. THIRD PARTY WEBSITES

The Site may contain links to other websites. If you choose to visit other websites, we are not responsible for the privacy practices or content of those other websites, and it is your responsibility to review the privacy policies at those websites to confirm that you understand and agree with their policies.

5.3. Privacy Notices Opt Out Right

If you do not want us to disclose nonpublic personal information about you to affiliates and that they not market their products and services to you based on information that we shared with them

-or-

If you do not want us to disclose nonpublic personal information about you to nonaffiliated third parties and that they not market their products and services to you based on information that we shared with them

Please click the “unsubscribe” link at the bottom of the original e-mail that Greenspire sent to you.

If you have a joint account, any party on the account can make this choice. That choice will apply to all parties on the account.

6. POLICY UPDATES
We reserve the right, at any time, to add to, change, update, or modify this Policy, simply by posting such change, update, or modification on the Site and without any other notice to you. Any such change, update, or modification will be effective immediately upon posting on the Site. It is your responsibility to review this Policy from time to time to ensure that you continue to agree with all of its terms.

7. ADVERTISING OPT-OUT
Advertisers use cookies primarily to remember repeat users, but may also be used to maintain campaign information, and other functions. To opt out is always an option.
        </Container>
        <Footer/>
      </div>
    )
  }
}

export default HeaderImage;