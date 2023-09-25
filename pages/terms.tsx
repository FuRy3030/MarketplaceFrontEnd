import Container from "../app/components/atoms/grid/Container";

function Page() {
    const HTML = `<h2 style="text-align: center;">Regulamin serwisu internetowego</h2>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 1.</span><span style="color: #212529;">Postanowienia wstępne</span></p>
    <ol>
    <li><span style="color: #212529;">Niniejszy Regulamin określa og&oacute;lne warunki, zasady oraz spos&oacute;b świadczenia usług drogą elektroniczną, za pośrednictwem Serwisu internetowego Competify, dostępnego pod adresem internetowym https://www.competify.pl, przez Sp&oacute;łkę Competify </span><span style="color: #333333;">Competify Adam Duda Jakub Kalbarczyk sp&oacute;łka cywilna</span></li>
    <li><span style="color: #212529;">Niniejszy Regulamin skierowany jest do Konsument&oacute;w i określa zasady i tryb zawierania z Konsumentem Umowy o świadczenie usług elektronicznych za pośrednictwem Serwisu.</span></li>
    <li><span style="color: #212529;">Niniejszy Regulamin jest nieprzerwanie dostępny na stronie internetowej https://www.competify.pl, w spos&oacute;b umożliwiający Użytkownikom jego pozyskanie, odtwarzanie i utrwalanie jego treści poprzez wydrukowanie lub zapisanie na nośniku w każdej chwili.</span></li>
    </ol>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 2.</span><span style="color: #212529;">Definicje</span></p>
    <p><span style="color: #212529;">Użyte w niniejszym Regulaminie określenia zapisane wielką literą, niezależnie od liczby, przyjmują następujące definicje:</span></p>
    <ol>
    <li>Usługodawca- Competify Adam Duda Jakub Kalbarczyk sp&oacute;łka cywilna, zarejestrowana pod adresem <span style="color: #232332;">ul. Tadeusza Kościuszki 30/A, 32-005 Niepołomice,</span> NIP <span style="color: #232332;">6832130696</span>, REGON <span style="color: #232332;">525792061.</span></li>
    <li><span style="color: #212529;">Konsument &ndash; osoba fizyczna zawierająca z Usługodawcą umowę w ramach Serwisu, kt&oacute;rej przedmiot nie jest związany bezpośrednio z jej działalnością gospodarczą lub zawodową.</span></li>
    <li><span style="color: #212529;">Klient &ndash; pełnoletnia osoba fizyczna będąca Konsumentem dokonująca zakupu usługi za pośrednictwem Serwisu,</span></li>
    <li><span style="color: #212529;">Użytkownik &ndash; osoba fizyczna korzystająca z Serwisu, przed dokonaniem zakupu Usługi,</span></li>
    <li><span style="color: #212529;">Serwis &ndash; Serwis internetowy prowadzony przez Usługodawcę pod adresem internetowym&nbsp; https://www.competify.pl.</span></li>
    <li><span style="color: #212529;">Umowa o świadczenie usług drogą elektroniczną &ndash; wykonanie usługi świadczonej bez jednoczesnej obecności stron (na odległość), poprzez przekaz danych na indywidualne żądanie Użytkownika, przesyłanej i otrzymywanej za pomocą urządzeń do elektronicznego przetwarzania, włącznie z kompresją cyfrową, i przechowywania danych, kt&oacute;ra jest w całości nadawana, odbierana lub transmitowana za pomocą sieci telekomunikacyjnej,</span></li>
    <li><span style="color: #212529;">Umowa &ndash; sprzedaży Usługi zawierana pomiędzy Usługodawcą a Klientem w następstwie złożenia przez Klienta Zam&oacute;wienia i przyjęcia go do realizacji przez Usługodawcę.</span></li>
    <li><span style="color: #212529;">Usługi &ndash; wszelkie udostępnione Użytkownikowi przez Usługodawcę funkcjonalności Serwisu, o kt&oacute;rych mowa w &sect; 3 Regulaminu,</span></li>
    <li><span style="color: #212529;">Regulamin &ndash; niniejszy regulamin Serwisu.</span></li>
    <li><span style="color: #212529;">Konto &ndash; konto Użytkownika w Serwisie, w kt&oacute;rym gromadzone są dane podane przez Użytkownika oraz informacje o złożonych przez niego Zam&oacute;wieniach w Serwisie.</span></li>
    <li><span style="color: #212529;">Formularz rejestracji &ndash; formularz dostępny w Serwisie, umożliwiający utworzenie Konta.</span></li>
    <li><span style="color: #212529;">Formularz zam&oacute;wienia &ndash; interaktywny formularz dostępny w Serwisie umożliwiający złożenie Zam&oacute;wienia, w szczeg&oacute;lności poprzez dodanie Produkt&oacute;w do Koszyka oraz określenie warunk&oacute;w Umowy, w tym sposobu dostawy i płatności.</span></li>
    <li><span style="color: #212529;">Dostawca usługi &ndash; osoba fizyczna realizująca w imieniu Usługodawcy Usługi na rzecz Klienta, w wyniku zawarcia Umowy.</span></li>
    <li><span style="color: #212529;">Dane Osobowe: wprowadzone przez Użytkownika informacje, zgromadzone przez Usługodawcę w czasie rejestracji Konta w Serwisie oraz w toku jego użytkowania, stanowiące dane osobowe w rozumieniu Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony os&oacute;b fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (og&oacute;lne rozporządzenie o ochronie danych),&nbsp;</span></li>
    <li><span style="color: #212529;">Przerwa techniczna: czasowe wyłączenie funkcjonalności Serwisu w całości lub w części, związane z awarią Serwisu, w tym serwer&oacute;w Serwisu, lub związane z koniecznością konserwacji tych serwer&oacute;w bądź modernizacją lub przebudową Serwisu, w czasie kt&oacute;rego nie jest możliwe korzystanie ze wszystkich lub wybranych Usług,</span></li>
    <li><span style="color: #212529;">Force majeure: zdarzenie zewnętrzne, kt&oacute;rego Użytkownik oraz Usługodawca nie mogli przewidzieć i kt&oacute;remu nie mogli zapobiec, uniemożliwiające korzystanie z Serwisu w całości lub części, na stałe lub na pewien czas, kt&oacute;remu Użytkownik lub Usługodawca nie m&oacute;gł przeciwdziałać przy zachowaniu należytej staranności i kt&oacute;re nie było efektem błęd&oacute;w lub zaniedbań Użytkownika lub Usługodawcy dotkniętego jej działaniem.&nbsp;</span></li>
    </ol>
    <ul>
    <li><span style="color: #212529;">Urządzenie: urządzenie elektroniczne (typu komputer), umożliwiające Użytkownikowi korzystanie z Serwisu.</span></li>
    </ul>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 3.</span><span style="color: #212529;">Z wykorzystaniem Serwisu świadczone są następujące usługi:</span></p>
    <ol>
    <li><span style="color: #212529;">zapoznania się z treściami i materiałami związanymi z oferowanymi w Serwisie usługami doradczymi jak i edukacyjnymi, mającymi na celu udzielenie pomocy w przygotowaniu do olimpiad przedmiotowych oraz egzamin&oacute;w, z uwzględnieniem indywidualnych predyspozycji Klienta - zwanymi dalej Usługami</span></li>
    <li><span style="color: #212529;">&nbsp;wypełnienia Formularza kontaktowego,</span></li>
    <li><span style="color: #212529;">&nbsp;zakupu Usługi.</span></li>
    </ol>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 4.</span><span style="color: #212529;">Zawarcie i rozwiązanie</span><span style="color: #212529;">umowy o świadczenie usług drogą elektroniczną</span></p>
    <ol>
    <li><span style="color: #212529;">Zawarcie umowy o świadczenie usług drogą elektroniczną następuje:</span></li>
    <ol>
    <li><span style="color: #212529;">w zakresie usługi, o kt&oacute;rej mowa w &sect; 3 ust. 1) &ndash; z momentem kliknięcia w daną treść lub rozpoczęcia zapoznania się z nią w inny spos&oacute;b,</span></li>
    <li><span style="color: #212529;">w zakresie usługi, o kt&oacute;rej mowa w &sect; 3 ust. 2) &ndash; z momentem rozpoczęcia wprowadzania danych do Formularza kontaktowego,</span></li>
    <li><span style="color: #212529;">w zakresie usługi, o kt&oacute;rej mowa w &sect; 3 ust.3) &ndash; z momentem otrzymania od Usługodawcy potwierdzenia złożenia Zam&oacute;wienia.</span></li>
    </ol>
    </ol>
    <ol>
    <li><span style="color: #212529;">Użytkownik może rozwiązać umowę o świadczenie usług drogą elektroniczną w zakresie usług wskazanych w &sect; 3 ust. 1 &ndash; 3 w każdym czasie bez podania przyczyn/powod&oacute;w, co pozostaje bez wpływu na inne umowy zawarte przez strony.</span></li>
    <li><span style="color: #212529;">Zawarcie i rozwiązanie umowy o świadczenie usług drogą elektroniczną wskazanej w zakresie usług wskazanych w &sect; 3 ust. 1 &ndash; 3&nbsp; jest bezpłatne.</span></li>
    <li><span style="color: #212529;">Oświadczenie o odstąpieniu od umowy o świadczenie usług drogą elektroniczną w zakresie usług wskazanych w &sect; 3 ust. 1 &ndash; 3 jest r&oacute;wnoznaczne z żądaniem jej natychmiastowego rozwiązania.</span></li>
    <li><span style="color: #212529;">Usługodawca może w każdym momencie rozwiązać umowę o świadczenie usług drogą elektroniczną wskazaną w &sect; 3 ust. 1 &ndash; 3&nbsp; w przypadku naruszenia przez Użytkownika regulaminu lub w przypadku konieczności wykonania prac serwisowych bądź podobnych.</span></li>
    <li><span style="color: #212529;">Zawarcie umowy o świadczenie usług drogą elektroniczną w zakresie usługi wskazanej w &sect; 3 ust. 3 wiąże się z obowiązkiem zapłaty po stronie Klienta. Wysokość wynagrodzenia za wykonanie usługi określona zostaje najp&oacute;źniej w chwili wyrażenia przez Klienta woli związania się umową na tę usługę.&nbsp;</span></li>
    <li><span style="color: #212529;">Zapłata wynagrodzenia, o kt&oacute;rym stanowi ust. 6 następuje z wykorzystaniem mechanizmu płatności tzw. szybkich przelew&oacute;w lub płatności kartą płatniczą (usługi płatnicze) dostarczanej przez profesjonalny podmiot.&nbsp;</span></li>
    <li><span style="color: #212529;">Za prawidłowe działanie usługi płatniczej odpowiada profesjonalny podmiot ją dostarczający.</span></li>
    <li><span style="color: #212529;">Przed zawarciem umowy o świadczenie usług drogą elektroniczną w zakresie Usługi wskazanej w &sect; 3 ust. 3 najp&oacute;źniej w chwili wyrażenia przez Klienta woli związania tą umową, Usługodawca informuje użytkownika w spos&oacute;b jasny i zrozumiały adekwatnie do art. 12 ustawy z dnia 30 maja 2014 r. o prawach konsumenta.</span></li>
    <li><span style="color: #212529;">Klient ma prawo w terminie 14 dni od zawarcia Umowy wskazanej w &sect; 3 ust. 3 odstąpić od niej bez podawania przyczyny i bez ponoszenia koszt&oacute;w, z zastrzeżeniem ust. 11. Dla wykonania tego uprawnienia wystarczające jest, by przed upływem terminu 14 dni Klient wysłał listownie lub mailowo Usługodawcy oświadczenie o odstąpieniu od danej umowy. Po otrzymaniu oświadczenia Klienta, Usługodawca niezwłocznie potwierdza, przynajmniej mailowo, otrzymanie tego oświadczenia o odstąpieniu od Umowy. Skuteczne odstąpienie od umowy skutkuje niezwłocznym obowiązkiem zwrotu przez usługodawcę zapłaconego wynagrodzenia, z zastrzeżeniem ust. 11.</span></li>
    <li><span style="color: #212529;">Klient traci prawo do odstąpienia od umowy w terminie 14 dni, o czym stanowi ust. 10, w przypadku, gdy usługa zostanie w pełni wykonana za wyraźną zgodą Klienta, kt&oacute;ry został poinformowany przed rozpoczęciem świadczenia, że po jego spełnieniu przez usługodawcę, użytkownik utraci prawo odstąpienia od umowy. W przypadku jednak, gdy usługa nie zostanie w pełni wykonana, a Klient w terminie 14 dni od dnia zawarcia Umowy złoży oświadczenie o odstąpieniu od umowy, to obowiązek zapłaty przez niego za spełnione przez Usługodawcę świadczenie dotyczy wykonanej części świadczenia (proporcjonalnie do wykonanej części usługi, z uwzględnieniem um&oacute;wionego wynagrodzenia). Ewentualna nadwyżka zostanie zwr&oacute;cona Klientowi niezwłocznie.</span></li>
    <li><span style="color: #212529;">Klient może także złożyć oświadczenie o wypowiedzeniu (rozwiązaniu) Umowy o świadczenie usług drogą elektroniczną w zakresie usługi wskazanej w &sect; 3 ust. 3, przy czym po jej zawarciu zastosowanie w takim przypadku znajdują og&oacute;lne zasady wynikające z przepis&oacute;w o zleceniu zawarte w Kodeksie cywilnym.</span></li>
    <li><span style="color: #212529;">Akceptując niniejszy regulamin Użytkownik wyraża zgodę na otrzymywanie faktur i rachunk&oacute;w drogą elektroniczną na podany przez Usługodawcę adres e-mail.</span></li>
    </ol>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 5.</span><span style="color: #212529;">Rejestracja w Serwisie</span></p>
    <ol>
    <li><span style="color: #212529;">Przeglądanie asortymentu Serwisu nie wymaga zakładania Konta. Składanie zam&oacute;wień przez Klienta na Usługi znajdujące się w asortymencie Serwisu możliwe jest albo po założeniu Konta zgodnie z postanowieniami niniejszego paragrafu, albo przez podanie niezbędnych danych osobowych i adresowych umożliwiających realizację Zam&oacute;wienia bez zakładania Konta.</span></li>
    <li><span style="color: #212529;">Korzystanie z pełnej funkcjonalności i Usług Serwisu wymaga rejestracji poprzez założenie Konta i akceptację niniejszego Regulaminu.</span></li>
    <li><span style="color: #212529;">Użytkownik, przed przystąpieniem do korzystania z Serwisu, zobowiązany jest do zapoznania się z Regulaminem.&nbsp;</span></li>
    <li><span style="color: #212529;">Rejestracja Konta oraz jego prowadzenie i korzystanie z Usług i funkcjonalności Serwisu są&nbsp; bezpłatne.</span></li>
    <li><span style="color: #212529;">Aby założyć Konto w Serwisie, należy wypełnić Formularz rejestracji, co wymaga podania następujących danych osobowych: imienia, nazwiska, numeru telefonu, adresu e-mail oraz potwierdzić zapoznanie się z treścią Regulaminu poprzez zaznaczenie odpowiedniego pola.</span></li>
    <li><span style="color: #212529;">Założenie Konta oraz zaznaczenie odpowiedniego pola jest r&oacute;wnoznaczne z zapoznaniem się z treścią Regulaminu i wyrażeniem zgody na jego treść.</span></li>
    <li><span style="color: #212529;">Logowanie się na Konto odbywa się poprzez podanie loginu i hasła ustanowionych w Formularzu rejestracji.</span></li>
    <li><span style="color: #212529;">Użytkownik akceptuje konieczność posiadania aktualnego, czynnego adresu poczty elektronicznej. Adres ten jest podawany bezpośrednio przy rejestracji. Użytkownik zobowiązany jest do bieżącego monitorowania podanego adresu poczty elektronicznej, a w przypadku jego zmiany, do niezwłocznego zaktualizowania tej informacji w swoim Koncie.</span></li>
    <li><span style="color: #212529;">Adres poczty elektronicznej jest powiązany z Kontem, stanowi konieczną formę identyfikacji Użytkownika wobec Administratora i będzie wykorzystywany do wszelkiej korespondencji związanej ze świadczeniem Usług.</span></li>
    <li><span style="color: #212529;">Użytkownik może mieć tylko jedno Konto w Serwisie.</span></li>
    </ol>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 6.</span><span style="color: #212529;">Zam&oacute;wienia na Usługi</span></p>
    <ol>
    <li><span style="color: #212529;">Klient może składać Zam&oacute;wienia na Usługi, o kt&oacute;rych mowa w &sect; 3 ust. 3 przez 7 (siedem) dni w tygodniu i 24 (dwadzieścia cztery) godziny na dobę za pośrednictwem strony internetowej&nbsp; https://www.competify.pl.</span></li>
    <li><span style="color: #212529;">Treści prezentowane na stronach Serwisu (takie jak: cenniki, reklamy, ogłoszenia) nie stanowią oferty w rozumieniu art. 66 oraz art. 661 kodeksu cywilnego, a jedynie zaproszenie do składania ofert.</span></li>
    <li><span style="color: #212529;">W celu zawarcia Umowy sprzedaży Usługi za pośrednictwem Serwisu należy wejść na stronę internetową&nbsp; https://www.competify.pl, dokonać wyboru Usługi, podejmując kolejne czynności techniczne w oparciu o wyświetlane Klientowi komunikaty oraz informacje dostępne na stronie internetowej.</span></li>
    <li><span style="color: #212529;">Wyb&oacute;r zamawianych Usług przez Klienta jest dokonywany poprzez ich dodanie do koszyka.</span></li>
    <li><span style="color: #212529;">W trakcie składania Zam&oacute;wienia &ndash; do momentu naciśnięcia przycisku &bdquo;Zł&oacute;ż zam&oacute;wienie&rdquo; &ndash; Klient ma możliwość modyfikacji wprowadzonych danych oraz w zakresie wyboru Usługi. W tym celu należy kierować się wyświetlanymi Klientowi komunikatami oraz informacjami dostępnymi na stronie.</span></li>
    <li><span style="color: #212529;">Aby sfinalizować zam&oacute;wienie, Klient jest proszony o podanie wszystkich niezbędnych danych, potrzebnych do zrealizowania zam&oacute;wienia tj. imienia, nazwiska, adresu e-mail, numeru telefonu.</span></li>
    <li><span style="color: #212529;">Klient ma możliwość wyboru następujących metod płatności:</span></li>
    <ol>
    <li><span style="color: #212529;">Płatność kartą kredytową i kartą debetową,</span></li>
    <li><span style="color: #212529;">Płatność online usługą BLIK lub Przelewy24 za pośrednictwem operatora PayU S.A. (</span><a href="https://poland.payu.com/" target="_blank" rel="noopener"><span style="color: #007bff;">www.PayU.pl</span></a><span style="color: #212529;">).</span></li>
    </ol>
    <li><span style="color: #212529;">Po podaniu przez Klienta korzystającego z Serwisu wszystkich niezbędnych danych, wyświetlone zostanie podsumowanie złożonego Zam&oacute;wienia. Podsumowanie złożonego Zam&oacute;wienia będzie zawierać informacje dotyczące:</span></li>
    </ol>
    <ol>
    <li><span style="color: #212529;">a) przedmiotu zam&oacute;wienia,</span></li>
    <li><span style="color: #212529;">b) jednostkowej oraz łącznej ceny zamawianych usług, oraz dodatkowych koszt&oacute;w (jeśli występują),</span></li>
    <li><span style="color: #212529;">c) wybranej metody płatności,</span></li>
    </ol>
    <ol>
    <li><span style="color: #212529;">W celu wysłania Zam&oacute;wienia konieczne jest dokonanie akceptacji treści Regulaminu, podanie danych osobowych oznaczonych jako obowiązkowe oraz naciśnięcie przycisku &bdquo;Zł&oacute;ż zam&oacute;wienie&rdquo;.</span></li>
    <li><span style="color: #212529;">Wysłanie przez Klienta Zam&oacute;wienia stanowi oświadczenie woli zawarcia Umowy sprzedaży Usługi, zgodnie z treścią Regulaminu.</span></li>
    <li><span style="color: #212529;">Po złożeniu i opłaceniu Zam&oacute;wienia, Klient otrzymuje wiadomość e-mail zatytułowaną &ldquo;Potwierdzenie zam&oacute;wienia&rdquo;, zawierającą ostateczne potwierdzenie wszystkich istotnych element&oacute;w Zam&oacute;wienia.</span></li>
    <li><span style="color: #212529;">Umowę traktuje się za zawartą z momentem otrzymania przez Klienta wiadomości e-mail, o kt&oacute;rej mowa powyżej.</span></li>
    <li><span style="color: #212529;">Umowa sprzedaży zawierana jest w języku polskim, o treści zgodnej z Regulaminem.</span></li>
    </ol>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 7.</span><span style="color: #212529;">Wymagania techniczne. Przerwa Techniczna</span></p>
    <ol>
    <li><span style="color: #212529;">Do korzystania z Serwisu, w tym przeglądania asortymentu Serwisu oraz składania zam&oacute;wień na Usługi, niezbędne są:</span></li>
    <ol>
    <li><span style="color: #212529;">posiadanie Urządzenia z dostępem do sieci Internet i przeglądarką internetową Google Chrome w wersji 108.0.5359.125&nbsp; lub nowszej,</span></li>
    <li><span style="color: #212529;">aktywacja konta w Systemie.</span></li>
    </ol>
    </ol>
    <ol>
    <li><span style="color: #212529;">Za wszelkie problemy wynikające ze stosowania Urządzeń lub system&oacute;w operacyjnych niespełniających wymog&oacute;w opisanych w niniejszym paragrafie, w szczeg&oacute;lności za spowodowane tym nieprawidłowe funkcjonowanie Serwisu, Usługodawca nie ponosi odpowiedzialności.&nbsp;</span></li>
    <li><span style="color: #212529;">Usługodawca dołoży wszelkich starań, aby dostęp za pośrednictwem Serwisu do danych z serwer&oacute;w Serwisu był możliwy przez 24 godziny na dobę i przez 7 dni w tygodniu, co nie wyłącza uprawnienia Usługodawcy do zarządzenia Przerwy Technicznej i czasowego ograniczenia bądź wyłączenie w całości lub w części powyższego dostępu.&nbsp;</span></li>
    <li><span style="color: #212529;">W przypadku potrzeby zarządzenia Przerwy Technicznej, Usługodawca poinformuje o przewidywanym terminie wystąpienia i trwania Przerwy Technicznej w komunikacie wyświetlanym bezpośrednio w Serwisie.&nbsp;&nbsp;</span></li>
    </ol>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 8.</span><span style="color: #212529;">Prawa i obowiązki Użytkownika</span></p>
    <ol>
    <li><span style="color: #212529;">Użytkownik zobowiązany jest do:</span></li>
    </ol>
    <ul>
    <li><span style="color: #212529;">korzystania z Serwisu w spos&oacute;b niezakł&oacute;cający jego funkcjonowania;</span></li>
    <li><span style="color: #212529;">korzystania z Serwisu w spos&oacute;b zgodny z przepisami prawa polskiego oraz postanowieniami Regulaminu;</span></li>
    <li><span style="color: #212529;">informowania Usługodawcy o wszelkich usterkach Serwisu;</span></li>
    <li><span style="color: #212529;">niepodejmowania pr&oacute;b złamania zabezpieczeń Usług Serwisu;</span></li>
    <li><span style="color: #212529;">niemodyfikowania i nieingerowania w jakimkolwiek stopniu w kod źr&oacute;dłowy oprogramowania Serwisu;</span></li>
    <li><span style="color: #212529;">nieingerowania w bazy danych dostępnych poprzez Serwis;</span></li>
    <li><span style="color: #212529;">niemodyfikowania w jakimkolwiek celu Usługi Serwisu, znak&oacute;w towarowych, opis&oacute;w oraz pozostałych danych i przedmiot&oacute;w praw własności intelektualnej zawartych na stronie internetowej Serwisu;</span></li>
    <li><span style="color: #212529;">niedostarczania i nieprzekazywania treści zabronionych w Serwisie, w szczeg&oacute;lności podczas lekcji, takich na przykład jak przedstawiających: treści pornograficzne, nagość, lub propagujące przemoc, nawołujące do nienawiści, obraźliwe lub naruszające prawo do prywatności; ponadto, komentarze, opinie, oceny i wiadomości Użytkownika nie mogą zawierać treści wulgarnych, obraźliwych, niezgodnych z prawem oraz z og&oacute;lnie przyjętymi normami społecznymi;</span></li>
    <li><span style="color: #212529;">korzystania z Usług oferowanych przez Usługodawcę w spos&oacute;b nieuciążliwy dla pozostałych Użytkownik&oacute;w, oraz dla Usługodawcy z poszanowaniem ich d&oacute;br osobistych i wszelkich przysługujących im praw;</span></li>
    <li><span style="color: #212529;">niepodejmowania jakichkolwiek działań mających na celu obejście zabezpieczeń, czy też zakł&oacute;cających stabilność i funkcjonalność autoryzowanych serwer&oacute;w lub oprogramowania Serwisu;</span></li>
    <li><span style="color: #212529;">korzystania z wszelkich treści zamieszczonych w ramach Serwisu jedynie w zakresie własnego użytku osobistego. Wykorzystywanie treści w innym zakresie jest dopuszczalne wyłącznie na podstawie wyraźnej zgody udzielonej przez osobę uprawnioną;</span></li>
    <li><span style="color: #212529;">niezamieszczania treści lub wypowiedzi mających charakter reklamy lub o charakterze komercyjnym, naruszających dobre obyczaje lub dobry wizerunek Usługodawcy lub Serwisu;</span></li>
    <li><span style="color: #212529;">nienawiązywania jakichkolwiek relacji prywatnych, biznesowych, intymnych lub sprzecznych z dobrymi obyczajami z innymi Użytkownikami za pośrednictwem lub przy wykorzystaniu Serwisu lub w ramach i w związku z korzystaniem z Serwisu.</span></li>
    <li><span style="color: #212529;">nienagrywania lub publikowania poszczeg&oacute;lnych spotkań z Dostawcami odbywanych w ramach świadczenia Usługi bez uprzedniej zgody Wynajmującego;</span></li>
    <li><span style="color: #212529;">wykorzystywania danych osobowych Dostawc&oacute;w w jakimkolwiek innym celu niż określony w Regulaminie.</span></li>
    </ul>
    <ol>
    <li><span style="color: #212529;">Użytkownik ma prawo do:</span></li>
    </ol>
    <ul>
    <li><span style="color: #212529;">nieprzerwanego dostępu do Serwisu, z zastrzeżeniem postanowień Regulaminu;</span></li>
    <li><span style="color: #212529;">dokonania oceny po skorzystaniu z danej Usługi w ramach korzystania z Serwisu;</span></li>
    <li><span style="color: #212529;">odstąpienia od zawartej Umowy w terminie 14 dni od daty jej zawarcia, z zastrzeżeniem postanowień Regulaminu;</span></li>
    </ul>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 9.</span><span style="color: #212529;">Prawa i obowiązki Usługodawcy</span></p>
    <ol>
    <li><span style="color: #212529;">Usługodawca zobowiązany jest do:</span></li>
    </ol>
    <ul>
    <li><span style="color: #212529;">zapewnienia dostępu do Serwisu w czasie wskazanym w Regulaminie, chyba że wystąpią przyczyny opisane w Regulaminie;</span></li>
    <li><span style="color: #212529;">wybrania Dostawc&oacute;w realizujących Usługi z zachowaniem należytej staranności. Usługodawca&nbsp; dokłada należytej staranności wynikającej z profesjonalnego charakteru jego działalności przy wyborze Dostawc&oacute;w.&nbsp;</span></li>
    </ul>
    <ol>
    <li><span style="color: #212529;">Usługodawca ma prawo do:</span></li>
    </ol>
    <ul>
    <li><span style="color: #212529;">przejściowego, kr&oacute;tkotrwałego zaprzestania utrzymywania Serwisu ze względu na czynności konserwacyjne lub związane z modyfikacją Serwisu albo ze względu na działanie siły wyższej;</span></li>
    <li><span style="color: #212529;">wysyłania na adres e-mail danego Użytkownika komunikat&oacute;w technicznych związanych z funkcjonowaniem Serwisu i realizacją Usługi oraz nowymi funkcjonalnościami w Serwisie;</span></li>
    <li><span style="color: #212529;">zablokowania Konta Użytkownikom, kt&oacute;rych działania lub zaniechania naruszają postanowienia powszechnie obowiązującego prawa lub postanowienia Regulaminu.</span></li>
    </ul>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 10.</span><span style="color: #212529;">Odpowiedzialność Usługodawcy</span></p>
    <ol>
    <li><span style="color: #212529;">Usługodawca nie ponosi odpowiedzialności za jakiekolwiek działania Użytkownika.</span></li>
    <li><span style="color: #212529;">Usługodawca nie ponosi odpowiedzialności za zmiany: w przebiegu, formie i zasadach oraz dostępności i kosztach uczestnictwa w konkursach;</span></li>
    <li><span style="color: #212529;">Umowa o świadczenie Usług ma charakter umowy starannego działania, w związku z czym Usługodawca nie odpowiada za rezultat założony przez Klienta np. uzyskanie pozytywnego wyniku z egzaminu.</span></li>
    <li><span style="color: #212529;">Usługodawca nie ponosi odpowiedzialności za zakł&oacute;cenia w tym przerwy w funkcjonowaniu Serwisu spowodowane force majeure, niedozwolonym działaniem os&oacute;b trzecich lub niekompatybilnością Serwisu internetowego z infrastrukturą techniczną Użytkownika.&nbsp;</span></li>
    <li><span style="color: #212529;">Usługodawca nie ponosi odpowiedzialności za problemy techniczne bądź ograniczenia techniczne w sprzęcie komputerowym lub mobilnym Użytkownika, kt&oacute;re uniemożliwiają mu korzystanie z Serwisu lub Usługi.</span></li>
    <li><span style="color: #212529;">Usługodawca nie ponosi odpowiedzialności za problemy techniczne bądź ograniczenia techniczne w sprzęcie komputerowym lub mobilnym Dostawcy.</span></li>
    <li><span style="color: #212529;">Usługodawca nie ponosi odpowiedzialności z tytułu naruszenia praw os&oacute;b trzecich oraz wyrządzenia osobom trzecim szkody na skutek lub w związku z działaniami prowadzonymi przez Użytkownika, w szczeg&oacute;lności w przypadku naruszenia przez Użytkownik&oacute;w praw autorskich i innych praw własności intelektualnej przysługujących osobom trzecim.&nbsp;</span></li>
    </ol>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 11.</span><span style="color: #212529;">Kontakt z Serwisem</span></p>
    <ol>
    <li><span style="color: #212529;">Adres Usługodawcy:&nbsp; </span><span style="color: #444746;">Tadeusza Kościuszki 30A, 32-005 Niepołomice</span></li>
    <li><span style="color: #212529;">Adres e-mail Usługodawcy: </span><span style="color: #0b57d0;">kontakt@competify.pl</span></li>
    <li><span style="color: #212529;">Numer telefonu Usługodawcy: +44 7580911454 lub +48 510245570</span></li>
    <li><span style="color: #212529;">Numer rachunku bankowego Usługodawcy: </span><span style="color: #444746;">37 1050 1445 1000 0090 8252 1726</span></li>
    <li><span style="color: #212529;">Klient może porozumiewać się z Usługodawcą za pomocą adres&oacute;w i numer&oacute;w telefon&oacute;w podanych w niniejszym paragrafie.</span></li>
    <li><span style="color: #212529;">Klient może porozumieć się telefonicznie z Usługodawcą w dni robocze w godzinach 9:00 &ndash; 17:00.</span></li>
    </ol>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 12.</span><span style="color: #212529;">Własność intelektualna</span></p>
    <ol>
    <li><span style="color: #212529;">Usługodawcy przysługuje całość praw autorskich i majątkowych do wszelkich utwor&oacute;w znajdujących się w Serwisie, w tym m.in. do materiał&oacute;w dostępnych w Serwisie.</span></li>
    <li><span style="color: #212529;">Wszelkie kopiowanie, dystrybucja i inny użytek treści zawartych w Serwisie bez uprzedniej pisemnej zgody Usługodawcy jest zabronione.</span></li>
    </ol>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 13.</span><span style="color: #212529;">Reklamacje</span></p>
    <ol>
    <li><span style="color: #212529;">Użytkownik uprawniony jest do złożenia reklamacji związanej ze świadczeniem Usługi przez Usługodawcę. Reklamacja może zostać złożona pisemnie pod adresem: </span>Competify Adam Duda Jakub Kalbarczyk sp&oacute;łka cywilna, ul.<span style="color: #232332;"> Tadeusza Kościuszki 30/A, 32-005 Niepołomice</span><span style="color: #212529;"> , lub drogą elektroniczną na adres e-mail: kontakt@competify.pl</span></li>
    </ol>
    <ol>
    <li><span style="color: #212529;">Zgłoszenie reklamacyjne powinno zawierać dane Użytkownika oraz opis zgłaszanych zastrzeżeń.</span></li>
    <li><span style="color: #212529;">Usługodawca najp&oacute;źniej w terminie 30 dni od daty otrzymania reklamacji ustosunkuje się do złożonej reklamacji i poinformuje Użytkownika o dalszym postępowaniu. W przypadku, gdy reklamacja będzie uzasadniona, Usługodawca poinformuje Użytkownika o proponowanym sposobie realizacji reklamacji. W przypadku stwierdzenia przez Usługodawcę konieczności uzupełniania reklamacji przez Użytkownika Usługodawca niezwłocznie skontaktuje się z Użytkownikiem.</span></li>
    <li><span style="color: #212529;">Jeżeli reklamacja zostanie odrzucona, Użytkownik może zwr&oacute;cić się do miejskiego lub powiatowego rzecznika konsument&oacute;w. Bezpłatne informacje udzielane są telefonicznie, pocztą elektroniczną bądź bezpośrednio w biurze rzecznika. Adres i telefon odpowiedniego rzecznika można znaleźć w Starostwie Powiatowym lub Urzędzie Miasta, a także na stronie internetowej Urzędu Ochrony Konkurencji i Konsument&oacute;w.</span></li>
    </ol>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 14.</span><span style="color: #212529;">Pozasądowe sposoby rozpatrywania reklamacji i dochodzenia roszczeń</span></p>
    <ol>
    <li><span style="color: #212529;">Szczeg&oacute;łowe informacje dotyczące możliwości skorzystania przez Konsumenta z&nbsp; pozasądowych sposob&oacute;w rozpatrywania reklamacji i dochodzenia roszczeń oraz zasady dostępu do tych procedur dostępne są w siedzibach oraz na stronach internetowych powiatowych (miejskich) rzecznik&oacute;w konsument&oacute;w, organizacji społecznych, do kt&oacute;rych zadań statutowych należy ochrona konsument&oacute;w, Wojew&oacute;dzkich Inspektorat&oacute;w Inspekcji Handlowej oraz pod następującymi adresami internetowymi Urzędu Ochrony Konkurencji i Konsument&oacute;w: http://www.uokik.gov.pl/spory_konsumenckie.php; http://www.uokik.gov.pl/sprawy_indywidualne.php http://www.uokik.gov.pl/wazne_adresy.php.</span></li>
    <li><span style="color: #212529;">Konsument posiada następujące przykładowe możliwości skorzystania z pozasądowych sposob&oacute;w rozpatrywania reklamacji i dochodzenia roszczeń:</span></li>
    <li><span style="color: #212529;">Konsument uprawniony jest do zwr&oacute;cenia się do stałego polubownego sądu konsumenckiego, o kt&oacute;rym mowa w art. 37 ustawy z dnia 15 grudnia 2000 r. o Inspekcji Handlowej, z wnioskiem o rozstrzygnięcie sporu wynikłego z Umowy.</span></li>
    <li><span style="color: #212529;">Konsument uprawniony jest do zwr&oacute;cenia się do wojew&oacute;dzkiego inspektora Inspekcji Handlowej, zgodnie z art. 36 ustawy z dnia 15 grudnia 2000 r. o Inspekcji Handlowej, z wnioskiem o wszczęcie postępowania mediacyjnego w sprawie polubownego zakończenia sporu między Konsumentem a Wynajmującym,&nbsp;</span></li>
    <li><span style="color: #212529;">Konsument może uzyskać bezpłatną pomoc w sprawie rozstrzygnięcia sporu między nim a Wynajmującym, korzystając także z bezpłatnej pomocy powiatowego (miejskiego) rzecznika konsument&oacute;w lub organizacji społecznej, do kt&oacute;rej zadań statutowych należy ochrona konsument&oacute;w (m.in. Federacja Konsument&oacute;w, Stowarzyszenie Konsument&oacute;w Polskich),&nbsp;</span></li>
    <li><span style="color: #212529;">Konsument może wystąpić na drogę postępowania sądowego, zgodnie z przepisami Kodeksu Cywilnego i Kodeksu Postępowania Cywilnego.&nbsp;</span></li>
    </ol>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 15.</span><span style="color: #212529;">Dane osobowe w Serwisie internetowym</span></p>
    <ol>
    <li><span style="color: #212529;">Zgodnie z art. 13 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z 27.04.2016 r. w sprawie ochrony os&oacute;b fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia Dyrektywy 95/46/WE&nbsp; (og&oacute;lne rozporządzenie o ochronie danych) (Dz. Urz. UE L 119, s.&nbsp; 1) &ndash; dalej RODO &ndash; Wynajmujący informuje, iż:</span></li>
    <li><span style="color: #212529;">Administratorem danych osobowych jest </span><span style="color: #444746;">Competify Adam Duda Jakub Kalbarczyk sp&oacute;łka cywilna</span><span style="color: #212529;">.</span></li>
    <li><span style="color: #212529;">W przypadku jakichkolwiek pytań dotyczących danych osobowych lub wykonywania praw w zakresie podmiotu danych, prosimy o informację na adres email:kontakt@competify.pl</span></li>
    <li><span style="color: #212529;">Szczeg&oacute;łowe informacje na temat przetwarzania danych znajdują się w Załączniku nr 1.</span></li>
    </ol>
    <p style="text-align: center;"><span style="color: #212529;">&sect; 16.</span><span style="color: #212529;">Postanowienia końcowe</span></p>
    <ol>
    <li><span style="color: #212529;">Niniejszy Regulamin obowiązuje bezterminowo.</span></li>
    <li><span style="color: #212529;">Umowy zawierane poprzez Serwis&nbsp; zawierane są w języku polskim.</span></li>
    <li><span style="color: #212529;">Usługodawca zastrzega sobie prawo do dokonywania zmian Regulaminu z ważnych przyczyn to jest: zmiany przepis&oacute;w prawa, zmiany sposob&oacute;w płatności i dostaw &ndash; w zakresie, w jakim te zmiany wpływają na realizację postanowień niniejszego Regulaminu. O każdej zmianie Usługodawca poinformuje Klienta z co najmniej 7 dniowym wyprzedzeniem.</span></li>
    <li><span style="color: #212529;">W sprawach nieuregulowanych w niniejszym Regulaminie mają zastosowanie powszechnie obowiązujące przepisy prawa polskiego, w szczeg&oacute;lności: Kodeksu cywilnego; ustawy o świadczeniu usług drogą elektroniczną; ustawy o prawach konsumenta, ustawy o ochronie danych osobowych.&nbsp;</span></li>
    <li><span style="color: #212529;">Klient ma prawo skorzystać z pozasądowych sposob&oacute;w rozpatrywania reklamacji i dochodzenia roszczeń. W tym celu może złożyć skargę za pośrednictwem unijnej platformy internetowej ODR dostępnej pod adresem: </span><a href="http://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener"><span style="color: #007bff;">http://ec.europa.eu/consumers/odr/</span></a><span style="color: #212529;">.</span></li>
    <li><span style="color: #212529;">Załączniki do Regulaminu stanowią integralną jego część.</span></li>
    </ol>
    <p><span style="color: #212529;">Załącznik 1: Polityka prywatności&nbsp;</span></p>
    <p><span style="color: #212529;">Dostępna pod adresem: </span><a href="https://www.competify.pl/privacy-policy" target="_blank" rel="noopener">https://www.competify.pl/privacy-policy</a></p>
    <p><span style="color: #212529;">Załącznik 2: Wz&oacute;r odstąpienia od umowy</span></p>
    <p><span style="color: #212529;">Wz&oacute;r odstąpienia od umowy zawartej na odległość</span></p>
    <p><span style="color: #212529;">Miejscowość, data</span></p>
    <p><span style="color: #212529;">&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</span></p>
    <p><span style="color: #212529;">&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</span></p>
    <p><span style="color: #212529;">&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</span></p>
    <p><span style="color: #212529;">&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</span></p>
    <p><span style="color: #212529;">Imię i nazwisko konsumenta</span></p>
    <p><span style="color: #212529;">Adres konsumenta</span></p>
    <p><span style="color: #212529;">Niniejszym informuję o moim odstąpieniu od umowy sprzedaży następujących usług &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;..&hellip;&hellip;</span></p>
    <p><span style="color: #212529;">Data zawarcia umowy&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;..&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;.&nbsp;</span></p>
    <p><span style="color: #212529;">&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip;</span></p>
    <p><span style="color: #212529;">Podpis konsumenta</span></p>
    <h2 style="text-align: center;">Załącznik 1: Polityka prywatności</h2>
    <h4 style="text-align: center;">&sect; 1</h4>
    <h4 style="text-align: center;">Administrator danych osobowych</h4>
    <p><span style="color: #212529;">Administratorem danych osobowych jest </span><span style="color: #333333;">Competify Adam Duda, Jakub Kalbarczyk sp&oacute;łka cywilna</span></p>
    <h4 style="text-align: center;">&sect; 2</h4>
    <h4 style="text-align: center;">Cele i podstawy przetwarzania danych</h4>
    <p><span style="color: #212529;">Wszelkie dane osobowe przetwarzane są przede wszystkim w celu nawiązania wsp&oacute;łpracy i realizacji podstanowień zawieranej umowy z Dostawcą oraz korzystania z aplikacji. Możemy przetwarzać dane osobowe, jeżeli jest to niezbędne dla cel&oacute;w wynikających z prawnie uzasadnionych interes&oacute;w, czyli np. na potrzeby marketingu usług i produkt&oacute;w własnych. Przetwarzamy tylko dane niezbędne do przeprowadzeniu procesu rejestracji i korzystania z aplikacji, nigdy nie żądamy podawania danych wrażliwych. Niekt&oacute;re dane przetwarzamy także wtedy, gdy obligują nas do tego przepisy prawa, np. w celach rachunkowych, czy podatkowych.&nbsp;</span></p>
    <h4 style="text-align: center;">&sect; 3</h4>
    <h4 style="text-align: center;">Okres przechowywania danych</h4>
    <p><span style="color: #212529;">Wszelkie dane przechowujemy w okresie posiadania konta Dostawcy w &hellip;&hellip;&hellip;&hellip;&hellip;&hellip;&hellip; Dane te mogą być przechowywane dłużej wtedy, gdy przepisy szczeg&oacute;lne nas do tego zobowiązują. W sytuacji, gdy podstawą przetwarzania danych osobowych jest udzielona zgoda, dane te przechowywane są do czasu cofnięcia tej zgody. Jeżeli Dostawca nie posiada aktywnego konta, w&oacute;wczas dane są przetwarzane przez czas niezbędny do realizacji procesu rekrutacyjnego, z zastrzeżeniem obowiązk&oacute;w nałożonych na nas przepisami prawa.&nbsp;</span></p>
    <h4 style="text-align: center;">&sect; 4</h4>
    <h4 style="text-align: center;">Udostępnianie danych osobowych osobom trzecim</h4>
    <p><span style="color: #212529;">Nie udostępniamy danych osobowych osobom trzecim, w szczeg&oacute;lności nie handlujemy tymi danymi. Możemy przekazywać dane osobowe Dostawcy bez jego zgody podmiotom trzecim jedynie w zakresie niezbędnym, tj. m.in. dla cel&oacute;w obsługi rachunkowej, czy usług związanych z obsługą i utrzymaniem serwisu.</span></p>
    <h4 style="text-align: center;">&sect; 5</h4>
    <h4 style="text-align: center;">Pliki cookies</h4>
    <p><span style="color: #212529;">Witryna nie zbiera w spos&oacute;b automatyczny żadnych informacji, z wyjątkiem informacji zawartych w plikach cookies.</span></p>
    <p><span style="color: #212529;">W ramach serwisu stosowane są dwa zasadnicze rodzaje plik&oacute;w cookies: &ldquo;sesyjne&rdquo; (session cookies) oraz &ldquo;stałe&rdquo; (persistent cookies). Cookies &ldquo;sesyjne&rdquo; są plikami tymczasowymi, kt&oacute;re przechowywane są w urządzeniu końcowym użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). &ldquo;Stałe&rdquo; pliki cookies przechowywane są w urządzeniu końcowym użytkownika przez czas określony w parametrach plik&oacute;w cookies lub do czasu ich usunięcia przez użytkownika.</span></p>
    <p><span style="color: #212529;">Dane uzyskiwane przez nas dzięki plikom cookie nie są przypisywane do konkretnej osoby.</span></p>
    <p><span style="color: #212529;">Dane zbierane automatycznie mogą być użyte:</span></p>
    <p><span style="color: #212529;">&ndash; do analizy zachowań użytkownik&oacute;w na serwisach lub też do zbierania danych demograficznych o naszych użytkownikach (za pomocą narzędzia Google Analytics),</span></p>
    <p><span style="color: #212529;">&ndash; do tworzenia statystyk, kt&oacute;re pomagają zrozumieć, w jaki spos&oacute;b Użytkownicy witryny korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;</span></p>
    <p><span style="color: #212529;">&ndash; do utrzymania sesji Użytkownika Serwisu (po zalogowaniu), dzięki kt&oacute;rej Użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</span></p>
    <p><span style="color: #212529;">Korzystamy z Google Analytics, usługi tworzenia statystyki stron internetowych świadczonej przez Google, dzięki kt&oacute;rej pliki cookie zostają zamieszczone na Państwa urządzeniu. Informacja wytworzona przez plik cookie, dotycząca korzystania przez Państwa z Serwisu (w tym Państwa adres IP, kt&oacute;ry znajduje się tam, gdzie Państwo znajdują się w Internecie) będzie przekazana i przechowywana przez Google na serwerach w Stanach Zjednoczonych. Google będzie wykorzystywał te informacje w celu oceny korzystania przez Państwa z Serwisu, zestawiania raport&oacute;w z działalności prowadzonej na witrynie dla operator&oacute;w witryny oraz świadczenia innych usług dotyczących działalności na witrynie i korzystania z Internetu. Google może r&oacute;wnież przesyłać takie informacje podmiotom zewnętrznym, jeżeli wymagają tego przepisy prawa lub w przypadku, gdy podmioty zewnętrzne przetwarzają je w imieniu Google. Google nie będzie kojarzył Państwa adresu IP z innymi danymi znajdującymi się w posiadaniu Google. W celu uzyskania dalszych informacji o Google Analytics, prosimy zapoznać się z informacjami na temat Cookies and Analytics, oraz Polityką Zachowania Poufności danych dla Google Analytics dotyczącej Google Analytics. Mogą Państwo wybrać także opcję rezygnacji z zamieszczenia w/w plik&oacute;w na Państwa urządzeniu pod adresem Google Analytics Opt-out.</span></p>
    <p><span style="color: #212529;">Korzystamy z technologii DoubleClick, kt&oacute;ra wyświetla bannery na r&oacute;żnych stronach internetowych, zbiera informacje o użytkownikach odwiedzających te strony, w celu dokładniejszego dopasowania wyświetlanych reklam do profilu użytkownika. Pliki te mają pom&oacute;c w świadczeniu usług docierania do konkretnych kategorii odbiorc&oacute;w na rzecz wydawc&oacute;w i reklamodawc&oacute;w. DoubleClick korzysta z plik&oacute;w cookie, by pokazywać trafniejsze reklamy. Niekt&oacute;re typowe zastosowania to wyświetlanie reklam zgodnie z zainteresowaniami użytkownika, poprawa raport&oacute;w o skuteczności kampanii oraz pomijanie reklam, kt&oacute;re użytkownik już widział. Pliki cookie DoubleClick nie zawierają informacji umożliwiających identyfikację konkretnej osoby. Czasami taki plik zawiera dodatkowy identyfikator podobny do identyfikatora pliku cookie. Wskazuje on kampanię reklamową, kt&oacute;rej odbiorcą był użytkownik. DoubleClick nie zapisuje jednak w pliku cookie żadnych informacji umożliwiających identyfikację.</span></p>
    <p><span style="color: #212529;">Użytkownicy mogą zrezygnować z wykorzystywania plik&oacute;w cookie innych firm do wyświetlania reklam opartych na zainteresowaniach. Należy w takiej sytuacji odwiedzić stronę aboutads.info</span></p>
    <p><span style="color: #212529;">Użytkownik witryny może samodzielnie wyłączyć pliki cookies poprzez zmianę ustawień w swojej przeglądarce internetowej:</span></p>
    <p><span style="color: #212529;">Blokowanie plik&oacute;w cookies w przeglądarce Mozilla Firefox: W menu &ldquo;Narzędzia&rdquo; należy wybrać &ldquo;Opcje&rdquo; i w nich zakładkę &ldquo;Prywatność&rdquo;. Przeglądarka daje możliwość wyłączenia śledzenia użytkownika w og&oacute;le albo usunięcia pojedynczych ciasteczek poszczeg&oacute;lnych witryn</span></p>
    <p><span style="color: #212529;">Blokowanie plik&oacute;w cookies w przeglądarce Internet Explorer: W menu &ldquo;Narzędzia&rdquo; należy wybrać &ldquo;Opcje internetowe&rdquo; i w nich zakładkę &ldquo;Prywatność&rdquo;. Specjalnym suwakiem można regulować og&oacute;lny poziom prywatności albo przyciskiem &ldquo;Witryny&rdquo; zarządzać ustawieniami poszczeg&oacute;lnych serwis&oacute;w internetowych.</span></p>
    <p><span style="color: #212529;">Blokowanie plik&oacute;w cookies w przeglądarce Opera: Przyciskiem &ldquo;Opera&rdquo; w lewym g&oacute;rnym rogu należy otworzyć menu i wybrać w nim &ldquo;Ustawienia&rdquo; i dalej &ldquo;Wyczyść historię przeglądania&hellip;&rdquo;.</span></p>
    <p><span style="color: #212529;">Opr&oacute;cz możliwości skasowania już ustawionych plik&oacute;w cookies, jest tam też przycisk &ldquo;Zarządzaj ciasteczkami&hellip;&rdquo; prowadzący do bardziej zaawansowanych opcji dla poszczeg&oacute;lnych witryn.</span></p>
    <p><span style="color: #212529;">Blokowanie plik&oacute;w cookies w przeglądarce Chrome: W menu ukrytym pod trzema poziomymi kreseczkami w prawym g&oacute;rnym rogu przeglądarki należy wybrać &ldquo;Narzędzia&rdquo; a następnie &ldquo;Wyczyść dane przeglądania&hellip;&rdquo;. Opr&oacute;cz możliwości czyszczenia plik&oacute;w cookies, znajduje się tam link &ldquo;Więcej informacji&rdquo;, kt&oacute;ry prowadzi do szczeg&oacute;łowego opisu funkcji prywatności przeglądarki.</span></p>
    <p><span style="color: #212529;">Blokowanie plik&oacute;w cookies w przeglądarce Safari: W menu &ldquo;Safari&rdquo; należy wybrać &ldquo;Preferencje&rdquo; i w nich zakładkę &ldquo;Prywatność&rdquo;. Znajdują się tam liczne opcje dotyczące plik&oacute;w cookies</span></p>
    <p><span style="color: #212529;">Blokowanie plik&oacute;w cookies w telefonach kom&oacute;rkowych, tabletach i innych urządzeniach mobilnych: Każdy model telefonu może tę funkcję obsługiwać w inny spos&oacute;b. Dlatego zachęcamy do zapoznania się z opcjami prywatności w dokumentacji na stronie internetowej producenta danego urządzenia mobilnego.</span></p>
    <p><span style="color: #212529;">Informujemy, że brak akceptacji niekt&oacute;rych plik&oacute;w cookies może uniemożliwić poprawne działanie serwisu w pełnym zakresie.</span></p>
    <h4 style="text-align: center;">&sect; 6</h4>
    <h4 style="text-align: center;">Uprawnienia użytkownika</h4>
    <p><span style="color: #212529;">W każdej chwili Dostawca może żądać, aby jego dane osobowe zostały usunięte z bazy administratora. Dostawca może także w każdym czasie cofnąć udzielone zgody na przetwarzanie swoich danych, przy czym cofnięcie udzielonych zg&oacute;d r&oacute;wnoważne jest z zakończeniem wsp&oacute;łpracy z </span><span style="color: #333333;">Competify Adam Duda, Jakub Kalbarczyk sp&oacute;łka cywilna</span><span style="color: #212529;">. W przypadku, gdy przetwarzane dane są niezgodne z rzeczywistością bądź niekompletne, dostawcy przysługuje uprawnienie do żądania ich sprostowania lub uzupełnienia. W każdej chwili dostawca może zwr&oacute;cić się o przekazanie mu wszystkich jego danych przetwarzanych przez administratora. Dostawcy przysługuje prawo do wniesienia sprzeciwu co do przetwarzania jego danych osobowych. Sprzeciw wnosi się do organu nadzoru, kt&oacute;rym jest Prezes Urzędu Ochrony Danych Osobowych.</span></p>
    <p><span style="color: #212529;">W przypadku, gdy przetwarzanie danych odbywa się tylko na podstawie zgody, Dostawca ma prawo do cofnięcia zgody na przetwarzanie danych osobowych w dowolnym momencie. Cofnięcie zgody nie wpływa na zgodność z prawem przetwarzania, kt&oacute;rego dokonano na podstawie zgody przed jej cofnięciem. W celu wykonania powyższych praw mogą Państwo skontaktować się z Administratorem.</span></p>`;

    return (
        <Container ClassNames="my-10" Id="Terms">
            <div dangerouslySetInnerHTML={{ __html: HTML }} />
        </Container>
    );
};

export default Page;