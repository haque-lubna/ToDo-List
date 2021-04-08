package com.dsi.Backend.repository;

import com.dsi.Backend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findAllByOrderByIdAsc();
    List<Task> findByReminderTrueAndTimeDateIsBefore(Date currentDateTime);
}
