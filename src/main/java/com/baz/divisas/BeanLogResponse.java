package com.baz.divisas;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BeanLogResponse {
  private String Status;
  private String Response;
  private String Version;

  public boolean isOk() {
    return "ok".equalsIgnoreCase(this.Status);
  }
}
