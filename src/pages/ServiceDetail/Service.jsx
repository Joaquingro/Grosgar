import contabilidad from "../../assets/contabilidad_general.png"
import impuestos from "../../assets/impuestos_microempresarios.png"
import nomina from "../../assets/nomina_y_recursos.png"
import auditoria from "../../assets/auditoria.png"
import consultoria from "../../assets/consultoria-fiscal.png"
import servicios from "../../assets/servicios_de_legalizacion.png"
import asesoramiento from "../../assets/asesoramiento.png"
import gestion from "../../assets/contabilidad_electronica.png"
import declaracion from "../../assets/declaracion.png"
import cumplimiento from "../../assets/cumplimiento.png"

let ServicioInfo = [
    {
       name: "Contabilidad General",
       description: "Servicios integrales de contabilidad conforme a las normativas mexicanas, incluyendo la preparación de estados financieros.",
       image: contabilidad,
       resume: "Nuestros servicios de contabilidad general abarcan la gestión integral de los registros financieros de tu empresa. Esto incluye la preparación de estados financieros precisos y en conformidad con las normativas contables mexicanas, asegurando una visión clara de la salud financiera de tu negocio."
    }, 
    {
        name: "Impuestos Empresariales",
        description: "Asesoría y presentación de declaraciones fiscales corporativas, cumpliendo con las leyes tributarias de México.",
       image: impuestos,
       resume: "Ofrecemos asesoramiento especializado en asuntos tributarios corporativos. Desde la correcta clasificación de impuestos hasta la presentación de declaraciones fiscales, nuestro equipo se asegura de que tu empresa cumpla con todas las obligaciones fiscales según las leyes mexicanas."

     }, 
     {
        name: "Nómina y Recursos Humanos",
        description: "Gestión completa de la nómina, cálculos, retenciones y cumplimiento con las regulaciones laborales mexicanas.", 
        image: nomina,
        resume: "Simplificamos la complejidad de la gestión de nóminas y recursos humanos. Calculamos de manera precisa los sueldos, retenciones y contribuciones al Instituto Mexicano del Seguro Social (IMSS), garantizando el cumplimiento con las normativas laborales vigentes en México."

     }, 
     {
        name: "Auditoría Financiera",
        description: "Revisiones exhaustivas de estados financieros para garantizar conformidad con las Normas de Información Financiera (NIF).",
        image: auditoria,
        resume: "Nuestros servicios de auditoría financiera van más allá de la simple revisión de números. Realizamos análisis detallados de los estados financieros, identificando áreas de mejora y asegurando el cumplimiento con las Normas de Información Financiera (NIF) para proporcionar una imagen fiel de la situación financiera de tu empresa."

     }, 
     {
        name: "Consultoría Fiscal",
        description: "Asesoramiento estratégico en asuntos fiscales, optimizando la carga tributaria y aplicando incentivos fiscales mexicanos.",
        image: consultoria, 
        resume: "A través de nuestra consultoría fiscal, evaluamos tu carga tributaria y diseñamos estrategias para optimizarla. Además, identificamos oportunidades para aprovechar incentivos fiscales disponibles en México, asegurando que tu empresa maximice sus beneficios fiscales."
     }, 
     {
        name: "Servicios de Legalización",
        description: "Tramitación de documentos legales y registros mercantiles para la legalización y cumplimiento normativo en México.",
        image: servicios,
        resume: "Simplificamos los procesos legales al encargarnos de la tramitación de documentos y registros mercantiles. Nuestro objetivo es asegurar que tu empresa opere de manera legal y cumpla con todas las regulaciones en México."

     }, 
     {
         name: "Asesoramiento en Comercio Exterior",
         description: "Orientación en cuestiones aduaneras y fiscales relacionadas con el comercio internacional.",
         image: asesoramiento,
         resume: "Nuestro equipo proporciona orientación especializada en cuestiones aduaneras y fiscales relacionadas con el comercio internacional. Te ayudamos a cumplir con requisitos aduanales y a aprovechar los beneficios de acuerdos comerciales."

      }, 
      {
         name: "Gestión de Contabilidad Electrónica",
         description: "Implementación y gestión de la Contabilidad Electrónica de acuerdo con el Servicio de Administración Tributaria (SAT) en México.",
         image: gestion,
         resume: "Implementamos y gestionamos sistemas de Contabilidad Electrónica de acuerdo con los requisitos del Servicio de Administración Tributaria (SAT), asegurando que tu empresa cumpla con las obligaciones fiscales electrónicas en México."

      }, 
      {
         name: "Declaraciones Anuales y Mensuales", 
         description: "Preparación y presentación de declaraciones anuales y mensuales ante el SAT y otras autoridades fiscales.",
         image: declaracion,
         resume: "Nos encargamos de la preparación y presentación de tus declaraciones fiscales ante el SAT y otras autoridades. Garantizamos la exactitud y puntualidad para evitar sanciones y mantener la buena reputación fiscal de tu empresa."


      }, 
      {
         name: "Cumplimiento con Obligaciones Laborales", 
         description: "Asesoramiento en temas laborales, seguridad social y cumplimiento con obligaciones del IMSS e INFONAVIT.",
         image: cumplimiento,
         resume: "Brindamos asesoramiento integral en temas laborales y de seguridad social, asegurando que tu empresa cumpla con todas las obligaciones ante el IMSS e INFONAVIT. Desde contratos laborales hasta políticas de recursos humanos, te apoyamos en cada aspecto para mantener un entorno laboral saludable y conforme a la normativa mexicana."

      }, 
 

]


export default ServicioInfo;