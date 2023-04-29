CREATE TABLE major(id INTEGER NOT NULL,ref TEXT PRIMARY KEY, name TEXT)
CREATE TABLE user(id INTEGER, username text PRIMARY KEY, password TEXT NOT NULL )
CREATE TABLE rating(user_id TEXT NOT NULL,ref TEXT , value REAL); 
CREATE TABLE article(user_id INTEGER, ref TEXT, date TEXT, title TEXT NOT NULL, description TEXT, content TEXT);   
 

ALTER TABLE table_name ADD COLUMN column_name column_type;

-- Define the schema of the article table
CREATE TABLE article (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL
);

INSERT INTO article(user_id, ref, date, title, description, content)
VALUES
(1, 'ABC123', '2023-04-28', 'The Benefits of Online Learning', 'This article explores the advantages of online learning over traditional classroom education.', 'Online learning has become increasingly popular in recent years, and for good reason. With online courses, students have the flexibility to learn at their own pace, on their own schedule. This can be especially beneficial for those with busy schedules or who live in remote areas. Additionally, online courses often offer more affordable tuition rates than traditional classroom courses, making education more accessible to a wider range of students.'),
(2, 'DEF456', '2023-04-27', 'The Importance of Mental Health Awareness', 'This article highlights the significance of mental health awareness in today s society.', 'Mental health is a crucial aspect of our overall well-being, and it is important that we take steps to maintain it. Unfortunately, mental health issues are still stigmatized in many parts of the world, which can make it difficult for those who are struggling to seek help. By raising awareness about mental health and promoting a culture of openness and understanding, we can help to reduce the stigma and make it easier for people to get the support they need.'),
(3, 'GHI789', '2023-04-26', 'The Future of Artificial Intelligence', 'This article discusses the potential impact of artificial intelligence on society in the years to come.', 'Artificial intelligence has come a long way in recent years, and its potential applications are vast. From self-driving cars to personalized medicine, AI has the power to transform a wide range of industries and make our lives easier in countless ways. However, there are also concerns about the potential risks associated with AI, such as job displacement and the possibility of AI systems making decisions that are harmful to humans. As we continue to develop and refine AI technologies, it will be important to consider these risks and take steps to mitigate them.'),
(4, 'JKL012', '2023-04-25', 'The Benefits of Meditation', 'This article explores the many benefits of incorporating a regular meditation practice into your daily routine.', 'Meditation has been shown to have a wide range of benefits for both physical and mental health. Regular meditation can help to reduce stress and anxiety, improve focus and concentration, and promote feelings of inner peace and well-being. Additionally, meditation can be a useful tool for those seeking to develop greater self-awareness and a deeper sense of connection to the world around them.'),
(5, 'MNO345', '2023-04-24', 'The Importance of Diversity in the Workplace', 'This article examines the benefits of a diverse and inclusive workplace, and why it is important for businesses to prioritize diversity and inclusion.', 'A diverse and inclusive workplace can provide a number of benefits for both employees and employers. By bringing together people from different backgrounds and perspectives, businesses can foster innovation, creativity, and problem-solving skills. Additionally, a diverse workplace can help to attract and retain top talent, and can improve employee morale and job satisfaction.'),
(6, 'PQR678', '2023-04-23', 'The Pros and Cons of Social Media', 'This article explores the advantages and disadvantages of social media use in today\s society.', 'Social media has become an integral part of our daily lives, with billions of people around the world using platforms like Facebook, Twitter, and Instagram to connect with friends and family, share news and information, and express themselves. While social media can be a valuable tool for communication and self-expression, it');




