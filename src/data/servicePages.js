export const servicePages = [
  {
    slug: 'strony-dla-pensjonatow',
    path: '/strony-dla-pensjonatow',
    title: 'Strony www i Booking Engine dla pensjonatów. Zdobądź więcej rezerwacji bezpośrednich',
    metaTitle: 'Strony www i Booking Engine dla pensjonatów | BroSystems',
    metaDescription:
      'Projektowanie stron dla pensjonatów z naciskiem na prostą ścieżkę kontaktu, widoczność w Google i większą liczbę rezerwacji z własnej strony.',
    intro:
      'Ta usługa jest dla pensjonatów, które chcą przestać opierać sprzedaż wyłącznie na Booking.com i potrzebują strony, która lepiej prezentuje pokoje, lokalizację i standard obiektu.',
    audience: 'Właściciele pensjonatów w miejscowościach turystycznych, którzy chcą mieć profesjonalną stronę, lepszy kontakt na telefonie i większą widoczność na swoją miejscowość.',
    painPoints: [
      'obecna strona nie pokazuje dobrze pokoi, cen i atutów lokalizacji',
      'goście wolą zadzwonić albo uciekają na inne portale, bo ścieżka rezerwacji jest nieczytelna',
      'brakuje osobnych podstron pod pokoje i ważne zapytania lokalne'
    ],
    deliverables: [
      'strona główna z jasną obietnicą wartości i sekcją szybkiego kontaktu',
      'podstrony dla pokoi, apartamentów lub typów pobytu',
      'galeria, mapa, atrakcje w okolicy i sekcje budujące zaufanie',
      'CTA pod rezerwację bezpośrednią lub kontakt mobilny',
      'fundament pod lepszą widoczność w Google'
    ],
    outcomes: [
      'więcej zapytań z własnej strony',
      'lepszy odbiór obiektu na telefonie',
      'większa szansa na wejścia z Google na frazy lokalne'
    ],
    relatedPosts: [
      '/blog/strona-www-dla-pensjonatu-w-zakopanem-3-bledy-przez-ktore-tracisz-gosci-z-google',
      '/blog/nowoczesna-strona-i-system-rezerwacji-dla-pensjonatu-w-szczyrku-standard-na-2026-rok'
    ]
  },
  {
    slug: 'strony-dla-apartamentow',
    path: '/strony-dla-apartamentow',
    title: 'Strony www i Booking Engine dla apartamentów premium. Design i wysoka konwersja',
    metaTitle: 'Strony i Booking Engine dla apartamentów | BroSystems',
    metaDescription:
      'Nowoczesne strony dla apartamentów i obiektów premium. Szybkie wdrożenia, lepsza konwersja mobilna i mocniejsza widoczność na lokalne zapytania.',
    intro:
      'Apartamenty i obiekty premium potrzebują strony, która sprzedaje standard, lokalizację i wygodę pobytu już w pierwszych sekundach. Tutaj liczy się szybkość działania, jakość zdjęć i czytelna droga do kontaktu albo rezerwacji.',
    audience: 'Właściciele apartamentów, małych aparthoteli i obiektów premium, którzy chcą lepiej wykorzystać ruch mobilny oraz budować markę obiektu na własnej stronie.',
    painPoints: [
      'obiekt wygląda dobrze na zdjęciach, ale strona nie oddaje tego premium odbioru',
      'użytkownik mobilny gubi się między galerią, opisem i kontaktem',
      'brakuje wersji angielskiej lub logicznej struktury pod zagranicznego gościa'
    ],
    deliverables: [
      'indywidualny układ premium dopasowany do stylu obiektu',
      'sekcje prezentujące apartamenty, udogodnienia i lokalizację',
      'mocniejsza ścieżka kontaktu i rezerwacji na telefonie',
      'możliwość przygotowania wersji dwujęzycznej',
      'architektura wspierająca rozwój treści i dalszą widoczność'
    ],
    outcomes: [
      'bardziej premium odbiór marki obiektu',
      'większa skuteczność ruchu mobilnego',
      'lepsza baza pod sezonowe kampanie i content lokalny'
    ],
    relatedPosts: [
      '/blog/skuteczna-reklama-apartamentow-w-szczyrku-wlasna-strona-kontra-booking',
      '/blog/overbooking-w-sezonie-narciarskim-jak-zsynchronizowac-kalendarz-z-airbnb-i-booking'
    ]
  },
  {
    slug: 'wdrozenia-hotres',
    path: '/wdrozenia-hotres',
    title: 'Wdrożenia Hotres i systemów rezerwacji. Zdobądź więcej zamówień z własnej strony',
    metaTitle: 'Wdrożenia Hotres | Booking Engine i system rezerwacji | BroSystems',
    metaDescription:
      'Integracja Hotres i systemów rezerwacji z Twoją stroną. Lepsza ścieżka rezerwacji, mniej tarcia i większy udział rezerwacji bezpośrednich.',
    intro:
      'Sam widget rezerwacji nie załatwia sprawy. Żeby Hotres albo inny booking engine realnie pracował na wynik, trzeba dobrze osadzić go w całej ścieżce użytkownika: od strony głównej, przez ofertę, aż po kontakt i płatność.',
    audience: 'Pensjonaty, wille, apartamenty i domki, które mają już system rezerwacji albo chcą go wdrożyć bez tworzenia kolejnego martwego przycisku.',
    painPoints: [
      'system rezerwacji jest, ale użytkownik go nie używa',
      'brakuje logicznych CTA prowadzących do sprawdzenia terminu',
      'właściciel nadal odbiera za dużo telefonów i ręcznie potwierdza pobyty'
    ],
    deliverables: [
      'wdrożenie Hotres lub innego booking engine w strukturę strony',
      'przyciski i CTA prowadzące do sprawdzenia dostępności',
      'integracja z płatnościami online, jeśli scenariusz tego wymaga',
      'lepszy układ pod mobile i mniejszą liczbę porzuceń',
      'przygotowanie strony pod dalszą rozbudowę o channel manager lub automatyzacje'
    ],
    outcomes: [
      'więcej rezerwacji bezpośrednich z własnej strony',
      'mniej ręcznej obsługi i mniej telefonów o wolne terminy',
      'czytelniejsza droga od wejścia z Google do rezerwacji'
    ],
    relatedPosts: [
      '/blog/system-rezerwacji-dla-domkow-w-tatrach-jak-automatycznie-przyjmowac-zadatki',
      '/blog/overbooking-w-sezonie-narciarskim-jak-zsynchronizowac-kalendarz-z-airbnb-i-booking'
    ]
  }
];

export const servicePageMap = Object.fromEntries(servicePages.map((page) => [page.slug, page]));
