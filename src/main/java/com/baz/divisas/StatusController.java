package com.baz.divisas;

import org.springframework.boot.info.BuildProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
public class StatusController {

  private final BuildProperties buildProperties;
  /**
   * Devuelve valida estatus
   *
   * @return responseEntity con información de respuesta del endpoint fuente
   */
  @GetMapping(path = "/validaEstatus", produces = "application/json")
  public ResponseEntity<BeanLogResponse> validaEstatus() {
    String version = buildProperties.getVersion();
    
    BeanLogResponse logResp = new BeanLogResponse();

    logResp.setStatus("ok");
    logResp.setResponse("PORTAL DIVISAS");
    logResp.setVersion(version);
    return new ResponseEntity<>(logResp, HttpStatus.OK);
  }
}
