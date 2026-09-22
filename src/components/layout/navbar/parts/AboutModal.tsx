import Link from "next/link";

import { GithubIcon } from "@/assets/icons/GithubIcon";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { MailIcon } from "@/assets/icons/MailIcon";
import { StorybookIcon } from "@/assets/icons/StorybookIcon";
import { TwitterIcon } from "@/assets/icons/TwitterIcon";
import { Button } from "@/components/common/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/common/shadcn/dialog";

import { useModalKeyboardScroll } from "../hooks/useModalKeyboardScroll";
import { AboutModalProps } from "../types";

export const AboutModal = ({ closeModal, returnFocusRef }: AboutModalProps) => {
  const { scrollRef, handleKeyDown, handleOpenAutoFocus } =
    useModalKeyboardScroll();

  return (
    <Dialog open={true} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent
        className="md:w-130 1xl:w-152 px-5 xsm:px-5 sm:px-6 md:px-10 1xl:px-12 pr-0 xsm:pr-0 sm:pr-0 pt-0 sm:pt-0 md:pt-10 1xl:pt-12 pb-0 md:pb-10 1xl:pb-12"
        onOpenAutoFocus={handleOpenAutoFocus}
        onCloseAutoFocus={(e) => {
          if (returnFocusRef?.current) {
            e.preventDefault();
            returnFocusRef.current.focus();
          }
        }}
        onKeyDown={handleKeyDown}
      >
        <div
          ref={scrollRef}
          tabIndex={-1}
          className="w-full h-full max-h-none md:max-h-[65vh] overflow-y-auto pl-1 pr-0 md:pr-4 [&>*]:pr-4 md:[&>*]:pr-0 pt-12 md:pt-0 focus:outline-none focus-visible:outline-none will-change-[scroll-position]"
        >
          <DialogHeader>
            <DialogTitle className="text-primaryText text-3xl md:text-2xl 1xl:text-3xl w-full text-left mb-4">
              About
            </DialogTitle>
          </DialogHeader>
          <DialogDescription asChild>
            <div className="text-primaryText text-base md:text-sm 1xl:text-base w-full text-left">
              <p className="mb-4 text-base md:text-sm 1xl:text-base">
                Nellavio Layout is a lightweight, open-source dashboard starter
                - a stripped down version of{" "}
                <Link
                  href="https://github.com/nellavio/nellavio"
                  target="_blank"
                  className="text-coloredLinkText hover:underline"
                >
                  Nellavio
                </Link>
                . It provides the core layout shell along with a collection of
                ready-to-use UI components, forms, tables and charts. Ideal
                starting point for building modern SaaS products, internal tools
                and data-rich admin panels.
              </p>
            </div>
          </DialogDescription>
          <div className="flex flex-row justify-start w-full mt-3 text-base gap-3 sm:gap-4 sm:h-12 md:h-10 1xl:h-12 mb-4">
            <Button
              asChild
              variant="outline"
              className="flex-1 xsm:flex-initial xsm:w-auto h-full sm:!px-6 gap-2"
            >
              <Link
                href="https://github.com/nellavio/nellavio-layout"
                target="_blank"
                tabIndex={0}
              >
                <GithubIcon />
                Repository
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="flex-1 xsm:flex-initial xsm:w-auto h-full sm:!px-6 gap-2"
            >
              <Link
                href="https://storybook.nellavio.com/"
                target="_blank"
                tabIndex={0}
              >
                <StorybookIcon />
                Storybook
              </Link>
            </Button>
          </div>
          <Link
            href="https://nellavio.kit.com/"
            target="_blank"
            tabIndex={0}
            className="inline-flex items-center gap-2 mt-1 text-coloredLinkText hover:underline font-medium"
          >
            <span className="stroke-coloredLinkText w-[18px] h-[18px] [&>svg]:w-[18px] [&>svg]:h-[18px]">
              <MailIcon />
            </span>
            Subscribe to newsletter
          </Link>
          <div className="text-primaryText text-base md:text-sm 1xl:text-base w-full text-left">
            <p className="text-left w-full mt-4 text-xl md:text-lg 1xl:text-xl">
              Tech stack:
            </p>
            <ul className="list-disc list-inside mb-4 pl-3 text-primaryText mt-4">
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>TypeScript</li>
              <li>Tailwind</li>
              <li>Shadcn</li>
              <li>Zustand</li>
              <li>Recharts</li>
              <li>Vitest</li>
            </ul>
          </div>
          <div className="flex items-center gap-4 mt-6 mb-6 pt-5 border-t border-mainBorder">
            <span className="text-primaryText text-base md:text-sm 1xl:text-base">
              Made by matt765
            </span>
            <div className="flex items-center gap-2.5">
              <Link
                href="https://github.com/matt765"
                target="_blank"
                tabIndex={0}
                className="text-grayIcon hover:text-primaryText transition-colors"
                aria-label="GitHub profile"
              >
                <span className="w-[22px] h-[22px] [&>svg]:w-[22px] [&>svg]:h-[22px]">
                  <GithubIcon />
                </span>
              </Link>
              <Link
                href="https://x.com/matt765_dev"
                target="_blank"
                tabIndex={0}
                className="text-grayIcon hover:text-primaryText transition-colors"
                aria-label="X profile"
              >
                <span className="w-[22px] h-[22px] [&>svg]:w-[22px] [&>svg]:h-[22px]">
                  <TwitterIcon />
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mateusz-wyrebek/"
                target="_blank"
                tabIndex={0}
                className="text-grayIcon hover:text-primaryText transition-colors"
                aria-label="LinkedIn profile"
              >
                <span className="w-[22px] h-[22px] [&>svg]:w-[22px] [&>svg]:h-[22px]">
                  <LinkedinIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
