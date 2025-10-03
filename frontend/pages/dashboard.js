import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { user } = router.query;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (user) {
      setUserData(JSON.parse(user));
    }
  }, [user]);

  if (!userData) return <h2>Loading...</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Welcome, {userData.displayName}</h2>
      {userData.photos && <img src={userData.photos[0].value} alt="profile" />}
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
}
