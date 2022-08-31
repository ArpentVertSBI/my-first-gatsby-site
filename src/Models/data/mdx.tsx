import { QueryNode } from "./queryNode";
import { ImageDataLike } from "gatsby-plugin-image";

export type Mdx = {
    mdx: {
        id: number;
        frontmatter: {
            title: string
            date : string
            hero_image_alt: string
            hero_image_credit_link: string
            hero_image_credit_text: string
            hero_image: ImageDataLike 
        };
    };
};
