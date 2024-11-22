// Import necessary Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhdiodq9s99CfGY2q5G5DVJOu4gBhXu1A",
  authDomain: "beyond-pages-d864f.firebaseapp.com",
  projectId: "beyond-pages-d864f",
  storageBucket: "beyond-pages-d864f.firebasestorage.app",
  messagingSenderId: "682794133516",
  appId: "1:682794133516:web:acfd5f959cb1ce4b05e629"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

// Validate Sign-Up Form
const validateSignupForm = (name, email, password) => {
  if (!name || !email || !password) {
    return 'All fields are required.';
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return 'Name can only contain letters and spaces.';
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return 'Invalid email format.';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters.';
  }
  return null; // No errors
};

// Sign-Up Form Logic
const signupBtn = document.getElementById('signup-btn');
signupBtn.addEventListener("click", async function(event) {
  event.preventDefault();

  const signupName = document.getElementById('signup-name').value;
  const signupEmail = document.getElementById('signup-email').value;
  const signupPassword = document.getElementById('signup-password').value;

  // Validate form inputs
  const error = validateSignupForm(signupName, signupEmail, signupPassword);
  if (error) {
    document.getElementById('signup-message').textContent = `Error: ${error}`;
    return;
  }

  // Display loading message
  document.getElementById('signup-message').textContent = 'Processing your signup...';

  try {
    // Register user with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
    const user = userCredential.user;

    // Save user details to Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: signupName,
      email: signupEmail,
      createdAt: new Date().toISOString(),
      role: 'user' // Optional: User role for future scaling
    });

    document.getElementById('signup-message').textContent = `Welcome, ${signupName}! You have successfully signed up.`;

    // Reset the form
    document.getElementById('signup-form').reset();
    document.getElementById('signup-form').style.display = 'none';
  } catch (error) {
    // Handle errors during signup or Firestore operations
    let errorMessage = 'Error signing up.';
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'This email is already registered. Please try logging in.';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password should be at least 6 characters.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Please enter a valid email address.';
        break;
      default:
        errorMessage = error.message;
    }
    console.error('Error:', error.code, error.message);
    document.getElementById('signup-message').textContent = `Error: ${errorMessage}`;
  }
});



