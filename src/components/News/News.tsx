import { Link } from "react-router-dom";
import { news } from "../../data/news";

import { ReactComponent as CalendarIcon } from "../../icons/common/calendar.svg";

import { ContainerStyled } from "../../styles/Container.styled";
import { SectionTitleStyled } from "../../styles/SectionTitle.styled";
import { SpanStyled } from "../../styles/Span.styled";
import {
  NewsStyled,
  NewsTitleStyled,
  NewsListStyled,
  ImgLinkStyled,
  DateStyled,
  NewsTextStyled,
} from "./News.styled";
import { LinkAnimated } from "../LinkAnimated/LinkAimated";

export const News = () => {
  return (
    <NewsStyled>
      <ContainerStyled width={948}>
        <NewsTitleStyled>
          <SpanStyled>Our Blog</SpanStyled>
          <SectionTitleStyled>
            Our Latest News
          </SectionTitleStyled>
        </NewsTitleStyled>
        <NewsListStyled>
          {news.map(({ title, img, date }) => {
            return (
              <li
                key={date}
                data-aos="fade-left"
                data-aos-delay="100">
                <ImgLinkStyled to="/post/how-technology-can-help-redraw-the-supply-chain-map">
                  <img
                    src={img}
                    width="456px"
                    height="310px"
                  />
                  <div>
                    <p>Read more</p>
                  </div>
                </ImgLinkStyled>
                <DateStyled>
                  <CalendarIcon />
                  <span>{date}</span>
                  <p>September</p>
                </DateStyled>
                <NewsTextStyled>
                  <Link to="/post/how-technology-can-help-redraw-the-supply-chain-map">
                    {title}
                  </Link>
                  <p>
                    We are dedicated in creating added value
                    for our customers by implementing modern
                    technology in our work.
                  </p>
                  <ul>
                    <li>
                      <p>Urgent transport solutions</p>
                    </li>
                    <li>
                      <p>Reliable & experienced staffs</p>
                    </li>
                    <li>
                      <p>Urgent transport solutions</p>
                    </li>
                    <li>
                      <p>Reliable & experienced staffs</p>
                    </li>
                  </ul>
                </NewsTextStyled>
              </li>
            );
          })}
        </NewsListStyled>
        <LinkAnimated
          href="/blog"
          title="More Blog"
          dark
          center
        />
      </ContainerStyled>
    </NewsStyled>
  );
};
