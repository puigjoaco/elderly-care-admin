// API Configuration for Elderly Care Admin Panel
// This file manages the API endpoint configuration

const API_CONFIG = {
  // Production API (Render.com deployment)
  production: {
    baseURL: 'https://elderly-care-backend.onrender.com',
    timeout: 30000, // 30 seconds (Render cold start can be slow)
    headers: {
      'Content-Type': 'application/json'
    }
  },
  
  // Development API (local)
  development: {
    baseURL: 'http://localhost:4000',
    timeout: 10000, // 10 seconds
    headers: {
      'Content-Type': 'application/json'
    }
  },
  
  // Staging/Test API (optional)
  staging: {
    baseURL: 'https://elderly-care-backend-staging.onrender.com',
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json'
    }
  }
};

// Determine environment
const getCurrentEnvironment = () => {
  const hostname = window.location.hostname;
  
  // Production environments
  if (hostname.includes('github.io') || hostname.includes('elderly-care')) {
    return 'production';
  }
  
  // Staging environment
  if (hostname.includes('staging') || hostname.includes('test')) {
    return 'staging';
  }
  
  // Local development
  return 'development';
};

// Get current API configuration
const getAPIConfig = () => {
  const env = getCurrentEnvironment();
  console.log(`Running in ${env} environment`);
  return API_CONFIG[env];
};

// Export for use in other scripts
const API = getAPIConfig();

// Helper function for API calls with retry logic
async function apiCall(endpoint, options = {}) {
  const config = getAPIConfig();
  const url = `${config.baseURL}${endpoint}`;
  
  const defaultOptions = {
    headers: config.headers,
    ...options
  };
  
  let retries = 3;
  let lastError;
  
  while (retries > 0) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), config.timeout);
      
      const response = await fetch(url, {
        ...defaultOptions,
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      lastError = error;
      retries--;
      
      if (retries > 0) {
        console.log(`API call failed, retrying... (${retries} attempts left)`);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds before retry
      }
    }
  }
  
  throw lastError;
}

// Health check function
async function checkAPIHealth() {
  try {
    const health = await apiCall('/health');
    console.log('API Health Check:', health);
    return health.status === 'OK';
  } catch (error) {
    console.error('API Health Check Failed:', error);
    return false;
  }
}

// Auto health check on load
window.addEventListener('DOMContentLoaded', async () => {
  const isHealthy = await checkAPIHealth();
  
  if (!isHealthy) {
    console.warn('Backend API is not responding. It may be starting up (can take 30-60 seconds on free tier).');
    
    // Show user notification if API is down
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ff9800;
      color: white;
      padding: 15px 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      z-index: 10000;
      font-family: Arial, sans-serif;
    `;
    notification.innerHTML = `
      <strong>Connecting to server...</strong><br>
      <small>The backend is starting up. This may take up to 60 seconds on first load.</small>
    `;
    document.body.appendChild(notification);
    
    // Retry health check every 5 seconds
    const retryInterval = setInterval(async () => {
      const isHealthy = await checkAPIHealth();
      if (isHealthy) {
        notification.style.background = '#4caf50';
        notification.innerHTML = `
          <strong>Connected!</strong><br>
          <small>Backend API is now available.</small>
        `;
        setTimeout(() => notification.remove(), 3000);
        clearInterval(retryInterval);
      }
    }, 5000);
    
    // Stop retrying after 2 minutes
    setTimeout(() => {
      clearInterval(retryInterval);
      if (document.body.contains(notification)) {
        notification.style.background = '#f44336';
        notification.innerHTML = `
          <strong>Connection Failed</strong><br>
          <small>Unable to connect to backend. Please check your connection and refresh.</small>
        `;
      }
    }, 120000);
  }
});

// Export for use in HTML files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { API, apiCall, checkAPIHealth };
}