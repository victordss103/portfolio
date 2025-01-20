"use client";
import { Section } from "./Section";
import { ProfileImage } from "./icons/ProfileImage";
import { GitHubIcon } from "./icons/GitHubIcon";
import Link from "next/link";
import { LinkedIn } from "./icons/LinkedIn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";


export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("hero-text");
    if (element) {
      const rect = element.getBoundingClientRect();
      // Ajoute un léger décalage pour que l'élément commence à disparaître un peu avant
      const margin = 150; // La marge avant que l'élément commence à disparaître

      // Vérifie si l'élément est visible avec une marge
      setIsVisible(rect.top <= window.innerHeight + margin && rect.bottom >= margin);
    }
  };

  useEffect(() => {
    // Déclenche l'animation au chargement de la page
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Ajoute un léger délai pour une meilleure transition visuelle

    window.addEventListener("scroll", handleScroll); // Ajoute l'écouteur de défilement
    return () => {
      window.removeEventListener("scroll", handleScroll); // Nettoie l'écouteur lorsque le composant est démonté
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      <Section className="flex max-md:flex-col items-start">
        <div className="flex-[3]" id="hero-text">
          <h2
            style={{
              transitionDuration: `${800}ms`, // Appliquer la durée d'animation dynamiquement
            }}
            className={`transform transition-transform duration-1000 ease-in-out ${
              isVisible ? "translate-x-0" : "-translate-x-full"
            } font-caption text-3xl text-primary font-bold`}
          >
            Victor DE SOUSA
          </h2>
          <h3
            style={{
              transitionDuration: `${900}ms`, // Appliquer la durée d'animation dynamiquement
            }}
            className={`transform transition-transform duration-1000 ease-in-out ${
              isVisible ? "translate-x-0" : "-translate-x-full"
            } font-caption text-2xl text-primary`}
          >
            Développeur Web Full Stack
          </h3>
          <div className={`text-base`}>
            <p
              style={{
                transitionDuration: `${1000}ms`, // Appliquer la durée d'animation dynamiquement
              }}
              className={`transform transition-transform duration-1000 ease-in-out ${
                isVisible ? "translate-x-0" : "-translate-x-full"
              } `}
            >
              Jeune genevois passioné d'astronomie et de jeux vidéo, j'ai décidé
              de me lancer dans le monde du développement, monde qui comporte
              les attributs principaux de mes deux passions.
            </p>
            <br />
            <br />
            <p
              style={{
                transitionDuration: `${1050}ms`, // Appliquer la durée d'animation dynamiquement
              }}
              className={`transform transition-transform duration-1000 ease-in-out ${
                isVisible ? "translate-x-0" : "-translate-x-full"
              } `}
            >
              La créativité et l'imagination procurée par l'immensité de
              l'espace est sans doute une bonne comparaison de la multitude de
              possiblité en terme développement.
            </p>
            <br />
            <br />
            <p
              style={{
                transitionDuration: `${1100}ms`, // Appliquer la durée d'animation dynamiquement
              }}
              className={`transform transition-transform duration-1000 ease-in-out ${
                isVisible ? "translate-x-0" : "-translate-x-full"
              } `}
            >
              Quant aux jeux vidéos, ce sont tout simplement des millions de
              lignes de code et c'est un plaisir pour moi de me demander et
              surtout, de comprendre, comment une méchanique de jeu a pu être
              mise en place.
            </p>
          </div>
        </div>
        <div className="flex-[2] items-center">
          <div
            style={{
              transitionDuration: `${1200}ms`, // Appliquer la durée d'animation dynamiquement
            }}
            className={`transform transition-transform duration-1000 ease-in-out ${
              isVisible ? "translate-x-0" : "translate-x-full"
            } flex items-center justify-center`}
          >
            <ProfileImage size={250} />
          </div>
          <div className="flex-1 text-center mt-2">
            <ul>
              <span
                style={{
                  transition: `opacity ${1200}ms ease-in-out`,
                  opacity: isVisible ? 1 : 0, // Contrôle de l'opacité
                }}
              >
                <Link
                  href="https://github.com/victordss103"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "size-6 p-0 mr-2"
                  )}
                >
                  <GitHubIcon
                    size={20}
                    className="text-foreground"
                  ></GitHubIcon>
                </Link>
              </span>
              <span
                style={{
                  transition: `opacity ${1200}ms ease-in-out`,
                  opacity: isVisible ? 1 : 0, // Contrôle de l'opacité
                }}
              >
                <Link
                  href="https://linkedin.com/in/victor-de-sousa-dev"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "size-6 p-0"
                  )}
                >
                  <LinkedIn size={20} className="text-foreground" />
                </Link>
              </span>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
};


