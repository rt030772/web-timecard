import client from "./client";

// ユーザー情報の取得
export const fetchUsers = () => {
    return client.get("/users");
}


// ユーザー情報の登録
export const postUser = (params: any) => {
    return client.post("/users",params);
}
