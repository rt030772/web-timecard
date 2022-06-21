package com.timecard.backend;

import com.timecard.backend.models.User;
import com.timecard.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @PostMapping(path="",consumes= MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody User addNewUser (@RequestBody User user) {
        userRepository.save(user);
        return user;
    }

    @GetMapping(path="")
    public @ResponseBody Iterable<User> getUserList() {

        return userRepository.findAll();
    }


}


