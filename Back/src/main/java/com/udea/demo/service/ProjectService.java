package com.udea.demo.service;

import org.hibernate.metamodel.internal.EmbeddableInstantiatorPojoIndirecting;
import org.springframework.stereotype.Service;
import com.udea.demo.domain.models.Project;
import com.udea.demo.domain.models.Employee;
import com.udea.demo.domain.repository.IProjectRepository;
import com.udea.demo.domain.repository.IEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@Service
public class ProjectService implements IProjectService {

    @Autowired
    private IProjectRepository projectRepository;

    @Override
    public Project createProject(Project project) { return projectRepository.save(project); }

    @Override
    public List<Project> findAllProjectsByDocument(String document) {
        return projectRepository.findAllByEmployeesDocument(document);
    }


}

