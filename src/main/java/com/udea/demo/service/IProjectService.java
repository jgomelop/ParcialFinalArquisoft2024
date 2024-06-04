package com.udea.demo.service;

import com.udea.demo.domain.models.Project;

import java.util.List;

public interface IProjectService {
    Project createProject(Project project);

    List<Project> findAllProjectsByDocument(String document);
}
