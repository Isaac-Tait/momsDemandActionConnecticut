const senatorData = [
  {
    id: '1',
    firstName: 'Saud',
    lastName: 'Anwar',
    district: 'S03',
    yearElected: 2020,
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707058079/Senator%20Photos/saudAnwar_wffasu.png',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707071583/Senate%20Districts/senateDistrictThree_pfz7dv.png',
  },
  {
    id: '2',
    firstName: 'Eric',
    lastName: 'Berthel',
    district: 'S32',
    yearElected: '2017',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707058079/Senator%20Photos/ericBerthel_jvvygm.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707084768/Senate%20Districts/senateDistrictThirtyTwo_afmp6s.png',
  },
  {
    id: '3',
    firstName: 'Jorge',
    lastName: 'Cabrera',
    district: 'S17',
    yearElected: '2021',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707058079/Senator%20Photos/jorgeCabrera_lmj4dd.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707079517/Senate%20Districts/senateDistrictSeventeen_e5ms8g.png',
  },
  {
    id: '4',
    firstName: 'Paul',
    lastName: 'Cicarella',
    district: 'S34',
    yearElected: 2020,
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707070385/Senator%20Photos/paulCicarella_vdrjya.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707084754/Senate%20Districts/senateDistrictThirtyFour_epvnv1.png',
  },
  {
    id: '5',
    firstName: 'Christine',
    lastName: 'Cohen',
    district: 'S12',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707070567/Senator%20Photos/christineCohen_xeitsd.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707075738/Senate%20Districts/senateDistrictTwelve_jr7vlw.png',
  },
  {
    id: '6',
    firstName: 'Bob',
    lastName: 'Duff',
    district: 'S25',
    yearElected: '2001',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707072590/Senator%20Photos/bobDuff_wkel3l.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707081530/Senate%20Districts/senateDistrictTwentyFive_ejojmh.png',
  },
  {
    id: '7',
    firstName: 'Ryan',
    lastName: 'Fazio',
    district: 'S36',
    yearElected: '2021',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707073326/Senator%20Photos/ryanFazio_r4y8ek.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707084760/Senate%20Districts/senateDistrictThirtySix_xjngdn.png',
  },
  {
    id: '8',
    firstName: 'Mae',
    lastName: 'Flexer',
    district: 'S29',
    yearElected: '2008',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707073527/Senator%20Photos/maeFlexer_mp3nhx.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707084212/Senate%20Districts/senateDistrictTwentyNine_ix3lw2.png',
  },
  {
    id: '9',
    firstName: 'John',
    lastName: 'Fonfara',
    district: 'S01',
    yearElected: '1996',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707074016/Senator%20Photos/johnFonfara_bifl28.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707071582/Senate%20Districts/senateDistrictOne_wmvwpj.png',
  },
  {
    id: '10',
    firstName: 'Herron',
    lastName: 'Gaston',
    district: 'S23',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707074870/Senator%20Photos/herronGaston_mbq5ni.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707081544/Senate%20Districts/senateDistrictTwentyThree_uzixxy.png',
  },
  {
    id: '11',
    firstName: 'Jeff',
    lastName: 'Gordon',
    district: 'S35',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707075017/Senator%20Photos/jeffGordon_rn719s.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707084753/Senate%20Districts/senateDistrictThirtyFive_z8znin.png',
  },
  {
    id: '12',
    firstName: 'Stephen',
    lastName: 'Harding',
    district: 'S30',
    yearElected: '2015',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707075170/Senator%20Photos/stephenHarding_ygb4z6.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707084211/Senate%20Districts/senateDistrictThirty_whwdlv.png',
  },
  {
    id: '13',
    firstName: 'Joan',
    lastName: 'Hartley',
    district: 'S15',
    yearElected: '2001',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707075529/Senator%20Photos/joanHartley_ih941q.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707075739/Senate%20Districts/senateDistrictFifteen_l296or.png',
  },
  {
    id: '14',
    firstName: 'Jan',
    lastName: 'Hochadel',
    district: 'S13',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707076153/Senator%20Photos/janHochadel_ppdvfl.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707075739/Senate%20Districts/senateDistrictThirteen_nvwzb5.png',
  },
  {
    id: '15',
    firstName: 'Tony',
    lastName: 'Hwang',
    district: 'S28',
    yearElected: '2009',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707076331/Senator%20Photos/tonyHwang_qsbvlt.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707084211/Senate%20Districts/senateDistrictTwentyEight_dwos7v.png',
  },
  {
    id: '16',
    firstName: 'Kevin',
    lastName: 'Kelly',
    district: 'S21',
    yearElected: '2021',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707076441/Senator%20Photos/kevinKelly_t6dj88.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707081538/Senate%20Districts/senateDistrictTwentyOne_duch3m.png',
  },
  {
    id: '17',
    firstName: 'John',
    lastName: 'Kissel',
    district: 'S07',
    yearElected: '1993',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707076534/Senator%20Photos/johnKissel_lec8kn.png',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707075260/Senate%20Districts/senateDistrictSeven_hbclin.png',
  },
  {
    id: '18',
    firstName: 'Julie',
    lastName: 'Kushner',
    district: 'S24',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707076677/Senator%20Photos/julieKushner_knjytw.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707081534/Senate%20Districts/senateDistrictTwentyFour_uf0kfa.png',
  },
  {
    id: '19',
    firstName: 'Matthew',
    lastName: 'Lesser',
    district: 'S09',
    yearElected: '2009',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707076899/Senator%20Photos/matthewLesser_k9vma5.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707075259/Senate%20Districts/senateDistrictNine_cvkdcv.png',
  },
  {
    id: '20',
    firstName: 'Martin',
    lastName: 'Looney',
    district: 'S11',
    yearElected: '1981',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707077031/Senator%20Photos/martinLooney_cnakmp.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707075740/Senate%20Districts/senateDistrictEleven_sksbmn.png',
  },
  {
    id: '21',
    firstName: 'Rick',
    lastName: 'Lopes',
    district: 'S06',
    yearElected: '2012',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707077269/Senator%20Photos/rickLopes_k0z3dy.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707071580/Senate%20Districts/senateDistrictSix_hqwcq7.png',
  },
  {
    id: '22',
    firstName: 'Ceci',
    lastName: 'Maher',
    district: 'S26',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707078728/Senator%20Photos/ceciMaher_v923da.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707081542/Senate%20Districts/senateDistrictTwentySix_hobqny.png',
  },
  {
    id: '23',
    firstName: 'James',
    lastName: 'Maroney',
    district: 'S14',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707078883/Senator%20Photos/jamesMaroney_fuovwy.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707075735/Senate%20Districts/senateDistrictFourteen_xmpkqh.png',
  },
  {
    id: '24',
    firstName: 'Henri',
    lastName: 'Martin',
    district: 'S31',
    yearElected: '2015',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707079008/Senator%20Photos/henriMartin_gssaz6.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707084757/Senate%20Districts/senateDistrictThirtyOne_wpidgi.png',
  },
  {
    id: '25',
    firstName: 'Martha',
    lastName: 'Marx',
    district: 'S20',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707079348/Senator%20Photos/marthaMarx_yte9hk.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707079520/Senate%20Districts/senateDistrictTwenty_r7zp6p.png',
  },
  {
    id: '26',
    firstName: 'Douglas',
    lastName: 'McCrory',
    district: 'S02',
    yearElected: '2005',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707079896/Senator%20Photos/douglasMcCrory_bjefba.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707071582/Senate%20Districts/senateDistrictTwo_uwn8mz.png',
  },
  {
    id: '27',
    firstName: 'Patricia Billie',
    lastName: 'Miller',
    district: 'S27',
    yearElected: '2009',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707079898/Senator%20Photos/patriciaBillieMiller_mljuxm.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707084215/Senate%20Districts/senateDistrictTwentySeven_o0cwvj.png',
  },
  {
    id: '28',
    firstName: 'Marilyn',
    lastName: 'Moore',
    district: 'S22',
    yearElected: '2015',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707080061/Senator%20Photos/marilynMoore_medss7.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707081533/Senate%20Districts/senateDistrictTwentyTwo_shrnve.png',
  },
  {
    id: '29',
    firstName: 'Norman',
    lastName: 'Needleman',
    district: 'S33',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707080211/Senator%20Photos/normanNeedleman_dn2yfa.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707084764/Senate%20Districts/senateDistrictThirtyThree_c7h0oc.png',
  },
  {
    id: '30',
    firstName: 'Catherine',
    lastName: 'Osten',
    district: 'S19',
    yearElected: '2013',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707080381/Senator%20Photos/catherineOsten_mge48k.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: false,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707079514/Senate%20Districts/senateDistrictNineteen_jsdnjw.png',
  },
  {
    id: '31',
    firstName: 'MD',
    lastName: 'Rahman',
    district: 'S04',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707080593/Senator%20Photos/mdRahman_fh0uab.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707071583/Senate%20Districts/senateDistrictFour_ojriyh.png',
  },
  {
    id: '32',
    firstName: 'Rob',
    lastName: 'Sampson',
    district: 'S16',
    yearElected: '2011',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707080727/Senator%20Photos/robSampson_xoduja.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707079518/Senate%20Districts/senateDistrictSixteen_zchunp.png',
  },
  {
    id: '33',
    firstName: 'Lisa',
    lastName: 'Seminara',
    district: 'S08',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707081001/Senator%20Photos/lisaSeminara_jyqkw8.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707075258/Senate%20Districts/senateDistrictEight_xkw0um.png',
  },
  {
    id: '34',
    firstName: 'Derek',
    lastName: 'Slap',
    district: 'S05',
    yearElected: '2017',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707081191/Senator%20Photos/derekSlap_b4wqe3.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707071580/Senate%20Districts/senateDistrictFIve_goc2l7.png',
  },
  {
    id: '35',
    firstName: 'Heather',
    lastName: 'Somers',
    district: 'S18',
    yearElected: '2012',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707081197/Senator%20Photos/heatherSomers_a5jk8i.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707079511/Senate%20Districts/senateDistrictEighteen_bzql5u.png',
  },
  {
    id: '36',
    firstName: 'Gary',
    lastName: 'Winfield',
    district: 'S10',
    yearElected: '2009',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707081194/Senator%20Photos/garyWinfield_jenhb8.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    senateDistrict:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1707075261/Senate%20Districts/senateDistrictTen_phrdjg.png',
  },
];

export default senatorData;
