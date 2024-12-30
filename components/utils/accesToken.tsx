import { useSession } from "next-auth/react"

// Display Access Token Component
export default function Component() {
  const { data  } = useSession();

  if (data) {
    const { accessToken } = data;
    return accessToken && <div>Access Token: {accessToken || 'No access token available'}</div>
  } else {
    return <div>You must be signed in to view the protected content on this page.</div>
  }
}