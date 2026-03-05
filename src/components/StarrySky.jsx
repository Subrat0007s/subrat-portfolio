import React, { useState, useEffect } from "react";

function StarrySky() {
  const [isDaytime, setIsDaytime] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      // Daytime between 6 AM and 6 PM
      const isDay = hour >= 6 && hour < 18;
      setIsDaytime(isDay);

      // Add/remove daytime class from body for CSS styling
      if (isDay) {
        document.body.classList.add("daytime");
        document.body.classList.remove("nighttime");
      } else {
        document.body.classList.add("nighttime");
        document.body.classList.remove("daytime");
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  // Generate random stars
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 1,
    }));
  };

  const stars = generateStars(100);

  return (
    <div
      className="starry-sky"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -2,
        background: isDaytime
          ? "linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 50%, #FFF8DC 100%)"
          : "linear-gradient(to bottom, #0c0513 0%, #1a0b2e 50%, #2d1b4e 100%)",
        transition: "background 1s ease",
      }}
    >
      {/* Sun for daytime */}
      {isDaytime && (
        <div
          className="sun"
          style={{
            position: "absolute",
            top: "10%",
            right: "15%",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #FFD700 0%, #FFA500 70%, #FF8C00 100%)",
            boxShadow: "0 0 60px #FFD700, 0 0 100px #FFA500",
            animation: "sunPulse 4s ease-in-out infinite",
          }}
        />
      )}

      {/* Moon for nighttime */}
      {!isDaytime && (
        <div
          className="moon"
          style={{
            position: "absolute",
            top: "10%",
            right: "15%",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #F5F5F5 0%, #D3D3D3 100%)",
            boxShadow: "0 0 30px #F5F5F5, 0 0 60px #D3D3D3",
          }}
        >
          {/* Moon craters */}
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "25%",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#C0C0C0",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "60%",
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#C0C0C0",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "65%",
              left: "30%",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#C0C0C0",
            }}
          />
        </div>
      )}

      {/* Stars for nighttime */}
      {!isDaytime &&
        stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              position: "absolute",
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: "50%",
              background: "white",
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}

      {/* Clouds for daytime */}
      {isDaytime && (
        <>
          <div
            className="cloud"
            style={{
              position: "absolute",
              top: "20%",
              left: "-150px",
              width: "80px",
              height: "40px",
              animation: "cloudFloatLeftToRight 25s linear infinite",
            }}
          >
            <img
              src="/cloud.gif"
              alt="cloud"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            className="cloud"
            style={{
              position: "absolute",
              top: "40%",
              right: "-120px",
              width: "70px",
              height: "35px",
              animation: "cloudFloatRightToLeft 30s linear infinite",
            }}
          >
            <img
              src="/cloud.gif"
              alt="cloud"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            className="cloud"
            style={{
              position: "absolute",
              top: "15%",
              left: "-180px",
              width: "90px",
              height: "45px",
              animation: "cloudFloatLeftToRight 35s linear infinite",
              animationDelay: "5s",
            }}
          >
            <img
              src="/cloud.gif"
              alt="cloud"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            className="cloud"
            style={{
              position: "absolute",
              top: "60%",
              right: "-100px",
              width: "75px",
              height: "38px",
              animation: "cloudFloatRightToLeft 28s linear infinite",
              animationDelay: "8s",
            }}
          >
            <img
              src="/cloud.gif"
              alt="cloud"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            className="cloud"
            style={{
              position: "absolute",
              top: "35%",
              left: "-200px",
              width: "65px",
              height: "32px",
              animation: "cloudFloatLeftToRight 32s linear infinite",
              animationDelay: "12s",
            }}
          >
            <img
              src="/cloud.gif"
              alt="cloud"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </>
      )}

      {/* Clouds for nighttime (less clouds, more transparent) */}
      {!isDaytime && (
        <>
          <div
            className="cloud"
            style={{
              position: "absolute",
              top: "25%",
              left: "-150px",
              width: "70px",
              height: "35px",
              opacity: "0.6",
              animation: "cloudFloatLeftToRight 30s linear infinite",
            }}
          >
            <img
              src="/cloud.gif"
              alt="cloud"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            className="cloud"
            style={{
              position: "absolute",
              top: "45%",
              right: "-120px",
              width: "60px",
              height: "30px",
              opacity: "0.5",
              animation: "cloudFloatRightToLeft 35s linear infinite",
              animationDelay: "10s",
            }}
          >
            <img
              src="/cloud.gif"
              alt="cloud"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </>
      )}

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes sunPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 60px #FFD700, 0 0 100px #FFA500; }
          50% { transform: scale(1.05); box-shadow: 0 0 80px #FFD700, 0 0 120px #FFA500; }
        }

        @keyframes cloudFloatLeftToRight {
          0% { transform: translateX(0) scaleX(1); }
          100% { transform: translateX(calc(100vw + 300px)) scaleX(1); }
        }

        @keyframes cloudFloatRightToLeft {
          0% { transform: translateX(0) scaleX(-1); }
          100% { transform: translateX(calc(-100vw - 300px)) scaleX(-1); }
        }
      `}</style>
    </div>
  );
}

export default StarrySky;
