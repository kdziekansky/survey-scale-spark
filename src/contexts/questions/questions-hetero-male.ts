import type { Question } from '@/types/survey';

export const questionsHeteroMale: Question[] = [
  { 
    id: 'pos-m1', 
    text: 'Pozycja Amazonki',
    description: "Czy lubisz gdy Twoja partnerka jest na górze i kontroluje rytm? Ta pozycja daje kobiecie pełną kontrolę nad tempem i głębokością, a Tobie wspaniały widok.",
    illustration: '/lovable-uploads/pozycja-amazonki.png',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'pos-m2', 
    text: 'Pozycja misjonarska',
    description: "Pozycja klasyczna, z mężczyzną na górze - ceniona za bliskość i intymność. Umożliwia głęboki kontakt wzrokowy i pocałunki, budując więź podczas stosunku.",
    illustration: '/lovable-uploads/missionary.png',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'pos-m3', 
    text: 'Pozycja "na pieska"',
    description: "Pozycja od tyłu, która pozwala na głębszą penetrację. Daje dostęp do punktu G partnerki i umożliwia swobodne ruchy biodrami, zwiększając intensywność doznań.",
    illustration: '/lovable-uploads/doggy.png',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore', 'exceed'] 
    }
  },
  { 
    id: 'pos-m6', 
    text: 'Pozycja "na królową"',
    description: "Kobieta leży na plecach z uniesionymi biodrami, a Ty klęczysz. Ta pozycja pozwala na głęboką penetrację przy jednoczesnym kontakcie wzrokowym i pieszczeniu ciała partnerki.",
    illustration: '/lovable-uploads/krolowa.png',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'pos-m7', 
    text: 'Pozycja "jeździec"',
    description: "Kobieta siedzi na Tobie twarzą do Twojej twarzy. Daje to możliwość przytulania się i całowania przy jednoczesnym stymulowaniu łechtaczki partnerki przez tarcie.",
    illustration: '/lovable-uploads/riding.png',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'pos-m8', 
    text: 'Pozycja "odwrócona amazońska"',
    description: "Kobieta siedzi na Tobie tyłem do Twojej twarzy. Ta pozycja oferuje wyjątkowe widoki i dostęp do pieszczenia pleców, pośladków i innych części ciała partnerki.",
    illustration: '/lovable-uploads/odwrocona.png',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'pos-m9', 
    text: 'Pozycja "leniwego pieska"',
    description: "Kobieta leży płasko na brzuchu, a Ty wchodzisz od tyłu. Idealny wybór, gdy chcecie połączyć odpoczynek z przyjemnością, oferując głęboką penetrację przy minimalnym wysiłku.",
    illustration: '/lovable-uploads/leniwa.png',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'pos-m12', 
    text: 'Pozycja "kruka" (69)',
    description: "Pozycja, w której oboje jednocześnie sprawiacie sobie przyjemność oralnie. Fantastyczny sposób, by dawać i otrzymywać przyjemność w tym samym czasie.",
    illustration: '/lovable-uploads/69.png',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore'] 
    }
  },
  { 
    id: 'pos-m13', 
    text: 'Pozycja "lotus"',
    description: "Siedzisz ze skrzyżowanymi nogami, a partnerka siada na Tobie, oplatając Cię nogami. Ta intymna pozycja sprzyja głębokiemu połączeniu duchowemu i fizycznemu.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore', 'exceed'] 
    }
  },
  { 
    id: 'pos-m14', 
    text: 'Pozycja "łyżeczki"',
    description: "Oboje leżycie na boku, Ty za partnerką. Przyjemna, delikatna pozycja, idealna na romantyczne chwile, pozwalająca na obejmowanie ciała partnerki i intymną bliskość.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'pos-m15', 
    text: 'Pozycja "mostek"',
    description: "Partnerka opiera się na rękach i nogach tworząc łuk, a Ty klękasz między jej nogami. Wymagająca pozycja oferująca intensywne doznania i możliwość głębokiej penetracji.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'rol-m1', 
    text: 'Nauczycielka i student',
    description: "Odgrywanie ról nauczycielki i ucznia - kto będzie prowadził lekcje? Fantazja o władzy i wiedzy, gdzie jeden z was staje się przewodnikiem, a drugi chętnym do nauki uczniem.",
    illustration: '/lovable-uploads/nauczycielka.png',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'rol-m2', 
    text: 'Randka z Tindera',
    description: "Odgrywanie ról osób, które właśnie poznały się przez aplikację randkową. Ekscytacja pierwszego spotkania i odkrywania siebie nawzajem, jakbyście widzieli się po raz pierwszy.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'rol-m3', 
    text: '"Złota rączka" i samotna żona',
    description: "Odgrywanie fantazji o hydrauliku/majsterkowiczu i samotnej kobiecie. Klasyczny scenariusz pełen napięcia seksualnego i spontaniczności, gdy przychodzisz naprawić coś w jej domu.",
    illustration: '/lovable-uploads/handyman.png',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore'] 
    }
  },
  { 
    id: 'rol-m4', 
    text: 'Pacjentka i lekarz',
    description: "Wciel się w rolę lekarza badającego swoją pacjentkę. Fantazja o profesjonalizmie, który zamienia się w intymne doświadczenie, pełne zaufania i troski o ciało partnerki.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore'] 
    }
  },
  { 
    id: 'toys-m1', 
    text: 'Zabawki dla niej',
    description: "Czy chciałbyś użyć wibratorów, masażerów i innych zabawek dla przyjemności partnerki? Zabawki erotyczne mogą zintensyfikować jej orgazmy i otworzyć nowe wymiary przyjemności.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    },
    pairGroup: "toys",
    pairPriority: 1
  },
  { 
    id: 'toys-m2', 
    text: 'Zabawki dla niego',
    description: "Czy chciałbyś eksperymentować z zabawkami dla twojej przyjemności? Poznaj akcesoria zaprojektowane specjalnie dla mężczyzn, które mogą wzbogacić Twoje doznania seksualne.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    },
    pairGroup: "toys",
    pairPriority: 2
  },
  { 
    id: 'mas-m1', 
    text: 'Użycie olejków do masażu erotycznego',
    description: "Czy myślałeś o zmysłowym masażu z użyciem pachnących olejków? To doskonały sposób na relaks, który może płynnie przejść w erotyczne pieszczoty i namiętny seks.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'mas-m2', 
    text: 'Pieszczoty lodem i ciepłem',
    description: "Eksperymentowanie z kontrastami temperatur podczas pieszczot. Kostki lodu i ciepłe oleje mogą zintensyfikować doznania i uwrażliwić skórę na najlżejszy dotyk.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'mas-m3', 
    text: 'Seks po omacku',
    description: "Eksplorowanie ciała partnerki bez użycia wzroku. Wyłączenie jednego zmysłu wzmacnia pozostałe, intensyfikując dotyk, smak i zapach, co prowadzi do niezwykłych doznań.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore'] 
    }
  },
  { 
    id: 'adv-m1', 
    text: 'Zabawy z bitą śmietaną',
    description: "Smarowanie ciała partnerki bitą śmietaną i zlizywanie jej. Słodka, zmysłowa zabawa łącząca przyjemności kulinarne z erotycznymi dla jeszcze intensywniejszych doznań.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'adv-m2', 
    text: 'Klatka na penisa',
    description: "Zabawka która kontroluje Twoją erekcję i orgazm. Klatka na penisa to zaawansowana zabawka BDSM, która pozwala partnerce przejąć pełną kontrolę nad Twoją męskością.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'oral-m1', 
    text: 'Seks oralny dla niej',
    description: "Czy lubisz sprawiać przyjemność partnerce ustami? Pieszczenie jej łechtaczki i warg sromowych językiem może doprowadzić do intensywnych orgazmów i głębokiej bliskości.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    },
    pairGroup: "oral",
    pairPriority: 1
  },
  { 
    id: 'oral-m2', 
    text: 'Seks oralny dla niego',
    description: "Czy lubisz gdy partnerka pieści Cię ustami? Pieszczenie penisa ustami to wspaniałe doznanie, które może być zarówno preludium jak i głównym punktem erotycznego spotkania.",
    illustration: '/lovable-uploads/seks-oralny-dla-niego.png',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    },
    pairGroup: "oral",
    pairPriority: 2
  },
  { 
    id: 'oral-m3', 
    text: 'Głębokie gardło',
    description: "Zaawansowana technika seksu oralnego, gdzie partnerka przyjmuje penisa głęboko do gardła. Wymaga zaufania, praktyki i komunikacji, ale oferuje intensywne doznania.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'tan-m1', 
    text: 'Masaż tantryczny dla pary',
    description: "Wzajemny masaż całego ciała oparty na starożytnych technikach tantry. To doświadczenie łączące duchowość z erotyzmem, prowadzące do głębszego połączenia między wami.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'tan-m2', 
    text: 'Masaż tantryczny dla niego',
    description: "Czy chciałbyś otrzymać od partnerki masaż całego ciała oparty na tantry? To głębokie doświadczenie relaksacyjne i seksualne, które może prowadzić do intensywnych orgazmów.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    },
    pairGroup: "tantra",
    pairPriority: 1
  },
  { 
    id: 'tan-m3', 
    text: 'Masaż tantryczny dla niej',
    description: "Czy chciałbyś dać partnerce tantryczny masaż całego ciała? Nauka tej starożytnej sztuki może pomóc Ci lepiej rozumieć jej ciało i prowadzić ją do niesamowitych doznań.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    },
    pairGroup: "tantra",
    pairPriority: 2
  },
  { 
    id: 'edg-m1', 
    text: 'Jego edging',
    description: "Wielokrotne doprowadzanie Cię na skraj orgazmu i wstrzymywanie go. Ta technika może prowadzić do znacznie intensywniejszych orgazmów i lepszej kontroli nad wytryskiem.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    },
    pairGroup: "edge",
    pairPriority: 1
  },
  { 
    id: 'edg-m2', 
    text: 'Jej edging',
    description: "Wielokrotne doprowadzanie partnerki na skraj orgazmu i wstrzymywanie go. Ta technika wymaga wyczucia i komunikacji, ale może prowadzić do niezwykle intensywnych orgazmów.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    },
    pairGroup: "edge",
    pairPriority: 2
  },
  { 
    id: 'adv-m3', 
    text: 'Titfuck',
    description: "Pieszczenie penisa między piersiami partnerki. Ta technika może być zarówno formą gry wstępnej jak i doprowadzić do orgazmu, oferując niepowtarzalne wizualne i fizyczne doznania.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'adv-m4', 
    text: 'Footjob',
    description: "Pieszczenie penisa stopami partnerki. Ta nietypowa forma pieszczot może być bardzo przyjemna i stanowić ekscytujące urozmaicenie waszego życia seksualnego.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'adv-m5', 
    text: 'Fingering',
    description: "Penetracja pochwy palcami. Technika ta pozwala na precyzyjną stymulację punktu G partnerki i może być niezwykle przyjemna zarówno jako gra wstępna, jak i główna aktywność.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'adv-m6', 
    text: 'Wzajemna masturbacja',
    description: "Masturbowanie się w obecności partnerki, podczas gdy ona również się masturbuje. Intymne dzielenie się przyjemnością, która pozwala lepiej poznać własne preferencje.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'striptiz-m1', 
    text: 'Striptiz dla niej',
    description: "Czy chciałbyś zatańczyć dla partnerki zmysłowy taniec rozbierany? Pokazanie swojego ciała w ten sposób może być niezwykle uwodzicielskie i podkreślić Twoją pewność siebie.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    },
    pairGroup: "striptiz",
    pairPriority: 1
  },
  { 
    id: 'striptiz-m2', 
    text: 'Striptiz dla niego',
    description: "Czy chciałbyś, żeby partnerka wykonała dla Ciebie taniec rozbierany? Zmysłowy pokaz może być doskonałą grą wstępną i sposobem na budowanie napięcia seksualnego.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    },
    pairGroup: "striptiz",
    pairPriority: 2
  },
  { 
    id: 'sensual-m1', 
    text: 'Seksowna bielizna',
    description: "Czy podnieca Cię widok partnerki w koronkowej lub jedwabnej bieliźnie? Elegancka bielizna może podkreślić walory ciała i stworzyć erotyczną atmosferę oczekiwania.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'sensual-m2', 
    text: 'Własny film erotyczny',
    description: "Nagranie wspólnego filmu dla własnej przyjemności. Dokumentowanie waszych intymnych chwil może być ekscytujące i pozwala zobaczyć siebie z nowej perspektywy.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'sensual-m3', 
    text: 'Sexting',
    description: "Czy lubisz wymieniać się z partnerką pikantymi wiadomościami i zdjęciami? Budowanie napięcia przez cały dzień może prowadzić do niezwykle namiętnego spotkania wieczorem.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'com-m1', 
    text: 'Dirty talk',
    description: "Wypowiadanie nieprzyzwoitych słów i fantazji podczas seksu. Erotyczne słowa mogą stymulować umysł - najważniejszy organ seksualny - i znacząco zwiększyć podniecenie.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'com-m2', 
    text: 'Rozmowy o przeszłości seksualnej',
    description: "Dzielenie się historiami o poprzednich doświadczeniach seksualnych. Dla niektórych par takie rozmowy mogą być podniecające i budować większą intymność i zaufanie.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'dom-m1', 
    text: 'Wzajemna lekka dominacja',
    description: "Naprzemienne przejmowanie kontroli podczas seksu. Zmienianie ról dominującego i uległego może dodać dynamiki waszemu życiu seksualnemu i zaspokoić różne potrzeby.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'dom-m2', 
    text: 'On dominuje nad nią',
    description: "Przejęcie kontroli i kierowanie przebiegiem zbliżenia. Dla wielu par taki układ jest podniecający, daje poczucie bezpieczeństwa i pozwala spełniać różne fantazje.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    },
    pairGroup: "dom",
    pairPriority: 1
  },
  { 
    id: 'dom-m3', 
    text: 'Ona dominuje nad nim',
    description: "Pozwolenie partnerce przejąć kontrolę nad seksem. Oddanie się w jej ręce może być niezwykle wyzwalające i pozwolić Ci doświadczyć nowych wymiarów przyjemności.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    },
    pairGroup: "dom",
    pairPriority: 2
  },
  { 
    id: 'dom-m4', 
    text: 'Pełna dominacja i uległość',
    description: "Czy pociąga Cię pełna dominacja lub uległość w relacji seksualnej? Głębsze eksplorowanie dynamiki władzy może prowadzić do intensywnych, transformujących doświadczeń.",
    illustration: '/lovable-uploads/domination.png',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'dom-m5', 
    text: 'Seks z lekkim podduszaniem',
    description: "Kontrolowane ograniczanie dopływu powietrza dla zwiększenia doznań. Ta praktyka wymaga absolutnego zaufania, wiedzy i ostrożności, ale może intensyfikować orgazmy.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore'] 
    }
  },
  { 
    id: 'loc-m1', 
    text: 'Seks w miejscu publicznym',
    description: "Czy pociąga Cię myśl o seksie w miejscu, gdzie ktoś mógłby was zobaczyć? Dreszczyk emocji związany z ryzykiem przyłapania może znacząco zwiększyć poziom adrenaliny i przyjemności.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'loc-m2', 
    text: 'Seks w samochodzie',
    description: "Spontaniczny seks w zaparkowanym aucie. Ograniczona przestrzeń wymusza kreatywność w pozycjach, a element ryzyka dodaje pikanterii całemu doświadczeniu.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'loc-m3', 
    text: 'Seks w trakcie kąpieli',
    description: "Miłość w wannie lub pod prysznicem. Woda i mydło tworzą zmysłowe doznania, a ciepło i para mogą stworzyć romantyczną, intymną atmosferę dla waszego zbliżenia.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore'] 
    }
  },
  { 
    id: 'loc-m4', 
    text: 'Seks w windzie',
    description: "Szybki, namiętny seks w windzie między piętrami. Ekstremalnie ryzykowne, ale dla niektórych par właśnie to ryzyko i ograniczony czas stanowią największą atrakcję.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'loc-m5', 
    text: 'Seks w przebieralni',
    description: "Szybkie zbliżenie w przymierzalni sklepu. Ciasne pomieszczenie i ryzyko zostania usłyszanym dodają adrenaliny, która może znacząco zwiększyć intensywność doznań.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'loc-m6', 
    text: 'Seks na stole kuchennym',
    description: "Spontaniczny seks na blacie kuchennym lub stole. Kuchnia jako miejsce codziennych aktywności zamienia się w scenę namiętnego, niecodziennego zbliżenia.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover', 'explore'] 
    }
  },
  { 
    id: 'med-m1', 
    text: 'Wspólne oglądanie filmów porno',
    description: "Czy chciałbyś oglądać filmy dla dorosłych razem z partnerką? To może być inspirujące doświadczenie, źródło nowych pomysłów i sposób na rozmowę o fantazjach.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['discover'] 
    }
  },
  { 
    id: 'med-m2', 
    text: 'Cyberseks z obcymi',
    description: "Erotyczne rozmowy wideo z nieznajomymi osobami. Ta forma eksploracji może wnieść nową energię do związku, jeśli oboje partnerzy są na to otwarci i ustalili granice.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    },
    pairGroup: "cyber",
    pairPriority: 1
  },
  { 
    id: 'med-m3', 
    text: 'Cyberseks ze znajomymi',
    description: "Erotyczne rozmowy wideo z parami, które znacie. Ta zaawansowana praktyka wymaga dużego zaufania i otwartości, ale może znacząco wzmocnić więź między wami.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    },
    pairGroup: "cyber",
    pairPriority: 2
  },
  { 
    id: 'med-m4', 
    text: 'Poker rozbierany ze znajomymi',
    description: "Gra w karty, gdzie przegraną jest zdejmowanie kolejnych części garderoby. Zabawa wprowadzająca element erotyzmu do spotkania towarzyskiego w zaufanym gronie.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    },
    pairGroup: "poker",
    pairPriority: 1
  },
  { 
    id: 'med-m5', 
    text: 'Poker rozbierany z obcymi',
    description: "Gra w karty z nieznajomymi, gdzie stawką jest rozbieranie się. Ta odważna aktywność może być ekscytująca dla par szukających nowych, odważnych doświadczeń.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    },
    pairGroup: "poker",
    pairPriority: 2
  },
  { 
    id: 'ext-m1', 
    text: 'Seks, gdy ktoś Was obserwuje',
    description: "Uprawianie seksu ze świadomością, że ktoś was widzi. Świadomość bycia obserwowanym może dodać ogromnego ładunku emocjonalnego i zwiększyć intensywność doznań.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'ext-m2', 
    text: 'Seks w tańcu',
    description: "Połączenie tańca i aktu seksualnego. Ruch, muzyka i seks tworzą unikalną kombinację zmysłowych doznań, które mogą prowadzić do niezwykłych doświadczeń erotycznych.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'ext-m3', 
    text: 'Seks w masce',
    description: "Zakrywanie twarzy podczas seksu dla zwiększenia anonimowości. Maski mogą pomóc wyzwolić się z zahamowań i wcielić w zuchwałą, odważniejszą seksualnie wersję siebie.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'ext-m4', 
    text: 'Wieczór z wybraną parą',
    description: "Intymne spotkanie z inną parą bez pełnego swingowania. Może obejmować rozmowy o seksie, flirt, pokazywanie się lub częściową wymianę partnerów według ustalonych granic.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'ext-m5', 
    text: 'Pegging him',
    description: "Penetracja Twojego odbytu przez partnerkę używającą strap-ona. Ta praktyka może prowadzić do intensywnej stymulacji prostaty i niezwykle silnych orgazmów dla mężczyzny.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'ext-m6', 
    text: 'Pissing – jego złoty deszcz',
    description: "Oddawanie moczu na ciało partnera lub partnerki. Ta kontrowersyjna praktyka jest formą BDSM, która dla niektórych par stanowi akt oddania i symbol głębokiego zaufania.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'ext-m7', 
    text: 'Bukkake',
    description: "Praktyka, gdzie wiele osób ejakuluje na ciało kobiety. W wariancie dla par może być symulowana przy użyciu zabawek i sztucznej spermy dla podobnych wrażeń.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'ext-m8', 
    text: 'Elektrostymulacja',
    description: "Używanie delikatnych impulsów elektrycznych do stymulacji erotycznej. Specjalistyczne zabawki mogą wywołać unikalne doznania niemożliwe do osiągnięcia w inny sposób.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'ext-m9', 
    text: 'Fisting',
    description: "Penetracja pochwy całą dłonią. Ta zaawansowana praktyka wymaga dużego zaufania, komunikacji i przygotowania, ale może prowadzić do intensywnych doznań.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'gru-m1', 
    text: 'Trójkąt z kobietą',
    description: "Seks z udziałem Ciebie, Twojej partnerki i innej kobiety. Ta fantazja wymaga dojrzałej rozmowy o granicach i uczuciach, aby stała się pozytywnym doświadczeniem dla wszystkich.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    },
    pairGroup: "trojkat",
    pairPriority: 1
  },
  { 
    id: 'gru-m2', 
    text: 'Trójkąt z mężczyzną',
    description: "Seks z udziałem Ciebie, Twojej partnerki i innego mężczyzny. Ta sytuacja daje możliwość obserwowania partnerki z innej perspektywy i może wzbogacić wasze doświadczenia.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    },
    pairGroup: "trojkat",
    pairPriority: 2
  },
  { 
    id: 'gru-m3', 
    text: 'Orgia',
    description: "Seks grupowy z udziałem wielu partnerów. Ta bardzo zaawansowana aktywność wymaga jasno ustalonych granic, bezpieczeństwa i całkowitego zaufania między partnerami.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    }
  },
  { 
    id: 'gru-m4', 
    text: 'Jej randka z nieznajomym',
    description: "Twoja partnerka spotyka się z obcym mężczyzną, podczas gdy Ty obserwujesz z daleka. Fantazja o podglądaniu własnej partnerki, która dla niektórych par jest niezwykle ekscytująca.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'gru-m5', 
    text: 'Sterowanie wibratorem w miejscu publicznym',
    description: "Kontrolowanie zdalnie zabawki umieszczonej w ciele partnerki podczas wyjścia. Ta zabawa daje Ci dyskretną władzę nad jej przyjemnością w najmniej oczekiwanych momentach.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore', 'exceed'] 
    }
  },
  { 
    id: 'gru-m6', 
    text: 'Zdrada kontrolowana – ona zdradza',
    description: "Partnerka uprawia seks z innym mężczyzną za Twoją wiedzą i zgodą. Ta fantazja, znana jako cuckold, dla niektórych mężczyzn stanowi źródło intensywnego podniecenia.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    },
    pairGroup: "zdrada",
    pairPriority: 1
  },
  { 
    id: 'gru-m7', 
    text: 'Zdrada kontrolowana – on zdradza',
    description: "Uprawiasz seks z inną kobietą za wiedzą i zgodą swojej partnerki. Ta praktyka wymaga ogromnego zaufania i jasnych zasad, aby nie zagrażała związkowi.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['exceed'] 
    },
    pairGroup: "zdrada",
    pairPriority: 2
  },
  { 
    id: 'gru-m8', 
    text: 'Symulowanie „pierwszego razu"',
    description: "Odgrywanie scenariusza, jakbyście byli ze sobą po raz pierwszy. Ta zabawa pozwala odkryć partnerkę na nowo, odświeżyć relację i poczuć ekscytację pierwszego zbliżenia.",
    illustration: '/placeholder.svg',
    forConfig: { 
      userGender: 'male',
      partnerGender: 'female',
      gameLevel: ['explore'] 
    }
  }
];
