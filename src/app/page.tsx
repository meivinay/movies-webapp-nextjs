import Card from "@/components/card";
import Image from "next/image";
import { useEffect } from "react";
import {getLatestMovies} from '@/api/index';

const TEMP_DATA = {
  "dates": {
    "maximum": "2024-10-23",
    "minimum": "2024-09-11"
  },
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
      "genre_ids": [
        27,
        18,
        878
      ],
      "id": 933260,
      "original_language": "en",
      "original_title": "The Substance",
      "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
      "popularity": 4181.925,
      "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
      "release_date": "2024-09-07",
      "title": "The Substance",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 485
    },
    {
      "adult": false,
      "backdrop_path": "/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg",
      "genre_ids": [
        35,
        14,
        27
      ],
      "id": 917496,
      "original_language": "en",
      "original_title": "Beetlejuice Beetlejuice",
      "overview": "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Betelgeuse, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
      "popularity": 2699.55,
      "poster_path": "/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
      "release_date": "2024-09-04",
      "title": "Beetlejuice Beetlejuice",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 1279
    },
    {
      "adult": false,
      "backdrop_path": "/3m0j3hCS8kMAaP9El6Vy5Lqnyft.jpg",
      "genre_ids": [
        878,
        53,
        18,
        27
      ],
      "id": 1125510,
      "original_language": "es",
      "original_title": "El hoyo 2",
      "overview": "After a mysterious leader imposes his law in a brutal system of vertical cells, a new arrival battles against a dubious food distribution method.",
      "popularity": 2554.356,
      "poster_path": "/6lTrlqGTXiVphXW8AmyndcG1pTR.jpg",
      "release_date": "2024-09-27",
      "title": "The Platform 2",
      "video": false,
      "vote_average": 5.7,
      "vote_count": 536
    },
    {
      "adult": false,
      "backdrop_path": "/xlkclSE4aq7r3JsFIJRgs21zUew.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 1034541,
      "original_language": "en",
      "original_title": "Terrifier 3",
      "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
      "popularity": 1847.201,
      "poster_path": "/l1175hgL5DoXnqeZQCcU3eZIdhX.jpg",
      "release_date": "2024-10-09",
      "title": "Terrifier 3",
      "video": false,
      "vote_average": 7.009,
      "vote_count": 56
    },
    {
      "adult": false,
      "backdrop_path": "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
      "genre_ids": [
        16,
        878,
        10751
      ],
      "id": 1184918,
      "original_language": "en",
      "original_title": "The Wild Robot",
      "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
      "popularity": 1630.358,
      "poster_path": "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
      "release_date": "2024-09-12",
      "title": "The Wild Robot",
      "video": false,
      "vote_average": 8.415,
      "vote_count": 325
    },
    {
      "adult": false,
      "backdrop_path": "/g1z1ZvYKcmk9EnVOTYXR6vkNjkZ.jpg",
      "genre_ids": [
        14,
        27,
        28
      ],
      "id": 1087822,
      "original_language": "en",
      "original_title": "Hellboy: The Crooked Man",
      "overview": "Hellboy and a rookie BPRD agent get stranded in 1950s rural Appalachia. There, they discover a small community haunted by witches, led by a local devil with a troubling connection to Hellboy's past: the Crooked Man.",
      "popularity": 1337.465,
      "poster_path": "/iz2GabtToVB05gLTVSH7ZvFtsMM.jpg",
      "release_date": "2024-08-29",
      "title": "Hellboy: The Crooked Man",
      "video": false,
      "vote_average": 4.8,
      "vote_count": 111
    },
    {
      "adult": false,
      "backdrop_path": "/hPIWQT70wQK6akqfLXByEvr62u0.jpg",
      "genre_ids": [
        28,
        53,
        27,
        878
      ],
      "id": 726139,
      "original_language": "ko",
      "original_title": "탈출: 프로젝트 사일런스",
      "overview": "Due to sudden deteriorating weather conditions, visibility on the Airport Bridge is severely impaired, leaving people stranded and at risk of the bridge collapsing due to a series of chain collisions and explosions. Amidst the chaos, the canine subjects \"Echo\" from the military experiment \"Project Silence,\" who were being transported in secret, break free, and all human survivors become targets of relentless attacks.",
      "popularity": 1281.646,
      "poster_path": "/fttoFfKikQMwIoV3UVvlCvBhbUw.jpg",
      "release_date": "2024-07-11",
      "title": "Project Silence",
      "video": false,
      "vote_average": 7.074,
      "vote_count": 168
    },
    {
      "adult": false,
      "backdrop_path": "/uVWlwJebxX0M3axXAUrryJ6w9cQ.jpg",
      "genre_ids": [
        28,
        35,
        80
      ],
      "id": 507241,
      "original_language": "en",
      "original_title": "The Killer's Game",
      "overview": "When top hitman Joe Flood is diagnosed with a terminal illness, he decides to take matters into his own hands – by taking a hit out on himself. But when the very hitmen he hired also target his ex-girlfriend, he must fend off an army of assassin colleagues and win back the love of his life before it's too late.",
      "popularity": 1067.231,
      "poster_path": "/4bKlTeOUr5AKrLky8mwWvlQqyVd.jpg",
      "release_date": "2024-09-12",
      "title": "The Killer's Game",
      "video": false,
      "vote_average": 6.275,
      "vote_count": 60
    },
    {
      "adult": false,
      "backdrop_path": "/Asg2UUwipAdE87MxtJy7SQo08XI.jpg",
      "genre_ids": [
        28,
        14,
        27
      ],
      "id": 957452,
      "original_language": "en",
      "original_title": "The Crow",
      "overview": "Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right.",
      "popularity": 1003.957,
      "poster_path": "/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg",
      "release_date": "2024-08-21",
      "title": "The Crow",
      "video": false,
      "vote_average": 5.728,
      "vote_count": 605
    },
    {
      "adult": false,
      "backdrop_path": "/vGaBqgY8YRzQVUbBMPnd5SmYvL7.jpg",
      "genre_ids": [
        16,
        35
      ],
      "id": 1329336,
      "original_language": "en",
      "original_title": "The Bad Guys: Haunted Heist",
      "overview": "The crafty Bad Guys crew embarks on a high-stakes Halloween heist to swipe a priceless amulet from a spooky mansion. What could go wrong?",
      "popularity": 944.292,
      "poster_path": "/oEJC05CqPugMxC4rFu9r6r6vg6m.jpg",
      "release_date": "2024-10-02",
      "title": "The Bad Guys: Haunted Heist",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 47
    },
    {
      "adult": false,
      "backdrop_path": "/eXQ8O0ykuEB8dUJhq2WJll4vXmA.jpg",
      "genre_ids": [
        28,
        35,
        80
      ],
      "id": 1210794,
      "original_language": "sv",
      "original_title": "Strul",
      "overview": "Wrongfully convicted of murder, a clumsy electronics salesman faces police corruption and criminal conspiracies in an attempt to prove his innocence.",
      "popularity": 917.854,
      "poster_path": "/ildbg7ho14EHbt1fZWAkgqIyPqy.jpg",
      "release_date": "2024-10-02",
      "title": "Trouble",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 77
    },
    {
      "adult": false,
      "backdrop_path": "/6n8x85cljOfJkUvPDc7tTmGPv7F.jpg",
      "genre_ids": [
        28,
        27,
        53
      ],
      "id": 1029235,
      "original_language": "en",
      "original_title": "Azrael",
      "overview": "In a world where no one speaks, a devout female hunts down a young woman who has escaped her imprisonment. Recaptured by its ruthless leaders, Azrael is due to be sacrificed to pacify an ancient evil deep within the surrounding wilderness.",
      "popularity": 900.011,
      "poster_path": "/qpdFKDvJS7oLKTcBLXOaMwUESbs.jpg",
      "release_date": "2024-09-27",
      "title": "Azrael",
      "video": false,
      "vote_average": 5.5,
      "vote_count": 40
    },
    {
      "adult": false,
      "backdrop_path": "/1fL2S8LKxCVE9KoPRBXeagmBtex.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 1114513,
      "original_language": "en",
      "original_title": "Speak No Evil",
      "overview": "When an American family is invited to spend the weekend at the idyllic country estate of a charming British family they befriended on vacation, what begins as a dream holiday soon warps into a snarled psychological nightmare.",
      "popularity": 896.738,
      "poster_path": "/fDtkrO2OAF8LKQTdzYmu1Y7lCLB.jpg",
      "release_date": "2024-09-11",
      "title": "Speak No Evil",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 658
    },
    {
      "adult": false,
      "backdrop_path": "/cRdA9xjHBbobw4LJFsQ3j1CgpVq.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 663712,
      "original_language": "en",
      "original_title": "Terrifier 2",
      "overview": "A year after the Miles County massacre, Art the Clown is resurrected by a sinister entity. Art returns home, where he must hunt down and destroy teenage Sienna and her younger brother Jonathan on Halloween. As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
      "popularity": 811.084,
      "poster_path": "/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
      "release_date": "2022-10-06",
      "title": "Terrifier 2",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 1813
    },
    {
      "adult": false,
      "backdrop_path": "/zAqBIeO71BFL7bAtP5TFzVjVamy.jpg",
      "genre_ids": [
        10749,
        18
      ],
      "id": 1079091,
      "original_language": "en",
      "original_title": "It Ends with Us",
      "overview": "When a woman's first love suddenly reenters her life, her relationship with a charming, but abusive neurosurgeon is upended, and she realizes she must learn to rely on her own strength to make an impossible choice for her future.",
      "popularity": 784.176,
      "poster_path": "/AjV6jFJ2YFIluYo4GQf13AA1tqu.jpg",
      "release_date": "2024-08-07",
      "title": "It Ends with Us",
      "video": false,
      "vote_average": 7.115,
      "vote_count": 795
    },
    {
      "adult": false,
      "backdrop_path": "/reNf6GBzOe48l9WEnFOxXgW56Vg.jpg",
      "genre_ids": [
        18,
        80,
        53
      ],
      "id": 889737,
      "original_language": "en",
      "original_title": "Joker: Folie à Deux",
      "overview": "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
      "popularity": 728.933,
      "poster_path": "/if8QiqCI7WAGImKcJCfzp6VTyKA.jpg",
      "release_date": "2024-10-01",
      "title": "Joker: Folie à Deux",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 779
    },
    {
      "adult": false,
      "backdrop_path": "/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 420634,
      "original_language": "en",
      "original_title": "Terrifier",
      "overview": "A maniacal clown named Art terrorizes three young women on Halloween night and everyone else who stands in his way.",
      "popularity": 720.665,
      "poster_path": "/wmVLWbiMmlA3Savm7jjvbExwGC3.jpg",
      "release_date": "2018-01-25",
      "title": "Terrifier",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 2126
    },
    {
      "adult": false,
      "backdrop_path": "/uXDwP5qPhuRyPpQ7WkLbE6t2z5W.jpg",
      "genre_ids": [
        35,
        53,
        28
      ],
      "id": 877817,
      "original_language": "en",
      "original_title": "Wolfs",
      "overview": "Hired to cover up a high-profile crime, a fixer soon finds his night spiralling out of control when he's forced to work with an unexpected counterpart.",
      "popularity": 706.093,
      "poster_path": "/vOX1Zng472PC2KnS0B9nRfM8aaZ.jpg",
      "release_date": "2024-09-20",
      "title": "Wolfs",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 494
    },
    {
      "adult": false,
      "backdrop_path": "/wh1IhMWkW7u5c5bkzSGFylF9G8r.jpg",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 1215162,
      "original_language": "en",
      "original_title": "Kill 'em All 2",
      "overview": "Phillip and Suzanne are retired from the spy game, living peacefully off the grid. That's until their whereabouts are discovered by Vlad, the vengeful brother of their target from the first film.",
      "popularity": 702.642,
      "poster_path": "/hgA5hN3NjNNSTXYOmAI6KNKOzbp.jpg",
      "release_date": "2024-09-24",
      "title": "Kill 'em All 2",
      "video": false,
      "vote_average": 7,
      "vote_count": 100
    },
    {
      "adult": false,
      "backdrop_path": "/igtm12Wy9EUlxFeyb4v8bRyuYSY.jpg",
      "genre_ids": [
        28,
        80,
        18,
        53
      ],
      "id": 1337309,
      "original_language": "th",
      "original_title": "Bangkok Breaking: ฝ่านรกเมืองเทวดา",
      "overview": "When a dedicated rescue worker inadvertently gets caught up in the kidnapping plot of a mogul's tween daughter, he must save her from the clutches of rival gangs hunting them down with unpredictable dangers around every corner.",
      "popularity": 664.257,
      "poster_path": "/6VeDn4oIeUK4XwjWGWMb6qvMImQ.jpg",
      "release_date": "2024-09-26",
      "title": "Bangkok Breaking: Heaven and Hell",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 29
    }
  ],
  "total_pages": 264,
  "total_results": 5270
};
const POPULAR_MOVIES = {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
      "genre_ids": [
        27,
        18,
        878
      ],
      "id": 933260,
      "original_language": "en",
      "original_title": "The Substance",
      "overview": "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
      "popularity": 4181.925,
      "poster_path": "/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
      "release_date": "2024-09-07",
      "title": "The Substance",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 466
    },
    {
      "adult": false,
      "backdrop_path": "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
      "genre_ids": [
        28,
        35,
        878
      ],
      "id": 533535,
      "original_language": "en",
      "original_title": "Deadpool & Wolverine",
      "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
      "popularity": 3503.165,
      "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
      "release_date": "2024-07-24",
      "title": "Deadpool & Wolverine",
      "video": false,
      "vote_average": 7.714,
      "vote_count": 4452
    },
    {
      "adult": false,
      "backdrop_path": "/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg",
      "genre_ids": [
        35,
        14,
        27
      ],
      "id": 917496,
      "original_language": "en",
      "original_title": "Beetlejuice Beetlejuice",
      "overview": "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Betelgeuse, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
      "popularity": 2699.55,
      "poster_path": "/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg",
      "release_date": "2024-09-04",
      "title": "Beetlejuice Beetlejuice",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 1271
    },
    {
      "adult": false,
      "backdrop_path": "/3m0j3hCS8kMAaP9El6Vy5Lqnyft.jpg",
      "genre_ids": [
        878,
        53,
        18,
        27
      ],
      "id": 1125510,
      "original_language": "es",
      "original_title": "El hoyo 2",
      "overview": "After a mysterious leader imposes his law in a brutal system of vertical cells, a new arrival battles against a dubious food distribution method.",
      "popularity": 2554.356,
      "poster_path": "/izuzUb0sDokqp9o8utVfsrSJuy5.jpg",
      "release_date": "2024-09-27",
      "title": "The Platform 2",
      "video": false,
      "vote_average": 5.696,
      "vote_count": 529
    },
    {
      "adult": false,
      "backdrop_path": "/xlkclSE4aq7r3JsFIJRgs21zUew.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 1034541,
      "original_language": "en",
      "original_title": "Terrifier 3",
      "overview": "Five years after surviving Art the Clown's Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they're safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe.",
      "popularity": 1847.201,
      "poster_path": "/l1175hgL5DoXnqeZQCcU3eZIdhX.jpg",
      "release_date": "2024-10-09",
      "title": "Terrifier 3",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 55
    },
    {
      "adult": false,
      "backdrop_path": "/lgkPzcOSnTvjeMnuFzozRO5HHw1.jpg",
      "genre_ids": [
        16,
        10751,
        35,
        28
      ],
      "id": 519182,
      "original_language": "en",
      "original_title": "Despicable Me 4",
      "overview": "Gru and Lucy and their girls—Margo, Edith and Agnes—welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Gru also faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
      "popularity": 1691.373,
      "poster_path": "/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
      "release_date": "2024-06-20",
      "title": "Despicable Me 4",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 1975
    },
    {
      "adult": false,
      "backdrop_path": "/v9acaWVVFdZT5yAU7J2QjwfhXyD.jpg",
      "genre_ids": [
        16,
        878,
        10751
      ],
      "id": 1184918,
      "original_language": "en",
      "original_title": "The Wild Robot",
      "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
      "popularity": 1630.358,
      "poster_path": "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
      "release_date": "2024-09-12",
      "title": "The Wild Robot",
      "video": false,
      "vote_average": 8.3,
      "vote_count": 275
    },
    {
      "adult": false,
      "backdrop_path": "/g1z1ZvYKcmk9EnVOTYXR6vkNjkZ.jpg",
      "genre_ids": [
        14,
        27,
        28
      ],
      "id": 1087822,
      "original_language": "en",
      "original_title": "Hellboy: The Crooked Man",
      "overview": "Hellboy and a rookie BPRD agent get stranded in 1950s rural Appalachia. There, they discover a small community haunted by witches, led by a local devil with a troubling connection to Hellboy's past: the Crooked Man.",
      "popularity": 1337.465,
      "poster_path": "/iz2GabtToVB05gLTVSH7ZvFtsMM.jpg",
      "release_date": "2024-08-29",
      "title": "Hellboy: The Crooked Man",
      "video": false,
      "vote_average": 4.8,
      "vote_count": 110
    },
    {
      "adult": false,
      "backdrop_path": "/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg",
      "genre_ids": [
        16,
        10751,
        12,
        35,
        18
      ],
      "id": 1022789,
      "original_language": "en",
      "original_title": "Inside Out 2",
      "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
      "popularity": 1306.455,
      "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
      "release_date": "2024-06-11",
      "title": "Inside Out 2",
      "video": false,
      "vote_average": 7.632,
      "vote_count": 4317
    },
    {
      "adult": false,
      "backdrop_path": "/hPIWQT70wQK6akqfLXByEvr62u0.jpg",
      "genre_ids": [
        28,
        53,
        27,
        878
      ],
      "id": 726139,
      "original_language": "ko",
      "original_title": "탈출: 프로젝트 사일런스",
      "overview": "Due to sudden deteriorating weather conditions, visibility on the Airport Bridge is severely impaired, leaving people stranded and at risk of the bridge collapsing due to a series of chain collisions and explosions. Amidst the chaos, the canine subjects \"Echo\" from the military experiment \"Project Silence,\" who were being transported in secret, break free, and all human survivors become targets of relentless attacks.",
      "popularity": 1281.646,
      "poster_path": "/fttoFfKikQMwIoV3UVvlCvBhbUw.jpg",
      "release_date": "2024-07-11",
      "title": "Project Silence",
      "video": false,
      "vote_average": 7.08,
      "vote_count": 168
    },
    {
      "adult": false,
      "backdrop_path": "/tCKWksaQI8XkAQLVou0AlGab5S6.jpg",
      "genre_ids": [
        28,
        878
      ],
      "id": 1144962,
      "original_language": "en",
      "original_title": "Transmorphers: Mech Beasts",
      "overview": "20 years after the events of Transmorphers, a newer, more advanced species of alien robot descends on a rebuilt Earth, threatening once again to destroy the planet.",
      "popularity": 1180.91,
      "poster_path": "/oqhaffnQqSzdLrYAQA5W4IdAoCX.jpg",
      "release_date": "2023-06-09",
      "title": "Transmorphers: Mech Beasts",
      "video": false,
      "vote_average": 4.9,
      "vote_count": 23
    },
    {
      "adult": false,
      "backdrop_path": "/uVWlwJebxX0M3axXAUrryJ6w9cQ.jpg",
      "genre_ids": [
        28,
        35,
        80
      ],
      "id": 507241,
      "original_language": "en",
      "original_title": "The Killer's Game",
      "overview": "When top hitman Joe Flood is diagnosed with a terminal illness, he decides to take matters into his own hands – by taking a hit out on himself. But when the very hitmen he hired also target his ex-girlfriend, he must fend off an army of assassin colleagues and win back the love of his life before it's too late.",
      "popularity": 1067.231,
      "poster_path": "/4bKlTeOUr5AKrLky8mwWvlQqyVd.jpg",
      "release_date": "2024-09-12",
      "title": "The Killer's Game",
      "video": false,
      "vote_average": 6.212,
      "vote_count": 59
    },
    {
      "adult": false,
      "backdrop_path": "/Asg2UUwipAdE87MxtJy7SQo08XI.jpg",
      "genre_ids": [
        28,
        14,
        27
      ],
      "id": 957452,
      "original_language": "en",
      "original_title": "The Crow",
      "overview": "Soulmates Eric and Shelly are brutally murdered when the demons of her dark past catch up with them. Given the chance to save his true love by sacrificing himself, Eric sets out to seek merciless revenge on their killers, traversing the worlds of the living and the dead to put the wrong things right.",
      "popularity": 1003.957,
      "poster_path": "/58QT4cPJ2u2TqWZkterDq9q4yxQ.jpg",
      "release_date": "2024-08-21",
      "title": "The Crow",
      "video": false,
      "vote_average": 5.724,
      "vote_count": 603
    },
    {
      "adult": false,
      "backdrop_path": "/vGaBqgY8YRzQVUbBMPnd5SmYvL7.jpg",
      "genre_ids": [
        16,
        35
      ],
      "id": 1329336,
      "original_language": "en",
      "original_title": "The Bad Guys: Haunted Heist",
      "overview": "The crafty Bad Guys crew embarks on a high-stakes Halloween heist to swipe a priceless amulet from a spooky mansion. What could go wrong?",
      "popularity": 944.292,
      "poster_path": "/oEJC05CqPugMxC4rFu9r6r6vg6m.jpg",
      "release_date": "2024-10-02",
      "title": "The Bad Guys: Haunted Heist",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 46
    },
    {
      "adult": false,
      "backdrop_path": "/eXQ8O0ykuEB8dUJhq2WJll4vXmA.jpg",
      "genre_ids": [
        28,
        35,
        80
      ],
      "id": 1210794,
      "original_language": "sv",
      "original_title": "Strul",
      "overview": "Wrongfully convicted of murder, a clumsy electronics salesman faces police corruption and criminal conspiracies in an attempt to prove his innocence.",
      "popularity": 917.854,
      "poster_path": "/ildbg7ho14EHbt1fZWAkgqIyPqy.jpg",
      "release_date": "2024-10-02",
      "title": "Trouble",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 77
    },
    {
      "adult": false,
      "backdrop_path": "/6n8x85cljOfJkUvPDc7tTmGPv7F.jpg",
      "genre_ids": [
        28,
        27,
        53
      ],
      "id": 1029235,
      "original_language": "en",
      "original_title": "Azrael",
      "overview": "In a world where no one speaks, a devout female hunts down a young woman who has escaped her imprisonment. Recaptured by its ruthless leaders, Azrael is due to be sacrificed to pacify an ancient evil deep within the surrounding wilderness.",
      "popularity": 900.011,
      "poster_path": "/qpdFKDvJS7oLKTcBLXOaMwUESbs.jpg",
      "release_date": "2024-09-27",
      "title": "Azrael",
      "video": false,
      "vote_average": 5.6,
      "vote_count": 39
    },
    {
      "adult": false,
      "backdrop_path": "/1fL2S8LKxCVE9KoPRBXeagmBtex.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 1114513,
      "original_language": "en",
      "original_title": "Speak No Evil",
      "overview": "When an American family is invited to spend the weekend at the idyllic country estate of a charming British family they befriended on vacation, what begins as a dream holiday soon warps into a snarled psychological nightmare.",
      "popularity": 896.738,
      "poster_path": "/fDtkrO2OAF8LKQTdzYmu1Y7lCLB.jpg",
      "release_date": "2024-09-11",
      "title": "Speak No Evil",
      "video": false,
      "vote_average": 7.352,
      "vote_count": 655
    },
    {
      "adult": false,
      "backdrop_path": "/iYqSQaWDttQIQzsxg9xHyg0bttG.jpg",
      "genre_ids": [
        878,
        27,
        28
      ],
      "id": 945961,
      "original_language": "en",
      "original_title": "Alien: Romulus",
      "overview": "While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.",
      "popularity": 845.919,
      "poster_path": "/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
      "release_date": "2024-08-13",
      "title": "Alien: Romulus",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 1285
    },
    {
      "adult": false,
      "backdrop_path": "/cRdA9xjHBbobw4LJFsQ3j1CgpVq.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 663712,
      "original_language": "en",
      "original_title": "Terrifier 2",
      "overview": "A year after the Miles County massacre, Art the Clown is resurrected by a sinister entity. Art returns home, where he must hunt down and destroy teenage Sienna and her younger brother Jonathan on Halloween. As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
      "popularity": 811.084,
      "poster_path": "/8gLhu8UFPZfH2Hv11JhTZkb9CVl.jpg",
      "release_date": "2022-10-06",
      "title": "Terrifier 2",
      "video": false,
      "vote_average": 6.779,
      "vote_count": 1812
    },
    {
      "adult": false,
      "backdrop_path": "/tncbMvfV0V07UZozXdBEq4Wu9HH.jpg",
      "genre_ids": [
        28,
        80,
        53,
        35
      ],
      "id": 573435,
      "original_language": "en",
      "original_title": "Bad Boys: Ride or Die",
      "overview": "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
      "popularity": 798.865,
      "poster_path": "/oGythE98MYleE6mZlGs5oBGkux1.jpg",
      "release_date": "2024-06-05",
      "title": "Bad Boys: Ride or Die",
      "video": false,
      "vote_average": 7.516,
      "vote_count": 2174
    }
  ],
  "total_pages": 46536,
  "total_results": 930705
}
const POPULAR_TV_SHOWS = {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/nCXV9ARvIE2Yc9tLg6pBwpPpPld.jpg",
      "genre_ids": [
        10764
      ],
      "id": 8892,
      "origin_country": [
        "PH"
      ],
      "original_language": "tl",
      "original_name": "Pinoy Big Brother",
      "overview": "The Philippine adaptation of the reality game show \"Big Brother\" features Filipino housemates live together, share their stories and build meaningful relationships as they do tasks and challenges supervised by Big Brother. Every week a nomination is done, and the public decides who gets evicted and eventually become the Big Winner of the program.",
      "popularity": 2554.564,
      "poster_path": "/zUva0cs2SOjoxFPpwINbpevzoax.jpg",
      "first_air_date": "2005-08-21",
      "name": "Pinoy Big Brother",
      "vote_average": 5.6,
      "vote_count": 8
    },
    {
      "adult": false,
      "backdrop_path": "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
      "genre_ids": [
        10763
      ],
      "id": 94722,
      "origin_country": [
        "DE"
      ],
      "original_language": "de",
      "original_name": "Tagesschau",
      "overview": "German daily news program, the oldest still existing program on German television.",
      "popularity": 2449.553,
      "poster_path": "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
      "first_air_date": "1952-12-26",
      "name": "Tagesschau",
      "vote_average": 6.8,
      "vote_count": 203
    },
    {
      "adult": false,
      "backdrop_path": "/rj3jBAZwPiOgkwAy1205MAgLahj.jpg",
      "genre_ids": [
        10766
      ],
      "id": 81329,
      "origin_country": [
        "FR"
      ],
      "original_language": "fr",
      "original_name": "Un si grand soleil",
      "overview": "Claire is surprised when she gets arrested for the murder of her childhood friend after she returns to Montpellier.",
      "popularity": 2373.776,
      "poster_path": "/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg",
      "first_air_date": "2018-08-27",
      "name": "Chronicles of the Sun",
      "vote_average": 7.1,
      "vote_count": 91
    },
    {
      "adult": false,
      "backdrop_path": "/sx3N4xsZDv0zAGfImtruZLYirhs.jpg",
      "genre_ids": [
        10759,
        18,
        10768,
        10751
      ],
      "id": 242931,
      "origin_country": [
        "PH"
      ],
      "original_language": "tl",
      "original_name": "Pulang Araw",
      "overview": "Red Sun is a family drama that tells stories of courage, sacrifice, and hardships that every Filipino family has. These stories were inspired by the tales of the unsung heroes who defied the odds of World War II and the Japanese occupation of the Philippines.",
      "popularity": 2351.832,
      "poster_path": "/2zbaRzgieKiHYkTGztQUzrAYbgb.jpg",
      "first_air_date": "2024-07-29",
      "name": "Pulang Araw",
      "vote_average": 7,
      "vote_count": 10
    },
    {
      "adult": false,
      "backdrop_path": "/3Jolb6Ky31IhEwyS8QhRykKo79J.jpg",
      "genre_ids": [
        10766,
        18
      ],
      "id": 243117,
      "origin_country": [
        "FR"
      ],
      "original_language": "fr",
      "original_name": "Plus belle la vie, encore plus belle",
      "overview": "",
      "popularity": 2316.98,
      "poster_path": "/5js5JCtxfiYF2MdNn0zGyCwyg8L.jpg",
      "first_air_date": "2024-01-08",
      "name": "Plus belle la vie, encore plus belle",
      "vote_average": 5.1,
      "vote_count": 10
    },
    {
      "adult": false,
      "backdrop_path": "/vgeDRVpSUa4Hvovg4C6dgm4dfUW.jpg",
      "genre_ids": [
        10766,
        18
      ],
      "id": 112470,
      "origin_country": [
        "FR"
      ],
      "original_language": "fr",
      "original_name": "Ici tout commence",
      "overview": "This television drama series is centered around the prestigious culinary school of renowned chef Auguste Armand. The show follows the lives of students and staff as they navigate the challenges and pressures of the culinary world—delving into their personal and professional lives, revealing secrets, rivalries, and complex relationships.",
      "popularity": 2261.717,
      "poster_path": "/yuTHx38jpogXovMhqNatvozigMJ.jpg",
      "first_air_date": "2020-11-02",
      "name": "Ici tout commence",
      "vote_average": 6.933,
      "vote_count": 52
    },
    {
      "adult": false,
      "backdrop_path": "/bPnzBs4Ka1tZFCsZF3cPkzNjiLC.jpg",
      "genre_ids": [
        35,
        10767
      ],
      "id": 122653,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Gutfeld!",
      "overview": "Greg Gutfeld examines the news of the day through a satiric lens fused with pop culture.",
      "popularity": 2261.443,
      "poster_path": "/9zLuN3MfvTcABYYNJq5PkIG81S5.jpg",
      "first_air_date": "2021-04-05",
      "name": "Gutfeld!",
      "vote_average": 6,
      "vote_count": 8
    },
    {
      "adult": false,
      "backdrop_path": "/q3UGWifvIpdey1T2efX4dSmbZpU.jpg",
      "genre_ids": [
        9648,
        18,
        10765
      ],
      "id": 124364,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "FROM",
      "overview": "Unravel the mystery of a nightmarish town in middle America that traps all those who enter. As the unwilling residents fight to keep a sense of normalcy and search for a way out, they must also survive the threats of the surrounding forest – including the terrifying creatures that come out when the sun goes down.",
      "popularity": 2219.473,
      "poster_path": "/cjXLrg4R7FRPFafvuQ3SSznQOd9.jpg",
      "first_air_date": "2022-02-20",
      "name": "FROM",
      "vote_average": 8.2,
      "vote_count": 1254
    },
    {
      "adult": false,
      "backdrop_path": "/l7LRGYJY3NzIGBlpvHpMsNXHbm5.jpg",
      "genre_ids": [
        10751,
        35
      ],
      "id": 218145,
      "origin_country": [
        "SK"
      ],
      "original_language": "sk",
      "original_name": "Mama na prenájom",
      "overview": "Abandoned by his wife, Martin is lying to his daughter not to be upset. But as Hanka grows, these lies become unbearable. Martin meets Nada unexpectedly, asked her to be a rent-a-mother and all lives are completely changed.",
      "popularity": 2181.988,
      "poster_path": "/fH7PP2Rkdlo414IHvZABBHhtoqd.jpg",
      "first_air_date": "2023-01-09",
      "name": "Mom for rent",
      "vote_average": 5,
      "vote_count": 25
    },
    {
      "adult": false,
      "backdrop_path": "/mlX6SG7lJ0BiLui5x5Nu4agetBA.jpg",
      "genre_ids": [
        10766,
        18
      ],
      "id": 82708,
      "origin_country": [
        "NL"
      ],
      "original_language": "nl",
      "original_name": "Brugklas",
      "overview": "The First Years is a Dutch series for young people in which real-life situations are recreated. The series sheds light on subjects that pupils in the first year of secondary school may be confronted with.",
      "popularity": 2171.548,
      "poster_path": "/klPqN1oITjVub0Yss0Kqnx8NfY3.jpg",
      "first_air_date": "2014-05-26",
      "name": "The First Years",
      "vote_average": 4.9,
      "vote_count": 7
    },
    {
      "adult": false,
      "backdrop_path": "/1rGfdcrJOzqyBGo0HUa740L2GhX.jpg",
      "genre_ids": [
        18
      ],
      "id": 247174,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "El Conde: Amor y Honor",
      "overview": "A wrongful conviction changes the life of Alejandro Gaitán and separates him from the woman he loves, Mariana Zambrano. After 17 years in jail, he becomes a count with the help of another prisoner and seeks revenge on those who turned on him.",
      "popularity": 2077.82,
      "poster_path": "/lwcTD8hRx5Ch4sAmjNHmWigkaND.jpg",
      "first_air_date": "2024-07-01",
      "name": "El Conde: Amor y Honor",
      "vote_average": 7.9,
      "vote_count": 27
    },
    {
      "adult": false,
      "backdrop_path": "/725Dh3UC4bjDTflsIxQvSx9vkLr.jpg",
      "genre_ids": [
        10764
      ],
      "id": 250716,
      "origin_country": [
        "CL"
      ],
      "original_language": "es",
      "original_name": "¿Ganar o servir?",
      "overview": "",
      "popularity": 1987.479,
      "poster_path": "/7ZhXzKBXNuFictb3XE2HZDLN9tl.jpg",
      "first_air_date": "2024-04-21",
      "name": "¿Ganar o servir?",
      "vote_average": 8.5,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": "/7ZBNbpkLhC2fS90j6onLS8qqfRX.jpg",
      "genre_ids": [],
      "id": 4682,
      "origin_country": [
        "GB"
      ],
      "original_language": "en",
      "original_name": "Strictly Come Dancing: It Takes Two",
      "overview": "The companion show to the popular BBC One programme Strictly Come Dancing which features interviews and training footage of the couples competing in the main Saturday night show, opinions from the judges on the previous Saturday show and the training footage for the next, and interviews with celebrities who have been watching the show.",
      "popularity": 1975.298,
      "poster_path": "/1UOKLsJ3bopZHg6ntRfmO4C5Gcm.jpg",
      "first_air_date": "2004-10-25",
      "name": "Strictly Come Dancing: It Takes Two",
      "vote_average": 4.5,
      "vote_count": 4
    },
    {
      "adult": false,
      "backdrop_path": "/ookJ1LS8Uc0ji7cSDuJfV7Qh6Lb.jpg",
      "genre_ids": [
        10764
      ],
      "id": 18770,
      "origin_country": [
        "ES"
      ],
      "original_language": "es",
      "original_name": "Gran hermano",
      "overview": "Gran Hermano is a reality television series broadcast in Spain on Telecinco and La Siete produced by Endemol. It is part of the Big Brother franchise first developed in the Netherlands. As of February 2012, 19 editions of the show have aired.",
      "popularity": 1965.11,
      "poster_path": "/gQ0Emh2LT047Fip2HWye3NkrkQB.jpg",
      "first_air_date": "2000-04-23",
      "name": "Gran hermano",
      "vote_average": 3.8,
      "vote_count": 4
    },
    {
      "adult": false,
      "backdrop_path": "/oPUJvCl9vo16nttEDwmK3zy06jj.jpg",
      "genre_ids": [
        10766,
        18,
        10759,
        10765
      ],
      "id": 247884,
      "origin_country": [
        "MX"
      ],
      "original_language": "es",
      "original_name": "Fugitivas: en busca de la libertad",
      "overview": "Lorena, Frida, Lisset and Montse, four friends who are in prison serving a sentence. One of them is accused unjustly. In the prison where they are held there is a massive escape and they escape. After their escape, the fugitives take refuge in a bar looking for the opportunity to start a new life.",
      "popularity": 1935.665,
      "poster_path": "/oqHWSZmoCgz7JPsbNXihASGnfLW.jpg",
      "first_air_date": "2024-07-01",
      "name": "Fugitivas: en busca de la libertad",
      "vote_average": 7.474,
      "vote_count": 19
    },
    {
      "adult": false,
      "backdrop_path": "/4i3iJepkqqH5JJgTNLJdi8ke6ir.jpg",
      "genre_ids": [
        10766
      ],
      "id": 249010,
      "origin_country": [
        "ZA"
      ],
      "original_language": "af",
      "original_name": "Kelders van Geheime",
      "overview": "Kelders van Geheime (Cellars of Secrets) is a South African, Afrikaans-language telenovela based on the wheeling's and dealings of the community that lives on Soebatskloof (a wine farm in the Cape). The series focuses on three families: the Abrahams, Syster and Marais households. These families will have to stand together, agree (or agree to disagree), and work together to earn their bread and butter – and a glass of wine.",
      "popularity": 1853.783,
      "poster_path": "/vf1I0G5jICTstI1EXxb9Oqq80TU.jpg",
      "first_air_date": "2024-05-06",
      "name": "Kelders van Geheime",
      "vote_average": 7,
      "vote_count": 4
    },
    {
      "adult": false,
      "backdrop_path": "/mLcD1v4sfoa1juOsBat7Vik7wEe.jpg",
      "genre_ids": [
        10764
      ],
      "id": 248890,
      "origin_country": [
        "ZA"
      ],
      "original_language": "en",
      "original_name": "Ready Steady Cook South Africa",
      "overview": "In Ready Steady Cook, two teams - a Red Tomato and a Green Pepper - compete in a Red Kitchen and a Green Kitchen, together with a South African chef on each side and paired with enthusiastic home cooks, as they are challenged creatively with a mystery bag of ingredients in a 20-minute cook-off.",
      "popularity": 1840.838,
      "poster_path": "/30xX4IMbgnMbQwo76xM4BOSokZO.jpg",
      "first_air_date": "2024-03-18",
      "name": "Ready Steady Cook South Africa",
      "vote_average": 2.667,
      "vote_count": 3
    },
    {
      "adult": false,
      "backdrop_path": "/48muJ8cxJbxbcalDPmDApGNtTVP.jpg",
      "genre_ids": [
        18
      ],
      "id": 263040,
      "origin_country": [
        "CN"
      ],
      "original_language": "zh",
      "original_name": "漠风吟",
      "overview": "In the vast desert, three cities stand in a delicate balance of power, with a turbulent political landscape filled with constant conflict. The most beautiful woman of the desert, Princess Huang Beishuang of a fallen clan, is unexpectedly chosen as the envoy for a peace marriage and sent to Yunpei City. Along the way, she becomes entangled with three influential men of the desert. What begins as a complex game of mutual manipulation turns into a love-hate struggle between the rebellious \"black lotus\" and the three powerful figures of the desert. Refusing to be a pawn of fate, Huang Beishuang uses her intelligence, bravery, and unwavering determination to establish her place in the perilous desert. In the process, she develops romantic feelings for the northern lord, Huo Qingyun. The stunning beauty embarks on a dream-like journey through the desert, navigating a web of illusions and dangers as she stirs up the winds of change in her quest for dominance.",
      "popularity": 1805.895,
      "poster_path": "/yCeLQVqud4c6DWCsrOJb3ZFWcLT.jpg",
      "first_air_date": "2024-09-29",
      "name": "Love in the Desert",
      "vote_average": 7,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": "/xeJJZE8yC09lRbiV2f2hqURJmhd.jpg",
      "genre_ids": [
        10766,
        18,
        9648
      ],
      "id": 237478,
      "origin_country": [
        "BR"
      ],
      "original_language": "pt",
      "original_name": "Mania de Você",
      "overview": "The story will revolve around the friendship between two young women, Viola and Luma, who seem destined to literally enter each others lives. Born on the same day under very different circumstances, they meet years later, connected by coincidences that go beyond their shared birthday.\n\nA journey marked by both complicity and rivalry, placing them in a romantic quartet with Mavi and Rudá, and shaped by a series of circumstances, twists, and surprises, including a secret surrounding a murder.",
      "popularity": 1804.511,
      "poster_path": "/xq1X6H8pupwx0jeZpu4Piq0V5uL.jpg",
      "first_air_date": "2024-09-09",
      "name": "Mania de Você",
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/sCTlziZeyf4eWXh09pt63zMtJRw.jpg",
      "genre_ids": [
        10759,
        18
      ],
      "id": 261033,
      "origin_country": [
        "SY"
      ],
      "original_language": "ar",
      "original_name": "العميل",
      "overview": "A police captain infiltrates a notorious gang, only to find himself going deeper down the rabbit hole.",
      "popularity": 1779.024,
      "poster_path": "/qUtgaa43jTELs0Tdw55aIukt9yn.jpg",
      "first_air_date": "2024-08-18",
      "name": "The Agent",
      "vote_average": 0.5,
      "vote_count": 1
    }
  ],
  "total_pages": 9161,
  "total_results": 183204
}
const LATEST_TV_SHOWS = {
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/nCXV9ARvIE2Yc9tLg6pBwpPpPld.jpg",
      "genre_ids": [
        10764
      ],
      "id": 8892,
      "origin_country": [
        "PH"
      ],
      "original_language": "tl",
      "original_name": "Pinoy Big Brother",
      "overview": "The Philippine adaptation of the reality game show \"Big Brother\" features Filipino housemates live together, share their stories and build meaningful relationships as they do tasks and challenges supervised by Big Brother. Every week a nomination is done, and the public decides who gets evicted and eventually become the Big Winner of the program.",
      "popularity": 2554.564,
      "poster_path": "/zUva0cs2SOjoxFPpwINbpevzoax.jpg",
      "first_air_date": "2005-08-21",
      "name": "Pinoy Big Brother",
      "vote_average": 5.6,
      "vote_count": 8
    },
    {
      "adult": false,
      "backdrop_path": "/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
      "genre_ids": [
        10763
      ],
      "id": 94722,
      "origin_country": [
        "DE"
      ],
      "original_language": "de",
      "original_name": "Tagesschau",
      "overview": "German daily news program, the oldest still existing program on German television.",
      "popularity": 2449.553,
      "poster_path": "/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
      "first_air_date": "1952-12-26",
      "name": "Tagesschau",
      "vote_average": 6.8,
      "vote_count": 203
    },
    {
      "adult": false,
      "backdrop_path": "/rj3jBAZwPiOgkwAy1205MAgLahj.jpg",
      "genre_ids": [
        10766
      ],
      "id": 81329,
      "origin_country": [
        "FR"
      ],
      "original_language": "fr",
      "original_name": "Un si grand soleil",
      "overview": "Claire is surprised when she gets arrested for the murder of her childhood friend after she returns to Montpellier.",
      "popularity": 2373.776,
      "poster_path": "/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg",
      "first_air_date": "2018-08-27",
      "name": "Chronicles of the Sun",
      "vote_average": 7.1,
      "vote_count": 91
    },
    {
      "adult": false,
      "backdrop_path": "/sx3N4xsZDv0zAGfImtruZLYirhs.jpg",
      "genre_ids": [
        10759,
        18,
        10768,
        10751
      ],
      "id": 242931,
      "origin_country": [
        "PH"
      ],
      "original_language": "tl",
      "original_name": "Pulang Araw",
      "overview": "Red Sun is a family drama that tells stories of courage, sacrifice, and hardships that every Filipino family has. These stories were inspired by the tales of the unsung heroes who defied the odds of World War II and the Japanese occupation of the Philippines.",
      "popularity": 2351.832,
      "poster_path": "/2zbaRzgieKiHYkTGztQUzrAYbgb.jpg",
      "first_air_date": "2024-07-29",
      "name": "Pulang Araw",
      "vote_average": 7,
      "vote_count": 10
    },
    {
      "adult": false,
      "backdrop_path": "/3Jolb6Ky31IhEwyS8QhRykKo79J.jpg",
      "genre_ids": [
        10766,
        18
      ],
      "id": 243117,
      "origin_country": [
        "FR"
      ],
      "original_language": "fr",
      "original_name": "Plus belle la vie, encore plus belle",
      "overview": "",
      "popularity": 2316.98,
      "poster_path": "/5js5JCtxfiYF2MdNn0zGyCwyg8L.jpg",
      "first_air_date": "2024-01-08",
      "name": "Plus belle la vie, encore plus belle",
      "vote_average": 5.1,
      "vote_count": 10
    },
    {
      "adult": false,
      "backdrop_path": "/vgeDRVpSUa4Hvovg4C6dgm4dfUW.jpg",
      "genre_ids": [
        10766,
        18
      ],
      "id": 112470,
      "origin_country": [
        "FR"
      ],
      "original_language": "fr",
      "original_name": "Ici tout commence",
      "overview": "This television drama series is centered around the prestigious culinary school of renowned chef Auguste Armand. The show follows the lives of students and staff as they navigate the challenges and pressures of the culinary world—delving into their personal and professional lives, revealing secrets, rivalries, and complex relationships.",
      "popularity": 2261.717,
      "poster_path": "/yuTHx38jpogXovMhqNatvozigMJ.jpg",
      "first_air_date": "2020-11-02",
      "name": "Ici tout commence",
      "vote_average": 6.933,
      "vote_count": 52
    },
    {
      "adult": false,
      "backdrop_path": "/bPnzBs4Ka1tZFCsZF3cPkzNjiLC.jpg",
      "genre_ids": [
        35,
        10767
      ],
      "id": 122653,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Gutfeld!",
      "overview": "Greg Gutfeld examines the news of the day through a satiric lens fused with pop culture.",
      "popularity": 2261.443,
      "poster_path": "/9zLuN3MfvTcABYYNJq5PkIG81S5.jpg",
      "first_air_date": "2021-04-05",
      "name": "Gutfeld!",
      "vote_average": 6,
      "vote_count": 8
    },
    {
      "adult": false,
      "backdrop_path": "/q3UGWifvIpdey1T2efX4dSmbZpU.jpg",
      "genre_ids": [
        9648,
        18,
        10765
      ],
      "id": 124364,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "FROM",
      "overview": "Unravel the mystery of a nightmarish town in middle America that traps all those who enter. As the unwilling residents fight to keep a sense of normalcy and search for a way out, they must also survive the threats of the surrounding forest – including the terrifying creatures that come out when the sun goes down.",
      "popularity": 2219.473,
      "poster_path": "/cjXLrg4R7FRPFafvuQ3SSznQOd9.jpg",
      "first_air_date": "2022-02-20",
      "name": "FROM",
      "vote_average": 8.2,
      "vote_count": 1254
    },
    {
      "adult": false,
      "backdrop_path": "/l7LRGYJY3NzIGBlpvHpMsNXHbm5.jpg",
      "genre_ids": [
        10751,
        35
      ],
      "id": 218145,
      "origin_country": [
        "SK"
      ],
      "original_language": "sk",
      "original_name": "Mama na prenájom",
      "overview": "Abandoned by his wife, Martin is lying to his daughter not to be upset. But as Hanka grows, these lies become unbearable. Martin meets Nada unexpectedly, asked her to be a rent-a-mother and all lives are completely changed.",
      "popularity": 2181.988,
      "poster_path": "/fH7PP2Rkdlo414IHvZABBHhtoqd.jpg",
      "first_air_date": "2023-01-09",
      "name": "Mom for rent",
      "vote_average": 5,
      "vote_count": 25
    },
    {
      "adult": false,
      "backdrop_path": "/mlX6SG7lJ0BiLui5x5Nu4agetBA.jpg",
      "genre_ids": [
        10766,
        18
      ],
      "id": 82708,
      "origin_country": [
        "NL"
      ],
      "original_language": "nl",
      "original_name": "Brugklas",
      "overview": "The First Years is a Dutch series for young people in which real-life situations are recreated. The series sheds light on subjects that pupils in the first year of secondary school may be confronted with.",
      "popularity": 2171.548,
      "poster_path": "/klPqN1oITjVub0Yss0Kqnx8NfY3.jpg",
      "first_air_date": "2014-05-26",
      "name": "The First Years",
      "vote_average": 4.9,
      "vote_count": 7
    },
    {
      "adult": false,
      "backdrop_path": "/1rGfdcrJOzqyBGo0HUa740L2GhX.jpg",
      "genre_ids": [
        18
      ],
      "id": 247174,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "El Conde: Amor y Honor",
      "overview": "A wrongful conviction changes the life of Alejandro Gaitán and separates him from the woman he loves, Mariana Zambrano. After 17 years in jail, he becomes a count with the help of another prisoner and seeks revenge on those who turned on him.",
      "popularity": 2077.82,
      "poster_path": "/lwcTD8hRx5Ch4sAmjNHmWigkaND.jpg",
      "first_air_date": "2024-07-01",
      "name": "El Conde: Amor y Honor",
      "vote_average": 7.9,
      "vote_count": 27
    },
    {
      "adult": false,
      "backdrop_path": "/725Dh3UC4bjDTflsIxQvSx9vkLr.jpg",
      "genre_ids": [
        10764
      ],
      "id": 250716,
      "origin_country": [
        "CL"
      ],
      "original_language": "es",
      "original_name": "¿Ganar o servir?",
      "overview": "",
      "popularity": 1987.479,
      "poster_path": "/7ZhXzKBXNuFictb3XE2HZDLN9tl.jpg",
      "first_air_date": "2024-04-21",
      "name": "¿Ganar o servir?",
      "vote_average": 8.5,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": "/7ZBNbpkLhC2fS90j6onLS8qqfRX.jpg",
      "genre_ids": [],
      "id": 4682,
      "origin_country": [
        "GB"
      ],
      "original_language": "en",
      "original_name": "Strictly Come Dancing: It Takes Two",
      "overview": "The companion show to the popular BBC One programme Strictly Come Dancing which features interviews and training footage of the couples competing in the main Saturday night show, opinions from the judges on the previous Saturday show and the training footage for the next, and interviews with celebrities who have been watching the show.",
      "popularity": 1975.298,
      "poster_path": "/1UOKLsJ3bopZHg6ntRfmO4C5Gcm.jpg",
      "first_air_date": "2004-10-25",
      "name": "Strictly Come Dancing: It Takes Two",
      "vote_average": 4.5,
      "vote_count": 4
    },
    {
      "adult": false,
      "backdrop_path": "/ookJ1LS8Uc0ji7cSDuJfV7Qh6Lb.jpg",
      "genre_ids": [
        10764
      ],
      "id": 18770,
      "origin_country": [
        "ES"
      ],
      "original_language": "es",
      "original_name": "Gran hermano",
      "overview": "Gran Hermano is a reality television series broadcast in Spain on Telecinco and La Siete produced by Endemol. It is part of the Big Brother franchise first developed in the Netherlands. As of February 2012, 19 editions of the show have aired.",
      "popularity": 1965.11,
      "poster_path": "/gQ0Emh2LT047Fip2HWye3NkrkQB.jpg",
      "first_air_date": "2000-04-23",
      "name": "Gran hermano",
      "vote_average": 3.8,
      "vote_count": 4
    },
    {
      "adult": false,
      "backdrop_path": "/oPUJvCl9vo16nttEDwmK3zy06jj.jpg",
      "genre_ids": [
        10766,
        18,
        10759,
        10765
      ],
      "id": 247884,
      "origin_country": [
        "MX"
      ],
      "original_language": "es",
      "original_name": "Fugitivas: en busca de la libertad",
      "overview": "Lorena, Frida, Lisset and Montse, four friends who are in prison serving a sentence. One of them is accused unjustly. In the prison where they are held there is a massive escape and they escape. After their escape, the fugitives take refuge in a bar looking for the opportunity to start a new life.",
      "popularity": 1935.665,
      "poster_path": "/oqHWSZmoCgz7JPsbNXihASGnfLW.jpg",
      "first_air_date": "2024-07-01",
      "name": "Fugitivas: en busca de la libertad",
      "vote_average": 7.474,
      "vote_count": 19
    },
    {
      "adult": false,
      "backdrop_path": "/4i3iJepkqqH5JJgTNLJdi8ke6ir.jpg",
      "genre_ids": [
        10766
      ],
      "id": 249010,
      "origin_country": [
        "ZA"
      ],
      "original_language": "af",
      "original_name": "Kelders van Geheime",
      "overview": "Kelders van Geheime (Cellars of Secrets) is a South African, Afrikaans-language telenovela based on the wheeling's and dealings of the community that lives on Soebatskloof (a wine farm in the Cape). The series focuses on three families: the Abrahams, Syster and Marais households. These families will have to stand together, agree (or agree to disagree), and work together to earn their bread and butter – and a glass of wine.",
      "popularity": 1853.783,
      "poster_path": "/vf1I0G5jICTstI1EXxb9Oqq80TU.jpg",
      "first_air_date": "2024-05-06",
      "name": "Kelders van Geheime",
      "vote_average": 7,
      "vote_count": 4
    },
    {
      "adult": false,
      "backdrop_path": "/mLcD1v4sfoa1juOsBat7Vik7wEe.jpg",
      "genre_ids": [
        10764
      ],
      "id": 248890,
      "origin_country": [
        "ZA"
      ],
      "original_language": "en",
      "original_name": "Ready Steady Cook South Africa",
      "overview": "In Ready Steady Cook, two teams - a Red Tomato and a Green Pepper - compete in a Red Kitchen and a Green Kitchen, together with a South African chef on each side and paired with enthusiastic home cooks, as they are challenged creatively with a mystery bag of ingredients in a 20-minute cook-off.",
      "popularity": 1840.838,
      "poster_path": "/30xX4IMbgnMbQwo76xM4BOSokZO.jpg",
      "first_air_date": "2024-03-18",
      "name": "Ready Steady Cook South Africa",
      "vote_average": 2.667,
      "vote_count": 3
    },
    {
      "adult": false,
      "backdrop_path": "/48muJ8cxJbxbcalDPmDApGNtTVP.jpg",
      "genre_ids": [
        18
      ],
      "id": 263040,
      "origin_country": [
        "CN"
      ],
      "original_language": "zh",
      "original_name": "漠风吟",
      "overview": "In the vast desert, three cities stand in a delicate balance of power, with a turbulent political landscape filled with constant conflict. The most beautiful woman of the desert, Princess Huang Beishuang of a fallen clan, is unexpectedly chosen as the envoy for a peace marriage and sent to Yunpei City. Along the way, she becomes entangled with three influential men of the desert. What begins as a complex game of mutual manipulation turns into a love-hate struggle between the rebellious \"black lotus\" and the three powerful figures of the desert. Refusing to be a pawn of fate, Huang Beishuang uses her intelligence, bravery, and unwavering determination to establish her place in the perilous desert. In the process, she develops romantic feelings for the northern lord, Huo Qingyun. The stunning beauty embarks on a dream-like journey through the desert, navigating a web of illusions and dangers as she stirs up the winds of change in her quest for dominance.",
      "popularity": 1805.895,
      "poster_path": "/yCeLQVqud4c6DWCsrOJb3ZFWcLT.jpg",
      "first_air_date": "2024-09-29",
      "name": "Love in the Desert",
      "vote_average": 7,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": "/xeJJZE8yC09lRbiV2f2hqURJmhd.jpg",
      "genre_ids": [
        10766,
        18,
        9648
      ],
      "id": 237478,
      "origin_country": [
        "BR"
      ],
      "original_language": "pt",
      "original_name": "Mania de Você",
      "overview": "The story will revolve around the friendship between two young women, Viola and Luma, who seem destined to literally enter each others lives. Born on the same day under very different circumstances, they meet years later, connected by coincidences that go beyond their shared birthday.\n\nA journey marked by both complicity and rivalry, placing them in a romantic quartet with Mavi and Rudá, and shaped by a series of circumstances, twists, and surprises, including a secret surrounding a murder.",
      "popularity": 1804.511,
      "poster_path": "/xq1X6H8pupwx0jeZpu4Piq0V5uL.jpg",
      "first_air_date": "2024-09-09",
      "name": "Mania de Você",
      "vote_average": 0,
      "vote_count": 0
    },
    {
      "adult": false,
      "backdrop_path": "/sCTlziZeyf4eWXh09pt63zMtJRw.jpg",
      "genre_ids": [
        10759,
        18
      ],
      "id": 261033,
      "origin_country": [
        "SY"
      ],
      "original_language": "ar",
      "original_name": "العميل",
      "overview": "A police captain infiltrates a notorious gang, only to find himself going deeper down the rabbit hole.",
      "popularity": 1779.024,
      "poster_path": "/qUtgaa43jTELs0Tdw55aIukt9yn.jpg",
      "first_air_date": "2024-08-18",
      "name": "The Agent",
      "vote_average": 0.5,
      "vote_count": 1
    }
  ],
  "total_pages": 72,
  "total_results": 1435
}
export default async function Home(props) {
  //  let data = await getLatestMovies('https://api.vercel.app/blog')
  // let posts = await data.json()

  return (
    <main className="flex flex-col w-full overflow-x-hidden overflow-y-auto">
      <div className="relative h-5/6 shrink-0 mt-4">
        <div className="relative h-[90%] overflow-hidden rounded-[2rem]">
          <Image
            src="https://image.tmdb.org/t/p/original//m1rvaIIrDGwSYMt5mWG1WiTndmE.jpg"
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={500}
            height={334}
            alt=''
          />
        <div className="h-10 w-10 absolute bottom-0 left-[33.4%] rounded-br-[2rem] " style={{boxShadow: `10px 8px 0 8px #f0f9ff`}} />
        <div className="h-10 w-10 absolute bottom-0 right-[33.4%] rounded-bl-[2rem] " style={{boxShadow: `-10px 8px 0 8px #f0f9ff`}} />
        </div>
        <div className="absolute left-1/2 bottom-[6%] w-1/4 h-24 -translate-x-1/2 outline outline-[1rem] outline-sky-50 bg-sky-500 rounded-[1rem]" />
      </div>
      <ul>
        {/* <li className="h-80">
          Recommendation
          <ul className="flex flex-nowrap gap-x-4 overflow-auto">
            {TEMP_DATA.results.map((movie, idx) => (
              <li className="shrink-0">
                <Card key={idx} movie={movie} />
              </li>
            ))}
          </ul>
        </li> */}
        <li >
          Latest Movies
          <ul className="flex flex-nowrap gap-x-4 overflow-auto">
            {TEMP_DATA.results.map((movie) => (
              <li key={movie.id} className="shrink-0">
                <Card movie={movie} />
              </li>
            ))}
          </ul>
        </li>
        <li >
          Latest Tv Shows
          <ul className="flex flex-nowrap gap-x-4 overflow-auto">
            {LATEST_TV_SHOWS.results.map((movie, idx) => (
              <li key={movie.id} className="shrink-0">
                <Card movie={movie} isTvShow />
              </li>
            ))}
          </ul>
        </li>
        <li >Popular Movies
          <ul className="flex flex-nowrap gap-x-4 overflow-auto">
            {POPULAR_MOVIES.results.map((movie) => (
              <li key={movie.id} >
                <Card movie={movie} />
              </li>
            ))}
          </ul>
        </li>
        <li >Popular Tv Shows
          <ul className="flex flex-nowrap gap-x-4 overflow-auto">
            {POPULAR_TV_SHOWS.results.map((movie) => (
              <li key={movie.id}>
                <Card movie={movie} isTvShow />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </main>
  );
}
