package com.example.jobportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.jobportal.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact,Integer> {
    
}
