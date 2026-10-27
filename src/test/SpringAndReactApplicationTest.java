package com.baz.divisas;

import org.junit.jupiter.api.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.mockito.MockedStatic;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

public class SpringAndReactApplicationTest {

    @Test
    public void testConfigure() {
        SpringAndReactApplication application = new SpringAndReactApplication();
        SpringApplicationBuilder builder = mock(SpringApplicationBuilder.class);
        when(builder.sources(SpringAndReactApplication.class)).thenReturn(builder);
        
        SpringApplicationBuilder result = application.configure(builder);
        
        assertNotNull(result);
    }

    @Test
    public void testMain() {
        try (MockedStatic<SpringApplication> mockedSpringApplication = mockStatic(SpringApplication.class)) {
            String[] args = new String[]{};
            SpringAndReactApplication.main(args);
            mockedSpringApplication.verify(() -> SpringApplication.run(SpringAndReactApplication.class, args));
        }
    }
}
