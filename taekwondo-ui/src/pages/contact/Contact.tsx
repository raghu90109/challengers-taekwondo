import { useState } from "react";
import "./contact.css";

interface Branch {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  timings: string;
}

const branches: Branch[] = [
  {
    id: 7,
    name: "Challengers Taekwondo Academy - Branch 1",
    address: "Hyderabad, Telangana",
    phone: "+91 98765 43210",
    email: "branch1@challengerstkd.com",
    timings: "Monday - Saturday: 6:00 AM - 9:00 PM",
  },
  {
    id: 2,
    name: "Challengers Taekwondo Academy - Branch 2",
    address: "Hyderabad, Telangana",
    phone: "+91 98765 43211",
    email: "branch2@challengerstkd.com",
    timings: "Monday - Saturday: 6:00 AM - 9:00 PM",
  },
  {
    id: 3,
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
  "Competition Training",
  "Private Training",
];

export default function Contact() {
  // -----------------------------
  // FORM STATE
  // -----------------------------

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: "",
    program: "",
    message: "",
  });

  const [selectedBranchId, setSelectedBranchId] = useState<number>(
    branches[0].id,
  );

  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  // -----------------------------
  // SELECTED BRANCH
  // -----------------------------

  const selectedBranch = branches.find(
    (branch) => branch.id === selectedBranchId,
  );

  // -----------------------------
  // INPUT CHANGE
  // -----------------------------

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // -----------------------------
  // FORM SUBMIT
  // -----------------------------

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:9090/api/enquiries", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,

          age: formData.age ? Number(formData.age) : null,

          branchId: selectedBranchId,

          program: formData.program,

          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry");
      }

      setSuccessMessage(
        "Thank you! Your enquiry has been submitted successfully.",
      );

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        age: "",
        program: "",
        message: "",
      });

      // Reset branch
      setSelectedBranchId(branches[0].id);
    } catch (error) {
      console.error("Enquiry submission error:", error);

      setErrorMessage("Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* =====================================
          CONTACT HEADER
      ====================================== */}

      <section className="contact-header">
        <div className="contact-header-content">
          <p>GET IN TOUCH</p>

          <h1>Contact Us</h1>

          <span>
            Start your Taekwondo journey with Challengers Taekwondo Academy.
          </span>
        </div>
      </section>

      {/* =====================================
          CONTACT SECTION
      ====================================== */}

      <section className="contact-section">
        {/* =================================
            LEFT SIDE
        ================================== */}

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

          {/* BRANCH SELECTOR */}

          <div className="branch-selector">
            <label htmlFor="branch">Select Academy Branch</label>

            <select
              id="branch"
              value={selectedBranchId}
              onChange={(e) => setSelectedBranchId(Number(e.target.value))}
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

              <div className="contact-detail">
                <div className="detail-icon">📍</div>

                <div>
                  <strong>Address</strong>

                  <p>{selectedBranch.address}</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">📞</div>

                <div>
                  <strong>Phone</strong>

                  <p>{selectedBranch.phone}</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">✉</div>

                <div>
                  <strong>Email</strong>

                  <p>{selectedBranch.email}</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">🕒</div>

                <div>
                  <strong>Training Hours</strong>

                  <p>{selectedBranch.timings}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* =================================
            RIGHT SIDE - FORM
        ================================== */}

        <div className="contact-form-container">
          <div className="form-header">
            <p>ENQUIRY FORM</p>

            <h2>Send Us an Enquiry</h2>

            <span>Fill in your details and our team will get back to you.</span>
          </div>

          {/* =================================
              FORM START
          ================================== */}

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* NAME */}

            <div className="form-group">
              <label htmlFor="name">Full Name *</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* PHONE + EMAIL */}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* PROGRAM + AGE */}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="program">Interested Program *</label>

                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                >
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
                <label htmlFor="age">Student Age</label>

                <input
                  type="number"
                  id="age"
                  name="age"
                  placeholder="Enter age"
                  min="3"
                  max="100"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* BRANCH */}

            <div className="form-group">
              <label htmlFor="enquiryBranch">Preferred Branch *</label>

              <select
                id="enquiryBranch"
                name="branch"
                value={selectedBranchId}
                onChange={(e) => setSelectedBranchId(Number(e.target.value))}
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
              <label htmlFor="message">Your Enquiry *</label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* SUCCESS MESSAGE */}

            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}

            {/* ERROR MESSAGE */}

            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}

            {/* SUBMIT */}

            <button type="submit" className="contact-submit" disabled={loading}>
              {loading ? "Submitting..." : "Send Enquiry"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
