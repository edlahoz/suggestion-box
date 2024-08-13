import React from "react";
import { useUserSelector } from "@/store/user/selectors";
import { Navigate, useLocation } from "react-router-dom";

interface AuthenticatedRouteProps {
  children: React.ReactNode;
}

export default function AuthenticatedRoute({
  children,
}: AuthenticatedRouteProps) {
  const selectedUser = useUserSelector();
  const location = useLocation();

  if (!selectedUser) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
