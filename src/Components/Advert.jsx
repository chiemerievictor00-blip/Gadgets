import React, { useEffect, useState } from "react";
import "../Styles/Advert.css";
import { Link } from 'react-router-dom'

function Advert() {
  const [timeLeft, setTimeLeft] = useState({hours: 5,minutes: 59,seconds: 59,});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="advert-container">
      <div className="advert-content">

        <div className="advert-text">
          <p className="sale">LIMITED OFFER 🔥</p>

          <h1>
            Up to <span>50% OFF</span> on Smart Gadgets
          </h1>

          <p className="desc">
            Grab the latest phones, laptops, headphones and accessories at
            unbeatable prices.
          </p>
            <Link to="/Products"><button>Shop Now</button></Link>
        {/* <button>Shop Now</button> */}
        </div>

        <div className="timer-box">

          <div className="time">
            <h2>{String(timeLeft.hours).padStart(2, "0")}</h2>
            <p>Hours</p>
          </div>

          <div className="time">
            <h2>{String(timeLeft.minutes).padStart(2, "0")}</h2>
            <p>Minutes</p>
          </div>

          <div className="time">
            <h2>{String(timeLeft.seconds).padStart(2, "0")}</h2>
            <p>Seconds</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Advert;