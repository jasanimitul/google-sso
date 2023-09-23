import { Document as RichTextDocument } from '@contentful/rich-text-types'
export interface accordionType {
	title: string;
  description: RichTextDocument;
}
export interface tabsType {
  name: string;
  accordions: Array<accordionType>;
};

export interface chartType {
  category: string;
  value: number;
};