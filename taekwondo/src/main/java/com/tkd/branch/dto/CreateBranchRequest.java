package com.tkd.branch.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateBranchRequest(
        @NotBlank
        @Size(max=20)
        String code,
        @NotBlank
        @Size
        String name,
        String addressLine1,
        String addressLine2,
        String city,
        String state,
        String country,
        String postalCode,
        String phone,
        @Email
        String email
) {
}
