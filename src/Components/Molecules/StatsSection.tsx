import "aos/dist/aos.css";
import { BadgeCheck, MapPinned, Droplets, Users } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Years Of Expertise",
    icon: <BadgeCheck className="w-10 h-10 text-green-400" />,
  },
  {
    value: 10,
    suffix: "+",
    label: "Presence In Leading Agriculture States",
    icon: <MapPinned className="w-10 h-10 text-green-400" />,
  },
  {
    value: 42778,
    suffix: "+",
    label: "Solar Pumps Installed Upto 30th Nov 2024",
    icon: <Droplets className="w-10 h-10 text-green-400" />,
  },
  {
    value: 500,
    suffix: "+",
    label: "Employees and Workmen",
    icon: <Users className="w-10 h-10 text-green-400" />,
  },
];

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="w-full mb-20 relative flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around items-center text-white px-4 sm:px-8 md:px-16 py-12 sm:py-16"
      style={{
        backgroundImage: `url('/assets/bg-contact.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Stats */}
      <div className="relative z-10 flex flex-col sm:flex-row flex-wrap w-full max-w-6xl justify-center sm:justify-around items-center text-center gap-10">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-2 items-center w-full sm:w-auto">
            <div className="text-green-300">{stat.icon}</div>
            <span className="text-3xl sm:text-4xl font-bold">
              {inView ? <CountUp end={stat.value} duration={3.5} /> : 0}
              {stat.suffix}
            </span>
            <span className="text-sm sm:text-base max-w-[130px] min-h-[72px]">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;