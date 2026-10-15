// // "use client";

// // import { useAuth } from '../context/authContext';
// // import { useRouter } from 'next/navigation';
// // import { useEffect } from 'react';
// // import { signOut } from 'firebase/auth';
// // import { auth } from '../lib/firebase';
// // import { Home, User, Settings, LogOut, Bell, Calendar, FileText, HelpCircle } from 'lucide-react';

// // export default function Dashboard() {
// //   const { user, loading } = useAuth();
// //   const router = useRouter();

// //   useEffect(() => {
// //     if (!loading && !user) {
// //       router.push('/auth/login');
// //     }
// //   }, [user, loading, router]);

// //   const handleLogout = async () => {
// //     try {
// //       await signOut(auth);
// //       router.push('/');
// //     } catch (error) {
// //       console.error('Error signing out:', error);
// //     }
// //   };

// //   if (loading || !user) {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen">
// //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Sidebar */}
// //       <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md">
// //         <div className="flex items-center justify-center h-16 border-b border-gray-200">
// //           <h1 className="text-xl font-bold text-gray-800">Homely Dashboard</h1>
// //         </div>
// //         <nav className="p-4">
// //           <div className="space-y-1">
// //             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg">
// //               <Home className="w-5 h-5 mr-3" />
// //               Dashboard
// //             </button>
// //             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
// //               <User className="w-5 h-5 mr-3" />
// //               Profile
// //             </button>
// //             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
// //               <Calendar className="w-5 h-5 mr-3" />
// //               Bookings
// //             </button>
// //             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
// //               <FileText className="w-5 h-5 mr-3" />
// //               Documents
// //             </button>
// //             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
// //               <Settings className="w-5 h-5 mr-3" />
// //               Settings
// //             </button>
// //             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
// //               <HelpCircle className="w-5 h-5 mr-3" />
// //               Help
// //             </button>
// //           </div>
// //         </nav>
// //         <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
// //           <button 
// //             onClick={handleLogout}
// //             className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg"
// //           >
// //             <LogOut className="w-5 h-5 mr-3" />
// //             Logout
// //           </button>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="ml-64">
// //         {/* Header */}
// //         <header className="bg-white shadow-sm">
// //           <div className="flex items-center justify-between px-6 py-4">
// //             <h2 className="text-lg font-semibold text-gray-800">Welcome back, {user.displayName || 'User'}!</h2>
// //             <div className="flex items-center space-x-4">
// //               <button className="p-2 text-gray-500 hover:text-gray-700">
// //                 <Bell className="w-5 h-5" />
// //               </button>
// //               <div className="flex items-center">
// //                 <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
// //                   <User className="w-4 h-4 text-gray-600" />
// //                 </div>
// //                 <span className="ml-2 text-sm font-medium text-gray-700">
// //                   {user.email}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         </header>

// //         {/* Dashboard Content */}
// //         <main className="p-6">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {/* Stats Cards */}
// //             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
// //               <h3 className="text-sm font-medium text-gray-500">Total Properties</h3>
// //               <p className="mt-2 text-3xl font-semibold text-gray-900">12</p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
// //               <h3 className="text-sm font-medium text-gray-500">Active Bookings</h3>
// //               <p className="mt-2 text-3xl font-semibold text-gray-900">3</p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
// //               <h3 className="text-sm font-medium text-gray-500">Messages</h3>
// //               <p className="mt-2 text-3xl font-semibold text-gray-900">5</p>
// //             </div>

