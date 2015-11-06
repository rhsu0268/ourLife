
// loads up some data
if (Schools.find().count() == 0)
{
   Schools.insert({
      title: 'School of Engineering and Applied Sciences',
      url: 'http://seh.gwu.edu/',
      image: '/img/schools/seas.jpg'
   });

   Schools.insert({
   	title: 'Elliott School of International Affairs',
      url: 'http://elliott.gwu.edu/',
      image: '/img/schools/elliott.jpg'
   });

   Schools.insert({
   	title: 'Columbian College of Arts and Sciences',
   	url: 'http://columbian.gwu.edu/',
   	image: '/img/schools/columbian.jpg'
   });

   Schools.insert({
   	title: 'School of Medicine and Health Sciences',
   	url: 'http://smhs.gwu.edu/',
   	image: '/img/schools/gw-medical.jpg'
   });

   Schools.insert({
   	title: 'GW Law',
   	url: 'http://www.law.gwu.edu/Pages/Default.aspx',
   	image: '/img/schools/gw-law.jpg'
   });

   Schools.insert({
   	title: 'Graduate School of Education and Human Development',
   	url: 'http://gsehd.gwu.edu/',
   	image: '/img/schools/graduate.jpg'
   });

   Schools.insert({
   	title: 'School of Business',
   	url: 'http://business.gwu.edu/',
   	image: '/img/schools/business.jpg'
   });

   Schools.insert({
   	title: 'Milken School of Public Health',
   	url: 'http://publichealth.gwu.edu/',
   	image: '/img/schools/milken.jpg'
   });

   Schools.insert({
   	title: 'College of Professional Studies',
   	url: 'http://cps.gwu.edu/',
   	image: '/img/schools/professional.jpg'
   });

   Schools.insert({
   	title: 'School of Nursing',
   	url: 'http://nursing.gwu.edu/',
   	image: '/img/schools/nursing.jpg'
   });




}

