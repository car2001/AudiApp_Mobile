import * as SecureStore from "expo-secure-store";

export const setToken = async (token: string) => {
  await SecureStore.setItemAsync("authToken", token);
};

export const getToken = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync("authToken");
};

export const removeToken = async () => {
  await SecureStore.deleteItemAsync("authToken");
};
