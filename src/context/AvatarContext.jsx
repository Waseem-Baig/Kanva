"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  Suspense,
} from "react";
import { useSearchParams } from "next/navigation";
import AvatarData from "../../data/avatarsData";

const AvatarContext = createContext(null);

const AvatarProviderComponent = ({ children }) => {
  const searchParams = useSearchParams();
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      const foundAvatar = AvatarData.find((avatar) => avatar.id === Number(id));
      setAvatar(foundAvatar || null);
      setName(foundAvatar?.name || "");
    }
  }, [searchParams]);

  return (
    <AvatarContext.Provider value={{ avatar, name }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const AvatarProvider = ({ children }) => {
  const isClient = typeof window !== "undefined";

  if (!isClient) {
    return <>{children}</>; // Render without Suspense on the server
  }

  return (
    <Suspense fallback={<div>Loading Context...</div>}>
      <AvatarProviderComponent>{children}</AvatarProviderComponent>
    </Suspense>
  );
};

export const useAvatar = () => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error("useAvatar must be used within an AvatarProvider");
  }
  return context;
};
