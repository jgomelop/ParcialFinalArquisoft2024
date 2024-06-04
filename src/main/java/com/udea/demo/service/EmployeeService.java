package com.udea.demo.service;

import com.udea.demo.domain.models.Employee;
import com.udea.demo.domain.models.Project;
import com.udea.demo.domain.repository.IEmployeeRepository;
import com.udea.demo.domain.repository.IProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService implements IEmployeeService {
    @Autowired
    private IEmployeeRepository employeeRepository;

    @Autowired
    private IProjectRepository projectRepository;

    @Override
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee assignProjectToEmployee(Long employeeId, Long projectId) {
        Optional<Employee> employeeOpt = employeeRepository.findById(employeeId);
        Optional<Project> projectOpt = projectRepository.findById(projectId);

        if (employeeOpt.isPresent() && projectOpt.isPresent()) {
            Employee employee = employeeOpt.get();
            Project project = projectOpt.get();

            employee.getProjects().add(project);
            project.getEmployees().add(employee);

            employeeRepository.save(employee);
            projectRepository.save(project);

            return employee;
        } else {
            throw new RuntimeException("Employee or Project not found");
        }
    }
}
