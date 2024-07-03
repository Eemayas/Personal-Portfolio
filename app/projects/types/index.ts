export interface Project {
  _id?: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  source_code_link: string;
  websitelinks?: string;
}
