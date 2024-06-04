package com.udea.demo.domain.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Employee {

    @Id
    @NotNull
    private String document;

    @NotNull
    private String name;

    @NotNull
    private String lastName;

    @ManyToMany(mappedBy = "employees")
    List<Project> projects = new ArrayList<>();
}
