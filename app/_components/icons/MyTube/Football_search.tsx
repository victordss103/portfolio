import Image from "next/image";
import Football_search_screen from "./Football_search.webp";
import { ComponentPropsWithoutRef } from "react";

export const Football_search = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number}
) => {
  return (
    <>
      <Image
        src={Football_search_screen}
        width={props.size}
        height={props.size}
        alt="Recherche de vidéo de football avec MyTube"
        className=""
      />
    </>
  );
};
