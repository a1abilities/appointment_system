-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2020 at 09:12 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appointment_ms`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointed_client`
--

CREATE TABLE `appointed_client` (
  `id` int(11) NOT NULL,
  `appointment_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `reference` varchar(100) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `appointment_record`
--

CREATE TABLE `appointment_record` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `meeting_time` int(11) DEFAULT NULL COMMENT 'in minutes',
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `appointment_timeslot`
--

CREATE TABLE `appointment_timeslot` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `meeting_time` int(4) DEFAULT NULL COMMENT 'in Minutes',
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL COMMENT '1: available, 2: leave, 3: deleted',
  `is_active` tinyint(4) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `franchise`
--

CREATE TABLE `franchise` (
  `id` int(11) NOT NULL,
  `franchise_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `franchise`
--

INSERT INTO `franchise` (`id`, `franchise_name`, `created_at`) VALUES
(1, 'Australia ', '2020-01-22 06:12:03'),
(2, 'India', '2020-01-22 06:12:03'),
(3, 'New Zealand', '2020-01-22 06:12:03'),
(4, 'Brazil', '2020-01-22 06:12:03');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`, `is_active`, `created_by`, `created_at`) VALUES
(1, 'Super Admin', 0, 1, '2019-06-24 06:48:50'),
(2, 'Admin', 0, 1, '2019-06-24 06:48:50'),
(3, 'CSR', 1, 1, '2019-06-24 06:48:50'),
(4, 'Finance', 1, 1, '2019-06-24 06:48:50'),
(5, 'Delivery', 1, 1, '2019-06-24 06:48:50'),
(6, 'HR', 1, 1, '2019-06-24 06:48:50'),
(7, 'S&M', 1, 1, '2019-11-04 05:49:11');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `franchise_id` int(11) DEFAULT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  `password` blob,
  `name` varchar(50) DEFAULT NULL,
  `contact` varchar(15) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `role_id` varchar(20) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `franchise_id`, `user_id`, `password`, `name`, `contact`, `email`, `role_id`, `is_active`, `status`, `created_at`) VALUES
(1, 1, NULL, NULL, 'Ramandeep Singh', '15479852365', 'ramandeep@gmail.com', '3,4,5,6,7', 1, 1, '2020-01-22 06:17:29'),
(2, 1, NULL, NULL, 'Aishwarya Singh', '25478563214', 'aish@gamil.com', '3,4', 1, 1, '2020-01-22 06:17:29'),
(3, 2, NULL, NULL, 'Shahrukh', '82565451225', 'sktanwar@gmail.com', '7', 1, 1, '2020-01-22 06:17:29'),
(4, 2, NULL, NULL, 'Ashutosh Vyas', '84545145425', 'ashvyas@gmail.com', '3', 1, 1, '2020-01-22 06:17:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointed_client`
--
ALTER TABLE `appointed_client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointment_record`
--
ALTER TABLE `appointment_record`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointment_timeslot`
--
ALTER TABLE `appointment_timeslot`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `franchise`
--
ALTER TABLE `franchise`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointed_client`
--
ALTER TABLE `appointed_client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointment_record`
--
ALTER TABLE `appointment_record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointment_timeslot`
--
ALTER TABLE `appointment_timeslot`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `franchise`
--
ALTER TABLE `franchise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