if (CampusLocations.find().count() == 0)
{

   CampusLocations.insert({
      location: 'Shenkman Hall',
      type: 'Dorm',
      lat: 38.89793,
      lng: -77.050453,
      description: 'Shenkman Hall, previously Ivory Tower, reaches new heights in residence hall living. Housing two to four upperclassmen in spacious one to two bedroom apartments, each unit features a living room, full kitchen, dining area, and one or two private bathrooms.'

   });

   CampusLocations.insert({
      location: 'Townhouse Row',
      type: 'Dorm',
      lat: 38.897951,
      lng: -77.049952,
      description: 'Coveniently located next to the Charles E. Smith Center and across the street from the Lerner Health and Wellness Center, Townhoue Row is a city block of housing designed specifically for GW&#39;s Greek-letter organizations.'

   });

   CampusLocations.insert({
      location: 'Lerner Health and Wellness Center',
      type: 'Recreation',
      lat: 38.898565,
      lng: -77.050571,
      description: 'As GW&#39;s state-of-the-art recreation facility, the Annette and Theodore Lerner Family Health and Wellness Center contains all of the modern amenities one would expect at a top-flight health club. All registered students enjoy automatic membership and other members of the GW community can join for a nominal monthly fee.'

   });

   CampusLocations.insert({
      location: 'Amsterdam Hall',
      type: 'Dorm',
      lat: 38.899336,
      lng: -77.050879,
      description: 'Philip S. Amsterdam Hall offers apartment-style living for two to four juniors or seniors in spacious one-and two-bedroom units.'

   });

   CampusLocations.insert({
      location: 'Ross Hall School of Medicine',
      type: 'School',
      lat: 38.900086,
      lng: -77.050635,
      description: 'Walter G. Ross Hall is home to classroom and laboratory space, the three-story Paul Himmelfarb Health Sciences Library, and state-of-the-art Research Center for the Neglected Diseases of Poverty, which, with the help of a $15 million NIH grant, employs a multidisplinary team of researches to discover new vaccines, therapeutics, and diagnostics for diseases that afflict the world&#39;s poorest people.'

   });

   CampusLocations.insert({
      location: 'Ross Hall School of Medicine',
      type: 'School',
      lat: 38.900086,
      lng: -77.050635,
      description: 'Walter G. Ross Hall is home to classroom and laboratory space, the three-story Paul Himmelfarb Health Sciences Library, and state-of-the-art Research Center for the Neglected Diseases of Poverty, which, with the help of a $15 million NIH grant, employs a multidisplinary team of researches to discover new vaccines, therapeutics, and diagnostics for diseases that afflict the world&#39;s poorest people.'

   });

   CampusLocations.insert({
      location: 'Himmelfarb Health Sciences Library',
      type: 'Library',
      lat: 38.900101,
      lng: -77.050553,
      description: 'This is the library for Health Sciences featuring numerous medical publications and databases.'

   });

   CampusLocations.insert({
      location: 'The Avenue',
      type: 'Shops',
      lat: 38.900932,
      lng: -77.049528,
      description: 'You can not get more convenient than the Avenue, a mixed-use town center that features shopping, dining, offices, and residences-all right in the heart of the campus.'

   });

   CampusLocations.insert({
      location: 'JBKO Hall',
      type: 'Dorm',
      lat: 38.899714,
      lng: -77.048621,
      description: 'JBKO Hall, named for famous GW alumna Jacqueline Bouvier Kennedy Onassis, offers apartment-style living for undergraduates in the heart of the Foggy Bottom campus. JBKO is situated across the street from the Foggy Bottom/GWU Metro station and The Avenue, which features a Whole Foods Market grocery store and other restaurants.'

   });

   CampusLocations.insert({
      location: 'Munson Hall',
      type: 'Dorm',
      lat: 38.899802,
      lng: -77.049852,
      description: 'Munson Hall offers aprtment-style living in double- and quadruple-occupancy units. Each room features a kitchen and private bathroom, and many of the units boast charming French doors that provide both privacy and light. Munson Hall is conveniently located near the Foggy Bottom/GWU Metro station and the Whole Foods grocery store.'
   });

   CampusLocations.insert({
      location: 'Fulbright Hall',
      type: 'Dorm',
      lat: 38.899843,
      lng: -77.049755,
      description: 'Fulbright Hall offers apartment-style living in triple efficency units featuring a kitchen and private bathroom.'
   });

   CampusLocations.insert({
      location: 'Science and Engineering Hall',
      type: 'School',
      lat: 38.899905,
      lng: -77.049319,
      description: 'Science and Engineering Hall is the state-of-the-art home for GW&#39;s science and engineering departments. The eight-story building features highly specialized core lab facilities, such as a three-story high bay, a nanofabrication suite and a greenhouse. It also includes world-class teaching spaces designed for a more hands-on approach to learning, two levels of program space and ample student lounge and study spaces.'
   });

   CampusLocations.insert({
      location: 'Tompkins Hall of Engineering',
      type: 'School',
      lat: 38.898594,
      lng: -77.049696,
      description: 'Tomkins Hall of Engineering houses laboratories, classrooms, conference rooms, offices, and several individual-sized laboratories for graduate student research.'
   });

   CampusLocations.insert({
      location: 'Madison Hall',
      type: 'Dorm',
      lat: 38.899357,
      lng: -77.04918,
      description: 'Each of Madison Hall&#39;s floors houses first-year residents in spacious doubles and quads with a private bathroom in each room or suite. Situated down the block from the Charles E. Smith Center athletic facilities, across the street from Gelman Library and next door to Duques and Funger Halls, Madison Hall offers students a premier residential experience.'
   });

   CampusLocations.insert({
      location: 'Duques Hall School of Business',
      type: 'School',
      lat: 38.899005,
      lng: -77.049232,
      description: 'Ric and Dawn Duques Hall, which opened in 2006, is home of the GW School of Business (GWSB) and is connected to Norma Lee and Morton Funger Hall, a seven story classroom facility. This modern complex of high-tech classrooms, group study spaces, administrative offices and a premier career center offers GWSB students, faculty and staff a unified center for business-related academic and career development resources.'
   });

   CampusLocations.insert({
      location: 'Funger Hall',
      type: 'School',
      lat: 38.898579,
      lng: -77.049634,
      description: 'Ric and Dawn Duques Hall, which opened in 2006, is home of the GW School of Business (GWSB) and is connected to Norma Lee and Morton Funger Hall, a seven story classroom facility. This modern complex of high-tech classrooms, group study spaces, administrative offices and a premier career center offers GWSB students, faculty and staff a unified center for business-related academic and career development resources.'
   });

   CampusLocations.insert({
      location: 'Charles E. Smith Center',
      type: 'sports',
      lat: 38.897822,
      lng: -77.049327,
      description: 'As a centerpiece of GW student life and the premier college athletics facility in the DC area, the state-of-the-art Charles E.Smith Center is home to GW&#39;s sports teams, as well as many pivotal school events, including freshman convocation, Colonials Weekend, and commencement.'
   });

   CampusLocations.insert({
      location: 'International House',
      type: 'dorm',
      lat: 38.896910,
      lng: -77.049119,
      description: 'International House offers apartment-style living in efficiency units equipped with a full kitchen and private bathroom. International House provides housing to a number of GW fraternities and sororities.'
   });

   CampusLocations.insert({
      location: 'The GW Hatchet',
      type: 'other',
      lat: 38.89717,
      lng: -77.048355,
      description: '2148 F Street houses The GW Hatchet, an independent student newspaper serving the George Washington University community. The GW Hatchet publishes each Monday during the academic year. First published in October 5, 1904, it is the second oldest continuously published newspaper in the District, after The Washington Post.'
   });

   CampusLocations.insert({
      location: 'The Dakota',
      type: 'dorm',
      lat: 38.897095,
      lng: -77.046914,
      description: 'The Dakota offers apartment-style living in single-, triple- and quadruple-occupancy units. Each unit features a fully equipped kitchen, making it easy for residents to cook up a meal for friends or roomates. Residents can also meet with classmates or hold study groups in the lounge on the first floor.'
   });

   CampusLocations.insert({
      location: 'South Hall',
      type: 'dorm',
      lat: 38.897552,
      lng: -77.048100,
      description: 'LEED-certified, South Hall houses fourth-year students in four and five-person suites that feature single and double bedrooms. Spacious and modern, each suite boasts a washer and dryer, two private bathrooms, a living room, and an eat-in kitchen. Each kitchen is equipped with a dishwasher, microwave, oven, and full-sive refrigerator.'
   });


   CampusLocations.insert({
      location: 'Guthridge Hall',
      type: 'dorm',
      lat: 38.897652,
      lng: -77.047415,
      description: 'Guthridge Hall houses approximately 250 students in single-, double-, and quadruple-occupancy units. Each unit features a kitchen and private bathroom, and the residence hall offers laundry facilities and a study lounge.'
   });


   CampusLocations.insert({
      location: '2109 F Street',
      type: 'dorm',
      lat: 38.897615,
      lng: -77.047157,
      description: '2109 F Street offers apartment-style living for female upperclassmen. A former apartment building, this all female residence hall features double-occupancy units that are each equipped with a kitchen and private bathroom.'
   });

   CampusLocations.insert({
      location: 'Graduate School of Education & Human Development',
      type: 'school',
      lat: 38.898102,
      lng: -77.047738,
      description: '2134 G Street is home to GW&#39;s Graduate School of Education and Human Development (GSEHD).'
   });

   CampusLocations.insert({
      location: 'Strong Hall',
      type: 'dorm',
      lat: 38.898021,
      lng: -77.046876,
      description: 'Strong Hall, an all-female residence hall, provides housing for members of two sororities. This building features two large community spaces, two updated kitchens and a backyard plaza that boasts a green space, tables and chairs and other sustainable features.'
   });

   CampusLocations.insert({
      location: 'Multicultural Student Services Center (MSSC)',
      type: 'enrichment',
      lat: 38.898529,
      lng: -77.047859,
      description: '2127 G Street is home to the university&#39;s MSSC, which develops and sponsors a variety of educational and cultural events programming that bolsters multicultural communication, community building and leadership throughout the GW community.'
   });

   CampusLocations.insert({
      location: 'Staughton Hall',
      type: 'school',
      lat: 38.898814,
      lng: -77.048489,
      description: 'Staughton Hall, named in honor of William Staughton, the first President of the university (1821-1827), is one of several buildings that house the School of Engineering and Applied Science. Along with classroom facilities, this building also plays host to the Cyber Security Policy and Research Institute.'
   });

   CampusLocations.insert({
      location: 'GW Delicatessen',
      type: 'dining',
      lat: 38.898552,
      lng: -77.048270,
      description: 'Students of all shapes and sizes gather here to fuel themselves with coffee and energy drinks or cure their hangover with a packed bagel sandwich. From towering basketball players, frat boys in Sperry&#39s, sorority girls in boots and leggings, GW cheerleaders or dancers decked out in uniform, and hipsters in plaid and beanies everyone at GW loves the deli.'
   });

   CampusLocations.insert({
      location: 'Monroe Hall',
      type: 'school',
      lat: 38.898532,
      lng: -77.047170,
      description: 'Monroe Hall and the Hall of Government are two academic buildings that are connected. Both overlook Mid-Campus Quad and are home to the Columbian College of Arts & Sciences&#39; economics, mathematics, political science and speech and hearing departments.'
   });

   CampusLocations.insert({
      location: 'Gelman Library',
      type: 'library',
      lat: 38.899238,
      lng: -77.048369,
      description: 'Located in the heart of the Foggy Botom campus, the Estelle and Melvin Gelman Library is the George Washington University&#39;s main library, containing more than two million volumes-not to mention offering access to a variety of research databases and other resources.'
   });

   CampusLocations.insert({
      location: 'Lisner Auditorium',
      type: 'enrichment',
      lat: 38.899319,
      lng: -77.047088,
      description: 'Lisner Auditorium is the university&#39;s premier venue for concerts, performances, lectures, and other cultural entertainment. Since opening its doors in 1946, Lisner Auditorium has hosted world famous musicians, dancers, intellectuals and entertainers. The diverse list of guests and performers includes the Alvin Ailey American Dance Theater, Jay Leno, Jewel, Miriam Makeba, Jon Stewart, the Honorable Sonia Sotomayor, and Toni Morrison. Students can often purchase discounted tickets to these events, making it easy to experince world-class entertainment right in the heart of the Foggy Bottom campus.'
   });

   CampusLocations.insert({
      location: 'Kogan Plaza',
      type: 'enrichment',
      lat: 38.899358,
      lng: -77.047868,
      description: 'Students, faculty, and staff enjoy Kogan Plaza as a popular outdoor space for student organization activities, university sponsored events and a variety of student life gatherings.'
   });

   CampusLocations.insert({
      location: 'Academic Center',
      type: 'school',
      lat: 38.90008,
      lng: -77.048601,
      description: 'The Academic Center, made up of Rome Hall, Phillips Hall, and Smith Hall of Art, is home to the Columbian College of Arts & Sciences and a number of its departments. It is a main classroom building with undergraduate language labs and undergraduate advising offices.'
   });

   CampusLocations.insert({
      location: 'Smith Hall of Art',
      type: 'enrichment',
      lat: 38.899909,
      lng: -77.048579,
      description: 'The Academic Center, made up of Rome Hall, Phillips Hall, and Smith Hall of Art, is home to the Columbian College of Arts & Sciences and a number of its departments. It is a main classroom building with undergraduate language labs and undergraduate advising offices.'
   });

   CampusLocations.insert({
      location: 'Rome Hall',
      type: 'school',
      lat: 38.900176,
      lng: -77.048193,
      description: 'The Academic Center, made up of Rome Hall, Phillips Hall, and Smith Hall of Art, is home to the Columbian College of Arts & Sciences and a number of its departments. It is a main classroom building with undergraduate language labs and undergraduate advising offices.'
   });

   CampusLocations.insert({
      location: 'Philips Hall',
      type: 'school',
      lat: 38.900268,
      lng: -77.048193,
      description: 'The Academic Center, made up of Rome Hall, Phillips Hall, and Smith Hall of Art, is home to the Columbian College of Arts & Sciences and a number of its departments. It is a main classroom building with undergraduate language labs and undergraduate advising offices.'
   });

   CampusLocations.insert({
      location: 'Marvin Center',
      type: 'enrichment',
      lat: 38.899993,
      lng: -77.047151,
      description: 'The Cloyd Heck Marvin Center is truly the university community center. The building plays host to a wide range of services all things student - From J Street, the university&#39;s primary dining facility, and Colonial Central, the student services hub, to the admissions welcome center and multipurpose rooms, and even the GW Campus Stores. The Marvin Center is the new home to the Colonial Health Center, which houses medical, mental health, and health promotion and prevention services, along withthe Parenting initiative. A large portion of the building is also utilized by Colonial Crossroads, a multifaceted student life support center that includes the Center for Student Engagement, the Center for Career Services, and the Center for Civic Engagement and Public Service.'
   });

   CampusLocations.insert({
      location: 'Lafayette Hall',
      type: 'dorm',
      lat: 38.900462,
      lng: -77.046863,
      description: 'Lafayette Hall is the third GW residence hall to recieve Leadership in Energy and Environmental Design (LEED) Gold certification. &#34;Green&#34; features include an energy-efficient roof and windows, natural daylight and views for residents. There are also thermal controls for all occupants and low-volatile organic compound (VOC) interior finishes to reduce odor and irritants.'
   });

   CampusLocations.insert({
      location: 'Rice Hall',
      type: 'service',
      lat: 38.900972,
      lng: -77.047677,
      description: 'If the university had its own Capitol Building this would probably be it. Rice Hall houses several of the university&#39;s key administrative offices, including the Offices of the President and Provost, Undergraduate and Graduate Enrollment Management the Division of Student Affairs, the Office of the Executive Vice President & Treasurer, the Office of the Vice President for Research and the Division of External Relations. The Faculty & Staff Service Center is also conveniently located on the first floor.'
   });

   CampusLocations.insert({
      location: '2100 Pennsylvania Avenue',
      type: 'service',
      lat: 38.901146,
      lng: -77.047258,
      description: '2100 Pennsylvania Avenue is home to a number of academic departments within the School of Medicine and Health Sciences as well as GW&#39;s Office of the Senior Vice President and General Counsel, which provides, coordinates and directs all legal services for the university. This building is also home to Buff & Blue on Penn, one of the the three GW Campus Stores where you can get all your GW gear. TGI Fridays, Capitol Grounds (a small cafe), a barber shop and a shoe repair store, all with street level access, are also located here.'
   });

   CampusLocations.insert({
      location: '2000 Pennsylvania Avenue Shops & Restarunts',
      type: 'service',
      lat: 38.900042,
      lng: -77.045985,
      description: 'The Shops at 2000 Penn is a collection of retailers, restaurants and offices conveniently located on campus. Students have a variety of food options for breakfast, lunch, or dinner and the convenience of a two-story CVS store for sundries. 2000 Penn is also home to the School of Medicine & Health Sciences&#39; Department of Physical Therapy & Health Care Sciences and the Health Sciences Smart Labs.'
   });

   CampusLocations.insert({
      location: 'Media and Public Affairs Building',
      type: 'school',
      lat: 38.89974,
      lng: -77.046185,
      description: 'The Media and Public Affairs Building is home to the George Washington University&#39;s School of Media and Public Affairs, the Graduate School of Political Management and the Trachtenberg School of Public Policy and Public Administration. A number of centers and institutes are found in the building, including the Regulatory Studies Center, the Documentary Center and the George Washington Institute of Public Policy, along with the Executive Education Program, Face the Facts USA and Planet Forward.'
   });

   CampusLocations.insert({
      location: 'Samson Hall',
      type: 'school',
      lat: 38.899381,
      lng: -77.046422,
      description: 'Corcoran Hall was the first building built on the university&#39;s Foggy Bottom Cmapus and it&#39;s situated on the edge of University Yard, a popular outdoor space for students to gather.'
   });

   CampusLocations.insert({
      location: 'Corcoran Hall',
      type: 'school',
      lat: 38.899019,
      lng: -77.046496,
      description: 'Corcoran Hall was the first building built on the university&#39;s Foggy Bottom Cmapus and it&#39;s situated on the edge of University Yard, a popular outdoor space for students to gather.'
   });

   CampusLocations.insert({
      location: 'GW Museum & The Textile Museum',
      type: 'enrichment',
      lat: 38.89854,
      lng: -77.046433,
      description: 'Opened in March of 2015, the George Washington Uniersity Museum and The Textile Museum span the historic Woodhull House and a new 46,000 square foot building at the corner of 21st and G Streets, adjacent to University Yard.'
   });

   CampusLocations.insert({
      location: 'Bell Hall',
      type: 'school',
      lat: 38.89862,
      lng: -77.046155,
      description: 'Bell Hall, named in honor of Alexander Graham Bell, who served on the Board of Trustees from 1904 - 1908, houses classroom and laboratory space for the university&#39;s science, including biology, physics, and geology, and engineering departments. This building is situated on the edge of University Yard, an outdoor plaza that offers students a quiet space to study or catch up with friends between classes.'
   });

   CampusLocations.insert({
      location: 'Lisner Hall',
      type: 'school',
      lat: 38.898576,
      lng: -77.045401,
      description: 'The GW Law complex is comprised of Lerner Hall, Stockton Hall, Jacob Burns Law Library, E Building, Stuart Hall, Lisner Hall and 700 20th Street. The complex consists of over 340,000 square feet with 41,000 square feet devoted to classrooms and 54,000 square feet devoted to the Jacob Burns Law Library. In addition, this space houses faculty office areas, seminar rooms, classrooms, computer labs, and a student commons, which features lounge space and kitchen facilities.'
   });

   CampusLocations.insert({
      location: 'Stuart Hall',
      type: 'school',
      lat: 38.898615,
      lng: -77.045765,
      description: 'The GW Law complex is comprised of Lerner Hall, Stockton Hall, Jacob Burns Law Library, E Building, Stuart Hall, Lisner Hall and 700 20th Street. The complex consists of over 340,000 square feet with 41,000 square feet devoted to classrooms and 54,000 square feet devoted to the Jacob Burns Law Library. In addition, this space houses faculty office areas, seminar rooms, classrooms, computer labs, and a student commons, which features lounge space and kitchen facilities.'
   });

   CampusLocations.insert({
      location: 'Law School Complex',
      type: 'school',
      lat: 38.898648,
      lng: -77.045787,
      description: 'The GW Law complex is comprised of Lerner Hall, Stockton Hall, Jacob Burns Law Library, E Building, Stuart Hall, Lisner Hall and 700 20th Street. The complex consists of over 340,000 square feet with 41,000 square feet devoted to classrooms and 54,000 square feet devoted to the Jacob Burns Law Library. In addition, this space houses faculty office areas, seminar rooms, classrooms, computer labs, and a student commons, which features lounge space and kitchen facilities.'
   });

   CampusLocations.insert({
      location: 'Burns Law Library',
      type: 'library',
      lat: 38.898988,
      lng: -77.045155,
      description: 'The Jacob Burns Law Library is among the largest and most prestigious academic law libraries in the United States. It offers a research collection rich in the historic and contemporary legal materials of America, as well as international and comparative materials. The Law Library&#39;s holdings of more than 700,000 volumes (and equivalents) and its wide range of electronic resources provide researchers with a wealth of legal information.'
   });

   CampusLocations.insert({
      location: 'University Yard',
      type: 'library',
      lat: 38.899189,
      lng: -77.045838,
      description: 'A quiet oasis nestled in the heart of an urban campus, University Yard is a favorite outdoor spot for students to sudy, relax, and meet up with friends.'
   });

   CampusLocations.insert({
      location: 'Tonic Quigley&#39;s',
      type: 'restaurant',
      lat: 38.898072,
      lng: -77.046468,
      description: 'Once a popular pharmacy and GW gathering place, the building at 2036 G. Street, NW. has hung onto its importance as a GW hotspot. Although it retains Quigley&#39;s Pharmacy&#39;s exterior facade, the building is now home to Tonic Restaurant, an American cuisine eatery that has revitalized the building.'
   });

   CampusLocations.insert({
      location: 'Building JJ',
      type: 'dorm',
      lat: 38.897667,
      lng: -77.046215,
      description: 'Building JJ offers Greek residents apartment-style living in eco-friendly, double-, and quadruple-occupancy units. Rooms feature fully-equipped kitchens that include dishwashers, EPA Energy-Star regrigerators, and microwaves. Private bathrooms are outfitted with Toto low-volume toilets and Niagara low-flow showerheads. The hallways boast motion-sensor lighting and laundry facilities are located at the basement of the townhouse.'
   });

   CampusLocations.insert({
      location: 'Support Building',
      type: 'support',
      lat: 38.897661,
      lng: -77.045908,
      description: '2025 F Street, NW, is home to the Office of Sustainabilitiy, Planning Development and Construction, Mail and Package Services, as well as the university&#39;s Facilities Services. Facilities Services manages and maintains the property and grounds on all three of GW&#39;s campuses. This department oversees housekeeping, routine and emergency maintenance, moving services, pest control, project management, life safety upkeep, heating and cooling repairs, ground maintenance and recycling/waste management. Students, staff, and faculty can submit maintenance requests through Facility Services&#39; online Fix-it system.'
   });

   CampusLocations.insert({
      location: 'Potomac House',
      type: 'dorm',
      lat: 38.897607,
      lng: -77.045122,
      description: 'Potomac House offers GW students comfortable living options in double rooms with adjoining bathrooms. It is situated in the center of the F Street corridor, across the street from Anniversary Park and Foggy Bottom Grocery and Deli, one block from the Elliott School of International Affairs and a short walk from the Marvin Center. Potomac House also boasts a dining venue on the ground floor, making it easy for residents to grab coffee or lunch on their way to class.'
   });

   CampusLocations.insert({
      location: 'Francis Scott Key Hall',
      type: 'dorm',
      lat: 38.897767,
      lng: -77.045133,
      description: 'Francis Scott Key Hall offers apartment-style living in single-, double-, and quadruple-occupancy rooms. All units are equipped with a full kitchen and a private bathroom, and the building features laundry facilities and a piano lounge. Francis Scott Key Hall residents are just a short walk from the Elliott School of International Affairs building.'
   });

   CampusLocations.insert({
      location: '1959 E Street',
      type: 'dorm',
      lat: 38.89632,
      lng: -77.044234,
      description: '199 E Street is connected to the state-of-the-art Elliot School of International Affairs building and offers apartment-style living in single, double, triple, and quadruple and five person units.'
   });

   CampusLocations.insert({
      location: 'Elliott School of International Affairs',
      type: 'school',
      lat: 38.896295,
      lng: -77.044135,
      description: '1957 E Street is home to the George Washington University&#39;s renowed Elliott School of International Affairs. The building was formally opened in 2003 by then-Secretary of State Colin Powell, a GW alumnus.'
   });

   CampusLocations.insert({
      location: 'Mitchell Hall',
      type: 'dorm',
      lat: 38.896674,
      lng: -77.043809,
      description: 'Mitchell Hall offers residents single rooms with community bathrooms and single suites with private bathrooms.'
   });

   CampusLocations.insert({
      location: 'Thurston Hall',
      type: 'dorm',
      lat: 38.897089,
      lng: -77.043927,
      description: 'Thurston Hall, the largest first year residence hall on the Foggy Bottom campus, houses students in four-, five- and six-person suites, as well as a limited number of double and triple units.'
   });

   CampusLocations.insert({
      location: 'Alumni House',
      type: 'other',
      lat: 38.897123,
      lng: -77.044321,
      description: 'Alumni House is home to the Office of Alumni Relations and is the site of many university receptions and gatherings. Built in a historic Washington style, this beautifully furnished building previously served as the GW University Club.'
   });

   CampusLocations.insert({
      location: 'Old Main',
      type: 'other',
      lat: 38.897123,
      lng: -77.044321,
      description: 'Old Main is home to classrooms, administrative offices, like the International Services Office and Academic Technologies, and academic departments, such as the Columbian College of Arts & Sciences&#39; Department of Geography. The Institute for Communitarian Policy Studies is also housed within Old Main.'
   });

   CampusLocations.insert({
      location: 'F Street House',
      type: 'other',
      lat: 38.897689,
      lng: -77.044701,
      description: 'The F Street House is a history building that is home to GW&#39; 16th President, Steven Knaff, and his wife, Diane Robinson Knapp.'
   });

   CampusLocations.insert({
      location: 'Milken Institute of Public Health',
      type: 'school',
      lat: 38.902105,
      lng: -77.051041,
      description: 'The Milken Institute School of Public Health building is a hub of discovery, learning and health policy analysis promoting GW&#39;s reputation as home to the only school of public health in the nation&#39;s capital.'
   });

   CampusLocations.insert({
      location: 'Anniversary Park',
      type: 'park',
      lat: 38.897133,
      lng: -77.047917,
      description: 'Created in communication of the university&#39;s 175th anniversary, Anniversary Park is a pocket park on F Street between 21st and 22nd streets, NW. Complete with a garden, benches and grills for gatherings, Anniversary Park is a valued space on the south end of the city campus.'
   });

   CampusLocations.insert({
      location: 'City Hall',
      type: 'dorm',
      lat: 38.902149,
      lng: -77.051693,
      description: 'Formerly a hotel, City Hall offers apartment-style living for third and fourth-year students as well as being home to several university offices.'
   });

}

