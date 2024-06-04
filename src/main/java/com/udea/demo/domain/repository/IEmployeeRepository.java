package com.udea.demo.domain.repository;

import com.udea.demo.domain.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IEmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findAllByProjectsId(Long id);
    Optional<Employee> findByDocument(String document);
}