// //             {/* Recent Activity */}
// //             <div className="md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
// //               <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
// //               <div className="space-y-4">
// //                 {[1, 2, 3].map((item) => (
// //                   <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0">
// //                     <div className="flex-shrink-0 mt-1">
// //                       <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
// //                         <Calendar className="w-4 h-4 text-blue-600" />
// //                       </div>
// //                     </div>
// //                     <div className="ml-3">
// //                       <p className="text-sm font-medium text-gray-900">New booking request</p>
// //                       <p className="text-sm text-gray-500">2 days ago</p>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* User Profile Card */}
// //             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
// //               <h3 className="text-lg font-medium text-gray-900 mb-4">Your Profile</h3>
// //               <div className="flex items-center space-x-4">
// //                 <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
// //                   {user.photoURL ? (
// //                     <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full" />
// //                   ) : (
// //                     <User className="w-8 h-8 text-gray-600" />
// //                   )}
// //                 </div>
// //                 <div>
// //                   <h4 className="font-medium text-gray-900">{user.displayName || 'No name set'}</h4>
// //                   <p className="text-sm text-gray-500">{user.email}</p>
// //                   <p className="text-sm text-gray-500 mt-1">
// //                     {user.emailVerified ? 'Verified' : 'Not verified'}
// //                   </p>
// //                 </div>
// //               </div>
// //               <button className="mt-4 w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
// //                 Edit Profile
// //               </button>
// //             </div>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// // "use client";

// // import { useAuth } from '../context/authContext';
// // import Link from 'next/link';

// // export default function Dashboard() {
// //   const { user, logout } = useAuth();

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <nav className="bg-white shadow-sm">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-between h-16">
// //             <div className="flex items-center">
// //               <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
// //             </div>
// //             <div className="flex items-center">
// //               <button
// //                 onClick={logout}
// //                 className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
// //               >
// //                 Sign out
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         <div className="bg-white shadow rounded-lg p-6">
// //           <h2 className="text-lg font-medium text-gray-900">Welcome, {user?.displayName || user?.email}!</h2>
// //           <p className="mt-2 text-sm text-gray-600">
// //             You're now logged in to your Homely dashboard.
// //           </p>

// //           <div className="mt-6">
// //             <Link
// //               href="/"
// //               className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
// //             >
// //               Browse Properties
// //             </Link>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }

// "use client";

// import { useAuth } from '../context/authContext';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import { signOut } from 'firebase/auth';
// import { auth } from '../lib/firebase';
// import { Home, User, Settings, LogOut, Bell, Calendar, FileText, HelpCircle } from 'lucide-react';

