package com.baz.divisas;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.info.BuildProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@ExtendWith(MockitoExtension.class)
public class StatusControllerTest {

    @Mock
    private BuildProperties buildProperties;

    @InjectMocks
    private StatusController statusController;

    @Test
    public void testValidaEstatus() {
        when(buildProperties.getVersion()).thenReturn("1.0.1");
        
        ResponseEntity<BeanLogResponse> response = statusController.validaEstatus();
        
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("ok", response.getBody().getStatus());
        assertEquals("PORTAL DIVISAS", response.getBody().getResponse());
        assertEquals("1.0.1", response.getBody().getVersion());
    }
}
