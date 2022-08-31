
export type QueryNode = {
    id: number;
    excerpt: string;
    slug: string;
    frontmatter : {
        title : string,
        date : string,
        slug: string
    }
};