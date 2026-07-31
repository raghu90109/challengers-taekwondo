package com.tkd.branch.dto;

import java.time.LocalDateTime;

public record ApiError(
        LocalDateTime timeStamp,
        int status,
        String message
) {
}