// export default function Dashboard() {
//   const { user, loading } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!loading && !user) {
//       router.push('/auth/login');
//     }
//   }, [user, loading, router]);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       router.push('/');
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   if (loading || !user) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-md z-10">
//         <div className="flex items-center justify-center h-16 border-b border-gray-200">
//           <h1 className="text-xl font-bold text-gray-800">Homely</h1>
//         </div>
//         <nav className="p-4">
//           <div className="space-y-2">
//             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg transition-colors duration-200">
//               <Home className="w-5 h-5 mr-3" />
//               Dashboard
//             </button>
//             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
//               <User className="w-5 h-5 mr-3" />
//               Profile
//             </button>
//             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
//               <Calendar className="w-5 h-5 mr-3" />
//               Bookings
//             </button>
//             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
//               <FileText className="w-5 h-5 mr-3" />
//               Documents
//             </button>
//             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
//               <Settings className="w-5 h-5 mr-3" />
//               Settings
//             </button>
//             <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
//               <HelpCircle className="w-5 h-5 mr-3" />
//               Help
//             </button>
//           </div>
//         </nav>
//         <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
//           <button 
//             onClick={handleLogout}
//             className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
//           >
//             <LogOut className="w-5 h-5 mr-3" />
//             Sign Out
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64">
//         {/* Header */}
//         <header className="bg-white shadow-sm sticky top-0 z-10">
//           <div className="flex items-center justify-between px-8 py-4">
//             <h2 className="text-2xl font-semibold text-gray-800">Welcome back, {user.displayName || 'User'}!</h2>
//             <div className="flex items-center space-x-6">
//               <button className="p-2 text-gray-500 hover:text-gray-700 relative">
//                 <Bell className="w-6 h-6" />
//                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
//                   {user.photoURL ? (
//                     <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
//                   ) : (
//                     <User className="w-5 h-5 text-gray-600" />
//                   )}
//                 </div>
//                 <div className="text-left">
//                   <p className="text-sm font-medium text-gray-700">
//                     {user.displayName || 'User'}
//                   </p>
//                   <p className="text-xs text-gray-500">{user.email}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <main className="p-8">
//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-500">Total Properties</h3>
//                   <p className="mt-1 text-3xl font-semibold text-gray-900">12</p>
//                 </div>
//                 <div className="p-3 bg-blue-100 rounded-lg">
//                   <Home className="w-6 h-6 text-blue-600" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-500">Active Bookings</h3>
//                   <p className="mt-1 text-3xl font-semibold text-gray-900">3</p>
//                 </div>
//                 <div className="p-3 bg-green-100 rounded-lg">
//                   <Calendar className="w-6 h-6 text-green-600" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-sm font-medium text-gray-500">Messages</h3>
//                   <p className="mt-1 text-3xl font-semibold text-gray-900">5</p>
//                 </div>
//                 <div className="p-3 bg-purple-100 rounded-lg">
//                   <Bell className="w-6 h-6 text-purple-600" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Recent Activity and Profile */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Recent Activity */}
//             <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
//                 <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
//                   View All
//                 </button>
//               </div>
//               <div className="space-y-4">
//                 {[1, 2, 3].map((item) => (
//                   <div key={item} className="flex items-start pb-4 border-b border-gray-100 last:border-0 group">
//                     <div className="flex-shrink-0 mt-1">
//                       <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
//                         <Calendar className="w-5 h-5 text-blue-600" />
//                       </div>
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm font-medium text-gray-900">New booking request</p>
//                       <p className="text-sm text-gray-500">2 days ago</p>
//                       <p className="mt-1 text-sm text-gray-600">Property: Downtown Apartment</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* User Profile Card */}
//             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//               <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Profile</h3>
//               <div className="flex flex-col items-center">
//                 <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mb-4">
//                   {user.photoURL ? (
//                     <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
//                   ) : (
//                     <User className="w-10 h-10 text-gray-600" />
//                   )}
//                 </div>
//                 <h4 className="text-xl font-medium text-gray-900 text-center">
//                   {user.displayName || 'No name set'}
//                 </h4>
//                 <p className="text-sm text-gray-500 text-center mt-1">{user.email}</p>

//                 <div className="mt-4 w-full space-y-3">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-500">Status:</span>
//                     <span className={`font-medium ${user.emailVerified ? 'text-green-600' : 'text-yellow-600'}`}>
//                       {user.emailVerified ? 'Verified' : 'Not verified'}
//                     </span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-500">Member since:</span>
//                     <span className="font-medium text-gray-700">
//                       {user.metadata?.creationTime ? 
//                         new Date(user.metadata.creationTime).toLocaleDateString() : 
//                         'N/A'}
//                     </span>
//                   </div>
//                 </div>

//                 <button className="mt-6 w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
//                   Edit Profile
//                 </button>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

"use client";

import { useAuth } from '../context/authContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import {
  Home, User, Settings, LogOut, Bell, Calendar,
  FileText, HelpCircle, MessageSquare, Plus,
  Search, ChevronDown, ArrowRight, Star,
  CreditCard, Shield, Mail, Lock, PieChart,
  MapPin, DollarSign, TrendingUp, Users, Clock, CheckCircle
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { AnimatePresence, motion } from 'framer-motion';
import { PropertyCard } from '../../components/propertyCard';
import { TaskProgress } from '../../components/taskProgress';
import Link from 'next/link';

// Mock data
const bookingData = [
  { name: 'Jan', bookings: 12, revenue: 4800 },
  { name: 'Feb', bookings: 8, revenue: 3200 },
  { name: 'Mar', bookings: 15, revenue: 6000 },
  { name: 'Apr', bookings: 22, revenue: 8800 },
  { name: 'May', bookings: 18, revenue: 7200 },
  { name: 'Jun', bookings: 25, revenue: 10000 },
];

