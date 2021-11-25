package com.usa.repository.crud;

/**
 * Luis Mendez basado en la tutotia reto 1
 */

import com.usa.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserCrudRepository extends CrudRepository<User, Integer> {

    Optional<User> findByEmail(String email);
    Optional<User> findByEmailAndPassword(String email, String password);
}
