import { create } from "zustand";
import { persist, createJSONStorage} from "zustand/middleware";
import { setItem, getItem, removeItem } from "../utils/storage";

type EnterpriseStore = {
    hasEnterprise: boolean;
    setHasEnterprise: (hasEnterprise:boolean) => void
}

const useEmpresaStore = create<EnterpriseStore>()(
    persist(
        (set) => ({
            hasEnterprise: false,
            setHasEnterprise: (hasEnterprise: boolean) => set({hasEnterprise})
        }),
        {
            name: "enterprise-storage",
            storage: createJSONStorage(() => ({
                getItem: getItem,
                setItem: setItem,
                removeItem: removeItem
            }))
        }
    )
);

export default useEmpresaStore;