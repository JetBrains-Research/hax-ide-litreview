"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import React, { RefObject, useEffect, useRef, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { GitHubLogoIcon, EnvelopeClosedIcon, RocketIcon, ReaderIcon, ClipboardIcon } from '@radix-ui/react-icons'
import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "../components/page-header";

import TaskPage from "./paper";
import next from "next";

const TITLE = "A Design Space for In-IDE HAX";


const PAPER_URL = "https://arxiv.org/html/2410.08676";
const GITHUB_URL = "https://github.com/JetBrains-Research/hax-ide-litreview";
const BASE_PATH = "";

interface Author {
  name: string;
  role: string;
  affiliation: string;
  email?: string;
  website?: string;
  avatar?: string;
}

const AUTHORS:Author[] = [
  {"name": "Ilia Zakharov", "role": "Senior Researcher", "affiliation": "JetBrains Research"}
];

const AuthorHoverCard = (author: Author) => (
  <HoverCard openDelay={100} closeDelay={100}>
    <HoverCardTrigger className="pr-4" style={{ marginLeft: 0 }}>
      <Button className="px-0" variant="link">
        {author.name}
      </Button>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="flex justify-between">
        <Avatar className="mr-4">
          <AvatarImage src={author.avatar} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">{author.name}</h4>
          <p className="text-sm">{author.affiliation}</p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);


const AuthorHoverCard2 = (author: (typeof AUTHORS)[0]) => (
  <HoverCard openDelay={100} closeDelay={100}>
    <HoverCardTrigger className="">
      <Avatar className="mr-0.5 my-0.5">
          <AvatarImage src={author.avatar} />
          <AvatarFallback>{`${author.name.split(' ')[0][0]}${author.name.split(' ').pop()?.[0]}`}</AvatarFallback>
      </Avatar>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="flex justify-between">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">{author.name}</h4>
          <p className="text-sm">{author.affiliation}</p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);


const Headline = () => (
  <PageHeader className="page-header pb-12 pt-4">
    <PageHeaderHeading className="tracking-tight">{TITLE} </PageHeaderHeading>
    <Separator className="my-2" />
    <section className="flex w-full items-center space-x-4 pb-1 pt-4 md:pb-1">
      <Link
        href={PAPER_URL}
        target="_blank"
        className={cn(buttonVariants({ variant: "outline" }), "rounded-[6px]")}
      >
        <ReaderIcon className="ml-0 h-4 w-4" />
        <Separator className="mx-2 h-4" orientation="vertical" />{" "}
        <span>Paper</span>
      </Link>
      <Link
        href={GITHUB_URL}
        target="_blank"
        className={cn(buttonVariants({ variant: "outline" }), "rounded-[6px]")}
      >
        <GitHubLogoIcon className="ml-0 h-4 w-4" />
        <Separator className="mx-2 h-4" orientation="vertical" />{" "}
        <span>Code</span>
      </Link>
      <Link
        href="#annotated-papers"
        className={cn(buttonVariants({ variant: "outline" }), "rounded-[6px]")}
      >
        <RocketIcon className="ml-0 h-4 w-4" />
        <Separator className="mx-2 h-4" orientation="vertical" />{" "}
        <span>Interactive Demo</span>
      </Link>
      {/* <Link
        href="mailto:mnlee@uchicago.edu"
        className={cn(buttonVariants({ variant: "outline" }), "rounded-[6px]")}
      >
        <EnvelopeClosedIcon className="ml-0 h-4 w-4" />
        <Separator className="mx-2 h-4" orientation="vertical" />{" "}
        <span>Contact</span>
      </Link> */}
    </section>


    {/* <div className="flex flex-wrap justify-start items-start align-start space-x-0">
      {AUTHORS.map((author, index) => (
        <React.Fragment key={index}>{AuthorHoverCard2(author)}</React.Fragment>
      ))}
    </div> */}
  </PageHeader>
);

export default function Home() {
  return (
    <div className="container min-h-screen relative px-16 pt-8 pb-16">
      <Headline />
      <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow" id="annotated-papers">
        <TaskPage />
      </div>
    </div>
  );
}
