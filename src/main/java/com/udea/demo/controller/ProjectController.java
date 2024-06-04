package com.udea.demo.controller;

import com.udea.demo.domain.models.Project;
import com.udea.demo.service.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/projects")
public class ProjectController {

    @Autowired
    private IProjectService projectService;

    @PostMapping
    public ResponseEntity<EntityModel<Project>> createProject(@RequestBody Project project) {
        Project savedProject = projectService.createProject(project);
        EntityModel<Project> resource = EntityModel.of(savedProject);
        resource.add(Link.of("/api/v1/projects").withRel("projects"));
        return ResponseEntity.ok(resource);
    }
}
