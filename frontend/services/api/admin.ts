import client from "./client";

// ユーザー情報の取得
export const fetchUsers = () => {
    return client.get("/users");
}

// ユーザー情報の登録
export const postUser = (params: any) => {
    return client.post("/users",params);
}

// ユーザー情報の削除
export const deleteUser = (employeeCode: string) => {
    return client.delete(`/users/${employeeCode}`);
}


// ユーザー情報の取得
// export const fetchUsers = () => {
//     return client.get("/users");