if (Housings.find().count() == 0)
{
   Housings.insert({
      title: '1959 E Street',
      url: 'http://living.gwu.edu/1959-e-street',
      image: '/img/housing/1959-E-Street.jpg'
   });

   Housings.insert({
      title: '2109 F Street',
      url: 'https://living.gwu.edu/2109-f-street',
      image: '/img/housing/2109-F-Street.jpg'
   });

   Housings.insert({
      title: '2206 F Street',
      url: 'https://living.gwu.edu',
      image: '/img/housing/2206-F-Street.jpg'
   });

   Housings.insert({
      title: 'Amsterdam Hall',
      url: 'http://living.gwu.edu/philip-amsterdam-hall',
      image: '/img/housing/Amsterdam_Hall.jpg'
   });

   Housings.insert({
      title: 'Building JJ',
      url: 'http://living.gwu.edu/building-jj',
      image: '/img/housing/Building_JJ.jpg'
   });

   Housings.insert({
      title: 'City Hall',
      url: 'http://living.gwu.edu/city-hall',
      image: '/img/housing/City_Hall.jpg'
   });

   Housings.insert({
      title: 'Francis Scott Key Hall',
      url: 'http://living.gwu.edu/francis-scott-key',
      image: '/img/housing/Francis_Scott_Key_Hal.jpg'
   });

   Housings.insert({
      title: 'Fulbright Hall',
      url: 'http://living.gwu.edu/fulbright-hall',
      image: '/img/housing/Fulbright_Hall.jpg'
   });

   Housings.insert({
      title: 'Guthridge Hall',
      url: 'http://living.gwu.edu/guthridge-hall',
      image: '/img/housing/Guthridge_Hall.jpg'
   });

   Housings.insert({
      title: 'International House',
      url: 'http://living.gwu.edu/international-house',
      image: '/img/housing/International_House.jpg'
   });

   Housings.insert({
      title: 'JBKO Hall',
      url: 'http://living.gwu.edu/jacqueline-bouvier-kennedy-onassis-jbko-hall',
      image: '/img/housing/JBKO_Hall.jpg'
   });

   Housings.insert({
      title: 'Lafayette Hall',
      url: 'http://living.gwu.edu/lafayette-hall',
      image: '/img/housing/Lafayette_Hall.jpg'
   });

   Housings.insert({
      title: 'Madison Hall',
      url: 'http://living.gwu.edu/madison-hall',
      image: '/img/housing/Madison_Hall.jpg'
   });

   Housings.insert({
      title: 'Mitchell Hall',
      url: 'http://living.gwu.edu/mitchell-hall',
      image: '/img/housing/Madison_Hall.jpg'
   });

   Housings.insert({
      title: 'Munson Hall',
      url: 'http://living.gwu.edu/munson-hall',
      image: '/img/housing/Munson_Hall.jpg'
   });

   Housings.insert({
      title: 'Potomac House',
      url: 'http://living.gwu.edu/potomac-house',
      image: '/img/housing/Potomac_House.jpg'
   });

   Housings.insert({
      title: 'Shenkman Hall',
      url: 'http://living.gwu.edu/mark-shenkman-hall-formerly-ivory-tower',
      image: '/img/housing/Shenkman_Hall.jpg'
   });

   Housings.insert({
      title: 'South Hall',
      url: 'http://living.gwu.edu/south-hall',
      image: '/img/housing/South_Hall.jpg'
   });

   Housings.insert({
      title: 'Strong Hall',
      url: 'http://living.gwu.edu/strong-hall',
      image: '/img/housing/Strong_Hall.jpg'
   });

   Housings.insert({
      title: 'The Dakota',
      url: 'https://living.gwu.edu/dakota',
      image: '/img/housing/The_Dakota.jpg'
   });

   Housings.insert({
      title: 'Thurston Hall',
      url: 'https://living.gwu.edu/thurston-hall',
      image: '/img/housing/Thurston_Hall.jpg'
   });

   Housings.insert({
      title: 'Townhouse Row',
      url: 'http://living.gwu.edu/greek-townhouse-row',
      image: '/img/housing/TownHouse_Row.jpg'
   });

}

