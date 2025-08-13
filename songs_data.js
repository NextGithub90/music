// Complete songs data from file.csv (392 songs)
const csvData = `JQcom01,JQ Composey,Astero Band,Kepastian Cinta,Jajang Hidayat,POP,BIG Records,50,50,,2019,https://www.youtube.com/watch?v=9MImmRSras4
JQcom02,JQ Composey,Astero Band,Khianati Aku,Jajang Hidayat,POP,BIG Records,50,50,,2020,
JQcom03,JQ Composey,Ayank Wulan,Kisah ku,Muhammad Ramonsyah,POP,BIG Records,50,50,,2020,
JQcom04,JQ Composey,Balvant,Prolog,Aris Munandar & Sendi Sendiyana,ROCK,BIG Records,25,50,,2020,
JQcom05,JQ Composey,Balvant,Drama Pertemuan,Aris Munandar & Sendi Sendiyana,ROCK,BIG Records,25,50,,2020,
JQcom06,JQ Composey,Balvant,Rise and War,Aris Munandar & Sendi Sendiyana,ROCK,BIG Records,25,50,,2020,
JQcom07,JQ Composey,Cici Lulu and Granada's,Jarak dan Waktu,Cici Supriatin,POP,BIG Records,50,50,,2020,
JQcom08,JQ Composey,DEVANKA,Serpihan Hati,Setia Aji,POP,BIG Records,50,50,,2020,
JQcom09,JQ Composey,DEVANKA,Pengertian Cinta,Setia Aji dan Muldan Wijaya Putra,POP,BIG Records,25,50,,2020,
JQcom10,JQ Composey,Erik Mildan,Selamat Pagi Indonesia,Dias Alfian Nugraha,POP,BIG Records,50,50,,2020,
JQcom11,JQ Composey,HUE,Biar Saja,Yuda Tri Sangra,POP,BIG Records,50,50,,2019,https://www.youtube.com/watch?v=5ONnUWxkfe8
JQcom12,JQ Composey,Iqbal Irvana,Walau Patah Hati,Muhammad Ramonsyah,POP,BIG Records,50,50,,2020,
JQcom13,JQ Composey,Isa Angkama,Ikrar,Muhammad Ramonsyah,POP,BIG Records,50,50,,2020,
JQcom14,JQ Composey,Ngiler,Alien,Muhammad Ramonsyah,POP,BIG Records,50,50,,2017,https://www.youtube.com/watch?v=9tNrpV2vjIU
JQcom15,JQ Composey,Ngiler,My Name Is Ay,Muhammad Ramonsyah,POP,BIG Records,50,50,,2020,
JQcom16,JQ Composey,Ngiler,Putus,Muhammad Ramonsyah,POP,BIG Records,50,50,,2017,https://www.youtube.com/watch?v=aYgFYFrFCxA
JQcom17,JQ Composey,Ngiler,Tegar,Muhammad Ramonsyah,POP,BIG Records,50,50,,2017,https://www.youtube.com/watch?v=aQ_4gd-OyrI
JQcom18,JQ Composey,Ngiler,Tuti – Tuti,Muhammad Ramonsyah,POP,BIG Records,50,50,,2017,https://www.youtube.com/watch?v=q6yH4nf_94U
JQcom19,JQ Composey,Ngiler,You Make Me Love,Muhammad Ramonsyah,POP,BIG Records,50,50,,2020,
JQcom20,JQ Composey,Ramon,Kuyang,Muhammad Ramonsyah,POP,BIG Records,50,50,,2020,
JQcom21,JQ Composey,Ramon,Missing,Muhammad Ramonsyah,POP,BIG Records,50,50,,2020,
JQcom22,JQ Composey,Ramon,Blokir,Muhammad Ramonsyah,POP,BIG Records,50,50,,2020,
JQcom23,JQ Composey,Ramon,Kita Sama,Muhammad Ramonsyah,POP,BIG Records,50,50,,2020,
JQcom24,JQ Composey,Rere Renufa,Sesal,Muhammad Ramonsyah,POP,BIG Records,50,50,,2016,https://www.youtube.com/watch?v=dugRRXN0kwU
JQcom25,JQ Composey,Rere Renufa,Cinta Berakhir,Muhammad Ramonsyah,POP,BIG Records,50,50,,2020,
JQcom26,JQ Composey,Rudjack,Melati,Muhammad Ramonsyah,POP,BIG Records,50,50,,2020,
JQcom27,JQ Composey,Rudjack,Hapuslah Sepiku,Muhammad Ramonsyah,POP,BIG Records,50,50,,2020,
JQcom28,JQ Composey,Rully,Cinta Dalam Hati,Ruliansyah,POP,BIG Records,50,50,,2020,
JQcom29,JQ Composey,Sesana,Tanpa Kehadiran Wanita,Sarif Buldansyah Sukma,POP,BIG Records,50,50,,2019,https://www.youtube.com/watch?v=i3-V61az9Wc
JQcom30,JQ Composey,Sheiza,Tak Kan Pernah,Mursana,POP,BIG Records,50,50,,2019,https://www.youtube.com/watch?v=JXlTUoOVsoQ
JQcom31,JQ Composey,Story Mother Day,Hanya Untukmu,Ronnie Gunawan,POP,BIG Records,50,50,,2019,https://www.youtube.com/watch?v=-9q98xho-j8
JQcom32,JQ Composey,Sunu Prasasti,Janji Hujan,Kiki Bagus Sentyaki,POP,BIG Records,50,50,,2020,
JQcom33,JQ Composey,Sunu Prasasti,Makna Kata Rasa,Sunu Prasasti,POP,BIG Records,50,50,,2020,
JQcom34,JQ Composey,Veda,Mundur Perlahan,Veda Danahiswara,POP,BIG Records,50,50,,2020,
JQcom35,JQ Composey,Violency,Gagal Move ON,Reza Hermawan Putra,POP,BIG Records,50,50,,2018,https://www.youtube.com/watch?v=KYIhaFZFYwU
JQcom36,JQ Composey,Violency,Selamat Bahagia,Reza Hermawan Putra,POP,BIG Records,50,50,,2017,https://www.youtube.com/watch?v=sUird3SkUVU
JQcom37,JQ Composey,Violency,Tak Pernah Kalah,Reza Hermawan Putra,POP,BIG Records,50,50,,2017,https://www.youtube.com/watch?v=_uUYN04tq2Y
JQcom38,JQ Composey,Violency,Puber Kedua,Reza Hermawan Putra,POP,BIG Records,50,50,,2019,https://www.youtube.com/watch?v=8dMTwjXlVa8
JQcom39,JQ Composey,Violency,Harapan,Reza Hermawan Putra,POP,BIG Records,50,50,,2017,https://www.youtube.com/watch?v=hNaDPtbcD7o
JQcom40,JQ Composey,Yudi Tamago,Sungguh,Dias Alfian Nugraha,POP,BIG Records,50,50,,2020,
JQcom41,JQ Composey,Hue,My Sexy Devil,Tri Satya Arief,POP,BIG Records,50,50,,2020,
JQcom42,JQ Composey,Story Mother Day,Tak Berarti,Ronnie Gunawan,POP,BIG Records,50,50,,2020,
JQcom43,JQ Composey,Cowkers,Bosan Sama Kamu,Hendragus Fahrian Dony,POP,BIG Records,50,50,,2020,
JQcom44,JQ Composey,Soundsad,Terpisah,Anggra Permana,POP,BIG Records,50,50,,2020,
JQcom45,JQ Composey,Daniakil,Putus,Daniakil,POP,BIG Records,50,50,,2020,
JQcom46,JQ Composey,Daniakil,Jadi Jadohku,Daniakil,POP,BIG Records,50,50,,2019,https://www.youtube.com/watch?v=_K6f_M9Ff3Y
JQcom47,JQ Composey,Daniakil,Lepas,Daniakil,POP,BIG Records,50,50,,2019,https://www.youtube.com/watch?v=ycte8eqs-u4
JQcom48,JQ Composey,Daniakil,Lupakan Kamu,Daniakil,POP,BIG Records,50,50,,2019,https://www.youtube.com/watch?v=lFILmzHFR-k
JQcom49,JQ Composey,Daniakil,Malaikat Kirim Aku Kekasih,Daniakil,POP,BIG Records,50,50,,2020,
JQcom50,JQ Composey,Nami,Bersamaku,Juniar Nay,POP,BIG Records,50,50,,2012,https://www.youtube.com/watch?v=ux7ozkJl-Co
JQcom51,JQ Composey,Nami,Honey ( Cinta Tak Direstui ),Juniar Nay,POP,BIG Records,50,50,,2020,
JQcom52,JQ Composey,Keinan,Shameless,Andika Keinan,POP,BIG Records,50,50,,2020,
JQcom53,JQ Composey,Foster Pink,Imagine,Bianura,POP,BIG Records,50,50,,2020,
JQcom54,JQ Composey,Dessyl,Mimpi Indahku,Fauzy Gunawirawan,POP,BIG Records,50,50,,2020,
JQcom55,JQ Composey,Putri Anastasya,Selalu Mengalah,Firman Ari Kurniawan,POP,BIG Records,50,50,,2020,
JQcom56,JQ Composey,Toro Bujang,Makan Cinta,Sigit Waluyo,POP,BIG Records,50,50,,2020,
JQcom57,JQ Composey,Uut Selly,Aku Trimo,Anton Sugiharto,DANGDUT,Manis Musik,50,50,,2017,DIGITAL Take Down 2 Weeks ago
JQcom58,JQ Composey,Berlin Glad,Cerita Kau dan Aku,Anton Sugiharto,POP,BIG Records,50,50,,2020,
JQcom59,JQ Composey,Uut Selly ,Udan Kenangan,Anton Sugiharto,DANGDUT,Manis Musik,50,50,,2016,https://www.youtube.com/watch?v=vnkQKD0QVWY
JQcom60,JQ Composey,Wiswa Dewi,Kangen Kamu,Anton Sugiharto,DANGDUT,BIG Records,50,50,,2018,
JQcom61,JQ Composey,Echi Fenia,Dulu Sayang Kini Mantan,Anton Sugiharto,DANGDUT,,50,50,,2108,
JQcom62,JQ Composey,UUT Selly,Biduan,Anton Sugiharto,DANGDUT,,50,50,,2016,
JQcom63,JQ Composey,Echi Fenia,Karangan Bunga Dinggo Mantan,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom64,JQ Composey,Echi Fenia,Tak Iklasno,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom65,JQ Composey,Echi Fenia,Hatiku Menangis Lagi,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom66,JQ Composey,Echi Fenia,Kangen Kamu,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom67,JQ Composey,Fenia,Cerita Indah,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom68,JQ Composey,Fenia,Akhir Cerita di kota jogja,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom69,JQ Composey,Fenia,bukan aku yang terbaik untukmu,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom70,JQ Composey,Fenia,setetes air mata dan seluas senyuman,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom71,JQ Composey,Fenia,separuh jiwa,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom72,JQ Composey,Fenia,cinta terpendam di hati,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom73,JQ Composey,Fenia,ingin selingkuh tapi tak ingin diselingkuhi,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom74,JQ Composey,Fenia,ku rela,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom75,JQ Composey,Fenia,Hatiku Menangis Lagi,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom76,JQ Composey,Fenia,sangsaka,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom77,JQ Composey,ANTZ feat Fenia,kau perkosa atas nama cinta,Anton Sugiharto,DANGDUT,,50,50,,2019,
JQcom78,JQ Composey,Risma Pertiwi,Janda,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom79,JQ Composey,DIAJENG,sing tak tresnani,Anton Sugiharto,DANGDUT,,50,50,,2018,https://www.youtube.com/watch?v=KY8cEFHMNIM
JQcom80,JQ Composey,Java Hiphop,cintamu hanya nafsu,Anton Sugiharto,DANGDUT,,50,50,,2019,
JQcom81,JQ Composey,Meri Valencia,sayang "kowe raprasaan",Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom82,JQ Composey,Anton,roso sik tak tinggal,Anton Sugiharto,DANGDUT,,50,50,,2020,https://www.youtube.com/watch?v=cwZ0fuYfuKY
JQcom83,JQ Composey,Anton,nagih utang,Anton Sugiharto,DANGDUT,,50,50,,2020,
JQcom84,JQ Composey,Nia Sukma,sepi sabendino,Anton Sugiharto,DANGDUT,,50,50,,2020,
JQcom85,JQ Composey,Anton,aku tulang rusuk dudu tulang punggung,Anton Sugiharto,DANGDUT,,50,50,,2020,
JQcom86,JQ Composey,Netra Asamba,Tikungan Sahabat,Anton Sugiharto,DANGDUT,,50,50,,2018,https://www.youtube.com/watch?v=FXQPUU-n74I
JQcom87,JQ Composey,Raskoplo feat Chaca Ayunda,korban biduan,Anton Sugiharto,DANGDUT,,50,50,,2017,https://www.youtube.com/watch?v=7j9-o9Gfc3I
JQcom88,JQ Composey,Raskoplo feat Chaca Ayunda,Ra mangan Cinta,Anton Sugiharto,DANGDUT,,50,50,,2017,https://www.youtube.com/watch?v=dF5NJMOE2Fk
JQcom89,JQ Composey,Fenia,ketika dia datang,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom90,JQ Composey,fenia,2,5 menit terbunuh bersama kenanganmu,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom91,JQ Composey,Fenia,tuhan tolong jaga kekasih simpananku,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom92,JQ Composey,Raskoplo feat Delia Chery,Gondes Kecu,Anton Sugiharto,DANGDUT,,50,50,,2016,https://www.youtube.com/watch?v=1-jNHPwz6S8
JQcom93,JQ Composey,Fenia,hati dan sugesti,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom94,JQ Composey,Fenia,Jika masih Ada Kisah untukmu,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom95,JQ Composey,Fenia,Ingatkan Aku di bulan November,Anton Sugiharto,DANGDUT,,50,50,,2020,
JQcom96,JQ Composey,fenia,ketika dia datang,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom97,JQ Composey,Fenia,Penyesalan,Anton Sugiharto,DANGDUT,,50,50,,2018,
JQcom98,JQ Composey,Den DRoom,Akhire Pisah,kus Adi Setiawan (DEN DROOM),POP,,50,50,,2020,
JQcom99,JQ Composey,Den DRoom,Nutupi Loro,iman setia budi (DEN DROOM),POP,,50,50,,2020,
JQcom100,JQ Composey,Fajar Milenia,Teko Ngilang,Sofyan Yulianto,DANGDUT,,50,50,,2020,
JQcom101,JQ Composey,Wuri Milenia,Cinta Tak Selamanya Indah,Sofyan Yulianto,DANGDUT,,50,50,,2020,
JQcom102,JQ Composey,Fajar Milenia,Kuto Wates,Sofyan Yulianto,DANGDUT,,50,50,,2020,
JQcom103,JQ Composey,Onyeal,Murka,angga permana,POP,BIG Records,50,50,,2020,
JQcom104,JQ Composey,Bagus hartawan,kenangan,angga permana,POP,BIG Records,50,50,,2020,
JQcom105,JQ Composey,Donlyca,Indonesia Untuk Semua,Hendragus Fahrian Dony,POP,BIG Records,50,50,,2020,
JQcom106,JQ Composey,Kirana,Percuma Setia,Firman Ari Kurniawan,POP,BIG Records,50,50,,2020,
JQcom107,JQ Composey,Ratih,Raiso Gantung,Firman Ari Kurniawan,DANGDUT,BIG Records,50,50,,2020,
JQcom108,JQ Composey,Wename,Jalan Terbaik,Feddy ariesta ramadhany,POP,BIG Records,50,50,,2012,https://www.youtube.com/watch?v=xiHCME_KVV0
JQcom109,JQ Composey,Wename,Takkan Tergantikan,Feddy ariesta ramadhany,POP,BIG Records,50,50,,2016,https://www.youtube.com/watch?v=OPZo-FmXumg
JQcom110,JQ Composey,Rajam,Hura Hura Keheningan,Agung Gunawan,ROCK,BIG Records,50,50,,2020,
JQcom111,JQ Composey,Fery Gaoz,Aku Benci Pikiranku,Fery Al Gifari Gaos,POP,BIG Records,50,50,,2020,
JQcom112,JQ Composey,Keylin Hans Humara,Bintang Kecil,Pahmi Lubis,POP,BIG Records,50,50,,2020,
JQcom113,JQ Composey,Yoga Korrok,Cinta Semu,Made angga permana,POP,BIG Records,50,50,,2020,
JQcom114,JQ Composey,Ayu Zooma,Menari Dalam Derita,Made angga permana,POP,BIG Records,50,50,,2020,
JQcom115,JQ Composey,Vici,Kedua dan Terakhir,Dian Haryana,POP,BIG Records,50,50,,2020,
JQcom116,JQ Composey,Duarr,Lari Dari Kenyataan,Oktavian Hanafi,POP,BIG Records,50,50,,2020,
JQcom117,JQ Composey,Okta,Mimpi Yang Hanya Mimpi,Oktavian Hanafi,POP,BIG Records,50,50,,2020,
JQcom118,JQ Composey,Vebby Kusmawardhani,Sudut Hati,Vebby Kusmawardhani,POP,BIG Records,50,50,,2020,
JQcom119,JQ Composey,Nataku,Tak Harus Memiliki,Andika Satria Nugraha,POP,BIG Records,50,50,,2020,
JQcom120,JQ Composey,Ali Abdillah,Kangen,Tubagus Abdillah,POP,BIG Records,50,50,,2020,
JQcom121,JQ Composey,X-ANO,Long Trip,Yuyu Yuhana ST,POP,BIG Records,50,50,,2020,
JQcom122,JQ Composey,Andri Erlangit,Tinggalkan Saja,Andri Rohdiana,POP,BIG Records,50,50,,2020,
JQcom123,JQ Composey,Andri Erlangit,Bersama Selamanya,Andri Rohdiana,POP,BIG Records,50,50,,2020,
JQcom124,JQ Composey,Fardo Feat. Sella Fernanda,Hapus,Fardo Sidabutar,POP,BIG Records,50,50,,2020,
JQcom125,JQ Composey,Rhaisa Katresna,Mengingatmu ( Remember You ),Fardo Sidabutar,POP,BIG Records,50,50,,2020,
JQcom126,JQ Composey,VICI,10 Mei,Dian Haryana,POP,ONLY PUBLISHING,50,50,,2020,
JQcom127,JQ Composey,VICI,Semangat Untuk Kawan,Dian Haryana,POP,ONLY PUBLISHING,50,50,,2020,
JQcom128,JQ Composey,VICI,Sonia,Dian Haryana,POP,ONLY PUBLISHING,50,50,,2020,
JQcom129,JQ Composey,VICI,Munafik,Dian Haryana,POP,ONLY PUBLISHING,50,50,,2020,
JQcom130,JQ Composey,VICI,Jayalah Indonesia ku,Dian Haryana,POP,ONLY PUBLISHING,50,50,,2020,
JQcom131,JQ Composey,Fantasia,Temukan Langkahku,Oktavian Hanafi,POP,ONLY PUBLISHING,50,50,,2020,
JQcom132,JQ Composey,Fantasia,Dan Sampaikan,Oktavian Hanafi,POP,ONLY PUBLISHING,50,50,,2020,
JQcom133,JQ Composey,Fantasia,Queen of Heart,Oktavian Hanafi,POP,ONLY PUBLISHING,50,50,,2020,
JQcom134,JQ Composey,Fantasia,Nafas Hidupku,Oktavian Hanafi,POP,ONLY PUBLISHING,50,50,,2020,
JQcom135,JQ Composey,Fajar Rain Feat. Dira,Kala Malam Tiba,Fajar Kuspermana,POP,BIG Records,50,50,,2020,
JQcom136,JQ Composey,Ayrinna S.P,Anak Indonesia,Pahmi Lubis,POP,BIG Records,50,50,,2020,
JQcom137,JQ Composey,Foster Pink,Can I,Bianura,POP,BIG Records,50,50,,2020,
JQcom138,JQ Composey,Suho Maherded,Bersyukur,Dedy Yusuf,POP,BIG Records,50,50,,,
JQcom139,JQ Composey,Suho Maherded,Pasrah,Dedy Yusuf,POP,BIG Records,50,50,,,
JQcom140,JQ Composey,Suho Maherded,Tiket Surga,Dedy Yusuf,POP,BIG Records,50,50,,,
JQcom141,JQ Composey,Suho Maherded,25 Nabi,Dedy Yusuf,POP,BIG Records,50,50,,,
JQcom142,JQ Composey,Suho Maherded,Musibah,Dedy Yusuf,POP,BIG Records,50,50,,,
JQcom143,JQ Composey,Suho Maherded,Sedekah,Dedy Yusuf,POP,BIG Records,50,50,,,
JQcom144,JQ Composey,Suho Maherded,Untuk Allah,Dedy Yusuf,POP,BIG Records,50,50,,,
JQcom145,JQ Composey,Suho Maherded,Doa Untuk Ibu,Dedy Yusuf,POP,BIG Records,50,50,,,
JQcom146,JQ Composey,Suho Maherded,Orang Kaya Berkuasa,Dedy Yusuf,POP,BIG Records,50,50,,,
JQcom147,JQ Composey,Suho Maherded,Sempurna Kuasamu,Dedy Yusuf,POP,BIG Records,50,50,,,
JQcom148,JQ Composey,Andi Permadi,Aku Bisa Apa,Sunu Prasasti AJi,POP,BIG Records,50,50,,2015,
JQcom149,JQ Composey,Muhammad Bashor,Teruntuk Calon Mertua,Muhammad Bashor,POP,BIG Records,50,50,,2020,
JQcom150,JQ Composey,Muhammad Bashor,Saling,Muhammad Bashor,POP,BIG Records,50,50,,2020,
JQcom151,JQ Composey,Muhammad Bashor,Menata Hati,Muhammad Bashor,POP,BIG Records,50,50,,2020,
JQcom152,JQ Composey,Muhammad Bashor,Tamat,Muhammad Bashor,POP,BIG Records,50,50,,2020,
JQcom153,JQ Composey,Muhammad Bashor,Bolehkah Ku Bertanya,Muhammad Bashor,POP,BIG Records,50,50,,2020,
JQcom154,JQ Composey,HUE,CIRCLES,Tri Satya Arief Denis Bagus Wicaksono Sabrina Dwi Ananda Zakarias Topuh,Rock,BIG Records,12.5,50,,2020,
JQcom155,JQ Composey,Apit Riyadi,Pengagum Dirimu,Apit Riyadi,POP,BIG Records,50,50,,2020,
JQcom156,JQ Composey,Cici Lulu Feat Amad,Mama,Cici Supriatin,POP,BIG Records,50,50,,2020,
JQcom157,JQ Composey,Daniakil,Putus ( Acoustic Version ),Daniakil,POP,BIG Records,50,50,,2020,
JQcom158,JQ Composey,Kamar Jiwa,Kita,Fauzan Hermawan  Moh FItrah Umami,POP,BIG Records,25,50,,2020,https://youtu.be/ixdkyZCmGyQ?si=-42efflmtslwtfAW
JQcom159,JQ Composey,Kamar Jiwa,Di Kota Ini,Fauzan Hermawan  Moh FItrah Umami,POP,BIG Records,25,50,,2020,https://youtu.be/s-MkMKkNkdM?si=otOOJn56ck4BzWEN
JQcom160,JQ Composey,Kamar Jiwa Feat. Sunu Prasasti,Seperti Bumi,Fauzan Hermawan  Moh FItrah Umami,POP,BIG Records,25,50,,2020,https://youtu.be/iw1Z3i_lJ90?si=-csyVULeqTtqko0o
JQcom161,JQ Composey,Kamar Jiwa,Yang Tak Terhapuskan,Fauzan Hermawan  Moh FItrah Umami,POP,BIG Records,25,50,,2020,https://youtu.be/RwftrwC83kI?si=WXCmp18o5pnfy5MO
JQcom162,JQ Composey,Kamar Jiwa,Di Waktu Yang Tak Tepat,Fauzan Hermawan  Moh FItrah Umami,POP,BIG Records,25,50,,2020,https://youtu.be/8V2sf8mLKdY?si=GF6BeJqPaL8veeut
JQcom163,JQ Composey,Kamar Jiwa,Pemilik Hati,Fauzan Hermawan  Moh FItrah Umami,POP,BIG Records,25,50,,2020,https://youtu.be/QcOe2DOyYNE?si=lsVCBBJg2dtNua5I
JQcom164,JQ Composey,Kamar Jiwa,Hidup Itu Indah,Fauzan Hermawan  Moh FItrah Umami,POP,BIG Records,25,50,,2020,https://youtu.be/bJoWJvQXU_I?si=yedrVRC3jMEa9fAF
JQcom165,JQ Composey,Kamar Jiwa,Setelah Hujan,Fauzan Hermawan  Moh FItrah Umami,POP,BIG Records,25,50,,2020,https://www.youtube.com/watch?v=wuzK4yLtldM
JQcom166,JQ Composey,Kamar Jiwa,Naraka,Fauzan Hermawan  Moh FItrah Umami,POP,BIG Records,25,50,,2020,https://youtu.be/TxUuDdWljK0?si=cDVIHEQKnHGGxklt
JQcom167,JQ Composey,Vicky Januari,3 Faktor,Hendar Ramdani,POP,BIG Records,50,50,,2020,https://youtu.be/YijlxU9ewtA?si=n8iOOIC3aa02fAJe
JQcom168,JQ Composey,Vicky Januari,Sejati Tanpa Senyummu,Rangga Nugraha  Herly Hendiwan,POP,BIG Records,50,50,,2020,https://youtu.be/bv1OHHxWN8Y?si=Q6rWaVGyFz6DzVhb
JQcom169,JQ Composey,Vicky Januari,PAMIT,Hendar Ramdani,POP,BIG Records,50,50,,2020,https://youtu.be/7W3Y2Qj4-08?si=V9bgAh9kqUAXCdcy
JQcom170,JQ Composey,Vicky Januari,Sampai Disini,Praja Lesmana,POP,BIG Records,50,50,,2020,https://youtu.be/77vKphTgqtM?si=AoPTqmxEqW9r9R9C
JQcom171,JQ Composey,Vicky Januari,Cerita Lalu,Gardika Sandy,POP,BIG Records,50,50,,2020,https://youtu.be/8iuNLCVmLSY?si=XV18x8fNovZnNA4Z
JQcom172,JQ Composey,Vicky Januari,Lewat Mimpi,Hendar Ramdani,POP,BIG Records,50,50,,2020,https://www.youtube.com/watch?v=ayVbjuNPE4M
JQcom173,JQ Composey,Vicky Januari,Dendam,Praja Lesmana,POP,BIG Records,50,50,,2020,https://youtu.be/gPUaHdZxBco?si=4qG8_zsngZ2-nK24
JQcom174,JQ Composey,SEKUTER,Ambisi,Satria Berbudi,POP,BIG Records,50,50,,2020,
JQcom175,JQ Composey,Vikry Satria Nugraha,Putri Malu,Vikry Satria Nugraha,Pop,BIG Records,50,50,,2021,https://youtu.be/lGnD_nYpN30?si=Yu70HFPRoCfMrssR
JQcom176,JQ Composey,Vikry Satria Nugraha,Dewi Rindu,Vikry Satria Nugraha,Pop,BIG Records,50,50,,2021,https://youtu.be/rk6XwH_Wzwc?si=9sP3J06YbtZgp3X6
JQcom177,JQ Composey,Vicanola,Petualangan Cinta,Catur Hary Cahyono,Pop,BIG Records,50,50,,2021,https://youtu.be/Wb-upn-Kq9o?si=JzuxE7qNHxecNtPr
JQcom178,JQ Composey,Ria Priatama,Pura Pura Cinta,Ria Priatama,Pop,BIG Records,50,50,,2021,https://youtu.be/dWfzs8di2jA?si=ovTapQjE3ih4aPYb
JQcom179,JQ Composey,Our September,Tunggu Aku Di Bandung,Naufal Fadhillah,Pop,BIG Records,50,50,,2021,https://youtu.be/MfOZDCpbT08?si=CmJeLh4bxKMOiKIB
JQcom180,JQ Composey,Kyyy,Jangan Kembali,Apit Riyadi,Pop,BIG Records,50,50,,2021,https://youtu.be/KyzyCuz4wQM?si=00O3ZMzKEanjwvMe
JQcom181,JQ Composey,Nio,Melupakanmu,Risa Febrisa,Pop,BIG Records,50,50,,2021,https://youtu.be/MJH7UEiVfFA?si=xlO3PFnv9VfEnmHo
JQcom182,JQ Composey,Yasbih,Tak Kan Pernah Bisa,Yasbih,Pop,BIG Records,50,50,,2021,https://youtu.be/udq8MzK0OYk?si=wUgfErQaxB93FA-Z
JQcom183,JQ Composey,Story Mother Day,Berakhir,Ronnie Gunawan,Pop,BIG Records,50,50,,2021,https://youtu.be/LOtmlyK1Iqo?si=JuV-8ujxCiUjGvX2
JQcom184,JQ Composey,Bagus,Lagu Sederhana,Bagus Febrian Rachmawan,Pop,BIG Records,50,50,,2021,https://youtu.be/b8Xdi6BDTIw?si=YG3EK7GoHhpEs0Z4
JQcom185,JQ Composey,Dehan,Bila Terdengar Suara Adzan,Roni Nurbini,Religi,BIG Records,50,50,,2021,https://youtu.be/bEEDOfn1U1c?si=z-P6H3TFX60vK1wc
JQcom186,JQ Composey,NK Shanty,Suka Sama Suka,Irfan Kurniawan,Pop,BIG Records,50,50,,2021,https://youtu.be/6uh8EteOiIQ?si=2c3bvs3d1Mh1uwwe
JQcom187,JQ Composey,Haris Mauza,Pusing 7 Keliling,Irfan Kurniawan,Pop,BIG Records,50,50,,2021,https://youtu.be/mOEcNu8VX4w?si=7TlCNh6mxn-GtSIE
JQcom188,JQ Composey,Hue,Dream,Tri Satya Arief Zakarias Topuh,Rock,BIG Records,25,50,,2021,https://youtu.be/zYnKJwkAbyQ?si=6LT0uAHaf13rnO08
JQcom189,JQ Composey,Suho Maherded,Hijrah,Dedy Yusuf,Religi,BIG Records,50,50,,2021,
JQcom190,JQ Composey,Suho Maherded,Ta'aruf,Dedy Yusuf,Religi,BIG Records,50,50,,2021,
JQcom191,JQ Composey,Suho Maherded,Sabarlah Sahabatku,Dedy Yusuf,Religi,BIG Records,50,50,,2021,
JQcom192,JQ Composey,Suho Maherded,Kembali Kepadamu,Dedy Yusuf,Religi,BIG Records,50,50,,2021,
JQcom193,JQ Composey,Suho Maherded,Marhaban Ya Ramadhan,Dedy Yusuf,Religi,BIG Records,50,50,,2021,
JQcom194,JQ Composey,Suho Maherded,Menunggu Hidayah,Ahmad Fauzan,Religi,BIG Records,50,50,,2021,
JQcom195,JQ Composey,Suho Maherded,Sholat Subuh,Dedy Yusuf,Religi,BIG Records,50,50,,2021,
JQcom196,JQ Composey,Daniakil X Vici,Selamat Lebaran,Hamdani,Religi,BIG Records,50,50,,2021,https://youtu.be/hnOSwhNaM_g?si=EK86UMAQj7Cx-LIS
JQcom197,JQ Composey,Minerall Effect,Your Life,Gladys Luckyta Putri Raharjo,Pop,BIG Records,50,50,,2021,https://youtu.be/EGVp17-5Xms?si=LgBIGRUVFFutzqyu
JQcom198,JQ Composey,LOGO Band,Ditinggal Kawin,Muhamad Opi Sopian,Pop,BIG Records,50,50,,2021,
JQcom199,JQ Composey,Krisna,Katakan Pada Mama Mu,R Putra Lugina Sukma Nur,Pop,BIG Records,50,50,,2021,
JQcom200,JQ Composey,Mr. Limousine,Sista Mela,Irfan Kurniawan,Pop,BIG Records,50,50,,2021,
JQcom201,JQ Composey,D'Kasta,Move On,Deden Kuswandi,Pop,BIG Records,50,50,,2021,
JQcom202,JQ Composey,Vici,10 Mei ( Lockdown Music LIve ),Dian Haryana,Pop,BIG Records,50,50,,2021,
JQcom203,JQ Composey,Aji Devanka,Tak Mau Berpisah,Setia Aji,Pop,BIG Records,50,50,,2021,
JQcom204,JQ Composey,Hue,Shadow,Tri Satya Arief Zakarias Topuh,Pop,BIG Records,25,50,,2021,https://youtu.be/0Uo95OTMrOk?si=M7Frty10OuBqexaU
JQcom205,JQ Composey,Anjas Kumara,Broken,Fauzan Hermawan Mohammad Fitrah Umami Septa Graha Lukman Nulkarim,Pop,BIG Records,12.5,50,,2021,https://youtu.be/3qEWpYOHuh8?si=lj6EHs_Lwwz_almd
JQcom206,JQ Composey,Kamar Jiwa,Nusantara,Fauzan Hermawan Mohammad Fitrah Umami,Pop,BIG Records,25,50,,2021,https://www.youtube.com/watch?v=JZRb40EIgtU
JQcom207,JQ Composey,Harum Dalila,Semua Di Indonesia,Pahmi Lubis,Pop,BIG Records,50,50,,2021,https://www.youtube.com/watch?v=KKaz1HbVVHY
JQcom208,JQ Composey,Oviecesta,Be My Partner,Andri Rohdiana,Pop,BIG Records,50,50,,2021,https://www.youtube.com/watch?v=VfVNrAT_MHU
JQcom209,JQ Composey,Oviecesta,Ada Aku,Moch. Shovie Vicesta,Pop,BIG Records,50,50,,2021,https://youtu.be/EWw2PbNY8wM?si=NQUN-k4iB_qFIDop
JQcom210,JQ Composey,Kamar Jiwa,Coming Home,Fauzan Hermawan Mohammad Fitrah Umami,Pop,BIG Records,25,50,,2021,https://www.youtube.com/watch?v=l9EXtJT1YOA
JQcom211,JQ Composey,Oviecesta,Bahagia Melepasmu,Moch. Shovie Vicesta Andri Rohdiana,Pop,BIG Records,50,50,,2021,https://www.youtube.com/watch?v=S-JpAu65ADs
JQcom212,JQ Composey,Sunu Prasasti,Butterfly,Sunu Prasasti,Pop,BIG Records,25,50,,2021,https://youtu.be/67cDi62d4lM?si=5N0OCaPj_7jaALWw
JQcom213,JQ Composey,Kamar Jiwa,Terlahir Juara,Fauzan Hermawan Mohammad Fitrah Umami,Pop,BIG Records,25,50,,2021,https://youtu.be/PwzEfN_A4AY?si=5M_Iq6KhDBIcAfjL
JQcom214,JQ Composey,Oviecesta,Ada Aku ( Acoustic Version ),Moch. Shovie Vicesta,Pop,BIG Records,50,50,,2021,https://www.youtube.com/watch?v=3ajrSMiyh3I
JQcom215,JQ Composey,Deva Doremiva,Aku,Mohammad Fitrah Umami,Pop,BIG Records,50,50,,2021,https://youtu.be/-PlZKggvpOk?si=pS6LAnhq4opNmO3n
JQcom216,JQ Composey,Without Name,BIG MAN,Taufan Firmawan,Pop,BIG Records,50,50,,2021,https://youtu.be/Z5UV2chsT5Q?si=eQoyYYJXztEk6vro
JQcom217,JQ Composey,Without Name,Melangkah,Taufan Firmawan,Pop,BIG Records,50,50,,2021,https://youtu.be/pYjHekK8SrU?si=MVAbY76Ik8bxyeb5
JQcom218,JQ Composey,Without Name,Shut Up,Taufan Firmawan,Pop,BIG Records,50,50,,2021,https://youtu.be/ITNWUf8vZOQ?si=tyu7jsPbdUDiHiwO
JQcom219,JQ Composey,Without Name,To Change Strif Strungle,Taufan Firmawan,Pop,BIG Records,50,50,,2021,https://www.youtube.com/watch?v=7pGm1jCkm0s
JQcom220,JQ Composey,Without Name,Wanita Berwajah Dua,Taufan Firmawan,Pop,BIG Records,50,50,,2021,https://youtu.be/pMQ5Ty0KdJc?si=HLrAK_xVPtx97ovi
JQcom221,JQ Composey,Hue,Haunted,Tri Satya Arief Denis Bagus Wicaksono Sabrina Dwi Ananda Zakarias Topuh Perianus Gea,Rock,BIG Records,10,50,,2021,https://youtu.be/xubW9O5jOM8?si=ZgEJm_kbHcevuQV3
JQcom222,JQ Composey,Rini Rey,Perih,Oktora Ananta & Bangkit Suharja,POP,BIG Records,25,50,,2021,https://www.youtube.com/watch?v=fQJC0tdTnoc
JQcom223,JQ Composey,Fajar Rain,Tanpa Jejak,Fajar Kuspermana,POP,BIG Records,50,50,,2021,https://www.youtube.com/watch?v=SKXOMGoENxs
JQcom224,JQ Composey,Ramon Ngiler fear Khanza,Dont Take My Home,Muhammad Ramonsyah,POP,BIG Records,50,50,,2021,
JQcom225,JQ Composey,Kamar Jiwa,Tumbuh untuk seribu,Fauzan Hermawan Mohammad Fitrah Umami,POP,BIG Records,25,50,,2021,https://www.youtube.com/watch?v=l9EXtJT1YOA
JQcom226,JQ Composey,Andri Saputra,Samawa,Andri Saputra,POP,BIG Records,50,50,,2022,https://youtu.be/3oME80MMXZM?si=69bFqEG6erheSFiY
JQcom227,JQ Composey,Kamar Jiwa,Asmaradhana,Fauzan Hermawan Mohammad Fitrah Umami,POP,BIG Records,25,50,,2022,https://youtu.be/X31_TJpN81A?si=SuGz11XxMmGwM54G
JQcom228,JQ Composey,Sahat Siregar,Semua Tentangmu,Sahat Siregar,POP,BIG Records,50,50,,2022,https://www.youtube.com/watch?v=kfhVzP5r6Oc
JQcom229,JQ Composey,Ramadhona,tinggal kegersangan,Pahmi Lubis,POP,Norton Records,50,50,,2021,
JQcom230,JQ Composey,Maya Ulfasari,jangan sampai terlambat,Pahmi Lubis,POP,Norton Records,50,50,,2021,
JQcom231,JQ Composey,Fadiah Dini,jangan sampai berubah,Pahmi Lubis,POP,Norton Records,50,50,,2021,
JQcom232,JQ Composey,caaicaak,karena hutanku,Pahmi Lubis,POP,BIG Records,50,50,,2021,
JQcom233,JQ Composey,Candra Ragil,save our forest,Pahmi Lubis,POP,Norton Records,50,50,,2021,
JQcom234,JQ Composey,Moranda Dalimunthe,semua jadi bencana,Pahmi Lubis,POP,Norton Records,50,50,,2021,
JQcom235,JQ Composey,rina,jangan ubah hutanku,Pahmi Lubis,POP,Norton Records,50,50,,2021,
JQcom236,JQ Composey,Pahmi Ivan Lubis,save our forest save our climate,Pahmi Lubis,POP,Norton Records,50,50,,2021,
JQcom237,JQ Composey,Rimansyah Pandia,Keindahan di Negri ini,Pahmi Lubis,POP,Norton Records,50,50,,2021,
JQcom238,JQ Composey,Fahmi Junior 1,Mereka Salah Apa,Pahmi Lubis,POP,Norton Records,50,50,,2021,
JQcom239,JQ Composey,fajar Sidiq,Lukisan Hutan,Muhammad Ramonsyah,POP,Norton Records,50,50,,2021,
JQcom240,JQ Composey,anggi suciriani,Disini Aku Damai,Muhammad Ramonsyah,POP,Norton Records,50,50,,2021,
JQcom241,JQ Composey,farhan hadi,Save My Forest,Muhammad Ramonsyah,POP,Norton Records,50,50,,2021,
JQcom242,JQ Composey,imonk (Irma Hartini),Jangan rusak hutanku,Muhammad Ramonsyah,POP,Norton Records,50,50,,2021,
JQcom243,JQ Composey,iqbal irvana,kemana hutanku,Muhammad Ramonsyah,POP,Norton Records,50,50,,2021,
JQcom244,JQ Composey,rega,akankah hilang hutanku,Muhammad Ramonsyah,POP,Norton Records,50,50,,2021,
JQcom245,JQ Composey,nio,hutan pagi ini,Muhammad Ramonsyah,POP,Norton Records,50,50,,2021,
JQcom246,JQ Composey,omen (Wanwan Kurnia),hutan tinggal mimpi,Muhammad Ramonsyah,POP,Norton Records,50,50,,2021,
JQcom247,JQ Composey,yasbih,jaga hutan ini hei,Muhammad Ramonsyah,POP,Norton Records,50,50,,2021,
JQcom248,JQ Composey,Nami,Tara Lana (Hanya Singgah),Kiki Iriyana,POP,BIG Records,50,50,,2022,https://youtu.be/oJm1YeXWkh8?si=eKd5aVvJNL15KiXF
JQcom249,JQ Composey,Fadhel Muzar,Today,Fadhel Muzar Saktian,POP,BIG Records,50,50,,2022,https://youtu.be/sGjEcfMKync?si=heyLYz0jKy4VjjUA
JQcom250,JQ Composey,Story Mother Day,Selalu Bersama,Ronnie Gunawan Harry Zachary Andri Rohim,Pop Rock,BIG Records,50,50,,2022,https://youtu.be/AIx2WGinWYc?si=qX2Bj33LJpofJWwk
JQcom251,JQ Composey,Fajar Rain,Ramadhan,Fajar Kuspermana,Religi Muslim,BIG Records,16.66,50,,2022,https://youtu.be/PFVKR72FHAM?si=fHHsB2eIiqfbNyMc
JQcom252,JQ Composey,Pelangi Pasaribu,Seperti Pelangi (Untukmu Mamah),Muhammad Ramonsyah,Children,BIG Records,50,50,,2022,
JQcom253,JQ Composey,Pelangi Pasaribu,I'm Like A Barbie Doll,Muhammad Ramonsyah,Children,BIG Records,50,50,,2022,
JQcom254,JQ Composey,Joe Marnio,Takdirmu Bersamanya,Arif Apriliadi,POP,Norton Records,50,50,,2022,
JQcom255,JQ Composey,Agung Aska,Selalu Ada,Arif Apriliadi,POP,Norton Records,50,50,,2022,
JQcom256,JQ Composey,Galank,Perpisahan Kita,Arif Apriliadi,POP,Norton Records,50,50,,2022,
JQcom257,JQ Composey,Nowadays Erase,Take It Easy,Zihan Tambunan,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/pmIAJwqRzGE?si=HwlLA6BJ_DrZ54Op
JQcom258,JQ Composey,Hue,Strangers,Tri Satya Arief Zakarias Topuh,Rock,BIG Records,25,50,,2022,https://youtu.be/ZOJ6XylZ2P4?si=KK1OWUksKKZ_cmLE
JQcom259,JQ Composey,Harris Marchiano,Aku Yang Salah,Arif Apriliadi,POP,Norton Records,50,50,,2022,
JQcom260,JQ Composey,Nowedays Erase,December,Josua Binoto Hamonangan,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/ZHSiCJ7Ikl8?si=NmkycljO9h0vLp-7
JQcom261,JQ Composey,Y.A.W,Don't Let GO,Yafet Ari Wijaya,Bedroom Pop,BIG Records,50,50,,2022,https://youtu.be/89RRpkH58sE?si=uu1mr_Uz9uxSbBfs
JQcom262,JQ Composey,Nowadays Erase,Love for Evermore,Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/BVvBebOFGVM?si=JevDkHSdxQE6YZhi
JQcom263,JQ Composey,R-Pro,Cyberspace,Jaenudin Muslim Eka Putra Pratama Febrian Andriansyah Aditya Gustira Pratama,,BIG Records,12.5,50,,2022,https://youtu.be/2YoU9APYJ58?si=9qykb72X7PUPf6y3
JQcom264,JQ Composey,Kamar Jiwa,Akar,Fauzan hermawan dan mohammad firtah umami,pop,BIG Records,25,50,,2022,https://youtu.be/E8SD5bNfXY0?si=57-MWN-PbSKbUoGI
JQcom265,JQ Composey,Vikry Satria Nugraha,Pelangi,Vikry Satria Nugraha,,BIG Records,50,50,,2022,https://youtu.be/gWPtVwo0CJo?si=xvFK_uEoNBJ99LgB
JQcom266,JQ Composey,R-Pro,Blue,Jaenudin Muslim,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/RE34D0qnBJg?si=Q9gd5a21OsbkzPmW
JQcom267,JQ Composey,Nowadays Erase,Tatap Terindah,Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom268,JQ Composey,Fadhel Muzar Feat. Euodia Nathania,Here,Fadhel Muzar Saktian,POP,BIG Records,50,50,,2022,https://youtu.be/sGjEcfMKync?si=heyLYz0jKy4VjjUA
JQcom269,JQ Composey,Fadhel Muzar,Kamu,Fadhel Muzar Saktian,POP,BIG Records,50,50,,2022,https://youtu.be/sGjEcfMKync?si=heyLYz0jKy4VjjUA
JQcom270,JQ Composey,Nowadays Erase,Kamu Bukan Dia,Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom271,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Acoustic Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom272,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Remix Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom273,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Instrumental ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom274,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Karaoke ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom275,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Live Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom276,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Radio Edit ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom277,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Extended Mix ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom278,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Club Mix ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom279,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Dub Mix ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom280,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Vocal Mix ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom281,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Instrumental Mix ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom282,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Acapella ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom283,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Piano Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom284,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Guitar Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom285,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Orchestral Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom286,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Jazz Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom287,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Rock Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom288,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Pop Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom289,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Ballad Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom290,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Country Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom291,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Reggae Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom292,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Hip Hop Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom293,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( R&B Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom294,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Soul Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom295,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Funk Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom296,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Blues Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom297,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Folk Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom298,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Classical Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom299,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Electronic Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom300,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Ambient Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom301,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Trance Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom302,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( House Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom303,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Techno Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom304,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Dubstep Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom305,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Drum and Bass Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom306,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Breakbeat Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom307,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Garage Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom308,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Jungle Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom309,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Hardcore Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom310,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Gabber Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom311,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Happy Hardcore Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom312,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Speedcore Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom313,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Frenchcore Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom314,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Industrial Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom315,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( EBM Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom316,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Darkwave Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom317,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Synthwave Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom318,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Retrowave Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom319,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Vaporwave Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom320,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Chillwave Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom321,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Lo-fi Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom322,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Chillhop Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom323,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Trip Hop Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom324,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Downtempo Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom325,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Chill Out Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom326,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Lounge Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom327,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Nu Jazz Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom328,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Acid Jazz Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom329,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Smooth Jazz Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom330,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Contemporary Jazz Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom331,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Fusion Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom332,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Latin Jazz Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom333,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Bossa Nova Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom334,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Samba Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom335,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Salsa Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom336,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Mambo Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom337,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Cha Cha Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom338,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Rumba Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom339,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Tango Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom340,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Flamenco Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom341,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Fado Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom342,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Celtic Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom343,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Irish Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom344,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Scottish Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom345,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Welsh Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom346,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Breton Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom347,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Cornish Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom348,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Manx Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom349,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Galician Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom350,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Asturian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom351,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Basque Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom352,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Catalan Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom353,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Occitan Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom354,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Provençal Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom355,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Corsican Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom356,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Sardinian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom357,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Sicilian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom358,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Neapolitan Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom359,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Venetian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom360,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Lombard Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom361,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Piedmontese Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom362,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Ligurian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom363,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Emilian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom364,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Romagnol Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom365,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Friulian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom366,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Ladin Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom367,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Romansh Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom368,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Franco-Provençal Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom369,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Walloon Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom370,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Luxembourgish Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom371,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Alsatian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom372,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Low German Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom373,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Bavarian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom374,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Austrian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom375,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Swiss German Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom376,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Yiddish Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom377,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Pennsylvania Dutch Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom378,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Afrikaans Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom379,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Dutch Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom380,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Flemish Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom381,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( West Frisian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom382,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( North Frisian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom383,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Saterland Frisian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom384,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Danish Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom385,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Norwegian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom386,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Swedish Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom387,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Icelandic Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom388,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Faroese Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom389,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Finnish Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom390,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Estonian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom391,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Latvian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493
JQcom392,JQ Composey,Nowadays Erase,Kamu Bukan Dia ( Lithuanian Version ),Zihan Tambunan / Zihan Parsaoran,Electro Pop,BIG Records,50,50,,2022,https://youtu.be/KREAznU75Ao?si=StHjo8iDtSbhv493`;

// Parse CSV data into JavaScript array
function parseCSVData(csvString) {
    const lines = csvString.trim().split('\n');
    const songs = [];
    
    lines.forEach(line => {
        if (line.trim()) {
            const columns = line.split(',');
            if (columns.length >= 11) {
                songs.push({
                    workId: columns[0] || '',
                    name: columns[1] || '',
                    singer: columns[2] || '',
                    title: columns[3] || '',
                    composer: columns[4] || '',
                    genre: columns[5] || '',
                    label: columns[6] || '',
                    shareComposer: columns[7] || '',
                    sharePublishing: columns[8] || '',
                    isrc: columns[9] || '',
                    year: columns[10] || '',
                    youtube: columns[11] || ''
                });
            }
        }
    });
    
    return songs;
}

// Export parsed data
const allSongsData = parseCSVData(csvData);

// Make available globally
if (typeof window !== 'undefined') {
    window.allSongsData = allSongsData;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = allSongsData;
}