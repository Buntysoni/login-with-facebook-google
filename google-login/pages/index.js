import LoginButton from "../components/LoginButton";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1>Welcome to My App</h1>
      <LoginButton />
    </div>
  );
}
