import { FC } from "react";

import { team } from "../../../data/team";

import { ReactComponent as InstIcon } from "../../../icons/socials/instagtam.svg";
import { ReactComponent as TwitterIcon } from "../../../icons/socials/twitter.svg";
import { ReactComponent as FBIcon } from "../../../icons/socials/facebook.svg";
import { ReactComponent as InIcon } from "../../../icons/socials/in.svg";

import { ContainerStyled } from "../../../styles/Container.styled";
import { SectionTitleStyled } from "../../../styles/SectionTitle.styled";
import { SpanStyled } from "../../../styles/Span.styled";
import {
  TeamListStyled,
  TeamSocialsStyled,
  TeamStyled,
  TeamTitleStyled,
} from "./Team.styled";

export const Team: FC<{ all?: boolean }> = ({ all }) => {
  const allOrNot = all ? 6 : 3;

  return (
    <TeamStyled>
      <ContainerStyled>
        <TeamTitleStyled>
          <SpanStyled>The Transporters</SpanStyled>
          <SectionTitleStyled>
            Meet Expert Team
          </SectionTitleStyled>
        </TeamTitleStyled>
        <TeamListStyled>
          {team
            .slice(0, allOrNot)
            .map(({ name, jobTitle, photo, socials }) => {
              return (
                <li key={name}>
                  <img
                    src={photo}
                    alt={name}
                    width="364px"
                    height="426px"
                  />
                  <div>
                    <h3>{name}</h3>
                    <p>{jobTitle}</p>
                  </div>
                  <TeamSocialsStyled data-aos="fade-left">
                    {socials.in && (
                      <li>
                        <a href="https://www.linkedin.com/">
                          <InIcon />
                        </a>
                      </li>
                    )}
                    {socials.x && (
                      <li>
                        <a href="https://twitter.com/">
                          <TwitterIcon />
                        </a>
                      </li>
                    )}
                    {socials.fb && (
                      <li>
                        <a href="https://www.facebook.com/">
                          <FBIcon />
                        </a>
                      </li>
                    )}
                    {socials.inst && (
                      <li>
                        <a href="https://www.instagram.com/">
                          <InstIcon />
                        </a>
                      </li>
                    )}
                  </TeamSocialsStyled>
                </li>
              );
            })}
        </TeamListStyled>
      </ContainerStyled>
    </TeamStyled>
  );
};
