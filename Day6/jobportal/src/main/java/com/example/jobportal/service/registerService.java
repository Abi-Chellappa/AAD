package com.example.jobportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jobportal.entity.UserRegister;
import com.example.jobportal.repository.registerRepository;
@Service
public class registerService {
    @Autowired
    private registerRepository registerRepo;
    
    public void saveRegister(UserRegister reg)
    {
        registerRepo.save(reg);
    }
    public List<UserRegister> getRegister()
    {
        return registerRepo.findAll();
    }
    public void updateRegister(UserRegister reg)
    {
         registerRepo.save(reg);
    }
    public void deleteRegister(int id)
    {
        registerRepo.deleteById(id);
    }
}
