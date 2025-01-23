import { useState } from 'react';
import { Modal } from '../ui/modal';
import { Mail, Lock } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log('Form submitted:', { email, password });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">
          {isSignIn ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-neutral-600 mt-2">
          {isSignIn
            ? 'Sign in to access your account'
            : 'Sign up to start shopping with us'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-neutral-500">Or continue with</span>
          </div>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-white text-neutral-700 border border-neutral-300 py-2 px-4 rounded-md hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
          Sign {isSignIn ? 'in' : 'up'} with Google
        </button>

        <div className="text-center mt-6">
          <button
            type="button"
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-rose-600 hover:text-rose-700 text-sm font-medium"
          >
            {isSignIn
              ? "Don't have an account? Sign up"
              : 'Already have an account? Sign in'}
          </button>
        </div>
      </form>
    </Modal>
  );
}