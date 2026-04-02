import { useAuth, RedirectToSignIn } from "@clerk/react";

export function ProtectedRoute({ children }) {
  const { isSignedIn } = useAuth();

  return (
    <>
      {isSignedIn && children}
      {!isSignedIn && <RedirectToSignIn />}
    </>
  );
}