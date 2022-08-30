import { QueryNode } from "./queryNode";

export type AllMdxBlog = {
    allMdx: {
        nodes: [QueryNode];
    },
    site: any
};
