export interface Contact {
  _id?: string;
  title: string;
  detail: string;
  icon?: string; // Assuming icon is optional
}

export type EmailSender = {
  from_name: String;
  from_email: String;
  message: String;
};
