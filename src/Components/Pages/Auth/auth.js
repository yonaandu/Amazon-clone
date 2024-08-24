import React, { useState, useContext } from 'react';
import './auth.css';
import amazonLogo from '../../assets/pngimg.com - amazon_PNG11.png'; 
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../../Utility/Firebase';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../DataProvider/DataProvider'; // Import the correct context

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const { setUser } = useContext(DataContext); // Use DataContext here

  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
  
    try {
      setLoading(true);
      if (isSignUp) {
        // Sign up logic
        if (password !== confirmPassword) {
          setMessage('Passwords do not match');
          setMessageColor('red');
          setLoading(false);
          return;
        }
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Optional: Update user profile with display name
        try {
          await userCredential.user.updateProfile({ displayName: name });
        } catch (error) {
          setMessage(error.message);
          setMessageColor('red');
        }
        setUser(name); // Set user name to context
        setMessage('Account created successfully! Please sign in.');
        setMessageColor('green');
        setIsSignUp(false);
      } else {
        // Sign in logic
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user.displayName || email);
        navigate('/'); // Navigate to home page after sign in
      }
    } catch (error) {
      setMessage(error.message);
      setMessageColor('red');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <img src={amazonLogo} alt="Amazon Logo" />
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
          />
        )}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {isSignUp && (
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
          />
        )}
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <p style={{ color: messageColor }}>{message}</p>
      {isSignUp ? (
        <p>
          Already have an account? <span onClick={() => setIsSignUp(false)}>Sign In</span>
        </p>
      ) : (
        <p>
          Don't have an account? <span onClick={() => setIsSignUp(true)}>Sign Up</span>
        </p>
      )}
    </div>
  );
}

export default Auth;