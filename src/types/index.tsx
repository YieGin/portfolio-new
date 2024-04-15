export type formDataType = {
  firstName: string;
  lastName: string;
  email: string;
  message?: string;
};

export type EmailTemplateParams = {
  from: string;
  firstName: string;
  lastName: string;
  body: string;
};


export type CaseStudy = {
  imgSrc: any;
  ProjectImg: any;
  icon: React.ElementType;
  title: string;
  Summary: string;
  subtitle: string;
  description: string;
  websiteLink: string;
  youtubeLink: string;
  codeLink: string;
  skills: string[];
}

import { NextRequest, NextResponse } from "next/server";

export type CombinedRequest =  NextRequest;
export type CombinedResponse = NextResponse;
