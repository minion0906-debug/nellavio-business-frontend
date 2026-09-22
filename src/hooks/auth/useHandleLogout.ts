import { useCallback, useState } from "react";

/**
 * Logout handler (UI-only, no backend).
 * Shows the modal but performs no actual sign-out.
 */
export const useHandleLogout = () => {
  const [loading] = useState(false);
  const [error] = useState(false);

  const handleLogout = useCallback(() => {
    /** UI-only: no backend call */
  }, []);

  return { handleLogout, loading, error };
};
