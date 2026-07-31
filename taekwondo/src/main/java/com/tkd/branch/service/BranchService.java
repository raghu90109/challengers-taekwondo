package com.tkd.branch.service;

import com.tkd.branch.dto.BranchResponse;
import com.tkd.branch.dto.CreateBranchRequest;
import com.tkd.branch.dto.UpdateBranchRequest;

import java.util.List;

public interface BranchService {
    BranchResponse create(CreateBranchRequest request);
    BranchResponse update(Long id, UpdateBranchRequest request);
    BranchResponse get(Long id);
    List<BranchResponse> getAll();
    void delete(Long id);
}
