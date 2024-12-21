import { it, describe } from "vitest";
import { MultiDimensionalFigNumbers } from "../../../src/index";
import { compareExpectToEqual } from "../../utils/helperGeneratorContext";

describe("MultiDimensional Figurate Numbers Generation", () => {
  it("should return the sequence of pentatope numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("pentatope", {}),
      [
        1, 5, 15, 35, 70, 126, 210, 330, 495, 715, 1001, 1365, 1820, 2380, 3060, 3876, 4845, 5985,
        7315, 8855, 10626, 12650, 14950, 17550, 20475,
      ],
    );
  });

  it("should return the sequence of nexus numbers", () => {
    compareExpectToEqual(MultiDimensionalFigNumbers.generate("nexus", { k: 24n }), [
      1n,
      33554431n,
      847255055011n,
      1125052618233181n,
      296897323970110501n,
      28132264806052748251n,
      1312638331634035199431n,
      36437863243293196808761n,
      680119055828895427060681n,
      9282102012308147411229751n,
      98347059433883722041830251n,
      845615107006806407559468181n,
      6102447848426126536429441261n,
      37942385790981556448484486931n,
      207512887134575115502428132751n,
      1015138917287805912879759846001n,
      4502976812120172977442866785681n,
      18318031798594702264975713702511n,
      68987836477312984892694326586931n,
      242467824311743910463390389719501n,
      800727845922724266740722458520501n,
      2499251872251485580418771854201931n,
      7410243533745335619014318096967511n,
      20963891072487273520604142938560681n,
      56808183325605704247112578099015001n,
      147955988037955065642904631491203751n,
      371492957705390120242888827680391931n,
      901642246235866728861945392100736261n,
      2120453089678034225211398866754733181n,
      4842523970802741336806971748525669251n,
      10759906395501358333837313998767870751n,
      23302503375185949599084511930203155681n,
      49265933459856105712853656119470633761n,
      101828895780007014286990551325721054431n,
      206039468367489885618361877239850957251n,
      408611683992293747092011689842522621501n,
      795123235649389663670366734626479418181n,
      1519724432255728430628572343620488910011n,
      2855686883786281894863124090071170099431n,
      5280183239270075950194797231225325279001n,
    ]);
  });

  it("should return the sequence of five dimensional polygonal pyramidal numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("fiveDimensionalMgonalPyramidal", { m: 9n }),
      [
        1, 12, 57, 182, 462, 1008, 1974, 3564, 6039, 9724, 15015, 22386, 32396, 45696, 63036, 85272,
        113373, 148428, 191653, 244398, 308154, 384560, 475410, 582660, 708435, 855036, 1024947,
        1220842, 1445592, 1702272, 1994168, 2324784, 2697849, 3117324, 3587409,
      ],
    );
  });

  it("should return the sequence of six dimensional polygonal pyramidal numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("sixDimensionalMgonalPyramidal", { m: 16n }),
      [
        1, 20, 119, 448, 1302, 3192, 6930, 13728, 25311, 44044, 73073, 116480, 179452, 268464,
        391476, 558144, 780045, 1070916, 1446907, 1926848, 2532530, 3289000, 4224870, 5372640,
        6769035, 8455356, 10477845, 12888064, 15743288, 19106912, 23048872, 27646080, 32982873,
        39151476, 46252479, 54395328, 63698830, 74291672, 86312954, 99912736, 115252599, 132506220,
        151859961, 173513472, 197680308,
      ],
    );
  });

  it("should return the sequence of polyoctahedral numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("polyOctahedral", {}),
      [
        1, 24, 153, 544, 1425, 3096, 5929, 10368, 16929, 26200, 38841, 55584, 77233, 104664, 138825,
        180736, 231489, 292248, 364249, 448800, 547281, 661144, 791913, 941184, 1110625, 1301976,
        1517049, 1757728, 2025969, 2323800, 2653321, 3016704, 3416193, 3854104, 4332825, 4854816,
        5422609, 6038808, 6706089, 7427200, 8204961, 9042264, 9942073, 10907424, 11941425, 13047256,
        14228169, 15487488, 16828609, 18255000,
      ],
    );
  });

  it("should return the sequence of k dimensional hyper cube numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("kDimensionalHyperCube", { k: 19n, start: -23n }),
      [
        -74615470927590710561908487n,
        -32064977213018365645815808n,
        -13248496640331026125580781n,
        -5242880000000000000000000n,
        -1978419655660313589123979n,
        -708235345355337676357632n,
        -239072435685151324847153n,
        -75557863725914323419136n,
        -22168378200531005859375n,
        -5976303958948914397184n,
        -1461920290375446110677n,
        -319479999370622926848n,
        -61159090448414546291n,
        -10000000000000000000n,
        -1350851717672992089n,
        -144115188075855872n,
        -11398895185373143n,
        -609359740010496n,
        -19073486328125n,
        -274877906944n,
        -1162261467n,
        -524288n,
        -1n,
        0n,
        1n,
        524288n,
        1162261467n,
        274877906944n,
        19073486328125n,
        609359740010496n,
        11398895185373143n,
        144115188075855872n,
        1350851717672992089n,
        10000000000000000000n,
        61159090448414546291n,
        319479999370622926848n,
        1461920290375446110677n,
        5976303958948914397184n,
        22168378200531005859375n,
        75557863725914323419136n,
        239072435685151324847153n,
        708235345355337676357632n,
        1978419655660313589123979n,
        5242880000000000000000000n,
        13248496640331026125580781n,
      ],
    );
  });

  it("should return the sequence of k dimensional centered hyper cube numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("kDimensionalCenteredHyperCube", { k: 19n }),
      [
        1n,
        524289n,
        1162785755n,
        276040168411n,
        19348364235069n,
        628433226338621n,
        12008254925383639n,
        155514083261229015n,
        1494966905748847961n,
        11350851717672992089n,
        71159090448414546291n,
        380639089819037473139n,
        1781400289746069037525n,
        7438224249324360507861n,
        28144682159479920256559n,
        97726241926445329278511n,
        314630299411065648266289n,
        947307781040489001204785n,
        2686655001015651265481611n,
        7221299655660313589123979n,
        18491376640331026125580781n,
        45313473853349391771396589n,
        106680448140609076207724295n,
        242115000837615863633192711n,
        531297410619196448237299849n,
        1130265145909533185640638601n,
        2336510164282443502115157539n,
        4703347349111490043111339555n,
        9236565696619399921049654661n,
        17725875916589991489578849669n,
      ],
    );
  });

  it("should return the sequence of k dimensional hypertetrahedron numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("kDimensionalHyperTetrahedron", { k: 14n }),
      [
        1, 15, 120, 680, 3060, 11628, 38760, 116280, 319770, 817190, 1961256, 4457400, 9657700,
        20058300, 40116600, 77558760, 145422675, 265182525, 471435600, 818809200, 1391975640,
        2319959400, 3796297200, 6107086800, 9669554100, 15084504396, 23206929840, 35240152720,
        52860229080, 78378960360, 114955808528, 166871334960, 239877544005, 341643774795,
        482320623240, 675248872536, 937845656300, 1292706174900, 1768966344600, 2403979904200,
        3245372870670, 4353548972850, 5804731963800, 7694644696200, 10142940735900,
      ],
    );
  });

  it("should return the sequence of centered hyperoctahedral numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("centeredHyperOctahedral", {}),
      [
        1, 9, 41, 129, 321, 681, 1289, 2241, 3649, 5641, 8361, 11969, 16641, 22569, 29961, 39041,
        50049, 63241, 78889, 97281, 118721, 143529, 172041, 204609, 241601, 283401, 330409, 383041,
        441729, 506921, 579081, 658689, 746241, 842249, 947241, 1061761, 1186369, 1321641, 1468169,
        1626561,
      ],
    );
  });

  it("should return the sequence of hypericosahedral numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("hyperIcosahedral", {}),
      [
        1, 120, 947, 3652, 9985, 22276, 43435, 76952, 126897, 197920, 295251, 424700, 592657,
        806092, 1072555, 1400176, 1797665, 2274312, 2839987, 3505140, 4280801, 5178580, 6210667,
        7389832, 8729425, 10243376, 11946195, 13852972, 15979377, 18341660,
      ],
    );
  });

  it("should return the sequence of hyperdodecahedral numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("hyperDodecahedral", {}),
      [
        1, 600, 4983, 19468, 53505, 119676, 233695, 414408, 683793, 1066960, 1592151, 2290740,
        3197233, 4349268, 5787615, 7556176, 9701985, 12275208, 15329143, 18920220, 23108001,
        27955180, 33527583, 39894168, 47127025, 55301376, 64495575, 74791108, 86272593, 99027780,
      ],
    );
  });

  it("should return the sequence of hyperoctahedral numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("hyperOctahedral", {}),
      [
        1, 8, 33, 96, 225, 456, 833, 1408, 2241, 3400, 4961, 7008, 9633, 12936, 17025, 22016, 28033,
        35208, 43681, 53600, 65121, 78408, 93633, 110976, 130625, 152776, 177633, 205408, 236321,
        270600,
      ],
    );
  });

  it("should return the sequence of centered biquadratic numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("centeredBiquadratic", {}),
      [
        1, 17, 97, 337, 881, 1921, 3697, 6497, 10657, 16561, 24641, 35377, 49297, 66977, 89041,
        116161, 149057, 188497, 235297, 290321,
      ],
    );
  });

  it("should return the sequence of k dimensional polygonal pyramidal numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("kDimensionalMgonalPyramidal", { k: 12n, m: 5n }),
      [
        1, 15, 117, 637, 2730, 9828, 30940, 87516, 226746, 545870, 1234506, 2645370, 5408312,
        10608612, 20058300, 36699260, 65189475, 112739445, 190285095, 314106975, 508033890,
        806403000, 1257988680, 1931159880, 2920581300, 4355838396, 6412441140, 9325747732,
        13408448352, 19072361880, 26855426728, 37454912040, 51768039141, 70941386971, 96430661145,
        130072636161, 174171336170, 231600803772, 305927120772, 401552692100, 523886186670,
        679541949450, 876573160190, 1124743518990, 1435842790200, 1824052137180, 2306365834500,
        2903076654660, 3638332996935, 4540776660225, 5644271063691, 6988730692515, 8621063595522,
        10596239890992, 12978500451280,
      ],
    );
  });

  it("should return the sequence of k dimensional hyperoctahedron numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("kDimensionalHyperOctahedron", { k: 13n }),
      [
        1, 26, 339, 2964, 19605, 104910, 474215, 1866280, 6539625, 20758530, 60511803, 163786428,
        415382397, 994551222, 2262406095, 4916055120, 10250995665, 20594048490, 39997954595,
        75328091620, 137924473701, 246091725726, 428760149559, 730777112184, 1220435354425,
        2000029880786, 3220465235211, 5101218625804, 7957311102029, 12235359613830, 18561289434015,
        27802892687520, 41151139742625, 60225002787770, 87205553639155, 125006271205428,
        177487860620853, 249727470560622, 348354024688647, 481963487019720, 661630291251465,
        901533915618210, 1219722715205595, 1639040673649500, 2188246749634845, 2903361017882966,
        3829276890177391, 5021684403938544, 6549355942310769, 8496852863123850,
      ],
    );
  });

  it("should return the sequence of k dimensional centered hypertetrahedron numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("kDimensionalCenteredHyperTetrahedron", { k: 11n }),
      [
        1, 13, 91, 455, 1820, 6188, 18564, 50388, 125970, 293930, 646646, 1352078, 2704155, 5200287,
        9657609, 17383405, 30419935, 51889747, 86474661, 141070137, 225666870, 354523390, 547707394,
        833099722, 1248973544, 1847282696, 2697817448, 3893413576, 5556431725, 7846758985,
        10971623663, 15197557739, 20864889773, 28405204425, 38362263615, 51416949051, 68416856768,
        90411251840, 118692175952, 154842592464, 200792553390, 258884480790, 331948771882,
        423391063186, 537292624687, 678525500835, 852884171685, 1067235675129, 1329690310507,
        1649795235439, 2038753472041, 2509671056333, 3077835296186, 3761027349170, 4579872592750,
        5558232536038, 6723642315364, 8107798125908, 9747099269180, 11683249841900, 13963925456481,
        16643510767533, 19783913983275, 23455464966167, 27737903974169, 32721468563525,
        38508086666595, 45212684374767, 52964617497636, 61909236536212, 72209595300700,
        84048314023180, 97629608463114, 113181497179842, 130958199851934, 151242740259286,
        174349768311043, 200628616301671, 230466605409665, 264292619319365,
      ],
    );
  });

  it("should return the sequence of k dimensional centered hyperoctahedron numbers", () => {
    compareExpectToEqual(
      MultiDimensionalFigNumbers.generate("kDimensionalCenteredHyperOctahedron", { k: 32n }),
      [
        1n,
        65n,
        2113n,
        45825n,
        746241n,
        9737793n,
        106114625n,
        993696769n,
        8166636545n,
        59864549953n,
        396469547585n,
        2397196917505n,
        13348247055105n,
        68954032430145n,
        332538522833985n,
        1505357362548737n,
        6427269150511105n,
        25991659563764801n,
        99928969289077825n,
        366485940838832897n,
        1286011828550830849n,
        4329547032027650625n,
        14019400249152942657n,
        43761350039110851585n,
        131955581594696793089n,
        385095408183758079553n,
        1089618887377372884545n,
        2993989196011368428289n,
        8001035989283143418625n,
        20824104716955953041473n,
        52853228343044936894529n,
        130973644638922564173825n,
        317241780630136241094657n,
        751874920284981143173185n,
        1745319075862302066540609n,
        3971699634878256948372225n,
        8867962331174090943697665n,
        19443209145457653013020225n,
        41892715808110231862187585n,
        88765858334732202193255425n,
      ],
    );
  });
});
