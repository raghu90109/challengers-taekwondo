package com.tkd.branch.dto;

public record BranchResponse(
        Long id,
        String code,
        String name,
        String city,
        String state,
        String phone,
        String email,
        Boolean active
) {
}
