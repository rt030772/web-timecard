package com.vision.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

	@RequestMapping(value="/index", method=RequestMethod.GET)
	public String index() {
		return "OK!";
	}

}
