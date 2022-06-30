package com.timecard.backend;

import com.timecard.backend.models.User;
import com.timecard.backend.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/users")
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserRepository userRepository;


    @PostMapping(path="",consumes= MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody User addNewUser(@RequestBody User requestUser) {
        userRepository.save(requestUser);
        log.info("ENROLL User " + requestUser);
        return requestUser;
    }

    @GetMapping(path="")
    public @ResponseBody Iterable<User> getUserList() {

        return userRepository.findAll();
    }

    @GetMapping(path="/admin")
    public @ResponseBody Iterable<User> getAdminUserList() {
        return userRepository.findByIsAdmin("true");
    }

    @GetMapping(path="/authorizer")
    public @ResponseBody Iterable<User> getAuthorizerUserList() {
        return userRepository.findByIsAuthorizer("true");
    }


    @DeleteMapping(path= "/{employeeCode}")
    public @ResponseBody String deleteUser(@PathVariable String employeeCode){
        User user = userRepository.findByEmployeeCode(employeeCode);
        userRepository.delete(user);
        log.info("DELETE User " + user);
        return "success";
    }


}


