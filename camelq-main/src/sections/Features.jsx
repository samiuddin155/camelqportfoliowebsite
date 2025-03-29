import { Element } from "react-scroll";
import Button from "../components/Button.jsx";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const solutions = [
  {
    id: "0",
    icon: "/images/fullstack-development.png",
    caption: "Full Stack Development",
    title: "Java & Python Solutions",
    text: "Expert full-stack development services using Java and Python technologies. We build scalable, secure, and high-performance applications that drive business growth.",
    button: {
      icon: "/images/zap.svg",
      title: "Learn More",
    },
  },
  {
    id: "1",
    icon: "/images/devops.png",
    caption: "Cloud & DevOps",
    title: "DevOps Excellence",
    text: "Transform your operations with our expert DevOps services. We implement modern CI/CD pipelines, containerization, and cloud infrastructure solutions.",
    button: {
      icon: "/images/zap.svg",
      title: "Explore",
    },
  },
  {
    id: "2",
    icon: "/images/powerbi.png",
    caption: "Data Analytics",
    title: "Power BI Solutions",
    text: "Transform your data into actionable insights with our Power BI expertise. We create interactive dashboards and reports that drive informed decision-making.",
    button: {
      icon: "/images/zap.svg",
      title: "View Demo",
    },
  },
  {
    id: "3",
    icon: "/images/testing.png",
    caption: "Quality Assurance",
    title: "Comprehensive Testing",
    text: "Ensure your applications are bug-free and perform optimally with our comprehensive testing services. We cover functional, performance, and security testing.",
    button: {
      icon: "/images/zap.svg",
      title: "Get Started",
    },
  },
];

const details = [
  {
    id: "0",
    icon: "/images/detail-1.png",
    title: "Strategic Locations",
  },
  {
    id: "1",
    icon: "/images/detail-2.png",
    title: "Expert Team",
  },
  {
    id: "2",
    icon: "/images/detail-3.png",
    title: "24/7 Support",
  },
  {
    id: "3",
    icon: "/images/detail-4.png",
    title: "Quality Delivery",
  },
];

const Solutions = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section>
      <Element name="solutions">
        <div ref={sectionRef} className={`container transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {solutions.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-8 px-5 md:pb-8 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <div className="w-0.5 h-16 bg-s3" />

                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                    />
                  </div>
                </div>

                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}

            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />

              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>

                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Solutions;
