export interface UserInfo {
    id: number;
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
