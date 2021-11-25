package com.usa.model;

/**
 * Luis Mendez basado en la tutotia reto 1
 */

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

/**
 * 
 * @Las líneas 19 a 22 son obligatorias el buen funcionamiento del código.
 */
@Entity
@Data
@RequiredArgsConstructor
@NoArgsConstructor
@Table(name = "user", indexes = @Index(name = "indx_email", columnList = "user_email", unique = true))
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NonNull
    @Column(name = "user_email", nullable = false, length = 50)
    private String email;

    @NonNull
    @Column(name = "user_password", nullable = false, length = 50)
    private String password;

    @NonNull
    @Column(name = "user_name", nullable = false, length = 50)
    private String name;
}
