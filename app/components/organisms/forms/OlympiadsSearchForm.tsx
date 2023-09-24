import { useEffect, useState } from "react";
import IOlympiadsSearchForm, { IOlympiadsSearchResolver } from "../../../api/types/olympiads-search/IOlympiadsSearchForm";
import MyFormProvider from "../../../providers/MyFormProvider";
import MyStandardButton from "../../atoms/buttons/MyStandardButton";
import MySimpleSelectField from "../../atoms/forms/MySimpleSelectField";
import UseMajorsQuery from "../../../api/requests/olympiads-search/queries/UseMajorsQuery";
import { useRouter } from "next/router";
import clsx from "clsx";

function OlympiadsSearchForm({ UniversityNames, ClassName }: { UniversityNames: string[], ClassName?: string }) {
    const [ UniversityName, SetUniversityName ] = useState<string>("");
    const MajorsQuery = UseMajorsQuery(UniversityName);
    const Router = useRouter();
    const Values: IOlympiadsSearchForm = {
        UniversityName: "Uniwersytet Jagieloński",
        Major: "międzywydziałowe indywidualne studia humanistyczne"
    };

    useEffect(() => {
        MajorsQuery.refetch();
    }, [UniversityName]);

    return (
        <>
            <MyFormProvider<IOlympiadsSearchForm> FormResolver={IOlympiadsSearchResolver} DefaultValues={Values}
                ClassName={clsx(ClassName, "mx-auto max-w-[600px] w-full py-4")}
                OnSubmit={(FormData: IOlympiadsSearchForm) => Router.push({
                    pathname: '/olympiads/search',
                    query: new URLSearchParams({ name: FormData.UniversityName, major: FormData.Major }).toString(),
                })} 
            >
                <h2 className="text-semi-dark-alt font-bold text-2xl text-center mb-5">
                    Odkryj olimpiadę gwarantującą Ci indeks na wymarzone studia
                </h2>
                <MySimpleSelectField Name="UniversityName" Label="Uniwersytet" Placeholder="Wybierz uniwersytet" FullWidth 
                    Options={UniversityNames.map((Name) => ({value: Name, text: Name}))} 
                    OnChangeWithValue={(Value: string) => SetUniversityName(Value)}
                />
                <MySimpleSelectField Name="Major" Label="Kierunek" Placeholder="Wybierz kierunek" FullWidth 
                    Options={MajorsQuery.data ? MajorsQuery.data.map((Major) => ({value: Major, text: Major})) : []} 
                    IsLoading={MajorsQuery.isLoading || MajorsQuery.isFetching} 
                    HelpText="Aby móc wybrać kierunek, wpierw musisz wybrać uniwersytet" 
                />
                <MyStandardButton Type="submit" Text="Znajdź olimpiadę dla siebie" onClick={() => {}} 
                    Icon="icon-[material-symbols--search]" 
                    ClassName="ml-auto mt-6 px-5 bg-dark hover:text-dark" 
                />
            </MyFormProvider>
        </>
    );
};

export default OlympiadsSearchForm;