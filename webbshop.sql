-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Värd: localhost:8889
-- Tid vid skapande: 03 mars 2022 kl 16:37
-- Serverversion: 5.7.34
-- PHP-version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `webbshop`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `category`
--

CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `CategoryName` varchar(50) NOT NULL,
  `CategoryDescription` varchar(250) NOT NULL,
  `CategoryIMG` varchar(100) NOT NULL,
  `CategoryBackGround` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `category`
--

INSERT INTO `category` (`ID`, `CategoryName`, `CategoryDescription`, `CategoryIMG`, `CategoryBackGround`) VALUES
(1, 'ADIDAS', 'Impossible is nothing.', 'ADIDAS.png', 'ADIDAS.jpg'),
(2, 'CONVERSE', 'Shoes are boring, wear sneakers.', 'CONVERSE.png', 'CONVERSE.jpg'),
(3, 'NEW BALANCE', 'Because shoes that fit better, perform better.', 'NEW BALANCE.png', 'NEW BALANCE.jpg'),
(4, 'NIKE', 'Just Do It', 'NIKE.png', 'NIKE.jpg'),
(5, 'SAUCONY', 'Maybe strong is just what you have left when you\'ve used up all your weak.', 'SAUCONY.png', 'SAUCONY.jpg');

-- --------------------------------------------------------

--
-- Tabellstruktur `images`
--

