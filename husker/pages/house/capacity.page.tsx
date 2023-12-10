import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/button/Button";
import { PDFEmbed } from "@/components/embed/PDFEmbed";
import { Spacer } from "@/components/util/Spacer";
import { NextSeo } from "next-seo";

const CapacityPage = () => {
  const capacity23 = "/files/housing/capacity/2023.pdf";
  // const capacity21 = "/files/house/room-rates/first-year-2022.pdf";

  return (
    <>
      <NextSeo
        title="Housing Capacity"
        description="View the housing capacity to plan ahead for room selection"
      />
      <ArticleHead
        backButtonHref="/courses"
        backButtonText="Courses"
        title="Housing Capacity 2023"
      ></ArticleHead>

      <Spacer />

      <PDFEmbed href={capacity23}></PDFEmbed>

      <Spacer />

      <div className="wrapper">
        <Button href={capacity23} iconLeft="download">
          Download
        </Button>
      </div>
    </>
  );
};

export default CapacityPage;
