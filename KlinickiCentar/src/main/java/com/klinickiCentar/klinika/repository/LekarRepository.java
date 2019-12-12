package com.klinickiCentar.klinika.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.klinickiCentar.klinika.models.Lekar;

public interface LekarRepository extends JpaRepository<Lekar, Long> {
}

