package com.example.jobportal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.jobportal.entity.UserRegister;

@Repository
public interface registerRepository extends JpaRepository<UserRegister,Integer> 
{
     Optional<UserRegister>findByUsername(String username);
    
} 
