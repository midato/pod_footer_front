package com.baz.divisas;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import org.junit.jupiter.api.Test;

public class BeanLogResponseTest {

    @Test
    public void testBeanLogResponse() {
        BeanLogResponse response = new BeanLogResponse();
        response.setStatus("ok");
        response.setResponse("success");
        response.setVersion("1.0.1");

        assertEquals("ok", response.getStatus());
        assertEquals("success", response.getResponse());
        assertEquals("1.0.1", response.getVersion());
        assertEquals(true, response.isOk());
        assertNotNull(response.toString());
    }

    @Test
    public void testEqualsAndHashCode() {
        BeanLogResponse response1 = new BeanLogResponse();
        response1.setStatus("ok");
        response1.setResponse("success");
        response1.setVersion("1.0.1");

        BeanLogResponse response2 = new BeanLogResponse();
        response2.setStatus("ok");
        response2.setResponse("success");
        response2.setVersion("1.0.1");

        BeanLogResponse response3 = new BeanLogResponse();
        response3.setStatus("error");

        assertEquals(response1, response2);
        assertEquals(response1.hashCode(), response2.hashCode());
        assertNotEquals(response1, response3);
        assertNotEquals(response1, null);
        assertNotEquals(response1, new Object());
    }
}
