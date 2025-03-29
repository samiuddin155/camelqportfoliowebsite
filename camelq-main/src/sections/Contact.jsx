import { Element } from "react-scroll";
import Button from "../components/Button.jsx";
import { useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [sectionRef, isVisible] = useIntersectionObserver();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Thank you for your message! We'll get back to you soon.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again later.");
        console.error("Form submission error:", result);
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12">
      <Element name="contact">
        <div ref={sectionRef} className={`container transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            <div className="relative z-2 md:px-8 px-5 md:pb-8 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320">
              <div className="w-full flex justify-start items-start">
                <div className="-ml-3 mb-6 flex items-center justify-center flex-col">
                  <div className="w-0.5 h-14 bg-s3" />
                  <img
                    src="/images/feature-1.png"
                    className="size-24 object-contain"
                    alt="Contact"
                  />
                </div>
              </div>

              <p className="caption mb-4">Get in Touch</p>
              <h2 className="max-w-400 mb-5 h3 text-p4 max-md:mb-4 max-md:h5">
                Let's Discuss Your Project
              </h2>
              <p className="mb-8 body-1 max-md:mb-6 max-md:body-3">
                Ready to transform your business with our technology solutions? Contact us today and let's discuss how we can help you achieve your goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <img src="/images/feature-1.png" alt="Location" className="size-6 mt-1" />
                  <div>
                    <h4 className="h5 text-p4 mb-2">Our Offices</h4>
                    <p className="body-2 text-p3">
                      KPHB Office<br />
                      13th floor, Manjeera Trinity, KPHB, Hyderabad<br />
                      <br />
                      Guntur Branch<br />
                      #10/3, Arundelpet, Near Tagore chowk, Guntur
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <img src="/images/Phone.png" alt="Phone" className="size-6 mt-1" />
                  <div>
                    <h4 className="h5 text-p4 mb-2">Phone</h4>
                    <p className="body-2 text-p3">+91 80 4567 8900</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <img src="/images/mail.png" alt="Email" className="size-6 mt-1" />
                  <div>
                    <h4 className="h5 text-p4 mb-2">Email</h4>
                    <p className="body-2 text-p3">info@camelq.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-2 md:px-8 px-5 md:pb-8 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320">
              <div className="w-full flex justify-start items-start">
                <div className="-ml-3 mb-6 flex items-center justify-center flex-col">
                  <div className="w-0.5 h-14 bg-s3" />
                  <img
                    src="/images/feature-2.png"
                    className="size-24 object-contain"
                    alt="Contact Form"
                  />
                </div>
              </div>

              <p className="caption mb-4">Send us a Message</p>
              <h2 className="max-w-400 mb-5 h3 text-p4 max-md:mb-4 max-md:h5">
                We'd Love to Hear from You
              </h2>
              <p className="mb-8 body-1 max-md:mb-6 max-md:body-3">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value="07eb37eb-0cdf-4472-8d08-67502f74e84a" />
                <input type="hidden" name="subject" value="New Contact Form Submission" />
                <input type="hidden" name="from_name" value="CamelQ Contact Form" />
                
                <div>
                  <label className="block text-sm font-medium text-p4 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-s3 focus:border-s4 focus:outline-none bg-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-p4 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-s3 focus:border-s4 focus:outline-none bg-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-p4 mb-2">Service Interest</label>
                  <select 
                    name="service"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-s3 focus:border-s4 focus:outline-none bg-transparent appearance-none bg-[url('/images/chevron-down.svg')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.5em_1.5em] pr-10 text-p4 [&>option]:bg-[#0A1A2F] [&>option]:text-p4"
                  >
                    <option value="">Select a service</option>
                    <option value="java">Java Fullstack</option>
                    <option value="python">Python Fullstack</option>
                    <option value="devops">DevOps</option>
                    <option value="powerbi">Power BI</option>
                    <option value="testing">Testing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-p4 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-s3 focus:border-s4 focus:outline-none bg-transparent h-28"
                    placeholder="Your message"
                  ></textarea>
                </div>

                {status && (
                  <div className={`p-3 rounded-lg ${status.includes("Thank you") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {status}
                  </div>
                )}

                <Button 
                  icon="/images/zap.svg"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Contact; 