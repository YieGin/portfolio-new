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
