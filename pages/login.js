import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="p-5 bg-[#18D860] rounded-lg text-white"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
      <p className="text-red-700 p-8 italic transi">Please have <span className="text-[#1ED760] text-xl font-bold">Spotify</span> running on your computer.</p>
    </div>
  );
}

export default Login;

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