const propertyStatusData = [
  { name: 'Occupied', value: 8, color: '#4F46E5' },
  { name: 'Vacant', value: 3, color: '#10B981' },
  { name: 'Maintenance', value: 1, color: '#F59E0B' },
];

const topProperties = [
  { id: 1, name: 'Luxury Penthouse', location: 'Manhattan', rate: 850, occupancy: 92, rating: 4.9 },
  { id: 2, name: 'Beachfront Villa', location: 'Miami', rate: 1200, occupancy: 88, rating: 4.8 },
  { id: 3, name: 'Mountain Retreat', location: 'Aspen', rate: 950, occupancy: 85, rating: 4.7 },
];

const tasks = [
  { id: 1, title: 'Approve booking request', priority: 'high', progress: 30 },
  { id: 2, title: 'Renew insurance', priority: 'medium', progress: 65 },
  { id: 3, title: 'Update property photos', priority: 'low', progress: 10 },
];

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New booking request', time: '2 hours ago', read: false, icon: Calendar },
    { id: 2, title: 'Payment received', time: '1 day ago', read: true, icon: DollarSign },
    { id: 3, title: 'Maintenance scheduled', time: '3 days ago', read: true, icon: Settings },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login');
    }
  }, [user, loading, router]);

  const handleLogout = async () => {
    try {
      if (auth) await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  if (loading || !user) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className={`fixed inset-y-0 left-0 w-72 shadow-2xl z-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
      >
        <div className={`flex items-center justify-center h-20 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#06BE8A] to-[#06BE8A] bg-clip-text text-transparent cursor-pointer "><Link href="/">Homely</Link> </h1>
        </div>
        <nav className="p-4 mt-2">
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'dashboard'
                  ? `${darkMode ? 'bg-blue-900/50 text-white' : 'bg-blue-50 text-blue-600'} shadow-md`
                  : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
                }`}
            >
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('properties')}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'properties'
                  ? `${darkMode ? 'bg-blue-900/50 text-white' : 'bg-blue-50 text-blue-600'} shadow-md`
                  : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
                }`}
            >
              <MapPin className="w-5 h-5 mr-3" />
              Properties
              <span className="ml-auto bg-green-500 text-white text-xs px-2 py-1 rounded-full">12</span>
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'bookings'
                  ? `${darkMode ? 'bg-blue-900/50 text-white' : 'bg-blue-50 text-blue-600'} shadow-md`
                  : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
                }`}
            >
              <Calendar className="w-5 h-5 mr-3" />
              Bookings
              <span className="ml-auto bg-purple-500 text-white text-xs px-2 py-1 rounded-full">3</span>
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'messages'
                  ? `${darkMode ? 'bg-blue-900/50 text-white' : 'bg-blue-50 text-blue-600'} shadow-md`
                  : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
                }`}
            >
              <MessageSquare className="w-5 h-5 mr-3" />
              Messages
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">5</span>
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'reports'
                  ? `${darkMode ? 'bg-blue-900/50 text-white' : 'bg-blue-50 text-blue-600'} shadow-md`
                  : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`
                }`}
            >
              <FileText className="w-5 h-5 mr-3" />
              Reports
            </button>
          </div>
        </nav>
        <div className={`absolute bottom-0 left-0 right-0 p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg mb-2 transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
              }`}
          >
            <Settings className="w-5 h-5 mr-3" />
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="ml-72">
        {/* Header */}
        <header className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex items-center justify-between px-8 py-4">
            <h2 className="text-2xl font-semibold">
              <span className="bg-gradient-to-r from-[#06BE8A] to-[#06BE8A] bg-clip-text text-transparent">
                Welcome back, {user.displayName || 'User'}!
              </span>
            </h2>

            <div className="flex items-center space-x-6">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className={`p-2 rounded-full relative ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <Bell className="w-6 h-6" />
                  {unreadCount > 0 && (
                    <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                      {unreadCount}
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`absolute right-0 mt-2 w-80 rounded-xl shadow-xl z-20 ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                        } border`}
                    >
                      <div className={`p-3 border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                        <h3 className="font-medium">Notifications</h3>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map(notification => {
                          const Icon = notification.icon;
                          return (
                            <div
                              key={notification.id}
                              className={`p-3 border-b ${darkMode ? 'border-gray-600 hover:bg-gray-600' : 'border-gray-200 hover:bg-gray-50'} ${!notification.read && (darkMode ? 'bg-blue-900/20' : 'bg-blue-50')
                                } cursor-pointer transition-colors`}
                              onClick={() => markNotificationAsRead(notification.id)}
                            >
                              <div className="flex items-start">
                                <div className={`p-2 rounded-lg mr-3 ${darkMode ? 'bg-gray-600' : 'bg-gray-100'
                                  }`}>
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-medium">{notification.title}</p>
                                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                                    {notification.time}
                                  </p>
                                </div>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className={`p-3 text-center text-sm text-blue-500 ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'
                        } cursor-pointer border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                        View All Notifications
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative group">
                <div className="flex items-center space-x-3 cursor-pointer">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center overflow-hidden shadow-md">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className="text-left">
                    <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-700'}`}>
                      {user.displayName || 'User'}
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Premium Member</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showNotifications ? 'rotate-180' : ''}`} />
                </div>

                <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-20 hidden group-hover:block ${darkMode ? 'bg-gray-700' : 'bg-white'
                  }`}>
                  <a href="#" className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                    Your Profile
                  </a>
                  <a href="#" className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100'}`}>
                    Account Settings
                  </a>
                  <div className={`border-t ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}></div>
                  <button
                    onClick={handleLogout}
                    className={`block w-full text-left px-4 py-2 text-sm ${darkMode ? 'text-red-400 hover:bg-gray-600' : 'text-red-600 hover:bg-gray-100'}`}
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8">
          {/* Welcome Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`rounded-2xl p-6 mb-8 shadow-lg bg-gradient-to-r from-[#06BE8A] to-[#06BE8A]/50 text-white`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome to your luxury property hub</h2>
                <p className="opacity-90 max-w-lg">
                  You have 3 new bookings, 2 maintenance requests, and $12,450 in pending payments this week.
                </p>
              </div>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center hover:bg-blue-50 transition-all shadow-md hover:shadow-lg">
                <Plus className="w-5 h-5 mr-2" />
                Add New Property
              </button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl shadow-md transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Revenue</h3>
                  <p className="mt-1 text-3xl font-semibold">$48,250</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">12.5% from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
                  <DollarSign className="w-6 h-6 text-blue-500" />
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl shadow-md transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Occupancy Rate</h3>
                  <p className="mt-1 text-3xl font-semibold">86%</p>
                  <div className="flex items-center mt-2">
                    <Users className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-500">3.2% from last quarter</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-green-900/50' : 'bg-green-100'}`}>
                  <User className="w-6 h-6 text-green-500" />
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl shadow-md transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Active Bookings</h3>
                  <p className="mt-1 text-3xl font-semibold">8</p>
                  <div className="flex items-center mt-2">
                    <Clock className="w-4 h-4 text-blue-500 mr-1" />
                    <span className="text-xs text-blue-500">2 check-ins today</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-900/50' : 'bg-purple-100'}`}>
                  <Calendar className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl shadow-md transition-all ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Avg. Rating</h3>
                  <p className="mt-1 text-3xl font-semibold">4.82</p>
                  <div className="flex items-center mt-2">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-xs text-yellow-500">94% positive reviews</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-yellow-900/50' : 'bg-yellow-100'}`}>
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Revenue & Bookings</h3>
                <select className={`text-sm rounded-lg px-3 py-1 focus:outline-none ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                  } border`}>
                  <option>Last 6 Months</option>
                  <option>Last Year</option>
                  <option>All Time</option>
                </select>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={bookingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#4B5563' : '#E5E7EB'} />
                    <XAxis dataKey="name" stroke={darkMode ? '#9CA3AF' : '#6B7280'} />
                    <YAxis stroke={darkMode ? '#9CA3AF' : '#6B7280'} />
                    <Tooltip
                      contentStyle={darkMode ? {
                        backgroundColor: '#1F2937',
                        borderColor: '#4B5563',
                        borderRadius: '0.5rem'
                      } : {}}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.2}
                      name="Revenue ($)"
                    />
                    <Area
                      type="monotone"
                      dataKey="bookings"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                      fillOpacity={0.2}
                      name="Bookings"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Properties Chart */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`p-6 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Property Status</h3>
                <button className={`text-sm flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                  }`}>
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="h-64 flex">
                {/* Properties Chart  */}
                <div className="w-1/2 h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={propertyStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {propertyStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={darkMode ? {
                          backgroundColor: '#1F2937',
                          borderColor: '#4B5563',
                          borderRadius: '0.5rem'
                        } : {
                          backgroundColor: '#ffffff',
                          borderColor: '#e5e7eb',
                          borderRadius: '0.5rem'
                        }}
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="w-1/2 flex flex-col justify-center pl-4">
                  {propertyStatusData.map((entry, index) => (
                    <div key={`legend-${index}`} className="flex items-center mb-3">
                      <div
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{entry.name}:</span>
                      <span className={`text-sm font-medium ml-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {entry.value} {entry.value === 1 ? 'property' : 'properties'}
                      </span>
                    </div>
                  ))}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between text-sm mb-1">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Total Properties:</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>Avg. Daily Rate:</span>
                      <span className="font-medium">$245</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Properties and Tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Top Properties */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className={`lg:col-span-2 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Top Performing Properties</h3>
                  <button className={`text-sm flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                    }`}>
                    View All <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topProperties.map(property => (
                    <PropertyCard
                      key={property.id}
                      name={property.name}
                      location={property.location}
                      rate={property.rate}
                      occupancy={property.occupancy}
                      rating={property.rating}
                      darkMode={darkMode}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tasks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Your Tasks</h3>
                  <button className={`text-sm flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                    }`}>
                    View All <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <div className="space-y-4">
                  {tasks.map(task => (
                    <TaskProgress
                      key={task.id}
                      title={task.title}
                      priority={task.priority}
                      progress={task.progress}
                      darkMode={darkMode}
                    />
                  ))}
                </div>
                <button className={`w-full mt-4 py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center ${darkMode ? 'bg-blue-900/50 hover:bg-blue-900/70' : 'bg-blue-50 hover:bg-blue-100'
                  } transition-colors`}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Task
                </button>
              </div>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Recent Activity</h3>
                <button className={`text-sm flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                  }`}>
                  View All <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className={`flex items-start pb-4 border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700' : 'border-gray-200 hover:bg-gray-50'} p-3 rounded-lg transition-colors`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'
                        }`}>
                        {item % 2 === 0 ? (
                          <Calendar className="w-5 h-5 text-blue-500" />
                        ) : (
                          <MessageSquare className="w-5 h-5 text-purple-500" />
                        )}
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium">
                          {item % 2 === 0 ? 'New booking confirmed' : 'New message from guest'}
                        </p>
                        <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {item} day{item !== 1 ? 's' : ''} ago
                        </span>
                      </div>
                      <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item % 2 === 0
                          ? 'Beachfront Villa booked for 7 nights ($8,400)'
                          : 'Sarah M. has a question about check-in time'}
                      </p>
                      <div className="flex mt-2 space-x-2">
                        <button className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-50 text-blue-600'
                          }`}>
                          {item % 2 === 0 ? 'View Booking' : 'Reply'}
                        </button>
                        {item === 1 && (
                          <button className={`text-xs px-2 py-1 rounded flex items-center ${darkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-50 text-green-600'
                            }`}>
                            <CheckCircle className="w-3 h-3 mr-1" /> Approved
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}