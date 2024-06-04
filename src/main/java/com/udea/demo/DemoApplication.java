package com.udea.demo;

import com.udea.demo.domain.models.Project;
import com.udea.demo.domain.repository.IProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


	@Bean
	CommandLineRunner runner(IProjectRepository projectRepository) {
		return args -> {

			// Proyecto de prueba
			Project project = new Project();
			project.setName("Project 1");
			project.setDescription("Project Description");
			projectRepository.save(project);
		};
	}
}
