import { Element } from "react-scroll";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const clients = [
  {
    id: "0",
    name: "Wipro",
    logo: "/images/wipro.svg",
    width: 420,
    height: 210,
  },
  {
    id: "1",
    name: "Accenture",
    logo: "/images/accenture.svg",
    width: 440,
    height: 210,
  },
  {
    id: "2",
    name: "Capgemini",
    logo: "/images/capgemini.svg",
    width: 440,
    height: 210,
  },
  {
    id: "3",
    name: "Yash Technologies",
    logo: "/images/yash-1.svg",
    width: 460,
    height: 210,
  },
  {
    id: "4",
    name: "OLGA",
    logo: "/images/olga.png",
    width: 400,
    height: 210,
  },
];

const Clients = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-s1 overflow-hidden relative">
      <Element name="clients">
        {/* Performance-optimized background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1a2b4b]/40 via-[#0e1835]/30 to-[#060d1f]/20"></div>
          <div className="absolute inset-0 backdrop-blur-[120px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(20,30,60,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(20,30,60,0.05)_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        
        <div ref={sectionRef} className={`container relative mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium tracking-wider text-indigo-200 bg-indigo-800/30 mb-4">PARTNER ECOSYSTEM</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              <span className="relative">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                  Trusted by Industry Leaders
                </span>
                <span className="absolute -bottom-1.5 left-0 w-full h-[0.5em] bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl"></span>
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed opacity-80">
              We partner with leading companies to deliver exceptional technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center items-center">
            {clients.map((client) => (
              <ClientLogo key={client.id} client={client} />
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

const ClientLogo = ({ client }) => {
  return (
    <div className="client-card relative group">
      <div className="p-6 relative">
        <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl"></div>
        <img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          width={client.width / 3}
          height={client.height / 3}
          className="h-20 w-auto object-contain opacity-100 transition-all duration-300 transform group-hover:scale-105 will-change-transform"
          style={{ 
            maxWidth: Math.min(client.width / 2, 200),
            filter: "saturate(1.2) brightness(1.2)"
          }}
        />
      </div>
      <style jsx>{`
        .client-card {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default Clients;