-- mi primer script sql
-- Mon Oct 31 21:18:54 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_codigo_g17
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_codigo_g17
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_codigo_g17` DEFAULT CHARACTER SET utf8 ;
USE `db_codigo_g17` ;

-- -----------------------------------------------------
-- Table `db_codigo_g17`.`tbl_alumno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_codigo_g17`.`tbl_alumno` (
  `alumno_id` INT NOT NULL AUTO_INCREMENT,
  `alumno_nombre` VARCHAR(255) NOT NULL,
  `alumno_email` VARCHAR(100) NULL,
  PRIMARY KEY (`alumno_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_codigo_g17`.`tbl_nivel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_codigo_g17`.`tbl_nivel` (
  `nivel_id` INT NOT NULL AUTO_INCREMENT,
  `nivel_nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`nivel_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_codigo_g17`.`tbl_modulo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_codigo_g17`.`tbl_modulo` (
  `modulo_id` INT NOT NULL AUTO_INCREMENT,
  `modulo_nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`modulo_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_codigo_g17`.`tbl_curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_codigo_g17`.`tbl_curso` (
  `curso_id` INT NOT NULL AUTO_INCREMENT,
  `curso_nombre` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`curso_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_codigo_g17`.`tbl_matricula`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_codigo_g17`.`tbl_matricula` (
  `matricula_id` INT NOT NULL AUTO_INCREMENT,
  `alumno_id` INT NOT NULL,
  `nivel_id` INT NOT NULL,
  `modulo_id` INT NOT NULL,
  PRIMARY KEY (`matricula_id`),
  INDEX `fk_tbl_matricula_tbl_alumno_idx` (`alumno_id` ASC) VISIBLE,
  INDEX `fk_tbl_matricula_tbl_nivel1_idx` (`nivel_id` ASC) VISIBLE,
  INDEX `fk_tbl_matricula_tbl_modulo1_idx` (`modulo_id` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_matricula_tbl_alumno`
    FOREIGN KEY (`alumno_id`)
    REFERENCES `db_codigo_g17`.`tbl_alumno` (`alumno_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_matricula_tbl_nivel1`
    FOREIGN KEY (`nivel_id`)
    REFERENCES `db_codigo_g17`.`tbl_nivel` (`nivel_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_matricula_tbl_modulo1`
    FOREIGN KEY (`modulo_id`)
    REFERENCES `db_codigo_g17`.`tbl_modulo` (`modulo_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_codigo_g17`.`tbl_matricula_curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_codigo_g17`.`tbl_matricula_curso` (
  `matricula_curso_id` INT NOT NULL AUTO_INCREMENT,
  `matricula_curso_nota` DOUBLE NULL DEFAULT 0,
  `matricula_id` INT NOT NULL,
  `curso_id` INT NOT NULL,
  PRIMARY KEY (`matricula_curso_id`),
  INDEX `fk_tbl_matricula_curso_tbl_matricula1_idx` (`matricula_id` ASC) VISIBLE,
  INDEX `fk_tbl_matricula_curso_tbl_curso1_idx` (`curso_id` ASC) VISIBLE,
  CONSTRAINT `fk_tbl_matricula_curso_tbl_matricula1`
    FOREIGN KEY (`matricula_id`)
    REFERENCES `db_codigo_g17`.`tbl_matricula` (`matricula_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tbl_matricula_curso_tbl_curso1`
    FOREIGN KEY (`curso_id`)
    REFERENCES `db_codigo_g17`.`tbl_curso` (`curso_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
