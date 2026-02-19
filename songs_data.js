// Song catalog data from PT. Melodex Sonavia International (49 songs)
const allSongsData = [
    { code: "MLDX001", title: "Kita Tak Sama", singer: "Naila", composer: "Anton Sugiharto", genre: "POP", isrc: "QM4TW2683528", label: "Norton Records" },
    { code: "MLDX002", title: "Tuhan Ku Tak Berdaya", singer: "Naila", composer: "Anton Sugiharto", genre: "POP", isrc: "QM4TW2689483", label: "Norton Records" },
    { code: "MLDX003", title: "Ku Tak Kuasa", singer: "Naila", composer: "Anton Sugiharto", genre: "POP", isrc: "", label: "Norton Records" },
    { code: "MLDX004", title: "Tak Bisa Bersama", singer: "Naila", composer: "Anton Sugiharto", genre: "POP", isrc: "", label: "Norton Records" },
    { code: "MLDX005", title: "2,5 Menit Bersama Kenanganmu", singer: "Erina Puspa", composer: "Anton Sugiharto", genre: "POP", isrc: "QM4TW2687891", label: "Norton Records" },
    { code: "MLDX006", title: "Udan Kenangan", singer: "Uut Selly", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX007", title: "Karangan Bunga Dinggo Mantan", singer: "Echi Fenia", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX008", title: "Kangen Kamu", singer: "Echi Fenia", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX009", title: "Setetes Air Mata dan Seluas Senyuman", singer: "Fenia", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX010", title: "Cinta Terpendam di Hati", singer: "Fenia", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX011", title: "Janda", singer: "Risma Pertiwi", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX012", title: "Nagih Utang", singer: "Anton", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX013", title: "Aku Tulang Rusuk Dudu Tulang Punggung", singer: "Anton", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX014", title: "Belahan Cinta Dunia", singer: "Joe Marino & Harris Marchiano", composer: "Isra Ruddin", genre: "DANGDUT", isrc: "", label: "Norton Records" },
    { code: "MLDX015", title: "Christmas Truce", singer: "FOODOMORE", composer: "Yulius Aprianto", genre: "POP", isrc: "", label: "BIG Records" },
    { code: "MLDX016", title: "Christmas Truce", singer: "FOODOMORE", composer: "John Rinson Nicolaus", genre: "POP", isrc: "", label: "BIG Records" },
    { code: "MLDX017", title: "Christmas Truce", singer: "FOODOMORE", composer: "Andhika Pudi Siswanto", genre: "POP", isrc: "", label: "BIG Records" },
    { code: "MLDX018", title: "Christmas Truce", singer: "FOODOMORE", composer: "Sunu Prasasti", genre: "POP", isrc: "", label: "BIG Records" },
    { code: "MLDX019", title: "Christmas Truce", singer: "FOODOMORE", composer: "Sagit Hariaji", genre: "POP", isrc: "", label: "BIG Records" },
    { code: "MLDX020", title: "Christmas Truce", singer: "FOODOMORE", composer: "Mikhael Mestro MS", genre: "POP", isrc: "", label: "BIG Records" },
    { code: "MLDX021", title: "Heartbreaking", singer: "Thursday Evening", composer: "Fitriana Sri Rahayu", genre: "Alternative", isrc: "", label: "BIG Records" },
    { code: "MLDX022", title: "Heartbreaking", singer: "Thursday Evening", composer: "Sandi Rachman", genre: "Alternative", isrc: "", label: "BIG Records" },
    { code: "MLDX023", title: "Heartbreaking", singer: "Thursday Evening", composer: "Suherman", genre: "Alternative", isrc: "", label: "BIG Records" },
    { code: "MLDX024", title: "Heartbreaking", singer: "Thursday Evening", composer: "Tresna Juliansyah", genre: "Alternative", isrc: "", label: "BIG Records" },
    { code: "MLDX025", title: "Echoes", singer: "Twonda", composer: "Dika Kusumah Nugraha, Yana Juniar", genre: "POP", isrc: "", label: "BIG Records" },
    { code: "MLDX026", title: "Echoes", singer: "Twonda", composer: "Yana Juniar", genre: "POP", isrc: "", label: "BIG Records" },
    { code: "MLDX027", title: "Ramadhan (Hari Kemenangan)", singer: "Febree", composer: "Febri Yusuf Ramadhan, Sunu Prasasti", genre: "Pop Religi", isrc: "", label: "BIG Records" },
    { code: "MLDX028", title: "Ramadhan (Hari Kemenangan)", singer: "Febree", composer: "Sunu Prasasti", genre: "Pop Religi", isrc: "", label: "BIG Records" },
    { code: "MLDX029", title: "Belahan Cinta Dunia", singer: "Joe Marino & Harris Marchiano", composer: "Isra Ruddin", genre: "DANGDUT", isrc: "", label: "Norton Records" },
    { code: "MLDX030", title: "Janda", singer: "Risma Pertiwi", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX031", title: "Permata Indonesia", singer: "Elinsia Tahana Prananti", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Norton Records" },
    { code: "MLDX032", title: "Sang Saka", singer: "Fenia", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Norton Records" },
    { code: "MLDX033", title: "Aku Tulang Rusuk Dudu Tulang Punggung", singer: "Nana", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX034", title: "Karangan Bunga Dinggo Mantan", singer: "Berlian", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX035", title: "Nagih Utang", singer: "Vera Pantura", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX036", title: "Janda Semakin Di Depan", singer: "Risma Pratiwi", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX037", title: "Aku Trimo", singer: "Uut Selly", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX038", title: "Gondes Kechu", singer: "Uut Selly", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX039", title: "Ora Mangan Cinta", singer: "Vera Pantura", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX040", title: "Korban Biduan", singer: "Uut Selly", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX041", title: "Jadikan Dia Milikku", singer: "Vera Pantura", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX042", title: "Sing Tak Tresni", singer: "Rhisma Pertiwi", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX043", title: "Aku Trimo", singer: "Uut Selly", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX044", title: "Setetes Air dan Seluas Senyuman", singer: "Desy Puspita", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX045", title: "Dulu Sayang Kini Mantan", singer: "Uut Selly", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX046", title: "Cinta Terpendam", singer: "Fenia", composer: "Anton Sugiharto", genre: "DANGDUT", isrc: "", label: "Manis Musik" },
    { code: "MLDX047", title: "Akhir Cerita Di Kota Jogja", singer: "N2W Project", composer: "Anton Sugiharto", genre: "POP", isrc: "", label: "Norton Records" },
    { code: "MLDX048", title: "Ketika Dia Datang", singer: "N2W Project", composer: "Anton Sugiharto", genre: "POP", isrc: "", label: "Norton Records" },
    { code: "MLDX049", title: "Menjadi Kenangan", singer: "N2W Project", composer: "Anton Sugiharto", genre: "POP", isrc: "", label: "Norton Records" }
];

// Make available globally
if (typeof window !== 'undefined') {
    window.allSongsData = allSongsData;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = allSongsData;
}