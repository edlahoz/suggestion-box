import React from "react";
import { useUserSelector } from "@/store/user/selectors";
import { Navigate } from "react-router-dom";

interface AuthenticatedRouteProps {
  children: React.ReactNode;
}

export default function AuthenticatedRoute({
  children,
}: AuthenticatedRouteProps) {
  const selectedUser = useUserSelector();

  if (!selectedUser) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
