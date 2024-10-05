import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { useOAuth } from '../../hooks/useOAuth';

const OAuthButtons: React.FC = () => {
  const { loginWithOAuth: loginWithGoogle, isLoading: googleLoading, error: googleError } = useOAuth('google');
  const { loginWithOAuth: loginWithFacebook, isLoading: facebookLoading, error: facebookError } = useOAuth('facebook');

  return (
    <div className="mt-6">
      <p className="text-center text-gray-600">Or create an account with:</p>
      <div className="mt-4 flex items-center justify-center space-x-4">
        <button 
          onClick={() => loginWithGoogle()} 
          className="p-2 border border-gray-300 rounded-full"
          disabled={googleLoading} // Disable button xwhile loading
        >
          <FaGoogle className="text-2xl text-gray-600" />
        </button>
        <button 
          onClick={() => loginWithFacebook()} 
          className="p-2 border border-gray-300 rounded-full"
          disabled={facebookLoading} // Disable button while loading
        >
          <FaFacebook className="text-2xl text-gray-600" />
        </button>
      </div>

      {googleError && <p className="text-red-500 text-center mt-2">Google login failed</p>}
      {facebookError && <p className="text-red-500 text-center mt-2">Facebook login failed</p>}
    </div>
  );
};

export default OAuthButtons;
