package com.example.jobportal.dtorequest;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class registerDtoRequest {
    private String username;
    private String email;
    private String password;
    private String confirmpassword;
   
}
