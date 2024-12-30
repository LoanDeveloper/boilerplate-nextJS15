import { useSession, signIn, signOut } from "next-auth/react"

/**
 * Display Login button Component .
 *
 */
export default function Component() {
  const { data: session } = useSession()

  // If session exists
  if (session) {
    // If session user exists
    return session?.user ? (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    ) : (
      // If the user is not signed in
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
  }
}