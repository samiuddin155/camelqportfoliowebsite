import { testimonials } from "../constants/index.jsx";
import TestimonialItem from "../components/TestimonialItem.jsx";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Testimonials = () => {
  const halfLength = Math.floor(testimonials.length / 2);
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div ref={sectionRef} className={`container block lg:flex transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="testimonials_head-res relative z-2 mr-20 flex-300">
          <p className="caption mb-5 max-md:mb-2.5">Wall of Love</p>
          <h3 className="h3 max-md:h5 text-p4">Words from our Clients</h3>
        </div>

        <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
          <div className="testimonials_group-after flex-50">
            {testimonials.slice(0, halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden last:after:max-md:block"
              />
            ))}
          </div>

          <div className="flex-50">
            {testimonials.slice(halfLength).map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                item={testimonial}
                containerClassName="last:after:hidden after:right-auto after:left-0 after:max-md:-left-4 md:px-12"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
