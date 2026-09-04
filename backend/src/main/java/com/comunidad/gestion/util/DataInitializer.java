package com.comunidad.gestion.util;

import com.comunidad.gestion.entity.*;
import com.comunidad.gestion.entity.enums.*;
import com.comunidad.gestion.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;

@Slf4j
@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final RolRepository rolRepository;
    private final UsuarioRepository usuarioRepository;
    private final SectorRepository sectorRepository;
    private final ComuneroRepository comuneroRepository;
    private final AsambleaRepository asambleaRepository;
    private final AsistenciaRepository asistenciaRepository;
    private final VotacionRepository votacionRepository;
    private final VotoRepository votoRepository;
    private final ConfigMultaRepository configMultaRepository;
    private final MultaRepository multaRepository;
    private final PagoMultaRepository pagoMultaRepository;
    private final ActaRepository actaRepository;
    private final AuditoriaRepository auditoriaRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void run(String... args) {
        if (rolRepository.count() > 0) {
            log.info("Los datos iniciales ya existen. Omitiendo DataInitializer.");
            return;
        }

        log.info(">>> Iniciando carga de datos de prueba del Sistema de Gestión Comunal...");

        // 1. Roles
        Rol rolAdmin = rolRepository.save(Rol.builder().nombre(RolEnum.ROLE_ADMINISTRADOR).descripcion("Administrador general del sistema").build());
        Rol rolPresi = rolRepository.save(Rol.builder().nombre(RolEnum.ROLE_PRESIDENTE).descripcion("Presidente de la Comunidad Campesina").build());
        Rol rolSecre = rolRepository.save(Rol.builder().nombre(RolEnum.ROLE_SECRETARIO).descripcion("Secretario de Actas y Padrón").build());
        Rol rolTeso = rolRepository.save(Rol.builder().nombre(RolEnum.ROLE_TESORERO).descripcion("Tesorero Comunal").build());
        Rol rolComunero = rolRepository.save(Rol.builder().nombre(RolEnum.ROLE_COMUNERO).descripcion("Comunero calificado").build());

        // 2. Usuarios del Sistema
        Usuario userAdmin = usuarioRepository.save(Usuario.builder()
                .username("admin")
                .password(passwordEncoder.encode("admin123"))
                .email("admin@comunidad.org")
                .nombres("Carlos")
                .apellidos("Mendoza Vilca")
                .activo(true)
                .rol(rolAdmin)
                .build());

        Usuario userPresi = usuarioRepository.save(Usuario.builder()
                .username("presidente")
                .password(passwordEncoder.encode("presi123"))
                .email("presidente@comunidad.org")
                .nombres("Fermín")
                .apellidos("Huamán Quispe")
                .activo(true)
                .rol(rolPresi)
                .build());

        Usuario userSecre = usuarioRepository.save(Usuario.builder()
                .username("secretario")
                .password(passwordEncoder.encode("secre123"))
                .email("secretario@comunidad.org")
                .nombres("Lucía")
                .apellidos("Mamani Condori")
                .activo(true)
                .rol(rolSecre)
                .build());

        Usuario userTeso = usuarioRepository.save(Usuario.builder()
                .username("tesorero")
                .password(passwordEncoder.encode("teso123"))
                .email("tesorero@comunidad.org")
                .nombres("Marcos")
                .apellidos("Chávez Flores")
                .activo(true)
                .rol(rolTeso)
                .build());

        Usuario userComunero = usuarioRepository.save(Usuario.builder()
                .username("comunero1")
                .password(passwordEncoder.encode("comunero123"))
                .email("comunero1@comunidad.org")
                .nombres("Zenón")
                .apellidos("Alvarez Ramos")
                .activo(true)
                .rol(rolComunero)
                .build());

        // 3. Los 5 Caseríos oficiales de la Comunidad Campesina
        Sector secSogoron = sectorRepository.save(Sector.builder().nombre("Sogorón Alto").descripcion("Caserío de zona alta, pastos y ganadería lechera").activo(true).build());
        Sector secRodacocha = sectorRepository.save(Sector.builder().nombre("Rodacocha").descripcion("Caserío central y producción agrícola tradicional").activo(true).build());
        Sector secPedregal = sectorRepository.save(Sector.builder().nombre("Pedregal").descripcion("Caserío de ladera, tubérculos andinos y cereales").activo(true).build());
        Sector secRioGrande = sectorRepository.save(Sector.builder().nombre("Río Grande").descripcion("Caserío ribereño, parcelas de riego e hidroagrícolas").activo(true).build());
        Sector secChamcas = sectorRepository.save(Sector.builder().nombre("Chamcas").descripcion("Caserío tradicional de pastoreo y agricultura familiar").activo(true).build());

        List<Sector> sectores = List.of(secSogoron, secRodacocha, secPedregal, secRioGrande, secChamcas);

        // 4. Configuración de Multas
        configMultaRepository.save(ConfigMulta.builder()
                .concepto("Multa por inasistencia no justificada a asamblea general")
                .monto(new BigDecimal("20.00"))
                .activa(true)
                .fechaActualizacion(LocalDateTime.now())
                .build());

        // 5. Creación de 35 Comuneros con los atributos completos
        String[][] rawComuneros = {
                {"Zenón", "Alvarez Ramos", "23984512", "951234501", "Av. Comunal 102"},
                {"Benita", "Quispe Mamani", "41235689", "951234502", "Jr. San Martín 230"},
                {"Eusebio", "Huanca Condori", "08765432", "951234503", "Camino Real s/n"},
                {"Rosa", "Flores Calla", "45678912", "951234504", "Sector Pedregal Lote 12"},
                {"Saturnino", "Vargas Ccama", "10293847", "951234505", "Jr. Puno 415"},
                {"Teodora", "Apaza Vilca", "71239845", "951234506", "Pasaje La Florida 10"},
                {"Mariano", "Choquehuanca Ticona", "29384756", "951234507", "Av. Los Andes 520"},
                {"Juana", "Paredes Machaca", "42981234", "951234508", "Jr. Libertad 112"},
                {"Faustino", "Ramos Cutipa", "09123847", "951234509", "Caserío Chamcas Mz B Lt 4"},
                {"Gregoria", "Cruz Yana", "46123456", "951234510", "Jr. Bolognesi 304"},
                {"Alejandro", "Vilca Sucasaca", "19283746", "951234511", "Camino Río Grande s/n"},
                {"Fortunata", "Ccopa Chambi", "73849102", "951234512", "Jr. Comercio 210"},
                {"Valerio", "Mullisaca Pacco", "20394857", "951234513", "Av. Sol Radiante 105"},
                {"Celia", "Coila Huarachi", "47586910", "951234514", "Jr. Grau 512"},
                {"Bartolomé", "Huancco Cari", "08192837", "951234515", "Sogorón Alto s/n"},
                {"Martina", "Callata Quenta", "74839201", "951234516", "Pasaje Las Flores 14"},
                {"Cipriano", "Luque Belizario", "21928374", "951234517", "Jr. Tacna 318"},
                {"Francisca", "Tito Mamani", "48192039", "951234518", "Av. Primavera 420"},
                {"Silverio", "Condori Larico", "11223344", "951234519", "Caserío Rodacocha Lote 45"},
                {"Hilaria", "Pari Pari", "75647382", "951234520", "Jr. 28 de Julio 109"},
                {"Dionisio", "Ilasaca Canaza", "22334455", "951234521", "Camino Vecinal 20"},
                {"Santosa", "Chambi Quispe", "49382716", "951234522", "Jr. Arequipa 614"},
                {"Anselmo", "Sucari Huallpa", "12345678", "951234523", "Sector Río Grande Lt 8"},
                {"Basilia", "Pacco Huanca", "76543210", "951234524", "Jr. Ayacucho 201"},
                {"Pascual", "Cari Calla", "23456789", "951234525", "Av. Panamericana 830"},
                {"Domitila", "Machaca Apaza", "50192837", "951234526", "Jr. Cuzco 140"},
                {"Cornelio", "Yana Flores", "13456789", "951234527", "Caserío Pedregal Mz F Lt 2"},
                {"Petronila", "Ccama Mullisaca", "77889900", "951234528", "Jr. Lima 325"},
                {"Gervasio", "Ticona Coila", "24567890", "951234529", "Pasaje Primavera 5"},
                {"Leocadia", "Cutipa Huancco", "51234567", "951234530", "Jr. Moquegua 211"},
                {"Melchor", "Belizario Luque", "14567890", "951234531", "Sogorón Alto Lt 18"},
                {"Justina", "Quenta Callata", "78901234", "951234532", "Av. Centenario 150"},
                {"Hermenegildo", "Larico Condori", "25678901", "951234533", "Jr. Tarapacá 402"},
                {"Vicenta", "Canaza Ilasaca", "52345678", "951234534", "Caserío Chamcas Lote 9"},
                {"Luciano", "Huallpa Sucari", "15678902", "951234535", "Camino a Rodacocha s/n"}
        };

        String[] ocupaciones = {"Agricultor", "Ganadero", "Comerciante", "Artesano", "Agricultor y Ganadero", "Docente Rural"};
        EstadoCivil[] estadosCiviles = {EstadoCivil.CASADO, EstadoCivil.CONVIVIENTE, EstadoCivil.SOLTERO, EstadoCivil.VIUDO};

        List<Comunero> comunerosGuardados = new ArrayList<>();

        for (int i = 0; i < rawComuneros.length; i++) {
            String[] data = rawComuneros[i];
            String codigo = String.format("COM-%03d", i + 1);
            String padron = String.format("PAD-%03d", i + 1);
            Sector sec = sectores.get(i % sectores.size());
            EstadoComunero est = EstadoComunero.ACTIVO;
            CondicionHabilitacion cond = CondicionHabilitacion.HABILITADO;
            TipoComunero tipo = (i % 6 == 0) ? TipoComunero.NO_CALIFICADO : TipoComunero.CALIFICADO;
            String motivoInhab = null;

            if (i == 30) {
                cond = CondicionHabilitacion.INHABILITADO;
                motivoInhab = "Falta injustificada reiterada a faenas comunales";
            } else if (i == 31) {
                cond = CondicionHabilitacion.INHABILITADO;
                motivoInhab = "Mora en aportaciones y multas acumuladas";
            } else if (i == 32) {
                est = EstadoComunero.SUSPENDIDO;
            }

            Comunero c = Comunero.builder()
                    .codigoComunero(codigo)
                    .numeroPadron(padron)
                    .dni(data[2])
                    .nombres(data[0])
                    .apellidos(data[1])
                    .fechaNacimiento(LocalDate.of(1960 + (i % 35), 1 + (i % 12), 1 + (i % 28)))
                    .estadoCivil(estadosCiviles[i % estadosCiviles.length])
                    .ocupacion(ocupaciones[i % ocupaciones.length])
                    .tipoComunero(tipo)
                    .sector(sec)
                    .caserio(sec.getNombre())
                    .fechaIncorporacion(LocalDate.of(1995 + (i % 25), 3, 15))
                    .telefono(data[3])
                    .direccion(data[4])
                    .estado(est)
                    .condicionHabilitacion(cond)
                    .motivoInhabilitacion(motivoInhab)
                    .usuario(i == 0 ? userComunero : null)
                    .fechaRegistro(LocalDateTime.now().minusDays(100 - i))
                    .build();

            comunerosGuardados.add(comuneroRepository.save(c));
        }

        // 6. Asambleas
        // Asamblea 1: Finalizada hace 60 días
        Asamblea asamblea1 = asambleaRepository.save(Asamblea.builder()
                .titulo("Asamblea General Ordinaria de Inicio de Año y Plan de Faenas")
                .agenda("1. Balance económico del año anterior. 2. Aprobación del cronograma de faenas comunales 2026. 3. Mantenimiento del canal matriz.")
                .tipo(TipoAsamblea.ORDINARIA)
                .fecha(LocalDate.now().minusDays(60))
                .horaInicio(LocalTime.of(9, 0))
                .horaFin(LocalTime.of(13, 30))
                .lugar("Local Comunal Principal - Salón de Actos")
                .estado(EstadoAsamblea.FINALIZADA)
                .quorumMinimoPct(new BigDecimal("50.00"))
                .totalHabilitadosCorte(32)
                .multasGeneradas(true)
                .fechaCreacion(LocalDateTime.now().minusDays(70))
                .build());

        // Asamblea 2: Finalizada hace 20 días
        Asamblea asamblea2 = asambleaRepository.save(Asamblea.builder()
                .titulo("Asamblea Extraordinaria sobre Proyecto de Electrificación Rural")
                .agenda("1. Informe técnico de la empresa de energía. 2. Aporte comunal para postes y tendido eléctrico. 3. Votación de servidumbre de paso.")
                .tipo(TipoAsamblea.EXTRAORDINARIA)
                .fecha(LocalDate.now().minusDays(20))
                .horaInicio(LocalTime.of(14, 0))
                .horaFin(LocalTime.of(18, 0))
                .lugar("Plaza de Armas Comunal")
                .estado(EstadoAsamblea.FINALIZADA)
                .quorumMinimoPct(new BigDecimal("50.00"))
                .totalHabilitadosCorte(32)
                .multasGeneradas(true)
                .fechaCreacion(LocalDateTime.now().minusDays(30))
                .build());

        // Asamblea 3: En Curso HOY
        Asamblea asamblea3 = asambleaRepository.save(Asamblea.builder()
                .titulo("Asamblea Ordinaria del Mes - Distribución de Turnos de Riego y Votación de Cuotas")
                .agenda("1. Control de asistencia y quórum. 2. Aprobación de cuota extraordinaria de riego. 3. Elección del comité de vigilancia.")
                .tipo(TipoAsamblea.ORDINARIA)
                .fecha(LocalDate.now())
                .horaInicio(LocalTime.of(10, 0))
                .lugar("Local Comunal Principal")
                .estado(EstadoAsamblea.EN_CURSO)
                .quorumMinimoPct(new BigDecimal("50.00"))
                .totalHabilitadosCorte(32)
                .multasGeneradas(false)
                .fechaCreacion(LocalDateTime.now().minusDays(5))
                .build());

        // Asamblea 4: Programada en 15 días
        Asamblea asamblea4 = asambleaRepository.save(Asamblea.builder()
                .titulo("Asamblea General de Rendición de Cuentas y Fiesta Patronal")
                .agenda("1. Informe económico primer trimestre. 2. Organización de la festividad patronal de San Juan. 3. Varios.")
                .tipo(TipoAsamblea.ORDINARIA)
                .fecha(LocalDate.now().plusDays(15))
                .horaInicio(LocalTime.of(9, 30))
                .lugar("Local Comunal Principal")
                .estado(EstadoAsamblea.PROGRAMADA)
                .quorumMinimoPct(new BigDecimal("50.00"))
                .multasGeneradas(false)
                .fechaCreacion(LocalDateTime.now().minusDays(1))
                .build());

        // 7. Registro de Asistencias para Asamblea 1 y 2
        for (int i = 0; i < 32; i++) {
            Comunero c = comunerosGuardados.get(i);
            // In asamblea 1: 24 presentes, 8 ausentes
            EstadoAsistencia est1 = (i < 24) ? EstadoAsistencia.PRESENTE : EstadoAsistencia.AUSENTE;
            asistenciaRepository.save(Asistencia.builder()
                    .asamblea(asamblea1)
                    .comunero(c)
                    .estado(est1)
                    .fechaHoraRegistro(asamblea1.getFecha().atTime(9, 15 + (i % 30)))
                    .registradoPor(userSecre)
                    .build());

            // In asamblea 2: 26 presentes, 6 ausentes
            EstadoAsistencia est2 = (i < 26) ? EstadoAsistencia.PRESENTE : EstadoAsistencia.AUSENTE;
            asistenciaRepository.save(Asistencia.builder()
                    .asamblea(asamblea2)
                    .comunero(c)
                    .estado(est2)
                    .fechaHoraRegistro(asamblea2.getFecha().atTime(14, 10 + (i % 30)))
                    .registradoPor(userSecre)
                    .build());

            // In asamblea 3 (En curso): mark first 18 as Presentes to achieve quorum
            if (i < 19) {
                asistenciaRepository.save(Asistencia.builder()
                        .asamblea(asamblea3)
                        .comunero(c)
                        .estado(EstadoAsistencia.PRESENTE)
                        .fechaHoraRegistro(LocalDateTime.now().minusMinutes(40 - i))
                        .registradoPor(userSecre)
                        .build());
            }
        }

        // 8. Votaciones en Asamblea 1, 2 y 3
        Votacion vot1 = votacionRepository.save(Votacion.builder()
                .asamblea(asamblea1)
                .titulo("Aprobación del Cronograma de Faenas y Limpieza de Canales 2026")
                .descripcion("Se somete a votación el cronograma de 4 faenas comunales obligatorias para el primer semestre.")
                .propuesta("Aprobar el calendario propuesto por la junta directiva iniciando el 15 de marzo.")
                .tipo(TipoVotacion.MAYORIA_SIMPLE)
                .estado(EstadoVotacion.CERRADA)
                .fechaApertura(asamblea1.getFecha().atTime(11, 0))
                .fechaCierre(asamblea1.getFecha().atTime(11, 45))
                .build());

        for (int i = 0; i < 24; i++) {
            OpcionVoto op = (i < 20) ? OpcionVoto.A_FAVOR : (i < 22 ? OpcionVoto.EN_CONTRA : OpcionVoto.ABSTENCION);
            votoRepository.save(Voto.builder()
                    .votacion(vot1)
                    .comunero(comunerosGuardados.get(i))
                    .opcion(op)
                    .fechaHora(asamblea1.getFecha().atTime(11, 10 + (i % 20)))
                    .build());
        }

        Votacion vot2 = votacionRepository.save(Votacion.builder()
                .asamblea(asamblea2)
                .titulo("Autorización de Servidumbre de Paso para Tendido Eléctrico")
                .descripcion("Se vota conceder el permiso de paso en los terrenos comunales para la electrificación.")
                .propuesta("Aprobar la cesión de paso sin perjuicio de indemnizaciones individuales.")
                .tipo(TipoVotacion.DOS_TERCIOS)
                .estado(EstadoVotacion.CERRADA)
                .fechaApertura(asamblea2.getFecha().atTime(16, 0))
                .fechaCierre(asamblea2.getFecha().atTime(16, 40))
                .build());

        for (int i = 0; i < 26; i++) {
            OpcionVoto op = (i < 23) ? OpcionVoto.A_FAVOR : OpcionVoto.EN_CONTRA;
            votoRepository.save(Voto.builder()
                    .votacion(vot2)
                    .comunero(comunerosGuardados.get(i))
                    .opcion(op)
                    .fechaHora(asamblea2.getFecha().atTime(16, 10 + (i % 20)))
                    .build());
        }

        Votacion vot3 = votacionRepository.save(Votacion.builder()
                .asamblea(asamblea3)
                .titulo("Fijación de Cuota Extraordinaria de S/ 15.00 para Mantenimiento de Bomba")
                .descripcion("Propuesta de cuota extraordinaria por comunero para reparar el motor de la estación de bombeo.")
                .propuesta("Aprobar el aporte único de S/ 15.00 a pagarse hasta fin de mes.")
                .tipo(TipoVotacion.MAYORIA_SIMPLE)
                .estado(EstadoVotacion.ABIERTA)
                .fechaApertura(LocalDateTime.now().minusMinutes(20))
                .build());

        for (int i = 0; i < 15; i++) {
            OpcionVoto op = (i % 4 == 0) ? OpcionVoto.EN_CONTRA : OpcionVoto.A_FAVOR;
            votoRepository.save(Voto.builder()
                    .votacion(vot3)
                    .comunero(comunerosGuardados.get(i))
                    .opcion(op)
                    .fechaHora(LocalDateTime.now().minusMinutes(15 - i))
                    .build());
        }

        // 9. Multas y Pagos para los ausentes de Asamblea 1 y 2
        for (int i = 24; i < 32; i++) {
            Comunero c = comunerosGuardados.get(i);
            Multa m = multaRepository.save(Multa.builder()
                    .comunero(c)
                    .asamblea(asamblea1)
                    .concepto("Inasistencia a " + asamblea1.getTitulo() + " (" + asamblea1.getFecha() + ")")
                    .montoOriginal(new BigDecimal("20.00"))
                    .saldoPendiente(i < 27 ? BigDecimal.ZERO : new BigDecimal("20.00"))
                    .estado(i < 27 ? EstadoMulta.PAGADA : EstadoMulta.PENDIENTE)
                    .fechaEmision(asamblea1.getFecha())
                    .fechaRegistro(asamblea1.getFecha().atTime(18, 0))
                    .build());

            // If marked as paid, create a payment record
            if (i < 27) {
                pagoMultaRepository.save(PagoMulta.builder()
                        .multa(m)
                        .montoPagado(new BigDecimal("20.00"))
                        .fechaPago(asamblea1.getFecha().plusDays(5 + (i - 24)))
                        .numeroRecibo("REC-202601" + String.format("%03d", i))
                        .metodoPago(MetodoPago.EFECTIVO)
                        .observacion("Pago cancelado en tesorería comunal")
                        .registradoPor(userTeso)
                        .fechaRegistro(asamblea1.getFecha().plusDays(5 + (i - 24)).atTime(10, 30))
                        .build());
            }
        }

        // 10. Actas Oficiales para Asambleas 1 y 2
        Acta acta1 = Acta.builder()
                .asamblea(asamblea1)
                .numeroActa("ACTA-2026-001")
                .fecha(asamblea1.getFecha())
                .lugar(asamblea1.getLugar())
                .agenda(asamblea1.getAgenda())
                .resumen("Reunidos en asamblea ordinaria con 24 asistentes (75% de quórum), el presidente dio inicio a la sesión. Se expuso el balance económico del año 2025 que fue aprobado por unanimidad. Seguidamente se debatió el plan de faenas para el año 2026.")
                .resultadosVotaciones("Votación Cronograma de Faenas: 20 A Favor, 2 En Contra, 2 Abstenciones. APROBADA.")
                .observaciones("La sesión concluyó a las 13:30 horas sin incidentes.")
                .estado(EstadoActa.APROBADA)
                .responsable(userSecre)
                .acuerdos(new ArrayList<>())
                .fechaCreacion(asamblea1.getFecha().atTime(14, 0))
                .fechaModificacion(asamblea1.getFecha().atTime(15, 30))
                .build();

        acta1.getAcuerdos().add(Acuerdo.builder().acta(acta1).numero(1).descripcion("Aprobar el balance económico del ejercicio fiscal 2025 sin observaciones.").estado(EstadoAcuerdo.CUMPLIDO).build());
        acta1.getAcuerdos().add(Acuerdo.builder().acta(acta1).numero(2).descripcion("Fijar la primera faena de limpieza de acequias para el 15 de marzo de 2026.").estado(EstadoAcuerdo.CUMPLIDO).build());
        actaRepository.save(acta1);

        Acta acta2 = Acta.builder()
                .asamblea(asamblea2)
                .numeroActa("ACTA-2026-002")
                .fecha(asamblea2.getFecha())
                .lugar(asamblea2.getLugar())
                .agenda(asamblea2.getAgenda())
                .resumen("En asamblea extraordinaria con 26 comuneros presentes (81.25% de quórum), se escuchó el informe de los ingenieros sobre el proyecto de electrificación. La asamblea respaldó ampliamente el proyecto.")
                .resultadosVotaciones("Votación Servidumbre Eléctrica: 23 A Favor, 3 En Contra. APROBADA.")
                .observaciones("Se deja constancia del compromiso de no afectar cultivos en producción.")
                .estado(EstadoActa.APROBADA)
                .responsable(userSecre)
                .acuerdos(new ArrayList<>())
                .fechaCreacion(asamblea2.getFecha().atTime(18, 30))
                .build();

        acta2.getAcuerdos().add(Acuerdo.builder().acta(acta2).numero(1).descripcion("Autorizar el trazo de la línea de media tensión por el sector San Cristóbal.").estado(EstadoAcuerdo.EN_PROCESO).build());
        actaRepository.save(acta2);

        // 11. Registros de Auditoría
        auditoriaRepository.save(Auditoria.builder()
                .usuario(userAdmin)
                .username("admin")
                .accion(TipoAccionAuditoria.CREAR_ASAMBLEA)
                .modulo("ASAMBLEAS")
                .registroAfectado("Asamblea Ordinaria de Inicio de Año")
                .tablaAfectada("asambleas")
                .registroId(asamblea1.getId())
                .ipAddress("192.168.1.100")
                .fechaHora(LocalDateTime.now().minusDays(70))
                .detalleNuevo("Convocatoria creada")
                .build());

        auditoriaRepository.save(Auditoria.builder()
                .usuario(userSecre)
                .username("secretario")
                .accion(TipoAccionAuditoria.CREAR_ACTA)
                .modulo("ACTAS")
                .registroAfectado("Acta ACTA-2026-001")
                .tablaAfectada("actas")
                .registroId(acta1.getId())
                .ipAddress("192.168.1.105")
                .fechaHora(LocalDateTime.now().minusDays(60))
                .detalleNuevo("Acta registrada y aprobada")
                .build());

        log.info(">>> ¡Carga de datos de prueba completada exitosamente! Se crearon 35 comuneros, 4 asambleas, 3 votaciones, multas, actas y logs de auditoría.");
    }
}
