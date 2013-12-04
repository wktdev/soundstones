-- phpMyAdmin SQL Dump
-- version 3.5.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 09, 2013 at 07:12 PM
-- Server version: 5.5.29
-- PHP Version: 5.4.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `app`
--

-- --------------------------------------------------------

--
-- Table structure for table `patches`
--

CREATE TABLE `patches` (
  `patch_id` int(10) NOT NULL AUTO_INCREMENT,
  `patch_name` varchar(30) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`patch_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=605 ;

--
-- Dumping data for table `patches`
--

INSERT INTO `patches` (`patch_id`, `patch_name`, `date_created`) VALUES
(595, 'A Patch ', '2013-11-09 18:07:29'),
(604, 'test', '2013-11-09 17:58:04');

-- --------------------------------------------------------

--
-- Table structure for table `synths`
--

CREATE TABLE `synths` (
  `synth_id` int(10) NOT NULL AUTO_INCREMENT,
  `synth_name` varchar(30) NOT NULL,
  `xpos` decimal(50,0) NOT NULL,
  `ypos` decimal(50,0) NOT NULL,
  `pitch` int(50) NOT NULL,
  `pitch_octave` int(50) NOT NULL,
  `patch_id` int(10) NOT NULL,
  PRIMARY KEY (`synth_id`),
  KEY `patch_id` (`patch_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=626 ;

--
-- Dumping data for table `synths`
--

INSERT INTO `synths` (`synth_id`, `synth_name`, `xpos`, `ypos`, `pitch`, `pitch_octave`, `patch_id`) VALUES
(601, 'synth1', 28, 140, 700, -7, 595),
(602, 'synth2', 158, 12, 1000, -11, 595),
(603, 'synth3', 162, 136, 500, -11, 595),
(604, 'synth2', 158, 12, 1200, -11, 595),
(622, 'synth1', 28, 140, 700, -7, 604),
(623, 'synth2', 158, 12, 1000, -11, 604),
(624, 'synth3', 162, 136, 500, -11, 604),
(625, 'synth2', 158, 12, 1200, -11, 604);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `synths`
--
ALTER TABLE `synths`
  ADD CONSTRAINT `synths_ibfk_2` FOREIGN KEY (`patch_id`) REFERENCES `patches` (`patch_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
