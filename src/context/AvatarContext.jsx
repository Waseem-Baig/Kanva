"use client"; // Ensure it's a client component

import {
  createContext,
  useContext,
  useState,
  useEffect,
  Suspense,
} from "react";
import { useSearchParams } from "next/navigation";
import AvatarData from "../../data/avatarsData";

const AvatarContext = createContext();

const AvatarProviderComponent = () => {
  const searchParams = useSearchParams();
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      const foundAvatar = AvatarData.find((avatar) => avatar.id === Number(id));
      setAvatar(foundAvatar);
      setName(foundAvatar?.name || "");
    }
  }, [searchParams]);

  return (
    <AvatarContext.Provider value={{ avatar, name }}>
      {/* Suspense ensures proper rendering */}
      <Suspense fallback={<div>Loading...</div>}>
        <></>
      </Suspense>
    </AvatarContext.Provider>
  );
};

export const AvatarProvider = ({ children }) => (
  <Suspense fallback={<div>Loading Context...</div>}>
    <AvatarProviderComponent />
    {children}
  </Suspense>
);

export const useAvatar = () => useContext(AvatarContext);
