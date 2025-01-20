import Image from "next/image";
import profilePic from "./profile.webp";
import { ComponentPropsWithoutRef } from "react";

export const ProfileImage = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number}
) => {
  return (
    <>
      <Image
        src={profilePic}
        width={props.size}
        height={props.size}
        alt="Ma photo de profil"
        className="rounded-full items-center"
      />
    </>
  );
};
