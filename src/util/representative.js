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
    district: '1320',
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
