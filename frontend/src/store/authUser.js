import axios from 'axios';
import toast from 'react-hot-toast';
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,  
  isSigningUp: false,  

  signup: async (credentials) => {
    set({ isSigningUp: true });
    try {
      const response = await axios.post("http://localhost:5001/api/v1/auth/signup", credentials); // Corrected "singup" to "signup"
      set({ user: response.data.user, isSigningUp: false });
      toast.success("Account created successfully");
    } catch (error) {
      const message = error.response?.data?.message || "An error occurred";
      toast.error(message);
      set({ isSigningUp: false, user: null });
    }
  },

  login: async () => {
    // Implement login logic
  },

  logout: async () => {
    // Implement logout logic
  },

  authCheck: async () => {
    // Implement auth check logic
  },
}));
