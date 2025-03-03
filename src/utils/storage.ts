import * as SecureStore from "expo-secure-store";

export const setItem = async (key: string,item: string) => {
  await SecureStore.setItemAsync(key, item);
};

export const getItem = async (key: string): Promise<string | null> => {
  return await SecureStore.getItemAsync(key);
};

export const removeItem = async (key: string) => {
  await SecureStore.deleteItemAsync(key);
};
