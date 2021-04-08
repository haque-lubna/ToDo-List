package com.dsi.Backend.service;

import com.dsi.Backend.model.Task;
import com.dsi.Backend.repository.TaskRepository;
import com.dsi.Backend.twilio.SmsSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;
    private final SmsSender smsSender;

    public TaskService(TaskRepository taskRepository, SmsSender smsSender) {
        this.taskRepository = taskRepository;
        this.smsSender = smsSender;
    }

//    @Scheduled(fixedRate = 5000L)
//    public void ifReminderOn(){
//        List<Task> taskList =
//                taskRepository.findByReminderTrueAndTimeDateIsBefore(new Date());
//        for(Task task : taskList){
//            task.setReminder(false);
//            String message = "You have listed a task with title: " + task.getTitle() + '\n' +
//                    "Time: " + task.getTimeDate();
////            TODO: comment out after finishing
////            smsSender.send(message);
//            taskRepository.save(task);
//        }
//    }
}