CREATE TABLE `images` (
  `ID` int(11) NOT NULL,
  `ProductID` int(10) NOT NULL,
  `ImageType` int(5) NOT NULL,
  `ImageSrc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `images`
--

INSERT INTO `images` (`ID`, `ProductID`, `ImageType`, `ImageSrc`) VALUES
(1, 1, 1, 'adidas Originals Forum Home Alone 1.jpeg'),
(2, 1, 2, 'adidas Originals Forum Home Alone 2.jpeg'),
(3, 1, 3, 'adidas Originals Forum Home Alone 3.jpeg'),
(4, 2, 1, 'adidas Performance D.O.N. Issue 3 1.jpeg '),
(5, 2, 2, 'adidas Performance D.O.N. Issue 3 2.jpeg'),
(6, 2, 3, 'adidas Performance D.O.N. Issue 3 3.jpeg'),
(7, 3, 1, 'adidas Originals Forum 84 Low 1.jpeg'),
(8, 3, 2, 'adidas Originals Forum 84 Low 2.jpeg'),
(9, 3, 3, 'adidas Originals Forum 84 Low 3.jpeg'),
(10, 4, 1, 'adidas Originals Forum Hi Humanchives x Kerwin Frost 1.jpeg'),
(11, 4, 2, 'adidas Originals Forum Hi Humanchives x Kerwin Frost 2.jpeg'),
(12, 4, 3, 'adidas Originals Forum Hi Humanchives x Kerwin Frost 3.jpeg'),
(13, 5, 1, 'adidas Originals Forum Low 1.jpeg'),
(14, 5, 2, 'adidas Originals Forum Low 2.jpeg'),
(15, 5, 3, 'adidas Originals Forum Low 3.jpeg'),
(16, 6, 1, 'adidas Dame 7 Extply 1.jpeg'),
(17, 6, 2, 'adidas Dame 7 Extply 2.jpeg'),
(18, 6, 3, 'adidas Dame 7 Extply 3.jpeg'),
(19, 7, 1, 'Converse Chuck 70 Mid x Undefeated 1.jpeg'),
(20, 7, 2, 'Converse Chuck 70 Mid x Undefeated 2.jpeg'),
(21, 7, 3, 'Converse Chuck 70 Mid x Undefeated 3.jpeg'),
(22, 8, 1, 'Converse Chuck 70 Sherpa Lined 1.jpeg'),
(23, 8, 2, 'Converse Chuck 70 Sherpa Lined 2.jpeg'),
(24, 8, 3, 'Converse Chuck 70 Sherpa Lined 3.jpeg'),
(25, 9, 1, 'Converse Chuck Taylor 70 Hi x thisisneverthat 1.jpeg'),
(26, 9, 2, 'Converse Chuck Taylor 70 Hi x thisisneverthat 2.jpeg'),
(27, 9, 3, 'Converse Chuck Taylor 70 Hi x thisisneverthat 3.jpeg'),
(28, 10, 1, 'Converse Run Star Motion 1.jpeg'),
(29, 10, 2, 'Converse Run Star Motion 2.jpeg'),
(30, 10, 3, 'Converse Run Star Motion 3.jpeg'),
(31, 11, 1, 'Converse Run Star Motion Canvas Platform 1.jpeg'),
(32, 11, 2, 'Converse Run Star Motion Canvas Platform 2.jpeg'),
(33, 11, 3, 'Converse Run Star Motion Canvas Platform 3.jpeg'),
(34, 12, 1, 'Converse Weapon CX Mid 1.jpeg'),
(35, 12, 2, 'Converse Weapon CX Mid 2.jpeg'),
(36, 12, 3, 'Converse Weapon CX Mid 3.jpeg'),
(37, 13, 1, 'New Balance 990v3 1.jpeg'),
(38, 13, 2, 'New Balance 990v3 2.jpeg'),
(39, 13, 3, 'New Balance 990v3 3.jpeg'),
(40, 14, 1, 'New Balance 991 1.jpeg'),
(41, 14, 2, 'New Balance 991 2.jpeg'),
(42, 14, 3, 'New Balance 991 3.jpeg'),
(43, 15, 1, 'New Balance ML725 1.jpeg'),
(44, 15, 2, 'New Balance ML725 2.jpeg'),
(45, 15, 3, 'New Balance ML725 3.jpeg\r\n'),
(46, 16, 1, 'New Balance MS327 1.jpeg'),
(47, 16, 2, 'New Balance MS327 2.jpeg'),
(48, 16, 3, 'New Balance MS327 3.jpeg'),
(49, 17, 1, 'New Balance Nobium C_2 x Tokyo Design Studio 1.jpeg'),
(50, 17, 2, 'New Balance Nobium C_2 x Tokyo Design Studio 2.jpeg'),
(51, 17, 3, 'New Balance Nobium C_2 x Tokyo Design Studio 3.jpeg'),
(52, 18, 1, 'New Balance UXC72v1 1.jpeg'),
(53, 18, 2, 'New Balance UXC72v1 2.jpeg'),
(54, 18, 3, 'New Balance UXC72v1 3.jpeg'),
(55, 19, 1, 'Nike Sportswear Air Force 1 GTX 1.jpeg'),
(56, 19, 2, 'Nike Sportswear Air Force 1 GTX 2.jpeg'),
(57, 19, 3, 'Nike Sportswear Air Force 1 GTX 3.jpeg'),
(58, 20, 1, 'Nike Sportswear Air Force 1 Mid 07 QS 1.jpeg'),
(59, 20, 2, 'Nike Sportswear Air Force 1 Mid 07 QS 2.jpeg'),
(60, 20, 3, 'Nike Sportswear Air Force 1 Mid 07 QS 3.jpeg'),
(61, 21, 1, 'Nike Sportswear Air Huarache 1.jpeg'),
(62, 21, 2, 'Nike Sportswear Air Huarache 2.jpeg'),
(63, 21, 3, 'Nike Sportswear Air Huarache 3.jpeg'),
(64, 22, 1, 'Nike Sportswear Air Max 97 SE 1.jpeg'),
(65, 22, 2, 'Nike Sportswear Air Max 97 SE 2.jpeg'),
(66, 22, 3, 'Nike Sportswear Air Max 97 SE 3.jpeg'),
(67, 23, 1, 'Nike Sportswear Air Max Terrascape Plus 1.jpeg'),
(68, 23, 2, 'Nike Sportswear Air Max Terrascape Plus 2.jpeg'),
(69, 23, 3, 'Nike Sportswear Air Max Terrascape Plus 3.jpeg'),
(70, 24, 1, 'Nike Sportswear Air Tuned Max 1.jpeg'),
(71, 24, 2, 'Nike Sportswear Air Tuned Max 2.jpeg'),
(72, 24, 3, 'Nike Sportswear Air Tuned Max 3.jpeg'),
(73, 25, 1, 'Saucony Grid Azura 2000 1.jpeg'),
(74, 25, 2, 'Saucony Grid Azura 2000 2.jpeg'),
(75, 25, 3, 'Saucony Grid Azura 2000 3.jpeg'),
(76, 26, 1, 'Saucony Grid Web 1.jpeg'),
(77, 26, 2, 'Saucony Grid Web 2.jpeg'),
(78, 26, 3, 'Saucony Grid Web 3.jpeg'),
(79, 27, 1, 'Saucony Grid Web Iridescent 1.jpeg'),
(80, 27, 2, 'Saucony Grid Web Iridescent 2.jpeg'),
(81, 27, 3, 'Saucony Grid Web Iridescent 3.jpeg'),
(82, 28, 1, 'Saucony Jazz 81 1.jpeg'),
(83, 28, 2, 'Saucony Jazz 81 2.jpeg'),
(84, 28, 3, 'Saucony Jazz 81 3.jpeg'),
(85, 29, 1, 'Saucony Jazz 81 Distressed 1.jpeg'),
(86, 29, 2, 'Saucony Jazz 81 Distressed 2.jpeg'),
(87, 29, 3, 'Saucony Jazz 81 Distressed 3.jpeg'),
(88, 30, 1, 'Saucony Shadow 6000 1.jpeg'),
(89, 30, 2, 'Saucony Shadow 6000 2.jpeg'),
(90, 30, 3, 'Saucony Shadow 6000 3.jpeg');

-- --------------------------------------------------------

--
-- Tabellstruktur `newsletter`
--

CREATE TABLE `newsletter` (
  `ID` int(11) NOT NULL,
  `Title` varchar(50) NOT NULL,
  `Description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellstruktur `orderdetails`
--

CREATE TABLE `orderdetails` (
  `ProductID` int(10) NOT NULL,
  `OrderID` int(10) NOT NULL,
  `SizesID` int(10) NOT NULL,
  `OrderDetailsPrice` int(10) NOT NULL,
  `OrderDetailsQuantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellstruktur `orders`
--

CREATE TABLE `orders` (
  `ID` int(11) NOT NULL,
  `UserID` int(10) NOT NULL,
  `ShippingID` int(10) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `OrderStatus` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellstruktur `product`
--

CREATE TABLE `product` (
  `ID` int(11) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `productDescription` varchar(500) NOT NULL,
  `productPrice` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `product`
--

INSERT INTO `product` (`ID`, `productName`, `productDescription`, `productPrice`) VALUES
(1, 'Originals Forum Home Alone', 'A timeless adidas style that pays homeage to one of the most iconic film of all time, what more could we ask for this Christmas? This adidas forum is inspired by the sneaker that Kevin wore in the classic film, lace jewels represent the iconic booby traps Kevin set for the intruders. Movie scenes play out on the sockliners. Burn marks nod to the famous fire scene. And to top it all off, a doormat tongue-label references the house where it all happened.', 129),
(2, 'DON Issue 3 (performance)', 'Utah Jazz superstar Donovan Mitchell introduces his third signature sneaker with adidas, the adidas D.O.N. Issue 3. Following the first two on-court styles, his last take on basketball kicks demonstrates a lightweight construction with a textile upper and special lacing construction.', 109),
(3, 'Originals Forum 84 Low', 'One of adidas\' most popular silhouettes from the \'80s continues its resurgence, the Forum 84 Low is brought to you with a mix of light and dark colors, including a mix of premium leathers on the upper with textile lining this Forum is as clean as you can get. Finished off with the classic ankle strap as seen before with gold branding.', 129),
(4, 'Originals Forum Hi Humanchives x Kerwin Frost', 'adidas combine with Kerwin Frost to bring us a collection of eye catching pieces, capturing what is best about Kerwin and the brand with 3 stripes. A forum is a place for expression, which is exactly what the adidas Forum shoes have been about since their debut on the court. They\'re the perfect canvas for fun-loving, shape-shifting entertainer Kerwin Frost\'s vision, with eyes and mouths mingling with the Forum\'s most iconic details.', 179),
(5, 'Originals Forum Low', 'The adidas Forum Low kindly fuses its performance basketball roots with today’s sneaker design language. Perfectly combining retro accents, the retro adidas sneaker is crafted with a leather upper sporting plush terry lining to commemorate the OG look and feel.', 99),
(6, 'Dame 7 x Reebok', 'The adidas Dame 7 pays homage to the great \"Shaq Diesel\" and the iconic Reebok Shaqnosis. The black and white upper mimics the legendary silhouette from the mid 90\'s and features an ultralight Lightstrike midsole. This collaboration with Reebok features both Dame\'s and Shaq\'s logo and aims to highlight their accomplished careers on and off the court.', 119),
(7, 'Chuck 70 Mid x Undefeated', 'Converse x Undefeated bring us a limited edition version of this iconic silhouette, featuring military inspiration as seen on the premium canvas upper. It’s the return of a long-standing partnership that stays true to Undefeated DNA and West Coast styling. Finished off with sharp details like the unexpected pop of blue on the outsole and mil-spec printed label complement the design’s expert craftsmanship.', 129),
(8, 'Chuck 70 Sherpa Lined', 'The Converse Chuck 70 doubles down on its premium reputation with leather, cozy Sherpa, and the crafted details to match. A Sherpa tongue and lining brings a favorite, fuzzy winter material inside and out, adding a warm layer under the premium leather upper. Complete with Chuck 70\'s glossy, egret-colored midsole, vintage star ankle patch, and extra cushioning. Get comfortable.', 119),
(9, 'Chuck Taylor 70 Hi x thisisneverthat', 'Converse unite with the Seoul-based streetwear label Thisisneverthat to provide a ‘90s street mood on the Chuck 70. Utilizing a hairy suede upper and unique finishing effect on the midsole, thisisneverthat echoes the look of well-worn Chucks. It’s a distinct blend of old and new—with modern details that highlight the collaboration and vintage-inspired colors and textures that celebrate an iconic style era.', 159),
(10, 'Run Star Motion', 'The latest Converse Run Star Motion continues the journey of the iconic Chuck with a wavy midsole update. Crafted with a canvas upper, the bulky sneaker with two-tone midsole features comfortable CX foam cushioning to keep the evolution of the All Star ankle patch-rocking series going.', 229),
(11, 'Run Star Motion Canvas Platform', 'The popular Converse Run Star Motion is back! This time arriving in a new low-top Canvas Platform edition, including a 100% organic cotton canvas upper this style comes with an expressive lugged outsole and premium Chuck 70 detailing. Heel pods with ultra-expressive lugs define the style, finished with classic Chuck 70 detailing.', 219),
(12, 'Weapon CX Mid', 'Mixing premium leather with a sportswear appeal, the Converse Weapon is a true retro basketball gem from 1986. This updated style features the original Y-bar for stability, an up-sized tongue, and a new CX foam for supreme cushioning. The platform midsole takes center stage, offering a contemporary look, perfectly intertwining with the retro upper.', 169),
(13, '990v3', 'New Balance Made US 990v3 features premium construction and a heritage-inspired design for a durable and stylish kick you can wear anywhere. These men\'s sneakers are built with ENCAP midsole cushioning for a soft and supportive underfoot feel.', 249),
(14, '991v!', 'Sometimes you just need to appreciate greatness, and the New balance 991 is definitely a stunning sneaker. Debuted in 2001, the 991 has been on and off the shelves but lately established itself as a go-to sneaker, which survived seasonal collections. This original grey version features a soft suede upper with mesh underlays.', 109),
(15, 'ML725', 'The stylish New Balance ML725V1 was inspired by 2000’s running silhouettes to give your casual looks a fresh upgrade. These unisex fashion sneakers include C-CAP midsole cushioning for durable support with a synthetic and mesh upper for a comfortable feel. They’re a versatile combination of fashion and function in one cool kick.', 109),
(16, 'MS327', 'Nodding to New Balance running shoes from the ‘70s, the all-new New Balance MS327 combines a slim look with archival spirit. Designed with a streamlined look, somewhere tapping into classic marathon sneaker history, the grey retro sneaker features a suede upper, a clean EVA midsole and a rubber outsole that nods to the one we know from the New Balance 355.', 119),
(17, 'Nobium C 2 x Tokyo Design Studio', 'New Balance\'s Niobium Concept 2 is a unique, trail-inspired sandal designed for comfort and a locked-in fit and feel. Featuring a buckle fastening system, this men\'s sandal offers durability, security and easy on-and-off. The Vibram® outsole offers grip on uneven terrain.', 179),
(18, 'UXC72v1', 'An updated twist on a 1970\'s archive-inspired design, the New Balance UXC72V1 athletic shoe is loaded with contemporary style. Designed for all-day wear, these comfortable sneakers feature chrome-free leather and crinkle nylon uppers that contribute to their progressive, fashion-forward look.', 129),
(19, 'Air Force 1 GTX', 'If we could, we would double tap everything with the Gore-Tex emblem, no seriously, if we could re-tweet our feelings when these showed up in the photo studio, oh boy, we would have. The olive-green rain-ready Nike Air Force 1 with Gore-Tex treatment stands any weather change with no problem through its waterproof construction.', 119),
(20, ' Air Force 1 Mid \'07 QS', 'The Air Force 1 Mid \'07 is everything you know best: crisp overlays, bold details and the perfect amount of flash to let your shoe game shine. The padded, mid-height collar with classic hook-and-loop closure adds heritage b-ball comfort. Perforations on the toe help keep you cool.', 139),
(21, 'Air Huarache', 'The Nike Huarache OG is a reminder to ”hug your feet” in form of the all-around soft, stretchy, sock-like fit. The Nike Huarache OG stays original with a neoprene inner sleeve and wraparound heel cage. The upper is crafted with a mesh and leather upper for a clean and classic finish.', 159),
(22, 'Air Max 97 SE', 'The \"Air Max Running Club\" is Nike\'s fictional track team, bringing \'70s track inspiration to streetwear staples. Mixing retro fun with new flash, the Nike Air Max 97 SE includes the original\'s iconic ripple design in era-echoing materials. Athletics West-inspired branding celebrates sport. The revolutionary full-length Air unit that shook up the running world adds comfort to your journey.', 149),
(23, 'Air Max Terrascape Plus', 'Let your attitude have the edge in the Nike Air Max Terrascape Plus, the rebellious icon recrafted for the future. Offering a tuned Air experience that delivers premium stability and unbelievable cushioning, rolled into a futuristic design crafted with at least 20% recycled materials by weight. The speckles in the rubber outsole are made from Nike Grind, which is recycled waste (i.e., the scraps) from the footwear manufacturing process.', 139),
(24, 'Air Tuned Max', 'Just like the original design, the Nike Air Tuned Max brings you cutting-edge innovation and fine-tuned comfort. Born from Nike\'s clandestine and bygone Alpha Project, the sleek, track-inspired design nods to the fast-paced division that brought you the Presto and so much more. Iridescent finishes and full-length, visible Air cushioning underfoot make a seismic statement.', 119),
(25, 'Grid Azura 2000', 'Back in the late ’90s and early 2000s Saucony added their spin to the Y2K movement with a silhouette dubbed Saucony GRID Azura 2000. The lightweight retro sneaker features Saucony’s GRID technology and is constructed with a breathable mesh upper and wavy, almost animal-like synthetic overlays.', 129),
(26, 'Grid Web', 'The original Saucony Grid Web has returned. Seen for the first time in 2000, the performance sneaker with its wavy look and sport feel is the ideal sneaker to discover, comfortable and great looks, all in one. Built from lightweight mesh and with plastic web overlays, the Saucony Grid Web taps right into today’s zeitgeist.', 169),
(27, 'Grid Web Iridescent', 'The original Saucony Grid Web has returned. Seen for the first time in 2000, the performance sneaker with its wavy look and sporty feel is the ideal sneaker to discover, comfortable and great looks, all in one. Built from lightweight mesh and with flamey plastic iridescent web overlay, the Saucony Grid Web taps right into today’s zeitgeist.', 159),
(28, 'Jazz 81', 'Celebrating 40-years, the Saucony Jazz 81 pays homage to its original form and feel. The retro running sneaker has been a fan-favorite for athletes around the world, with its soft feel and timeless look it will never go out of style. Upgrading the original with minor edits, this OG black and silver rendition sports a mesh upper with suede overlays to ensure that archival spirits and future fans meet at the Saucony Jazz 81 intersection.', 129),
(29, 'Jazz 81 \"Distressed\"', 'Celebrating 40-years, the Saucony Jazz 81 pays homage to its original form and feel. The retro running sneaker has been a fan favorite for athletes around the world, with its soft feel and timeless look it will never go out of style. Upgrading the original with minor edits, this OG white/green rendition sports a lightweight upper with leather overlays to ensure that archival spirits and future fans meet at the Saucony Jazz 81 intersection.', 119),
(30, 'Shadow 6000', 'Once a high-mileage running shoe, the Saucony Shadow 6000 has been a favorite of runners back in the days, when it was first released in 1991. Now with engineered stability in the heel, extra flexibility, and cushion in the forefoot, the low-top silhouette returns for fans of retro kicks with a buttery suede upper with a tonal mesh underlay.', 139);

-- --------------------------------------------------------

--
-- Tabellstruktur `productincategory`
--

CREATE TABLE `productincategory` (
  `ProductID` int(10) NOT NULL,
  `CategoryID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `productincategory`
--

INSERT INTO `productincategory` (`ProductID`, `CategoryID`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 2),
(8, 2),
(9, 2),
(10, 2),
(11, 2),
(12, 2),
(13, 3),
(14, 3),
(15, 3),
(16, 3),
(17, 3),
(18, 3),
(19, 4),
(20, 4),
(21, 4),
(22, 4),
(23, 4),
(24, 4),
(25, 5),
(26, 5),
(27, 5),
(28, 5),
(29, 5),
(30, 5);

-- --------------------------------------------------------

--
-- Tabellstruktur `shipping`
--

CREATE TABLE `shipping` (
  `ShippingID` int(11) NOT NULL,
  `ShippingType` varchar(30) NOT NULL,
  `ShippingCost` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `shipping`
--

INSERT INTO `shipping` (`ShippingID`, `ShippingType`, `ShippingCost`) VALUES
(1, 'Helicopter', 150),
(2, 'Truck land freight', 10),
(3, 'Ferry sea freight', 5);

-- --------------------------------------------------------

--
-- Tabellstruktur `size`
--

CREATE TABLE `size` (
  `ID` int(11) NOT NULL,
  `ProductID` int(10) NOT NULL,
  `SizesInStock` int(11) NOT NULL,
  `Size` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `size`
--

INSERT INTO `size` (`ID`, `ProductID`, `SizesInStock`, `Size`) VALUES
(1, 1, 10, 39),
(2, 1, 10, 40),
(3, 1, 10, 41),
(4, 1, 10, 42),
(5, 1, 10, 43),
(6, 1, 10, 44),
(7, 1, 10, 45),
(8, 1, 10, 46),
(9, 2, 10, 39),
(10, 2, 10, 40),
(11, 2, 10, 41),
(12, 2, 10, 42),
(13, 2, 10, 43),
(14, 2, 10, 44),
(15, 2, 10, 45),
(16, 2, 10, 46),
(17, 3, 10, 39),
(18, 3, 10, 40),
(19, 3, 10, 41),
(20, 3, 10, 42),
(21, 3, 10, 43),
(22, 3, 10, 44),
(23, 3, 10, 45),
(24, 3, 10, 46),
(25, 4, 10, 39),
(26, 4, 10, 40),
(27, 4, 10, 41),
(28, 4, 10, 42),
(29, 4, 10, 43),
(30, 4, 10, 44),
(31, 4, 10, 45),
(32, 4, 10, 46),
(33, 5, 10, 39),
(34, 5, 10, 40),
(35, 5, 10, 41),
(36, 5, 10, 42),
(37, 5, 10, 43),
(38, 5, 10, 44),
(39, 5, 10, 45),
(40, 5, 10, 46),
(41, 6, 10, 39),
(42, 6, 10, 40),
(43, 6, 10, 41),
(44, 6, 10, 42),
(45, 6, 10, 43),
(46, 6, 10, 44),
(47, 6, 10, 45),
(48, 6, 10, 46),
(49, 7, 10, 39),
(50, 7, 10, 40),
(51, 7, 10, 41),
(52, 7, 10, 42),
(53, 7, 10, 43),
(54, 7, 10, 44),
(55, 7, 10, 45),
(56, 7, 10, 46),
(57, 8, 10, 39),
(58, 8, 10, 40),
(59, 8, 10, 41),
(60, 8, 10, 42),
(61, 8, 10, 43),
(62, 8, 10, 44),
(63, 8, 10, 45),
(64, 8, 10, 46),
(65, 9, 10, 39),
(66, 9, 10, 40),
(67, 9, 10, 41),
(68, 9, 10, 42),
(69, 9, 10, 43),
(70, 9, 10, 44),
(71, 9, 10, 45),
(72, 9, 10, 46),
(73, 10, 10, 39),
(74, 10, 10, 40),
(75, 10, 10, 41),
(76, 10, 10, 42),
(77, 10, 10, 43),
(78, 10, 10, 44),
(79, 10, 10, 45),
(80, 10, 10, 46),
(81, 11, 10, 39),
(82, 11, 10, 40),
(83, 11, 10, 41),
(84, 11, 10, 42),
(85, 11, 10, 43),
(86, 11, 10, 44),
(87, 11, 10, 45),
(88, 11, 10, 46),
(89, 12, 10, 39),
(90, 12, 10, 40),
(91, 12, 10, 41),
(92, 12, 10, 42),
(93, 12, 10, 43),
(94, 12, 10, 44),
(95, 12, 10, 45),
(96, 12, 10, 46),
(97, 13, 10, 39),
(98, 13, 10, 40),
(99, 13, 10, 41),
(100, 13, 10, 42),
(101, 13, 10, 43),
(102, 13, 10, 44),
(103, 13, 10, 45),
(104, 13, 10, 46),
(105, 14, 10, 39),
(106, 14, 10, 40),
(107, 14, 10, 41),
(108, 14, 10, 42),
(109, 14, 10, 43),
(110, 14, 10, 44),
(111, 14, 10, 45),
(112, 14, 10, 46),
(113, 15, 10, 39),
(114, 15, 10, 40),
(115, 15, 10, 41),
(116, 15, 10, 42),
(117, 15, 10, 43),
(118, 15, 10, 44),
(119, 15, 10, 45),
(120, 15, 10, 46),
(121, 16, 10, 39),
(122, 16, 10, 40),
(123, 16, 10, 41),
(124, 16, 10, 42),
(125, 16, 10, 43),
(126, 16, 10, 44),
(127, 16, 10, 45),
(128, 16, 10, 46),
(129, 17, 10, 39),
(130, 17, 10, 40),
(131, 17, 10, 41),
(132, 17, 10, 42),
(133, 17, 10, 43),
(134, 17, 10, 44),
(135, 17, 10, 45),
(136, 17, 10, 46),
(137, 18, 10, 39),
(138, 18, 10, 40),
(139, 18, 10, 41),
(140, 18, 10, 42),
(141, 18, 10, 43),
(142, 18, 10, 44),
(143, 18, 10, 45),
(144, 18, 10, 46),
(145, 19, 10, 39),
(146, 19, 10, 40),
(147, 19, 10, 41),
(148, 19, 10, 42),
(149, 19, 10, 43),
(150, 19, 10, 44),
(151, 19, 10, 45),
(152, 19, 10, 46),
(153, 20, 10, 39),
(154, 20, 10, 40),
(155, 20, 10, 41),
(156, 20, 10, 42),
(157, 20, 10, 43),
(158, 20, 10, 44),
(159, 20, 10, 45),
(160, 20, 10, 46),
(161, 21, 10, 39),
(162, 21, 10, 40),
(163, 21, 10, 41),
(164, 21, 10, 42),
(165, 21, 10, 43),
(166, 21, 10, 44),
(167, 21, 10, 45),
(168, 21, 10, 46),
(169, 22, 10, 39),
(170, 22, 10, 40),
(171, 22, 10, 41),
(172, 22, 10, 42),
(173, 22, 10, 43),
(174, 22, 10, 44),
(175, 22, 10, 45),
(176, 22, 10, 46),
(177, 23, 10, 39),
(178, 23, 10, 40),
(179, 23, 10, 41),
(180, 23, 10, 42),
(181, 23, 10, 43),
(182, 23, 10, 44),
(183, 23, 10, 45),
(184, 23, 10, 46),
(185, 24, 10, 39),
(186, 24, 10, 40),
(187, 24, 10, 41),
(188, 24, 10, 42),
(189, 24, 10, 43),
(190, 24, 10, 44),
(191, 24, 10, 45),
(192, 24, 10, 46),
(193, 25, 10, 39),
(194, 25, 10, 40),
(195, 25, 10, 41),
(196, 25, 10, 42),
(197, 25, 10, 43),
(198, 25, 10, 44),
(199, 25, 10, 45),
(200, 25, 10, 46),
(201, 26, 10, 39),
(202, 26, 10, 40),
(203, 26, 10, 41),
(204, 26, 10, 42),
(205, 26, 10, 43),
(206, 26, 10, 44),
(207, 26, 10, 45),
(208, 26, 10, 46),
(209, 27, 10, 39),
(210, 27, 10, 40),
(211, 27, 10, 41),
(212, 27, 10, 42),
(213, 27, 10, 43),
(214, 27, 10, 44),
(215, 27, 10, 45),
(216, 27, 10, 46),
(217, 28, 10, 39),
(218, 28, 10, 40),
(219, 28, 10, 41),
(220, 28, 10, 42),
(221, 28, 10, 43),
(222, 28, 10, 44),
(223, 28, 10, 45),
(224, 28, 10, 46),
(225, 29, 10, 39),
(226, 29, 10, 40),
(227, 29, 10, 41),
(228, 29, 10, 42),
(229, 29, 10, 43),
(230, 29, 10, 44),
(231, 29, 10, 45),
(232, 29, 10, 46),
(233, 30, 10, 39),
(234, 30, 10, 40),
(235, 30, 10, 41),
(236, 30, 10, 42),
(237, 30, 10, 43),
(238, 30, 10, 44),
(239, 30, 10, 45),
(240, 30, 10, 46);

-- --------------------------------------------------------

--
-- Tabellstruktur `subtonewsletter`
--

CREATE TABLE `subtonewsletter` (
  `ID` tinyint(4) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabellstruktur `users`
--

CREATE TABLE `users` (
  `ID` int(10) NOT NULL,
  `UserEmail` varchar(250) NOT NULL,
  `UserPassword` varchar(250) NOT NULL,
  `UserRegisterDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `UserFirstName` varchar(20) NOT NULL,
  `UserLastName` varchar(20) NOT NULL,
  `TermsConditions` tinyint(1) NOT NULL,
  `UserIsAdmin` tinyint(1) NOT NULL,
  `AdminRequest` tinyint(4) NOT NULL,
  `UserCountry` varchar(250) NOT NULL,
  `UserCity` varchar(250) NOT NULL,
  `UserStreet` varchar(250) NOT NULL,
  `UserZipCode` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `users`
--

INSERT INTO `users` (`ID`, `UserEmail`, `UserPassword`, `UserRegisterDate`, `UserFirstName`, `UserLastName`, `TermsConditions`, `UserIsAdmin`, `AdminRequest`, `UserCountry`, `UserCity`, `UserStreet`, `UserZipCode`) VALUES
(1, 'admin@admin.se', '$2y$10$fjwkJYOrF0MInkZ.KlxNxu/22AzzVE5D3a4I/4u.QGe.TUZ3j4ana', '2022-03-03 16:34:55', 'admin', 'admin', 1, 1, 0, 'SE', 'Gothenburg', 'admin', 12345);

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`ID`);

--
-- Index för tabell `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Index för tabell `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`ID`);

--
-- Index för tabell `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`ProductID`,`OrderID`,`SizesID`),
  ADD KEY `ProductID` (`ProductID`),
  ADD KEY `OrderID` (`OrderID`),
  ADD KEY `SizesID` (`SizesID`);

--
-- Index för tabell `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `userID` (`UserID`),
  ADD KEY `shippingID` (`ShippingID`);

--
-- Index för tabell `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`ID`);

--
-- Index för tabell `productincategory`
--
ALTER TABLE `productincategory`
  ADD PRIMARY KEY (`ProductID`,`CategoryID`),
  ADD KEY `productID` (`ProductID`),
  ADD KEY `categoryID` (`CategoryID`);

--
-- Index för tabell `shipping`
--
ALTER TABLE `shipping`
  ADD PRIMARY KEY (`ShippingID`);

--
-- Index för tabell `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Index för tabell `subtonewsletter`
--
ALTER TABLE `subtonewsletter`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Index för tabell `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `category`
--
ALTER TABLE `category`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT för tabell `images`
--
ALTER TABLE `images`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT för tabell `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT för tabell `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT för tabell `product`
--
ALTER TABLE `product`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT för tabell `shipping`
--
ALTER TABLE `shipping`
  MODIFY `ShippingID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT för tabell `size`
--
ALTER TABLE `size`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;

--
-- AUTO_INCREMENT för tabell `subtonewsletter`
--
ALTER TABLE `subtonewsletter`
  MODIFY `ID` tinyint(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT för tabell `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ID`);

--
-- Restriktioner för tabell `size`
--
ALTER TABLE `size`
  ADD CONSTRAINT `size_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `product` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
