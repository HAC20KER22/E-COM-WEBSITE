import Image from "next/image";

import Login  from '../components/login/Login';
import SignUp  from '../components/login/Signup';


export default function Home() {
  return (
    <div>
      <Login />
      <SignUp />
    </div>
  );
}
