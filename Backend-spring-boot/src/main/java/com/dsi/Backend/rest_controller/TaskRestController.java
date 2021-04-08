package com.dsi.Backend.rest_controller;

import com.dsi.Backend.model.Task;
import com.dsi.Backend.repository.TaskRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
public class TaskRestController {
    private final TaskRepository taskRepository;

    public TaskRestController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping
    public List<Task> list(){
        return taskRepository.findAllByOrderByIdAsc();
    }

    @GetMapping("/{id}")
    public Optional<Task> details(@PathVariable Long id){
        return taskRepository.findById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id){
        Task task = taskRepository.findById(id).orElse(null);
        if(task != null){
            taskRepository.delete(task);
        }
    }

    @PostMapping("/new")
    public Task newTask(@RequestBody Task task){
        return taskRepository.save(task);
    }

    @PutMapping("/edit/{id}")
    public Task editTask(@RequestBody Task task){
        return taskRepository.save(task);
    }
}
