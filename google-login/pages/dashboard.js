import { getSession } from "next-auth/react";

export default function Dashboard({ session }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.email}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
