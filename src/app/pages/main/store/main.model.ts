export interface MainState {
    users: User[] | null;
}

export interface User {
    id?: number | null;
    name?: string | null;
    username?: string | null;
    email?: string | null;
    phone?: string | null;
    website?: string | null;
}
