export interface IBlog {
    author: string,
    blog_title: string,
    blog_description: string,
    publish_date: string,
    blog_picture: string,
    content: string,
}

export interface IComment {
    id: number,
    full_name: string,
    comment_user: string,
    text: string,
    created: string,
}