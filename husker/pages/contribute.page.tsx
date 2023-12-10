import { ArticleHead } from "@/components/ArticleHead";
import { Button } from "@/components/button/Button";
import { Expandable } from "@/components/Expandable";
import { FormField } from "@/components/form/FormField";
import { SmartLink } from "@/components/SmartLink";
import { Spacer } from "@/components/util/Spacer";
import { showToast } from "@/components/util/Toast";
import { celebrate } from "@/lib/confetti";
import { server } from "@/lib/trpc";
import { ContributeForm, contributeFormSchema } from "@/schema/contribute";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const router = useRouter();

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setValue,
    control,
  } = useForm<ContributeForm>({
    resolver: zodResolver(contributeFormSchema),
    defaultValues: {
      name: "",
      content: "",
      credit: "",
    },
  });

  const { name: initialName, fixLinks } = router.query;

  useEffect(() => {
    if (initialName) {
      const newPageName = (initialName as string).replaceAll("_", " ");
      setValue("name", newPageName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialName]);

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      // await submitToContributeForm(data);
      const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdQ8vhyic8Z5lxnBw9643UnqPxN2MIfssLYz32OBW_Vhn_X9A/formResponse?usp=pp_url&entry.770504043=${data.name}&entry.1613298240=${data.content}&entry.1321358172=${data.credit}`;
      await fetch(`https://corsproxy.io/?${encodeURIComponent(formUrl)}`);
      // const res = await fetch(formUrl);
      // console.log(res);

      setSubmitted(true);
      showToast({ text: "Thank you for your contribution!" });

      celebrate();
      reset();
    } catch (e) {
      console.log(e);

      showToast({ text: "Unfortunately, an error ocurred", type: "error" });
    }
  });

  return (
    <>
      <NextSeo title="Contribute" description="Contribute to Husker" />
      <ArticleHead title="Contribute"></ArticleHead>
      <article className="wrapper">
        <Expandable title="How to contribute?">
          <div className="prose">
            <p>To contribute, you may either:</p>

            <ul>
              <li>Fill out this form</li>
              <li>
                Join the{" "}
                <SmartLink href="https://discord.gg/j7WkFct2rY" underline>
                  Discord server
                </SmartLink>
              </li>
              <li>
                Make a{" "}
                <SmartLink href="https://github.com/ninest/huskinfo" underline>
                  pull request
                </SmartLink>
              </li>
            </ul>
          </div>
        </Expandable>
        <Spacer />
        <ContributorsExpandable></ContributorsExpandable>

        <Spacer size="md" />
        <p>
          <a href="http://eepurl.com/imB7zE">
            Remember to join the <span className="underline">mailing list</span>!
          </a>
        </p>
        <Spacer size="md" />

        <form onSubmit={onSubmit} className="space-y-base">
          <FormField
            control={control}
            name="name"
            label="Name"
            description="Enter the title of the page you want to contribute to. If you are suggesting a new page, feel free to leave this field blank."
            className="md:w-3/4"
          />
          <FormField
            control={control}
            name="content"
            label="Content"
            description={
              fixLinks ? (
                "Please enter the link or link title that is broken."
              ) : (
                <>
                  Please use Imgur links to submit images.{" "}
                  <SmartLink href="https://imgur.com/upload" className="underline">
                    Upload images on Imgur
                  </SmartLink>
                  . Make sure the link never expires!
                </>
              )
            }
            textarea
          ></FormField>

          <FormField
            control={control}
            name="credit"
            label="Credit"
            description="If you would like to be credited, leave your Reddit/Discord username or website."
            className="md:w-3/4"
          />

          <fieldset className="flex">
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {submitted ? "Submitted!" : <>Submit{isSubmitting && "ting"}</>}
            </Button>
          </fieldset>
        </form>
        <Spacer />

        <div className="prose">
          <p>
            If the form doesn't work, please{" "}
            <a className="underline" href="https://www.reddit.com/user/mapuniverse">
              message me on reddit
            </a>
            ,{" "}
            <a className="underline" href="mailto:kabra.pa@northeastern.edu">
              email me
            </a>
            , or{" "}
            <a
              className="underline"
              href="https://github.com/ninest/husker/issues?q=is:issue+is:open+sort:updated-desc"
            >
              create an issue on GitHub
            </a>
            .
          </p>
        </div>
      </article>
    </>
  );
};

const ContributorsExpandable = () => {
  const contributors = [
    {
      name: "turtleman99",
      href: "https://github.com/turtleman99",
      description: "Northeastern status page",
    },
    {
      name: "Vocaloiid",
      description: "Various links",
    },
    {
      name: "Kyle Sferrazza",
      href: "https://github.com/kylesferrazza",
      description: "Links",
    },
    // {
    //   name: "Ahrav Soi",
    //   href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    //   description:
    //     "I helped a lot, should definetly be compensated, was good baby",
    // },
    {
      name: "Altruistic_Biscuits",
      href: "https://www.reddit.com/user/Altruistic_Biscuits/",
      description: "Housing images",
    },
    {
      name: "level 3",
      href: "https://www.reddit.com/user/thecrashmaverick/",
      description: "Housing images",
    },
    {
      name: "cb#7296",
      href: "https://discordapp.com/users/408983816712093697",
      description: "Wording",
    },
    {
      name: "RubberDuck#4827",
      href: "https://discordapp.com/users/719340622892236961",
      description: "Emotional Damage",
    },
  ];
  return (
    <Expandable icon="smilebeam" title="Contributors list">
      <div className="prose">
        <p>Thanks to these contributors:</p>
        <ul className="">
          {contributors.map((contributor) => {
            const Element = (
              <>
                <span className="underline">{contributor.name}</span>{" "}
                <span className="text-gray">{contributor.description}</span>
              </>
            );
            if (contributor.href)
              return (
                <li key={contributor.name}>
                  <SmartLink href={contributor.href}>{Element}</SmartLink>
                </li>
              );
            else return <li key={contributor.name}>{Element}</li>;
          })}
        </ul>
        <p>And of course, thank you to all anonymous contributors too!</p>
      </div>
    </Expandable>
  );
};

export default ContactPage;
