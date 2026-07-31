package com.tkd.branch.controller;

import com.tkd.branch.dto.BranchResponse;
import com.tkd.branch.dto.CreateBranchRequest;
import com.tkd.branch.dto.UpdateBranchRequest;
import com.tkd.branch.service.BranchService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/branches")
@RequiredArgsConstructor
public class BranchController {

    private final BranchService branchService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public BranchResponse create(@Valid @RequestBody CreateBranchRequest request){
        return branchService.create(request);
    }
    @GetMapping("/{id}")
    public BranchResponse get(@PathVariable Long id){
        return branchService.get(id);
    }
    @PutMapping(value = "/{id}",consumes = MediaType.APPLICATION_JSON_VALUE)
    public BranchResponse update(@PathVariable Long id, @Valid @RequestBody UpdateBranchRequest request){
        return branchService.update(id,request);
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        branchService.delete(id);
    }
}
