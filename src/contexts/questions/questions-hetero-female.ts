import type { Question } from '@/types/survey';

export const questionsHeteroFemale: Question[] = [
  { 
    id: 'pos-f1', 
    text: 'Pozycja Amazonki',
    description: "Czy lubisz być na górze i kontrolować rytm podczas stosunku? Ta pozycja daje Ci pełną kontrolę nad tempem i głębokością, pozwalając na stymulację najwrażliwszych miejsc.",
    illustration: '/lovable-uploads/pozycja-amazonki.png',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'pos-f2', 
    text: 'Pozycja misjonarska',
    description: "Pozycja klasyczna, z mężczyzną na górze - ceniona za bliskość i intymność. Umożliwia głęboki kontakt wzrokowy i pocałunki, budując więź podczas stosunku.",
    illustration: '/lovable-uploads/missionary.png',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'pos-f3', 
    text: 'Pozycja "na pieska"',
    description: "Pozycja od tyłu, która pozwala na głębszą penetrację. Daje partnerowi dostęp do Twojego punktu G i umożliwia stymulację łechtaczki ręką dla dodatkowej przyjemności.",
    illustration: '/lovable-uploads/doggy.png',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore', 'exceed'] 
    }
  },
  { 
    id: 'pos-f6', 
    text: 'Pozycja "na królową"',
    description: "Leżysz na plecach z uniesionymi biodrami, partner klęczy. Ta pozycja pozwala na głęboką penetrację przy jednoczesnym kontakcie wzrokowym i możliwości pieszczot.",
    illustration: '/lovable-uploads/krolowa.png',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'pos-f7', 
    text: 'Pozycja "jeździec"',
    description: "Siedzisz na partnerze twarzą do jego twarzy. Daje to możliwość przytulania się i całowania, przy jednoczesnej stymulacji łechtaczki przez tarcie o jego ciało.",
    illustration: '/lovable-uploads/riding.png',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'pos-f8', 
    text: 'Pozycja "odwrócona amazońska"',
    description: "Siedzisz na partnerze tyłem do jego twarzy. Ta pozycja oferuje intensywną stymulację punktu G i pozwala Ci kontrolować tempo, jednocześnie dając mu fascynujący widok.",
    illustration: '/lovable-uploads/odwrocona.png',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'pos-f9', 
    text: 'Pozycja "leniwego pieska"',
    description: "Leżysz płasko na brzuchu, a partner wchodzi od tyłu. Idealny wybór, gdy chcecie połączyć odpoczynek z przyjemnością, oferując głęboką penetrację przy minimalnym wysiłku.",
    illustration: '/lovable-uploads/leniwa.png',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'pos-f12', 
    text: 'Pozycja "kruka" (69)',
    description: "Pozycja, w której oboje jednocześnie sprawiacie sobie przyjemność oralnie. Fantastyczny sposób, by dawać i otrzymywać przyjemność w tym samym czasie.",
    illustration: '/lovable-uploads/69.png',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore'] 
    }
  },
  { 
    id: 'pos-f13', 
    text: 'Pozycja "lotus"',
    description: "Partner siedzi ze skrzyżowanymi nogami, a Ty siadasz na nim, oplatając go nogami. Ta intymna pozycja sprzyja głębokiemu połączeniu duchowemu i fizycznemu.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore', 'exceed'] 
    }
  },
  { 
    id: 'pos-f14', 
    text: 'Pozycja "łyżeczki"',
    description: "Oboje leżycie na boku, partner za Tobą. Przyjemna, delikatna pozycja, idealna na romantyczne chwile, pozwalająca na obejmowanie i intymną bliskość.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'pos-f15', 
    text: 'Pozycja "mostek"',
    description: "Opierasz się na rękach i nogach tworząc łuk, a partner klęka między Twoimi nogami. Wymagająca pozycja oferująca intensywne doznania i możliwość głębokiej penetracji.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'rol-f1', 
    text: 'Nauczycielka i student',
    description: "Odgrywanie ról nauczycielki i ucznia - przejmujesz kontrolę w roli nauczycielki? Fantazja o władzy i wiedzy, gdzie Ty stajesz się przewodniczką, a on chętnym do nauki uczniem.",
    illustration: '/lovable-uploads/nauczycielka.png',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'rol-f2', 
    text: 'Randka z Tindera',
    description: "Odgrywanie ról osób, które właśnie poznały się przez aplikację randkową. Ekscytacja pierwszego spotkania i odkrywania siebie nawzajem, jakbyście widzieli się po raz pierwszy.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'rol-f3', 
    text: 'Samotna żona i "złota rączka"',
    description: "Odgrywanie fantazji o samotnej kobiecie i przystojnym hydrauliku/majsterkowiczu. Klasyczny scenariusz pełen napięcia seksualnego i spontaniczności, gdy on przychodzi coś naprawić.",
    illustration: '/lovable-uploads/handyman.png',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore'] 
    }
  },
  { 
    id: 'rol-f4', 
    text: 'Pacjentka i lekarz',
    description: "Odgrywanie roli pacjentki badanej przez lekarza. Fantazja o profesjonalizmie, który zamienia się w intymne doświadczenie, pełne zaufania i odkrywania swojego ciała.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore'] 
    }
  },
  { 
    id: 'toys-f1', 
    text: 'Zabawki dla niej',
    description: "Czy chciałabyś, żeby partner używał wibratorów i innych zabawek dla twojej przyjemności? Zabawki erotyczne mogą zintensyfikować orgazmy i otworzyć nowe wymiary przyjemności.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    },
    pairGroup: "toys",
    pairPriority: 1
  },
  { 
    id: 'toys-f2', 
    text: 'Zabawki dla niego',
    description: "Czy chciałabyś eksperymentować z zabawkami dla przyjemności partnera? Akcesoria zaprojektowane dla mężczyzn mogą znacząco wzbogacić wasze wspólne doświadczenia seksualne.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    },
    pairGroup: "toys",
    pairPriority: 2
  },
  { 
    id: 'mas-f1', 
    text: 'Użycie olejków do masażu erotycznego',
    description: "Czy myślałaś o zmysłowym masażu z użyciem pachnących olejków? To doskonały sposób na relaks, który może płynnie przejść w erotyczne pieszczoty i namiętny seks.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'mas-f2', 
    text: 'Pieszczoty lodem i ciepłem',
    description: "Eksperymentowanie z kontrastami temperatur podczas pieszczot. Kostki lodu i ciepłe oleje mogą zintensyfikować doznania i uwrażliwić Twoją skórę na najlżejszy dotyk.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'mas-f3', 
    text: 'Seks po omacku',
    description: "Eksplorowanie ciała partnera bez użycia wzroku. Wyłączenie jednego zmysłu wzmacnia pozostałe, intensyfikując dotyk, smak i zapach, co prowadzi do niezwykłych doznań.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore'] 
    }
  },
  { 
    id: 'adv-f1', 
    text: 'Zabawy z bitą śmietaną',
    description: "Smarowanie ciała partnera bitą śmietaną i zlizywanie jej. Słodka, zmysłowa zabawa łącząca przyjemności kulinarne z erotycznymi dla jeszcze intensywniejszych doznań.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'adv-f2', 
    text: 'Klatka na penisa',
    description: "Zabawka która kontroluje erekcję i orgazm Twojego partnera. Klatka na penisa to zaawansowana zabawka BDSM, która pozwala Ci przejąć pełną kontrolę nad jego męskością.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'oral-f1', 
    text: 'Seks oralny dla niej',
    description: "Czy lubisz gdy partner pieści Cię ustami? Pieszczenie łechtaczki i warg sromowych językiem może doprowadzić do intensywnych orgazmów i głębokiej bliskości.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    },
    pairGroup: "oral",
    pairPriority: 1
  },
  { 
    id: 'oral-f2', 
    text: 'Seks oralny dla niego',
    description: "Czy lubisz sprawiać przyjemność partnerowi ustami? Pieszczenie penisa ustami to wyjątkowa forma intymności, która może być zarówno preludium jak i głównym punktem spotkania.",
    illustration: '/lovable-uploads/seks-oralny-dla-niego.png',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    },
    pairGroup: "oral",
    pairPriority: 2
  },
  { 
    id: 'oral-f3', 
    text: 'Głębokie gardło',
    description: "Zaawansowana technika seksu oralnego, gdzie przyjmujesz penisa głęboko do gardła. Wymaga zaufania, praktyki i komunikacji, ale może dawać partnerowi intensywne doznania.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'tan-f1', 
    text: 'Masaż tantryczny dla pary',
    description: "Wzajemny masaż całego ciała oparty na starożytnych technikach tantry. To doświadczenie łączące duchowość z erotyzmem, prowadzące do głębszego połączenia między wami.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'tan-f2', 
    text: 'Masaż tantryczny dla niego',
    description: "Czy chciałabyś dać partnerowi tantryczny masaż całego ciała? Nauka tej starożytnej sztuki może pomóc Ci lepiej rozumieć jego ciało i prowadzić go do niesamowitych doznań.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    },
    pairGroup: "tantra",
    pairPriority: 1
  },
  { 
    id: 'tan-f3', 
    text: 'Masaż tantryczny dla niej',
    description: "Czy chciałabyś otrzymać od partnera masaż całego ciała oparty na technikach tantry? To głębokie doświadczenie relaksacyjne i seksualne, które może prowadzić do intensywnych orgazmów.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    },
    pairGroup: "tantra",
    pairPriority: 2
  },
  { 
    id: 'edg-f1', 
    text: 'Jego edging',
    description: "Wielokrotne doprowadzanie partnera na skraj orgazmu i wstrzymywanie go. Ta technika daje Ci kontrolę nad jego przyjemnością i może prowadzić do znacznie intensywniejszych orgazmów.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    },
    pairGroup: "edge",
    pairPriority: 1
  },
  { 
    id: 'edg-f2', 
    text: 'Jej edging',
    description: "Wielokrotne doprowadzanie Cię na skraj orgazmu i wstrzymywanie go. Ta technika wymaga wyczucia i komunikacji, ale może prowadzić do niezwykle intensywnych orgazmów.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    },
    pairGroup: "edge",
    pairPriority: 2
  },
  { 
    id: 'adv-f3', 
    text: 'Titfuck',
    description: "Pieszczenie penisa partnera między Twoimi piersiami. Ta technika może być zarówno formą gry wstępnej jak i doprowadzić go do orgazmu, dając Ci kontrolę nad jego przyjemnością.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'adv-f4', 
    text: 'Footjob',
    description: "Pieszczenie penisa partnera Twoimi stopami. Ta nietypowa forma pieszczot może być bardzo przyjemna dla niego i stanowić ekscytujące urozmaicenie waszego życia seksualnego.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'adv-f5', 
    text: 'Fingering',
    description: "Penetracja Twojej pochwy palcami partnera. Technika ta pozwala na precyzyjną stymulację punktu G i może być niezwykle przyjemna zarówno jako gra wstępna, jak i główna aktywność.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'adv-f6', 
    text: 'Wzajemna masturbacja',
    description: "Masturbowanie się w obecności partnera, podczas gdy on również się masturbuje. Intymne dzielenie się przyjemnością, która pozwala lepiej poznać własne preferencje.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'striptiz-f1', 
    text: 'Striptiz dla niej',
    description: "Czy chciałabyś, żeby partner zatańczył dla Ciebie zmysłowy taniec rozbierany? Obserwowanie jak powoli odsłania swoje ciało może być niezwykle pobudzającym doświadczeniem.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    },
    pairGroup: "striptiz",
    pairPriority: 1
  },
  { 
    id: 'striptiz-f2', 
    text: 'Striptiz dla niego',
    description: "Czy chciałabyś wykonać dla partnera taniec rozbierany? Zmysłowy pokaz może być doskonałą grą wstępną i sposobem na budowanie napięcia seksualnego przed zbliżeniem.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    },
    pairGroup: "striptiz",
    pairPriority: 2
  },
  { 
    id: 'sensual-f1', 
    text: 'Seksowna bielizna',
    description: "Czy lubisz nosić koronkową lub jedwabną bieliznę dla partnera? Elegancka bielizna może podkreślić walory Twojego ciała i stworzyć erotyczną atmosferę oczekiwania.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'sensual-f2', 
    text: 'Własny film erotyczny',
    description: "Nagranie wspólnego filmu dla własnej przyjemności. Dokumentowanie waszych intymnych chwil może być ekscytujące i pozwala zobaczyć siebie z nowej perspektywy.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'sensual-f3', 
    text: 'Sexting',
    description: "Czy lubisz wymieniać się z partnerem pikantymi wiadomościami i zdjęciami? Budowanie napięcia przez cały dzień może prowadzić do niezwykle namiętnego spotkania wieczorem.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'com-f1', 
    text: 'Dirty talk',
    description: "Wypowiadanie nieprzyzwoitych słów i fantazji podczas seksu. Erotyczne słowa mogą stymulować umysł - najważniejszy organ seksualny - i znacząco zwiększyć podniecenie.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'com-f2', 
    text: 'Rozmowy o przeszłości seksualnej',
    description: "Dzielenie się historiami o poprzednich doświadczeniach seksualnych. Dla niektórych par takie rozmowy mogą być podniecające i budować większą intymność i zaufanie.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'dom-f1', 
    text: 'Wzajemna lekka dominacja',
    description: "Naprzemienne przejmowanie kontroli podczas seksu. Zmienianie ról dominującej i uległej może dodać dynamiki waszemu życiu seksualnemu i zaspokoić różne potrzeby.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'dom-f2', 
    text: 'On dominuje nad nią',
    description: "Pozwolenie partnerowi przejąć kontrolę nad seksem. Dla wielu par taki układ jest podniecający, daje poczucie bezpieczeństwa i pozwala spełniać różne fantazje.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    },
    pairGroup: "dom",
    pairPriority: 1
  },
  { 
    id: 'dom-f3', 
    text: 'Ona dominuje nad nim',
    description: "Przejęcie kontroli i kierowanie przebiegiem zbliżenia. Bycie dominującą może być niezwykle wyzwalające i pozwolić Ci odkryć nowe wymiary własnej seksualności.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    },
    pairGroup: "dom",
    pairPriority: 2
  },
  { 
    id: 'dom-f4', 
    text: 'Pełna dominacja i uległość',
    description: "Czy pociąga Cię pełna dominacja lub uległość w relacji seksualnej? Głębsze eksplorowanie dynamiki władzy może prowadzić do intensywnych, transformujących doświadczeń.",
    illustration: '/lovable-uploads/domination.png',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'dom-f5', 
    text: 'Seks z lekkim podduszaniem',
    description: "Kontrolowane ograniczanie dopływu powietrza dla zwiększenia doznań. Ta praktyka wymaga absolutnego zaufania, wiedzy i ostrożności, ale może intensyfikować orgazmy.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore'] 
    }
  },
  { 
    id: 'loc-f1', 
    text: 'Seks w miejscu publicznym',
    description: "Czy pociąga Cię myśl o seksie w miejscu, gdzie ktoś mógłby was zobaczyć? Dreszczyk emocji związany z ryzykiem przyłapania może znacząco zwiększyć poziom adrenaliny i przyjemności.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'loc-f2', 
    text: 'Seks w samochodzie',
    description: "Spontaniczny seks w zaparkowanym aucie. Ograniczona przestrzeń wymusza kreatywność w pozycjach, a element ryzyka dodaje pikanterii całemu doświadczeniu.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'loc-f3', 
    text: 'Seks w trakcie kąpieli',
    description: "Miłość w wannie lub pod prysznicem. Woda i mydło tworzą zmysłowe doznania na skórze, a ciepło i para mogą stworzyć romantyczną, intymną atmosferę dla waszego zbliżenia.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore'] 
    }
  },
  { 
    id: 'loc-f4', 
    text: 'Seks w windzie',
    description: "Szybki, namiętny seks w windzie między piętrami. Ekstremalnie ryzykowne, ale dla niektórych par właśnie to ryzyko i ograniczony czas stanowią największą atrakcję.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'loc-f5', 
    text: 'Seks w przebieralni',
    description: "Szybkie zbliżenie w przymierzalni sklepu. Ciasne pomieszczenie i ryzyko zostania usłyszanym dodają adrenaliny, która może znacząco zwiększyć intensywność doznań.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'loc-f6', 
    text: 'Seks na stole kuchennym',
    description: "Spontaniczny seks na blacie kuchennym lub stole. Kuchnia jako miejsce codziennych aktywności zamienia się w scenę namiętnego, niecodziennego zbliżenia.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'med-f1', 
    text: 'Wspólne oglądanie filmów porno',
    description: "Czy chciałabyś oglądać filmy dla dorosłych razem z partnerem? To może być inspirujące doświadczenie, źródło nowych pomysłów i sposób na rozmowę o fantazjach.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'med-f2', 
    text: 'Cyberseks z obcymi',
    description: "Erotyczne rozmowy wideo z nieznajomymi osobami. Ta forma eksploracji może wnieść nową energię do związku, jeśli oboje partnerzy są na to otwarci i ustalili granice.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    },
    pairGroup: "cyber",
    pairPriority: 1
  },
  { 
    id: 'med-f3', 
    text: 'Cyberseks ze znajomymi',
    description: "Erotyczne rozmowy wideo z parami, które znacie. Ta zaawansowana praktyka wymaga dużego zaufania i otwartości, ale może znacząco wzmocnić więź między wami.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    },
    pairGroup: "cyber",
    pairPriority: 2
  },
  { 
    id: 'med-f4', 
    text: 'Poker rozbierany ze znajomymi',
    description: "Gra w karty, gdzie przegraną jest zdejmowanie kolejnych części garderoby. Zabawa wprowadzająca element erotyzmu do spotkania towarzyskiego w zaufanym gronie.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    },
    pairGroup: "poker",
    pairPriority: 1
  },
  { 
    id: 'med-f5', 
    text: 'Poker rozbierany z obcymi',
    description: "Gra w karty z nieznajomymi, gdzie stawką jest rozbieranie się. Ta odważna aktywność może być ekscytująca dla par szukających nowych, odważnych doświadczeń.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    },
    pairGroup: "poker",
    pairPriority: 2
  },
  { 
    id: 'ext-f1', 
    text: 'Seks, gdy ktoś Was obserwuje',
    description: "Uprawianie seksu ze świadomością, że ktoś was widzi. Świadomość bycia obserwowaną może dodać ogromnego ładunku emocjonalnego i zwiększyć intensywność doznań.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'ext-f2', 
    text: 'Seks w tańcu',
    description: "Połączenie tańca i aktu seksualnego. Ruch, muzyka i seks tworzą unikalną kombinację zmysłowych doznań, które mogą prowadzić do niezwykłych doświadczeń erotycznych.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'ext-f3', 
    text: 'Seks w masce',
    description: "Zakrywanie twarzy podczas seksu dla zwiększenia anonimowości. Maski mogą pomóc wyzwolić się z zahamowań i wcielić w zuchwałą, odważniejszą seksualnie wersję siebie.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'ext-f4', 
    text: 'Wieczór z wybraną parą',
    description: "Intymne spotkanie z inną parą bez pełnego swingowania. Może obejmować rozmowy o seksie, flirt, pokazywanie się lub częściową wymianę partnerów według ustalonych granic.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'ext-f5', 
    text: 'Pegging him',
    description: "Penetracja odbytu partnera przy użyciu strap-ona. Ta praktyka może prowadzić do intensywnej stymulacji jego prostaty i niezwykle silnych orgazmów dla mężczyzny.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'ext-f6', 
    text: 'Pissing – jego złoty deszcz',
    description: "Partner oddaje mocz na Twoje ciało. Ta kontrowersyjna praktyka jest formą BDSM, która dla niektórych par stanowi akt oddania i symbol głębokiego zaufania.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'ext-f7', 
    text: 'Bukkake',
    description: "Praktyka, gdzie wiele osób ejakuluje na ciało kobiety. W wariancie dla par może być symulowana przy użyciu zabawek i sztucznej spermy dla podobnych wrażeń.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'ext-f8', 
    text: 'Elektrostymulacja',
    description: "Używanie delikatnych impulsów elektrycznych do stymulacji erotycznej. Specjalistyczne zabawki mogą wywołać unikalne doznania niemożliwe do osiągnięcia w inny sposób.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'ext-f9', 
    text: 'Fisting',
    description: "Penetracja Twojej pochwy całą dłonią partnera. Ta zaawansowana praktyka wymaga dużego zaufania, komunikacji i przygotowania, ale może prowadzić do intensywnych doznań.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'gru-f1', 
    text: 'Trójkąt z kobietą',
    description: "Seks z udziałem Ciebie, Twojego partnera i innej kobiety. Ta fantazja wymaga dojrzałej rozmowy o granicach i uczuciach, aby stała się pozytywnym doświadczeniem dla wszystkich.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    },
    pairGroup: "trojkat",
    pairPriority: 1
  },
  { 
    id: 'gru-f2', 
    text: 'Trójkąt z mężczyzną',
    description: "Seks z udziałem Ciebie, Twojego partnera i innego mężczyzny. Ta sytuacja pozwala na jednoczesne doświadczanie różnych form przyjemności i może spełnić fantazję o dwóch mężczyznach.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    },
    pairGroup: "trojkat",
    pairPriority: 2
  },
  { 
    id: 'gru-f3', 
    text: 'Orgia',
    description: "Seks grupowy z udziałem wielu partnerów. Ta bardzo zaawansowana aktywność wymaga jasno ustalonych granic, bezpieczeństwa i całkowitego zaufania między partnerami.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'gru-f4', 
    text: 'Jej randka z nieznajomym',
    description: "Spotkanie z obcym mężczyzną, podczas gdy Twój partner obserwuje z daleka. Ta forma erotycznej zabawy może być ekscytująca dla obu stron, jeśli ustalone są jasne granice.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'gru-f5', 
    text: 'Sterowanie wibratorem w miejscu publicznym',
    description: "Partner kontroluje zdalnie zabawkę umieszczoną w Twoim ciele podczas wyjścia. Ta zabawa daje mu dyskretną władzę nad Twoją przyjemnością w najmniej oczekiwanych momentach.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'gru-f6', 
    text: 'Zdrada kontrolowana – ona zdradza',
    description: "Uprawiasz seks z innym mężczyzną za wiedzą i zgodą swojego partnera. Ta praktyka, znana jako hotwifing, wymaga ogromnego zaufania i jasnych zasad.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    },
    pairGroup: "zdrada",
    pairPriority: 1
  },
  { 
    id: 'gru-f7', 
    text: 'Zdrada kontrolowana – on zdradza',
    description: "Partner uprawia seks z inną kobietą za Twoją wiedzą i zgodą. Ta praktyka wymaga ogromnego zaufania i jasnych zasad, aby nie zagrażała waszemu związkowi.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['exceed'] 
    },
    pairGroup: "zdrada",
    pairPriority: 2
  },
  { 
    id: 'gru-f8', 
    text: 'Symulowanie „pierwszego razu"',
    description: "Odgrywanie scenariusza, jakbyście byli ze sobą po raz pierwszy. Ta zabawa pozwala odkryć partnera na nowo, odświeżyć relację i poczuć ekscytację pierwszego zbliżenia.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'female',
      partnerGender: 'male',
      gameLevel: ['explore'] 
    }
  }
];
