import { createContext, useState } from "react";
import { LANGUAGES_VALUE } from "../constants/common.contants";

export const languageContext = createContext();

const LangageProvider = ({ children }) => {
    const [lang, setLang] = useState(LANGUAGES_VALUE.EN);

    function changeLang (lang) {
        setLang(lang);
    }

    return (
        <languageContext.Provider value={{lang, changeLang}}>
            {children}
        </languageContext.Provider>
    )
}

export default LangageProvider;