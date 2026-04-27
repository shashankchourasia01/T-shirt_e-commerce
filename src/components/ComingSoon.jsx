import { useState, useEffect, useMemo } from 'react';
import { ShoppingBag, Mail, Instagram, Twitter } from 'lucide-react';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // useMemo se launchDate sirf ek baar banega - fix for Error 2
  const launchDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 15);
    return date;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]); // launchDate stable hai ab

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '24px',
    padding: '40px 30px',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
  };

  const logoStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px'
  };

  const timerContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    margin: '30px 0',
    flexWrap: 'wrap'
  };

  const timerBoxStyle = {
    backgroundColor: '#f5f5f5',
    borderRadius: '12px',
    padding: '15px 10px',
    minWidth: '70px',
    textAlign: 'center'
  };

  const timerNumberStyle = {
    fontSize: '28px',
    fontWeight: '700',
    color: '#333',
    display: 'block'
  };

  const timerLabelStyle = {
    fontSize: '12px',
    color: '#666',
    marginTop: '5px',
    textTransform: 'uppercase'
  };

  const emailInputStyle = {
    display: 'flex',
    marginTop: '20px',
    gap: '10px',
    flexWrap: 'wrap'
  };

  const inputStyle = {
    flex: 1,
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '30px',
    fontSize: '14px',
    outline: 'none'
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#000',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
  };

  const socialStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px'
  };

  const socialIconStyle = {
    padding: '10px',
    backgroundColor: '#f5f5f5',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const handleNotify = () => {
    const email = document.getElementById('notify-email').value;
    if (email) {
      alert(`Thanks! We'll notify you at ${email} when we launch.`);
      document.getElementById('notify-email').value = '';
    } else {
      alert('Please enter your email address.');
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {/* Logo */}
        <div style={logoStyle}>
          <ShoppingBag size={32} color="#667eea" />
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#333' }}>
            TSHIRT<span style={{ color: '#667eea' }}>STORE</span>
          </h1>
        </div>

        {/* Heading */}
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '10px' }}>
          Coming Soon!
        </h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          We're working hard to bring you the best collection of graphic tees.
        </p>

        {/* Timer */}
        <div style={timerContainerStyle}>
          <div style={timerBoxStyle}>
            <span style={timerNumberStyle}>{String(timeLeft.days).padStart(2, '0')}</span>
            <span style={timerLabelStyle}>Days</span>
          </div>
          <div style={timerBoxStyle}>
            <span style={timerNumberStyle}>{String(timeLeft.hours).padStart(2, '0')}</span>
            <span style={timerLabelStyle}>Hours</span>
          </div>
          <div style={timerBoxStyle}>
            <span style={timerNumberStyle}>{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span style={timerLabelStyle}>Minutes</span>
          </div>
          <div style={timerBoxStyle}>
            <span style={timerNumberStyle}>{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span style={timerLabelStyle}>Seconds</span>
          </div>
        </div>

        {/* Email Signup */}
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
          Get notified when we launch!
        </p>
        <div style={emailInputStyle}>
          <input 
            id="notify-email"
            type="email" 
            placeholder="Enter your email" 
            style={inputStyle}
          />
          <button style={buttonStyle} onClick={handleNotify}>
            <Mail size={16} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Notify Me
          </button>
        </div>

        {/* Social Links - Fixed without Facebook */}
        <div style={socialStyle}>
          <a 
            href="#" 
            style={socialIconStyle} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e5e5'} 
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          >
            <Instagram size={20} color="#333" />
          </a>
          <a 
            href="#" 
            style={socialIconStyle} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e5e5'} 
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
          >
            <Twitter size={20} color="#333" />
          </a>
        </div>

        {/* Footer */}
        <p style={{ fontSize: '12px', color: '#999', marginTop: '30px' }}>
          © 2024 TShirtStore. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;