INSERT INTO course (id, ref, name) VALUES
  (1, 'ACCQ201', 'Structures algébriques finies'),
  (2, 'ACCQ202', 'Théorie de l’information'),
  (3, 'ACCQ204', 'Codage correcteur d’erreurs'),
  (4, 'ACCQ205', 'Introduction aux courbes algébriques'),
  (5, 'ACCQ207', 'Morceaux choisis en cryptographie mathématique'),
  (6, 'COM101', 'Optique et photonique'),
  (7, 'COM103', 'Propagation'),
  (8, 'COM105', 'Communications numériques et théorie de l’information'),
  (9, 'DROIT-TRAV', 'Droit du travail'),
  (10, 'ELEC101', 'Electronique des systèmes d’acquisition'),
  (11, 'ELECINF102', 'Processeurs et Architectures Numériques'),
  (12, 'HUM205', 'Sociologie générale de l’Etat'),
  (13, 'HUM215', 'Comprendre l architecture aujourd hui'),
  (14, 'HUM222', 'Humanities'),
  (15, 'IGR201', 'Développement d’applications interactives 2D, 3D, Mobile'),
  (16, 'IGR203', 'Interaction homme-machine'),
  (17, 'IMA204', 'Imagerie médicale et biologique'),
  (18, 'IMA206', 'Photographie computationelle Méthodes par patchs'),
  (19, 'INF101', 'Structures de données et algorithmique'),
  (20, 'INF103', 'Langage JAVA'),
  (21, 'INF104', 'Systèmes d exploitation et langage C'),
  (22, 'INF105', 'Théorie des langages'),
  (23, 'INF106', 'Systèmes d’exploitation et langage C - Suite'),
  (24, 'INF229', 'Information Visualization'),
  (25, 'MDI101', 'Mathématiques'),
  (26, 'MDI103', 'Analyse'),
  (27, 'MDI104', 'Probabilités et statistiques'),
  (28, 'MDI113', 'Analyse'),
  (29, 'MDI114', 'Probabilités et statistiques'),
  (30, 'MDI210', 'Optimisation et analyse numérique'),
  (31, 'MDI220', 'Statistiques'),
  (32, 'MITRO201', 'Logique'),
  (33, 'MITRO202', 'Calculabilité'),
  (34, 'MITRO203', 'Complexité'),
  (35, 'MITRO205', 'Optimisation combinatoire et analyse combinatoire'),
  (36, 'MITRO206', 'Théories des jeux'),
  (37, 'MITRO207', 'Distributed computing through combinatorial topology'),
  (38, 'MITRO208', 'Algorithmique avancée'),
  (39, 'MITRO209', 'Graphes et partitionnement de données'),
  (40, 'MODS202', 'Econometrics'),
  (41, 'PACE', 'Pratiques et analyses de communication écrite'),
  (42, 'PACT', 'Projet d’apprentissage collaboratif thématique'),
(43, 'PAF', 'Projet d’application final'),
(44, 'PHY101', 'Micro- et nano-physique'),
(45, 'RES101', 'Réseaux'),
(46, 'RIO203', 'Plateformes et applications IoT'),
(47, 'RIO205', 'Cloud pour IoT et mobile'),
(48, 'SE201', 'Support d’exécution (Execution platforms)'),
(49, 'SES101', 'Initiation à l’économie'),
(50, 'SES103', 'Introduction à l’économie contemporaine'),
(51, 'SES105', 'Technologies & société : enjeux et dynamiques sociales à l’ère numérique'),
(52, 'SES107', 'Introduction au management : jeu d’entreprise'),
(53, 'SES108', 'Visites d’entreprises'),
(54, 'SI101', 'Outils et applications pour le signal, les images et le son'),
(55, 'SLR201', 'Programmation Avancée et Gestion de Projet (en Java)'),
(56, 'SLR204', 'Bases de la vérification des systèmes distribués'),
(57, 'SLR206', 'Fondements des algorithmes répartis'),
(58, 'SLR210', 'Blockchain: bases algorithmiques'),
(59, 'STGFH101', 'Stage de formation humaine'),
(60, 'STIC101', 'Tables Rondes métiers'),
(61, 'TSIA202', 'Séries chronologiques');

INSERT INTO major(id, ref, name) VALUES
  (1, 'MODS', 'Marchés, organisation, data, stratégie'),
  (2, 'IMG', 'Image'),
  (3, 'SD', 'Science des données'),
  (4, 'TSIA', 'Traitement du signal pour l’intelligence artificielle'),
  (5, 'ACCQ', 'Algèbre appliquée'),
  (6, 'MITRO', 'Mathématiques, informatique théorique et recherche opérationnelle'),
  (7, 'MACS', 'Modélisation aléatoire et calcul scientifique'),
  (8, 'GIN', 'Grandes infrastructures numériques'),
  (9, 'RIO', 'Réseaux mobiles et internet des objets'),
  (10, 'SR2I', 'Sécurité des réseaux et infrastructures informatiques'),
  (11, 'TELECOM', 'Télécommunications : des données aux systèmes'),
  (12, '3D', '3D et systèmes interactifs'),
  (13, 'SE', 'Systèmes embarqués'),
  (14, 'SLR', 'Systèmes logiciels répartis');

