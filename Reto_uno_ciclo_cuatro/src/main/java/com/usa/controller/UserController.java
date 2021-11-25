package com.usa.controller;

/**
 * Luis Mendez basado en la tutotia reto 1
 */

import com.usa.model.User;
import com.usa.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controlador para llamados Api
 */
@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class UserController {

    /**
     * Auto incrementado
     */
    @Autowired
    private UserService userService;

    /**
     * Metodo que lista los usuarios
     * @return
     */
    @GetMapping("/all")
    public List<User> getAll(){
        return userService.getAll();
    }

    /**
     * Metodo para ingresar un nuevo usuario
     * @param user
     * @return
     */
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public User registro(@RequestBody User user){
        return userService.registro(user);
    }

    /**
     * Metodo para validar las llaves email / password
     * @param email
     * @param password
     * @return
     */
    @GetMapping("/{email}/{password}")
    public User autenticarUsuario(@PathVariable("email") String email, @PathVariable("password") String password){
        return userService.autenticarUsuario(email, password);
    }

    /**
     * Metodo para Evaluar la existencia del email
     * @param email
     * @return
     */
    @GetMapping("/{email}")
    public boolean existeEmail(@PathVariable("email") String email){
        return userService.existeEmail(email);
    }
}
