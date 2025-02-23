import React, { useEffect, useState } from "react";
import './Stats.css';

const statsData = [
  { icon: "👨‍🍳", number: 30, label: "Professional Chefs" },
  { icon: "🍔", number: 453, label: "Culinary Options" },
  { icon: "🍽️", number: 10, label: "Years Of Experience" },
  { icon: "🍕", number: 100000, label: "Satisfied Customers" },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = Math.ceil(target / (duration / 10));

    const updateCounter = () => {
      start += increment;
      if (start >= target) {
        setCount(target);
        return;
      }
      setCount(start);
      requestAnimationFrame(updateCounter);
    };

    requestAnimationFrame(updateCounter);
  }, [target]);

  return <span>{count.toLocaleString()}</span>;
};

const Stats = () => {
  return (
    <div 
      className="stats-container mt-2 mb-2"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/media/images/background_image_home1_counter.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {statsData.map((stat, index) => (
        <div key={index} className="stat-box">
          <div className="stat-icon">{stat.icon}</div>
          <div className="stat-number">
            <Counter target={stat.number} />
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