if (DiningLocations.find().count() == 0)
{
   DiningLocations.insert({

      name: '7-11',
      lat: 38.896573,
      lng: -77.044029,
      url: 'https://www.7-eleven.com/',
      image: '/img/dining/logo/711.jpg'

   });

   DiningLocations.insert({

      name: 'Amorini Panini',
      lat: 38.900612,
      lng: -77.041391,
      url: 'http://www.amorinipanini.com/801-18th-street-nw/',
      image: '/img/dining/logo/Amorini.jpg'

   });

   DiningLocations.insert({

      name: 'Aroma Indian Restaurant',
      lat: 38.901560,
      lng: -77.044419,
      url: '',
      image: '/img/dining/logo/Aroma.jpg'

   });

   DiningLocations.insert({

      name: 'Au Bon Pain',
      lat: 38.900534,
      lng: -77.045555,
      url: 'http://aubonpain.com/',
      image: '/img/dining/logo/Au_Bon_Pain.jpg'

   });

   DiningLocations.insert({

      name: 'Baja Fresh',
      lat: 38.902118,
      lng: -77.0437695,
      url: 'http://www.bajafresh.com/',
      image: '/img/dining/logo/Baja_Fresh.jpg'

   });

   DiningLocations.insert({

      name: "Bertucci's",
      lat: 38.900381,
      lng: -77.045749,
      url: 'http://www.bertuccis.com/',
      image: '/img/dining/logo/Bertuccis.jpg'

   });

   DiningLocations.insert({

      name: "Bobby's Burger Palace",
      lat: 38.900381,
      lng: -77.045749,
      url: 'http://www.bertuccis.com/',
      image: '/img/dining/logo/Bertuccis.jpg'

   });

   DiningLocations.insert({

      name: 'Boloco',
      lat: 38.903529,
      lng: -77.043739,
      url: 'http://boloco.com/',
      image: '/img/dining/logo/Boloco.jpg'

   });

   DiningLocations.insert({

      name: 'Bonmi',
      lat: 38.901705,
      lng: -77.043823,
      url: 'http://eatbonmi.com/',
      image: '/img/dining/logo/Bonmi.jpg'

   });

   DiningLocations.insert({

      name: 'Bourbon Coffee',
      lat: 38.904159,
      lng: -77.047473,
      url: 'http://bourboncoffeeusa.com/',
      image: '/img/dining/logo/Bourbon_Coffee.jpg'

   });

   DiningLocations.insert({

      name: "Bruegger's Bagels",
      lat: 38.904159,
      lng: -77.047473,
      url: 'https://www.brueggers.com/',
      image: '/img/dining/logo/Brueggers_Bagel.jpg'

   });

   DiningLocations.insert({

      name: "Burger, Tap & Shake",
      lat: 38.901892,
      lng: -77.049151,
      url: 'http://www.burgertapshake.com/burgertap.html',
      image: '/img/dining/logo/BTS.jpg'

   });

   DiningLocations.insert({

      name: "Cafe Instanbul",
      lat: 38.904171,
      lng: -77.045214,
      url: 'http://www.burgertapshake.com/burgertap.html',
      image: '/img/dining/logo/Cafe_Instanbul.jpg'

   });

   DiningLocations.insert({

      name: "Cafe Tu O Tu",
      lat: 38.904933,
      lng: -77.057645,
      url: 'http://www.cafetuotu.com/',
      image: '/img/dining/logo/Cafe_tu_o_tu.jpg'

   });

   DiningLocations.insert({

      name: "Carvings",
      lat: 38.897671,
      lng: -77.045487,
      url: '',
      image: '/img/dining/logo/Carvings.jpg'

   });

   DiningLocations.insert({

      name: "Chalin's Restaruant",
      lat: 38.901074,
      lng: -77.04003,
      url: '',
      image: '/img/dining/logo/Chalin.jpg'

   });

   DiningLocations.insert({

      name: "Chiptole",
      lat: [38.905963, 38.905429],
      lng: [-77.043161, -77.064528],
      url: 'https://www.chipotle.com/',
      image: '/img/dining/logo/Chipotle.jpg'

   });

   DiningLocations.insert({
      name: "Chop't",
      lat: [38.904154, 38.898742],
      lng: [-77.043181, -77.040428],
      url: 'http://choptsalad.com//',
      image: '/img/dining/logo/Chopt.jpg'

   });

   DiningLocations.insert({
      name: "Crepaway",
      lat: 38.904113,
      lng: -77.045267,
      url: 'http://www.crepeaway.com/',
      image: '/img/dining/logo/Crepeaway.jpg'

   });

   DiningLocations.insert({
      name: "Crepe N Creme",
      lat: 38.904930,
      lng: -77.057700,
      url: 'http://www.crepeaway.com/',
      image: '/img/dining/logo/Crepes_N_Cream.jpg'

   });

   DiningLocations.insert({
      name: "Custom Fuel Pizza",
      lat: 38.899711,
      lng: -77.041116,
      url: 'http://customfuelpizza.com/',
      image: '/img/dining/logo/Custom_Fuel_Pizza.jpg'

   });

   DiningLocations.insert({
      name: "Devon & Blakely",
      lat: 38.901922,
      lng: -77.049183,
      url: 'http://devonblakelydc.com',
      image: '/img/dining/logo/Devon_Blakely.jpg'

   });

   DiningLocations.insert({
      name: "Domino's",
      lat: 38.902947,
      lng: -77.046103,
      url: 'https://www.dominos.com/en/',
      image: '/img/dining/logo/Dominoes_Pizza.jpg'

   });

   DiningLocations.insert({
      name: "Dunkin Donuts",
      lat: 38.898017,
      lng: -77.050434,
      url: 'https://www.dunkindonuts.com/dunkindonuts/en.html',
      image: '/img/dining/logo/Dunkin_Donuts.jpg'

   });

   DiningLocations.insert({
      name: "Farmer's Market",
      lat: 38.900619,
      lng: -77.050415,
      url: '',
      image: '/img/dining/logo/Farmers_Market.jpg'

   });

   DiningLocations.insert({
      name: "FoBoGro",
      lat: 38.897149,
      lng: -77.048159,
      url: 'http://fobogro.com/',
      image: '/img/dining/logo/FoBoGro.jpg'

   });

   DiningLocations.insert({
      name: "Froggy Bottom Pub",
      lat: 38.902888,
      lng: -77.045843,
      url: 'http://www.froggybottompub.com/',
      image: '/img/dining/logo/Froggy_Bottom.jpg'

   });

   DiningLocations.insert({
      name: "Frozenyo",
      lat: 38.901141,
      lng: -77.038960,
      url: 'http://www.frozenyo.com/',
      image: '/img/dining/logo/frozenyo.jpg'

   });

   DiningLocations.insert({
      name: "Frozenyo",
      lat: 38.901141,
      lng: -77.038960,
      url: 'http://www.frozenyo.com/',
      image: '/img/dining/logo/frozenyo.jpg'

   });

   DiningLocations.insert({
      name: "Gallery Place",
      lat: 38.898034,
      lng: -77.050445,
      url: '',
      image: '/img/dining/logo/Gallery_Place.jpg'

   });

   DiningLocations.insert({
      name: "GW Delicatessen",
      lat: 38.898551,
      lng: -77.048268,
      url: '',
      image: '/img/dining/logo/Gallery_Place.jpg'

   });

   DiningLocations.insert({
      name: "Johnny Rockets",
      lat: 38.900552,
      lng: -77.045082,
      url: 'http://www.johnnyrockets.com/',
      image: '/img/dining/logo/Johnny_Rockets.jpg'

   });

   DiningLocations.insert({
      name: "Juan Valdez Cafe",
      lat: 38.897572,
      lng: -77.043219,
      url: 'http://www.juanvaldezcafe.com/es/colombia',
      image: '/img/dining/logo/Juan_Valdez_Cafe.jpg'

   });

   DiningLocations.insert({
      name: "Kaz Sushi Bistro",
      lat: 38.901574,
      lng: -77.044217,
      url: 'http://www.kazsushi.com/',
      image: '/img/dining/logo/Kaz_Sushi_Bistro.jpg'

   });

   DiningLocations.insert({
      name: "Los Cuates",
      lat: 38.910454,
      lng: -77.065178,
      url: 'http://www.loscuatesrestaurant.com/',
      image: '/img/dining/logo/Los_Cuates.jpg'

   });

   DiningLocations.insert({
      name: "Manny & Olga's Pizza",
      lat: 38.911533,
      lng: -77.065168,
      url: 'http://www.mannyandolgas.com/',
      image: '/img/dining/logo/Manny&Olgas_Pizza.jpg'

   });

   DiningLocations.insert({
      name: "Nick's Riverside Grille",
      lat: 38.902187,
      lng: -77.060519,
      url: 'http://nicksriversidegrill.com/',
      image: '/img/dining/logo/Nicks_Riverside_Grill.jpg'

   });

   DiningLocations.insert({
      name: "Papa John's",
      lat: 38.904185,
      lng: -77.053940,
      url: 'http://order.papajohns.com/index.html?site=WEB',
      image: '/img/dining/logo/Papa_John.jpg'

   });

   DiningLocations.insert({
      name: "Paul",
      lat: 38.900178,
      lng: -77.045755,
      url: 'http://www.paul-usa.com/',
      image: '/img/dining/logo/Paul.jpg'

   });

   DiningLocations.insert({
      name: "Pita Pit",
      lat: 38.898135,
      lng: -77.050501,
      url: 'http://pitapitusa.com/',
      image: '/img/dining/logo/Pita_Pit.jpg'

   });

   DiningLocations.insert({
      name: "Potbelly",
      lat: 38.898087,
      lng: -77.050377,
      url: 'http://www.potbelly.com/',
      image: '/img/dining/logo/Potbelly.jpg'

   });

   DiningLocations.insert({
      name: "Roti",
      lat: 38.901040,
      lng: -77.049753,
      url: 'http://roti.com/',
      image: '/img/dining/logo/Roti.jpg'

   });

   DiningLocations.insert({
      name: "Starbucks",
      lat: [38.896257, 38.899212],
      lng: [-77.043979, -77.048402],
      url: 'http://www.starbucks.com/',
      image: '/img/dining/logo/Starbucks.jpg'

   });

   DiningLocations.insert({
      name: "Subway",
      lat: 38.896282,
      lng: -77.044229,
      url: 'http://www.subway.com/subwayroot/default.aspx',
      image: '/img/dining/logo/Subway.jpg'

   });

   DiningLocations.insert({
      name: "sweetgreen",
      lat: 38.900947,
      lng: -77.049730,
      url: 'http://sweetgreen.com/',
      image: '/img/dining/logo/sweetgreen.jpg'

   });

   DiningLocations.insert({
      name: "sweetgreen",
      lat: 38.900947,
      lng: -77.049730,
      url: 'http://sweetgreen.com/',
      image: '/img/dining/logo/sweetgreen.jpg'

   });

   DiningLocations.insert({
      name: "Taylor",
      lat: 38.905942,
      lng: -77.043721,
      url: 'http://www.taylorgourmet.com/',
      image: '/img/dining/logo/Taylor.jpg'

   });

   DiningLocations.insert({
      name: "TGI Friday",
      lat: 38.901226,
      lng: -77.047363,
      url: 'https://www.tgifridays.com/',
      image: '/img/dining/logo/TGI_Friday.jpg'

   });

   DiningLocations.insert({
      name: "The Perfect Pita",
      lat: 38.900283,
      lng: -77.045784,
      url: 'http://www.theperfectpita.com/signature_pitas.htm/',
      image: '/img/dining/logo/The_Perfect_Pita.jpg'

   });

   DiningLocations.insert({
      name: "Tonic",
      lat: 38.898044,
      lng: -77.046474,
      url: 'http://tonicrestaurantdc.com/',
      image: '/img/dining/logo/Tonic.jpg'

   });

   DiningLocations.insert({
      name: "Whole Foods",
      lat: 38.900924,
      lng: -77.049087,
      url: 'http://www.wholefoodsmarket.com/',
      image: '/img/dining/logo/WholeFoods.jpg'

   });

}

