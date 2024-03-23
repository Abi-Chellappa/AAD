package com.example.jobportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;



import com.example.jobportal.entity.UserRegister;
import com.example.jobportal.service.registerService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController

public class registerController 
{
    @Autowired
    private registerService regservice;

    @GetMapping("/getregister")
    public List<UserRegister> getRegisterDetails()
    {
         return regservice.getRegister();
    }
    
    @PostMapping("/registerdetails")
    public String register(@RequestBody UserRegister reg)
    {
        regservice.saveRegister(reg);
        return("Successfully Saved");
    } 
       
    @PutMapping("/updateregister")
    public String updateRegisterDetails(@RequestBody UserRegister reg,@RequestParam int id)
    {
         reg.setId(id);
         regservice.updateRegister(reg);
         return("Sucessfully Updated");
    }

    @DeleteMapping("/deleteregister")
    public String deleteRegisterDetails(@RequestParam int id)
    {
        regservice.deleteRegister(id);
        return("Successfully deleted");
    }
}
