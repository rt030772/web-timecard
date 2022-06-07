package com.timecard.backend;

import com.timecard.backend.models.User;
import com.timecard.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @PostMapping(path="")
    public @ResponseBody User addNewUser (@RequestParam String employeeCode, @RequestParam String name, @RequestParam String email,
                                            @RequestParam String password, @RequestParam int departmentCode,
                                            @RequestParam boolean isAdmin, @RequestParam boolean isApprover) {
        User user = new User();
        user.setEmployeeCode(employeeCode);
        user.setName(name);
        user.setEmail(email);
        user.setPassword(password);
        user.setDepartmentCode(departmentCode);
        user.setIsAdmin(isAdmin);
        user.setIsApprover(isApprover);
        userRepository.save(user);
        return user;
    }

    @GetMapping(path="")
    public @ResponseBody Iterable<User> getUserList() {
      return userRepository.findAll();
    }


}


