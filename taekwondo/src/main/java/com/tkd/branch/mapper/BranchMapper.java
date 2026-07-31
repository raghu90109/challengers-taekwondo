package com.tkd.branch.mapper;

import com.tkd.branch.dto.BranchResponse;
import com.tkd.branch.dto.CreateBranchRequest;
import com.tkd.branch.entity.Branch;
import org.mapstruct.Mapper;

@Mapper(componentModel="spring")
public interface BranchMapper {
    Branch toEntity(CreateBranchRequest request);
    BranchResponse toResponse(Branch branch);
}
