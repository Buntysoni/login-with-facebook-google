export default function Login() {
  const handleFacebookLogin = () => {
    window.location.href = "http://localhost:4400/auth/facebook";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "48px 40px",
          borderRadius: "16px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          maxWidth: "400px",
          width: "90%",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1a202c",
            marginBottom: "12px",
          }}
        >
          Welcome Back
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#718096",
            marginBottom: "32px",
          }}
        >
          Sign in to continue to your account
        </p>
        <button
          onClick={handleFacebookLogin}
          style={{
            width: "100%",
            padding: "14px 24px",
            background: "#1877f2",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(24, 119, 242, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#166fe5";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 6px 16px rgba(24, 119, 242, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#1877f2";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 12px rgba(24, 119, 242, 0.3)";
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.514c-1.491 0-1.955.93-1.955 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
              fill="white"
            />
          </svg>
          Continue with Facebook
        </button>
        <p
          style={{
            fontSize: "14px",
            color: "#a0aec0",
            marginTop: "24px",
          }}
        >
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}
