export const setItem = (key:string,item: string) => {
    localStorage.setItem(key, item);
};

export const getItem = (key:string): string | null => {
    return localStorage.getItem(key);
};

export const removeItem = (key:string) => {
    localStorage.removeItem(key);
};