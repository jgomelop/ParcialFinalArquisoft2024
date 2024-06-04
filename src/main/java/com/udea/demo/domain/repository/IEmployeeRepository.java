package com.udea.demo.domain.repository;

import com.udea.demo.domain.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEmployeeRepository extends JpaRepository<Employee, Long> {
}
