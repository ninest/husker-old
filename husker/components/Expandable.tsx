import { IconId } from "@/types/icon";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import { HTMLAttributes } from "react";
import { Icon } from "./Icon";

interface ExpandableProps extends HTMLAttributes<HTMLDivElement> {
  icon?: IconId;
  title: string;
  variant?: "primary" | "gray" | "error" | "warning";
  containsProse?: boolean;
  open?: boolean;
}
export const Expandable = ({
  icon = "info",
  variant = "primary",
  title,
  containsProse = false,
  open = false,
  children,
}: ExpandableProps) => {
  const [parent] = useAutoAnimate<HTMLDivElement>({ duration: 100 });
  return (
    <div
      className={clsx(
        "expandable transition-colors",
        {
          "bg-primary-lightest dark:bg-primary-darkest": variant == "primary",
          "bg-gray-100 dark:bg-gray-900/70": variant == "gray",
          "bg-error-light": variant == "error",
        },
        "rounded-md"
      )}
      ref={parent}
    >
      <Disclosure defaultOpen={open}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={clsx(
                "flex justify-between items-center w-full p-base md:p-sm font-semibold  rounded-lg transition-colors",
                {
                  "hover:bg-primary-lighter dark:hover:bg-primary-darker": variant == "primary",
                  "hover:bg-gray-200 dark:hover:bg-gray-800": variant == "gray",
                }
              )}
            >
              <div className="flex items-center">
                <Icon
                  id={icon}
                  className={clsx("mr-base flex-none", "text-gray-darkest dark:text-gray-light")}
                ></Icon>
                <div
                  className={clsx(
                    "text-gray-darkest dark:text-gray-light",
                    // Prevent text from being centered
                    "text-left"
                  )}
                >
                  {title}
                </div>
              </div>
              <Icon
                id="caretdown"
                className={clsx("text-gray-light", { "rotate-180": open })}
              ></Icon>
            </Disclosure.Button>
            <div
              className={clsx({ block: open, hidden: !open }, "px-base md:x-sm pt-xs pb-base", {
                prose: containsProse,
              })}
            >
              {children}
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};
