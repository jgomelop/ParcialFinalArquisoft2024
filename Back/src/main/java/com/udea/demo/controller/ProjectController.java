package com.udea.demo.controller;

import com.udea.demo.domain.models.Employee;
import com.udea.demo.domain.models.Project;
import com.udea.demo.service.IProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.Link;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Project", description = "Project management")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private IProjectService projectService;

    @PostMapping
    public ResponseEntity<Project> createProject(@RequestBody Project project) {
        Project savedProject = projectService.createProject(project);
//        EntityModel<Project> resource = EntityModel.of(savedProject);
//        resource.add(Link.of("/api/v1/projects").withRel("projects"));
//        return ResponseEntity.ok(resource);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedProject);
    }

    @GetMapping(path = "/api/projects/{document}", produces = "application/vnd.udea.app-v1+json")
    @Operation(summary = "Get projects by employee document")
    public ResponseEntity<List<Project>> getAllProjectsByEmployeeDocument(@PathVariable String document) {
        List<Project> projects = projectService.findAllProjectsByDocument(document);
        return ResponseEntity.status(HttpStatus.CREATED).body(projects);
    }
}
