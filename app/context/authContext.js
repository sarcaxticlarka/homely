// "use client";

// import { createContext, useContext, useEffect, useState } from 'react';
// import { auth } from '../lib/firebase';
// import { onAuthStateChanged } from 'firebase/auth';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);

// context/AuthContext.js
 
// "use client";

// import { createContext, useContext, useEffect, useState } from 'react';
// import { auth } from '../lib/firebase';
// import { 
//   onAuthStateChanged, 
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signOut
// } from 'firebase/auth';

// const AuthContext = createContext({
//   user: null,
//   loading: true,
//   login: () => Promise.resolve(),
//   signup: () => Promise.resolve(),
//   googleLogin: () => Promise.resolve(),
//   logout: () => Promise.resolve()
// });

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       if (firebaseUser) {
//         setUser({
//           uid: firebaseUser.uid,
//           email: firebaseUser.email,
//           displayName: firebaseUser.displayName,
//           photoURL: firebaseUser.photoURL
//         });
//       } else {
//         setUser(null);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   const login = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const signup = (email, password, name) => {
//     return createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         return updateProfile(userCredential.user, {
//           displayName: name
//         });
//       });
//   };

//   const googleLogin = () => {
//     return signInWithPopup(auth, new GoogleAuthProvider());
//   };

//   const logout = () => {
//     return signOut(auth);
//   };

//   return (
//     <AuthContext.Provider value={{ user, loading, login, signup, googleLogin, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { auth, firebaseEnabled } from '../lib/firebase';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile  // This import was missing!
} from 'firebase/auth';

const AuthContext = createContext({
  user: null,
  loading: true,
  login: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  googleLogin: () => Promise.resolve(),
  logout: () => Promise.resolve()
});

// Fake user used when Firebase isn't configured (UI-only demo mode)
const DEMO_USER = {
  uid: 'demo',
  email: 'demo@homely.app',
  displayName: 'Demo User',
  photoURL: null,
  emailVerified: true,
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(firebaseEnabled ? null : DEMO_USER);
  const [loading, setLoading] = useState(firebaseEnabled);

  if (!firebaseEnabled) {
    const noop = () => Promise.resolve();
    return (
      <AuthContext.Provider value={{ user, loading: false, demoMode: true, login: noop, signup: noop, googleLogin: noop, logout: noop }}>
        {children}
      </AuthContext.Provider>
    );
  }

  return <FirebaseAuthProvider user={user} setUser={setUser} loading={loading} setLoading={setLoading}>{children}</FirebaseAuthProvider>;
}

function FirebaseAuthProvider({ children, user, setUser, loading, setLoading }) {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email, password, name) => {
    try {
      // Create user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update the user's display name
      await updateProfile(userCredential.user, {
        displayName: name
      });
      
      // Return the user credential
      return userCredential;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const googleLogin = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};