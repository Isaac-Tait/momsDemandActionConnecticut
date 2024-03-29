const representativeData = [
  {
    id: '1',
    firstName: 'Tim',
    lastName: 'Ackert',
    district: '008',
    yearElected: '2011',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710170522/Representative%20Photos/TimAckert_xno4jt.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_8.pdf',
  },
  {
    id: '2',
    firstName: 'Raghib',
    lastName: 'Allie-Brennan',
    district: '002',
    yearElected: '2018',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710173150/Representative%20Photos/RaghibAllie-Brennan_nktqsw.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_2.pdf',
  },
  {
    id: '3',
    firstName: 'Mark',
    lastName: 'Anderson',
    district: '062',
    yearElected: '2021',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710173675/Representative%20Photos/MarkAnderson_l5zzjr.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_62.pdf',
  },
  {
    id: '4',
    firstName: 'Chris',
    lastName: 'Aniskovich',
    district: '035',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710174081/Representative%20Photos/ChrisAniskovich_qweiry.png',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_35.pdf',
  },
  {
    id: '5',
    firstName: 'Tom',
    lastName: 'Arnone',
    district: '058',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710174277/Representative%20Photos/TomArnone_zmikwk.png',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_58.pdf',
  },
  {
    id: '6',
    firstName: 'Hector',
    lastName: 'Arzeno',
    district: '151',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710174573/Representative%20Photos/HectorArzeno_k57gym.png',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_151.pdf',
  },
  {
    id: '7',
    firstName: 'Andre',
    lastName: 'Baker',
    district: '124',
    yearElected: '2015',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710174761/Representative%20Photos/AndreBaker_k2dfuw.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_124.pdf',
  },
  {
    id: '8',
    firstName: 'Jill',
    lastName: 'Barry',
    district: '031',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710175053/Representative%20Photos/jillBarry_welqee.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_31.pdf',
  },
  {
    id: '9',
    firstName: 'Kai',
    lastName: 'Belton',
    district: '100',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710175225/Representative%20Photos/KaiBelton_gar32l.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_100.pdf',
  },
  {
    id: '10',
    firstName: 'Aimee',
    lastName: 'Berger-Girvalo',
    district: '111',
    yearElected: '2020',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710175374/Representative%20Photos/AimeeBerger-Girvalo_kegnls.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_111.pdf',
  },
  {
    id: '11',
    firstName: 'Matt',
    lastName: 'Blumenthal',
    district: '147',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710175687/Representative%20Photos/MattBlumenthal_vxuwxu.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_147.pdf',
  },
  {
    id: '12',
    firstName: 'Mitch',
    lastName: 'Bolinsky',
    district: '106',
    yearElected: '2013',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710176231/Representative%20Photos/MitchBolinsky_v6dahf.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_106.pdf',
  },
  {
    id: '13',
    firstName: 'Patrick',
    lastName: 'Boyd',
    district: '050',
    yearElected: '2016',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710176389/Representative%20Photos/PatBoyd_gcj1bf.png',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_50.pdf',
  },
  {
    id: '14',
    firstName: 'Seth',
    lastName: 'Bronko',
    district: '070',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710176495/Representative%20Photos/SethBronko_fhb3ku.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_70.pdf',
  },
  {
    id: '15',
    firstName: 'Kevin',
    lastName: 'Brown',
    district: '056',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710176619/Representative%20Photos/KevinBrown_hh1mqq.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_56.pdf',
  },
  {
    id: '16',
    firstName: 'Marcus',
    lastName: 'Brown',
    district: '127',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710177708/Representative%20Photos/MarcusBrown_z6wdui.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_127.pdf',
  },
  {
    id: '17',
    firstName: 'Bill',
    lastName: 'Buckbee',
    district: '067',
    yearElected: '2017',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710177868/Representative%20Photos/BillBuckbee_ni12us.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_67.pdf',
  },
  {
    id: '18',
    firstName: 'Aundre',
    lastName: 'Bumgardner',
    district: '041',
    yearElected: '2014',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710178058/Representative%20Photos/AundreBumgardner_vfpcna.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_41.pdf',
  },
  {
    id: '19',
    firstName: 'Larry',
    lastName: 'Butler',
    district: '072',
    yearElected: '2007',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710178393/Representative%20Photos/larryButtler_zovfw8.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_72.pdf',
  },
  {
    id: '20',
    firstName: 'Patrick',
    lastName: 'Callahan',
    district: '108',
    yearElected: '2021',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710178592/Representative%20Photos/PatrickCallahan_f4kgsx.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_108.pdf',
  },
  {
    id: '21',
    firstName: 'Juan',
    lastName: 'Candelaria',
    district: '095',
    yearElected: '2002',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710854283/Representative%20Photos/JuanCandelaria_ttjuuy.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_95.pdf',
  },
  {
    id: '22',
    firstName: 'Vincent',
    lastName: 'Candelora',
    district: '086',
    yearElected: '2007',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710854414/Representative%20Photos/VincentCandelora_xqwzaq.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_86.pdf',
  },
  {
    id: '23',
    firstName: 'Devin',
    lastName: 'Carney',
    district: '023',
    yearElected: '2015',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710854646/Representative%20Photos/DevinCarney_hp7jb1.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_23.pdf',
  },
  {
    id: '24',
    firstName: 'Christie',
    lastName: 'Carpino',
    district: '032',
    yearElected: '2010',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710854777/Representative%20Photos/ChristieCarpino_ji1gob.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_32.pdf',
  },

  {
    id: '25',
    firstName: 'Jay',
    lastName: 'Chase',
    district: '063',
    yearElected: '2013',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710855043/Representative%20Photos/JayCase_rlv8ng.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_63.pdf',
  },
  {
    id: '26',
    firstName: 'Brandon',
    lastName: 'Chafee',
    district: '033',
    yearElected: '2020',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710855183/Representative%20Photos/BrandonChafee_vpyryw.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_33.pdf',
  },
  {
    id: '27',
    firstName: 'Rachel',
    lastName: 'Chaleski',
    district: '138',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710855292/Representative%20Photos/RachelChaleski_mql3ud.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_138.pdf',
  },
  {
    id: '28',
    firstName: 'Holly',
    lastName: 'Cheeseman',
    district: '037',
    yearElected: '2017',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710855439/Representative%20Photos/HollyCheeseman_cs0rmn.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_37.pdf',
  },
  {
    id: '29',
    firstName: 'Robin',
    lastName: 'Comey',
    district: '102',
    yearElected: '2018',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710855554/Representative%20Photos/RobinComey_orae57.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_102.pdf',
  },
  {
    id: '30',
    firstName: 'Julio',
    lastName: 'Concepcion',
    district: '004',
    yearElected: '2010',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710855689/Representative%20Photos/JulioConcepcion_bgziin.png',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_4.pdf',
  },
  {
    id: '31',
    firstName: 'Christine',
    lastName: 'Conley',
    district: '040',
    yearElected: '2016',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710855784/Representative%20Photos/ChristineConley_ymn4oe.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_40.pdf',
  },
  {
    id: '32',
    firstName: 'Michelle',
    lastName: 'Cook',
    district: '065',
    yearElected: '2008',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710855959/Representative%20Photos/MichelleCook_pomi3e.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_65.pdf',
  },
  {
    id: '33',
    firstName: 'Francis',
    lastName: 'Cooley',
    district: '022',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710856099/Representative%20Photos/FrancisCooley_hdfcx6.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_22.pdf',
  },
  {
    id: '34',
    firstName: 'Jeff',
    lastName: 'Currey',
    district: '011',
    yearElected: '2015',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710856300/Representative%20Photos/JeffCurrey_tvfs2g.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_11.pdf',
  },
  {
    id: '35',
    firstName: 'Michael',
    lastName: "D'Agostino",
    district: '091',
    yearElected: '2012',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710856556/Representative%20Photos/MicharlDAgostino_qnmxgr.png',
    party: 'Democrat',
    gunSenseCandidate: '',
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_35.pdf',
  },
  {
    id: '36',
    firstName: 'Laura',
    lastName: 'Dancho',
    district: '120',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710856873/Representative%20Photos/LauraDancho_rtrzlp.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_120.pdf',
  },
  {
    id: '37',
    firstName: 'Lucy',
    lastName: 'Dathan',
    district: '142',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710856985/Representative%20Photos/LucyDanthan_cy5udp.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_142.pdf',
  },
  {
    id: '38',
    firstName: 'Anne',
    lastName: 'Dauphinais',
    district: '044',
    yearElected: '2017',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710857115/Representative%20Photos/AnneDauphinais_oadmou.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_44.pdf',
  },

  {
    id: '39',
    firstName: 'Mark',
    lastName: 'DeCaprio',
    district: '048',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710857257/Representative%20Photos/MarkDeCaprio_th1lme.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_48.pdf',
  },
  {
    id: '40',
    firstName: 'Hubert',
    lastName: 'Delany',
    district: '144',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710857471/Representative%20Photos/HubertDelany_kr2cw4.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_144.pdf',
  },
  {
    id: '41',
    firstName: 'Tom',
    lastName: 'Delnicki',
    district: '014',
    yearElected: '2017',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710857606/Representative%20Photos/TomDelnicki_xnj03p.png',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_14.pdf',
  },
  {
    id: '42',
    firstName: 'Mike',
    lastName: 'Demicco',
    district: '021',
    yearElected: '2012',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710857798/Representative%20Photos/MikeDemicco_u1ab6q.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_21.pdf',
  },
  {
    id: '43',
    firstName: 'Keith',
    lastName: 'Denning',
    district: '042',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710857930/Representative%20Photos/KeithDenning_wxkyb8.png',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_42.pdf',
  },

  {
    id: '44',
    firstName: 'Michael',
    lastName: 'DiGiovancarlo',
    district: '074',
    yearElected: '2021',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710858291/Representative%20Photos/MichaelDiGiovancarlo_f3smji.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_74.pdf',
  },
  {
    id: '45',
    firstName: 'Patricia',
    lastName: 'Dillon',
    district: '092',
    yearElected: '1985',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710858467/Representative%20Photos/PatriciaDillion_w2vjw3.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_92.pdf',
  },
  {
    id: '46',
    firstName: 'Jason',
    lastName: 'Doucette',
    district: '013',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710858617/Representative%20Photos/JasonDoucette_a6cteg.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_13.pdf',
  },
  {
    id: '47',
    firstName: 'Doug',
    lastName: 'Dubitsky',
    district: '047',
    yearElected: '2015',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710858862/Representative%20Photos/DougDubitsky_felqne.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_47.pdf',
  },
  {
    id: '48',
    firstName: 'Josh',
    lastName: 'Elliott',
    district: '088',
    yearElected: '2016',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710859073/Representative%20Photos/JoshElliott_kaqm9j.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_88.pdf',
  },
  {
    id: '49',
    firstName: 'Tammy',
    lastName: 'Exum',
    district: '019',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710859230/Representative%20Photos/TammyExum_zvgtei.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_19.pdf',
  },
  {
    id: '50',
    firstName: 'Kate',
    lastName: 'Farrar',
    district: '20',
    yearElected: '2020',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710859351/Representative%20Photos/KateFarrar_lrriah.png',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_20.pdf',
  },
  {
    id: '51',
    firstName: 'Jonathan',
    lastName: 'Fazzino',
    district: '083',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710984788/Representative%20Photos/JonathanFazzino_lfadyz.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_83.pdf',
  },
  {
    id: '52',
    firstName: 'Antonio',
    lastName: 'Felipe',
    district: '130',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710984933/Representative%20Photos/AntonioFelipe_u56pkl.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_130.pdf',
  },
  {
    id: '53',
    firstName: 'Charles',
    lastName: 'Ferraro',
    district: '117',
    yearElected: '2015',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710985145/Representative%20Photos/CharlesFerraro_hanlfp.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_117.pdf',
  },
  {
    id: '54',
    firstName: 'Anabel',
    lastName: 'Figueroa',
    district: '148',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710985289/Representative%20Photos/AnabelFigueroa_iafknn.png',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_148.pdf',
  },
  {
    id: '55',
    firstName: 'Craig',
    lastName: 'Fishbein',
    district: '090',
    yearElected: '2016',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710985417/Representative%20Photos/CraigFishbein_jyoffi.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_90.pdf',
  },
  {
    id: '56',
    firstName: 'Martin',
    lastName: 'Foncello',
    district: '107',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710985810/Representative%20Photos/MartinFoncello_h4z9sf.png',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_107.pdf',
  },
  {
    id: '57',
    firstName: 'Mary',
    lastName: 'Fortier',
    district: '079',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1710985808/Representative%20Photos/MaryFortier_htefa4.png',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_79.pdf',
  },
  {
    id: '58 ',
    firstName: 'Jamie',
    lastName: 'Foster',
    district: '57',
    yearElected: '2021',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711031054/Representative%20Photos/JaimeFoster_e0rkzk.png',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_57.pdf',
  },
  {
    id: '59',
    firstName: 'Jane',
    lastName: 'Garibay',
    district: '060',
    yearElected: '2018',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711031213/Representative%20Photos/JaneGaribay_hc0odn.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_60.pdf',
  },
  {
    id: '60',
    firstName: 'Fred',
    lastName: 'Gee',
    district: '126',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711031352/Representative%20Photos/FredGee_pxsaj1.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_126.pdf',
  },
  {
    id: '61',
    firstName: 'Henry',
    lastName: 'Genga',
    district: '010',
    yearElected: '2006',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711031495/Representative%20Photos/HenryGenga_lt8ukg.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_10.pdf',
  },
  {
    id: '62',
    firstName: 'Bobby',
    lastName: 'Gibson',
    district: '015',
    yearElected: '2018',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711031626/Representative%20Photos/BobbyGibson_x5ivhb.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_15.pdf',
  },
  {
    id: '62',
    firstName: 'Jillian',
    lastName: 'Gilchrest',
    district: '018',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711031793/Representative%20Photos/JillianGilchrest_ez8l6n.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_18.pdf',
  },
  {
    id: '63',
    firstName: 'Bob',
    lastName: 'Godfrey',
    district: '110',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711031931/Representative%20Photos/BobGodfrey_clyvzf.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_110.pdf',
  },
  {
    id: '64',
    firstName: 'Minnie',
    lastName: 'Gonzalez',
    district: '003',
    yearElected: '1996',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711032075/Representative%20Photos/MinnieGonzalez_ss0qxs.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_3.pdf',
  },
  {
    id: '65',
    firstName: 'Joseph',
    lastName: 'Gresko',
    district: '121',
    yearElected: '2016',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711032210/Representative%20Photos/JosephGresko_bsspdz.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_121.pdfs',
  },
  {
    id: '66',
    firstName: 'Gregory',
    lastName: 'Haddad',
    district: '054',
    yearElected: '2011',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711036560/Representative%20Photos/Gregory_Haddad_fxfzoa.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_54.pdf',
  },
  {
    id: '67',
    firstName: 'Irene',
    lastName: 'Haines',
    district: '034',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711036760/Representative%20Photos/IreneHaines_qqr9d5.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_34.pdf',
  },
  {
    id: '68',
    firstName: 'Carol',
    lastName: 'Hall',
    district: '059',
    yearElected: '2017',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711036901/Representative%20Photos/CarolHall_r851jz.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_59.pdf',
  },
  {
    id: '69',
    firstName: 'Joshua',
    lastName: 'Hall',
    district: '007',
    yearElected: '2017',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711037117/Representative%20Photos/JoshuaHall_rkqxmq.png',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_7.pdf',
  },
  {
    id: '70',
    firstName: 'Cindy',
    lastName: 'Harrison',
    district: '069',
    yearElected: '2020',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711037229/Representative%20Photos/CindyHarrison_ooas21.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_69.pdf',
  },
  {
    id: '71',
    firstName: 'Rick',
    lastName: 'Hayes',
    district: '051',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711037472/Representative%20Photos/RickHayes_g5tiss.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_51.pdf',
  },
  {
    id: '72',
    firstName: 'William',
    lastName: 'Heffernan',
    district: '115',
    yearElected: '2024',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711037807/Representative%20Photos/WilliamHeffernan_iy87ix.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_115.pdf',
  },
  {
    id: '73',
    firstName: 'Maria',
    lastName: 'Horn',
    district: '064',
    yearElected: '2018',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711037965/Representative%20Photos/MariaHorn_gsbdwi.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_64.pdf',
  },
  {
    id: '74',
    firstName: 'Greg',
    lastName: 'Howard',
    district: '043',
    yearElected: '2021',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711038181/Representative%20Photos/GregHoward_jgjutj.png',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_43.pdf',
  },
  {
    id: '75',
    firstName: 'Joe',
    lastName: 'Hoxha',
    district: '078',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711038315/Representative%20Photos/JoeHoxha_mbuag7.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_78.pdf',
  },
  {
    id: '76',
    firstName: 'Anne',
    lastName: 'Hughes',
    district: '135',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711038467/Representative%20Photos/AnneMHughes_zgmly7.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_135.pdf',
  },
  {
    id: '77',
    firstName: 'Dominique',
    lastName: 'Johnson',
    district: '143',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711374287/Representative%20Photos/DominiqueJohnson_dnt5u5.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_143.pdf',
  },
  {
    id: '78',
    firstName: 'Susan',
    lastName: 'Johnson',
    district: '049',
    yearElected: '2009',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711374445/Representative%20Photos/SusanMJohnson_gmshej.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_49.pdf',
  },
  {
    id: '80',
    firstName: 'Eleni',
    lastName: 'Kavros DeGraw',
    district: '017',
    yearElected: '2020',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711374601/Representative%20Photos/EleniKavrosDeGraw_wjwanp.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_17.pdf',
  },
  {
    id: '81',
    firstName: 'Sarah',
    lastName: 'Keitt',
    district: '134',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711374862/Representative%20Photos/SarahKeitt_syp2jz.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_134.pdf',
  },

  {
    id: '82',
    firstName: 'Kathleen',
    lastName: 'Kennedy',
    district: '119',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711375406/Representative%20Photos/KathyKennedy_b0ooky.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_119.pdf',
  },
  {
    id: '83',
    firstName: 'Maryam',
    lastName: 'Khan',
    district: '005',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711375718/Representative%20Photos/MaryamKhan_hhjh3o.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_5.pdf',
  },
  {
    id: '84',
    firstName: 'Rachel',
    lastName: 'Khanna',
    district: '149',
    yearElected: '2023',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711375863/Representative%20Photos/RachelKhanna_mutzob.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_149.pdf',
  },
  {
    id: '85',
    firstName: 'Nicole',
    lastName: 'Klarides-Ditria',
    district: '105',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711376549/Representative%20Photos/NicoleKlaridesDitria_xtqbot.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_105.pdf',
  },
  {
    id: '86',
    firstName: 'David',
    lastName: 'Labriola',
    district: '131',
    yearElected: '2003',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711651146/Representative%20Photos/DavidLabriola_cdlzwy.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_131.pdf',
  },
  {
    id: '87',
    firstName: 'Brian',
    lastName: 'Lanoue',
    district: '045',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711650996/Representative%20Photos/BrianLanoue_qzoika.jpg',
    party: '',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_45.pdf',
  },
  {
    id: '88',
    firstName: 'Jennifer',
    lastName: 'Leeper',
    district: '132',
    yearElected: '2020',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711651455/Representative%20Photos/jenniferLeeper_lboxjh.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_132.pdf',
  },
  {
    id: '89',
    firstName: 'Roland',
    lastName: 'Lemar',
    district: '096',
    yearElected: '2011',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711651612/Representative%20Photos/rolandLemar_bzslw3.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_96.pdf',
  },
  {
    id: '90',
    firstName: 'Liz',
    lastName: 'Linehan',
    district: '103',
    yearElected: '2016',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711651712/Representative%20Photos/LizLinehan_xofnfo.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_103.pdf',
  },
  {
    id: '91',
    firstName: 'Geoff',
    lastName: 'Luxenberg',
    district: '012',
    yearElected: '2011',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711651951/Representative%20Photos/GeoffLuxenberg_vkx9r3.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_12.pdf',
  },
  {
    id: '92',
    firstName: 'Tracy',
    lastName: 'Marra',
    district: '141',
    yearElected: '2022',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711652086/Representative%20Photos/TracyMarra_g0ilko.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_141.pdf',
  },
  {
    id: '93',
    firstName: 'Gale',
    lastName: 'Mastrofrancesco',
    district: '080',
    yearElected: '',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711652178/Representative%20Photos/GaleMastrofrancesco_zy02l5.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_80.pdf',
  },
  {
    id: '94',
    firstName: 'Cristin',
    lastName: 'McCarthy Vahey',
    district: '133',
    yearElected: '2014',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711652465/Representative%20Photos/CristinMcCarthyVahey_rj9fge.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_133.pdf',
  },
  {
    id: '95',
    firstName: 'Kathleen',
    lastName: 'McCarty',
    district: '038',
    yearElected: '2015',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711652681/Representative%20Photos/KathleenMMcCarty_rvu2mp.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_38.pdf',
  },
  {
    id: '96',
    firstName: 'Trenee',
    lastName: 'McGee',
    district: '116',
    yearElected: '2021',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711655852/Representative%20Photos/TreneeMcGee_usumgz.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_116.pdf',
  },
  {
    id: '97',
    firstName: 'Ben',
    lastName: 'McGorty',
    district: '122',
    yearElected: '2014',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711656100/Representative%20Photos/BenMcGorty_fi85eu.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_122.pdf',
  },
  {
    id: '98',
    firstName: 'Stephen',
    lastName: 'Meskers',
    district: '150',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711656222/Representative%20Photos/StephenRMeskers_yflc6j.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_150.pdf',
  },
  {
    id: '99',
    firstName: 'David',
    lastName: 'Michael',
    district: '146',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711656359/Representative%20Photos/DavidMichel_c1qukn.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_146.pdf',
  },
  {
    id: '100',
    firstName: 'Amy',
    lastName: 'Morrin Bello',
    district: '028',
    yearElected: '2021',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711656508/Representative%20Photos/AmyMorrinBello_hyzvsk.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_28.pdf',
  },
  {
    id: '101',
    firstName: 'Mary',
    lastName: 'Mushinsky',
    district: '085',
    yearElected: '1980',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711656693/Representative%20Photos/marymushinsky_fj1rp1.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_85.pdf',
  },
  {
    id: '102',
    firstName: 'Ronald',
    lastName: 'Napoli',
    district: '073',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711656877/Representative%20Photos/ronaldNapoli_a4hvuv.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_73.pdf',
  },
  {
    id: '103',
    firstName: 'Anthony',
    lastName: 'Nolan',
    district: '039',
    yearElected: '2019',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711725532/Representative%20Photos/NolanAnthony_z9lfdv.webp',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_39.pdf',
  },
  {
    id: '104',
    firstName: 'Tammy',
    lastName: 'Nuccio',
    district: '053',
    yearElected: '2020',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711725721/Representative%20Photos/tammyNuccio_nwb542.webp',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_53.pdf',
  },
  {
    id: '105',
    firstName: 'Tom',
    lastName: "O'Dea",
    district: '125',
    yearElected: '2013',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711725870/Representative%20Photos/TomO_Dea_fkyw3n.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_125.pdf',
  },
  {
    id: '106',
    firstName: 'Melissa',
    lastName: 'Osborne',
    district: '016',
    yearElected: '2024',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711727183/Representative%20Photos/MelissaOsborne_dyshus.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_16.pdf',
  },
  {
    id: '107',
    firstName: 'Christine',
    lastName: 'Palm',
    district: '036',
    yearElected: '2018',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711727328/Representative%20Photos/ChristinePalm_rti6sm.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_36.pdf',
  },
  {
    id: '108',
    firstName: 'Alphonse',
    lastName: 'Paolillo',
    district: '097',
    yearElected: '2017',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711727457/Representative%20Photos/AlphonsePaolillo_kms0zw.jpg',
    party: 'Democrat',
    gunSenseCandidate: false,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_97.pdf',
  },
  {
    id: '109',
    firstName: 'Corey',
    lastName: 'Paris',
    district: '145',
    yearElected: '2021',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711727584/Representative%20Photos/CoreyParis_xkxxm0.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_145.pdf',
  },
  {
    id: '110',
    firstName: 'John-Michael',
    lastName: 'Parker',
    district: '101',
    yearElected: '2020',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711727698/Representative%20Photos/JohnMichaelParker_chxlj4.jpg',
    party: 'Democrat',
    gunSenseCandidate: true,
    supportHB6667: true,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_101.pdf',
  },
  {
    id: '111',
    firstName: 'Cara Christine',
    lastName: "Pavalock-D'Amato",
    district: '077',
    yearElected: '2015',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711727807/Representative%20Photos/CaraChristinePavalockDAmato_j79c0u.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_77.pdf',
  },
  {
    id: '112',
    firstName: 'Jason',
    lastName: 'Perillo',
    district: '113',
    yearElected: '2007',
    photoURL:
      'https://res.cloudinary.com/ddbc9j5u9/image/upload/v1711727961/Representative%20Photos/JasonPerillo_qpnbct.jpg',
    party: 'Republican',
    gunSenseCandidate: false,
    supportHB6667: false,
    repDistrict:
      'https://www.cga.ct.gov/rr/tfs/20210401_2021%20Redistricting%20Project/NODISPLAY_data/housemaps/Individual%20District%20Maps/House%20Districts_113.pdf',
  },
  {
    id: '',
    firstName: '',
    lastName: '',
    district: '',
    yearElected: '',
    photoURL: '',
    party: '',
    gunSenseCandidate: '',
    supportHB6667: '',
    repDistrict: '',
  },
];

export default representativeData;
