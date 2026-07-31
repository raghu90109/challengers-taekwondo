package com.tkd.branch.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name="branch")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Branch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,unique = true,length = 20)
    private String code;

    @Column(nullable = false)
    private String name;

    private String addressLine1;
    private String addressLine2;

    private String city;
    private String state;
    private String country;
    private String postalCode;

    private String phone;
    private String email;

    private Boolean active;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

}
