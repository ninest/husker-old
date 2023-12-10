import { ArticleHead } from "@/components/ArticleHead";
import { SmartLink } from "@/components/SmartLink";
import { Button } from "@/components/button/Button";
import { PDFEmbed } from "@/components/embed/PDFEmbed";
import { Spacer } from "@/components/util/Spacer";
import { NextSeo } from "next-seo";

const UndergraduateCalendarPage = () => {
  // const calendarHref2022 = "/files/calendar/2021-2022.pdf";
  const calendarHref2023 = "/files/calendar/2022-2023.pdf";

  return (
    <>
      <NextSeo title="Undergraduate Calendar" description="View the calendar for Northeastern" />
      <ArticleHead
        backButtonHref="/courses"
        backButtonText="Courses"
        title="Undergraduate Calendar 2022-2023"
      ></ArticleHead>

      <Spacer />

      <article className="wrapper prose">
        <ul>
          <li>
            <SmartLink href={"https://registrar.northeastern.edu/article/academic-calendar/"} underline>
              Future Calendars
            </SmartLink>
          </li>
        </ul>
      </article>

      <Spacer />

      <PDFEmbed href={calendarHref2023}></PDFEmbed>

      <Spacer />

      <div className="wrapper">
        <Button href={calendarHref2023} iconLeft="download">
          Download
        </Button>
      </div>

      {/* <Spacer size="2xl" />
      <div className="wrapper prose">
        <h2>2022-2023</h2>
      </div>
      <Spacer />
      <PDFEmbed href={calendarHref2023}></PDFEmbed> */}
    </>
  );
};

export default UndergraduateCalendarPage;
