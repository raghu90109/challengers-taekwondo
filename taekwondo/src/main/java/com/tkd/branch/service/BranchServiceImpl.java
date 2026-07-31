package com.tkd.branch.service;

import com.sun.jdi.request.DuplicateRequestException;
import com.tkd.branch.dto.BranchResponse;
import com.tkd.branch.dto.CreateBranchRequest;
import com.tkd.branch.dto.UpdateBranchRequest;
import com.tkd.branch.entity.Branch;
import com.tkd.branch.exception.BrachNotFoundException;
import com.tkd.branch.mapper.BranchMapper;
import com.tkd.branch.repository.BranchRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class BranchServiceImpl implements BranchService{

    private final BranchRepository branchRepository;
    private final BranchMapper branchMapper;

    @Override
    public BranchResponse create(CreateBranchRequest request) {
        validateBranchCode(request.code());
        Branch branch=branchMapper.toEntity(request);
        branch.setActive(true);
        branch.setCreatedAt(LocalDateTime.now());
        branch.setUpdatedAt(LocalDateTime.now());
        Branch saveBranch=branchRepository.save(branch);
        return branchMapper.toResponse(saveBranch);
    }

    private void validateBranchCode(String code) {
        if(branchRepository.existsByCode(code)){
            throw new DuplicateRequestException("branch code already exists");
        }
    }

    @Override
    public BranchResponse update(Long id, UpdateBranchRequest request) {
        Branch branch=getBranch(id);
        updateBranch(branch,request);
        Branch updated=branchRepository.save(branch);
        return branchMapper.toResponse(updated);
    }

    private void updateBranch(Branch branch, UpdateBranchRequest request) {
        branch.setName(request.name());
        branch.setAddressLine1(request.addressLine1());
        branch.setAddressLine2(request.addressLine2());
        branch.setCity(request.city());
        branch.setState(request.state());
        branch.setCountry(request.country());
        branch.setPostalCode(request.postalCode());
        branch.setPhone(request.phone());
        branch.setEmail(request.email());
        branch.setActive(request.active());
    }

    private Branch getBranch(Long id) {
        return branchRepository.findById(id)
                .orElseThrow(() -> new BrachNotFoundException("Branch not found: "+id));
    }

    @Override
    @Transactional(readOnly=true)
    public BranchResponse get(Long id) {
        Branch branch=getBranch(id);
        return branchMapper.toResponse(branch);
    }

    @Override
    @Transactional(readOnly = true)
    public List<BranchResponse> getAll() {
        return branchRepository.findByActiveTrue()
                .stream().map(branchMapper::toResponse).toList();
    }

    @Override
    public void delete(Long id) {
    Branch branch=getBranch(id);
    branch.setActive(false);
    branchRepository.save(branch);
    }
}
