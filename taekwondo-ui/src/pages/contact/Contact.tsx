import { useState } from "react";
import "./contact.css";
interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  timings: string;
}
const branches: Branch[] = [
  {
    id: "branch-1",
    name: "Challengers Taekwondo Academy - Branch 1",
    address: "Hyderabad, Telangana",
    phone: "+91 98765 43210",
    email: "branch1@challengerstkd.com",
    timings: "Monday - Saturday: 6:00 AM - 9:00 PM",
  },
  {
    id: "branch-2",
    name: "Challengers Taekwondo Academy - Branch 2",
    address: "Hyderabad, Telangana",
    phone: "+91 98765 43211",
    email: "branch2@challengerstkd.com",
    timings: "Monday - Saturday: 6:00 AM - 9:00 PM",
  },
  {
    id: "branch-3",
    name: "Challengers Taekwondo Academy - Branch 3",
    address: "Hyderabad, Telangana",
    phone: "+91 98765 43212",
    email: "branch3@challengerstkd.com",
    timings: "Monday - Saturday: 6:00 AM - 9:00 PM",
  },
];
const programs = [
  "Kids Taekwondo",
  "Adults Taekwondo",
  "Self Defence",
  "Fitness Training",
  "Competition Traning",
  "Private Training",
];

export default function Contact() {
  const [selectedBranchId, setSelectedBranchId] = useState(branches[0].id);
  const selectedBranch = branches.find(
    (branch) => branch.id === selectedBranchId,
  );
  return (
    <main className="contact-page">
      {/* <section className="contact-header">
        <div className="contact-header-content">
          <p>GET IN TOUCH</p>
          <h1>Contact Us</h1>
          <span>
            Start your Taekwondo journey with Challengers Taekwondo Academy.
          </span>
        </div>
      </section> */}
      <section className="contact-section">
        <div className="contact-info">
          <p className="contact-label">CONTACT US</p>
          <h2>
            Train With Us.
            <br />
            Grow With Us.
          </h2>
          <p className="contact-description">
            Whether you are looking for Taekwondo training for your child,
            self-defence training, fitness programs or competition coaching, our
            team is ready to help.
          </p>
        </div>
        <div className="branch-selector">
          <label htmlFor="branch">Select Academy Branch</label>
          <select
            id="branch"
            value={selectedBranchId}
            onChange={(e) => setSelectedBranchId(e.target.value)}
          >
            {branches.map((branch) => (
              <option key={branch.id} value={branch.id}>
                {branch.name}
              </option>
            ))}
          </select>
        </div>
        {/* SELECTED BRANCH DETAILS */}
        {selectedBranch && (
          <div className="branch-details">
            <h3>{selectedBranch.name}</h3>
            <div className="contact-details">
              <span className="detail-icon">📍</span>
              <div>
                <strong>Address</strong>
                <p>{selectedBranch.address}</p>
              </div>
            </div>
            <div className="contact-details">
              <span className="detail-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>{selectedBranch.phone}</p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="detail-icon">✉</span>
              <div>
                <strong>Email</strong> <p>{selectedBranch.email}</p>
              </div>
            </div>
            <div className="contact-detail">
              <span className="detail-icon">🕒</span>
              <div>
                <strong>Training Hours</strong>
                <p>{selectedBranch.timings}</p>
              </div>
            </div>
          </div>
        )}
        {/* RIGHT SIDE - FORM */}
        <div className="contact-form-container">
          <div className="form-header">
            <p>ENQUIRY FORM</p> <h2>Send Us an Enquiry</h2>
            <span>Fill in your details and our team will get back to you.</span>
          </div>
          <form className="contact-form">
            {/* NAME */}
            <div className="form-group">
              <label htmlFor="name"> Full Name * </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
            </div>
            {/* PHONE + EMAIL */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone"> Phone Number * </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email"> Email Address </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                />
              </div>
            </div>
            {/* PROGRAM + AGE */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="program"> Interested Program * </label>
                <select id="program" name="program" required defaultValue="">
                  <option value="" disabled>
                    Select a program
                  </option>
                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="age"> Student Age </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Enter age"
                  min="3"
                  max="100"
                />
              </div>
            </div>
            {/* BRANCH */}
            <div className="form-group">
              <label htmlFor="enquiryBranch"> Preferred Branch * </label>
              <select
                id="enquiryBranch"
                name="branch"
                value={selectedBranchId}
                onChange={(e) => setSelectedBranchId(e.target.value)}
                required
              >
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.name}
                  </option>
                ))}
              </select>
            </div>
            {/* MESSAGE */}
            <div className="form-group">
              <label htmlFor="message"> Your Enquiry * </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your requirements, preferred training time, previous experience, or any questions you have..."
                required
              />
            </div>
            {/* SUBMIT */}
            <button type="submit" className="contact-submit">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