if (LibraryLocations.find().count() == 0)
{
   LibraryLocations.insert({
      name: 'Gelman Library',
      url: 'http://library.gwu.edu/',
      image: '/img/library/gelman-1.jpg'
   });

   LibraryLocations.insert({
      name: 'Jacob Burns Law Library',
      url: 'http://www.law.gwu.edu/library/Pages/Default.aspx',
      image: '/img/library/jacob-burns.jpg'
   });

   LibraryLocations.insert({
      name: 'Himmelfarb Health Sciences Library',
      url: 'https://himmelfarb.gwu.edu/',
      image: '/img/library/medical.jpg'
   });
}

if (StudentLifeLocations.find().count() == 0)
{

   StudentLifeLocations.insert({
      name: 'Marvin Center',
      url: 'http://events-venues.gwu.edu/marvin-center-building-hours',
      image: '/img/studentLife/Marvin_Center.jpg'
   });

   StudentLifeLocations.insert({
      name: 'Welcome Center',
      url: 'http://undergraduate.admissions.gwu.edu/admissions-welcome-center',
      image: '/img/studentLife/Welcome_Center.jpg'
   });

   StudentLifeLocations.insert({
      name: 'Colonial Health Center',
      url: 'http://studenthealth.gwu.edu/',
      image: '/img/studentLife/Colonial_Health_Center.jpg'
   });

   StudentLifeLocations.insert({
      name: 'Buff & Blue',
      url: '',
      image: '/img/studentLife/Buff & Blue.jpg'
   });

   StudentLifeLocations.insert({
      name: 'Charles E. Smith Center',
      url: 'http://www.gwsports.com/facilities/gewa-baskbl-facility.html',
      image: '/img/studentLife/Smith_Center.jpg'
   });

   StudentLifeLocations.insert({
      name: 'Kogan Plaza',
      url: 'https://www.gwu.edu/campus-landmarks',
      image: '/img/studentLife/Kogan_Plaza.jpg'
   });

   StudentLifeLocations.insert({
      name: 'Health & Wellness Center',
      url: 'http://campusrecreation.gwu.edu/',
      image: '/img/studentLife/Wellness_Center.jpg'
   });

   StudentLifeLocations.insert({
      name: 'Lisner Auditorium',
      url: 'http://lisner.gwu.edu/',
      image: '/img/studentLife/Lisner_Auditorium.jpg'
   });

   StudentLifeLocations.insert({
      name: 'University Museum/Textile Museum',
      url: 'http://museum.gwu.edu/',
      image: '/img/studentLife/Museum.jpg'
   });

   StudentLifeLocations.insert({
      name: 'Anniversary Park',
      url: 'https://www.gwu.edu/campus-landmarks',
      image: '/img/studentLife/Anniversary_Park.jpg'
   });

   StudentLifeLocations.insert({
      name: 'University Yard',
      url: 'https://www.gwu.edu/campus-landmarks',
      image: '/img/studentLife/University_Yard.jpg'
   });


}

if (JStreetOptions.find().count() == 0)
{
    JStreetOptions.insert({
        name: "Auntie Anne's"

    });

    JStreetOptions.insert({
        name: "The Grill"

    });

    JStreetOptions.insert({
        name: "Fresh Blends"

    });

    JStreetOptions.insert({
        name: "The Coffee Shop"

    });

    JStreetOptions.insert({
        name: "Pesto"

    });

    JStreetOptions.insert({
        name: "Simply to Go Store"

    });

    JStreetOptions.insert({
        name: "Thyme"

    });

    JStreetOptions.insert({
        name: "Greenfields"

    });
}
