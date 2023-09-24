import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

export default interface IOlympiadsSearchForm {
    UniversityName: string;
    Major: string;
};

export const IOlympiadsSearchFormZodObject = z.object({
    UniversityName: z.string().min(1, "Nazwa uczelni jest obowiązkowa"),
    Major: z.string().min(1, "Kierunek jest obowiązkowy")
});

export const IOlympiadsSearchResolver = zodResolver(IOlympiadsSearchFormZodObject);