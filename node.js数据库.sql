/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.27 : Database - bbb
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bbb` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `bbb`;

/*Table structure for table `guan_li_biao` */

DROP TABLE IF EXISTS `guan_li_biao`;

CREATE TABLE `guan_li_biao` (
  `xu_hao` int(100) NOT NULL AUTO_INCREMENT,
  `zhang_hao` varchar(100) DEFAULT NULL,
  `mi_ma` varchar(100) DEFAULT NULL,
  `jue_se` varchar(100) DEFAULT NULL,
  `ming_cheng` varchar(100) DEFAULT NULL,
  `dian_hua` varchar(100) DEFAULT NULL,
  `zhuang_tai` varchar(100) DEFAULT NULL,
  KEY `xu_hao` (`xu_hao`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `guan_li_biao` */

insert  into `guan_li_biao`(`xu_hao`,`zhang_hao`,`mi_ma`,`jue_se`,`ming_cheng`,`dian_hua`,`zhuang_tai`) values (2,'1784801529','13112108463','超级管理员','吊炸天管理员QAAA','13112108463','可见'),(3,'8080','13112108463','系统管理员','富贵','15464898753','隐藏');

/*Table structure for table `jue_se_biao` */

DROP TABLE IF EXISTS `jue_se_biao`;

CREATE TABLE `jue_se_biao` (
  `xu_hao` int(100) NOT NULL AUTO_INCREMENT,
  `ming_cheng` varchar(100) DEFAULT NULL,
  `shu_liang` varchar(100) DEFAULT NULL,
  `zhuang_tai` varchar(100) DEFAULT NULL,
  KEY `xu_hao` (`xu_hao`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `jue_se_biao` */

insert  into `jue_se_biao`(`xu_hao`,`ming_cheng`,`shu_liang`,`zhuang_tai`) values (1,'超级管理员','1','可见'),(3,'424524534','1','可见');

/*Table structure for table `xin_lei_xing` */

DROP TABLE IF EXISTS `xin_lei_xing`;

CREATE TABLE `xin_lei_xing` (
  `xu_hao` int(100) NOT NULL AUTO_INCREMENT,
  `ming_cheng` varchar(100) DEFAULT NULL,
  `shu_liang` varchar(100) DEFAULT NULL,
  `zhuang_tai` varchar(100) DEFAULT NULL,
  KEY `xu_hao` (`xu_hao`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `xin_lei_xing` */

insert  into `xin_lei_xing`(`xu_hao`,`ming_cheng`,`shu_liang`,`zhuang_tai`) values (4,'奥特曼被煮之谜','1','可见');

/*Table structure for table `xin_lie_biao` */

DROP TABLE IF EXISTS `xin_lie_biao`;

CREATE TABLE `xin_lie_biao` (
  `ID` int(100) NOT NULL AUTO_INCREMENT,
  `biao_ti` varchar(100) DEFAULT NULL,
  `lei_xing` varchar(100) DEFAULT NULL,
  `feng_mian` varchar(100) DEFAULT NULL,
  `dian_ji_shu` varchar(100) DEFAULT NULL,
  `pai_xu_zhi` varchar(100) DEFAULT NULL,
  `zhi_ding` varchar(100) DEFAULT NULL,
  `zhuang_tai` varchar(100) DEFAULT NULL,
  `fa_bu_shi_jian` varchar(100) DEFAULT NULL,
  KEY `ID` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `xin_lie_biao` */

insert  into `xin_lie_biao`(`ID`,`biao_ti`,`lei_xing`,`feng_mian`,`dian_ji_shu`,`pai_xu_zhi`,`zhi_ding`,`zhuang_tai`,`fa_bu_shi_jian`) values (4,'三生三世我是爹','系统文章',NULL,NULL,NULL,'可见','隐藏','2021-01-17');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
