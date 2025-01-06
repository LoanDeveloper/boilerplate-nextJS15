import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Bienvenue sur notre application</h1>
      {session ? (
        <div>
          <p>Connecté en tant que {session.user.email}</p>
          <button onClick={() => signOut()}>Se déconnecter</button>
        </div>
      ) : (
        <button onClick={() => signIn('google')}>Se connecter avec Google</button>
      )}
    </div>
  );
}