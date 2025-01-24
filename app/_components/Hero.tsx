"use client";
import { Section } from "./Section";
import { ProfileImage } from "./icons/ProfileImage";
import { GitHubIcon } from "./icons/GitHubIcon";
import Link from "next/link";
import { LinkedIn } from "./icons/LinkedIn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <>
      <Section className="flex max-md:flex-col items-start">
        <div className="md:flex-[3]" id="hero-text">
          <h2 className="font-caption text-3xl text-primary font-bold">
            Victor DE SOUSA
          </h2>
          <h3 className="font-caption text-2xl text-primary">
            Développeur Web Full Stack
          </h3>
          <div className="text-base">
            <p>
              Jeune genevois passioné d'astronomie et de jeux vidéo, j'ai décidé
              de me lancer dans le monde du développement, monde qui comporte
              les attributs principaux de mes deux passions.
            </p>
            <br />
            <br />
            <p>
              La créativité et l'imagination procurée par l'immensité de
              l'espace est sans doute une bonne comparaison de la multitude de
              possiblité en terme développement.
            </p>
            <br />
            <br />
            <p>
              Quant aux jeux vidéos, ce sont tout simplement des millions de
              lignes de code et c'est un plaisir pour moi de me demander et
              surtout, de comprendre, comment une méchanique de jeu a pu être
              mise en place.
            </p>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div className="md:flex md:flex-col items-center">
            <div className="flex items-center justify-center">
              <ProfileImage size={250} />
            </div>
            <div className="flex justify-center mt-2 w-full">
              <ul className="w-full text-center">
                <Link
                  href="https://github.com/victordss103"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "size-6 p-0"
                  )}
                >
                  <GitHubIcon size={20} className="text-foreground" />
                </Link>
                <Link
                  href="https://linkedin.com/in/victor-de-sousa-dev"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "size-6 p-0"
                  )}
                >
                  <LinkedIn size={20} className="text-foreground" />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
