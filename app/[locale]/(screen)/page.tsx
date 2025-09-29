import {useTranslations} from "next-intl";

export default function Home() {
    const t = useTranslations("Test");

    return (
        <h1 className="">
            Hello world!
            {t("test")}
        </h1>
    );
}
