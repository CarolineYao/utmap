/* store all data of buildings in u of t campus*/
var data = [
    {abb: "AB", latitude: 43.660474, longitude: -79.39745, name: "Astronomy and Astrophysics"},
    {abb: "AD", latitude: 43.668097, longitude: -79.400255, name: "Enrolment Services"},
    {abb: "AH", latitude: 43.665019, longitude: -79.390244, name: "Muzzo Family Alumni Hall"},
    {abb: "AN", latitude: 43.667524, longitude: -79.392614, name: "Annesley Hall"},
    {abb: "AP", latitude: 43.660066, longitude:-79.398537, name: "Anthropology Building"},
    
    {abb: "BA", latitude: 43.659724, longitude: -79.396774, name: "Bahen Centre for Information Technology"},
    {abb: "BC", latitude: 43.66721, longitude: -79.392909, name: "Birge-Carnegie Library"},
    {abb: "BF", latitude: 43.660975, longitude: -79.399587, name: "Bancroft Building"},
    {abb: "BI", latitude: 43.660418, longitude: -79.38854, name: "Banting Institute"},
    {abb: "BL", latitude: 43.664993, longitude: -79.399091, name: "Claude T Bissell Building"},
    {abb: "BN", latitude: 43.663048, longitude: -79.399926, name: "Clara Benson Building"},
    {abb: "BR", latitude: 43.666337, longitude: -79.390072, name: "Brennan Hall"},
    {abb: "BS", latitude: 43.66626, longitude: -79.388929, name: "St Basils Church"},
    {abb: "BT", latitude: 43.667365, longitude: -79.392561, name: "Isabel Bader Theatre"},
    {abb: "BW", latitude: 43.666975, longitude: -79.391113, name: "Burwash Hall"},

    {abb: "CA", latitude: 43.664485, longitude: -79.400582, name: "Campus Co-op Day Care"},
    {abb: "CB", latitude: 43.660229, longitude: -79.389225, name: "Best Institute"},
    {abb: "CE", latitude: 43.660634, longitude: -79.396745, name: "Centre for Engineering Innovation"},
    {abb: "CG", latitude: 43.661916, longitude: -79.392763, name: "Canadiana Gallery"},
    {abb: "CH", latitude: 43.66097, longitude: -79.395158, name: "Convocation Hall"},
    {abb: "CM", latitude: 43.658454, longitude: -79.397899, name: "Student Commons"},
    {abb: "CN", latitude: 43.654095, longitude: -79.385443, name: "89 Chestnut Residence"},
    {abb: "CO", latitude: 43.667105, longitude: -79.399786, name: "Comparative Education Services 162 St George St"},
    {abb: "CR", latitude: 43.665111, longitude: -79.390396, name: "Carr Hall"},
    {abb: "CS", latitude: 43.666813, longitude: -79.399642, name: "School of Continuing Studies"},
    {abb: "CU", latitude: 43.659379, longitude: -79.396185, name: "Cumberland House"},
    {abb: "CX", latitude: 43.659088, longitude: -79.393641, name: "Communication House"},

    {abb: "DA", latitude: 43.659341, longitude: -79.400626, name: "Daniels Building"},
    {abb: "DC", latitude: 43.660084, longitude: -79.3927, name: "Terrence Donnelly CCBR"},
    {abb: "DN", latitude: 43.655988, longitude: -79.386637, name: "Dentistry Building"},
    {abb: "DR", latitude: 43.662138, longitude: -79.396541, name: "J Robert S Prichard Alumni House"},

    {abb: "EA", latitude: 43.659738, longitude: -79.395248, name: "Engineering Annex"},
    {abb: "EH", latitude: 43.666742, longitude: -79.390278, name: "Elmsley Hall"},
    {abb: "EJ", latitude: 43.666506, longitude: -79.39424, name: "Edward Johnson Building"},
    {abb: "EM", latitude: 43.666613, longitude: -79.392819, name: "Emmanuel College"},
    {abb: "EP", latitude: 43.659393, longitude: -79.392078, name: "Stewart Building"},
    {abb: "ER", latitude: 43.664022, longitude: -79.401214, name: "Early Learning Centre"},
    {abb: "ES", latitude: 43.660993, longitude: -79.399659, name: "Earth Sciences Centre"},
    {abb: "EX", latitude: 43.658499, longitude: -79.393135, name: "Exam Centre"},

    {abb: "FA", latitude: 43.665461, longitude: -79.403313, name: "Faculty Association"},
    {abb: "FC", latitude: 43.661293, longitude: -79.400608, name: "Faculty Club"},
    {abb: "FE", latitude: 43.666775, longitude: -79.402327, name: "371 Bloor Street West"},
    {abb: "FG", latitude: 43.660226, longitude: -79.392233, name: "FitzGerald Building"},
    {abb: "FH", latitude: 43.666784, longitude: -79.393804, name: "Falconer Hall"},
    {abb: "FI", latitude: 43.658664, longitude: -79.397475, name: "Fields Institute"},

    {abb: "GA", latitude: 43.65831, longitude: -79.397217, name: "Gage Building"},
    {abb: "GB", latitude: 43.659869, longitude: -79.396433, name: "Galbraith Building"},
    {abb: "GC", latitude: 43.667726, longitude: -79.39322, name: "Goldring Student Centre"},
    {abb: "GD", latitude: 43.663191, longitude: -79.401747, name: "Graduate House"},
    {abb: "GE", latitude: 43.666072, longitude: -79.399528, name: "Max Gluskin House"},
    {abb: "GI", latitude: 43.665786, longitude: -79.397297, name: "George Ignatieff Theatre"},
    {abb: "GM", latitude: 43.664254, longitude: -79.401124, name: "Luella Massey Studio Theatre"},
    {abb: "GO", latitude: 43.667136, longitude: -79.398106, name: "Goldring Centre for High Performance Sport"},
    {abb: "GR", latitude: 43.664944, longitude: -79.39703, name: "Graham (John W) Library"},
    {abb: "GS", latitude: 43.661958, longitude: -79.397334, name: "School of Graduate Studies"},
    {abb: "GU", latitude: 43.660681, longitude: -79.400257, name: "Graduate Students' Union"},

    {abb: "HA", latitude: 43.659758, longitude: -79.393653, name: "Haultain Building"},
    {abb: "HH", latitude: 43.663637, longitude: -79.394413, name: "Hart House"},
    {abb: "HI", latitude: 43.665726, longitude: -79.39776, name: "St Hildas College"},
    {abb: "HS", latitude: 43.65922, longitude: -79.392855, name: "Health Sciences Building"},
    {abb: "HU", latitude: 43.659319, longitude: -79.398496, name: "215 Huron Street"},

    {abb: "IA", latitude: 43.665675, longitude: -79.402703, name: "Internal Audit"},
    {abb: "IN", latitude: 43.665438, longitude: -79.39941, name: "Innis College"},
    {abb: "IR", latitude: 43.666721, longitude: -79.399247, name: "Centre for Industrial Relations"},
    {abb: "IS", latitude: 43.665838, longitude: -79.398935, name: "Innis College Student Residence"},

    {abb: "JH", latitude: 43.667451, longitude: -79.400382, name: "Jackman Humanities Building"},
    {abb: "JP", latitude: 43.66406, longitude: -79.389393, name: "90 Wellesley St W"},

    {abb: "KL", latitude: 43.665038, longitude: -79.3898, name: "J M Kelly Library"},
    {abb: "KP", latitude: 43.660583, longitude: -79.400456, name: "Koffler House"},
    {abb: "KS", latitude: 43.658806, longitude: -79.396603, name: "Koffler Student Services Centre"},
    {abb: "KX", latitude: 43.661334, longitude: -79.397148, name: "Knox College"},

    {abb: "LA", latitude: 43.665518, longitude: -79.397199, name: "Gerald Larkin Building"},
    {abb: "LB", latitude: 43.666601, longitude: -79.390821, name: "Lower Burwash House"},
    {abb: "LC", latitude: 43.667297, longitude: -79.389867, name: "Loretto College"},
    {abb: "LG", latitude: 43.66406, longitude: -79.40218, name: "Fasken Martineau Building"},
    {abb: "LI", latitude: 43.668393, longitude: -79.393802, name: "Lillian Massey Building"},
    {abb: "LM", latitude: 43.661639, longitude: -79.397787, name: "Lash Miller Chemical Laboratories"},
    {abb: "LW", latitude: 43.666206, longitude: -79.39394, name: "Faculty of Law"},

    {abb: "M2", latitude: 43.659741, longitude: -79.389833, name: "MARS 2"},
    {abb: "MA", latitude: 43.664765, longitude: -79.397181, name: "Massey College"},
    {abb: "MB", latitude: 43.659418, longitude: -79.393403, name: "Lassonde Mining Building"},
    {abb: "MC", latitude: 43.659924, longitude: -79.394183, name: "Mechanical Engineering Building"},
    {abb: "ME", latitude: 43.664412, longitude: -79.390259, name: "39 Queens Park Cres East"},
    {abb: "MG", latitude: 43.668192, longitude: -79.392479, name: "Margaret Addison Hall"},
    {abb: "MK", latitude: 43.667572, longitude: -79.398607, name: "Munk School of Global Affairs at Observatory"},
    {abb: "ML", latitude: 43.664049, longitude: -79.389418, name: "McLuhan Program"},
    {abb: "MM", latitude: 43.661648, longitude: -79.397207, name: "MacDonald-Mowat House"},
    {abb: "MO", latitude: 43.663039, longitude: -79.39784, name: "Morrison Hall"},
    {abb: "MP", latitude: 43.660743, longitude: -79.398168, name: "McLennan Physical Labs"},
    {abb: "MR", latitude: 43.661286, longitude: -79.392835, name: "McMurrich Building"},
    {abb: "MS", latitude: 43.661133, longitude: -79.393973, name: "Medical Sciences Building"},
    {abb: "MU", latitude: 43.664586, longitude: -79.396462, name: "Munk School of Global Affairs at Trinity"},

    {abb: "NB", latitude: 43.6603, longitude: -79.400352, name: "North Borden Building"},
    {abb: "NC", latitude: 43.661432, longitude: -79.400886, name: "New College"},
    {abb: "NF", latitude: 43.666559, longitude: -79.392097, name: "Northrop Frye Hall"},
    {abb: "NL", latitude: 43.660509, longitude: -79.391747, name: "C David Naylor Building"},
    {abb: "NR", latitude: 43.661222, longitude: -79.400994, name: "New College III"},

    {abb: "OA", latitude: 43.658896, longitude: -79.392603, name: "Old Admin Building Board of Education (263 McCaul St)"},
    {abb: "OH", latitude: 43.666243, longitude: -79.388976, name: "Odette Hall"},
    {abb: "OI", latitude: 43.667888, longitude: -79.39855, name: "Ontario Institute for Studies in Education"},

    {abb: "PB", latitude: 43.659933, longitude: -79.391399, name: "Leslie L Dan Pharmacy Building"},
    {abb: "PG", latitude: 43.660315, longitude: -79.396744, name: "Physical Geography Laboratories (45 St George St)"},
    {abb: "PI", latitude: 43.665506, longitude: -79.390947, name: "Pontifical Institute"},
    {abb: "PR", latitude: 43.666515, longitude: -79.391319, name: "E J Pratt Library"},
    {abb: "PT", latitude: 43.659538, longitude: -79.394452, name: "D L Pratt Building"},

    {abb: "RB", latitude: 43.664145, longitude: -79.399132, name: "Fisher Rare Book Library"},
    {abb: "RG", latitude: 43.663914, longitude: -79.390047, name: "Regis College"},
    {abb: "RJ", latitude: 43.667704, longitude: -79.390924, name: "Rowell Jackman Hall"},
    {abb: "RL", latitude: 43.664559, longitude: -79.398833, name: "John P Robarts Library"},
    {abb: "RM", latitude: 43.658596, longitude: -79.393418, name: "254-56 McCaul Street"},
    {abb: "RS", latitude: 43.659828, longitude: -79.392892, name: "Rosebrugh Building"},
    {abb: "RT", latitude: 43.664991, longitude: -79.398596, name: "Rotman School of Management"},
    {abb: "RU", latitude: 43.655671, longitude: -79.389088, name: "Rehabilitation Sciences Building"},
    {abb: "RW", latitude: 43.662976, longitude: -79.399218, name: "Ramsay Wright Laboratories"},

    {abb: "SA", latitude: 43.666001, longitude: -79.40294, name: "713 Spadina Ave"},
    {abb: "SB", latitude: 43.660115, longitude: -79.399922, name: "South Borden Building"},
    {abb: "SC", latitude: 43.664825, longitude: -79.401014, name: "Sussex Court"},
    {abb: "SD", latitude: 43.662507, longitude: -79.397548, name: "Sir Daniel Wilson Residence"},
    {abb: "SF", latitude: 43.660005, longitude: -79.394795, name: "Sandford Fleming Building"},
    {abb: "SI", latitude: 43.660931, longitude: -79.395828, name: "Simcoe Hall"},
    {abb: "SK", latitude: 43.668114, longitude: -79.397739, name: "Factor-Inwentash Social Work"},
    {abb: "SM", latitude: 43.662176, longitude: -79.394115, name: "Gerstein Science Info Centre in Sigmund Samuel Lib Bldg"},
    {abb: "SO", latitude: 43.663172, longitude: -79.394786, name: "Stewart Observatory"},
    {abb: "SR", latitude: 43.665735, longitude: -79.389108, name: "Sam Sorbara Hall Student Res"},
    {abb: "SS", latitude: 43.662668, longitude: -79.398465, name: "Sidney Smith Hall"},
    {abb: "SU", latitude: 43.66495, longitude: -79.401796, name: "40 Sussex Ave"},

    {abb: "TC", latitude: 43.665062, longitude: -79.395548, name: "Trinity College"},
    {abb: "TF", latitude: 43.665265, longitude: -79.391097, name: "Teefy Hall"},
    {abb: "TH", latitude: 43.664756, longitude: -79.390855, name: "Toronto School of Theology"},
    {abb: "TR", latitude: 43.663512, longitude: -79.39523, name: "Soldiers Tower"},
    {abb: "TT", latitude: 43.658213, longitude: -79.39989, name: "455 Spadina Ave"},

    {abb: "UB", latitude: 43.667255, longitude: -79.391081, name: "Upper Burwash House"},
    {abb: "UC", latitude: 43.662498, longitude: -79.395477, name: "University College"},
    {abb: "UP", latitude: 43.663301, longitude: -79.397814, name: "University College Union"},

    {abb: "VA", latitude: 43.667008, longitude: -79.397236, name: "Varsity Centre"},
    {abb: "VC", latitude: 43.666976, longitude: -79.391998, name: "Victoria College"},
    {abb: "VI", latitude: 43.661489, longitude: -79.396369, name: "Nona MacDonald Visitors Centre"},
    {abb: "VP", latitude: 43.666293, longitude: -79.396817, name: "Varsity Pavilion"},

    {abb: "WA", latitude: 43.666901, longitude: -79.39938, name: "123 St George St"},
    {abb: "WB", latitude: 43.65904, longitude: -79.395275, name: "Wallberg Building"},
    {abb: "WE", latitude: 43.662403, longitude: -79.400414, name: "Wetmore Hall, New College"},
    {abb: "WI", latitude: 43.661488, longitude: -79.400888, name: "Wilson Hall, New College"},
    {abb: "WO", latitude: 43.667454, longitude: -79.399289, name: "Woodsworth College Residence"},
    {abb: "WR", latitude: 43.669625, longitude: -79.405952, name: "McCarthy House/Jackman Institute of Child Study"},
    {abb: "WS", latitude: 43.663096, longitude: -79.401476, name: "Warren Stevens Building"},
    {abb: "WT", latitude: 43.663738, longitude: -79.397978, name: "Whitney Hall"},
    {abb: "WW", latitude: 43.666264, longitude: -79.399046, name: "Woodsworth College"},
    {abb: "WY", latitude: 43.664586, longitude: -79.395219, name: "Wycliffe College"},

    {abb: "XG", latitude: 43.664379, longitude: -79.402342, name: "665 Spadina Avenue"},
    {abb: "ZC", latitude: 43.660584, longitude: -79.387776, name: "88 College Street"}
];

module.exports = data;