package com.tkd.branch.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UpdateBranchRequest(
        @NotBlank
        String name,
        String addressLine1,
        String addressLine2,
        String city,
        String state,
        String country,
        String postalCode,
        String phone,
        @Email
        String email,
        Boolean active
) {
}
