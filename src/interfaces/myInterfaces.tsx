export interface ErrorDetail {
    value: string,
    msg: string,
    param: string,
    location: string
}

export interface PostType {
    op_name: string,
    message: string,
    date: Date,
    medias?: string,
    genre?: string,
    likes: number,
    comments?: string
}

export interface CommentType {
    op_name: string,
    message: string,
    date: Date,
    belong: string,
    medias?: string,
    likes: number,
    private: boolean

}

export interface UserType {
    username: string,
    date_join: Date
}

export interface FetchedData {
    err?: ErrorDetail[] | string,
    success?: boolean,
    token?: string,
    theUser?: UserType,
    username?: string,
    id?: string,
    thePost?: PostType,
    thePosts?: string[],
    post_id?: string,
    theComment?: CommentType,
    theComments?: string[],
}