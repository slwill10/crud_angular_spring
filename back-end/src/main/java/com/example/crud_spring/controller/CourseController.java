package com.example.crud_spring.controller;

import java.util.List;
import java.util.jar.Attributes.Name;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crud_spring.model.Course;
import com.example.crud_spring.repository.CourseRepository;


@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }
    
    @GetMapping
    public List<Course> lista(){
        return courseRepository.findAll();
    }

}
