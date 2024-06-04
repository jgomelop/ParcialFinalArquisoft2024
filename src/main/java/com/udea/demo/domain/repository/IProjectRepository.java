package com.udea.demo.domain.repository;

import com.udea.demo.domain.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProjectRepository extends JpaRepository<Project, Long> {
}
