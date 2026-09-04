package com.comunidad.gestion.util;

import com.comunidad.gestion.entity.enums.TipoAccionAuditoria;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Auditable {
    TipoAccionAuditoria accion();
    String modulo();
    String tabla() default "";
    String descripcion() default "";
}
