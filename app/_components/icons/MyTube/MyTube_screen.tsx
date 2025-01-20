import Image from "next/image";
import MyTube_music from "./MyTube.webp";
import { ComponentPropsWithoutRef } from "react";

export const MyTube_screen = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number}
) => {
  return (
    <>
      <Image
        src={MyTube_music}
        width={props.size}
        height={props.size}
        alt="Onglet musique de MyTube"
        className=""
      />
    </>
  );
};
