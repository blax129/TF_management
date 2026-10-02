(function () {
  function currentHomeFileEarly() {
    const file = window.location.pathname.split("/").pop() || "index.html";
    return file === "" ? "index.html" : file;
  }

  function isHomePageEarly() {
    const file = currentHomeFileEarly();
    return file === "index.html" || file === "es.html";
  }

  if (isHomePageEarly() && "scrollRestoration" in history) {
    history.scrollRestoration = "auto";
  }

  const hamburger = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const applicationForm = document.querySelector("#application-form");
  const backButtons = Array.from(document.querySelectorAll(".back-button"));
  const communitySliders = Array.from(document.querySelectorAll("[data-community-slider]"));
  const languageSelects = Array.from(document.querySelectorAll(".language-select"));
  const languageSwitchers = Array.from(document.querySelectorAll(".language-switcher"));
  const revealTargets = Array.from(document.querySelectorAll(".hero-copy-block, .profile-image-card, .section-heading, .trust-pill, .manager-card, .copy-panel, .hoa-badge, .service-card, .process-list li, .community-slider, .faq-card, .accordion-item, .consultation-panel, .form-intro, fieldset, .confirmation-panel")).filter((element) => {
    return element.matches(".community-slider") || !element.closest("[data-community-slider]");
  });
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");
  const savedLanguage = window.localStorage.getItem("site-language");
  const pageLanguage = document.documentElement.lang ? document.documentElement.lang.split("-")[0] : "en";
  const defaultLanguage = urlLanguage || savedLanguage || pageLanguage || "en";

  const translations = {
    es: {
      "Private Property Manager": "Administrador Privado de Propiedades",
      "TenantFirst Management home": "Inicio de TenantFirst Management",
      "Open navigation": "Abrir navegación",
      "Main navigation": "Navegación principal",
      "Language": "Idioma",
      "Language selector": "Selector de idioma",
      "Select language": "Seleccionar idioma",
      "Navigation": "Navegación",
      "Page navigation": "Navegación de página",
      "Home": "Inicio",
      "About": "Acerca de",
      "Services": "Servicios",
      "Gallery": "Galería",
      "Rental Process": "Proceso de alquiler",
      "Rental Process FAQ": "Preguntas del proceso de alquiler",
      "Contact": "Contacto",
      "Get in touch": "Ponte en contacto",
      "Request Consultation": "Solicitar consulta",
      "Apply Now": "Aplicar Ahora",
      "Back": "Volver",
      "Back to Application": "Volver a la solicitud",
      "TenantFirst Management": "TenantFirst Management",
      "Professional and transparent rental coordination for applicants": "Coordinación de alquiler profesional y transparente para solicitantes",
      "Professional Photo Coming Soon": "Foto profesional próximamente",
      "Professional rental support designed to make the leasing process organized, transparent, and efficient.": "Apoyo profesional de alquiler diseñado para que el proceso de arrendamiento sea organizado, transparente y eficiente.",
      "Tenant Screening & Application Review": "Revisión de solicitudes y evaluación de inquilinos",
      "Rental Listing & Marketing Support": "Apoyo de publicación y marketing de alquileres",
      "Lease Coordination": "Coordinación de contrato de arrendamiento",
      "Scheduling Property Tours": "Programación de visitas a la propiedad",
      "Managing Rental Inquiries & Tenant Communication": "Gestión de consultas de alquiler y comunicación con inquilinos",
      "Guiding Applicants Through The Approval Process": "Guía para solicitantes durante el proceso de aprobación",
      "Lifestyle gallery": "Galería de estilo de vida",
      "Community & Moments": "Comunidad y momentos",
      "A closer look at the lifestyle, comfort, and community experience.": "Una mirada más cercana al estilo de vida, la comodidad y la experiencia comunitaria.",
      "Previous image": "Imagen anterior",
      "Next image": "Imagen siguiente",
      "Gallery navigation": "Navegación de galería",
      "Privately managed rentals": "Alquileres administrados de forma privada",
      "Quality rental homes with a simple and transparent application process.": "Viviendas de alquiler de calidad con un proceso de solicitud simple y transparente.",
      "TenantFirst Management offers privately managed rental homes focused on transparency, responsive communication, and a smooth leasing experience.": "TenantFirst Management ofrece viviendas de alquiler administradas de forma privada, con enfoque en transparencia, comunicación receptiva y una experiencia de arrendamiento fluida.",
      "Secure Application Processing": "Procesamiento seguro de solicitudes",
      "Applications are securely processed through Zillow Rental Manager in partnership with the property owner.": "Las solicitudes se procesan de forma segura mediante Zillow Rental Manager en colaboración con el propietario.",
      "Meet TenantFirst Management": "Conozca a TenantFirst Management",
      "TenantFirst Management is a dedicated property manager focused on providing organized, transparent, and professional rental support for property owners and prospective tenants.": "TenantFirst Management es un administrador de propiedades dedicado a brindar apoyo de alquiler organizado, transparente y profesional para propietarios y posibles inquilinos.",
      "TenantFirst Management works closely with applicants throughout the rental process, helping them understand requirements, schedule property tours, and move through each step with clarity and confidence.": "TenantFirst Management trabaja de cerca con los solicitantes durante todo el proceso de alquiler, ayudándoles a comprender los requisitos, programar visitas a la propiedad y avanzar en cada paso con claridad y confianza.",
      "With a strong emphasis on communication, reliability, and professionalism, TenantFirst Management is committed to making the leasing experience smooth, well structured, and respectful for everyone involved.": "Con un fuerte énfasis en la comunicación, la confiabilidad y el profesionalismo, TenantFirst Management está comprometido a hacer que la experiencia de arrendamiento sea fluida, bien estructurada y respetuosa para todos los involucrados.",
      "With a strong emphasis on communication, reliability, and professionalism, TenantFirst Management is committed to making the leasing experience smooth, well structured, and respectful for everyone involved.": "Con un fuerte énfasis en la comunicación, la confiabilidad y el profesionalismo, TenantFirst Management está comprometido a hacer que la experiencia de arrendamiento sea fluida, bien estructurada y respetuosa para todos los involucrados.",
      "HOA Logo": "Logo HOA",
      "Community & HOA Guidelines Respected": "Se respetan las pautas de la comunidad y la HOA",
      "Rental process": "Proceso de alquiler",
      "Simple next steps": "Siguientes pasos simples",
      "Inquire About a Listing": "Consultar sobre un anuncio de alquiler",
      "Review available property information before applying.": "Revise la información disponible de la propiedad antes de aplicar.",
      "Submit Application": "Enviar Solicitud",
      "Complete the secure rental application form.": "Complete el formulario seguro de solicitud de alquiler.",
      "Refundable Application Fee": "Tarifa de solicitud reembolsable",
      "Application fees are refundable if the application is not approved or the applicant chooses not to move forward after the tour.": "Las tarifas de solicitud son reembolsables si la solicitud no es aprobada o si el solicitante decide no continuar después de la visita.",
      "Next Steps": "Siguientes pasos",
      "Qualified applicants will receive updates, tour scheduling, and further instructions.": "Los solicitantes calificados recibirán actualizaciones, programación de visita e instrucciones adicionales.",
      "Rental application questions": "Preguntas sobre la solicitud de alquiler",
      "How do I apply for a rental?": "¿Cómo aplico para un alquiler?",
      "You can apply directly through the secure rental application form on this website.": "Puede aplicar directamente mediante el formulario seguro de solicitud de alquiler en este sitio web.",
      "Is there an application fee?": "¿Hay una tarifa de solicitud?",
      "Yes. A refundable application fee may apply after submitting the application.": "Sí. Puede aplicarse una tarifa de solicitud reembolsable después de enviar la solicitud.",
      "Yes, there is a refundable application fee of $75, which is paid through Chime after your application is submitted.": "Sí, hay una tarifa de solicitud reembolsable de $75, que se paga a través de Chime después de enviar su solicitud.",
      "Are listings always available?": "¿Los listados siempre están disponibles?",
      "Availability may change at any time depending on current occupancy and application status.": "La disponibilidad puede cambiar en cualquier momento según la ocupación actual y el estado de las solicitudes.",
      "How will I be contacted?": "¿Cómo me contactarán?",
      "Applicants are typically contacted using the phone number or email provided in the application form.": "Normalmente se contacta a los solicitantes usando el número de teléfono o correo electrónico proporcionado en el formulario.",
      "Request guidance regarding availability, application steps, move-in timing, or general rental questions before proceeding.": "Solicite orientación sobre disponibilidad, pasos de la solicitud, calendario de mudanza u otras consultas relacionadas con el alquiler antes de continuar.",
      "Property Manager": "Administrador de propiedades",
      "Direct Contact": "Contacto directo",
      "For rental inquiries or application support, contact TenantFirst Management directly.": "Para consultas sobre alquiler o apoyo con su solicitud, comuníquese directamente con TenantFirst Management.",
      "If you have questions regarding the application process, please contact TenantFirst Management directly.": "Si tiene preguntas sobre el proceso de solicitud, comuníquese directamente con TenantFirst Management.",
      "Email TenantFirst Management": "Enviar correo electrónico a TenantFirst Management",
      "Call TenantFirst Management": "Llamar a TenantFirst Management",
      "© 2026 TenantFirst Management": "© 2026 TenantFirst Management",
      "© 2026 TenantFirst Management.": "© 2026 TenantFirst Management",
      "Secure rental application": "Solicitud segura de alquiler",
      "Rental Application Form": "Formulario de Solicitud de Alquiler",
      "Rental Application": "Solicitud de alquiler",
      "Complete the form below to begin your application process.": "Complete el formulario a continuación para iniciar su proceso de solicitud.",
      "Please complete this form accurately. All information provided will remain confidential and is required solely for the rental application approval process. Each adult (18+) applying to live in the unit must complete a separate application.": "Complete este formulario con precisión. Toda la información proporcionada permanecerá confidencial y se requiere únicamente para el proceso de aprobación de la solicitud de alquiler. Cada adulto (18+) que solicite vivir en la unidad debe completar una solicitud por separado.",
      "This is a privately managed rental. All applications are reviewed directly by the property owner. No third-party agents are involved.": "Este es un alquiler administrado de forma privada. Todas las solicitudes son revisadas directamente por el propietario. No participan agentes externos.",
      "This is a privately managed rental. All applications are reviewed directly by the property owner.": "Este es un alquiler administrado de forma privada. Todas las solicitudes son revisadas directamente por el propietario.",
      "Equal Housing Opportunity": "Igualdad de oportunidad de vivienda",
      "Equal Housing Opportunity Logo": "Logo de Igualdad de Oportunidad de Vivienda",
      "Secure SSL Encrypted Application": "Solicitud segura con cifrado SSL",
      "Application Process Supported Through Zillow Rental Manager": "Proceso de solicitud respaldado mediante Zillow Rental Manager",
      "Zillow Rental Manager application support indicator": "Indicador de respaldo de solicitudes con Zillow Rental Manager",
      "Applications are securely submitted through Zillow Rental Manager in partnership with the property owner. No outside leasing agents are involved.": "Las solicitudes se envían de forma segura mediante Zillow Rental Manager en colaboración con el propietario. No participan agentes de arrendamiento externos.",
      "Property Information": "Información de la propiedad",
      "Property applying for": "Propiedad para la que aplica",
      "Enter property address or listing name": "Ingrese la dirección o el nombre del anuncio",
      "Select a property": "Seleccione una propiedad",
      "Desired move-in date": "Fecha deseada de mudanza",
      "Date of Application": "Fecha de solicitud",
      "lease duration": "duración del arrendamiento",
      "choose lease duration": "Elija la duración del arrendamiento",
      "Citizenship/Residency Status": "Estatus de ciudadanía/residencia",
      "Applicant Information": "Información del solicitante",
      "Full legal name (First, Middle, Last)": "Nombre legal completo (nombre, segundo nombre, apellido)",
      "Email address": "Correo electrónico",
      "Mobile number": "Número móvil",
      "Date of birth": "Fecha de nacimiento",
      "Residency History": "Historial de residencia",
      "Current Address (With Dates Of Residency)": "Dirección actual (con fechas de residencia)",
      "Previous Address": "Dirección anterior",
      "Current landlord or manager": "Propietario o administrador actual",
      "Landlord phone number": "Teléfono del propietario o administrador",
      "How long have you lived there?": "¿Cuánto tiempo ha vivido ahí?",
      "Employment & Income": "Empleo e ingresos",
      "Current Employer": "Empleador actual",
      "Job title": "Puesto de trabajo",
      "Gross monthly income": "Ingreso mensual bruto",
      "Employer phone number": "Teléfono del empleador",
      "Employer name": "Nombre del empleador",
      "Enter employer or company name": "Ingrese el nombre del empleador o empresa",
      "Background Questions": "Preguntas de antecedentes",
      "Have you ever been evicted?": "¿Alguna vez ha sido desalojado?",
      "Select an answer": "Seleccione una respuesta",
      "No": "No",
      "Yes": "Sí",
      "Have you filed bankruptcy in the last 7 years?": "¿Ha declarado bancarrota en los últimos 7 años?",
      "If yes to any question, please explain": "Si respondió sí a alguna pregunta, explique",
      "Additional Information": "Información adicional",
      "Additional occupants": "Ocupantes adicionales",
      "Pets": "Mascotas",
      "Anything else you would like to share?": "¿Algo más que desee compartir?",
      "Emergency Contact": "Contacto de emergencia",
      "Emergency contact name": "Nombre del contacto de emergencia",
      "Emergency contact phone": "Teléfono del contacto de emergencia",
      "Relationship": "Relación",
      "Agreement": "Acuerdo",
      "I certify that the information provided is true and complete to the best of my knowledge.": "Certifico que la información proporcionada es verdadera y completa a mi leal saber y entender.",
      "Final Step Important (Read Before Submitting)": "Paso final importante (leer antes de enviar)",
      "Before you submit": "Antes de enviar",
      "Certification & Acknowledgment": "Certificación y confirmación",
      "Application certification": "Certificación de la solicitud",
      "Fee & next steps": "Tarifa y siguientes pasos",
      "I have read and agree to the statements above.": "He leído y acepto las declaraciones anteriores.",
      "Privacy & Data Processing Consent": "Consentimiento de privacidad y procesamiento de datos",
      "I consent to the collection, storage, verification, and processing of the information provided in this application for rental screening, application review, communication, and related property management purposes.": "Consiento la recopilación, almacenamiento, verificación y procesamiento de la información proporcionada en esta solicitud para la evaluación de alquiler, revisión de la solicitud, comunicación y fines relacionados con la administración de la propiedad.",
      "View Privacy Notice": "Ver aviso de privacidad",
      "Your information is transmitted securely and used only for application processing and communication purposes.": "Su información se transmite de forma segura y se utiliza únicamente para el procesamiento de la solicitud y fines de comunicación.",
      "Payment method for the fee": "Método de pago de la tarifa",
      "Read more": "Leer más",
      "Show less": "Mostrar menos",
      "Application progress overview": "Resumen del progreso de la solicitud",
      "Application": "Solicitud",
      "Review": "Revisión",
      "Payment": "Pago",
      "Others": "Otros",
      "Final step agreement": "Acuerdo del paso final",
      "Chime, America's #1 Choice for Banking": "Chime, la opción n.º 1 de Estados Unidos para banca",
      "I certify that all information provided in this application is complete and accurate to the best of my knowledge. I understand that providing false or misleading information may result in denial of my application, and I authorize the landlord/property manager to verify the information provided.": "Certifico que toda la información proporcionada en esta solicitud es completa y exacta según mi leal saber y entender. Entiendo que proporcionar información falsa o engañosa puede resultar en la denegación de mi solicitud, y autorizo al propietario o administrador de la propiedad a verificar la información proporcionada.",
      "I also understand that payment instructions for the refundable application fee will be provided after submission. Once payment is confirmed, my application will proceed to the review, approval, and next processing steps.": "También entiendo que las instrucciones de pago para la tarifa de solicitud reembolsable se proporcionarán después del envío. Una vez confirmado el pago, mi solicitud pasará a la revisión, aprobación y siguientes pasos del proceso.",
      "Application received": "Solicitud recibida",
      "Thank you. Your application has been submitted.": "Gracias. Su solicitud ha sido enviada.",
      "Your application is marked as received. Please watch your email or phone for updates from TenantFirst Management about review status, tour scheduling, or next-step instructions.": "Su solicitud aparece como recibida. Revise su correo electrónico o teléfono para actualizaciones de TenantFirst Management sobre el estado de revisión, programación de visita o instrucciones de siguientes pasos.",
      "Status: Received": "Estado: Recibida",
      "Applications are reviewed directly by the property owner. You will be contacted if more information is needed.": "Las solicitudes son revisadas directamente por el propietario. Se le contactará si se necesita más información.",
      "Secure processing note": "Nota de procesamiento seguro",
      "Application details may be processed through Zillow Rental Manager in partnership with the property owner.": "Los detalles de la solicitud pueden procesarse mediante Zillow Rental Manager en colaboración con el propietario.",
      "Return Home": "Volver al inicio",
      "Contact TenantFirst Management": "Contactar a TenantFirst Management",
      "Example: 2 years": "Ejemplo: 2 años",
      "Names and relationship to applicant": "Nombres y relación con el solicitante",
      "Type, breed": "Tipo, raza",
      "Type, breed, weight, and age": "Tipo, raza, peso y edad",
      "Submitting...": "Enviando...",
      "Submitting securely...": "Enviando de forma segura...",
      "Application submitted. Redirecting...": "Solicitud enviada. Redirigiendo...",
      "Submitted. Redirecting...": "Enviada. Redirigiendo...",
      "Something went wrong. Please try again.": "Algo salió mal. Inténtelo nuevamente."
      ,
      "Submission Received": "Solicitud recibida",
      "Application Received Successfully": "Solicitud recibida correctamente",
      "Thank you for completing your rental application. Your information has been received successfully and is currently pending review.": "Gracias por completar su solicitud de alquiler. Su información se recibió correctamente y está pendiente de revisión.",
      "Application ID:": "ID de solicitud:",
      "Pending": "Pendiente",
      "Application status": "Estado de la solicitud",
      "Email Confirmation": "Confirmación por correo electrónico",
      "A confirmation email has been sent to you.": "Se le ha enviado un correo de confirmación.",
      "A confirmation email has been sent to you at": "Se le ha enviado un correo de confirmación a",
      "Please note that a refundable $75 application fee is required before the approval process can begin.": "Tenga en cuenta que se requiere una tarifa de solicitud reembolsable de $75 antes de que pueda comenzar el proceso de aprobación.",
      "Once the payment has been confirmed, your application review and approval process will officially commence.": "Una vez confirmado el pago, comenzará oficialmente el proceso de revisión y aprobación de su solicitud.",
      "Secure & Verified Process": "Proceso seguro y verificado",
      "This application process is handled directly by the property management team. All submitted applications are reviewed carefully, and payment confirmations are documented for transparency and record keeping.": "Este proceso de solicitud es gestionado directamente por el equipo de administración de la propiedad. Todas las solicitudes enviadas se revisan cuidadosamente y las confirmaciones de pago se documentan para transparencia y registro.",
      "Fee Transparency": "Transparencia de tarifas",
      "The application fee is refundable if your application is not approved or if you decide not to proceed after the tour. If approved and you choose to move forward, the fee is applied toward your first month's rent.": "La tarifa de solicitud es reembolsable si su solicitud no es aprobada o si decide no continuar después de la visita. Si se aprueba y decide seguir adelante, la tarifa se aplica al primer mes de renta.",
      "Assigned Payment Instructions": "Instrucciones de pago asignadas",
      "Payment Options:": "Método de pago:",
      "Assigned Privately:": "Asignado de forma privada:",
      "Payment Details:": "Detalles de pago:",
      "Application Fee:": "Tarifa de solicitud:",
      "Verification Note:": "Nota de referencia:",
      "Provide a screenshot of the payment confirmation via email or text.": "Proporcione una captura de pantalla de la confirmación de pago por correo electrónico o mensaje de texto.",
      "Do not send payment until assigned processing instructions are provided directly. Keep your payment confirmation for your records.": "No envíe ningún pago hasta que se le proporcionen instrucciones de procesamiento asignadas directamente. Conserve su confirmación para sus registros.",
      "I have completed the application fee payment": "He recibido instrucciones de pago asignadas",
      "Continue To Payment Confirmation": "Continuar a la confirmación de pago",
      "Payment Options Are Assigned Privately": "Opciones de pago asignadas de forma privada",
      "Available payment options are confirmed individually after application review.": "Las opciones disponibles se confirmarán individualmente después de la revisión de la solicitud.",
      "Upload Payment Confirmation": "Subir confirmación de pago",
      "Please upload your payment screenshot to complete your secure application verification.": "Suba la captura de pantalla de su pago para completar la verificación segura de su solicitud.",
      "Applicant details": "Datos del solicitante",
      "Full Name": "Nombre completo",
      "Email Address": "Correo electrónico",
      "Application ID (optional)": "ID de solicitud (opcional)",
      "Tap to upload": "Toque para subir",
      "or drag and drop your payment screenshot here.": "o arrastre y suelte aquí la captura de pantalla del pago.",
      "JPG, JPEG or PNG only": "Solo JPG, JPEG o PNG",
      "Selected File": "Archivo seleccionado",
      "Submit Payment Confirmation": "Enviar confirmación de pago",
      "Prefer Email Confirmation?": "¿Prefiere confirmar por correo?",
      "If you would prefer to email your payment confirmation instead, send it directly to TenantFirst Management for processing.": "Si prefiere enviar la confirmación de pago por correo, envíela directamente a TenantFirst Management para su procesamiento.",
      "Send Email Confirmation": "Enviar confirmación por correo",
      "Payment Confirmation Submitted": "Confirmación de pago enviada",
      "Your payment screenshot has been received and is pending private verification. TenantFirst Management will review your confirmation with your application details.": "Su captura de pantalla del pago fue recibida y está pendiente de verificación privada. TenantFirst Management revisará su confirmación junto con los detalles de su solicitud.",
      "How would you like to contact?": "¿Cómo desea contactar?",
      "Call": "Llamar",
      "Text": "Enviar mensaje",
      "Cancel": "Cancelar"
    },
    zh: {
      "Private Property Manager": "私人物业经理",
      "Open navigation": "打开导航",
      "Main navigation": "主导航",
      "Language": "语言",
      "Navigation": "导航",
      "Home": "首页",
      "About": "关于",
      "Services": "服务",
      "Gallery": "图库",
      "Rental Process": "租赁流程",
      "Rental Process FAQ": "租赁流程常见问题",
      "Contact": "联系",
      "Get in touch": "取得联系",
      "Request Consultation": "申请咨询",
      "Apply Now": "立即申请",
      "Back": "返回",
      "Back to Application": "返回申请",
      "TenantFirst Management": "TenantFirst Management",
      "Professional and transparent rental coordination for applicants": "面向申请人的专业透明租赁协调",
      "Professional Photo Coming Soon": "专业照片即将推出",
      "Professional rental support designed to make the leasing process organized, transparent, and efficient.": "专业租赁支持，旨在让租赁流程有序、透明且高效。",
      "Tenant Screening & Application Review": "租户筛选与申请审核",
      "Rental Listing & Marketing Support": "租赁房源发布与营销支持",
      "Lease Coordination": "租约协调",
      "Scheduling Property Tours": "安排房源参观",
      "Managing Rental Inquiries & Tenant Communication": "管理租赁咨询与租户沟通",
      "Guiding Applicants Through The Approval Process": "指导申请人完成审批流程",
      "Lifestyle gallery": "生活方式图库",
      "Community & Moments": "社区与时刻",
      "A closer look at the lifestyle, comfort, and community experience.": "近距离感受生活方式、舒适度与社区体验。",
      "Previous image": "上一张图片",
      "Next image": "下一张图片",
      "Gallery navigation": "图库导航",
      "Privately managed rentals": "私人管理租赁",
      "Quality rental homes with a simple and transparent application process.": "优质出租住宅，申请流程简单透明。",
      "TenantFirst Management offers privately managed rental homes focused on transparency, responsive communication, and a smooth leasing experience.": "TenantFirst Management 提供私人管理的出租住宅，注重透明沟通、及时回应和顺畅的租赁体验。",
      "Secure Application Processing": "安全申请处理",
      "Applications are securely processed through Zillow Rental Manager in partnership with the property owner.": "申请通过 Zillow Rental Manager 与业主合作进行安全处理。",
      "Meet TenantFirst Management": "关于 TenantFirst Management",
      "TenantFirst Management is a dedicated property manager focused on providing organized, transparent, and professional rental support for property owners and prospective tenants.": "TenantFirst Management 是一位专注的物业经理，致力于为业主和潜在租户提供有条理、透明且专业的租赁支持。",
      "TenantFirst Management works closely with applicants throughout the rental process, helping them understand requirements, schedule property tours, and move through each step with clarity and confidence.": "TenantFirst Management 在整个租赁过程中与申请人密切合作，帮助他们了解申请要求、安排看房，并清晰自信地完成每一步。",
      "With a strong emphasis on communication, reliability, and professionalism, TenantFirst Management is committed to making the leasing experience smooth, well structured, and respectful for everyone involved.": "TenantFirst Management 高度重视沟通、可靠性和专业精神，致力于为所有相关人员营造顺畅、有序且相互尊重的租赁体验。",
      "HOA Logo": "HOA 标志",
      "Community & HOA Guidelines Respected": "尊重社区与 HOA 指南",
      "Rental process": "租赁流程",
      "Simple next steps": "简单的后续步骤",
      "Inquire About a Listing": "咨询租赁房源",
      "Review available property information before applying.": "申请前请查看可用的房源信息。",
      "Submit Application": "提交申请",
      "Complete the secure rental application form.": "填写安全的租赁申请表。",
      "Refundable Application Fee": "可退还申请费",
      "Application fees are refundable if the application is not approved or the applicant chooses not to move forward after the tour.": "如果申请未获批准，或申请人在看房后选择不继续，申请费可退还。",
      "Next Steps": "下一步",
      "Qualified applicants will receive updates, tour scheduling, and further instructions.": "符合条件的申请人将收到更新、看房安排和进一步说明。",
      "Rental application questions": "租赁申请问题",
      "How do I apply for a rental?": "如何申请租房？",
      "You can apply directly through the secure rental application form on this website.": "您可以直接通过本网站的安全租赁申请表申请。",
      "Is there an application fee?": "是否有申请费？",
      "Yes. A refundable application fee may apply after submitting the application.": "是的。提交申请后可能会收取可退还申请费。",
      "Yes, there is a refundable application fee of $75, which is paid through Chime after your application is submitted.": "是的，有一笔 75 美元的可退还申请费，需在提交申请后通过 Chime 支付。",
      "Are listings always available?": "房源是否始终可用？",
      "Availability may change at any time depending on current occupancy and application status.": "可租情况可能随当前入住和申请状态随时变化。",
      "How will I be contacted?": "会如何联系我？",
      "Applicants are typically contacted using the phone number or email provided in the application form.": "通常会使用申请表中提供的电话或电子邮件联系申请人。",
      "Request guidance regarding availability, application steps, move-in timing, or general rental questions before proceeding.": "在采取下一步行动前，您可就可租情况、申请步骤、入住时间及其他租赁相关问题寻求指导。",
      "Property Manager": "物业经理",
      "Direct Contact": "直接联系",
      "For rental inquiries or application support, contact TenantFirst Management directly.": "如有关于租赁事宜或申请表协助的事项，请直接联系 TenantFirst Management。",
      "If you have questions regarding the application process, please contact TenantFirst Management directly.": "如对申请流程有任何疑问，请直接联系 TenantFirst Management。",
      "Email TenantFirst Management": "向 TenantFirst Management 发送电子邮件",
      "Call TenantFirst Management": "致电 TenantFirst Management",
      "© 2026 TenantFirst Management": "© 2026 TenantFirst Management",
      "© 2026 TenantFirst Management.": "© 2026 TenantFirst Management",
      "Secure rental application": "安全租赁申请",
      "Rental Application Form": "租赁申请表",
      "Rental Application": "租赁申请",
      "Complete the form below to begin your application process.": "请填写以下表格以开始您的申请流程。",
      "Please complete this form accurately. All information provided will remain confidential and is required solely for the rental application approval process. Each adult (18+) applying to live in the unit must complete a separate application.": "请准确填写此表。所有提供的信息都将保持保密，仅用于租赁申请审批流程。每位申请入住该单元的成年人（18岁及以上）都必须单独填写一份申请。",
      "This is a privately managed rental. All applications are reviewed directly by the property owner. No third-party agents are involved.": "这是私人管理的出租房。所有申请均由业主直接审核，不涉及第三方代理。",
      "This is a privately managed rental. All applications are reviewed directly by the property owner.": "这是私人管理的出租房。所有申请均由业主直接审核。",
      "Equal Housing Opportunity": "公平住房机会",
      "Secure SSL Encrypted Application": "SSL 加密安全申请",
      "Application Process Supported Through Zillow Rental Manager": "申请流程由 Zillow Rental Manager 提供支持",
      "Applications are securely submitted through Zillow Rental Manager in partnership with the property owner. No outside leasing agents are involved.": "申请通过 Zillow Rental Manager 与业主合作安全提交，不涉及外部租赁代理。",
      "Property Information": "房源信息",
      "Property applying for": "申请的房源",
      "Enter property address or listing name": "请输入房源地址或房源名称",
      "Select a property": "选择房源",
      "Desired move-in date": "期望入住日期",
      "Applicant Information": "申请人信息",
      "Full legal name": "法定全名",
      "Email address": "电子邮件",
      "Phone number": "电话号码",
      "Date of birth": "出生日期",
      "Residency History": "居住历史",
      "Current address": "当前地址",
      "Current landlord or manager": "当前房东或经理",
      "Landlord phone number": "房东电话",
      "How long have you lived there?": "您在那里住了多久？",
      "Employment & Income": "就业与收入",
      "Employer or income source": "雇主或收入来源",
      "Job title": "职位",
      "Gross monthly income": "税前月收入",
      "Employer phone number": "雇主电话",
      "Employer name": "雇主名称",
      "Enter employer or company name": "请输入雇主或公司名称",
      "Background Questions": "背景问题",
      "Have you ever been evicted?": "您是否曾被驱逐？",
      "Select an answer": "选择答案",
      "No": "否",
      "Yes": "是",
      "Have you filed bankruptcy in the last 7 years?": "过去 7 年内您是否申请过破产？",
      "If yes to any question, please explain": "如有任何问题回答是，请说明",
      "Additional Information": "其他信息",
      "Additional occupants": "其他住户",
      "Pets": "宠物",
      "Anything else you would like to share?": "还有其他想说明的吗？",
      "Emergency Contact": "紧急联系人",
      "Emergency contact name": "紧急联系人姓名",
      "Emergency contact phone": "紧急联系人电话",
      "Relationship": "关系",
      "Agreement": "确认",
      "I certify that the information provided is true and complete to the best of my knowledge.": "我确认所提供的信息据我所知真实且完整。",
      "Application received": "申请已收到",
      "Thank you. Your application has been submitted.": "谢谢。您的申请已提交。",
      "Your application is marked as received. Please watch your email or phone for updates from TenantFirst Management about review status, tour scheduling, or next-step instructions.": "您的申请已标记为收到。请留意电子邮件或电话，TenantFirst Management 将提供审核状态、看房安排或下一步说明。",
      "Status: Received": "状态：已收到",
      "Applications are reviewed directly by the property owner. You will be contacted if more information is needed.": "申请由业主直接审核。如需更多信息，将与您联系。",
      "Secure processing note": "安全处理说明",
      "Application details may be processed through Zillow Rental Manager in partnership with the property owner.": "申请详情可能通过 Zillow Rental Manager 与业主合作处理。",
      "Return Home": "返回首页",
      "Contact TenantFirst Management": "联系 TenantFirst Management",
      "Example: 2 years": "例如：2 年",
      "Names and relationship to applicant": "姓名及与申请人的关系",
      "Type, breed": "类型、品种",
      "Type, breed, weight, and age": "类型、品种、体重和年龄",
      "Submitting...": "正在提交...",
      "Submitting securely...": "正在安全提交...",
      "Application submitted. Redirecting...": "申请已提交。正在跳转...",
      "Submitted. Redirecting...": "已提交。正在跳转...",
      "Something went wrong. Please try again.": "出现问题。请重试。",
      "How would you like to contact?": "您希望如何联系？",
      "Call": "拨打电话",
      "Text": "发送短信",
      "Cancel": "取消"
    },
    fr: {
      "Private Property Manager": "Gestionnaire privé de propriétés",
      "TenantFirst Management home": "Accueil TenantFirst Management",
      "Open navigation": "Ouvrir la navigation",
      "Main navigation": "Navigation principale",
      "Language": "Langue",
      "Language selector": "Sélecteur de langue",
      "Select language": "Sélectionner la langue",
      "Navigation": "Navigation",
      "Page navigation": "Navigation de page",
      "Home": "Accueil",
      "About": "À propos",
      "Services": "Services",
      "Gallery": "Galerie",
      "Rental Process": "Processus de location",
      "Rental Process FAQ": "FAQ — processus de location",
      "Contact": "Contact",
      "Get in touch": "Nous contacter",
      "Request Consultation": "Demander une consultation",
      "Apply Now": "Postuler Maintenant",
      "Back": "Retour",
      "Back to Application": "Retour à la demande",
      "TenantFirst Management": "TenantFirst Management",
      "Professional and transparent rental coordination for applicants": "Coordination locative professionnelle et transparente pour les candidats",
      "Professional Photo Coming Soon": "Photo professionnelle à venir",
      "Professional rental support designed to make the leasing process organized, transparent, and efficient.": "Un accompagnement locatif professionnel conçu pour rendre le processus organisé, transparent et efficace.",
      "Tenant Screening & Application Review": "Sélection des locataires et examen des demandes",
      "Rental Listing & Marketing Support": "Soutien aux annonces locatives et au marketing",
      "Lease Coordination": "Coordination du bail",
      "Scheduling Property Tours": "Planification des visites du bien",
      "Managing Rental Inquiries & Tenant Communication": "Gestion des demandes locatives et communication avec les locataires",
      "Guiding Applicants Through The Approval Process": "Accompagnement des candidats pendant le processus d’approbation",
      "Lifestyle gallery": "Galerie de style de vie",
      "Community & Moments": "Communauté et moments",
      "A closer look at the lifestyle, comfort, and community experience.": "Un aperçu plus proche du style de vie, du confort et de l’expérience communautaire.",
      "Previous image": "Image précédente",
      "Next image": "Image suivante",
      "Gallery navigation": "Navigation de la galerie",
      "Privately managed rentals": "Locations gérées en privé",
      "Quality rental homes with a simple and transparent application process.": "Des logements locatifs de qualité avec un processus de demande simple et transparent.",
      "TenantFirst Management offers privately managed rental homes focused on transparency, responsive communication, and a smooth leasing experience.": "TenantFirst Management propose des logements locatifs gérés en privé, avec transparence, communication réactive et expérience de location fluide.",
      "Secure Application Processing": "Traitement sécurisé des demandes",
      "Applications are securely processed through Zillow Rental Manager in partnership with the property owner.": "Les demandes sont traitées de manière sécurisée via Zillow Rental Manager en partenariat avec la propriétaire.",
      "Meet TenantFirst Management": "À propos de TenantFirst Management",
      "TenantFirst Management is a dedicated property manager focused on providing organized, transparent, and professional rental support for property owners and prospective tenants.": "TenantFirst Management est un gestionnaire privé de propriétés dévoué, axé sur un accompagnement locatif organisé, transparent et professionnel pour les propriétaires comme pour les futurs locataires.",
      "TenantFirst Management works closely with applicants throughout the rental process, helping them understand requirements, schedule property tours, and move through each step with clarity and confidence.": "TenantFirst Management travaille étroitement avec les candidats tout au long du processus de location, les aidant à comprendre les exigences de demande, à planifier les visites et à avancer à chaque étape avec clarté et confiance.",
      "With a strong emphasis on communication, reliability, and professionalism, TenantFirst Management is committed to making the leasing experience smooth, well structured, and respectful for everyone involved.": "Avec une forte priorité donnée à la communication, à la fiabilité et au professionnalisme, TenantFirst Management s’engage à créer une expérience de location fluide, bien structurée et respectueuse pour toutes les personnes impliquées.",
      "HOA Logo": "Logo HOA",
      "Community & HOA Guidelines Respected": "Directives de la communauté et de la HOA respectées",
      "Rental process": "Processus de location",
      "Simple next steps": "Étapes simples",
      "Inquire About a Listing": "Demander des renseignements sur une annonce",
      "Review available property information before applying.": "Consultez les informations disponibles sur le bien avant de postuler.",
      "Submit Application": "Envoyer la demande",
      "Complete the secure rental application form.": "Remplissez le formulaire sécurisé de demande de location.",
      "Refundable Application Fee": "Frais de demande remboursables",
      "Application fees are refundable if the application is not approved or the applicant chooses not to move forward after the tour.": "Les frais de demande sont remboursables si la demande n’est pas approuvée ou si le candidat choisit de ne pas poursuivre après la visite.",
      "Next Steps": "Étapes suivantes",
      "Qualified applicants will receive updates, tour scheduling, and further instructions.": "Les candidats qualifiés recevront des mises à jour, la planification de visite et des instructions supplémentaires.",
      "Rental application questions": "Questions sur la demande de location",
      "How do I apply for a rental?": "Comment postuler pour une location ?",
      "You can apply directly through the secure rental application form on this website.": "Vous pouvez postuler directement via le formulaire sécurisé de ce site.",
      "Is there an application fee?": "Y a-t-il des frais de demande ?",
      "Yes. A refundable application fee may apply after submitting the application.": "Oui. Des frais de demande remboursables peuvent s’appliquer après l’envoi de la demande.",
      "Yes, there is a refundable application fee of $75, which is paid through Chime after your application is submitted.": "Oui, il y a des frais de demande remboursables de 75 $, payés via Chime après l’envoi de votre demande.",
      "Are listings always available?": "Les annonces sont-elles toujours disponibles ?",
      "Availability may change at any time depending on current occupancy and application status.": "La disponibilité peut changer à tout moment selon l’occupation actuelle et l’état des demandes.",
      "How will I be contacted?": "Comment serai-je contacté ?",
      "Applicants are typically contacted using the phone number or email provided in the application form.": "Les candidats sont généralement contactés au numéro de téléphone ou à l’adresse e-mail fournis dans le formulaire.",
      "Request guidance regarding availability, application steps, move-in timing, or general rental questions before proceeding.": "Demandez des précisions concernant les disponibilités, les étapes de candidature, le calendrier d’emménagement ou vos questions générales sur la location avant de poursuivre.",
      "Property Manager": "Gestionnaire de propriétés",
      "Direct Contact": "Contact direct",
      "For rental inquiries or application support, contact TenantFirst Management directly.": "Pour toute demande liée à la location ou au dossier de candidature, vous pouvez contacter TenantFirst Management directement.",
      "If you have questions regarding the application process, please contact TenantFirst Management directly.": "Pour toute question sur le déroulement de la candidature, veuillez contacter TenantFirst Management directement.",
      "Email TenantFirst Management": "Envoyer un e-mail à TenantFirst Management",
      "Call TenantFirst Management": "Appeler TenantFirst Management",
      "© 2026 TenantFirst Management": "© 2026 TenantFirst Management",
      "© 2026 TenantFirst Management.": "© 2026 TenantFirst Management",
      "Secure rental application": "Demande de location sécurisée",
      "Rental Application Form": "Formulaire de demande de location",
      "Rental Application": "Demande de location",
      "Complete the form below to begin your application process.": "Remplissez le formulaire ci-dessous pour commencer votre processus de demande.",
      "Please complete this form accurately. All information provided will remain confidential and is required solely for the rental application approval process. Each adult (18+) applying to live in the unit must complete a separate application.": "Veuillez remplir ce formulaire avec précision. Toutes les informations fournies resteront confidentielles et sont requises uniquement pour le processus d’approbation de la demande de location. Chaque adulte (18 ans et plus) souhaitant vivre dans le logement doit remplir une demande distincte.",
      "This is a privately managed rental. All applications are reviewed directly by the property owner. No third-party agents are involved.": "Il s’agit d’une location gérée en privé. Toutes les demandes sont examinées directement par la propriétaire. Aucun agent tiers n’intervient.",
      "This is a privately managed rental. All applications are reviewed directly by the property owner.": "Il s’agit d’une location gérée en privé. Toutes les demandes sont examinées directement par la propriétaire.",
      "Equal Housing Opportunity": "Égalité d’accès au logement",
      "Equal Housing Opportunity Logo": "Logo égalité d’accès au logement",
      "Secure SSL Encrypted Application": "Demande sécurisée chiffrée SSL",
      "Application Process Supported Through Zillow Rental Manager": "Processus de candidature pris en charge via Zillow Rental Manager",
      "Zillow Rental Manager application support indicator": "Indicateur de prise en charge par Zillow Rental Manager",
      "Applications are securely submitted through Zillow Rental Manager in partnership with the property owner. No outside leasing agents are involved.": "Les demandes sont envoyées en toute sécurité via Zillow Rental Manager en partenariat avec la propriétaire. Aucun agent de location externe n’intervient.",
      "Property Information": "Informations sur le bien",
      "Property applying for": "Bien demandé",
      "Enter property address or listing name": "Indiquez l’adresse du bien ou le nom de l’annonce",
      "Select a property": "Sélectionner un bien",
      "Desired move-in date": "Date d’emménagement souhaitée",
      "Applicant Information": "Informations du candidat",
      "Full legal name": "Nom légal complet",
      "Email address": "Adresse e-mail",
      "Phone number": "Numéro de téléphone",
      "Date of birth": "Date de naissance",
      "Residency History": "Historique de résidence",
      "Current address": "Adresse actuelle",
      "Current landlord or manager": "Propriétaire ou gestionnaire actuel",
      "Landlord phone number": "Téléphone du propriétaire",
      "How long have you lived there?": "Depuis combien de temps y habitez-vous ?",
      "Employment & Income": "Emploi et revenus",
      "Employer or income source": "Employeur ou source de revenus",
      "Job title": "Poste",
      "Gross monthly income": "Revenu mensuel brut",
      "Employer phone number": "Téléphone de l’employeur",
      "Employer name": "Nom de l’employeur",
      "Enter employer or company name": "Indiquez le nom de l’employeur ou de l’entreprise",
      "Background Questions": "Questions d’antécédents",
      "Have you ever been evicted?": "Avez-vous déjà été expulsé ?",
      "Select an answer": "Sélectionner une réponse",
      "No": "Non",
      "Yes": "Oui",
      "Have you filed bankruptcy in the last 7 years?": "Avez-vous déclaré faillite au cours des 7 dernières années ?",
      "If yes to any question, please explain": "Si oui à une question, veuillez expliquer",
      "Additional Information": "Informations supplémentaires",
      "Additional occupants": "Occupants supplémentaires",
      "Pets": "Animaux",
      "Anything else you would like to share?": "Souhaitez-vous ajouter autre chose ?",
      "Emergency Contact": "Contact d’urgence",
      "Emergency contact name": "Nom du contact d’urgence",
      "Emergency contact phone": "Téléphone du contact d’urgence",
      "Relationship": "Relation",
      "Agreement": "Attestation",
      "I certify that the information provided is true and complete to the best of my knowledge.": "Je certifie que les informations fournies sont vraies et complètes à ma connaissance.",
      "Application received": "Demande reçue",
      "Thank you. Your application has been submitted.": "Merci. Votre demande a été envoyée.",
      "Your application is marked as received. Please watch your email or phone for updates from TenantFirst Management about review status, tour scheduling, or next-step instructions.": "Votre demande est marquée comme reçue. Surveillez votre e-mail ou téléphone pour les mises à jour de TenantFirst Management concernant l’examen, les visites ou les prochaines étapes.",
      "Status: Received": "Statut : reçue",
      "Applications are reviewed directly by the property owner. You will be contacted if more information is needed.": "Les demandes sont examinées directement par la propriétaire. Vous serez contacté si des informations supplémentaires sont nécessaires.",
      "Secure processing note": "Note de traitement sécurisé",
      "Application details may be processed through Zillow Rental Manager in partnership with the property owner.": "Les détails de la demande peuvent être traités via Zillow Rental Manager en partenariat avec la propriétaire.",
      "Return Home": "Retour à l’accueil",
      "Contact TenantFirst Management": "Contacter TenantFirst Management",
      "Example: 2 years": "Exemple : 2 ans",
      "Names and relationship to applicant": "Noms et relation avec le candidat",
      "Type, breed": "Type, race",
      "Type, breed, weight, and age": "Type, race, poids et âge",
      "Submitting...": "Envoi en cours...",
      "Submitting securely...": "Envoi sécurisé en cours...",
      "Application submitted. Redirecting...": "Demande envoyée. Redirection...",
      "Submitted. Redirecting...": "Envoyée. Redirection...",
      "Something went wrong. Please try again.": "Une erreur est survenue. Veuillez réessayer.",
      "How would you like to contact?": "Comment souhaitez-vous contacter ?",
      "Call": "Appeler",
      "Text": "Envoyer un SMS",
      "Cancel": "Annuler"
    },
    pt: {
      "Private Property Manager": "Administrador Privado de Propriedades",
      "Open navigation": "Abrir navegação",
      "Main navigation": "Navegação principal",
      "Language": "Idioma",
      "Navigation": "Navegação",
      "Home": "Início",
      "About": "Sobre",
      "Services": "Serviços",
      "Gallery": "Galeria",
      "Rental Process": "Processo de aluguel",
      "Rental Process FAQ": "FAQ do processo de aluguel",
      "Contact": "Contato",
      "Get in touch": "Entre em contato",
      "Request Consultation": "Solicitar consulta",
      "Apply Now": "Aplicar Agora",
      "Back": "Voltar",
      "TenantFirst Management": "TenantFirst Management",
      "Professional and transparent rental coordination for applicants": "Coordenação de aluguel profissional e transparente para candidatos",
      "Professional Photo Coming Soon": "Foto profissional em breve",
      "Professional rental support designed to make the leasing process organized, transparent, and efficient.": "Suporte profissional de aluguel projetado para tornar o processo de locação organizado, transparente e eficiente.",
      "Tenant Screening & Application Review": "Triagem de inquilinos e análise de solicitações",
      "Rental Listing & Marketing Support": "Suporte para anúncios e marketing de aluguel",
      "Lease Coordination": "Coordenação de contrato de locação",
      "Scheduling Property Tours": "Agendamento de visitas ao imóvel",
      "Managing Rental Inquiries & Tenant Communication": "Gestão de consultas de aluguel e comunicação com inquilinos",
      "Guiding Applicants Through The Approval Process": "Orientação aos candidatos durante o processo de aprovação",
      "Lifestyle gallery": "Galeria de estilo de vida",
      "Community & Moments": "Comunidade e momentos",
      "A closer look at the lifestyle, comfort, and community experience.": "Um olhar mais próximo sobre o estilo de vida, o conforto e a experiência da comunidade.",
      "Previous image": "Imagem anterior",
      "Next image": "Próxima imagem",
      "Gallery navigation": "Navegação da galeria",
      "Privately managed rentals": "Aluguéis administrados de forma privada",
      "Quality rental homes with a simple and transparent application process.": "Imóveis de aluguel de qualidade com um processo de solicitação simples e transparente.",
      "TenantFirst Management offers privately managed rental homes focused on transparency, responsive communication, and a smooth leasing experience.": "TenantFirst Management oferece imóveis de aluguel administrados de forma privada, com foco em transparência, comunicação rápida e uma experiência de locação tranquila.",
      "Secure Application Processing": "Processamento seguro de solicitações",
      "Applications are securely processed through Zillow Rental Manager in partnership with the property owner.": "As solicitações são processadas com segurança pelo Zillow Rental Manager em parceria com a proprietária.",
      "Meet TenantFirst Management": "Sobre TenantFirst Management",
      "TenantFirst Management is a dedicated property manager focused on providing organized, transparent, and professional rental support for property owners and prospective tenants.": "TenantFirst Management é um administrador privado de propriedades dedicado a oferecer suporte de aluguel organizado, transparente e profissional para proprietários e possíveis inquilinos.",
      "TenantFirst Management works closely with applicants throughout the rental process, helping them understand requirements, schedule property tours, and move through each step with clarity and confidence.": "TenantFirst Management trabalha de perto com os candidatos durante todo o processo de locação, ajudando-os a entender os requisitos da solicitação, agendar visitas ao imóvel e avançar em cada etapa com clareza e confiança.",
      "With a strong emphasis on communication, reliability, and professionalism, TenantFirst Management is committed to making the leasing experience smooth, well structured, and respectful for everyone involved.": "Com forte ênfase em comunicação, confiabilidade e profissionalismo, TenantFirst Management se compromete a criar uma experiência de aluguel tranquila, bem estruturada e respeitosa para todos os envolvidos.",
      "HOA Logo": "Logo HOA",
      "Community & HOA Guidelines Respected": "Diretrizes da comunidade e da HOA respeitadas",
      "Rental process": "Processo de aluguel",
      "Simple next steps": "Próximos passos simples",
      "Inquire About a Listing": "Perguntar sobre um anúncio de aluguel",
      "Review available property information before applying.": "Revise as informações disponíveis do imóvel antes de aplicar.",
      "Submit Application": "Enviar solicitação",
      "Complete the secure rental application form.": "Preencha o formulário seguro de solicitação de aluguel.",
      "Refundable Application Fee": "Taxa de solicitação reembolsável",
      "Application fees are refundable if the application is not approved or the applicant chooses not to move forward after the tour.": "As taxas de solicitação são reembolsáveis se a solicitação não for aprovada ou se o candidato decidir não continuar após a visita.",
      "Next Steps": "Próximos passos",
      "Qualified applicants will receive updates, tour scheduling, and further instructions.": "Candidatos qualificados receberão atualizações, agendamento de visita e instruções adicionais.",
      "Rental application questions": "Perguntas sobre a solicitação de aluguel",
      "How do I apply for a rental?": "Como aplico para um aluguel?",
      "You can apply directly through the secure rental application form on this website.": "Você pode aplicar diretamente pelo formulário seguro de solicitação de aluguel neste site.",
      "Is there an application fee?": "Há uma taxa de solicitação?",
      "Yes. A refundable application fee may apply after submitting the application.": "Sim. Uma taxa de solicitação reembolsável pode ser aplicada após o envio.",
      "Yes, there is a refundable application fee of $75, which is paid through Chime after your application is submitted.": "Sim, há uma taxa de solicitação reembolsável de US$ 75, paga pelo Chime após o envio da solicitação.",
      "Are listings always available?": "Os imóveis estão sempre disponíveis?",
      "Availability may change at any time depending on current occupancy and application status.": "A disponibilidade pode mudar a qualquer momento conforme a ocupação atual e o status das solicitações.",
      "How will I be contacted?": "Como entraremos em contato?",
      "Applicants are typically contacted using the phone number or email provided in the application form.": "Os candidatos geralmente são contatados pelo telefone ou e-mail informado no formulário.",
      "Request guidance regarding availability, application steps, move-in timing, or general rental questions before proceeding.": "Solicite orientação sobre disponibilidade, etapas da candidatura, datas de mudança ou perguntas gerais sobre o aluguel antes de prosseguir.",
      "Property Manager": "Gestora de propriedades",
      "Direct Contact": "Contato direto",
      "For rental inquiries or application support, contact TenantFirst Management directly.": "Para dúvidas sobre aluguel ou apoio com sua candidatura, entre em contato diretamente com TenantFirst Management.",
      "If you have questions regarding the application process, please contact TenantFirst Management directly.": "Em caso de dúvidas sobre o processo de solicitação, entre em contato diretamente com TenantFirst Management.",
      "Email TenantFirst Management": "Enviar e-mail para TenantFirst Management",
      "Call TenantFirst Management": "Ligar para TenantFirst Management",
      "© 2026 TenantFirst Management": "© 2026 TenantFirst Management",
      "© 2026 TenantFirst Management.": "© 2026 TenantFirst Management",
      "Secure rental application": "Solicitação segura de aluguel",
      "Rental Application Form": "Formulário de Solicitação de Aluguel",
      "Rental Application": "Solicitação de aluguel",
      "Complete the form below to begin your application process.": "Preencha o formulário abaixo para iniciar seu processo de solicitação.",
      "Please complete this form accurately. All information provided will remain confidential and is required solely for the rental application approval process. Each adult (18+) applying to live in the unit must complete a separate application.": "Preencha este formulário com precisão. Todas as informações fornecidas permanecerão confidenciais e são necessárias exclusivamente para o processo de aprovação da solicitação de aluguel. Cada adulto (18+) que se candidatar para morar na unidade deve preencher uma solicitação separada.",
      "This is a privately managed rental. All applications are reviewed directly by the property owner. No third-party agents are involved.": "Este é um aluguel administrado de forma privada. Todas as solicitações são analisadas diretamente pela proprietária. Não há agentes terceiros envolvidos.",
      "This is a privately managed rental. All applications are reviewed directly by the property owner.": "Este é um aluguel administrado de forma privada. Todas as solicitações são analisadas diretamente pela proprietária.",
      "Equal Housing Opportunity": "Igualdade de oportunidade de moradia",
      "Secure SSL Encrypted Application": "Solicitação segura com criptografia SSL",
      "Application Process Supported Through Zillow Rental Manager": "Processo de solicitação apoiado pelo Zillow Rental Manager",
      "Applications are securely submitted through Zillow Rental Manager in partnership with the property owner. No outside leasing agents are involved.": "As solicitações são enviadas com segurança pelo Zillow Rental Manager em parceria com a proprietária. Não há agentes de locação externos envolvidos.",
      "Property Information": "Informações do imóvel",
      "Property applying for": "Imóvel para o qual aplica",
      "Enter property address or listing name": "Informe o endereço do imóvel ou o nome do anúncio",
      "Select a property": "Selecione um imóvel",
      "Desired move-in date": "Data desejada de mudança",
      "Applicant Information": "Informações do candidato",
      "Full legal name": "Nome legal completo",
      "Email address": "E-mail",
      "Phone number": "Telefone",
      "Date of birth": "Data de nascimento",
      "Residency History": "Histórico de residência",
      "Current address": "Endereço atual",
      "Current landlord or manager": "Proprietário ou administrador atual",
      "Landlord phone number": "Telefone do proprietário",
      "How long have you lived there?": "Há quanto tempo você mora lá?",
      "Employment & Income": "Emprego e renda",
      "Employer or income source": "Empregador ou fonte de renda",
      "Job title": "Cargo",
      "Gross monthly income": "Renda mensal bruta",
      "Employer phone number": "Telefone do empregador",
      "Employer name": "Nome do empregador",
      "Enter employer or company name": "Informe o nome do empregador ou da empresa",
      "Background Questions": "Perguntas de antecedentes",
      "Have you ever been evicted?": "Você já foi despejado?",
      "Select an answer": "Selecione uma resposta",
      "No": "Não",
      "Yes": "Sim",
      "Have you filed bankruptcy in the last 7 years?": "Você declarou falência nos últimos 7 anos?",
      "If yes to any question, please explain": "Se respondeu sim a alguma pergunta, explique",
      "Additional Information": "Informações adicionais",
      "Additional occupants": "Ocupantes adicionais",
      "Pets": "Animais de estimação",
      "Anything else you would like to share?": "Há mais algo que deseja compartilhar?",
      "Emergency Contact": "Contato de emergência",
      "Emergency contact name": "Nome do contato de emergência",
      "Emergency contact phone": "Telefone do contato de emergência",
      "Relationship": "Relação",
      "Agreement": "Declaração",
      "I certify that the information provided is true and complete to the best of my knowledge.": "Certifico que as informações fornecidas são verdadeiras e completas conforme meu conhecimento.",
      "Read more": "Ler mais",
      "Show less": "Mostrar menos",
      "Application progress overview": "Visão geral do progresso da solicitação",
      "Application": "Solicitação",
      "Review": "Análise",
      "Payment": "Pagamento",
      "Others": "Outros",
      "Final step agreement": "Acordo da etapa final",
      "Chime, America's #1 Choice for Banking": "Chime, a escolha nº 1 da América para serviços bancários",
      "Before you submit": "Antes de enviar",
      "Certification & Acknowledgment": "Certificação e reconhecimento",
      "Application certification": "Certificação da solicitação",
      "Fee & next steps": "Taxa e próximos passos",
      "I have read and agree to the statements above.": "Li e concordo com as declarações acima.",
      "Privacy & Data Processing Consent": "Consentimento de privacidade e processamento de dados",
      "View Privacy Notice": "Ver aviso de privacidade",
      "Payment method for the fee": "Método de pagamento da taxa",
      "Application received": "Solicitação recebida",
      "Thank you. Your application has been submitted.": "Obrigado. Sua solicitação foi enviada.",
      "Your application is marked as received. Please watch your email or phone for updates from TenantFirst Management about review status, tour scheduling, or next-step instructions.": "Sua solicitação foi marcada como recebida. Verifique seu e-mail ou telefone para atualizações de TenantFirst Management sobre análise, visitas ou próximos passos.",
      "Status: Received": "Status: recebida",
      "Applications are reviewed directly by the property owner. You will be contacted if more information is needed.": "As solicitações são analisadas diretamente pela proprietária. Você será contatado se forem necessárias mais informações.",
      "Secure processing note": "Nota de processamento seguro",
      "Application details may be processed through Zillow Rental Manager in partnership with the property owner.": "Os detalhes da solicitação podem ser processados pelo Zillow Rental Manager em parceria com a proprietária.",
      "Return Home": "Voltar ao início",
      "Contact TenantFirst Management": "Contatar TenantFirst Management",
      "Example: 2 years": "Exemplo: 2 anos",
      "Names and relationship to applicant": "Nomes e relação com o candidato",
      "Type, breed": "Tipo, raça",
      "Type, breed, weight, and age": "Tipo, raça, peso e idade",
      "Submitting...": "Enviando...",
      "Submitting securely...": "Enviando com segurança...",
      "Application submitted. Redirecting...": "Solicitação enviada. Redirecionando...",
      "Submitted. Redirecting...": "Enviada. Redirecionando...",
      "Something went wrong. Please try again.": "Algo deu errado. Tente novamente.",
      "How would you like to contact?": "Como você gostaria de entrar em contato?",
      "Call": "Ligar",
      "Text": "Enviar mensagem",
      "Cancel": "Cancelar"
    },
    ar: {
      "Private Property Manager": "مدير عقارات خاص",
      "TenantFirst Management home": "الصفحة الرئيسية لـ TenantFirst Management",
      "Open navigation": "فتح التنقل",
      "Main navigation": "التنقل الرئيسي",
      "Language": "اللغة",
      "Language selector": "محدد اللغة",
      "Select language": "اختيار اللغة",
      "Navigation": "التنقل",
      "Page navigation": "تنقل الصفحة",
      "Home": "الرئيسية",
      "About": "نبذة",
      "Services": "الخدمات",
      "Gallery": "المعرض",
      "Rental Process": "عملية الإيجار",
      "Rental Process FAQ": "الأسئلة الشائعة عن عملية الإيجار",
      "Contact": "اتصال",
      "Get in touch": "تواصل معنا",
      "Request Consultation": "طلب استشارة",
      "Apply Now": "قدم الآن",
      "Back": "رجوع",
      "Back to Application": "العودة إلى الطلب",
      "TenantFirst Management": "TenantFirst Management",
      "Professional and transparent rental coordination for applicants": "تنسيق إيجار مهني وشفاف للمتقدمين",
      "Professional Photo Coming Soon": "الصورة المهنية قريباً",
      "Professional rental support designed to make the leasing process organized, transparent, and efficient.": "دعم إيجار مهني مصمم لجعل عملية التأجير منظمة وشفافة وفعالة.",
      "Tenant Screening & Application Review": "فحص المستأجرين ومراجعة الطلبات",
      "Rental Listing & Marketing Support": "دعم إدراج وتسويق الإيجارات",
      "Lease Coordination": "تنسيق عقد الإيجار",
      "Scheduling Property Tours": "جدولة جولات العقار",
      "Managing Rental Inquiries & Tenant Communication": "إدارة استفسارات الإيجار والتواصل مع المستأجرين",
      "Guiding Applicants Through The Approval Process": "إرشاد المتقدمين خلال عملية الموافقة",
      "Lifestyle gallery": "معرض نمط الحياة",
      "Community & Moments": "المجتمع واللحظات",
      "A closer look at the lifestyle, comfort, and community experience.": "نظرة أقرب على نمط الحياة والراحة وتجربة المجتمع.",
      "Previous image": "الصورة السابقة",
      "Next image": "الصورة التالية",
      "Gallery navigation": "تنقل المعرض",
      "Privately managed rentals": "إيجارات بإدارة خاصة",
      "Quality rental homes with a simple and transparent application process.": "منازل إيجار عالية الجودة مع عملية تقديم بسيطة وشفافة.",
      "TenantFirst Management offers privately managed rental homes focused on transparency, responsive communication, and a smooth leasing experience.": "تقدم TenantFirst Management منازل إيجار بإدارة خاصة تركز على الشفافية والتواصل السريع وتجربة تأجير سلسة.",
      "Secure Application Processing": "معالجة آمنة للطلبات",
      "Applications are securely processed through Zillow Rental Manager in partnership with the property owner.": "تتم معالجة الطلبات بأمان عبر Zillow Rental Manager بالشراكة مع مالكة العقار.",
      "Meet TenantFirst Management": "نبذة عن TenantFirst Management",
      "TenantFirst Management is a dedicated property manager focused on providing organized, transparent, and professional rental support for property owners and prospective tenants.": "TenantFirst Management مدير عقارات خاص متفانٍ يركز على تقديم دعم إيجاري منظم وشفاف ومهني لكل من مالكي العقارات والمستأجرين المحتملين.",
      "TenantFirst Management works closely with applicants throughout the rental process, helping them understand requirements, schedule property tours, and move through each step with clarity and confidence.": "TenantFirst Management يعمل عن قرب مع المتقدمين طوال عملية التأجير، ويساعدهم على فهم متطلبات الطلب وجدولة جولات العقار والتنقل في كل خطوة بوضوح وثقة.",
      "With a strong emphasis on communication, reliability, and professionalism, TenantFirst Management is committed to making the leasing experience smooth, well structured, and respectful for everyone involved.": "مع تركيز قوي على التواصل والموثوقية والمهنية، تلتزم TenantFirst Management بخلق تجربة إيجار سلسة ومنظمة ومحترمة لجميع الأطراف.",
      "HOA Logo": "شعار HOA",
      "Community & HOA Guidelines Respected": "احترام إرشادات المجتمع و HOA",
      "Rental process": "عملية الإيجار",
      "Simple next steps": "خطوات تالية بسيطة",
      "Inquire About a Listing": "الاستفسار عن إعلان إيجار",
      "Review available property information before applying.": "راجع معلومات العقار المتاحة قبل التقديم.",
      "Submit Application": "إرسال الطلب",
      "Complete the secure rental application form.": "أكمل نموذج طلب الإيجار الآمن.",
      "Refundable Application Fee": "رسوم طلب قابلة للاسترداد",
      "Application fees are refundable if the application is not approved or the applicant chooses not to move forward after the tour.": "رسوم الطلب قابلة للاسترداد إذا لم تتم الموافقة على الطلب أو إذا اختار المتقدم عدم المتابعة بعد الجولة.",
      "Next Steps": "الخطوات التالية",
      "Qualified applicants will receive updates, tour scheduling, and further instructions.": "سيتلقى المتقدمون المؤهلون تحديثات وجدولة للجولة وتعليمات إضافية.",
      "Rental application questions": "أسئلة طلب الإيجار",
      "How do I apply for a rental?": "كيف أقدم على إيجار؟",
      "You can apply directly through the secure rental application form on this website.": "يمكنك التقديم مباشرة عبر نموذج طلب الإيجار الآمن على هذا الموقع.",
      "Is there an application fee?": "هل توجد رسوم طلب؟",
      "Yes. A refundable application fee may apply after submitting the application.": "نعم. قد تطبق رسوم طلب قابلة للاسترداد بعد إرسال الطلب.",
      "Yes, there is a refundable application fee of $75, which is paid through Chime after your application is submitted.": "نعم، توجد رسوم طلب قابلة للاسترداد بقيمة 75 دولارًا، وتُدفع عبر Chime بعد إرسال طلبك.",
      "Are listings always available?": "هل القوائم متاحة دائماً؟",
      "Availability may change at any time depending on current occupancy and application status.": "قد يتغير التوافر في أي وقت حسب الإشغال الحالي وحالة الطلبات.",
      "How will I be contacted?": "كيف سيتم التواصل معي؟",
      "Applicants are typically contacted using the phone number or email provided in the application form.": "عادة يتم التواصل مع المتقدمين عبر رقم الهاتف أو البريد الإلكتروني المقدم في نموذج الطلب.",
      "Request guidance regarding availability, application steps, move-in timing, or general rental questions before proceeding.": "اطلب الإرشاد بشأن التوفّر أو خطوات الطلب أو مواعيد الانتقال أو أي استفسارات عامة حول الإيجار قبل المتابعة.",
      "Property Manager": "مدير عقاري",
      "Direct Contact": "تواصل مباشر",
      "For rental inquiries or application support, contact TenantFirst Management directly.": "للاستفسارات عن الإيجار أو الدعم بخصوص الطلب، يمكنكم التواصل مع TenantFirst Management مباشرةً.",
      "If you have questions regarding the application process, please contact TenantFirst Management directly.": "إذا كان لديكم أي أسئلة بشأن عملية التقديم، يُرجى التواصل مباشرةً مع TenantFirst Management.",
      "Email TenantFirst Management": "مراسلة TenantFirst Management عبر البريد الإلكتروني",
      "Call TenantFirst Management": "الاتصال بـ TenantFirst Management",
      "© 2026 TenantFirst Management": "© 2026 TenantFirst Management",
      "© 2026 TenantFirst Management.": "© 2026 TenantFirst Management",
      "Secure rental application": "طلب إيجار آمن",
      "Rental Application Form": "نموذج طلب الإيجار",
      "Rental Application": "طلب الإيجار",
      "Complete the form below to begin your application process.": "أكمل النموذج أدناه لبدء عملية تقديم طلبك.",
      "Please complete this form accurately. All information provided will remain confidential and is required solely for the rental application approval process. Each adult (18+) applying to live in the unit must complete a separate application.": "يرجى إكمال هذا النموذج بدقة. ستبقى جميع المعلومات المقدمة سرية وهي مطلوبة فقط لعملية الموافقة على طلب الإيجار. يجب على كل بالغ (18+) يتقدم للسكن في الوحدة إكمال طلب منفصل.",
      "This is a privately managed rental. All applications are reviewed directly by the property owner. No third-party agents are involved.": "هذا إيجار بإدارة خاصة. تتم مراجعة جميع الطلبات مباشرة من مالكة العقار. لا يشارك أي وكلاء من طرف ثالث.",
      "This is a privately managed rental. All applications are reviewed directly by the property owner.": "هذا إيجار بإدارة خاصة. تتم مراجعة جميع الطلبات مباشرة من مالكة العقار.",
      "Equal Housing Opportunity": "فرص إسكان متكافئة",
      "Equal Housing Opportunity Logo": "شعار فرص الإسكان المتكافئة",
      "Secure SSL Encrypted Application": "طلب آمن ومشفّر عبر SSL",
      "Application Process Supported Through Zillow Rental Manager": "عملية الطلب مدعومة عبر Zillow Rental Manager",
      "Zillow Rental Manager application support indicator": "مؤشر دعم الطلب عبر Zillow Rental Manager",
      "Applications are securely submitted through Zillow Rental Manager in partnership with the property owner. No outside leasing agents are involved.": "يتم إرسال الطلبات بأمان عبر Zillow Rental Manager بالشراكة مع مالكة العقار. لا يشارك أي وكلاء تأجير خارجيين.",
      "Property Information": "معلومات العقار",
      "Property applying for": "العقار المتقدم له",
      "Enter property address or listing name": "أدخل عنوان العقار أو اسم الإعلان",
      "Select a property": "اختر عقاراً",
      "Desired move-in date": "تاريخ الانتقال المطلوب",
      "Applicant Information": "معلومات المتقدم",
      "Full legal name": "الاسم القانوني الكامل",
      "Email address": "البريد الإلكتروني",
      "Phone number": "رقم الهاتف",
      "Date of birth": "تاريخ الميلاد",
      "Residency History": "سجل السكن",
      "Current address": "العنوان الحالي",
      "Current landlord or manager": "المالك أو المدير الحالي",
      "Landlord phone number": "هاتف المالك",
      "How long have you lived there?": "منذ متى تعيش هناك؟",
      "Employment & Income": "العمل والدخل",
      "Employer or income source": "صاحب العمل أو مصدر الدخل",
      "Job title": "المسمى الوظيفي",
      "Gross monthly income": "الدخل الشهري الإجمالي",
      "Employer phone number": "هاتف صاحب العمل",
      "Employer name": "اسم صاحب العمل",
      "Enter employer or company name": "أدخل اسم صاحب العمل أو الشركة",
      "Background Questions": "أسئلة الخلفية",
      "Have you ever been evicted?": "هل سبق أن تم إخلاؤك؟",
      "Select an answer": "اختر إجابة",
      "No": "لا",
      "Yes": "نعم",
      "Have you filed bankruptcy in the last 7 years?": "هل أعلنت الإفلاس خلال السنوات السبع الماضية؟",
      "If yes to any question, please explain": "إذا كانت الإجابة نعم على أي سؤال، يرجى التوضيح",
      "Additional Information": "معلومات إضافية",
      "Additional occupants": "ساكنون إضافيون",
      "Pets": "حيوانات أليفة",
      "Anything else you would like to share?": "هل هناك شيء آخر ترغب في مشاركته؟",
      "Emergency Contact": "جهة اتصال للطوارئ",
      "Emergency contact name": "اسم جهة اتصال الطوارئ",
      "Emergency contact phone": "هاتف جهة اتصال الطوارئ",
      "Relationship": "العلاقة",
      "Agreement": "إقرار",
      "I certify that the information provided is true and complete to the best of my knowledge.": "أقر بأن المعلومات المقدمة صحيحة وكاملة حسب علمي.",
      "Application received": "تم استلام الطلب",
      "Thank you. Your application has been submitted.": "شكراً لك. تم إرسال طلبك.",
      "Your application is marked as received. Please watch your email or phone for updates from TenantFirst Management about review status, tour scheduling, or next-step instructions.": "تم وضع علامة على طلبك كطلب مستلم. يرجى متابعة بريدك الإلكتروني أو هاتفك للحصول على تحديثات من TenantFirst Management حول حالة المراجعة أو جدولة الجولة أو تعليمات الخطوة التالية.",
      "Status: Received": "الحالة: تم الاستلام",
      "Applications are reviewed directly by the property owner. You will be contacted if more information is needed.": "تتم مراجعة الطلبات مباشرة من مالكة العقار. سيتم التواصل معك إذا كانت هناك حاجة إلى مزيد من المعلومات.",
      "Secure processing note": "ملاحظة المعالجة الآمنة",
      "Application details may be processed through Zillow Rental Manager in partnership with the property owner.": "قد تتم معالجة تفاصيل الطلب عبر Zillow Rental Manager بالشراكة مع مالكة العقار.",
      "Return Home": "العودة للرئيسية",
      "Contact TenantFirst Management": "التواصل مع TenantFirst Management",
      "Example: 2 years": "مثال: سنتان",
      "Names and relationship to applicant": "الأسماء والعلاقة بالمتقدم",
      "Type, breed": "النوع والسلالة",
      "Type, breed, weight, and age": "النوع والسلالة والوزن والعمر",
      "Submitting...": "جارٍ الإرسال...",
      "Submitting securely...": "جارٍ الإرسال بأمان...",
      "Application submitted. Redirecting...": "تم إرسال الطلب. جارٍ التحويل...",
      "Submitted. Redirecting...": "تم الإرسال. جارٍ التحويل...",
      "Something went wrong. Please try again.": "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
      "How would you like to contact?": "كيف تود التواصل؟",
      "Call": "اتصال",
      "Text": "رسالة نصية",
      "Cancel": "إلغاء"
    }
  };

  const aliases = {
    "Administrador Privado de Propiedades": "Private Property Manager",
    "Abrir navegación": "Open navigation",
    "Navegación principal": "Main navigation",
    "Inicio de TenantFirst Management": "TenantFirst Management home",
    "Idioma": "Language",
    "Selector de idioma": "Language selector",
    "Seleccionar idioma": "Select language",
    "Navegación": "Navigation",
    "Navegación de página": "Page navigation",
    "Inicio": "Home",
    "Acerca de": "About",
    "Servicios": "Services",
    "Galería": "Gallery",
    "Proceso de alquiler": "Rental Process",
    "Preguntas del proceso de alquiler": "Rental Process FAQ",
    "Contacto": "Contact",
    "Solicitar consulta": "Request Consultation",
    "Aplicar Ahora": "Apply Now",
    "Volver": "Back",
    "Volver a la solicitud": "Back to Application",
    "TenantFirst Management": "TenantFirst Management",
    "Coordinación de alquiler profesional y transparente para solicitantes": "Professional and transparent rental coordination for applicants",
    "Foto profesional próximamente": "Professional Photo Coming Soon",
    "Apoyo profesional de alquiler diseñado para que el proceso de arrendamiento sea organizado, transparente y eficiente.": "Professional rental support designed to make the leasing process organized, transparent, and efficient.",
    "Revisión de solicitudes y evaluación de inquilinos": "Tenant Screening & Application Review",
    "Apoyo de publicación y marketing de alquileres": "Rental Listing & Marketing Support",
    "Coordinación de contrato de arrendamiento": "Lease Coordination",
    "Programación de visitas a la propiedad": "Scheduling Property Tours",
    "Gestión de consultas de alquiler y comunicación con inquilinos": "Managing Rental Inquiries & Tenant Communication",
    "Guía para solicitantes durante el proceso de aprobación": "Guiding Applicants Through The Approval Process",
    "Galería de estilo de vida": "Lifestyle gallery",
    "Comunidad y momentos": "Community & Moments",
    "Una mirada más cercana al estilo de vida, la comodidad y la experiencia comunitaria.": "A closer look at the lifestyle, comfort, and community experience.",
    "Imagen anterior": "Previous image",
    "Imagen siguiente": "Next image",
    "Navegación de galería": "Gallery navigation",
    "Alquileres administrados de forma privada": "Privately managed rentals",
    "Viviendas de alquiler de calidad con un proceso de solicitud simple y transparente.": "Quality rental homes with a simple and transparent application process.",
    "TenantFirst Management ofrece viviendas de alquiler administradas de forma privada, con enfoque en transparencia, comunicación receptiva y una experiencia de arrendamiento fluida.": "TenantFirst Management offers privately managed rental homes focused on transparency, responsive communication, and a smooth leasing experience.",
    "Procesamiento seguro de solicitudes": "Secure Application Processing",
    "Las solicitudes se procesan de forma segura mediante Zillow Rental Manager en colaboración con el propietario.": "Applications are securely processed through Zillow Rental Manager in partnership with the property owner.",
    "Conozca a TenantFirst Management": "Meet TenantFirst Management",
    "TenantFirst Management es un administrador de propiedades dedicado a brindar apoyo de alquiler organizado, transparente y profesional para propietarios y posibles inquilinos.": "TenantFirst Management is a dedicated property manager focused on providing organized, transparent, and professional rental support for property owners and prospective tenants.",
    "TenantFirst Management trabaja de cerca con los solicitantes durante todo el proceso de alquiler, ayudándoles a comprender los requisitos, programar visitas a la propiedad y avanzar en cada paso con claridad y confianza.": "TenantFirst Management works closely with applicants throughout the rental process, helping them understand requirements, schedule property tours, and move through each step with clarity and confidence.",
    "Con un fuerte énfasis en la comunicación, la confiabilidad y el profesionalismo, TenantFirst Management está comprometido a hacer que la experiencia de arrendamiento sea fluida, bien estructurada y respetuosa para todos los involucrados.": "With a strong emphasis on communication, reliability, and professionalism, TenantFirst Management is committed to making the leasing experience smooth, well structured, and respectful for everyone involved.",
    "Con un fuerte énfasis en la comunicación, la confiabilidad y el profesionalismo, TenantFirst Management está comprometido a hacer que la experiencia de arrendamiento sea fluida, bien estructurada y respetuosa para todos los involucrados.": "With a strong emphasis on communication, reliability, and professionalism, TenantFirst Management is committed to making the leasing experience smooth, well structured, and respectful for everyone involved.",
    "Logo HOA": "HOA Logo",
    "Se respetan las pautas de la comunidad y la HOA": "Community & HOA Guidelines Respected",
    "Siguientes pasos simples": "Simple next steps",
    "Consultar sobre un anuncio de alquiler": "Inquire About a Listing",
    "Revise la información disponible de la propiedad antes de aplicar.": "Review available property information before applying.",
    "Enviar Solicitud": "Submit Application",
    "Complete el formulario seguro de solicitud de alquiler.": "Complete the secure rental application form.",
    "Tarifa de solicitud reembolsable": "Refundable Application Fee",
    "Las tarifas de solicitud son reembolsables si la solicitud no es aprobada o si el solicitante decide no continuar después de la visita.": "Application fees are refundable if the application is not approved or the applicant chooses not to move forward after the tour.",
    "Siguientes pasos": "Next Steps",
    "Los solicitantes calificados recibirán actualizaciones, programación de visita e instrucciones adicionales.": "Qualified applicants will receive updates, tour scheduling, and further instructions.",
    "Preguntas frecuentes": "Rental Process FAQ",
    "Preguntas sobre la solicitud de alquiler": "Rental application questions",
    "¿Cómo aplico para un alquiler?": "How do I apply for a rental?",
    "Puede aplicar directamente mediante el formulario seguro de solicitud de alquiler en este sitio web.": "You can apply directly through the secure rental application form on this website.",
    "¿Hay una tarifa de solicitud?": "Is there an application fee?",
    "Sí. Puede aplicarse una tarifa de solicitud reembolsable después de enviar la solicitud.": "Yes. A refundable application fee may apply after submitting the application.",
    "¿Los listados siempre están disponibles?": "Are listings always available?",
    "La disponibilidad puede cambiar en cualquier momento según la ocupación actual y el estado de las solicitudes.": "Availability may change at any time depending on current occupancy and application status.",
    "¿Cómo me contactarán?": "How will I be contacted?",
    "Normalmente se contacta a los solicitantes usando el número de teléfono o correo electrónico proporcionado en el formulario.": "Applicants are typically contacted using the phone number or email provided in the application form.",
    "Solicite orientación sobre disponibilidad, pasos de la solicitud, calendario de mudanza u otras consultas relacionadas con el alquiler antes de continuar.": "Request guidance regarding availability, application steps, move-in timing, or general rental questions before proceeding.",
    "Administrador de propiedades": "Property Manager",
    "Contacto directo": "Direct Contact",
    "Para consultas sobre alquiler o apoyo con su solicitud, comuníquese directamente con TenantFirst Management.": "For rental inquiries or application support, contact TenantFirst Management directly.",
    "Si tiene preguntas sobre el proceso de solicitud, comuníquese directamente con TenantFirst Management.": "If you have questions regarding the application process, please contact TenantFirst Management directly.",
    "Enviar correo electrónico a TenantFirst Management": "Email TenantFirst Management",
    "Llamar a TenantFirst Management": "Call TenantFirst Management",
    "© 2026 TenantFirst Management. Alquileres administrados de forma privada.": "© 2026 TenantFirst Management",
    "© 2026 TenantFirst Management.": "© 2026 TenantFirst Management",
    "Solicitud segura de alquiler": "Secure rental application",
    "Formulario de Solicitud de Alquiler": "Rental Application Form",
    "Solicitud de alquiler": "Rental Application",
    "Complete este formulario con precisión. Toda la información proporcionada permanecerá confidencial y se requiere únicamente para el proceso de aprobación de la solicitud de alquiler. Cada adulto (18+) que solicite vivir en la unidad debe completar una solicitud por separado.": "Please complete this form accurately. All information provided will remain confidential and is required solely for the rental application approval process. Each adult (18+) applying to live in the unit must complete a separate application.",
    "Este es un alquiler administrado de forma privada. Todas las solicitudes son revisadas directamente por el propietario. No participan agentes externos.": "This is a privately managed rental. All applications are reviewed directly by the property owner. No third-party agents are involved.",
    "Este es un alquiler administrado de forma privada. Todas las solicitudes son revisadas directamente por el propietario.": "This is a privately managed rental. All applications are reviewed directly by the property owner.",
    "Igualdad de oportunidad de vivienda": "Equal Housing Opportunity",
    "Logo de Igualdad de Oportunidad de Vivienda": "Equal Housing Opportunity Logo",
    "Solicitud segura con cifrado SSL": "Secure SSL Encrypted Application",
    "Proceso de solicitud respaldado mediante Zillow Rental Manager": "Application Process Supported Through Zillow Rental Manager",
    "Indicador de respaldo de solicitudes con Zillow Rental Manager": "Zillow Rental Manager application support indicator",
    "Las solicitudes se envían de forma segura mediante Zillow Rental Manager en colaboración con el propietario. No participan agentes de arrendamiento externos.": "Applications are securely submitted through Zillow Rental Manager in partnership with the property owner. No outside leasing agents are involved.",
    "Información de la propiedad": "Property Information",
    "Propiedad para la que aplica": "Property applying for",
    "Ingrese la dirección o el nombre del anuncio": "Enter property address or listing name",
    "Seleccione una propiedad": "Select a property",
    "Fecha deseada de mudanza": "Desired move-in date",
    "Fecha de solicitud": "Date of Application",
    "duración del arrendamiento": "lease duration",
    "Elija la duración del arrendamiento": "choose lease duration",
    "Estatus de ciudadanía/residencia": "Citizenship/Residency Status",
    "Información del solicitante": "Applicant Information",
    "Nombre legal completo (nombre, segundo nombre, apellido)": "Full legal name (First, Middle, Last)",
    "Correo electrónico": "Email address",
    "Número móvil": "Mobile number",
    "Fecha de nacimiento": "Date of birth",
    "Historial de residencia": "Residency History",
    "Dirección actual (con fechas de residencia)": "Current Address (With Dates Of Residency)",
    "Dirección anterior": "Previous Address",
    "Propietario o administrador actual": "Current landlord or manager",
    "Teléfono del propietario o administrador": "Landlord phone number",
    "¿Cuánto tiempo ha vivido ahí?": "How long have you lived there?",
    "Empleo e ingresos": "Employment & Income",
    "Empleador actual": "Current Employer",
    "Puesto de trabajo": "Job title",
    "Ingreso mensual bruto": "Gross monthly income",
    "Teléfono del empleador": "Employer phone number",
    "Nombre del empleador": "Employer name",
    "Ingrese el nombre del empleador o empresa": "Enter employer or company name",
    "Preguntas de antecedentes": "Background Questions",
    "¿Alguna vez ha sido desalojado?": "Have you ever been evicted?",
    "Seleccione una respuesta": "Select an answer",
    "Sí": "Yes",
    "¿Ha declarado bancarrota en los últimos 7 años?": "Have you filed bankruptcy in the last 7 years?",
    "Si respondió sí a alguna pregunta, explique": "If yes to any question, please explain",
    "Información adicional": "Additional Information",
    "Ocupantes adicionales": "Additional occupants",
    "Mascotas": "Pets",
    "¿Algo más que desee compartir?": "Anything else you would like to share?",
    "Contacto de emergencia": "Emergency Contact",
    "Nombre del contacto de emergencia": "Emergency contact name",
    "Teléfono del contacto de emergencia": "Emergency contact phone",
    "Relación": "Relationship",
    "Acuerdo": "Agreement",
    "Certifico que la información proporcionada es verdadera y completa a mi leal saber y entender.": "I certify that the information provided is true and complete to the best of my knowledge.",
    "Solicitud recibida": "Application received",
    "Gracias. Su solicitud ha sido enviada.": "Thank you. Your application has been submitted.",
    "Su solicitud aparece como recibida. Revise su correo electrónico o teléfono para actualizaciones de TenantFirst Management sobre el estado de revisión, programación de visita o instrucciones de siguientes pasos.": "Your application is marked as received. Please watch your email or phone for updates from TenantFirst Management about review status, tour scheduling, or next-step instructions.",
    "Estado: Recibida": "Status: Received",
    "Estado de la solicitud": "Application status",
    "Las solicitudes son revisadas directamente por el propietario. Se le contactará si se necesita más información.": "Applications are reviewed directly by the property owner. You will be contacted if more information is needed.",
    "Nota de procesamiento seguro": "Secure processing note",
    "Los detalles de la solicitud pueden procesarse mediante Zillow Rental Manager en colaboración con el propietario.": "Application details may be processed through Zillow Rental Manager in partnership with the property owner.",
    "Volver al inicio": "Return Home",
    "Contactar a TenantFirst Management": "Contact TenantFirst Management",
    "Ejemplo: 2 años": "Example: 2 years",
    "Nombres y relación con el solicitante": "Names and relationship to applicant",
    "Tipo, raza": "Type, breed",
    "Tipo, raza, peso y edad": "Type, breed, weight, and age"
  };

  Object.assign(aliases, {
    "Administración de alquileres y apoyo de arrendamiento": "Rental Management & Leasing Support",
    "TenantFirst Management es un administrador de propiedades dedicado a brindar apoyo de alquiler organizado, transparente y profesional para propietarios y posibles inquilinos.": "TenantFirst Management is a dedicated property manager focused on providing organized, transparent, and professional rental support for property owners and prospective tenants.",
    "TenantFirst Management trabaja de cerca con los solicitantes durante todo el proceso de alquiler, ayudándoles a comprender los requisitos, programar visitas a la propiedad y avanzar en cada paso con claridad y confianza.": "TenantFirst Management works closely with applicants throughout the rental process, helping them understand requirements, schedule property tours, and move through each step with clarity and confidence.",
    "Con un fuerte énfasis en la comunicación, la confiabilidad y el profesionalismo, TenantFirst Management está comprometido a hacer que la experiencia de arrendamiento sea fluida, bien estructurada y respetuosa para todos los involucrados.": "With a strong emphasis on communication, reliability, and professionalism, TenantFirst Management is committed to making the leasing experience smooth, well structured, and respectful for everyone involved.",
    "Cómo funciona el proceso de alquiler": "How the Rental Process Works",
    "Comuníquese con nosotros sobre el alquiler que le interesa y confirme la disponibilidad antes de aplicar.": "Contact us about the rental you're interested in and confirm availability before applying.",
    "Revise cuidadosamente la información disponible de la propiedad antes de comenzar el proceso de solicitud.": "Review the available property information carefully before beginning the application process.",
    "Complete el formulario de solicitud de alquiler con información precisa.": "Complete the rental application form with accurate information.",
    "Su solicitud se revisa antes de asignar cualquier instrucción de pago específica.": "Your submission is reviewed before any application-specific payment instructions are assigned.",
    "Pago de tarifa de solicitud reembolsable": "Refundable Application Fee Payment",
    "Una tarifa de solicitud reembolsable es un pago que se le devolverá si su solicitud no es aprobada o si decide no continuar después de la visita.": "A refundable application fee is a payment that will be returned to you if your application is not approved or if you decide not to move forward after the tour.",
    "Los solicitantes calificados serán contactados con actualizaciones, detalles de la visita o instrucciones adicionales.": "Qualified applicants will be contacted with updates, tour details, or further instructions.",
    "Una mirada más cercana al entorno comunitario y la experiencia residencial.": "A closer look at the community setting and residential experience.",
    "Puede aplicar completando el formulario de solicitud de alquiler en este sitio web.": "You can apply by completing the rental application form on this website.",
    "Sí, puede aplicarse una tarifa de solicitud reembolsable después de la revisión. Las instrucciones de procesamiento de pago se asignan de forma privada y se proporcionan solo cuando su solicitud está lista para procesamiento.": "Yes, a refundable application fee may apply after review. Payment processing instructions are assigned privately and provided only when your application is ready for processing.",
    "No siempre. La disponibilidad de alquiler puede cambiar en cualquier momento.": "Not always. Rental availability may change at any time.",
    "¿Cómo me contactarán después de aplicar?": "How will I be contacted after applying?",
    "Normalmente se contacta a los solicitantes usando el correo electrónico o número de teléfono proporcionado en el formulario de solicitud.": "Applicants are typically contacted using the email address or phone number provided in the application form.",
    "Privado": "Private",
    "Solicitudes revisadas por el propietario": "Owner-reviewed applications",
    "Seguro": "Secure",
    "Procesamiento asistido por Zillow": "Zillow-assisted processing",
    "Claro": "Clear",
    "Actualizaciones directas de siguientes pasos": "Direct next-step updates"
  });

  const optionLabels = {
    en: ["English", "Español", "中文", "Français", "العربية"],
    es: ["English", "Español", "中文", "Français", "العربية"],
    zh: ["English", "Español", "中文", "Français", "العربية"],
    fr: ["English", "Español", "中文", "Français", "العربية"],
    ar: ["English", "Español", "中文", "Français", "العربية"]
  };

  const premiumTranslations = {
    es: {
      "How the Rental Process Works": "Cómo funciona el proceso de alquiler",
      "Review the available property information carefully before beginning the application process.": "Revise cuidadosamente la información disponible de la propiedad antes de comenzar el proceso de solicitud.",
      "Complete the rental application form with accurate information.": "Complete el formulario de solicitud de alquiler con información precisa.",
      "Refundable Application Fee Payment": "Pago de tarifa de solicitud reembolsable",
      "A refundable application fee is a payment that will be returned to you if your application is not approved or if you decide not to move forward after the tour.": "Una tarifa de solicitud reembolsable es un pago que se le devolverá si su solicitud no es aprobada o si decide no continuar después de la visita.",
      "Qualified applicants will be contacted with updates, tour details, or further instructions.": "Los solicitantes calificados serán contactados con actualizaciones, detalles de la visita o instrucciones adicionales.",
      "You can apply by completing the rental application form on this website.": "Puede aplicar completando el formulario de solicitud de alquiler en este sitio web.",
      "Yes, there is a refundable application fee of $75, which is paid through Chime after your application is submitted.": "Sí, hay una tarifa de solicitud reembolsable de $75, que se paga a través de Chime después de enviar su solicitud.",
      "Yes, a refundable application fee may apply after review. Payment processing instructions are assigned privately and provided only when your application is ready for processing.": "Sí, puede aplicarse una tarifa de solicitud reembolsable después de la revisión. Las instrucciones de procesamiento de pago se asignan de forma privada y se proporcionan solo cuando su solicitud está lista para procesamiento.",
      "Not always. Rental availability may change at any time.": "No siempre. La disponibilidad de alquiler puede cambiar en cualquier momento.",
      "How will I be contacted after applying?": "¿Cómo me contactarán después de aplicar?",
      "Applicants are typically contacted using the email address or phone number provided in the application form.": "Normalmente se contacta a los solicitantes usando el correo electrónico o número de teléfono proporcionado en el formulario de solicitud.",
      "Private": "Privado",
      "Owner-reviewed applications": "Solicitudes revisadas por el propietario",
      "Secure": "Seguro",
      "Zillow-assisted processing": "Procesamiento asistido por Zillow",
      "Clear": "Claro",
      "Direct next-step updates": "Actualizaciones directas de siguientes pasos",
      "TenantFirst Management delivers professional rental support for privately managed homes and prospective tenants, with a focus on consistency, transparency, and accountability at every stage of the leasing process.": "TenantFirst Management ofrece apoyo profesional de alquiler para viviendas administradas de forma privada y posibles inquilinos, con enfoque en consistencia, transparencia y responsabilidad en cada etapa del proceso de arrendamiento.",
      "From initial inquiries and scheduling to application guidance and communication, our approach is structured and service-oriented. We prioritize clear expectations, timely follow-through, and dependable coordination so both property owners and applicants experience a smooth, efficient, and respectful process.": "Desde consultas iniciales y programación hasta orientación en la solicitud y comunicación, nuestro enfoque es estructurado y orientado al servicio. Priorizamos expectativas claras, seguimiento oportuno y coordinación confiable para que propietarios y solicitantes tengan un proceso fluido, eficiente y respetuoso.",
      "Why work with TenantFirst Management": "Por qué trabajar con TenantFirst Management",
      "Why work with TenantFirst Management points": "Puntos sobre por qué trabajar con TenantFirst Management",
      "TenantFirst Management team group photo": "Foto grupal del equipo de TenantFirst Management",
      "Office team gathering and celebration moment": "Momento de reunión y celebración del equipo en la oficina",
      "Team members posing in office with flag display": "Miembros del equipo posando en la oficina con bandera",
      "Staff group photo in conference room": "Foto grupal del personal en sala de conferencias",
      "Professional and organized rental management process": "Proceso de administración de alquiler profesional y organizado",
      "Clear and transparent communication": "Comunicación clara y transparente",
      "Responsive support for applicants and inquiries": "Apoyo receptivo para solicitantes y consultas",
      "Reliable coordination between tenants and property owners": "Coordinación confiable entre inquilinos y propietarios",
      "A focus on professionalism and smooth leasing experiences": "Enfoque en profesionalismo y experiencias de arrendamiento fluidas",
      "Contact us about the rental you're interested in and confirm availability before applying.": "Comuníquese con nosotros sobre el alquiler que le interesa y confirme la disponibilidad antes de aplicar.",
      "Community trust badge": "Distintivo de confianza comunitaria",
    },
    zh: {
      "How the Rental Process Works": "租赁流程如何运作",
      "Review the available property information carefully before beginning the application process.": "开始申请前，请仔细查看可用的房源信息。",
      "Complete the rental application form with accurate information.": "请用准确的信息填写租赁申请表。",
      "Refundable Application Fee Payment": "可退还申请费付款",
      "A refundable application fee is a payment that will be returned to you if your application is not approved or if you decide not to move forward after the tour.": "可退还申请费是指如果您的申请未获批准，或您看房后决定不继续，该费用将退还给您。",
      "Qualified applicants will be contacted with updates, tour details, or further instructions.": "符合条件的申请人将收到更新、看房详情或进一步说明。",
      "You can apply by completing the rental application form on this website.": "您可以在本网站填写租赁申请表进行申请。",
      "Yes, there is a refundable application fee of $75, which is paid through Chime after your application is submitted.": "是的，有一笔 75 美元的可退还申请费，需在提交申请后通过 Chime 支付。",
      "Yes, a refundable application fee may apply after review. Payment processing instructions are assigned privately and provided only when your application is ready for processing.": "是的，审核后可能会收取可退还申请费。付款处理说明会私下分配，并且仅在您的申请准备进入处理阶段时提供。",
      "Not always. Rental availability may change at any time.": "不一定。出租房源可用情况可能随时变化。",
      "How will I be contacted after applying?": "申请后会如何联系我？",
      "Applicants are typically contacted using the email address or phone number provided in the application form.": "通常会使用申请表中提供的电子邮件地址或电话号码联系申请人。",
      "Private": "私人",
      "Owner-reviewed applications": "业主审核申请",
      "Secure": "安全",
      "Zillow-assisted processing": "Zillow 协助处理",
      "Clear": "清晰",
      "Direct next-step updates": "直接的后续更新",
      "TenantFirst Management delivers professional rental support for privately managed homes and prospective tenants, with a focus on consistency, transparency, and accountability at every stage of the leasing process.": "TenantFirst Management 为私人管理的房源和潜在租户提供专业租赁支持，在租赁流程的每个阶段都注重一致性、透明度和责任。",
      "From initial inquiries and scheduling to application guidance and communication, our approach is structured and service-oriented. We prioritize clear expectations, timely follow-through, and dependable coordination so both property owners and applicants experience a smooth, efficient, and respectful process.": "从初步咨询和预约到申请指导和沟通，我们的方式结构化且以服务为导向。我们优先确保期望清晰、及时跟进和可靠协调，让业主和申请人都能获得顺畅、高效且受尊重的体验。",
      "Why work with TenantFirst Management": "为何选择 TenantFirst Management",
      "Why work with TenantFirst Management points": "选择 TenantFirst Management 的要点",
      "TenantFirst Management team group photo": "TenantFirst Management 团队合影",
      "Office team gathering and celebration moment": "办公室团队聚会庆祝瞬间",
      "Team members posing in office with flag display": "团队成员在办公室与旗帜合影",
      "Staff group photo in conference room": "员工在会议室的合影",
      "Professional and organized rental management process": "专业且有条理的租赁管理流程",
      "Clear and transparent communication": "清晰透明的沟通",
      "Responsive support for applicants and inquiries": "为申请人和咨询提供及时支持",
      "Reliable coordination between tenants and property owners": "租户与业主之间的可靠协调",
      "A focus on professionalism and smooth leasing experiences": "注重专业性与顺畅的租赁体验",
      "Contact us about the rental you're interested in and confirm availability before applying.": "请联系我们咨询您感兴趣的房源，并在申请前确认可租情况。",
      "Community trust badge": "社区信任标识",
    },
    fr: {
      "How the Rental Process Works": "Comment fonctionne le processus de location",
      "Review the available property information carefully before beginning the application process.": "Consultez attentivement les informations disponibles sur le bien avant de commencer la demande.",
      "Complete the rental application form with accurate information.": "Remplissez le formulaire de demande de location avec des informations exactes.",
      "Refundable Application Fee Payment": "Paiement des frais de demande remboursables",
      "A refundable application fee is a payment that will be returned to you if your application is not approved or if you decide not to move forward after the tour.": "Des frais de demande remboursables sont un paiement qui vous sera retourné si votre demande n’est pas approuvée ou si vous décidez de ne pas poursuivre après la visite.",
      "Qualified applicants will be contacted with updates, tour details, or further instructions.": "Les candidats qualifiés seront contactés avec des mises à jour, les détails de visite ou des instructions supplémentaires.",
      "You can apply by completing the rental application form on this website.": "Vous pouvez postuler en remplissant le formulaire de demande de location sur ce site.",
      "Yes, there is a refundable application fee of $75, which is paid through Chime after your application is submitted.": "Oui, il y a des frais de demande remboursables de 75 $, payés via Chime après l’envoi de votre demande.",
      "Yes, a refundable application fee may apply after review. Payment processing instructions are assigned privately and provided only when your application is ready for processing.": "Oui, des frais de demande remboursables peuvent s’appliquer après examen. Les instructions de traitement du paiement sont attribuées en privé et fournies uniquement lorsque votre demande est prête à être traitée.",
      "Not always. Rental availability may change at any time.": "Pas toujours. La disponibilité des locations peut changer à tout moment.",
      "How will I be contacted after applying?": "Comment serai-je contacté après avoir postulé ?",
      "Applicants are typically contacted using the email address or phone number provided in the application form.": "Les candidats sont généralement contactés à l’adresse e-mail ou au numéro de téléphone fournis dans le formulaire.",
      "Private": "Privé",
      "Owner-reviewed applications": "Demandes examinées par la propriétaire",
      "Secure": "Sécurisé",
      "Zillow-assisted processing": "Traitement assisté par Zillow",
      "Clear": "Clair",
      "Direct next-step updates": "Mises à jour directes",
      "TenantFirst Management delivers professional rental support for privately managed homes and prospective tenants, with a focus on consistency, transparency, and accountability at every stage of the leasing process.": "TenantFirst Management offre un accompagnement locatif professionnel pour les logements gérés en privé et les candidats locataires, avec un accent sur la cohérence, la transparence et la responsabilité à chaque étape du processus de location.",
      "From initial inquiries and scheduling to application guidance and communication, our approach is structured and service-oriented. We prioritize clear expectations, timely follow-through, and dependable coordination so both property owners and applicants experience a smooth, efficient, and respectful process.": "Des premières demandes et la planification à l’accompagnement de la candidature et à la communication, notre approche est structurée et orientée service. Nous privilégions des attentes claires, un suivi rapide et une coordination fiable pour que propriétaires et candidats vivent un processus fluide, efficace et respectueux.",
      "Why work with TenantFirst Management": "Pourquoi travailler avec TenantFirst Management",
      "Why work with TenantFirst Management points": "Points sur TenantFirst Management",
      "TenantFirst Management team group photo": "Photo de groupe de l’équipe TenantFirst Management",
      "Office team gathering and celebration moment": "Moment de réunion et de célébration de l’équipe au bureau",
      "Team members posing in office with flag display": "Membres de l’équipe posant au bureau avec un drapeau",
      "Staff group photo in conference room": "Photo de groupe du personnel en salle de conférence",
      "Professional and organized rental management process": "Processus de gestion locative professionnel et organisé",
      "Clear and transparent communication": "Communication claire et transparente",
      "Responsive support for applicants and inquiries": "Assistance réactive pour les candidats et les demandes",
      "Reliable coordination between tenants and property owners": "Coordination fiable entre locataires et propriétaires",
      "A focus on professionalism and smooth leasing experiences": "Accent sur le professionnalisme et des expériences de location fluides",
      "Contact us about the rental you're interested in and confirm availability before applying.": "Contactez-nous au sujet de l’annonce qui vous intéresse et confirmez la disponibilité avant de postuler.",
      "Community trust badge": "Badge de confiance communautaire",
    },
    pt: {
      "How the Rental Process Works": "Como funciona o processo de aluguel",
      "Review the available property information carefully before beginning the application process.": "Revise cuidadosamente as informações disponíveis do imóvel antes de iniciar o processo de solicitação.",
      "Complete the rental application form with accurate information.": "Preencha o formulário de solicitação de aluguel com informações precisas.",
      "Refundable Application Fee Payment": "Pagamento da taxa de solicitação reembolsável",
      "A refundable application fee is a payment that will be returned to you if your application is not approved or if you decide not to move forward after the tour.": "Uma taxa de solicitação reembolsável é um pagamento que será devolvido se sua solicitação não for aprovada ou se você decidir não prosseguir após a visita.",
      "Qualified applicants will be contacted with updates, tour details, or further instructions.": "Candidatos qualificados serão contatados com atualizações, detalhes da visita ou instruções adicionais.",
      "You can apply by completing the rental application form on this website.": "Você pode aplicar preenchendo o formulário de solicitação de aluguel neste site.",
      "Yes, there is a refundable application fee of $75, which is paid through Chime after your application is submitted.": "Sim, há uma taxa de solicitação reembolsável de US$ 75, paga pelo Chime após o envio da solicitação.",
      "Yes, a refundable application fee may apply after review. Payment processing instructions are assigned privately and provided only when your application is ready for processing.": "Sim, uma taxa de solicitação reembolsável pode ser aplicada após a análise. As instruções de pagamento são atribuídas de forma privada quando sua solicitação estiver pronta para processamento.",
      "Not always. Rental availability may change at any time.": "Nem sempre. A disponibilidade de aluguel pode mudar a qualquer momento.",
      "How will I be contacted after applying?": "Como serei contatado após aplicar?",
      "Applicants are typically contacted using the email address or phone number provided in the application form.": "Os candidatos geralmente são contatados pelo e-mail ou telefone fornecido no formulário de solicitação.",
      "Private": "Privado",
      "Owner-reviewed applications": "Solicitações revisadas pela proprietária",
      "Secure": "Seguro",
      "Zillow-assisted processing": "Processamento assistido pelo Zillow",
      "Clear": "Claro",
      "Direct next-step updates": "Atualizações diretas dos próximos passos",
    },
    ar: {
      "How the Rental Process Works": "كيف تعمل عملية الإيجار",
      "Review the available property information carefully before beginning the application process.": "راجع معلومات العقار المتاحة بعناية قبل بدء عملية التقديم.",
      "Complete the rental application form with accurate information.": "أكمل نموذج طلب الإيجار بمعلومات دقيقة.",
      "Refundable Application Fee Payment": "دفع رسوم طلب قابلة للاسترداد",
      "A refundable application fee is a payment that will be returned to you if your application is not approved or if you decide not to move forward after the tour.": "رسوم الطلب القابلة للاسترداد هي دفعة ستعاد إليك إذا لم تتم الموافقة على طلبك أو إذا قررت عدم المتابعة بعد الجولة.",
      "Qualified applicants will be contacted with updates, tour details, or further instructions.": "سيتم التواصل مع المتقدمين المؤهلين بالتحديثات أو تفاصيل الجولة أو التعليمات الإضافية.",
      "You can apply by completing the rental application form on this website.": "يمكنك التقديم من خلال إكمال نموذج طلب الإيجار على هذا الموقع.",
      "Yes, there is a refundable application fee of $75, which is paid through Chime after your application is submitted.": "نعم، توجد رسوم طلب قابلة للاسترداد بقيمة 75 دولارًا، وتُدفع عبر Chime بعد إرسال طلبك.",
      "Yes, a refundable application fee may apply after review. Payment processing instructions are assigned privately and provided only when your application is ready for processing.": "نعم، قد تُطبق رسوم طلب قابلة للاسترداد بعد المراجعة. يتم تخصيص تعليمات معالجة الدفع بشكل خاص ولا تُقدم إلا عندما يصبح طلبك جاهزًا للمعالجة.",
      "Not always. Rental availability may change at any time.": "ليس دائماً. قد يتغير توافر الإيجار في أي وقت.",
      "How will I be contacted after applying?": "كيف سيتم التواصل معي بعد التقديم؟",
      "Applicants are typically contacted using the email address or phone number provided in the application form.": "عادة يتم التواصل مع المتقدمين عبر البريد الإلكتروني أو رقم الهاتف المقدم في نموذج الطلب.",
      "Private": "خاص",
      "Owner-reviewed applications": "طلبات تراجعها المالكة",
      "Secure": "آمن",
      "Zillow-assisted processing": "معالجة بمساعدة Zillow",
      "Clear": "واضح",
      "Direct next-step updates": "تحديثات مباشرة للخطوات التالية",
      "TenantFirst Management delivers professional rental support for privately managed homes and prospective tenants, with a focus on consistency, transparency, and accountability at every stage of the leasing process.": "توفر TenantFirst Management دعمًا إيجاريًا احترافيًا للمساكن المُدارة بشكل خاص وللمتقدمين المحتملين، مع التركيز على الاتساق والشفافية والمساءلة في كل مرحلة من مراحل عملية التأجير.",
      "From initial inquiries and scheduling to application guidance and communication, our approach is structured and service-oriented. We prioritize clear expectations, timely follow-through, and dependable coordination so both property owners and applicants experience a smooth, efficient, and respectful process.": "من الاستفسارات الأولية والجدولة إلى إرشاد الطلب والتواصل، نتبع نهجًا منظمًا وموجهًا للخدمة. نعطي الأولوية لتوقعات واضحة ومتابعة في الوقت المناسب وتنسيق موثوق حتى يحصل المالكون والمتقدمون على تجربة سلسة وفعالة ومحترمة.",
      "Why work with TenantFirst Management": "لماذا التعامل مع TenantFirst Management",
      "Why work with TenantFirst Management points": "نقاط حول العمل مع TenantFirst Management",
      "TenantFirst Management team group photo": "صورة جماعية لفريق TenantFirst Management",
      "Office team gathering and celebration moment": "لحظة تجمع واحتفال الفريق في المكتب",
      "Team members posing in office with flag display": "أعضاء الفريق في المكتب مع عرض للعلم",
      "Staff group photo in conference room": "صورة جماعية للموظفين في غرفة الاجتماعات",
      "Professional and organized rental management process": "عملية إدارة إيجار احترافية ومنظمة",
      "Clear and transparent communication": "تواصل واضح وشفاف",
      "Responsive support for applicants and inquiries": "دعم سريع للمتقدمين والاستفسارات",
      "Reliable coordination between tenants and property owners": "تنسيق موثوق بين المستأجرين ومالكي العقارات",
      "A focus on professionalism and smooth leasing experiences": "التركيز على الاحترافية وتجارب تأجير سلسة",
      "Contact us about the rental you're interested in and confirm availability before applying.": "تواصل معنا بخصوص الإيجار الذي يهمك وتأكد من التوفّر قبل التقديم.",
      "Community trust badge": "شارة ثقة المجتمع",
    }
  };

  Object.keys(premiumTranslations).forEach((language) => {
    Object.assign(translations[language], premiumTranslations[language]);
  });

  const polishTranslations = {
    es: {
      "Rental Management & Leasing Support": "Administración de alquileres y apoyo de arrendamiento",
      "TenantFirst Management is a dedicated property manager focused on providing organized, transparent, and professional rental support for property owners and prospective tenants.": "TenantFirst Management es un administrador de propiedades dedicado a brindar apoyo de alquiler organizado, transparente y profesional para propietarios y posibles inquilinos.",
      "TenantFirst Management works closely with applicants throughout the rental process, helping them understand requirements, schedule property tours, and move through each step with clarity and confidence.": "TenantFirst Management trabaja de cerca con los solicitantes durante todo el proceso de alquiler, ayudándoles a comprender los requisitos, programar visitas a la propiedad y avanzar en cada paso con claridad y confianza.",
      "With a strong emphasis on communication, reliability, and professionalism, TenantFirst Management is committed to making the leasing experience smooth, well structured, and respectful for everyone involved.": "Con un fuerte énfasis en la comunicación, la confiabilidad y el profesionalismo, TenantFirst Management está comprometido a hacer que la experiencia de arrendamiento sea fluida, bien estructurada y respetuosa para todos los involucrados.",
      "Contact us about the rental you're interested in and confirm availability before applying.": "Comuníquese con nosotros sobre el alquiler que le interesa y confirme la disponibilidad antes de aplicar.",
      "Your submission is reviewed before any application-specific payment instructions are assigned.": "Su solicitud se revisa antes de asignar cualquier instrucción de pago específica.",
      "A closer look at the community setting and residential experience.": "Una mirada más cercana al entorno comunitario y la experiencia residencial."
    },
    zh: {
      "Contact us about the rental you're interested in and confirm availability before applying.": "请联系我们咨询您感兴趣的房源，并在申请前确认可租情况。"
    },
    fr: {
      "Contact us about the rental you're interested in and confirm availability before applying.": "Contactez-nous au sujet de l’annonce qui vous intéresse et confirmez la disponibilité avant de postuler."
    },
    pt: {},
    ar: {
      "Contact us about the rental you're interested in and confirm availability before applying.": "تواصل معنا بخصوص الإيجار الذي يهمك وتأكد من التوفّر قبل التقديم."
    }
  };

  Object.keys(polishTranslations).forEach((language) => {
    Object.assign(translations[language], polishTranslations[language]);
  });

  const validationTranslations = {
    es: {
      "Please complete this required field.": "Complete este campo obligatorio.",
      "Please enter a valid email address.": "Ingrese una dirección de correo electrónico válida.",
      "Please check this box to continue.": "Marque esta casilla para continuar.",
      "Please enter a credit score between 100 and 800, or leave blank.": "Ingrese un puntaje de crédito entre 100 y 800, o déjelo en blanco."
    },
    zh: {
      "Please complete this required field.": "请填写此必填字段。",
      "Please enter a valid email address.": "请输入有效的电子邮件地址。",
      "Please check this box to continue.": "请勾选此框以继续。",
      "Please enter a credit score between 100 and 800, or leave blank.": "请输入 100 至 800 之间的信用评分，或留空。"
    },
    fr: {
      "Please complete this required field.": "Veuillez remplir ce champ obligatoire.",
      "Please enter a valid email address.": "Veuillez saisir une adresse e-mail valide.",
      "Please check this box to continue.": "Veuillez cocher cette case pour continuer.",
      "Please enter a credit score between 100 and 800, or leave blank.": "Saisissez un score de crédit entre 100 et 800, ou laissez le champ vide."
    },
    pt: {
      "Please complete this required field.": "Preencha este campo obrigatório.",
      "Please enter a valid email address.": "Informe um endereço de e-mail válido.",
      "Please check this box to continue.": "Marque esta caixa para continuar.",
      "Please enter a credit score between 100 and 800, or leave blank.": "Informe uma pontuação de crédito entre 100 e 800, ou deixe em branco."
    },
    ar: {
      "Please complete this required field.": "يرجى إكمال هذا الحقل المطلوب.",
      "Please enter a valid email address.": "يرجى إدخال عنوان بريد إلكتروني صالح.",
      "Please check this box to continue.": "يرجى تحديد هذا المربع للمتابعة.",
      "Please enter a credit score between 100 and 800, or leave blank.": "يرجى إدخال درجة ائتمان بين 100 و800، أو ترك الحقل فارغًا."
    }
  };

  Object.keys(validationTranslations).forEach((language) => {
    Object.assign(translations[language], validationTranslations[language]);
  });

  const postFlowTranslations = {
    es: {
      "Submission Received": "Solicitud recibida",
      "Application Received Successfully": "Solicitud recibida correctamente",
      "Thank you for completing your rental application. Your information has been received successfully and is currently pending review.": "Gracias por completar su solicitud de alquiler. Su información se recibió correctamente y está pendiente de revisión.",
      "Thank you for your rental application.": "Gracias por su solicitud de alquiler.",
      "A confirmation email has been sent to you.": "Se le ha enviado un correo de confirmación.",
      "A confirmation email has been sent to you at": "Se le ha enviado un correo de confirmación a",
      "Please note that a refundable $75 application fee is required before the approval process can begin.": "Tenga en cuenta que se requiere una tarifa de solicitud reembolsable de $75 antes de que pueda comenzar el proceso de aprobación.",
      "Once the payment has been confirmed, your application review and approval process will officially commence.": "Una vez confirmado el pago, comenzará oficialmente el proceso de revisión y aprobación de su solicitud.",
      "Your application is currently pending review by the property management team.": "Su solicitud está actualmente pendiente de revisión por parte del equipo de administración de la propiedad.",
      "For security and verification purposes, payment instructions are assigned individually after review and will be provided once your application is ready for processing.": "Por motivos de seguridad y verificación, las instrucciones de pago se asignan individualmente después de la revisión y se proporcionarán cuando su solicitud esté lista para procesamiento.",
      "Application ID:": "ID de solicitud:",
      "Refundable application fee": "Tarifa de solicitud reembolsable",
      "I understand that a refundable $75 application fee is required to proceed with the application process.": "Entiendo que se requiere una tarifa de solicitud reembolsable de $75 para continuar con el proceso de solicitud.",
      "Continue to Payment Instructions": "Continuar a las instrucciones de pago",
      "Payment Instructions": "Instrucciones de pago",
      "Payment & Next Steps": "Pago y siguientes pasos",
      "Application Fee & Next Steps": "Tarifa de solicitud y siguientes pasos",
      "Thank you for confirming that you are ready to proceed with the refundable application fee. The steps below explain what happens next.": "Gracias por confirmar que está listo para continuar con la tarifa de solicitud reembolsable. Los pasos a continuación explican qué sucede a continuación.",
      "Fee overview": "Resumen de la tarifa",
      "A refundable $75 application fee is required before your application can move into the formal review and approval process.": "Se requiere una tarifa de solicitud reembolsable de $75 antes de que su solicitud pueda pasar al proceso formal de revisión y aprobación.",
      "Payment instructions": "Instrucciones de pago",
      "Your assigned payment instructions will be provided directly for this application. Use only the method and details linked to your Application ID.": "Sus instrucciones de pago asignadas se proporcionarán directamente para esta solicitud. Use solo el método y los detalles vinculados a su ID de solicitud.",
      "Submit payment confirmation": "Enviar confirmación de pago",
      "After you complete payment, you may be asked to upload a confirmation screenshot or send verification using the contact details provided with your instructions.": "Después de completar el pago, se le puede pedir que suba una captura de pantalla de confirmación o envíe verificación usando los datos de contacto proporcionados con sus instrucciones.",
      "Review begins after confirmation": "La revisión comienza después de la confirmación",
      "Once payment is confirmed, your application review and approval process will officially begin. Watch your email for updates from the property management team.": "Una vez confirmado el pago, comenzará oficialmente el proceso de revisión y aprobación de su solicitud. Revise su correo electrónico para actualizaciones del equipo de administración de la propiedad.",
      "If you have not received payment instructions yet, please wait for direct contact before sending any payment. Instructions are provided individually for security and verification.": "Si aún no ha recibido instrucciones de pago, espere contacto directo antes de enviar cualquier pago. Las instrucciones se proporcionan individualmente por seguridad y verificación.",
      "Back to Application Received": "Volver a solicitud recibida",
      "Email Confirmation": "Confirmación por correo electrónico",
      "Application Review In Progress": "Solicitud en revisión",
      "Application Under Review": "Solicitud en revisión",
      "Pending Review": "Revisión pendiente",
      "Our team is currently reviewing your submission. Once your application is ready for processing, assigned payment instructions and next steps will be provided directly.": "Nuestro equipo está revisando su envío. Una vez que su solicitud esté lista para procesamiento, se le proporcionarán directamente las instrucciones de pago asignadas y los siguientes pasos.",
      "Estimated Review Timeline": "Tiempo estimado de revisión",
      "Most application reviews are completed within 24 to 48 hours. If additional verification is needed, the property management team will contact you using the email address or phone number provided in your application.": "La mayoría de las revisiones de solicitud se completan dentro de 24 a 48 horas. Si se necesita verificación adicional, el equipo de administración de la propiedad se comunicará con usted usando el correo electrónico o número de teléfono proporcionado en su solicitud.",
      "A confirmation email will be sent shortly to the email address provided in your application. That email will confirm that your application has been received and is pending review.": "Pronto se enviará un correo de confirmación a la dirección proporcionada en su solicitud. Ese correo confirmará que su solicitud fue recibida y está pendiente de revisión.",
      "Secure & Verified Process": "Proceso seguro y verificado",
      "This application process is handled directly by the property management team. All submitted applications are reviewed carefully, and application-specific payment details are assigned privately as part of the verification process.": "Este proceso de solicitud es gestionado directamente por el equipo de administración de la propiedad. Todas las solicitudes enviadas se revisan cuidadosamente, y los detalles de pago específicos de cada solicitud se asignan de forma privada como parte del proceso de verificación.",
      "Fee Transparency": "Transparencia de tarifas",
      "The application fee is refundable if your application is not approved or if you decide not to proceed after the tour. If approved and you choose to move forward, the fee is applied toward your first month's rent.": "La tarifa de solicitud es reembolsable si su solicitud no es aprobada o si decide no continuar después de la visita. Si se aprueba y decide seguir adelante, la tarifa se aplica al primer mes de renta.",
      "Assigned Payment Instructions": "Instrucciones de pago asignadas",
      "Payment Options:": "Método de pago:",
      "Assigned Privately:": "Asignado de forma privada:",
      "Payment Details:": "Detalles de pago:",
      "Application Fee:": "Tarifa de solicitud:",
      "Verification Note:": "Nota de referencia:",
      "Provide a screenshot of the payment confirmation via email or text.": "Proporcione una captura de pantalla de la confirmación de pago por correo electrónico o mensaje de texto.",
      "Do not send payment until assigned processing instructions are provided directly. Keep your payment confirmation for your records.": "No envíe ningún pago hasta que se le proporcionen instrucciones de procesamiento asignadas directamente. Conserve su confirmación para sus registros.",
      "I have completed the application fee payment": "He recibido instrucciones de pago asignadas",
      "Continue To Payment Confirmation": "Continuar a la confirmación de pago",
      "Payment Options Are Assigned Privately": "Opciones de pago asignadas de forma privada",
      "Available payment options are confirmed individually after application review.": "Las opciones disponibles se confirmarán individualmente después de la revisión de la solicitud.",
      "Download on the": "Descárguelo en",
      "Get it on": "Disponible en",
      "Before Sending Payment": "Antes de enviar un pago",
      "Wait for assigned processing instructions.": "Haga clic en el enlace de App Store o Google Play anterior.",
      "Confirm the instructions match your application.": "Verifique que las instrucciones correspondan a su solicitud.",
      "Use only the payment method assigned directly to you.": "Abra la aplicación y elija crear una cuenta nueva.",
      "Include your Application ID when requested.": "Ingrese sus datos personales y complete el proceso de registro.",
      "Keep your payment confirmation for your records.": "Verifique su identidad si la aplicación se lo solicita.",
      "Upload confirmation only after completing the assigned payment.": "Cuando su cuenta esté lista, regrese a esta página y use los datos de pago proporcionados.",
      "Need Help or Want to Verify?": "¿Necesita ayuda o desea verificar?",
      "For any questions, clarification, or verification regarding the application process, you can contact TenantFirst Management directly using the information below.": "Para preguntas, aclaraciones o verificación sobre el proceso de solicitud, puede contactar directamente a TenantFirst Management usando la información siguiente.",
      "Email:": "Correo electrónico:",
      "Phone:": "Teléfono:",
      "You can also review the main property management website for additional information.": "También puede revisar el sitio principal de administración de propiedades para obtener información adicional.",
      "We support fair and equal housing practices for all applicants in accordance with applicable housing guidelines and nondiscrimination standards.": "Apoyamos prácticas de vivienda justas e igualitarias para todos los solicitantes, de acuerdo con las pautas de vivienda aplicables y las normas contra la discriminación.",
      "Payment Verification Upload": "Subir verificación de pago",
      "This page is used for applicants who have already received assigned payment instructions. Upload your payment confirmation only after your application-specific payment details have been provided directly.": "Esta página se usa para solicitantes que ya recibieron instrucciones de pago asignadas. Suba su confirmación de pago solo después de que se le hayan proporcionado directamente los detalles de pago específicos de su solicitud.",
      "Applicant details": "Datos del solicitante",
      "Full Name": "Nombre completo",
      "Email Address": "Correo electrónico",
      "Application ID (optional)": "ID de solicitud (opcional)",
      "Tap to upload": "Toque para subir",
      "or drag and drop your payment confirmation screenshot here.": "o arrastre y suelte aquí la captura de pantalla de confirmación de pago.",
      "JPG, JPEG or PNG only": "Solo JPG, JPEG o PNG",
      "Selected File": "Archivo seleccionado",
      "Submit Payment Verification": "Enviar verificación de pago",
      "Prefer Email Verification?": "¿Prefiere verificación por correo?",
      "If you have already received assigned payment instructions and would prefer to email your payment confirmation instead, send it directly to TenantFirst Management for private verification.": "Si ya recibió instrucciones de pago asignadas y prefiere enviar su confirmación de pago por correo, envíela directamente a TenantFirst Management para verificación privada.",
      "Send Email Verification": "Enviar verificación por correo",
      "Payment Verification Submitted": "Verificación de pago enviada",
      "Your payment confirmation screenshot has been received for private verification. TenantFirst Management will review it with your Application ID and assigned payment processing instructions.": "Su captura de pantalla de confirmación de pago fue recibida para verificación privada. TenantFirst Management la revisará con su ID de solicitud y las instrucciones de procesamiento de pago asignadas.",
      "Please select a payment screenshot before submitting.": "Seleccione una captura de pantalla del pago antes de enviar.",
      "Please upload a JPG, JPEG, or PNG file.": "Suba un archivo JPG, JPEG o PNG.",
      "File size must be less than 10MB.": "El archivo debe pesar menos de 10 MB.",
      "Remove": "Quitar"
    },
    fr: {
      "Submission Received": "Demande reçue",
      "Application Received Successfully": "Demande reçue avec succès",
      "Thank you for completing your rental application. Your information has been received successfully and is currently pending review.": "Merci d’avoir rempli votre demande de location. Vos informations ont bien été reçues et sont actuellement en cours d’examen.",
      "Application ID:": "ID de demande :",
      "Refundable application fee": "Frais de demande remboursables",
      "I understand that a refundable $75 application fee is required to proceed with the application process.": "Je comprends que des frais de demande remboursables de 75 $ sont requis pour poursuivre le processus de demande.",
      "Continue to Payment Instructions": "Continuer vers les instructions de paiement",
      "Payment Instructions": "Instructions de paiement",
      "Payment & Next Steps": "Paiement et prochaines étapes",
      "Application Fee & Next Steps": "Frais de demande et prochaines étapes",
      "Thank you for confirming that you are ready to proceed with the refundable application fee. The steps below explain what happens next.": "Merci d’avoir confirmé que vous êtes prêt à procéder aux frais de demande remboursables. Les étapes ci-dessous expliquent la suite.",
      "Fee overview": "Aperçu des frais",
      "A refundable $75 application fee is required before your application can move into the formal review and approval process.": "Des frais de demande remboursables de 75 $ sont requis avant que votre dossier puisse entrer dans le processus formel d’examen et d’approbation.",
      "Payment instructions": "Instructions de paiement",
      "Your assigned payment instructions will be provided directly for this application. Use only the method and details linked to your Application ID.": "Vos instructions de paiement attribuées vous seront fournies directement pour cette demande. Utilisez uniquement la méthode et les détails liés à votre ID de demande.",
      "Submit payment confirmation": "Envoyer la confirmation de paiement",
      "After you complete payment, you may be asked to upload a confirmation screenshot or send verification using the contact details provided with your instructions.": "Après le paiement, il peut vous être demandé de téléverser une capture d’écran de confirmation ou d’envoyer une vérification avec les coordonnées fournies dans vos instructions.",
      "Review begins after confirmation": "L’examen commence après confirmation",
      "Once payment is confirmed, your application review and approval process will officially begin. Watch your email for updates from the property management team.": "Une fois le paiement confirmé, l’examen et l’approbation de votre demande commenceront officiellement. Surveillez votre e-mail pour les mises à jour de l’équipe de gestion.",
      "If you have not received payment instructions yet, please wait for direct contact before sending any payment. Instructions are provided individually for security and verification.": "Si vous n’avez pas encore reçu d’instructions de paiement, attendez un contact direct avant d’envoyer un paiement. Les instructions sont fournies individuellement pour la sécurité et la vérification.",
      "Back to Application Received": "Retour à la demande reçue",
      "Pending": "En attente",
      "Application status": "Statut de la demande",
      "Email Confirmation": "Confirmation par e-mail",
      "A confirmation email will be sent shortly to the email address provided in your application. That email will confirm that your application has been received.": "Un e-mail de confirmation sera envoyé prochainement à l’adresse indiquée dans votre demande. Il confirmera la bonne réception de votre dossier.",
      "Secure & Verified Process": "Processus sécurisé et vérifié",
      "This application process is handled directly by the property management team. All submitted applications are reviewed carefully, and payment confirmations are documented for transparency and record keeping.": "Ce processus de demande est géré directement par l’équipe de gestion immobilière. Toutes les demandes sont examinées avec soin et les confirmations de paiement sont consignées à des fins de transparence et de suivi.",
      "Fee Transparency": "Transparence des frais",
      "The application fee is refundable if your application is not approved or if you decide not to proceed after the tour. If approved and you choose to move forward, the fee is applied toward your first month's rent.": "Les frais de demande sont remboursables si votre dossier n’est pas approuvé ou si vous décidez de ne pas poursuivre après la visite. Si votre demande est approuvée et que vous continuez, ces frais sont appliqués au premier mois de loyer.",
      "Assigned Payment Instructions": "Instructions de paiement attribuées",
      "Payment Options:": "Mode de paiement :",
      "Assigned Privately:": "Attribué en privé :",
      "Payment Details:": "Informations de paiement :",
      "Application Fee:": "Frais de demande :",
      "Verification Note:": "Note de référence :",
      "Provide a screenshot of the payment confirmation via email or text.": "Veuillez fournir une capture d’écran de la confirmation de paiement par e-mail ou message texte.",
      "Do not send payment until assigned processing instructions are provided directly. Keep your payment confirmation for your records.": "N’envoyez aucun paiement avant d’avoir reçu directement les instructions de traitement attribuées. Conservez votre confirmation dans vos dossiers.",
      "I have completed the application fee payment": "J’ai reçu les instructions de paiement attribuées",
      "Continue To Payment Confirmation": "Continuer vers la confirmation de paiement",
      "Payment Options Are Assigned Privately": "Options de paiement attribuées en privé",
      "Available payment options are confirmed individually after application review.": "Les options disponibles seront confirmées individuellement après l’examen de la demande.",
      "Download on the": "Télécharger sur",
      "Get it on": "Disponible sur",
      "Before Sending Payment": "Avant d’envoyer un paiement",
      "Wait for assigned processing instructions.": "Cliquez sur le lien App Store ou Google Play ci-dessus.",
      "Confirm the instructions match your application.": "Vérifiez que les instructions correspondent à votre demande.",
      "Use only the payment method assigned directly to you.": "Ouvrez l’application et choisissez de créer un nouveau compte.",
      "Include your Application ID when requested.": "Saisissez vos informations personnelles et terminez l’inscription.",
      "Keep your payment confirmation for your records.": "Vérifiez votre identité si l’application vous le demande.",
      "Upload confirmation only after completing the assigned payment.": "Une fois votre compte prêt, revenez sur cette page et utilisez les informations de paiement fournies.",
      "Need Help or Want to Verify?": "Besoin d’aide ou de vérifier ?",
      "For any questions, clarification, or verification regarding the application process, you can contact TenantFirst Management directly using the information below.": "Pour toute question, précision ou vérification concernant le processus de demande, vous pouvez contacter TenantFirst Management directement avec les coordonnées ci-dessous.",
      "Email:": "E-mail :",
      "Phone:": "Téléphone :",
      "You can also review the main property management website for additional information.": "Vous pouvez également consulter le site principal de gestion immobilière pour plus d’informations.",
      "We support fair and equal housing practices for all applicants in accordance with applicable housing guidelines and nondiscrimination standards.": "Nous soutenons des pratiques de logement équitables pour tous les candidats, conformément aux directives applicables et aux normes de non-discrimination.",
      "Upload Payment Confirmation": "Téléverser la confirmation de paiement",
      "Please upload your payment screenshot to complete your secure application verification.": "Veuillez téléverser la capture d’écran de votre paiement afin de terminer la vérification sécurisée de votre demande.",
      "Applicant details": "Renseignements du candidat",
      "Full Name": "Nom complet",
      "Email Address": "Adresse e-mail",
      "Application ID (optional)": "ID de demande (facultatif)",
      "Tap to upload": "Touchez pour téléverser",
      "or drag and drop your payment screenshot here.": "ou glissez-déposez votre capture d’écran de paiement ici.",
      "JPG, JPEG or PNG only": "JPG, JPEG ou PNG uniquement",
      "Selected File": "Fichier sélectionné",
      "Submit Payment Confirmation": "Envoyer la confirmation de paiement",
      "Prefer Email Confirmation?": "Vous préférez confirmer par e-mail ?",
      "If you would prefer to email your payment confirmation instead, send it directly to TenantFirst Management for processing.": "Si vous préférez envoyer votre confirmation de paiement par e-mail, adressez-la directement à TenantFirst Management pour traitement.",
      "Send Email Confirmation": "Envoyer la confirmation par e-mail",
      "Payment Confirmation Submitted": "Confirmation de paiement envoyée",
      "Your payment screenshot has been received and is pending private verification. TenantFirst Management will review your confirmation with your application details.": "Votre capture d’écran de paiement a été reçue et est en attente de vérification privée. TenantFirst Management l’examinera avec les détails de votre demande.",
      "Please select a payment screenshot before submitting.": "Veuillez sélectionner une capture d’écran du paiement avant d’envoyer.",
      "Please upload a JPG, JPEG, or PNG file.": "Veuillez téléverser un fichier JPG, JPEG ou PNG.",
      "File size must be less than 10MB.": "Le fichier doit faire moins de 10 Mo.",
      "Remove": "Retirer"
    },
    pt: {
      "Submission Received": "Solicitação recebida",
      "Application Received Successfully": "Solicitação recebida com sucesso",
      "Thank you for completing your rental application. Your information has been received successfully and is currently pending review.": "Obrigado por preencher sua solicitação de aluguel. Suas informações foram recebidas com sucesso e estão pendentes de análise.",
      "Application ID:": "ID da solicitação:",
      "Email Confirmation": "Confirmação por e-mail",
      "A confirmation email will be sent shortly to the email address provided in your application. That email will confirm that your application has been received.": "Um e-mail de confirmação será enviado em breve para o endereço informado na solicitação. Esse e-mail confirmará que sua solicitação foi recebida.",
      "Secure & Verified Process": "Processo seguro e verificado",
      "This application process is handled directly by the property management team. All submitted applications are reviewed carefully, and payment confirmations are documented for transparency and record keeping.": "Este processo de solicitação é conduzido diretamente pela equipe de administração da propriedade. Todas as solicitações enviadas são analisadas com cuidado, e as confirmações de pagamento são documentadas para transparência e registro.",
      "Fee Transparency": "Transparência da taxa",
      "The application fee is refundable if your application is not approved or if you decide not to proceed after the tour. If approved and you choose to move forward, the fee is applied toward your first month's rent.": "A taxa de solicitação é reembolsável se sua solicitação não for aprovada ou se você decidir não prosseguir após a visita. Se aprovada e você optar por continuar, a taxa será aplicada ao primeiro mês de aluguel.",
      "Assigned Payment Instructions": "Instruções de pagamento atribuídas",
      "Payment Options:": "Forma de pagamento:",
      "Assigned Privately:": "Nome da conta:",
      "Payment Details:": "Detalhes de pagamento:",
      "Application Fee:": "Taxa de solicitação:",
      "Verification Note:": "Observação de referência:",
      "Provide a screenshot of the payment confirmation via email or text.": "Envie uma captura de tela da confirmação de pagamento por e-mail ou mensagem de texto.",
      "Do not send payment until assigned processing instructions are provided directly. Keep your payment confirmation for your records.": "Não envie nenhum pagamento até receber instruções de processamento atribuídas diretamente. Guarde sua confirmação para seus registros.",
      "I have completed the application fee payment": "Concluí o pagamento da taxa de solicitação",
      "Continue To Payment Confirmation": "Continuar para a confirmação de pagamento",
      "Payment Options Are Assigned Privately": "Opções de pagamento atribuídas de forma privada",
      "Available payment options are confirmed individually after application review.": "As opções disponíveis serão confirmadas individualmente após a análise da solicitação.",
      "Download on the": "Baixar na",
      "Get it on": "Disponível no",
      "Before Sending Payment": "Antes de enviar um pagamento",
      "Wait for assigned processing instructions.": "Clique no link da App Store ou do Google Play acima.",
      "Confirm the instructions match your application.": "Confirme que as instruções correspondem à sua solicitação.",
      "Use only the payment method assigned directly to you.": "Abra o aplicativo e escolha criar uma nova conta.",
      "Include your Application ID when requested.": "Informe seus dados pessoais e conclua o cadastro.",
      "Keep your payment confirmation for your records.": "Verifique sua identidade se o aplicativo solicitar.",
      "Upload confirmation only after completing the assigned payment.": "Quando sua conta estiver pronta, volte a esta página e use os dados de pagamento fornecidos.",
      "Need Help or Want to Verify?": "Precisa de ajuda ou deseja verificar?",
      "For any questions, clarification, or verification regarding the application process, you can contact TenantFirst Management directly using the information below.": "Para dúvidas, esclarecimentos ou verificação sobre o processo de solicitação, entre em contato diretamente com TenantFirst Management usando as informações abaixo.",
      "Email:": "E-mail:",
      "Phone:": "Telefone:",
      "You can also review the main property management website for additional information.": "Você também pode consultar o site principal de administração de propriedades para obter mais informações.",
      "We support fair and equal housing practices for all applicants in accordance with applicable housing guidelines and nondiscrimination standards.": "Apoiamos práticas justas e igualitárias de moradia para todos os candidatos, de acordo com as diretrizes habitacionais aplicáveis e normas de não discriminação.",
      "Upload Payment Confirmation": "Enviar confirmação de pagamento",
      "Please upload your payment screenshot to complete your secure application verification.": "Envie a captura de tela do pagamento para concluir a verificação segura da sua solicitação.",
      "Applicant details": "Dados do candidato",
      "Full Name": "Nome completo",
      "Email Address": "E-mail",
      "Application ID (optional)": "ID da solicitação (opcional)",
      "Tap to upload": "Toque para enviar",
      "or drag and drop your payment screenshot here.": "ou arraste e solte aqui a captura de tela do pagamento.",
      "JPG, JPEG or PNG only": "Somente JPG, JPEG ou PNG",
      "Selected File": "Arquivo selecionado",
      "Submit Payment Confirmation": "Enviar confirmação de pagamento",
      "Prefer Email Confirmation?": "Prefere confirmar por e-mail?",
      "If you would prefer to email your payment confirmation instead, send it directly to TenantFirst Management for processing.": "Se preferir enviar a confirmação de pagamento por e-mail, envie diretamente para TenantFirst Management para processamento.",
      "Send Email Confirmation": "Enviar confirmação por e-mail",
      "Payment Confirmation Submitted": "Confirmação de pagamento enviada",
      "Your payment screenshot has been received and is pending private verification. TenantFirst Management will review your confirmation with your application details.": "Sua captura de tela do pagamento foi recebida e está pendente de verificação privada. TenantFirst Management analisará sua confirmação junto com os detalhes da solicitação.",
      "Please select a payment screenshot before submitting.": "Selecione uma captura de tela do pagamento antes de enviar.",
      "Please upload a JPG, JPEG, or PNG file.": "Envie um arquivo JPG, JPEG ou PNG.",
      "File size must be less than 10MB.": "O arquivo deve ter menos de 10 MB.",
      "Remove": "Remover"
    },
    zh: {
      "Submission Received": "申请已收到",
      "Application Received Successfully": "申请已成功收到",
      "Thank you for completing your rental application. Your information has been received successfully and is currently pending review.": "感谢您完成租赁申请。您的信息已成功收到，目前正在等待审核。",
      "Application ID:": "申请编号：",
      "Refundable application fee": "可退还申请费",
      "I understand that a refundable $75 application fee is required to proceed with the application process.": "我理解需要支付 75 美元可退还申请费才能继续申请流程。",
      "Continue to Payment Instructions": "继续查看付款说明",
      "Payment Instructions": "付款说明",
      "Payment & Next Steps": "付款与后续步骤",
      "Application Fee & Next Steps": "申请费与后续步骤",
      "Thank you for confirming that you are ready to proceed with the refundable application fee. The steps below explain what happens next.": "感谢您确认已准备好继续支付可退还申请费。以下步骤说明后续流程。",
      "Fee overview": "费用概览",
      "A refundable $75 application fee is required before your application can move into the formal review and approval process.": "在进入正式审核和批准流程之前，需要支付可退还的 75 美元申请费。",
      "Payment instructions": "付款说明",
      "Your assigned payment instructions will be provided directly for this application. Use only the method and details linked to your Application ID.": "系统将直接为您的申请提供分配的付款说明。请仅使用与您的申请编号关联的方式和详情。",
      "Submit payment confirmation": "提交付款确认",
      "After you complete payment, you may be asked to upload a confirmation screenshot or send verification using the contact details provided with your instructions.": "完成付款后，您可能需要上传确认截图，或使用说明中提供的联系方式发送验证信息。",
      "Review begins after confirmation": "确认后开始审核",
      "Once payment is confirmed, your application review and approval process will officially begin. Watch your email for updates from the property management team.": "付款确认后，您的申请审核和批准流程将正式开始。请留意物业管理团队发送的电子邮件更新。",
      "If you have not received payment instructions yet, please wait for direct contact before sending any payment. Instructions are provided individually for security and verification.": "如果您尚未收到付款说明，请在发送任何付款前等待直接联系。出于安全和验证目的，说明将单独提供。",
      "Back to Application Received": "返回申请已收到页面",
      "Email Confirmation": "电子邮件确认",
      "A confirmation email will be sent shortly to the email address provided in your application. That email will confirm that your application has been received.": "确认邮件将很快发送到您在申请中提供的电子邮箱。该邮件将确认您的申请已收到。",
      "Secure & Verified Process": "安全且已验证的流程",
      "This application process is handled directly by the property management team. All submitted applications are reviewed carefully, and payment confirmations are documented for transparency and record keeping.": "此申请流程由物业管理团队直接处理。所有提交的申请都会被认真审核，付款确认也会被记录，以便透明管理和留档。",
      "Fee Transparency": "费用透明",
      "The application fee is refundable if your application is not approved or if you decide not to proceed after the tour. If approved and you choose to move forward, the fee is applied toward your first month's rent.": "如果您的申请未获批准，或您看房后决定不继续，申请费可退还。如果申请获批且您选择继续，该费用将用于抵扣首月租金。",
      "Assigned Payment Instructions": "指定付款说明",
      "Payment Options:": "付款方式：",
      "Assigned Privately:": "账户名称：",
      "Payment Details:": "付款详情：",
      "Application Fee:": "申请费：",
      "Verification Note:": "备注说明：",
      "Provide a screenshot of the payment confirmation via email or text.": "请通过电子邮件或短信提供付款确认截图。",
      "Do not send payment until assigned processing instructions are provided directly. Keep your payment confirmation for your records.": "在直接提供指定处理说明之前，请勿付款。请保存付款确认记录。",
      "I have completed the application fee payment": "我已完成申请费付款",
      "Continue To Payment Confirmation": "继续提交付款确认",
      "Payment Options Are Assigned Privately": "付款选项将单独分配",
      "Available payment options are confirmed individually after application review.": "可用付款选项会在申请审核后单独确认。",
      "Download on the": "下载于",
      "Get it on": "获取于",
      "Before Sending Payment": "付款前",
      "Wait for assigned processing instructions.": "点击上方的 App Store 或 Google Play 链接。",
      "Confirm the instructions match your application.": "确认说明与您的申请相符。",
      "Use only the payment method assigned directly to you.": "打开应用并选择创建新账户。",
      "Include your Application ID when requested.": "输入您的个人信息并完成注册流程。",
      "Keep your payment confirmation for your records.": "如果应用提示，请验证您的身份。",
      "Upload confirmation only after completing the assigned payment.": "账户准备好后，请返回此页面并使用提供的付款信息。",
      "Need Help or Want to Verify?": "需要帮助或想要核实？",
      "For any questions, clarification, or verification regarding the application process, you can contact TenantFirst Management directly using the information below.": "如需咨询、说明或核实申请流程，您可以使用以下信息直接联系 TenantFirst Management。",
      "Email:": "电子邮件：",
      "Phone:": "电话：",
      "You can also review the main property management website for additional information.": "您也可以查看主物业管理网站以获取更多信息。",
      "We support fair and equal housing practices for all applicants in accordance with applicable housing guidelines and nondiscrimination standards.": "我们支持面向所有申请人的公平平等住房实践，并遵守适用的住房指南和反歧视标准。",
      "Upload Payment Confirmation": "上传付款确认",
      "Please upload your payment screenshot to complete your secure application verification.": "请上传您的付款截图，以完成安全的申请验证。",
      "Applicant details": "申请人信息",
      "Full Name": "全名",
      "Email Address": "电子邮件地址",
      "Application ID (optional)": "申请编号（可选）",
      "Tap to upload": "点击上传",
      "or drag and drop your payment screenshot here.": "或将付款截图拖放到此处。",
      "JPG, JPEG or PNG only": "仅支持 JPG、JPEG 或 PNG",
      "Selected File": "已选择文件",
      "Submit Payment Confirmation": "提交付款确认",
      "Prefer Email Confirmation?": "更愿意通过电子邮件确认？",
      "If you would prefer to email your payment confirmation instead, send it directly to TenantFirst Management for processing.": "如果您更愿意通过电子邮件发送付款确认，请直接发送给 TenantFirst Management 处理。",
      "Send Email Confirmation": "发送电子邮件确认",
      "Payment Confirmation Submitted": "付款确认已提交",
      "Your payment screenshot has been received and is pending private verification. TenantFirst Management will review your confirmation with your application details.": "您的付款截图已收到，目前等待私下核验。TenantFirst Management 将结合您的申请详情审核该确认。",
      "Please select a payment screenshot before submitting.": "提交前请选择付款截图。",
      "Please upload a JPG, JPEG, or PNG file.": "请上传 JPG、JPEG 或 PNG 文件。",
      "File size must be less than 10MB.": "文件大小必须小于 10 MB。",
      "Remove": "移除"
    },
    ar: {
      "Submission Received": "تم استلام الطلب",
      "Application Received Successfully": "تم استلام طلبك بنجاح",
      "Thank you for completing your rental application. Your information has been received successfully and is currently pending review.": "شكرًا لك على إكمال طلب الإيجار. تم استلام معلوماتك بنجاح وهي الآن قيد المراجعة.",
      "Application ID:": "رقم الطلب:",
      "Refundable application fee": "رسوم طلب قابلة للاسترداد",
      "I understand that a refundable $75 application fee is required to proceed with the application process.": "أفهم أن رسوم طلب قابلة للاسترداد بقيمة 75 دولارًا مطلوبة للمتابعة في عملية التقديم.",
      "Continue to Payment Instructions": "المتابعة إلى تعليمات الدفع",
      "Payment Instructions": "تعليمات الدفع",
      "Payment & Next Steps": "الدفع والخطوات التالية",
      "Application Fee & Next Steps": "رسوم الطلب والخطوات التالية",
      "Thank you for confirming that you are ready to proceed with the refundable application fee. The steps below explain what happens next.": "شكرًا لتأكيدك أنك مستعد للمتابعة مع رسوم الطلب القابلة للاسترداد. توضح الخطوات أدناه ما يحدث بعد ذلك.",
      "Fee overview": "نظرة عامة على الرسوم",
      "A refundable $75 application fee is required before your application can move into the formal review and approval process.": "مطلوب رسوم طلب قابلة للاسترداد بقيمة 75 دولارًا قبل أن ينتقل طلبك إلى عملية المراجعة والموافقة الرسمية.",
      "Payment instructions": "تعليمات الدفع",
      "Your assigned payment instructions will be provided directly for this application. Use only the method and details linked to your Application ID.": "سيتم تزويدك بتعليمات الدفع المخصصة مباشرة لهذا الطلب. استخدم فقط الطريقة والتفاصيل المرتبطة برقم طلبك.",
      "Submit payment confirmation": "إرسال تأكيد الدفع",
      "After you complete payment, you may be asked to upload a confirmation screenshot or send verification using the contact details provided with your instructions.": "بعد إتمام الدفع، قد يُطلب منك رفع لقطة شاشة للتأكيد أو إرسال التحقق باستخدام بيانات الاتصال المقدمة مع تعليماتك.",
      "Review begins after confirmation": "تبدأ المراجعة بعد التأكيد",
      "Once payment is confirmed, your application review and approval process will officially begin. Watch your email for updates from the property management team.": "بمجرد تأكيد الدفع، ستبدأ عملية مراجعة طلبك والموافقة عليه رسميًا. تابع بريدك الإلكتروني للحصول على تحديثات من فريق إدارة العقار.",
      "If you have not received payment instructions yet, please wait for direct contact before sending any payment. Instructions are provided individually for security and verification.": "إذا لم تتلقَ تعليمات الدفع بعد، يرجى انتظار التواصل المباشر قبل إرسال أي دفعة. يتم توفير التعليمات بشكل فردي للأمان والتحقق.",
      "Back to Application Received": "العودة إلى صفحة استلام الطلب",
      "Pending": "قيد الانتظار",
      "Application status": "حالة الطلب",
      "Email Confirmation": "تأكيد عبر البريد الإلكتروني",
      "A confirmation email will be sent shortly to the email address provided in your application. That email will confirm that your application has been received.": "سيتم إرسال رسالة تأكيد قريبًا إلى عنوان البريد الإلكتروني المذكور في طلبك، لتأكيد استلام الطلب.",
      "Secure & Verified Process": "عملية آمنة وموثقة",
      "This application process is handled directly by the property management team. All submitted applications are reviewed carefully, and payment confirmations are documented for transparency and record keeping.": "تتم إدارة عملية الطلب مباشرة من فريق إدارة العقار. تُراجع جميع الطلبات بعناية، وتُوثق تأكيدات الدفع لضمان الشفافية وحفظ السجلات.",
      "Fee Transparency": "شفافية الرسوم",
      "The application fee is refundable if your application is not approved or if you decide not to proceed after the tour. If approved and you choose to move forward, the fee is applied toward your first month's rent.": "رسوم الطلب قابلة للاسترداد إذا لم تتم الموافقة على طلبك أو إذا قررت عدم المتابعة بعد الجولة. وإذا تمت الموافقة واخترت المتابعة، فسيتم احتساب الرسوم ضمن إيجار الشهر الأول.",
      "Assigned Payment Instructions": "تعليمات الدفع المخصصة",
      "Payment Options:": "طريقة الدفع:",
      "Assigned Privately:": "يتم التخصيص بشكل خاص:",
      "Payment Details:": "تفاصيل الدفع:",
      "Application Fee:": "رسوم الطلب:",
      "Verification Note:": "ملاحظة مرجعية:",
      "Provide a screenshot of the payment confirmation via email or text.": "يرجى إرسال لقطة شاشة لتأكيد الدفع عبر البريد الإلكتروني أو رسالة نصية.",
      "Do not send payment until assigned processing instructions are provided directly. Keep your payment confirmation for your records.": "لا ترسل أي دفعة حتى يتم تزويدك مباشرة بتعليمات المعالجة المخصصة. احتفظ بتأكيد الدفع ضمن سجلاتك.",
      "I have completed the application fee payment": "تلقيت تعليمات الدفع المخصصة",
      "Continue To Payment Confirmation": "المتابعة إلى تأكيد الدفع",
      "Payment Options Are Assigned Privately": "خيارات الدفع تُخصص بشكل خاص",
      "Available payment options are confirmed individually after application review.": "سيتم تأكيد الخيارات المتاحة بشكل فردي بعد مراجعة الطلب.",
      "Download on the": "حمّل من",
      "Get it on": "متوفر على",
      "Before Sending Payment": "قبل إرسال أي دفعة",
      "Wait for assigned processing instructions.": "اضغط على رابط App Store أو Google Play أعلاه.",
      "Confirm the instructions match your application.": "تحقق من أن التعليمات مرتبطة بطلبك.",
      "Use only the payment method assigned directly to you.": "افتح التطبيق واختر إنشاء حساب جديد.",
      "Include your Application ID when requested.": "أدخل بياناتك الشخصية وأكمل عملية التسجيل.",
      "Keep your payment confirmation for your records.": "تحقق من هويتك إذا طلب التطبيق ذلك.",
      "Upload confirmation only after completing the assigned payment.": "بعد أن يصبح حسابك جاهزًا، عُد إلى هذه الصفحة واستخدم بيانات الدفع المقدمة.",
      "Need Help or Want to Verify?": "هل تحتاج إلى مساعدة أو ترغب في التحقق؟",
      "For any questions, clarification, or verification regarding the application process, you can contact TenantFirst Management directly using the information below.": "لأي أسئلة أو توضيحات أو للتحقق من عملية الطلب، يمكنك التواصل مباشرة مع TenantFirst Management باستخدام المعلومات أدناه.",
      "Email:": "البريد الإلكتروني:",
      "Phone:": "الهاتف:",
      "You can also review the main property management website for additional information.": "يمكنك أيضًا مراجعة الموقع الرئيسي لإدارة العقارات للحصول على معلومات إضافية.",
      "We support fair and equal housing practices for all applicants in accordance with applicable housing guidelines and nondiscrimination standards.": "ندعم ممارسات إسكان عادلة ومتكافئة لجميع المتقدمين وفقًا لإرشادات الإسكان المعمول بها ومعايير عدم التمييز.",
      "Upload Payment Confirmation": "رفع تأكيد الدفع",
      "Please upload your payment screenshot to complete your secure application verification.": "يرجى رفع لقطة شاشة الدفع لإكمال التحقق الآمن من طلبك.",
      "Applicant details": "بيانات المتقدم",
      "Full Name": "الاسم الكامل",
      "Email Address": "البريد الإلكتروني",
      "Application ID (optional)": "رقم الطلب (اختياري)",
      "Tap to upload": "اضغط للرفع",
      "or drag and drop your payment screenshot here.": "أو اسحب لقطة شاشة الدفع وأفلتها هنا.",
      "JPG, JPEG or PNG only": "JPG أو JPEG أو PNG فقط",
      "Selected File": "الملف المحدد",
      "Submit Payment Confirmation": "إرسال تأكيد الدفع",
      "Prefer Email Confirmation?": "تفضل التأكيد عبر البريد الإلكتروني؟",
      "If you would prefer to email your payment confirmation instead, send it directly to TenantFirst Management for processing.": "إذا كنت تفضل إرسال تأكيد الدفع عبر البريد الإلكتروني، فأرسله مباشرة إلى TenantFirst Management لمعالجته.",
      "Send Email Confirmation": "إرسال التأكيد عبر البريد الإلكتروني",
      "Payment Confirmation Submitted": "تم إرسال تأكيد الدفع",
      "Your payment screenshot has been received and is pending private verification. TenantFirst Management will review your confirmation with your application details.": "تم استلام لقطة شاشة الدفع وهي بانتظار التحقق الخاص. ستراجع TenantFirst Management التأكيد مع تفاصيل طلبك.",
      "Please select a payment screenshot before submitting.": "يرجى اختيار لقطة شاشة للدفع قبل الإرسال.",
      "Please upload a JPG, JPEG, or PNG file.": "يرجى رفع ملف بصيغة JPG أو JPEG أو PNG.",
      "File size must be less than 10MB.": "يجب أن يكون حجم الملف أقل من 10 ميغابايت.",
      "Remove": "إزالة"
    }
  };

  Object.keys(postFlowTranslations).forEach((language) => {
    Object.assign(translations[language], postFlowTranslations[language]);
  });

  const workflowTranslations = {
    es: {
      "Application Review": "Revisión de solicitud",
      "Your submission is reviewed by the property management team before any application-specific payment instructions are assigned.": "Su envío es revisado por el equipo de administración de la propiedad antes de asignar cualquier instrucción de pago específica de la solicitud.",
      "Yes, a refundable application fee may apply after review. Payment processing instructions are assigned privately and provided only when your application is ready for processing.": "Sí, puede aplicarse una tarifa de solicitud reembolsable después de la revisión. Las instrucciones de procesamiento de pago se asignan de forma privada y se proporcionan solo cuando su solicitud está lista para procesamiento.",
      "Private payment assignment": "Asignación privada de pago",
      "Supported Payment Methods": "Métodos de pago compatibles",
      "Supported payment methods": "Métodos de pago compatibles",
      "For security and verification purposes, payment instructions are assigned individually after application review.": "Por motivos de seguridad y verificación, las instrucciones de pago se asignan individualmente después de revisar la solicitud.",
      "Available payment options may vary depending on the assigned processing instructions.": "Las opciones de pago disponibles pueden variar según las instrucciones de procesamiento asignadas."
    },
    zh: {
      "Final Step Important (Read Before Submitting)": "重要最后一步（提交前请阅读）",
      "Before you submit": "提交前",
      "Certification & Acknowledgment": "认证与确认",
      "Application certification": "申请认证",
      "Fee & next steps": "费用与后续步骤",
      "I have read and agree to the statements above.": "我已阅读并同意以上声明。",
      "Privacy & Data Processing Consent": "隐私与数据处理同意",
      "I consent to the collection, storage, verification, and processing of the information provided in this application for rental screening, application review, communication, and related property management purposes.": "本人同意收集、存储、核实和处理本申请所提供的信息，用于租赁筛选、申请审核、沟通及相关物业管理目的。",
      "View Privacy Notice": "查看隐私声明",
      "Your information is transmitted securely and used only for application processing and communication purposes.": "您的信息会安全传输，且仅用于申请处理与沟通目的。",
      "Payment method for the fee": "费用支付方式",
      "Read more": "阅读更多",
      "Show less": "收起",
      "Application progress overview": "申请进度概览",
      "Application": "申请",
      "Review": "审核",
      "Payment": "付款",
      "Others": "其他",
      "Final step agreement": "最后一步协议",
      "Chime, America's #1 Choice for Banking": "Chime，美国首选银行服务",
      "I certify that all information provided in this application is complete and accurate to the best of my knowledge. I understand that providing false or misleading information may result in denial of my application, and I authorize the landlord/property manager to verify the information provided.": "本人证明本申请所提供的信息据本人所知完整准确。本人理解提供虚假或误导信息可能导致申请被拒，并授权房东/物业管理人员核实所提供的信息。",
      "I also understand that payment instructions for the refundable application fee will be provided after submission. Once payment is confirmed, my application will proceed to the review, approval, and next processing steps.": "本人亦理解，可退还申请费的付款说明将在提交后提供。付款确认后，申请将进入审核、批准及后续处理步骤。",
      "Thank you for your rental application.": "感谢您的租赁申请。",
      "A confirmation email has been sent to you.": "确认邮件已发送给您。",
      "A confirmation email has been sent to you at": "确认邮件已发送至",
      "Please note that a refundable $75 application fee is required before the approval process can begin.": "请注意，在审批流程开始之前，需要支付可退还的 75 美元申请费。",
      "Once the payment has been confirmed, your application review and approval process will officially commence.": "付款确认后，您的申请审核和批准流程将正式开始。",
      "Your application is currently pending review by the property management team.": "您的申请目前正在等待物业管理团队审核。",
      "For security and verification purposes, payment instructions are assigned individually after review and will be provided once your application is ready for processing.": "出于安全和验证目的，付款说明会在审核后单独分配，并会在您的申请准备进入处理阶段时提供。",
      "Application Review In Progress": "申请正在审核中",
      "Application Under Review": "申请正在审核中",
      "Pending Review": "等待审核",
      "Our team is currently reviewing your submission. Once your application is ready for processing, assigned payment instructions and next steps will be provided directly.": "我们的团队正在审核您的提交内容。申请准备进入处理阶段后，会直接向您提供分配的付款说明和后续步骤。",
      "Estimated Review Timeline": "预计审核时间",
      "Most application reviews are completed within 24 to 48 hours. If additional verification is needed, the property management team will contact you using the email address or phone number provided in your application.": "大多数申请审核会在 24 至 48 小时内完成。如需额外验证，物业管理团队会使用您申请中提供的电子邮件地址或电话号码与您联系。",
      "A confirmation email will be sent shortly to the email address provided in your application. That email will confirm that your application has been received and is pending review.": "确认邮件将很快发送至您在申请中提供的邮箱，确认您的申请已收到并正在等待审核。",
      "This application process is handled directly by the property management team. All submitted applications are reviewed carefully, and application-specific payment details are assigned privately as part of the verification process.": "此申请流程由物业管理团队直接处理。所有提交的申请都会被仔细审核，申请专属付款详情会作为验证流程的一部分私下分配。",
      "Payment Verification Upload": "付款验证上传",
      "This page is used for applicants who have already received assigned payment instructions. Upload your payment confirmation only after your application-specific payment details have been provided directly.": "此页面供已收到分配付款说明的申请人使用。请仅在直接收到申请专属付款详情后上传付款确认。",
      "or drag and drop your payment confirmation screenshot here.": "或将付款确认截图拖放到此处。",
      "Submit Payment Verification": "提交付款验证",
      "Prefer Email Verification?": "更愿意通过电子邮件验证？",
      "If you have already received assigned payment instructions and would prefer to email your payment confirmation instead, send it directly to TenantFirst Management for private verification.": "如果您已收到分配的付款说明，并希望通过电子邮件发送付款确认，请直接发送给 TenantFirst Management 进行私下验证。",
      "Send Email Verification": "发送电子邮件验证",
      "Payment Verification Submitted": "付款验证已提交",
      "Your payment confirmation screenshot has been received for private verification. TenantFirst Management will review it with your Application ID and assigned payment processing instructions.": "您的付款确认截图已收到，将用于私下验证。TenantFirst Management 会结合您的申请编号和分配的付款处理说明进行审核。",
      "Application Review": "申请审核",
      "Your submission is reviewed by the property management team before any application-specific payment instructions are assigned.": "物业管理团队会先审核您的提交内容，然后才会分配任何申请专属付款说明。",
      "Yes, a refundable application fee may apply after review. Payment processing instructions are assigned privately and provided only when your application is ready for processing.": "是的，审核后可能会收取可退还申请费。付款处理说明会私下分配，并且仅在您的申请准备进入处理阶段时提供。",
      "Private payment assignment": "私人付款分配",
      "Supported Payment Methods": "支持的付款方式",
      "Supported payment methods": "支持的付款方式",
      "For security and verification purposes, payment instructions are assigned individually after application review.": "出于安全和验证目的，付款说明会在申请审核后单独分配。",
      "Available payment options may vary depending on the assigned processing instructions.": "可用付款选项可能会根据分配的处理说明而有所不同。"
    },
    fr: {
      "Final Step Important (Read Before Submitting)": "Étape finale importante (à lire avant d’envoyer)",
      "Before you submit": "Avant d’envoyer",
      "Certification & Acknowledgment": "Certification et confirmation",
      "Application certification": "Certification de la demande",
      "Fee & next steps": "Frais et prochaines étapes",
      "I have read and agree to the statements above.": "J’ai lu et j’accepte les déclarations ci-dessus.",
      "Privacy & Data Processing Consent": "Consentement à la confidentialité et au traitement des données",
      "I consent to the collection, storage, verification, and processing of the information provided in this application for rental screening, application review, communication, and related property management purposes.": "Je consens à la collecte, au stockage, à la vérification et au traitement des informations fournies dans cette demande à des fins de sélection locataire, d’examen de la demande, de communication et de gestion immobilière connexe.",
      "View Privacy Notice": "Voir l’avis de confidentialité",
      "Your information is transmitted securely and used only for application processing and communication purposes.": "Vos informations sont transmises de manière sécurisée et utilisées uniquement pour le traitement de la demande et à des fins de communication.",
      "Payment method for the fee": "Mode de paiement des frais",
      "Read more": "Lire plus",
      "Show less": "Afficher moins",
      "Application progress overview": "Aperçu de l’avancement de la demande",
      "Application": "Demande",
      "Review": "Examen",
      "Payment": "Paiement",
      "Others": "Autres",
      "Final step agreement": "Accord de l’étape finale",
      "Chime, America's #1 Choice for Banking": "Chime, le n° 1 des choix bancaires aux États-Unis",
      "I certify that all information provided in this application is complete and accurate to the best of my knowledge. I understand that providing false or misleading information may result in denial of my application, and I authorize the landlord/property manager to verify the information provided.": "Je certifie que toutes les informations fournies dans cette demande sont complètes et exactes au meilleur de ma connaissance. Je comprends que fournir des informations fausses ou trompeuses peut entraîner le refus de ma demande, et j’autorise le propriétaire ou le gestionnaire à vérifier les informations fournies.",
      "I also understand that payment instructions for the refundable application fee will be provided after submission. Once payment is confirmed, my application will proceed to the review, approval, and next processing steps.": "Je comprends également que les instructions de paiement pour les frais de demande remboursables seront fournies après l’envoi. Une fois le paiement confirmé, ma demande passera à l’examen, à l’approbation et aux prochaines étapes du traitement.",
      "Thank you for your rental application.": "Merci pour votre demande de location.",
      "A confirmation email has been sent to you.": "Un e-mail de confirmation vous a été envoyé.",
      "A confirmation email has been sent to you at": "Un e-mail de confirmation vous a été envoyé à",
      "Please note that a refundable $75 application fee is required before the approval process can begin.": "Veuillez noter qu’une demande de frais de dossier remboursables de 75 $ est requise avant que le processus d’approbation puisse commencer.",
      "Once the payment has been confirmed, your application review and approval process will officially commence.": "Une fois le paiement confirmé, l’examen et le processus d’approbation de votre demande commenceront officiellement.",
      "Your application is currently pending review by the property management team.": "Votre demande est actuellement en attente d’examen par l’équipe de gestion immobilière.",
      "For security and verification purposes, payment instructions are assigned individually after review and will be provided once your application is ready for processing.": "Pour des raisons de sécurité et de vérification, les instructions de paiement sont attribuées individuellement après examen et seront fournies lorsque votre demande sera prête à être traitée.",
      "Application Review In Progress": "Demande en cours d’examen",
      "Application Under Review": "Demande en cours d’examen",
      "Pending Review": "En attente d’examen",
      "Our team is currently reviewing your submission. Once your application is ready for processing, assigned payment instructions and next steps will be provided directly.": "Notre équipe examine actuellement votre dossier. Lorsque votre demande sera prête à être traitée, les instructions de paiement attribuées et les prochaines étapes vous seront fournies directement.",
      "Estimated Review Timeline": "Délai d’examen estimé",
      "Most application reviews are completed within 24 to 48 hours. If additional verification is needed, the property management team will contact you using the email address or phone number provided in your application.": "La plupart des examens de demande sont terminés sous 24 à 48 heures. Si une vérification supplémentaire est nécessaire, l’équipe de gestion immobilière vous contactera à l’adresse e-mail ou au numéro de téléphone indiqué dans votre demande.",
      "A confirmation email will be sent shortly to the email address provided in your application. That email will confirm that your application has been received and is pending review.": "Un e-mail de confirmation sera envoyé prochainement à l’adresse indiquée dans votre demande. Il confirmera que votre demande a été reçue et qu’elle est en attente d’examen.",
      "This application process is handled directly by the property management team. All submitted applications are reviewed carefully, and application-specific payment details are assigned privately as part of the verification process.": "Ce processus de demande est géré directement par l’équipe de gestion immobilière. Toutes les demandes envoyées sont examinées avec soin, et les informations de paiement propres à chaque demande sont attribuées en privé dans le cadre du processus de vérification.",
      "Payment Verification Upload": "Téléversement de vérification du paiement",
      "This page is used for applicants who have already received assigned payment instructions. Upload your payment confirmation only after your application-specific payment details have been provided directly.": "Cette page est destinée aux candidats qui ont déjà reçu des instructions de paiement attribuées. Téléversez votre confirmation de paiement uniquement après avoir reçu directement les informations de paiement propres à votre demande.",
      "or drag and drop your payment confirmation screenshot here.": "ou glissez-déposez votre capture d’écran de confirmation de paiement ici.",
      "Submit Payment Verification": "Envoyer la vérification du paiement",
      "Prefer Email Verification?": "Vous préférez la vérification par e-mail ?",
      "If you have already received assigned payment instructions and would prefer to email your payment confirmation instead, send it directly to TenantFirst Management for private verification.": "Si vous avez déjà reçu des instructions de paiement attribuées et préférez envoyer votre confirmation par e-mail, adressez-la directement à TenantFirst Management pour une vérification privée.",
      "Send Email Verification": "Envoyer la vérification par e-mail",
      "Payment Verification Submitted": "Vérification du paiement envoyée",
      "Your payment confirmation screenshot has been received for private verification. TenantFirst Management will review it with your Application ID and assigned payment processing instructions.": "Votre capture d’écran de confirmation de paiement a été reçue pour vérification privée. TenantFirst Management l’examinera avec votre ID de demande et les instructions de traitement du paiement attribuées.",
      "Application Review": "Examen de la demande",
      "Your submission is reviewed by the property management team before any application-specific payment instructions are assigned.": "Votre dossier est examiné par l’équipe de gestion immobilière avant l’attribution de toute instruction de paiement propre à la demande.",
      "Yes, a refundable application fee may apply after review. Payment processing instructions are assigned privately and provided only when your application is ready for processing.": "Oui, des frais de demande remboursables peuvent s’appliquer après examen. Les instructions de traitement du paiement sont attribuées en privé et fournies uniquement lorsque votre demande est prête à être traitée.",
      "Private payment assignment": "Attribution privée du paiement",
      "Supported Payment Methods": "Moyens de paiement acceptés",
      "Supported payment methods": "Moyens de paiement acceptés",
      "For security and verification purposes, payment instructions are assigned individually after application review.": "Pour des raisons de sécurité et de vérification, les instructions de paiement sont attribuées individuellement après l’examen de la demande.",
      "Available payment options may vary depending on the assigned processing instructions.": "Les options de paiement disponibles peuvent varier selon les instructions de traitement attribuées."
    },
    ar: {
      "Final Step Important (Read Before Submitting)": "الخطوة الأخيرة المهمة (اقرأ قبل الإرسال)",
      "Before you submit": "قبل الإرسال",
      "Certification & Acknowledgment": "التصديق والإقرار",
      "Application certification": "تصديق الطلب",
      "Fee & next steps": "الرسوم والخطوات التالية",
      "I have read and agree to the statements above.": "لقد قرأت وأوافق على البيانات أعلاه.",
      "Privacy & Data Processing Consent": "الموافقة على الخصوصية ومعالجة البيانات",
      "I consent to the collection, storage, verification, and processing of the information provided in this application for rental screening, application review, communication, and related property management purposes.": "أوافق على جمع وتخزين والتحقق من ومعالجة المعلومات المقدمة في هذا الطلب لأغراض فحص الإيجار ومراجعة الطلب والتواصل وأغراض إدارة العقار ذات الصلة.",
      "View Privacy Notice": "عرض إشعار الخصوصية",
      "Your information is transmitted securely and used only for application processing and communication purposes.": "يتم نقل معلوماتك بشكل آمن ولا تُستخدم إلا لأغراض معالجة الطلب والتواصل.",
      "Payment method for the fee": "طريقة دفع الرسوم",
      "Read more": "اقرأ المزيد",
      "Show less": "عرض أقل",
      "Application progress overview": "نظرة عامة على تقدم الطلب",
      "Application": "الطلب",
      "Review": "المراجعة",
      "Payment": "الدفع",
      "Others": "أخرى",
      "Final step agreement": "اتفاق الخطوة الأخيرة",
      "Chime, America's #1 Choice for Banking": "Chime، الخيار الأول في أمريكا للخدمات المصرفية",
      "I certify that all information provided in this application is complete and accurate to the best of my knowledge. I understand that providing false or misleading information may result in denial of my application, and I authorize the landlord/property manager to verify the information provided.": "أقر بأن جميع المعلومات المقدمة في هذا الطلب كاملة ودقيقة حسب علمي. أفهم أن تقديم معلومات كاذبة أو مضللة قد يؤدي إلى رفض طلبي، وأفوض المالك/مدير العقار بالتحقق من المعلومات المقدمة.",
      "I also understand that payment instructions for the refundable application fee will be provided after submission. Once payment is confirmed, my application will proceed to the review, approval, and next processing steps.": "أفهم أيضًا أنه سيتم تقديم تعليمات الدفع لرسوم الطلب القابلة للاسترداد بعد الإرسال. وبمجرد تأكيد الدفع، سينتقل طلبي إلى المراجعة والموافقة وخطوات المعالجة التالية.",
      "Thank you for your rental application.": "شكرًا لك على طلب الإيجار.",
      "A confirmation email has been sent to you.": "تم إرسال رسالة تأكيد إليك.",
      "A confirmation email has been sent to you at": "تم إرسال رسالة تأكيد إليك على",
      "Please note that a refundable $75 application fee is required before the approval process can begin.": "يرجى ملاحظة أن رسوم طلب قابلة للاسترداد بقيمة 75 دولارًا أمريكيًا مطلوبة قبل أن تبدأ عملية الموافقة.",
      "Once the payment has been confirmed, your application review and approval process will officially commence.": "بمجرد تأكيد الدفع، ستبدأ عملية مراجعة طلبك والموافقة عليه رسميًا.",
      "Your application is currently pending review by the property management team.": "طلبك حاليًا بانتظار مراجعة فريق إدارة العقار.",
      "For security and verification purposes, payment instructions are assigned individually after review and will be provided once your application is ready for processing.": "لأغراض الأمان والتحقق، يتم تخصيص تعليمات الدفع بشكل فردي بعد المراجعة، وسيتم توفيرها عندما يصبح طلبك جاهزًا للمعالجة.",
      "Application Review In Progress": "الطلب قيد المراجعة",
      "Application Under Review": "الطلب قيد المراجعة",
      "Pending Review": "بانتظار المراجعة",
      "Our team is currently reviewing your submission. Once your application is ready for processing, assigned payment instructions and next steps will be provided directly.": "يقوم فريقنا حاليًا بمراجعة طلبك. بمجرد أن يصبح طلبك جاهزًا للمعالجة، سيتم تزويدك مباشرة بتعليمات الدفع المخصصة والخطوات التالية.",
      "Estimated Review Timeline": "المدة التقديرية للمراجعة",
      "Most application reviews are completed within 24 to 48 hours. If additional verification is needed, the property management team will contact you using the email address or phone number provided in your application.": "تكتمل معظم مراجعات الطلبات خلال 24 إلى 48 ساعة. إذا كانت هناك حاجة إلى تحقق إضافي، فسيتواصل فريق إدارة العقار معك عبر البريد الإلكتروني أو رقم الهاتف المذكور في طلبك.",
      "A confirmation email will be sent shortly to the email address provided in your application. That email will confirm that your application has been received and is pending review.": "سيتم إرسال رسالة تأكيد قريبًا إلى عنوان البريد الإلكتروني المذكور في طلبك. ستؤكد الرسالة أن طلبك قد تم استلامه وهو بانتظار المراجعة.",
      "This application process is handled directly by the property management team. All submitted applications are reviewed carefully, and application-specific payment details are assigned privately as part of the verification process.": "تتم إدارة عملية الطلب مباشرة من فريق إدارة العقار. تتم مراجعة جميع الطلبات بعناية، ويتم تخصيص تفاصيل الدفع الخاصة بكل طلب بشكل خاص كجزء من عملية التحقق.",
      "Payment Verification Upload": "رفع التحقق من الدفع",
      "This page is used for applicants who have already received assigned payment instructions. Upload your payment confirmation only after your application-specific payment details have been provided directly.": "تُستخدم هذه الصفحة للمتقدمين الذين تلقوا بالفعل تعليمات دفع مخصصة. ارفع تأكيد الدفع فقط بعد تزويدك مباشرة بتفاصيل الدفع الخاصة بطلبك.",
      "or drag and drop your payment confirmation screenshot here.": "أو اسحب لقطة شاشة تأكيد الدفع وأفلتها هنا.",
      "Submit Payment Verification": "إرسال التحقق من الدفع",
      "Prefer Email Verification?": "تفضل التحقق عبر البريد الإلكتروني؟",
      "If you have already received assigned payment instructions and would prefer to email your payment confirmation instead, send it directly to TenantFirst Management for private verification.": "إذا كنت قد تلقيت بالفعل تعليمات دفع مخصصة وتفضل إرسال تأكيد الدفع عبر البريد الإلكتروني، فأرسله مباشرة إلى TenantFirst Management للتحقق الخاص.",
      "Send Email Verification": "إرسال التحقق عبر البريد الإلكتروني",
      "Payment Verification Submitted": "تم إرسال التحقق من الدفع",
      "Your payment confirmation screenshot has been received for private verification. TenantFirst Management will review it with your Application ID and assigned payment processing instructions.": "تم استلام لقطة شاشة تأكيد الدفع للتحقق الخاص. ستراجعها TenantFirst Management مع رقم طلبك وتعليمات معالجة الدفع المخصصة.",
      "Application Review": "مراجعة الطلب",
      "Your submission is reviewed by the property management team before any application-specific payment instructions are assigned.": "تتم مراجعة طلبك من قبل فريق إدارة العقار قبل تخصيص أي تعليمات دفع خاصة بالطلب.",
      "Yes, a refundable application fee may apply after review. Payment processing instructions are assigned privately and provided only when your application is ready for processing.": "نعم، قد تُطبق رسوم طلب قابلة للاسترداد بعد المراجعة. يتم تخصيص تعليمات معالجة الدفع بشكل خاص ولا تُقدم إلا عندما يصبح طلبك جاهزًا للمعالجة.",
      "Private payment assignment": "تخصيص دفع خاص",
      "Supported Payment Methods": "طرق الدفع المدعومة",
      "Supported payment methods": "طرق الدفع المدعومة",
      "For security and verification purposes, payment instructions are assigned individually after application review.": "لأغراض الأمان والتحقق، يتم تخصيص تعليمات الدفع بشكل فردي بعد مراجعة الطلب.",
      "Available payment options may vary depending on the assigned processing instructions.": "قد تختلف خيارات الدفع المتاحة بحسب تعليمات المعالجة المخصصة."
    }
  };

  Object.keys(workflowTranslations).forEach((language) => {
    Object.assign(translations[language], workflowTranslations[language]);
  });

  const applicationTrustTranslations = {
    es: {
      "Rental Application": "Solicitud de alquiler",
      "Complete the form below to begin your application process.": "Complete el formulario a continuación para iniciar su proceso de solicitud.",
      "Please complete this form accurately and truthfully. All information provided will remain confidential and is required solely for the rental application approval process. Each adult (18+) applying to live in the unit must complete a separate application (Incomplete applications may result in processing delays)": "Complete este formulario con precisión y veracidad. Toda la información proporcionada permanecerá confidencial y se requiere únicamente para el proceso de aprobación de la solicitud de alquiler. Cada adulto (18+) que solicite vivir en la unidad debe completar una solicitud por separado (Las solicitudes incompletas pueden causar retrasos en el procesamiento)",
      "Property Information": "Información de la propiedad",
      "Applicant Screening": "Evaluación del solicitante",
      "Send Application for Review": "Enviar solicitud para revisión",
      "Send Application": "Enviar solicitud",
      "Complete the rental application form so the details can be reviewed.": "Complete el formulario de solicitud de alquiler para que los detalles puedan revisarse.",
      "A refundable application fee is a payment that will be returned to you if your application is not approved or if you decide not to move forward after the tour.": "Una tarifa de solicitud reembolsable es un pago que se le devolverá si su solicitud no es aprobada o si decide no continuar después de la visita.",
      "Yes, there is a refundable application fee of $75, which is paid through Chime after your application is submitted.": "Sí, hay una tarifa de solicitud reembolsable de $75, que se paga a través de Chime después de enviar su solicitud.",
      "Start Application": "Iniciar solicitud",
      "Application Received": "Solicitud recibida",
      "A confirmation email has been sent to you.": "Se le ha enviado un correo de confirmación.",
      "A confirmation email has been sent to you at": "Se le ha enviado un correo de confirmación a",
      "Please note that a refundable $75 application fee is required before the approval process can begin.": "Tenga en cuenta que se requiere una tarifa de solicitud reembolsable de $75 antes de que pueda comenzar el proceso de aprobación.",
      "Once the payment has been confirmed, your application review and approval process will officially commence.": "Una vez confirmado el pago, comenzará oficialmente el proceso de revisión y aprobación de su solicitud.",
      "Your submission is being reviewed for completeness and next-step fit. TenantFirst Management will contact you directly if more information, tour scheduling, or a refundable fee step is needed.": "Su solicitud se está revisando para confirmar que esté completa y definir los próximos pasos. TenantFirst Management se comunicará directamente si se necesita más información, programar una visita o un paso de tarifa reembolsable.",
      "Only if requested after review": "Solo si se solicita después de la revisión",
      "Possible Payment Options": "Posibles opciones de pago",
      "Some application steps may require a refundable fee after review. If that applies, instructions are provided directly and should match your Application ID.": "Algunos pasos de la solicitud pueden requerir una tarifa reembolsable después de la revisión. Si corresponde, las instrucciones se proporcionan directamente y deben coincidir con su ID de solicitud.",
      "Do not send payment unless TenantFirst Management has provided instructions for your application.": "No envíe ningún pago a menos que TenantFirst Management le haya proporcionado instrucciones para su solicitud.",
      "Most application reviews are completed within 24 to 48 hours. If more information is needed, you will be contacted using the email address or phone number provided in your application.": "La mayoría de las revisiones de solicitud se completan dentro de 24 a 48 horas. Si se necesita más información, se le contactará usando el correo electrónico o número de teléfono proporcionado en su solicitud.",
      "Private Review Process": "Proceso de revisión privado",
      "The application process is handled directly by the property management team. Submitted details are reviewed carefully, and any next-step instructions are tied to your application.": "El proceso de solicitud es gestionado directamente por el equipo de administración de la propiedad. Los datos enviados se revisan con cuidado, y cualquier instrucción de próximo paso se vincula a su solicitud.",
      "If a refundable application fee is requested after review, it is returned if the application is not approved or if you decide not to continue after the tour. If approved and you move forward, it is applied toward your first month's rent.": "Si se solicita una tarifa de solicitud reembolsable después de la revisión, se devuelve si la solicitud no es aprobada o si usted decide no continuar después de la visita. Si se aprueba y sigue adelante, se aplica al primer mes de renta.",
      "Questions or Verification": "Preguntas o verificación",
      "If you want to confirm a message, ask about timing, or clarify the application process, contact TenantFirst Management directly using the information below.": "Si desea confirmar un mensaje, preguntar sobre tiempos o aclarar el proceso de solicitud, contacte directamente a TenantFirst Management usando la información siguiente.",
      "Payment Verification": "Verificación de pago",
      "Use this page only if TenantFirst Management has already provided payment instructions for your application. Upload a confirmation screenshot after completing that assigned step.": "Use esta página solo si TenantFirst Management ya le proporcionó instrucciones de pago para su solicitud. Suba una captura de confirmación después de completar ese paso asignado.",
      "For assigned application steps only": "Solo para pasos asignados de la solicitud",
      "Accepted Payment Options": "Opciones de pago aceptadas",
      "Payment instructions are provided individually only when they apply to your reviewed application.": "Las instrucciones de pago se proporcionan individualmente solo cuando corresponden a su solicitud revisada.",
      "If you have not received instructions directly, no payment is needed from this page.": "Si no ha recibido instrucciones directamente, no se necesita ningún pago desde esta página.",
      "Choose screenshot": "Elegir captura",
      "or drag and drop your payment confirmation here.": "o arrastre y suelte su confirmación de pago aquí.",
      "Send Verification": "Enviar verificación",
      "Prefer to Email It?": "¿Prefiere enviarla por correo?",
      "If you have already received instructions and prefer email, you can send the confirmation directly to TenantFirst Management for review.": "Si ya recibió instrucciones y prefiere usar correo electrónico, puede enviar la confirmación directamente a TenantFirst Management para revisión.",
      "Email Confirmation": "Enviar confirmación por correo",
      "Verification Received": "Verificación recibida",
      "Your confirmation has been received and is currently under review. It will be matched with your Application ID, and you will be contacted if any additional information is needed": "Su confirmación fue recibida y actualmente está en revisión. Se asociará con su ID de solicitud y se le contactará si se necesita información adicional.",
      "Sending...": "Enviando...",
      "Sending application for review...": "Enviando solicitud para revisión...",
      "Sending confirmation email...": "Enviando correo de confirmación...",
      "Your application was saved, but the confirmation email could not be sent. Please contact support@privatepropmanagement.com.": "Su solicitud fue guardada, pero no se pudo enviar el correo de confirmación. Comuníquese con support@privatepropmanagement.com.",
      "Application received. Opening confirmation...": "Solicitud recibida. Abriendo confirmación...",
      "Application received...": "Solicitud recibida..."
    },
    zh: {
      "Start Application": "开始申请",
      "Request consultation": "申请咨询",
      "Contact TenantFirst Management": "联系 TenantFirst Management",
      "Verification Received": "验证已收到",
      "Your confirmation has been received and is currently under review. It will be matched with your Application ID, and you will be contacted if any additional information is needed": "您的确认已收到，目前正在审核中。它将与您申请编号匹配，如需补充信息会与您联系。",
      "Application Submitted Successfully": "申请已成功提交",
      "Thank you for your rental application.": "感谢您的租赁申请。",
      "Continue to Payment Instructions": "继续查看付款说明"
    },
    fr: {
      "Start Application": "Commencer la demande",
      "Request consultation": "Demander une consultation",
      "Contact TenantFirst Management": "Contacter TenantFirst Management",
      "Verification Received": "Vérification reçue",
      "Your confirmation has been received and is currently under review. It will be matched with your Application ID, and you will be contacted if any additional information is needed": "Votre confirmation a été reçue et est actuellement en cours d’examen. Elle sera associée à votre ID de demande et vous serez contacté si des informations supplémentaires sont nécessaires.",
      "Application Submitted Successfully": "Demande envoyée avec succès",
      "Thank you for your rental application.": "Merci pour votre demande de location.",
      "Continue to Payment Instructions": "Continuer vers les instructions de paiement"
    },
    ar: {
      "Start Application": "بدء الطلب",
      "Request consultation": "طلب استشارة",
      "Contact TenantFirst Management": "التواصل مع TenantFirst Management",
      "Verification Received": "تم استلام التحقق",
      "Your confirmation has been received and is currently under review. It will be matched with your Application ID, and you will be contacted if any additional information is needed": "تم استلام تأكيدك وهو قيد المراجعة حاليًا. سيتم ربطه برقم طلبك، وسيتم التواصل معك إذا لزم أي معلومات إضافية.",
      "Application Submitted Successfully": "تم إرسال الطلب بنجاح",
      "Thank you for your rental application.": "شكرًا لك على طلب الإيجار.",
      "Continue to Payment Instructions": "المتابعة إلى تعليمات الدفع"
    }
  };

  Object.keys(applicationTrustTranslations).forEach((language) => {
    Object.assign(translations[language], applicationTrustTranslations[language]);
  });

  Object.assign(aliases, {
    "Solicitud de alquiler": "Rental Application",
    "Complete el formulario a continuación para iniciar su proceso de solicitud.": "Complete the form below to begin your application process.",
    "Complete este formulario con precisión y veracidad. Toda la información proporcionada permanecerá confidencial y se requiere únicamente para el proceso de aprobación de la solicitud de alquiler. Cada adulto (18+) que solicite vivir en la unidad debe completar una solicitud por separado (Las solicitudes incompletas pueden causar retrasos en el procesamiento)": "Please complete this form accurately and truthfully. All information provided will remain confidential and is required solely for the rental application approval process. Each adult (18+) applying to live in the unit must complete a separate application (Incomplete applications may result in processing delays)",
    "Información de la propiedad": "Property Information",
    "Evaluación del solicitante": "Applicant Screening",
    "Enviar solicitud para revisión": "Send Application for Review",
    "Complete el formulario de solicitud de alquiler para que los detalles puedan revisarse.": "Complete the rental application form so the details can be reviewed.",
    "Una tarifa de solicitud reembolsable es un pago que se le devolverá si su solicitud no es aprobada o si decide no continuar después de la visita.": "A refundable application fee is a payment that will be returned to you if your application is not approved or if you decide not to move forward after the tour.",
    "Sí, hay una tarifa de solicitud reembolsable de $75, que se paga a través de Chime después de enviar su solicitud.": "Yes, there is a refundable application fee of $75, which is paid through Chime after your application is submitted.",
    "Iniciar solicitud": "Start Application",
    "Solicitud recibida": "Application Received",
    "Se le ha enviado un correo de confirmación.": "A confirmation email has been sent to you.",
    "Se le ha enviado un correo de confirmación a": "A confirmation email has been sent to you at",
    "Tenga en cuenta que se requiere una tarifa de solicitud reembolsable de $75 antes de que pueda comenzar el proceso de aprobación.": "Please note that a refundable $75 application fee is required before the approval process can begin.",
    "Una vez confirmado el pago, comenzará oficialmente el proceso de revisión y aprobación de su solicitud.": "Once the payment has been confirmed, your application review and approval process will officially commence.",
    "Su solicitud se está revisando para confirmar que esté completa y definir los próximos pasos. TenantFirst Management se comunicará directamente si se necesita más información, programar una visita o un paso de tarifa reembolsable.": "Your submission is being reviewed for completeness and next-step fit. TenantFirst Management will contact you directly if more information, tour scheduling, or a refundable fee step is needed.",
    "Solo si se solicita después de la revisión": "Only if requested after review",
    "Posibles opciones de pago": "Possible Payment Options",
    "Algunos pasos de la solicitud pueden requerir una tarifa reembolsable después de la revisión. Si corresponde, las instrucciones se proporcionan directamente y deben coincidir con su ID de solicitud.": "Some application steps may require a refundable fee after review. If that applies, instructions are provided directly and should match your Application ID.",
    "No envíe ningún pago a menos que TenantFirst Management le haya proporcionado instrucciones para su solicitud.": "Do not send payment unless TenantFirst Management has provided instructions for your application.",
    "La mayoría de las revisiones de solicitud se completan dentro de 24 a 48 horas. Si se necesita más información, se le contactará usando el correo electrónico o número de teléfono proporcionado en su solicitud.": "Most application reviews are completed within 24 to 48 hours. If more information is needed, you will be contacted using the email address or phone number provided in your application.",
    "Proceso de revisión privado": "Private Review Process",
    "El proceso de solicitud es gestionado directamente por el equipo de administración de la propiedad. Los datos enviados se revisan con cuidado, y cualquier instrucción de próximo paso se vincula a su solicitud.": "The application process is handled directly by the property management team. Submitted details are reviewed carefully, and any next-step instructions are tied to your application.",
    "Si se solicita una tarifa de solicitud reembolsable después de la revisión, se devuelve si la solicitud no es aprobada o si usted decide no continuar después de la visita. Si se aprueba y sigue adelante, se aplica al primer mes de renta.": "If a refundable application fee is requested after review, it is returned if the application is not approved or if you decide not to continue after the tour. If approved and you move forward, it is applied toward your first month's rent.",
    "Preguntas o verificación": "Questions or Verification",
    "Si desea confirmar un mensaje, preguntar sobre tiempos o aclarar el proceso de solicitud, contacte directamente a TenantFirst Management usando la información siguiente.": "If you want to confirm a message, ask about timing, or clarify the application process, contact TenantFirst Management directly using the information below.",
    "Verificación de pago": "Payment Verification",
    "Use esta página solo si TenantFirst Management ya le proporcionó instrucciones de pago para su solicitud. Suba una captura de confirmación después de completar ese paso asignado.": "Use this page only if TenantFirst Management has already provided payment instructions for your application. Upload a confirmation screenshot after completing that assigned step.",
    "Solo para pasos asignados de la solicitud": "For assigned application steps only",
    "Opciones de pago aceptadas": "Accepted Payment Options",
    "Las instrucciones de pago se proporcionan individualmente solo cuando corresponden a su solicitud revisada.": "Payment instructions are provided individually only when they apply to your reviewed application.",
    "Si no ha recibido instrucciones directamente, no se necesita ningún pago desde esta página.": "If you have not received instructions directly, no payment is needed from this page.",
    "Elegir captura": "Choose screenshot",
    "o arrastre y suelte su confirmación de pago aquí.": "or drag and drop your payment confirmation here.",
    "Enviar verificación": "Send Verification",
    "¿Prefiere enviarla por correo?": "Prefer to Email It?",
    "Si ya recibió instrucciones y prefiere usar correo electrónico, puede enviar la confirmación directamente a TenantFirst Management para revisión.": "If you have already received instructions and prefer email, you can send the confirmation directly to TenantFirst Management for review.",
    "Verificación recibida": "Verification Received",
    "Su confirmación fue recibida y actualmente está en revisión. Se asociará con su ID de solicitud y se le contactará si se necesita información adicional.": "Your confirmation has been received and is currently under review. It will be matched with your Application ID, and you will be contacted if any additional information is needed",
    "Revisión de solicitud": "Application Review",
    "Su envío es revisado por el equipo de administración de la propiedad antes de asignar cualquier instrucción de pago específica de la solicitud.": "Your submission is reviewed by the property management team before any application-specific payment instructions are assigned.",
    "Sí, puede aplicarse una tarifa de solicitud reembolsable después de la revisión. Las instrucciones de procesamiento de pago se asignan de forma privada y se proporcionan solo cuando su solicitud está lista para procesamiento.": "Yes, a refundable application fee may apply after review. Payment processing instructions are assigned privately and provided only when your application is ready for processing.",
    "Solicitud recibida correctamente": "Application Received Successfully",
    "Gracias por su solicitud de alquiler.": "Thank you for your rental application.",
    "Su solicitud está actualmente pendiente de revisión por parte del equipo de administración de la propiedad.": "Your application is currently pending review by the property management team.",
    "Por motivos de seguridad y verificación, las instrucciones de pago se asignan individualmente después de la revisión y se proporcionarán cuando su solicitud esté lista para procesamiento.": "For security and verification purposes, payment instructions are assigned individually after review and will be provided once your application is ready for processing.",
    "ID de solicitud:": "Application ID:",
    "Pendiente": "Pending",
    "Revisión de solicitud en curso": "Application Under Review",
    "Solicitud en revisión": "Application Under Review",
    "Revisión pendiente": "Pending Review",
    "Nuestro equipo está revisando su envío. Una vez que su solicitud esté lista para procesamiento, se le proporcionarán directamente las instrucciones de pago asignadas y los siguientes pasos.": "Our team is currently reviewing your submission. Once your application is ready for processing, assigned payment instructions and next steps will be provided directly.",
    "Tiempo estimado de revisión": "Estimated Review Timeline",
    "La mayoría de las revisiones de solicitud se completan dentro de 24 a 48 horas. Si se necesita verificación adicional, el equipo de administración de la propiedad se comunicará con usted usando el correo electrónico o número de teléfono proporcionado en su solicitud.": "Most application reviews are completed within 24 to 48 hours. If additional verification is needed, the property management team will contact you using the email address or phone number provided in your application.",
    "Proceso seguro y verificado": "Secure & Verified Process",
    "Este proceso de solicitud es gestionado directamente por el equipo de administración de la propiedad. Todas las solicitudes enviadas se revisan cuidadosamente, y los detalles de pago específicos de cada solicitud se asignan de forma privada como parte del proceso de verificación.": "This application process is handled directly by the property management team. All submitted applications are reviewed carefully, and application-specific payment details are assigned privately as part of the verification process.",
    "¿Necesita ayuda o desea verificar?": "Need Help or Want to Verify?",
    "Para preguntas, aclaraciones o verificación sobre el proceso de solicitud, puede contactar directamente a TenantFirst Management usando la información siguiente.": "For any questions, clarification, or verification regarding the application process, you can contact TenantFirst Management directly using the information below.",
    "Correo electrónico:": "Email:",
    "Teléfono:": "Phone:",
    "Asignación privada de pago": "Private payment assignment",
    "Métodos de pago compatibles": "Supported Payment Methods",
    "Por motivos de seguridad y verificación, las instrucciones de pago se asignan individualmente después de revisar la solicitud.": "For security and verification purposes, payment instructions are assigned individually after application review.",
    "Las opciones de pago disponibles pueden variar según las instrucciones de procesamiento asignadas.": "Available payment options may vary depending on the assigned processing instructions.",
    "Confirmación por correo electrónico": "Email Confirmation",
    "Pronto se enviará un correo de confirmación a la dirección proporcionada en su solicitud. Ese correo confirmará que su solicitud fue recibida y está pendiente de revisión.": "A confirmation email will be sent shortly to the email address provided in your application. That email will confirm that your application has been received and is pending review.",
    "Transparencia de tarifas": "Fee Transparency",
    "La tarifa de solicitud es reembolsable si su solicitud no es aprobada o si decide no continuar después de la visita. Si se aprueba y decide seguir adelante, la tarifa se aplica al primer mes de renta.": "The application fee is refundable if your application is not approved or if you decide not to proceed after the tour. If approved and you choose to move forward, the fee is applied toward your first month's rent.",
    "Igualdad de oportunidad de vivienda": "Equal Housing Opportunity",
    "Apoyamos prácticas de vivienda justas e igualitarias para todos los solicitantes, de acuerdo con las pautas de vivienda aplicables y las normas contra la discriminación.": "We support fair and equal housing practices for all applicants in accordance with applicable housing guidelines and nondiscrimination standards."
  });

  const deprecatedPaymentWorkflowTranslations = {
    es: {
      "Assigned Payment Instructions": "Instrucciones de pago asignadas",
      "Payment Options:": "Opciones de pago:",
      "Assigned Privately:": "Asignado de forma privada:",
      "Payment Details:": "Detalles de pago:",
      "Application Fee:": "Tarifa de solicitud:",
      "Verification Note:": "Nota de verificación:",
      "Provide a screenshot of the payment confirmation via email or text.": "Envíe la confirmación de pago únicamente después de recibir instrucciones asignadas para su solicitud.",
      "Do not send payment until assigned processing instructions are provided directly. Keep your payment confirmation for your records.": "No envíe ningún pago hasta que se le proporcionen instrucciones de procesamiento asignadas directamente. Conserve su confirmación para sus registros.",
      "I have completed the application fee payment": "He recibido instrucciones de pago asignadas",
      "Continue To Payment Confirmation": "Continuar a la verificación de pago",
      "Payment Options Are Assigned Privately": "Opciones de pago asignadas de forma privada",
      "Available payment options are confirmed individually after application review.": "Las opciones disponibles se confirmarán individualmente después de la revisión de la solicitud.",
      "Before Sending Payment": "Antes de enviar un pago",
      "Wait for assigned processing instructions.": "Espere las instrucciones de procesamiento asignadas.",
      "Confirm the instructions match your application.": "Verifique que las instrucciones correspondan a su solicitud.",
      "Use only the payment method assigned directly to you.": "Use solo el método de pago asignado directamente.",
      "Include your Application ID when requested.": "Incluya su ID de solicitud cuando se le solicite.",
      "Keep your payment confirmation for your records.": "Conserve su comprobante de pago.",
      "Upload confirmation only after completing the assigned payment.": "Suba la confirmación solo después de completar el pago asignado."
    },
    fr: {
      "Assigned Payment Instructions": "Instructions de paiement attribuées",
      "Payment Options:": "Options de paiement :",
      "Assigned Privately:": "Attribué en privé :",
      "Payment Details:": "Informations de paiement :",
      "Application Fee:": "Frais de demande :",
      "Verification Note:": "Note de vérification :",
      "Provide a screenshot of the payment confirmation via email or text.": "Envoyez une confirmation de paiement uniquement après avoir reçu les instructions attribuées à votre demande.",
      "Do not send payment until assigned processing instructions are provided directly. Keep your payment confirmation for your records.": "N’envoyez aucun paiement avant d’avoir reçu directement les instructions de traitement attribuées. Conservez votre confirmation dans vos dossiers.",
      "I have completed the application fee payment": "J’ai reçu les instructions de paiement attribuées",
      "Continue To Payment Confirmation": "Continuer vers la vérification du paiement",
      "Payment Options Are Assigned Privately": "Options de paiement attribuées en privé",
      "Available payment options are confirmed individually after application review.": "Les options disponibles seront confirmées individuellement après l’examen de la demande.",
      "Before Sending Payment": "Avant d’envoyer un paiement",
      "Wait for assigned processing instructions.": "Attendez les instructions de traitement attribuées.",
      "Confirm the instructions match your application.": "Vérifiez que les instructions correspondent à votre demande.",
      "Use only the payment method assigned directly to you.": "Utilisez uniquement le mode de paiement qui vous a été attribué directement.",
      "Include your Application ID when requested.": "Indiquez votre ID de demande lorsqu’il est demandé.",
      "Keep your payment confirmation for your records.": "Conservez votre justificatif de paiement.",
      "Upload confirmation only after completing the assigned payment.": "Téléversez la confirmation seulement après avoir effectué le paiement attribué."
    },
    ar: {
      "Assigned Payment Instructions": "تعليمات الدفع المخصصة",
      "Payment Options:": "خيارات الدفع:",
      "Assigned Privately:": "يتم التخصيص بشكل خاص:",
      "Payment Details:": "تفاصيل الدفع:",
      "Application Fee:": "رسوم الطلب:",
      "Verification Note:": "ملاحظة التحقق:",
      "Provide a screenshot of the payment confirmation via email or text.": "أرسل تأكيد الدفع فقط بعد تلقي التعليمات المخصصة لطلبك.",
      "Do not send payment until assigned processing instructions are provided directly. Keep your payment confirmation for your records.": "لا ترسل أي دفعة حتى يتم تزويدك مباشرة بتعليمات المعالجة المخصصة. احتفظ بتأكيد الدفع ضمن سجلاتك.",
      "I have completed the application fee payment": "تلقيت تعليمات الدفع المخصصة",
      "Continue To Payment Confirmation": "المتابعة إلى التحقق من الدفع",
      "Payment Options Are Assigned Privately": "خيارات الدفع تُخصص بشكل خاص",
      "Available payment options are confirmed individually after application review.": "سيتم تأكيد الخيارات المتاحة بشكل فردي بعد مراجعة الطلب.",
      "Before Sending Payment": "قبل إرسال أي دفعة",
      "Wait for assigned processing instructions.": "انتظر تعليمات المعالجة المخصصة.",
      "Confirm the instructions match your application.": "تحقق من أن التعليمات مرتبطة بطلبك.",
      "Use only the payment method assigned directly to you.": "استخدم فقط طريقة الدفع التي تم تخصيصها لك مباشرة.",
      "Include your Application ID when requested.": "أدرج رقم الطلب عند طلبه.",
      "Keep your payment confirmation for your records.": "احتفظ بإثبات الدفع.",
      "Upload confirmation only after completing the assigned payment.": "ارفع التأكيد فقط بعد إكمال الدفع المخصص."
    }
  };

  Object.keys(deprecatedPaymentWorkflowTranslations).forEach((language) => {
    Object.assign(translations[language], deprecatedPaymentWorkflowTranslations[language]);
  });

  const paymentUploadTranslations = {
    es: {
      "Application ID": "ID de solicitud",
      "Uploading...": "Subiendo...",
      "We could not upload your payment screenshot. Please try again.": "No pudimos subir la captura de pantalla del pago. Inténtelo de nuevo."
    },
    zh: {
      "Application ID": "申请编号",
      "Uploading...": "正在上传...",
      "We could not upload your payment screenshot. Please try again.": "无法上传您的付款截图。请重试。"
    },
    fr: {
      "Application ID": "ID de demande",
      "Uploading...": "Téléversement...",
      "We could not upload your payment screenshot. Please try again.": "Nous n’avons pas pu téléverser votre capture d’écran du paiement. Veuillez réessayer."
    },
    ar: {
      "Application ID": "رقم الطلب",
      "Uploading...": "جارٍ الرفع...",
      "We could not upload your payment screenshot. Please try again.": "تعذر رفع لقطة شاشة الدفع. يرجى المحاولة مرة أخرى."
    }
  };

  Object.keys(paymentUploadTranslations).forEach((language) => {
    Object.assign(translations[language], paymentUploadTranslations[language]);
  });

  function mergeI18nExtensions() {
    const extensions = window.__PPM_I18N_EXTENSIONS__;
    if (!extensions) {
      return;
    }

    ["es", "zh", "fr", "ar"].forEach((language) => {
      if (translations[language] && extensions[language]) {
        Object.assign(translations[language], extensions[language]);
      }
    });
  }

  mergeI18nExtensions();

  function pageFileName() {
    const file = window.location.pathname.split("/").pop() || "index.html";
    return file === "" ? "index.html" : file;
  }

  function translatePageTitle(language) {
    const titles = window.__PPM_PAGE_TITLES__;
    if (!titles) {
      return;
    }

    const file = pageFileName();
    const map = titles[file];
    if (!map) {
      return;
    }

    const nextTitle = map[language] || map.en;
    if (nextTitle) {
      document.title = nextTitle;
    }
  }

  function translateMetaDescription(language) {
    const meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      return;
    }

    const english = meta.dataset.descriptionKey || meta.getAttribute("content");
    if (!english) {
      return;
    }

    meta.dataset.descriptionKey = english;
    const translated = translateText(english, language);
    if (translated) {
      meta.setAttribute("content", translated);
    }
  }

  function syncPageLanguageUrl(language) {
    if (isHomePage() || document.body.classList.contains("privacy-notice-page")) {
      return;
    }

    const url = new URL(window.location.href);

    if (language === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", language);
    }

    const next = `${url.pathname}${url.search}${url.hash}`;
    if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== next) {
      window.history.replaceState({}, "", next);
    }
  }

  const languageOptions = [
    { value: "en", label: "English", shortLabel: "EN", flag: "🇺🇸" },
    { value: "es", label: "Español", shortLabel: "ES", flag: "🇪🇸" },
    { value: "zh", label: "中文", shortLabel: "中文", flag: "🇨🇳" },
    { value: "fr", label: "Français", shortLabel: "FR", flag: "🇫🇷" },
    { value: "ar", label: "العربية", shortLabel: "AR", flag: "🇸🇦" }
  ];

  const languageHomeFallbacks = {
    en: "index.html",
    es: "index.html?lang=es",
    zh: "index.html?lang=zh",
    fr: "index.html?lang=fr",
    ar: "index.html?lang=ar"
  };

  function normalizeLanguage(language) {
    const value = String(language || "").toLowerCase().split("-")[0];
    return languageOptions.some((option) => option.value === value) ? value : "en";
  }

  function dateLocaleForLanguage(language) {
    const locales = {
      en: "en-US",
      es: "es-ES",
      zh: "zh-CN",
      fr: "fr-FR",
      ar: "ar-SA",
      pt: "pt-BR"
    };
    return locales[normalizeLanguage(language)] || "en-US";
  }

  function storedLanguage() {
    const params = new URLSearchParams(window.location.search);
    return normalizeLanguage(
      params.get("lang") ||
      window.sessionStorage.getItem("latestApplicationLanguage") ||
      window.localStorage.getItem("latestApplicationLanguage") ||
      window.localStorage.getItem("site-language") ||
      document.documentElement.lang ||
      defaultLanguage
    );
  }

  const PROPERTY_STORAGE_KEY = "latestApplicationProperty";

  function propertyFromUrl() {
    const value = new URLSearchParams(window.location.search).get("property");
    if (!value) {
      return "";
    }

    try {
      return decodeURIComponent(value).trim();
    } catch (error) {
      return value.trim();
    }
  }

  function storedProperty() {
    try {
      return (
        window.sessionStorage.getItem(PROPERTY_STORAGE_KEY) ||
        window.localStorage.getItem(PROPERTY_STORAGE_KEY) ||
        ""
      ).trim();
    } catch (error) {
      return "";
    }
  }

  function persistProperty(property) {
    const value = String(property || "").trim();
    if (!value) {
      return "";
    }

    try {
      window.sessionStorage.setItem(PROPERTY_STORAGE_KEY, value);
      window.localStorage.setItem(PROPERTY_STORAGE_KEY, value);
    } catch (error) {
      console.warn("Could not persist application property:", error);
    }

    return value;
  }

  function clearStoredProperty() {
    try {
      window.sessionStorage.removeItem(PROPERTY_STORAGE_KEY);
      window.localStorage.removeItem(PROPERTY_STORAGE_KEY);
    } catch (error) {
      console.warn("Could not clear application property:", error);
    }
  }

  function resolveApplicationProperty() {
    const fromUrl = propertyFromUrl();
    if (fromUrl) {
      return persistProperty(fromUrl);
    }

    if (isHomePage()) {
      clearStoredProperty();
      return "";
    }

    return storedProperty();
  }

  function normalizedPageName(url) {
    const tail = url.pathname.split("/").filter(Boolean).pop();
    return tail || "index.html";
  }

  function buildApplicationFlowHref(path, options = {}) {
    const url = new URL(path, window.location.href);
    const lang = normalizeLanguage(options.language ?? storedLanguage());
    const property = String(
      options.property ?? propertyFromUrl() ?? storedProperty()
    ).trim();
    const applicationId = String(options.applicationId || "").trim();

    if (lang === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", lang);
    }

    if (property) {
      url.searchParams.set("property", property);
    } else {
      url.searchParams.delete("property");
    }

    if (applicationId) {
      url.searchParams.set("applicationId", applicationId);
    } else {
      url.searchParams.delete("applicationId");
    }

    const fileName = String(path).split("/").pop() || path;
    return `${fileName}${url.search}${url.hash || ""}`;
  }

  function buildHomePageHref(language) {
    return buildApplicationFlowHref("index.html", { language });
  }

  function renderPropertyContextBanner() {
    const property = isHomePage() ? propertyFromUrl() : (propertyFromUrl() || storedProperty());
    document.querySelectorAll("[data-property-context-banner]").forEach((banner) => {
      const valueNode = banner.querySelector("[data-property-context-value]");
      if (!property) {
        banner.hidden = true;
        return;
      }

      banner.hidden = false;
      if (valueNode) {
        valueNode.textContent = property;
      }
    });
  }

  function renderListingBridgeCopy() {
    const property = propertyFromUrl() || storedProperty();
    document.querySelectorAll("[data-listing-bridge]").forEach((bridge) => {
      const generic = bridge.querySelector('[data-listing-bridge-variant="generic"]');
      const withProperty = bridge.querySelector('[data-listing-bridge-variant="property"]');
      const hasProperty = Boolean(property);

      if (generic) {
        generic.hidden = hasProperty;
      }

      if (withProperty) {
        withProperty.hidden = !hasProperty;
        const propertyNode = withProperty.querySelector("[data-listing-bridge-property]");
        if (propertyNode) {
          propertyNode.textContent = property;
        }
      }
    });
  }

  function applyPropertyContextToForm() {
    const field = document.getElementById("property");
    if (!field) {
      return;
    }

    const property = storedProperty();
    if (property && !field.value.trim()) {
      field.value = property;
    }
  }

  function applyPropertyContext() {
    resolveApplicationProperty();
    renderPropertyContextBanner();
    renderListingBridgeCopy();
    applyPropertyContextToForm();

    if (isHomePage()) {
      syncFloatingApplyHref(document.documentElement.lang || storedLanguage());
    }
  }

  function languageHomeFallback() {
    return buildHomePageHref(storedLanguage());
  }

  function currentHomeFile() {
    const file = window.location.pathname.split("/").pop() || "index.html";
    return file === "" ? "index.html" : file;
  }

  function isHomePage() {
    const file = currentHomeFile();
    return file === "index.html" || file === "es.html";
  }

  function redirectLegacyHomePages() {
    const file = currentHomeFile();
    if (file === "es.html") {
      const target = new URL("index.html?lang=es", window.location.href);
      const urlProperty = propertyFromUrl();
      if (urlProperty) {
        target.searchParams.set("property", urlProperty);
      }
      if (window.location.hash) {
        target.hash = window.location.hash;
      }
      window.location.replace(target.href);
      return true;
    }
    return false;
  }

  function initHomepageScrollPosition() {
    if (!isHomePage()) {
      return;
    }

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "auto";
    }

    const scrollToHashTarget = () => {
      const raw = window.location.hash;
      if (!raw || raw.length < 2) {
        return;
      }

      let id = raw.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch (error) {
        /* keep raw id */
      }

      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ block: "start", inline: "nearest" });
      }
    };

    window.addEventListener("hashchange", scrollToHashTarget);
    window.addEventListener("load", scrollToHashTarget, { once: true });
    if (document.readyState === "complete") {
      scrollToHashTarget();
    }
  }

  function logI18n(event, details) {
    console.log(`[i18n] ${event}`, details || "");
  }

  function persistLanguageChoice(language) {
    const lang = normalizeLanguage(language);
    window.localStorage.setItem("site-language", lang);
    window.sessionStorage.setItem("latestApplicationLanguage", lang);
    window.localStorage.setItem("latestApplicationLanguage", lang);
    logI18n("persist", {
      lang,
      siteLanguage: window.localStorage.getItem("site-language"),
      latestApplicationLanguage: window.localStorage.getItem("latestApplicationLanguage")
    });
    return lang;
  }

  function redirectForHomeLanguage(language) {
    if (!isHomePage()) {
      return false;
    }

    const lang = normalizeLanguage(language);
    const urlProperty = propertyFromUrl();
    if (urlProperty) {
      persistProperty(urlProperty);
    }

    const target = buildApplicationFlowHref("index.html", {
      language: lang,
      property: urlProperty || storedProperty()
    });
    const targetUrl = new URL(target, window.location.href);
    const currentUrl = new URL(window.location.href);
    if (currentUrl.hash) {
      targetUrl.hash = currentUrl.hash;
    }

    if (
      normalizedPageName(currentUrl) !== normalizedPageName(targetUrl) ||
      currentUrl.search !== targetUrl.search
    ) {
      persistLanguageChoice(lang);
      window.PPMPageLoader?.show("Loading page…");
      logI18n("routing", {
        switchTarget: lang,
        currentUrl: currentUrl.href,
        destination: targetUrl.href,
        result: "redirect"
      });
      window.location.href = targetUrl.href;
      return true;
    }

    return false;
  }

  function switchLanguage(language) {
    const target = normalizeLanguage(language);
    logI18n("switch", {
      switchTarget: target,
      currentLanguage: document.documentElement.lang || defaultLanguage,
      url: window.location.href,
      storedLanguage: window.localStorage.getItem("site-language"),
      sessionLanguage: window.sessionStorage.getItem("latestApplicationLanguage")
    });
    persistLanguageChoice(target);

    if (redirectForHomeLanguage(target)) {
      return;
    }

    applyLanguage(target);
    logI18n("applied", {
      switchTarget: target,
      currentLanguage: document.documentElement.lang,
      dir: document.documentElement.dir,
      result: "in-page"
    });
  }

  function syncFloatingApplyHref(language) {
    const lang = normalizeLanguage(language);
    const href = buildApplicationFlowHref("apply.html", { language: lang });
    document.querySelectorAll("a.floating-apply").forEach((link) => {
      link.setAttribute("href", href);
    });
  }

  function bindFloatingApplyLinks() {
    document.querySelectorAll("a.floating-apply").forEach((link) => {
      if (link.dataset.applyBound === "true") {
        return;
      }
      link.dataset.applyBound = "true";
      link.addEventListener("click", function (event) {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
          return;
        }
        event.preventDefault();
        const dest = link.getAttribute("href") || "apply.html";
        window.location.assign(new URL(dest, window.location.href).href);
      });
    });
  }

  function initDraggableFloatingApply() {
    const storageKey = "ppm-floating-apply-pos";

    document.querySelectorAll("a.floating-apply").forEach((link) => {
      if (link.dataset.dragBound === "true") {
        return;
      }
      link.dataset.dragBound = "true";

      let dragging = false;
      let suppressClick = false;
      let startX = 0;
      let startY = 0;
      let originLeft = 0;
      let originTop = 0;

      function edgePad() {
        return 12;
      }

      function clampPosition(left, top) {
        const width = link.offsetWidth;
        const height = link.offsetHeight;
        const pad = edgePad();
        const maxLeft = Math.max(pad, window.innerWidth - width - pad);
        const maxTop = Math.max(pad, window.innerHeight - height - pad);
        return {
          left: Math.min(Math.max(pad, left), maxLeft),
          top: Math.min(Math.max(pad, top), maxTop)
        };
      }

      function snapToEdge(left, top) {
        const width = link.offsetWidth;
        const pad = edgePad();
        const maxLeft = Math.max(pad, window.innerWidth - width - pad);
        const clamped = clampPosition(left, top);
        const centerX = clamped.left + width / 2;
        const snapLeft = centerX <= window.innerWidth / 2;

        return {
          left: snapLeft ? pad : maxLeft,
          top: clamped.top
        };
      }

      function place(left, top) {
        const next = clampPosition(left, top);
        link.style.setProperty("--fab-left", `${next.left}px`);
        link.style.setProperty("--fab-top", `${next.top}px`);
        link.classList.add("is-moved");
      }

      function persist() {
        try {
          localStorage.setItem(
            storageKey,
            JSON.stringify({
              left: parseFloat(link.style.getPropertyValue("--fab-left")) || 0,
              top: parseFloat(link.style.getPropertyValue("--fab-top")) || 0
            })
          );
        } catch (error) {
          /* ignore quota / private mode */
        }
      }

      function restore() {
        try {
          const raw = localStorage.getItem(storageKey);
          if (!raw) {
            return;
          }
          const saved = JSON.parse(raw);
          if (typeof saved.left !== "number" || typeof saved.top !== "number") {
            return;
          }
          const snapped = snapToEdge(saved.left, saved.top);
          place(snapped.left, snapped.top);
        } catch (error) {
          /* ignore */
        }
      }

      link.addEventListener("click", function (event) {
        if (!suppressClick) {
          return;
        }
        event.preventDefault();
        event.stopImmediatePropagation();
        suppressClick = false;
      }, true);

      link.addEventListener("pointerdown", function (event) {
        if (event.button !== 0) {
          return;
        }
        const rect = link.getBoundingClientRect();
        dragging = true;
        suppressClick = false;
        startX = event.clientX;
        startY = event.clientY;
        originLeft = rect.left;
        originTop = rect.top;
        link.classList.add("is-dragging");
        try {
          link.setPointerCapture(event.pointerId);
        } catch (error) {
          /* capture is optional; drag still works from pointermove */
        }
      });

      link.addEventListener("pointermove", function (event) {
        if (!dragging) {
          return;
        }
        const dx = event.clientX - startX;
        const dy = event.clientY - startY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          suppressClick = true;
          event.preventDefault();
          place(originLeft + dx, originTop + dy);
        }
      });

      function endDrag() {
        if (!dragging) {
          return;
        }
        dragging = false;
        link.classList.remove("is-dragging");
        if (!link.classList.contains("is-moved")) {
          return;
        }
        const left = parseFloat(link.style.getPropertyValue("--fab-left")) || 0;
        const top = parseFloat(link.style.getPropertyValue("--fab-top")) || 0;
        const snapped = snapToEdge(left, top);
        place(snapped.left, snapped.top);
        persist();
      }

      link.addEventListener("pointerup", endDrag);
      link.addEventListener("pointercancel", endDrag);

      window.addEventListener("resize", function () {
        if (!link.classList.contains("is-moved")) {
          return;
        }
        const left = parseFloat(link.style.getPropertyValue("--fab-left")) || 0;
        const top = parseFloat(link.style.getPropertyValue("--fab-top")) || 0;
        const snapped = snapToEdge(left, top);
        place(snapped.left, snapped.top);
        persist();
      });

      restore();
    });
  }

  function privacyNoticeHref(language) {
    const lang = normalizeLanguage(language);
    return `privacy-notice.html?lang=${encodeURIComponent(lang)}`;
  }

  function syncPrivacyNoticeLink(language) {
    const href = privacyNoticeHref(language);
    document.querySelectorAll("#privacy-notice-link, a.agreement-panel__privacy-link[href*='privacy-notice.html'], a.footer-privacy-link").forEach((link) => {
      link.setAttribute("href", href);
    });
  }

  function syncBackFallbacks(language) {
    const supportedLanguage = normalizeLanguage(language);
    const applyFallback =
      supportedLanguage === "en" ? "apply.html" : `apply.html?lang=${encodeURIComponent(supportedLanguage)}`;

    backButtons.forEach((button) => {
      if (button.id === "applicationBackButton" || document.body.classList.contains("payment-confirmation-page")) {
        return;
      }

      if (document.body.classList.contains("privacy-notice-page")) {
        button.dataset.fallbackHome = applyFallback;
        if (button.tagName === "A") {
          button.setAttribute("href", applyFallback);
        }
        return;
      }

      if (applicationForm) {
        button.dataset.fallbackHome = buildHomePageHref(supportedLanguage);
      }
    });
  }

  function resolveBackFallback(button) {
    const explicitFallback = button.dataset.fallbackHome;
    if (explicitFallback) {
      return explicitFallback;
    }

    return languageHomeFallback();
  }

  function canonicalize(text) {
    const straightApostrophe = text.replace(/\u2019/g, "'");
    if (straightApostrophe !== text && aliases[straightApostrophe]) {
      return aliases[straightApostrophe];
    }

    const spanishGalleryDot = text.match(/^Ir a la imagen (\d{1,2})$/);

    if (spanishGalleryDot) {
      const n = Math.min(Math.max(parseInt(spanishGalleryDot[1], 10) || 1, 1), 7);
      return `Go to image ${n}`;
    }

    return aliases[text] || text;
  }

  function resolveTranslationKey(trimmed, parent) {
    if (parent?.dataset?.translationKey) {
      return parent.dataset.translationKey;
    }

    const aliased = aliases[trimmed];
    if (aliased) {
      return aliased;
    }

    if (translations.es[trimmed] || translations.zh[trimmed] || translations.fr[trimmed] || translations.ar[trimmed]) {
      return trimmed;
    }

    for (const lang of ["es", "zh", "fr", "ar"]) {
      const table = translations[lang];
      if (!table) {
        continue;
      }

      for (const enKey in table) {
        if (table[enKey] === trimmed) {
          return enKey;
        }
      }
    }

    return trimmed;
  }

  function hasTranslatableKey(key, trimmed) {
    if (key !== trimmed) {
      return true;
    }

    const variants = [key, key.replace(/\u2019/g, "'"), key.replace(/'/g, "\u2019")];
    return variants.some((variant) => (
      translations.es[variant] ||
      translations.zh[variant] ||
      translations.fr[variant] ||
      translations.ar[variant]
    ));
  }

  function translateText(text, language) {
    const key = canonicalize(text);

    const galleryDot = key.match(/^Go to image (\d{1,2})$/);
    if (galleryDot && language !== "en") {
      const number = String(Math.min(Math.max(parseInt(galleryDot[1], 10) || 1, 1), 7));
      const labels = {
        es: `Ir a la imagen ${number}`,
        zh: `转到第 ${number} 张图片`,
        fr: `Aller à l'image ${number}`,
        ar: `انتقل إلى الصورة ${number}`
      };
      return labels[language] || key;
    }

    if (language === "en") {
      return key;
    }

    const table = translations[language];
    if (!table) {
      return key;
    }

    if (table[key]) {
      return table[key];
    }

    const straightKey = key.replace(/\u2019/g, "'");
    if (table[straightKey]) {
      return table[straightKey];
    }

    const curlyKey = key.replace(/'/g, "\u2019");
    if (table[curlyKey]) {
      return table[curlyKey];
    }

    return key;
  }

  function currentLanguage() {
    return document.documentElement.lang || defaultLanguage || "en";
  }

  function shouldSkipTextNode(node) {
    const parent = node.parentElement;
    return (
      !parent ||
      parent.closest(
        "script, style, time, .language-select, .language-bar, [data-no-i18n], #application-id-value, #applicant-email-value, [data-property-context-value], [data-listing-bridge-property]"
      )
    );
  }

  function translateTextNodes(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (shouldSkipTextNode(node) || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach((node) => {
      const original = node.nodeValue;
      const trimmed = original.trim();
      const parent = node.parentElement;
      const key = resolveTranslationKey(trimmed, parent);

      if (!hasTranslatableKey(key, trimmed)) {
        return;
      }

      parent.dataset.translationKey = key;
      node.nodeValue = original.replace(trimmed, translateText(key, language));
    });
  }

  function translateAttributes(language) {
    [
      { attribute: "placeholder", keyName: "placeholderKey" },
      { attribute: "aria-label", keyName: "ariaLabelKey" },
      { attribute: "alt", keyName: "altKey" }
    ].forEach(({ attribute, keyName }) => {
      document.querySelectorAll(`[${attribute}]`).forEach((element) => {
        if (!element.hasAttribute(attribute)) {
          return;
        }

        const current = element.getAttribute(attribute);
        const key = element.dataset[keyName] || resolveTranslationKey(current, element);
        const canTranslate = /^Go to image \d{1,2}$/.test(key) || hasTranslatableKey(key, current);

        if (!canTranslate) {
          return;
        }

        element.dataset[keyName] = key;
        element.setAttribute(attribute, translateText(key, language));
      });
    });
  }

  function validationMessageFor(field) {
    if (field.validity.valueMissing) {
      return field.type === "checkbox"
        ? translateText("Please check this box to continue.", currentLanguage())
        : translateText("Please complete this required field.", currentLanguage());
    }

    if (field.validity.customError && field.id === "credit-score") {
      return translateText("Please enter a credit score between 100 and 800, or leave blank.", currentLanguage());
    }

    if (field.validity.typeMismatch && field.type === "email") {
      return translateText("Please enter a valid email address.", currentLanguage());
    }

    return "";
  }

  function attachLocalizedValidation(field) {
    if (field.dataset.localizedValidation === "true") {
      return;
    }

    field.dataset.localizedValidation = "true";
    field.addEventListener("invalid", () => {
      field.setCustomValidity(validationMessageFor(field));
    });
    field.addEventListener("input", () => {
      field.setCustomValidity("");
    });
    field.addEventListener("change", () => {
      field.setCustomValidity("");
    });
  }

  function setupLocalizedValidation() {
    document.querySelectorAll("input, select, textarea").forEach(attachLocalizedValidation);
  }

  function syncLanguageSelects(language) {
    languageSelects.forEach((select) => {
      Array.from(select.options).forEach((option, index) => {
        option.textContent = optionLabels[language][index];
      });
      select.value = language;
    });
  }

  function syncLanguageMenus(language) {
    document.querySelectorAll(".language-pill").forEach((button) => {
      const isActive = button.dataset.languageValue === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
      button.setAttribute("aria-selected", String(isActive));
    });
  }

  function enhanceLanguageSwitchers() {
    languageSwitchers.forEach((switcher, index) => {
      const select = switcher.querySelector(".language-select");
      if (!select || switcher.querySelector(".language-bar")) {
        return;
      }

      switcher.classList.add("is-enhanced");

      const bar = document.createElement("div");
      bar.className = "language-bar";
      bar.id = `language-bar-${index}`;
      bar.setAttribute("role", "listbox");
      bar.setAttribute("aria-label", select.getAttribute("aria-label") || "Select language");

      languageOptions.forEach((language) => {
        const button = document.createElement("button");
        button.className = "language-pill";
        button.type = "button";
        button.dataset.languageValue = language.value;
        button.setAttribute("role", "option");
        button.setAttribute("aria-label", language.label);
        button.innerHTML = `<span class="language-flag" aria-hidden="true">${language.flag}</span><span class="language-code">${language.shortLabel}</span>`;
        button.addEventListener("click", function () {
          switchLanguage(language.value);
        });
        bar.appendChild(button);
      });

      select.insertAdjacentElement("afterend", bar);
    });
  }

  function translateLocalizedDates(language) {
    const locale = dateLocaleForLanguage(language);

    document.querySelectorAll("time[datetime]").forEach((element) => {
      if (!element.dataset.dateEn) {
        element.dataset.dateEn = element.textContent.trim();
      }

      const iso = element.getAttribute("datetime");
      if (!iso) {
        return;
      }

      if (language === "en") {
        element.textContent = element.dataset.dateEn;
        return;
      }

      const date = new Date(iso.includes("T") ? iso : `${iso}T12:00:00`);
      if (Number.isNaN(date.getTime())) {
        return;
      }

      element.textContent = date.toLocaleDateString(locale, {
        month: "long",
        day: "numeric",
        year: "numeric"
      });
    });
  }

  function syncDateInputLocales(language) {
    const locale = dateLocaleForLanguage(language);

    document.querySelectorAll('input[type="date"]').forEach((input) => {
      const value = input.value;
      input.setAttribute("lang", locale);
      input.setAttribute("data-date-locale", locale);
      input.type = "text";
      input.type = "date";
      if (value) {
        input.value = value;
      }
      attachLocalizedValidation(input);
    });
  }

  function applyLanguage(language) {
    const supportedLanguage = normalizeLanguage(language);
    logI18n("applyLanguage", {
      requested: language,
      supportedLanguage,
      translationLoad: supportedLanguage === "en" ? "restore-english" : "translate"
    });
    document.documentElement.lang = supportedLanguage;
    document.documentElement.dir = supportedLanguage === "ar" ? "rtl" : "ltr";
    translateTextNodes(supportedLanguage);
    translateAttributes(supportedLanguage);
    translateLocalizedDates(supportedLanguage);
    syncDateInputLocales(supportedLanguage);
    translatePageTitle(supportedLanguage);
    translateMetaDescription(supportedLanguage);
    syncLanguageSelects(supportedLanguage);
    syncLanguageMenus(supportedLanguage);
    syncBackFallbacks(supportedLanguage);
    syncFloatingApplyHref(supportedLanguage);
    syncPrivacyNoticeLink(supportedLanguage);
    syncPageLanguageUrl(supportedLanguage);
    applyPropertyContext();
    document.querySelectorAll("input, select, textarea").forEach((field) => field.setCustomValidity(""));
    persistLanguageChoice(supportedLanguage);
  }

  if (hamburger && nav && isHomePage()) {
    const overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    overlay.setAttribute("aria-hidden", "true");
    nav.insertAdjacentElement("afterend", overlay);

    function setHamburgerLabel(englishKey) {
      const label = translateText(englishKey, currentLanguage());
      hamburger.setAttribute("aria-label", label);
      hamburger.dataset.ariaLabelKey = englishKey;
      const srOnly = hamburger.querySelector(".sr-only");
      if (srOnly) {
        srOnly.textContent = label;
        srOnly.dataset.translationKey = englishKey;
      }
    }

    function closeNav() {
      nav.classList.remove("is-open");
      hamburger.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
      setHamburgerLabel("Open navigation");
      document.body.classList.remove("nav-lock");
      overlay.setAttribute("aria-hidden", "true");
    }

    function openNav() {
      nav.classList.add("is-open");
      hamburger.classList.add("is-open");
      hamburger.setAttribute("aria-expanded", "true");
      setHamburgerLabel("Close navigation");
      document.body.classList.add("nav-lock");
      overlay.setAttribute("aria-hidden", "false");
    }

    hamburger.addEventListener("click", function () {
      if (nav.classList.contains("is-open")) {
        closeNav();
      } else {
        openNav();
      }
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeNav();
      }
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) {
        return;
      }

      const isClickInsideNav = nav.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);

      if (!isClickInsideNav && !isClickOnHamburger) {
        closeNav();
      }
    });

    overlay.addEventListener("click", closeNav);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        hamburger.focus();
      }
    });
  }

  function initCommunitySlider(slider) {
    const slides = Array.from(slider.querySelectorAll(".community-slide"));
    const prev = slider.querySelector(".community-control-prev");
    const next = slider.querySelector(".community-control-next");
    const dotsTrack = slider.querySelector(".community-dots");
    const indexEl = slider.querySelector("[data-slide-index]");
    const track = slider.querySelector(".community-track");
    const viewport = slider.querySelector(".community-viewport") || slider;
    const images = Array.from(slider.querySelectorAll(".community-slide img"));
    let currentIndex = slides.findIndex((slide) => slide.classList.contains("is-active"));
    let timer = null;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchActive = false;
    let docVisible = !document.hidden;
    let inView = typeof IntersectionObserver === "undefined";
    let allowDotTrackScroll = false;
    const count = slides.length;
    const usesPeekTrack = Boolean(track && document.body.classList.contains("home-page"));

    if (!count) {
      return;
    }

    if (currentIndex < 0) {
      currentIndex = 0;
    }

    if (dotsTrack && !dotsTrack.children.length && count <= 8) {
      for (let i = 0; i < count; i += 1) {
        const button = document.createElement("button");
        button.className = "community-dot";
        button.type = "button";
        button.setAttribute("aria-label", `Go to image ${i + 1}`);
        if (i === currentIndex) {
          button.classList.add("is-active");
        }
        dotsTrack.appendChild(button);
      }
    }

    const dots = Array.from(slider.querySelectorAll(".community-dot"));
    const dotCount = Math.min(dots.length, count);

    images.forEach((image) => {
      image.loading = "eager";
      if (!image.complete) {
        image.addEventListener("load", syncPeekTrack, { once: true });
      }
    });

    function scrollDotIntoView(dotIndex) {
      if (!dotsTrack || dotIndex < 0 || dotIndex >= dotCount) {
        return;
      }

      const dot = dots[dotIndex];
      const maxScroll = dotsTrack.scrollWidth - dotsTrack.clientWidth;

      if (maxScroll <= 0) {
        return;
      }

      const trackRect = dotsTrack.getBoundingClientRect();
      const dotRect = dot.getBoundingClientRect();
      const dotCenter = dotRect.left - trackRect.left + dotsTrack.scrollLeft + dotRect.width / 2;
      const nextLeft = Math.max(0, Math.min(dotCenter - dotsTrack.clientWidth / 2, maxScroll));

      dotsTrack.scrollTo({
        left: nextLeft,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    }

    function syncPeekTrack() {
      if (!usesPeekTrack || !slides[0]) {
        return;
      }

      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
      const slideWidth = slides[0].getBoundingClientRect().width;
      const offset = currentIndex * (slideWidth + gap);
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    }

    function showSlide(index) {
      currentIndex = (index + count) % count;

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === currentIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });

      for (let d = 0; d < dotCount; d += 1) {
        const dot = dots[d];
        const isActive = d === currentIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      }

      syncPeekTrack();

      if (indexEl) {
        indexEl.textContent = `${currentIndex + 1} / ${count}`;
      }

      if (allowDotTrackScroll) {
        scrollDotIntoView(currentIndex);
      }
    }

    function stopAutoplay() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function maybeStartAutoplay() {
      stopAutoplay();
    }

    function goTo(index) {
      showSlide(index);
    }

    document.addEventListener("visibilitychange", () => {
      docVisible = !document.hidden;
      if (!docVisible) {
        stopAutoplay();
      } else {
        maybeStartAutoplay();
      }
    });

    if ("IntersectionObserver" in window) {
      const viewportObserver = new IntersectionObserver(
        (entries) => {
          inView = entries.some((entry) => entry.isIntersecting);
          if (!inView) {
            stopAutoplay();
          } else {
            maybeStartAutoplay();
          }
        },
        { root: null, threshold: 0.14 }
      );
      viewportObserver.observe(slider);
    }

    if (prev) {
      prev.addEventListener("click", () => goTo(currentIndex - 1));
    }

    if (next) {
      next.addEventListener("click", () => goTo(currentIndex + 1));
    }

    for (let index = 0; index < dotCount; index += 1) {
      dots[index].addEventListener("click", () => goTo(index));
    }

    slider.addEventListener("mouseenter", () => stopAutoplay());
    slider.addEventListener("mouseleave", () => {
      touchActive = false;
      maybeStartAutoplay();
    });
    slider.addEventListener("focusin", () => stopAutoplay());
    slider.addEventListener("focusout", () => {
      maybeStartAutoplay();
    });

    viewport.addEventListener(
      "touchstart",
      (event) => {
        const touch = event.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        touchActive = true;
        stopAutoplay();
      },
      { passive: true }
    );

    viewport.addEventListener(
      "touchend",
      (event) => {
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;
        touchActive = false;

        if (Math.abs(deltaX) < 36 || Math.abs(deltaX) < Math.abs(deltaY)) {
          maybeStartAutoplay();
          return;
        }

        goTo(currentIndex + (deltaX < 0 ? 1 : -1));
      },
      { passive: true }
    );

    if (usesPeekTrack) {
      window.addEventListener("resize", syncPeekTrack);
      if ("ResizeObserver" in window) {
        new ResizeObserver(syncPeekTrack).observe(viewport);
      }
    }

    showSlide(currentIndex);
    allowDotTrackScroll = true;
    maybeStartAutoplay();
  }

  initHomepageScrollPosition();
  communitySliders.forEach(initCommunitySlider);
  bindFloatingApplyLinks();
  initDraggableFloatingApply();

  backButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const referrer = document.referrer ? new URL(document.referrer, window.location.href) : null;
      const canUseHistory = window.history.length > 1 && referrer && referrer.origin === window.location.origin;

      window.PPMPageLoader?.show("Loading previous page…");

      if (canUseHistory) {
        window.history.back();
        return;
      }

      window.location.href = resolveBackFallback(button);
    });
  });

  if (applicationForm) {
    document.addEventListener(
      "click",
      function (event) {
        const link = event.target.closest(
          "#privacy-notice-link, a.agreement-panel__privacy-link[href*='privacy-notice.html']"
        );
        if (!link) {
          return;
        }
        link.setAttribute("href", privacyNoticeHref(currentLanguage()));
      },
      true
    );
  }

  languageSelects.forEach((select) => {
    select.addEventListener("change", function (event) {
      switchLanguage(event.target.value);
    });
  });

  revealTargets.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    revealTargets.forEach((element) => revealObserver.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
  }

  enhanceLanguageSwitchers();
  setupLocalizedValidation();
  const initialLanguage = normalizeLanguage(defaultLanguage);
  logI18n("init", {
    urlLanguage,
    savedLanguage,
    pageLanguage,
    defaultLanguage,
    initialLanguage,
    href: window.location.href
  });
  if (propertyFromUrl()) {
    persistProperty(propertyFromUrl());
  }

  if (!redirectLegacyHomePages() && !redirectForHomeLanguage(initialLanguage)) {
    applyLanguage(initialLanguage);
  }

  document.addEventListener("click", function (event) {
    const btn = event.target.closest("[data-agreement-expand-btn]");
    if (!btn) {
      return;
    }
    const root = btn.closest("[data-agreement-expand]");
    if (!root) {
      return;
    }
    const open = !root.classList.contains("is-open");
    root.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    btn.textContent = translateText(open ? "Show less" : "Read more", currentLanguage());
  });

  window.PPM_I18N = {
    applyLanguage,
    switchLanguage,
    translateText,
    normalizeLanguage,
    storedLanguage,
    languageOptions,
    languageHomeFallback,
    buildLocalizedHref(path, language) {
      const lang = normalizeLanguage(language || storedLanguage());
      const url = new URL(path, window.location.href);
      if (lang === "en") {
        url.searchParams.delete("lang");
      } else {
        url.searchParams.set("lang", lang);
      }
      return `${url.pathname}${url.search}`;
    },
    buildApplicationFlowHref,
    buildHomePageHref,
    resolveApplicationProperty,
    storedProperty,
    persistProperty,
    renderPropertyContextBanner,
    clearStoredProperty
  };

  window.PPM_PROPERTY = {
    buildApplicationFlowHref,
    buildHomePageHref,
    resolveApplicationProperty,
    storedProperty,
    persistProperty,
    renderPropertyContextBanner,
    clearStoredProperty,
    prepareApplicationForNextApplicant,
    readApplicationReviewSnapshot,
    initApplicationReviewPanel
  };

  document.querySelectorAll(".accordion-item").forEach((item) => {
    item.addEventListener("toggle", function () {
      if (!item.open) {
        return;
      }

      const group = item.closest(".faq-accordion");
      if (!group) {
        return;
      }

      group.querySelectorAll(".accordion-item[open]").forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    });
  });

  function getLocalDateInputValue(date = new Date()) {
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0")
    ].join("-");
  }

  function generateApplicationId() {
    const datePart = getLocalDateInputValue().replace(/-/g, "");
    const randomPart = String(Math.floor(100000 + Math.random() * 900000));

    return `APP-${datePart}-${randomPart}`;
  }

  function initApplicationDateDefaults() {
    if (!applicationForm) {
      return;
    }

    const today = getLocalDateInputValue();
    const applicationDateField = applicationForm.querySelector("#application-date");
    if (applicationDateField && !applicationDateField.value) {
      applicationDateField.value = today;
    }
  }

  const APPLICATION_DRAFT_KEY = "ppm-application-draft";
  const APPLICATION_REVIEW_KEY = "ppm-application-review";
  const APPLICATION_NEXT_APPLICANT_FLAG = "ppm-application-next-applicant";
  const APPLICATION_SHARED_FIELD_NAMES = new Set([
    "property",
    "move-date",
    "lease-term",
    "number-applicants",
    "applicant-names",
    "number-occupants",
    "pets",
    "vehicle-information",
    "reason-moving"
  ]);
  const APPLICATION_REVIEW_SECTIONS = [
    {
      title: "Property Information",
      fields: [
        { name: "property", label: "Property applying for" },
        { name: "application-date", label: "Date of Application", type: "date" },
        { name: "move-date", label: "Desired move-in date", type: "date" },
        { name: "lease-term", label: "Lease duration" }
      ]
    },
    {
      title: "Applicant Information",
      fields: [
        { name: "name", label: "Full legal name" },
        { name: "email", label: "Email address" },
        { name: "phone", label: "Mobile number" },
        { name: "dob", label: "Date of birth", type: "date" },
        { name: "residency-status", label: "Citizenship/Residency Status" }
      ]
    },
    {
      title: "Residency History",
      fields: [
        { name: "current-address", label: "Current Address" },
        { name: "previous-address", label: "Previous Address" }
      ]
    },
    {
      title: "Employment & Income",
      fields: [
        { name: "employer", label: "Current Employer" },
        { name: "monthly-income", label: "Monthly Gross Income" },
        { name: "other-income-source", label: "Other Sources Of Income" }
      ]
    },
    {
      title: "Financial and Background",
      fields: [
        { name: "credit-score", label: "Credit Score" },
        { name: "evicted", label: "Have You Ever Been Evicted" },
        { name: "eviction-explanation", label: "If Yes, Explain" },
        { name: "convicted", label: "Have You Ever Been Convicted Of A Crime" },
        { name: "convicted-explanation", label: "If Yes, Explain" }
      ]
    },
    {
      title: "Additional Information",
      fields: [
        { name: "reason-moving", label: "Reason For Moving" },
        { name: "number-applicants", label: "Number Of Applicants Or Adults" },
        { name: "applicant-names", label: "Name Of Applicants" },
        { name: "number-occupants", label: "Number Of Occupants" },
        { name: "pets", label: "Pet Information" },
        { name: "vehicle-information", label: "Vehicle Information" },
        { name: "references", label: "References" }
      ]
    },
    {
      title: "Emergency Contact",
      fields: [
        { name: "emergency-contact-full", label: "Emergency Contact" }
      ]
    }
  ];
  const APPLICATION_REVIEW_VALUE_LABELS = {
    "previous-landlord": "Previous landlord",
    employer: "Employer",
    "personal-reference": "Personal reference",
    "family-member": "Family member",
    "co-worker": "Co-worker"
  };

  function serializeApplicationForm(form) {
    const data = {};
    if (!form) {
      return data;
    }

    form.querySelectorAll("input, select, textarea").forEach((field) => {
      if (!field.name || field.type === "file") {
        return;
      }

      if (field.type === "checkbox") {
        data[field.name] = field.checked;
        return;
      }

      if (field.type === "radio") {
        if (field.checked) {
          data[field.name] = field.value;
        }
        return;
      }

      data[field.name] = field.value;
    });

    return data;
  }

  function saveApplicationDraftData(data) {
    try {
      window.localStorage.setItem(APPLICATION_DRAFT_KEY, JSON.stringify({
        savedAt: Date.now(),
        data: data || {}
      }));
    } catch (error) {
      console.warn("Could not save application draft:", error);
    }
  }

  function clearApplicationDraft() {
    try {
      window.localStorage.removeItem(APPLICATION_DRAFT_KEY);
    } catch (error) {
      console.warn("Could not clear application draft:", error);
    }
  }

  function saveApplicationReviewSnapshot(applicationId, formData) {
    try {
      window.sessionStorage.setItem(APPLICATION_REVIEW_KEY, JSON.stringify({
        savedAt: Date.now(),
        applicationId: applicationId || "",
        data: formData || {}
      }));
      const email = String(formData && formData.email || "").trim();
      if (email) {
        window.sessionStorage.setItem("latestApplicationEmail", email);
      }
    } catch (error) {
      console.warn("Could not save application review snapshot:", error);
    }
  }

  function readApplicationReviewSnapshot() {
    try {
      const raw = window.sessionStorage.getItem(APPLICATION_REVIEW_KEY);
      if (!raw) {
        return null;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object" || !parsed.data || typeof parsed.data !== "object") {
        return null;
      }
      return parsed;
    } catch (error) {
      console.warn("Could not read application review snapshot:", error);
      return null;
    }
  }

  function clearApplicationReviewSnapshot() {
    try {
      window.sessionStorage.removeItem(APPLICATION_REVIEW_KEY);
    } catch (error) {
      console.warn("Could not clear application review snapshot:", error);
    }
  }

  function markApplicationReadyForNextApplicant() {
    try {
      window.sessionStorage.setItem(APPLICATION_NEXT_APPLICANT_FLAG, "1");
    } catch (error) {
      console.warn("Could not mark application ready for next applicant:", error);
    }
  }

  function prepareApplicationForNextApplicant() {
    markApplicationReadyForNextApplicant();
    clearApplicationDraft();
    clearApplicationReviewSnapshot();
  }

  function formatUsaPhone(value) {
    const digits = String(value || "").replace(/\D/g, "");
    const national = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
    if (national.length !== 10) {
      return String(value || "").trim();
    }
    return `(${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;
  }

  function formatUsaPhoneInput(value) {
    let digits = String(value || "").replace(/\D/g, "");
    if (digits.length === 11 && digits.startsWith("1")) {
      digits = digits.slice(1);
    }
    digits = digits.slice(0, 10);
    if (digits.length < 4) {
      return digits ? `(${digits}` : "";
    }
    if (digits.length < 7) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  const APPLICATION_REVIEW_CHOICE_FIELDS = new Set([
    "lease-term",
    "residency-status",
    "other-income-source",
    "evicted",
    "convicted",
    "number-applicants",
    "number-occupants",
    "references",
    "pets"
  ]);

  function translateApplicationReviewChoice(value, language) {
    const english = value === "others"
      ? "Others"
      : (APPLICATION_REVIEW_VALUE_LABELS[value] || value);
    return translateText(english, language || currentLanguage());
  }

  function formatApplicationReviewValue(rawValue, field, language) {
    if (rawValue == null) {
      return "";
    }

    const activeLanguage = language || currentLanguage();

    if (typeof rawValue === "boolean") {
      return translateText(rawValue ? "Yes" : "No", activeLanguage);
    }

    const value = String(rawValue).trim();
    if (!value) {
      return "";
    }

    if (APPLICATION_REVIEW_VALUE_LABELS[value] || APPLICATION_REVIEW_CHOICE_FIELDS.has(field?.name)) {
      return translateApplicationReviewChoice(value, activeLanguage);
    }

    if (field?.name === "phone") {
      return formatUsaPhone(value);
    }

    if (field?.type === "date" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      const date = new Date(`${value}T12:00:00`);
      if (!Number.isNaN(date.getTime())) {
        return date.toLocaleDateString(dateLocaleForLanguage(language || currentLanguage()), {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      }
    }

    return value;
  }

  function buildApplicationReviewEditHref(fieldName, language) {
    const href = buildApplicationFlowHref("apply.html", {
      language,
      property: storedProperty()
    });
    const url = new URL(href, window.location.href);
    url.searchParams.set("edit", fieldName);
    return `apply.html${url.search}`;
  }

  function buildApplicationReviewMarkup(snapshot, language) {
    const data = snapshot?.data || {};
    const editLabel = translateText("Edit", language);
    const sections = APPLICATION_REVIEW_SECTIONS.map((section) => {
      const rows = section.fields
        .map((field) => {
          const display = formatApplicationReviewValue(data[field.name], field, language);
          if (!display) {
            return "";
          }

          const fieldLabel = translateText(field.label, language);
          const editHref = escapeHtml(buildApplicationReviewEditHref(field.name, language));

          return `
            <div class="application-review__row">
              <dt>${fieldLabel}</dt>
              <dd>
                <span class="application-review__value">${escapeHtml(display)}</span>
                <a class="application-review__row-edit" data-edit-field="${escapeHtml(field.name)}" href="${editHref}" aria-label="${escapeHtml(`${editLabel} ${fieldLabel}`)}">${editLabel}</a>
              </dd>
            </div>
          `;
        })
        .filter(Boolean)
        .join("");

      if (!rows) {
        return "";
      }

      return `
        <section class="application-review__group">
          <h3 class="application-review__group-title">${translateText(section.title, language)}</h3>
          <dl class="application-review__list">${rows}</dl>
        </section>
      `;
    }).filter(Boolean).join("");

    return sections;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function initApplicationReviewPanel() {
    const panel = document.getElementById("applicationReviewPanel");
    if (!panel) {
      return;
    }

    const body = document.getElementById("applicationReviewBody");
    const snapshot = readApplicationReviewSnapshot();
    const language = currentLanguage();

    if (!snapshot || !body) {
      panel.hidden = true;
      return;
    }

    const markup = buildApplicationReviewMarkup(snapshot, language);
    if (!markup) {
      panel.hidden = true;
      return;
    }

    body.innerHTML = markup;
    panel.hidden = false;
    initApplicationReviewSeeMore(body);
  }

  function initApplicationReviewSeeMore(body) {
    const actions = document.getElementById("applicationReviewSeeMoreActions");
    const button = document.getElementById("applicationReviewSeeMore");
    const groups = Array.from(body.querySelectorAll(".application-review__group"));

    if (!body || !actions || !button || !groups.length) {
      if (actions) {
        actions.hidden = true;
      }
      return;
    }

    groups.forEach((group) => {
      group.hidden = true;
    });

    const panel = document.getElementById("applicationReviewPanel");
    if (panel) {
      panel.classList.add("is-collapsed");
    }

    button.setAttribute("aria-expanded", "false");
    actions.hidden = false;
    button.onclick = function () {
      groups.forEach((group) => {
        group.hidden = false;
      });
      if (panel) {
        panel.classList.remove("is-collapsed");
      }
      button.setAttribute("aria-expanded", "true");
      actions.hidden = true;
    };
  }

  function resetApplicationFormForNextApplicant(form) {
    if (!form) {
      return;
    }

    const preservedValues = {};
    APPLICATION_SHARED_FIELD_NAMES.forEach((fieldName) => {
      const field = form.querySelector(`[name="${CSS.escape(fieldName)}"]`);
      if (!field) {
        return;
      }

      if (field.type === "checkbox") {
        preservedValues[fieldName] = field.checked;
        return;
      }

      preservedValues[fieldName] = field.value;
    });

    const storedPropertyValue = storedProperty();
    if (storedPropertyValue) {
      preservedValues.property = storedPropertyValue;
    }

    form.querySelectorAll("input, select, textarea").forEach((field) => {
      if (!field.name || field.type === "file") {
        return;
      }

      if (field.type === "checkbox") {
        field.checked = false;
        return;
      }

      if (field.type === "radio") {
        field.checked = false;
        return;
      }

      field.value = "";
    });

    Object.entries(preservedValues).forEach(([fieldName, value]) => {
      const field = form.querySelector(`[name="${CSS.escape(fieldName)}"]`);
      if (!field || field.type === "checkbox" || field.type === "radio") {
        return;
      }

      field.value = value == null ? "" : String(value);
    });

    initApplicationDateDefaults();
    form.querySelectorAll("input, select, textarea").forEach((field) => field.setCustomValidity(""));
  }

  function initApplicationRepeatApplicant() {
    const form = document.getElementById("application-form");
    if (!form) {
      return;
    }

    let shouldReset = false;
    try {
      shouldReset = window.sessionStorage.getItem(APPLICATION_NEXT_APPLICANT_FLAG) === "1";
    } catch (error) {
      console.warn("Could not read next-applicant flag:", error);
    }

    if (!shouldReset) {
      return;
    }

    try {
      window.sessionStorage.removeItem(APPLICATION_NEXT_APPLICANT_FLAG);
      window.localStorage.removeItem(APPLICATION_DRAFT_KEY);
    } catch (error) {
      console.warn("Could not clear repeat-applicant session state:", error);
    }

    resetApplicationFormForNextApplicant(form);
    applyPropertyContextToForm();
    renderPropertyContextBanner();
    renderListingBridgeCopy();
  }

  const FORMSPREE_APPLICATION_ENDPOINT = "https://formspree.io/f/xljdvlkp";
  const APPLICATION_NOTIFICATION_EMAIL = "support@privatepropmanagement.com";
  const EMAILJS_PUBLIC_KEY = "9zdPYi59Y52CoJ96H";
  const EMAILJS_CONFIRMATION_SERVICE = "service_6f9hfc4";
  const EMAILJS_CONFIRMATION_TEMPLATE = "template_vqnekgj";
  const EMAILJS_ADMIN_PUBLIC_KEY = "5DMw1roXD7XmNjRqk";
  const EMAILJS_ADMIN_SERVICE = "service_mjphomm";
  const EMAILJS_ADMIN_TEMPLATE = "template_7fluizl";
  const EMAILJS_SDK_URL = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
  const FORMSPREE_ONLY_FIELD_NAMES = ["_subject"];
  const APPLICATION_ADMIN_FIELD_LABELS = {
    application_id: "Application ID",
    property: "Property applying for",
    "application-date": "Date of application",
    "move-date": "Desired move-in date",
    "lease-term": "Lease duration",
    name: "Full legal name",
    email: "Email address",
    phone: "Mobile number",
    dob: "Date of birth",
    "residency-status": "Citizenship/residency status",
    "current-address": "Current address",
    "previous-address": "Previous address",
    employer: "Current employer",
    "monthly-income": "Monthly gross income",
    "other-income-source": "Other income sources",
    "credit-score": "Credit score",
    evicted: "Ever evicted",
    "eviction-explanation": "Eviction explanation",
    convicted: "Ever convicted",
    "convicted-explanation": "Conviction explanation",
    "reason-moving": "Reason for moving",
    "number-applicants": "Number of applicants",
    "applicant-names": "Additional applicant names",
    "number-occupants": "Number of occupants",
    pets: "Pets",
    "vehicle-information": "Vehicle information",
    references: "References available",
    "emergency-contact-full": "Emergency contact",
    "selected-language": "Language"
  };
  const APPLICATION_ADMIN_FIELD_ORDER = [
    "application_id",
    "property",
    "application-date",
    "move-date",
    "lease-term",
    "name",
    "email",
    "phone",
    "dob",
    "residency-status",
    "current-address",
    "previous-address",
    "employer",
    "monthly-income",
    "other-income-source",
    "credit-score",
    "evicted",
    "eviction-explanation",
    "convicted",
    "convicted-explanation",
    "reason-moving",
    "number-applicants",
    "applicant-names",
    "number-occupants",
    "pets",
    "vehicle-information",
    "references",
    "emergency-contact-full",
    "selected-language"
  ];
  let emailJsInitPromise = null;

  function resolveNotificationEmail(form) {
    return (form.dataset.recipientEmail || APPLICATION_NOTIFICATION_EMAIL).trim();
  }

  function resolveConfirmationEmailConfig(form) {
    return {
      publicKey: (form?.dataset?.emailjsPublicKey || EMAILJS_PUBLIC_KEY).trim(),
      service: (form?.dataset?.emailjsService || EMAILJS_CONFIRMATION_SERVICE).trim(),
      template: (form?.dataset?.emailjsTemplate || EMAILJS_CONFIRMATION_TEMPLATE).trim()
    };
  }

  function resolveAdminEmailConfig(form) {
    return {
      publicKey: (form?.dataset?.emailjsAdminPublicKey || EMAILJS_ADMIN_PUBLIC_KEY).trim(),
      service: (form?.dataset?.emailjsAdminService || EMAILJS_ADMIN_SERVICE).trim(),
      template: (form?.dataset?.emailjsAdminTemplate || EMAILJS_ADMIN_TEMPLATE).trim(),
      recipient: resolveNotificationEmail(form)
    };
  }

  function isValidEmailAddress(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
  }

  function assertEmailJsCompatibleOrigin() {
    if (window.location.protocol !== "file:") {
      return;
    }

    const error = new Error(
      "EmailJS cannot send email from a file:// page. Run a local server and open http://localhost:8765/apply.html (for example: python3 -m http.server 8765)."
    );
    error.stage = "email";
    throw error;
  }

  function updateHiddenFormField(form, name, value) {
    let field = form.querySelector(`input[type="hidden"][name="${CSS.escape(name)}"]`);
    if (!field) {
      field = document.createElement("input");
      field.type = "hidden";
      field.name = name;
      form.appendChild(field);
    }
    field.value = value;
  }

  function logEmailJsDebug(label, details) {
    console.log(`[EmailJS] ${label}`, details || "");
  }

  function logEmailJsError(label, error) {
    console.error(`[EmailJS] ${label}`, {
      message: error?.message,
      status: error?.status,
      text: error?.text,
      stage: error?.stage,
      originalError: error?.originalError || error
    });
  }

  function formatEmailJsError(error) {
    if (!error) {
      return "Unknown EmailJS error";
    }

    const status = error.status || error.statusCode;
    const text = error.text || error.message || String(error);

    if (status === 403) {
      if (/non-browser/i.test(text)) {
        return "EmailJS blocked the request (security settings). Allow your site domain in the EmailJS dashboard.";
      }
      return `EmailJS 403: ${text || "Forbidden — add this website URL under EmailJS Account → Security → Allowed domains."}`;
    }

    if (status === 422) {
      return `EmailJS 422: ${text || "Invalid template or recipient — confirm To Email is {{email}} in template_vqnekgj."}`;
    }

    return status ? `EmailJS ${status}: ${text}` : text;
  }

  function setFormspreeOnlyFieldsDisabled(form, disabled) {
    FORMSPREE_ONLY_FIELD_NAMES.forEach((fieldName) => {
      const field = form.querySelector(`[name="${CSS.escape(fieldName)}"]`);
      if (!field) {
        return;
      }

      if (disabled) {
        field.dataset.emailjsPrevDisabled = field.disabled ? "1" : "0";
        field.disabled = true;
        return;
      }

      field.disabled = field.dataset.emailjsPrevDisabled === "1";
      delete field.dataset.emailjsPrevDisabled;
    });
  }

  function prepareEmailJs() {
    if (!emailJsInitPromise) {
      emailJsInitPromise = loadEmailJsSdk()
        .then((emailjs) => {
          logEmailJsDebug("Initializing SDK", {
            publicKeyPrefix: `${EMAILJS_PUBLIC_KEY.slice(0, 4)}...`,
            serviceId: EMAILJS_CONFIRMATION_SERVICE,
            templateId: EMAILJS_CONFIRMATION_TEMPLATE
          });
          emailjs.init({
            publicKey: EMAILJS_PUBLIC_KEY,
            blockHeadless: false
          });
          logEmailJsDebug("SDK init complete", { sendForm: typeof emailjs.sendForm === "function" });
          return emailjs;
        })
        .catch((error) => {
          emailJsInitPromise = null;
          logEmailJsError("SDK init failed", error);
          throw error;
        });
    }

    return emailJsInitPromise;
  }

  function formatApplicationAdminMessage(params) {
    const lines = ["New rental application received", ""];
    const usedKeys = new Set();

    APPLICATION_ADMIN_FIELD_ORDER.forEach((key) => {
      const value = String(params[key] || "").trim();
      if (!value) {
        return;
      }

      usedKeys.add(key);
      lines.push(`${APPLICATION_ADMIN_FIELD_LABELS[key] || key}: ${value}`);
    });

    Object.keys(params).forEach((key) => {
      if (usedKeys.has(key) || FORMSPREE_ONLY_FIELD_NAMES.includes(key)) {
        return;
      }

      if (["to_email", "recipient_email", "support_email", "application-id"].includes(key)) {
        return;
      }

      const value = String(params[key] || "").trim();
      if (!value) {
        return;
      }

      lines.push(`${APPLICATION_ADMIN_FIELD_LABELS[key] || key}: ${value}`);
    });

    return lines.join("\n");
  }

  function collectApplicationAdminEmailParams(form, applicationId) {
    const params = collectEmailJsTemplateParams(form, applicationId);
    const adminEmail = resolveNotificationEmail(form);
    const applicantName = String(params.name || "").trim();

    return {
      ...params,
      to_email: adminEmail,
      recipient_email: adminEmail,
      reply_to: String(params.email || "").trim(),
      subject: applicantName
        ? `New Rental Application - ${applicantName}`
        : "New Rental Application - TenantFirst Management",
      message: formatApplicationAdminMessage(params),
      application_id: params.application_id || applicationId,
      current_language: params["selected-language"] || currentLanguage(),
      language: params["selected-language"] || currentLanguage()
    };
  }

  async function sendApplicationAdminNotification(form, applicationId) {
    assertEmailJsCompatibleOrigin();

    const adminConfig = resolveAdminEmailConfig(form);
    if (!adminConfig.template || !adminConfig.service || !adminConfig.publicKey) {
      logEmailJsDebug("Admin notification skipped (template not configured)");
      return null;
    }

    const templateParams = collectApplicationAdminEmailParams(form, applicationId);

    logEmailJsDebug("Admin notification send starting", {
      applicationId,
      serviceId: adminConfig.service,
      templateId: adminConfig.template,
      recipient: adminConfig.recipient
    });

    const emailjs = await loadEmailJsSdk();
    emailjs.init({
      publicKey: adminConfig.publicKey,
      blockHeadless: false
    });

    try {
      const result = await emailjs.send(adminConfig.service, adminConfig.template, templateParams, {
        publicKey: adminConfig.publicKey
      });
      logEmailJsDebug("Admin notification sent successfully", {
        status: result?.status,
        text: result?.text,
        recipient: adminConfig.recipient
      });
      return result;
    } catch (error) {
      logEmailJsError("Admin notification failed", error);
      throw error;
    }
  }

  function recordApplicationEmailStatus(status) {
    try {
      window.sessionStorage.setItem("applicationEmailStatus", JSON.stringify(status));
    } catch (error) {
      console.warn("Could not store application email status:", error);
    }
  }

  function prepareApplicationFormForEmailJs(form, applicationId) {
    const applicantEmail = String(new FormData(form).get("email") || "").trim();
    const supportEmail = resolveNotificationEmail(form);
    const selectedLanguage = currentLanguage();

    updateHiddenFormField(form, "application-id", applicationId);
    updateHiddenFormField(form, "application_id", applicationId);
    updateHiddenFormField(form, "selected-language", selectedLanguage);
    updateHiddenFormField(form, "support_email", supportEmail);
    updateHiddenFormField(form, "to_email", applicantEmail);

    return applicantEmail;
  }

  function collectEmailJsTemplateParams(form, applicationId) {
    const params = {};
    const formData = new FormData(form);
    const resolvedApplicationId = String(
      applicationId || formData.get("application_id") || formData.get("application-id") || ""
    ).trim();

    formData.forEach((value, key) => {
      if (FORMSPREE_ONLY_FIELD_NAMES.includes(key)) {
        return;
      }
      params[key] = typeof value === "string" ? value : String(value);
    });

    if (resolvedApplicationId) {
      params.application_id = resolvedApplicationId;
      params["application-id"] = resolvedApplicationId;
    }

    const applicantEmail = String(params.email || "").trim();
    if (applicantEmail) {
      params.email = applicantEmail;
      params.to_email = applicantEmail;
    }

    return params;
  }

  async function sendApplicationConfirmationEmail(form, applicationId) {
    assertEmailJsCompatibleOrigin();

    const confirmationConfig = resolveConfirmationEmailConfig(form);

    logEmailJsDebug("Confirmation send starting", {
      applicationId,
      formId: form.id,
      origin: window.location.origin,
      serviceId: confirmationConfig.service,
      templateId: confirmationConfig.template
    });

    const emailjs = await prepareEmailJs();
    const applicantEmail = prepareApplicationFormForEmailJs(form, applicationId);
    const templateParams = collectEmailJsTemplateParams(form, applicationId);

    if (!applicationId || !templateParams.application_id) {
      const error = new Error("Application ID is missing before EmailJS send.");
      error.stage = "email";
      logEmailJsError("Application ID missing for EmailJS", error);
      throw error;
    }

    if (!isValidEmailAddress(applicantEmail)) {
      const error = new Error("Applicant email is missing or invalid.");
      error.stage = "email";
      logEmailJsError("Invalid applicant email before send", error);
      throw error;
    }

    console.log("[Application] EmailJS params before send", templateParams);
    logEmailJsDebug("Template params prepared", {
      applicationId,
      application_id: templateParams.application_id,
      applicantEmail,
      fieldCount: Object.keys(templateParams).length,
      hasName: Boolean(templateParams.name),
      hasEmail: Boolean(templateParams.email)
    });

    try {
      const result = await emailjs.send(
        confirmationConfig.service,
        confirmationConfig.template,
        templateParams,
        {
          publicKey: confirmationConfig.publicKey
        }
      );
      console.log("[Application] EmailJS send success", {
        status: result?.status,
        text: result?.text,
        application_id: templateParams.application_id
      });
      logEmailJsDebug("Confirmation email sent successfully", {
        status: result?.status,
        text: result?.text
      });
      return result;
    } catch (error) {
      const formattedError = formatEmailJsError(error);
      logEmailJsError("Confirmation email failed", error);
      logEmailJsDebug("Failed send context", {
        formattedError,
        templateParams
      });
      const submissionError = new Error(formattedError);
      submissionError.stage = "email";
      submissionError.originalError = error;
      throw submissionError;
    }
  }

  function loadEmailJsSdk(maxWaitMs = 15000) {
    return new Promise((resolve, reject) => {
      const deadline = Date.now() + maxWaitMs;

      const tryResolve = () => {
        if (window.emailjs?.init && window.emailjs?.send) {
          logEmailJsDebug("SDK load success", {
            hasInit: true,
            hasSend: true
          });
          resolve(window.emailjs);
          return true;
        }
        return false;
      };

      const fail = (message) => {
        logEmailJsError("SDK load failed", new Error(message));
        reject(new Error(message));
      };

      const poll = () => {
        if (tryResolve()) {
          return;
        }

        if (Date.now() >= deadline) {
          fail("EmailJS SDK failed to load before timeout.");
          return;
        }

        window.setTimeout(poll, 50);
      };

      const existingScript = document.querySelector('script[src*="@emailjs/browser"]');

      if (!existingScript) {
        logEmailJsDebug("Injecting EmailJS SDK script", { url: EMAILJS_SDK_URL });
        const script = document.createElement("script");
        script.src = EMAILJS_SDK_URL;
        script.async = true;
        script.onload = poll;
        script.onerror = () => fail("EmailJS SDK script failed to load.");
        document.head.appendChild(script);
        poll();
        return;
      }

      existingScript.addEventListener("load", poll, { once: true });
      existingScript.addEventListener("error", () => fail("EmailJS SDK script failed to load."), { once: true });
      poll();
    });
  }

  function safePersistApplicationSession(applicationId, selectedLanguage, applicantProfile, propertyName) {
    try {
      window.sessionStorage.setItem("latestApplicationId", applicationId);
      window.localStorage.setItem("latestApplicationId", applicationId);
      window.sessionStorage.setItem("latestApplicationLanguage", selectedLanguage);
      window.localStorage.setItem("latestApplicationLanguage", selectedLanguage);

      const applicantName = String(applicantProfile?.name || "").trim();
      const applicantEmail = String(applicantProfile?.email || "").trim();
      const applicantPhone = String(applicantProfile?.phone || "").trim();
      const property = String(propertyName || "").trim();

      if (applicantName) {
        window.sessionStorage.setItem("latestApplicantName", applicantName);
        window.localStorage.setItem("latestApplicantName", applicantName);
      }

      if (applicantEmail) {
        window.sessionStorage.setItem("latestApplicantEmail", applicantEmail);
        window.localStorage.setItem("latestApplicantEmail", applicantEmail);
      }

      if (applicantPhone) {
        window.sessionStorage.setItem("latestApplicantPhone", applicantPhone);
        window.localStorage.setItem("latestApplicantPhone", applicantPhone);
      }

      if (property) {
        persistProperty(property);
      }
    } catch (error) {
      console.warn("Could not persist application session data:", error);
    }
  }

  function buildApplicationPayload(form, applicationId) {
    const source = new FormData(form);
    const selectedLanguage = currentLanguage();
    source.set("application-id", applicationId);
    source.set("application_id", applicationId);
    source.set("selected-language", selectedLanguage);

    const applicantEmail = String(source.get("email") || "").trim();
    const formData = new FormData();
    const params = {};

    source.forEach((value, key) => {
      if (key === "to_email") {
        return;
      }

      const text = typeof value === "string" ? value.trim() : String(value || "").trim();
      if (!text) {
        return;
      }

      formData.set(key, text);
      params[key] = text;
    });

    if (applicantEmail) {
      formData.set("email", applicantEmail);
      formData.set("_replyto", applicantEmail);
    }

    formData.set(
      "message",
      formatApplicationAdminMessage({
        ...params,
        application_id: applicationId,
        "selected-language": selectedLanguage
      })
    );

    return { formData, applicantEmail };
  }

  function formatApplicationSubmitError(error) {
    if (error?.stage === "email") {
      const base = translateText(
        "Your application was saved, but the confirmation email could not be sent. Please contact support@privatepropmanagement.com.",
        currentLanguage()
      );
      const detail = error?.message ? ` ${error.message}` : "";
      return `${base}${detail}`;
    }

    return formatFormspreeError(error);
  }

  function formatFormspreeError(error) {
    if (!error) {
      return translateText("Something went wrong. Please try again.", currentLanguage());
    }

    const message = error.message || String(error);
    if (/timed out/i.test(message)) {
      return translateText("The submission timed out. Please check your connection and try again.", currentLanguage());
    }

    if (message && message !== "Application services are not available.") {
      return message;
    }

    return translateText("Something went wrong. Please try again.", currentLanguage());
  }

  function normalizeOptionalCreditScore(form) {
    const field = form.querySelector("#credit-score");
    if (!field) {
      return;
    }

    const value = String(field.value || "").trim();
    field.setCustomValidity("");

    if (!value) {
      field.value = "";
      return;
    }

    const noScoreAnswer = /^(n\/?a|none|no|not applicable|unknown|don'?t know|no credit|sin credito|sin puntaje)$/i;
    if (noScoreAnswer.test(value)) {
      field.value = "";
      return;
    }

    const score = Number(value);
    if (Number.isInteger(score) && score >= 100 && score <= 800) {
      field.value = String(score);
      return;
    }

    field.value = "";
  }

  function redirectToApplicationConfirmation(form, applicationId, selectedLanguage, propertyName) {
    const confirmationPage = form.dataset.confirmation || "application-received.html";
    const redirectUrl = buildApplicationFlowHref(confirmationPage, {
      language: selectedLanguage,
      applicationId,
      property: propertyName || storedProperty()
    });

    safePersistApplicationSession(applicationId, selectedLanguage, {}, propertyName || storedProperty());
    console.log("Application redirect triggered:", redirectUrl);
    window.location.replace(redirectUrl);
  }

  async function submitMainApplication(form, submitButton, statusMessage) {
    const endpoint = form.dataset.formspreeEndpoint || FORMSPREE_APPLICATION_ENDPOINT;

    if (!endpoint) {
      throw new Error("Application services are not available.");
    }

    const applicationId = generateApplicationId();
    const selectedLanguage = currentLanguage();
    console.log("[Application] Generated application ID:", applicationId);
    console.log("[Application] Submission started", { applicationId, language: selectedLanguage });

    const { formData, applicantEmail } = buildApplicationPayload(form, applicationId);
    const applicantName = String(formData.get("name") || "").trim();
    const applicantPhone = String(formData.get("phone") || "").trim();
    const propertyName = String(formData.get("property") || "").trim();

    safePersistApplicationSession(applicationId, selectedLanguage, {
      name: applicantName,
      email: applicantEmail,
      phone: applicantPhone
    }, propertyName);

    const formspreeResult = await withServiceTimeout(
      submitApplicationToFormspree(endpoint, formData),
      20000,
      "Formspree submission timed out."
    );
    console.log("[Application] Formspree submission succeeded", {
      endpoint,
      applicationId,
      status: formspreeResult.status,
      body: formspreeResult.body
    });

    try {
      window.sessionStorage.setItem(
        "ppm-formspree-last",
        JSON.stringify({
          at: new Date().toISOString(),
          endpoint,
          applicationId,
          status: formspreeResult.status,
          ok: true
        })
      );
    } catch (error) {
      console.warn("Could not store Formspree result:", error);
    }

    let adminEmailStatus = "skipped";
    const adminEmailErrors = [];
    let applicantEmailStatus = "failed";
    const applicantEmailErrors = [];

    try {
      await withServiceTimeout(
        sendApplicationConfirmationEmail(form, applicationId),
        45000,
        "EmailJS notification timed out."
      );
      applicantEmailStatus = "sent";
      console.log("[Application] EmailJS confirmation email completed");
    } catch (error) {
      applicantEmailErrors.push(formatEmailJsError(error));
      logEmailJsError("Confirmation email failed (application will continue)", error);
    }

    try {
      await withServiceTimeout(
        sendApplicationAdminNotification(form, applicationId),
        20000,
        "Admin notification timed out."
      );
      adminEmailStatus = "sent";
      console.log("[Application] Admin notification email completed");
    } catch (error) {
      adminEmailStatus = "failed";
      adminEmailErrors.push(formatEmailJsError(error));
      logEmailJsError("Admin notification failed (application will continue)", error);
    }

    recordApplicationEmailStatus({
      applicant: applicantEmailStatus,
      admin: adminEmailStatus,
      errors: [...adminEmailErrors, ...applicantEmailErrors]
    });

    const reviewData = serializeApplicationForm(form);
    saveApplicationReviewSnapshot(applicationId, reviewData);
    saveApplicationDraftData(reviewData);

    redirectToApplicationConfirmation(form, applicationId, selectedLanguage, propertyName);
  }

  async function submitApplicationToFormspree(endpoint, formData) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    });

    let responseBody = null;
    try {
      responseBody = await response.json();
    } catch (error) {
      responseBody = null;
    }

    if (!response.ok || responseBody?.ok === false) {
      const formspreeMessage = Array.isArray(responseBody?.errors)
        ? responseBody.errors.map((entry) => entry.message).filter(Boolean).join(" ")
        : responseBody?.error;
      throw new Error(formspreeMessage || `Formspree submission failed with status ${response.status}.`);
    }

    return {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      body: responseBody
    };
  }

  function withServiceTimeout(promise, timeoutMs, message) {
    let timeoutId;

    const timeoutPromise = new Promise((_, reject) => {
      timeoutId = window.setTimeout(() => reject(new Error(message)), timeoutMs);
    });

    return Promise.race([promise, timeoutPromise]).finally(() => {
      window.clearTimeout(timeoutId);
    });
  }

  function initPhoneChoicePrompt() {
    let dialogEl = null;
    let lastFocus = null;

    function phoneLabels() {
      const lang = currentLanguage();
      return {
        title: translateText("How would you like to contact?", lang),
        call: translateText("Call", lang),
        text: translateText("Text", lang),
        cancel: translateText("Cancel", lang)
      };
    }

    function ensureDialog() {
      if (dialogEl) {
        return dialogEl;
      }

      dialogEl = document.createElement("div");
      dialogEl.id = "phone-choice-dialog";
      dialogEl.className = "phone-choice-dialog";
      dialogEl.setAttribute("role", "dialog");
      dialogEl.setAttribute("aria-modal", "true");
      dialogEl.setAttribute("aria-labelledby", "phone-choice-title");
      dialogEl.hidden = true;
      dialogEl.innerHTML = `
        <button type="button" class="phone-choice-dialog__backdrop" data-phone-choice-dismiss aria-label="Close"></button>
        <div class="phone-choice-dialog__panel">
          <p class="phone-choice-dialog__title" id="phone-choice-title"></p>
          <p class="phone-choice-dialog__number contact-phone-ltr" id="phone-choice-number"></p>
          <div class="phone-choice-dialog__actions">
            <a class="button button-primary phone-choice-dialog__action" id="phone-choice-call" href="#">Call</a>
            <a class="button button-secondary phone-choice-dialog__action" id="phone-choice-text" href="#">Text</a>
            <button type="button" class="button button-secondary phone-choice-dialog__cancel" data-phone-choice-dismiss>Cancel</button>
          </div>
        </div>
      `;

      dialogEl.querySelectorAll("[data-phone-choice-dismiss]").forEach((control) => {
        control.addEventListener("click", closeDialog);
      });

      document.body.appendChild(dialogEl);
      return dialogEl;
    }

    function closeDialog() {
      if (!dialogEl || dialogEl.hidden) {
        return;
      }

      dialogEl.hidden = true;
      document.body.classList.remove("phone-choice-open");

      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus();
      }
    }

    function openDialog(telHref, displayNumber) {
      const dialog = ensureDialog();
      const labels = phoneLabels();
      const digits = telHref.replace(/^tel:/i, "");
      const numberEl = dialog.querySelector("#phone-choice-number");
      const callEl = dialog.querySelector("#phone-choice-call");
      const textEl = dialog.querySelector("#phone-choice-text");
      const cancelEl = dialog.querySelector(".phone-choice-dialog__cancel");
      const backdropEl = dialog.querySelector(".phone-choice-dialog__backdrop");

      lastFocus = document.activeElement;
      dialog.querySelector("#phone-choice-title").textContent = labels.title;
      numberEl.textContent = displayNumber || digits;
      callEl.textContent = labels.call;
      callEl.href = telHref;
      textEl.textContent = labels.text;
      textEl.href = `sms:${digits}`;
      cancelEl.textContent = labels.cancel;
      backdropEl.setAttribute("aria-label", labels.cancel);

      dialog.hidden = false;
      document.body.classList.add("phone-choice-open");
      callEl.focus();
    }

    document.addEventListener("click", function (event) {
      const link = event.target.closest('a[href^="tel:"]');
      if (!link) {
        return;
      }

      event.preventDefault();
      const display =
        link.querySelector(".contact-channel-text")?.textContent.trim() ||
        link.textContent.trim();
      openDialog(link.getAttribute("href"), display);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeDialog();
      }
    });
  }

  initPhoneChoicePrompt();

  function initApplicationDraft() {
    const form = document.getElementById("application-form");
    if (!form) {
      return;
    }

    let saveTimer = null;

    function serializeForm() {
      return serializeApplicationForm(form);
    }

    function restoreForm(data) {
      if (!data || typeof data !== "object") {
        return false;
      }

      let restored = false;
      Object.entries(data).forEach(([name, value]) => {
        const fields = form.querySelectorAll(`[name="${CSS.escape(name)}"]`);
        if (!fields.length) {
          return;
        }

        fields.forEach((field) => {
          if (field.type === "checkbox") {
            field.checked = Boolean(value);
            restored = true;
            return;
          }

          if (field.type === "radio") {
            field.checked = field.value === value;
            if (field.checked) {
              restored = true;
            }
            return;
          }

          field.value = value == null ? "" : String(value);
          restored = true;
        });
      });

      return restored;
    }

    function saveDraft() {
      saveApplicationDraftData(serializeForm());
    }

    function scheduleSave() {
      window.clearTimeout(saveTimer);
      saveTimer = window.setTimeout(saveDraft, 450);
    }

    try {
      const raw = window.localStorage.getItem(APPLICATION_DRAFT_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (restoreForm(parsed.data)) {
          /* Answers restored silently when the applicant returns. */
        }
      }
    } catch (error) {
      console.warn("Could not restore application draft:", error);
    }

    initUsaPhoneField(form);
    form.addEventListener("input", scheduleSave);
    form.addEventListener("change", scheduleSave);
    initApplicationFieldEditFocus(form);
  }

  function initUsaPhoneField(form) {
    const phone = form.querySelector('[name="phone"]');
    if (!phone) {
      return;
    }

    const applyFormat = () => {
      const formatted = formatUsaPhoneInput(phone.value);
      if (phone.value !== formatted) {
        phone.value = formatted;
      }
    };

    applyFormat();
    phone.addEventListener("input", applyFormat);
  }

  function initApplicationFieldEditFocus(form) {
    if (!form) {
      return;
    }

    const fieldName = new URLSearchParams(window.location.search).get("edit");
    if (!fieldName) {
      return;
    }

    const field = form.querySelector(`[name="${CSS.escape(fieldName)}"]`);
    if (!field) {
      return;
    }

    const target = field.closest(".field, .form-group, label, fieldset") || field;
    window.setTimeout(() => {
      target.scrollIntoView({ block: "center", behavior: "smooth" });
      if (typeof field.focus === "function") {
        field.focus({ preventScroll: true });
      }
    }, 80);
  }

  function getTestimonialInitials(name) {
    const parts = String(name || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    if (parts.length === 0) {
      return "?";
    }

    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }

    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function getTestimonialAvatarHue(name) {
    let hash = 0;

    for (let i = 0; i < name.length; i += 1) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    return Math.abs(hash) % 360;
  }

  function decorateTestimonialAvatar(avatar, name) {
    if (!avatar || !name) {
      return;
    }

    avatar.textContent = getTestimonialInitials(name);
    avatar.style.setProperty("--avatar-hue", String(getTestimonialAvatarHue(name)));
  }

  function initTestimonialAvatars() {
    document.querySelectorAll(".testimonial-author").forEach((author) => {
      const avatar = author.querySelector(".testimonial-avatar");
      const nameEl = author.querySelector("cite, strong");
      if (!avatar || !nameEl) {
        return;
      }

      decorateTestimonialAvatar(avatar, nameEl.textContent.trim());
    });
  }

  function initSectionSeeMore(buttonId, moreId) {
    const button = document.getElementById(buttonId);
    const more = document.getElementById(moreId);
    const actions = button ? button.closest(".section-see-more-actions") : null;

    if (!button || !more) {
      return;
    }

    button.addEventListener("click", function () {
      more.hidden = false;
      button.setAttribute("aria-expanded", "true");
      if (actions) {
        actions.hidden = true;
      } else {
        button.hidden = true;
      }
    });
  }

  function initTestimonialsComments() {
    const form = document.getElementById("testimonialsCommentForm");
    const status = document.getElementById("testimonialsCommentStatus");

    if (!form) {
      return;
    }

    const STORAGE_KEY = "ppm-testimonial-comments";

    function saveComment(name, comment, isoDate) {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        const comments = raw ? JSON.parse(raw) : [];
        comments.unshift({ name, comment, date: isoDate });
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(comments.slice(0, 50)));
      } catch (error) {
        console.warn("Could not save testimonial comment:", error);
      }
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameInput = form.querySelector("#testimonial-name");
      const commentInput = form.querySelector("#testimonial-comment");
      const name = nameInput ? nameInput.value.trim() : "";
      const comment = commentInput ? commentInput.value.trim() : "";

      if (!name || !comment) {
        if (status) {
          status.textContent = translateText("Please enter your name and comment.", currentLanguage());
          status.classList.remove("is-success", "is-info");
          status.classList.add("is-error");
        }
        return;
      }

      const isoDate = new Date().toISOString().slice(0, 10);
      saveComment(name, comment, isoDate);

      form.reset();
      if (status) {
        status.textContent = translateText(
          "Thank you — your comment has been submitted.",
          currentLanguage()
        );
        status.classList.remove("is-error", "is-info");
        status.classList.add("is-success");
      }
    });
  }

  initApplicationRepeatApplicant();
  initApplicationDraft();
  initApplicationReviewPanel();
  initTestimonialAvatars();
  initSectionSeeMore("teamSeeMore", "team-more");
  initSectionSeeMore("testimonialsSeeMore", "testimonials-more");
  initTestimonialsComments();

  function initApplicationFormSubmission() {
    const form = document.getElementById("application-form");

    if (!form) {
      console.log("[Application] No #application-form found on this page; submit handler not attached.");
      return;
    }

    if (form.dataset.applicationSubmitBound === "true") {
      console.warn("[Application] Submit handler already bound; skipping duplicate listener.");
      return;
    }

    form.dataset.applicationSubmitBound = "true";
    console.log("[Application] Form detected", {
      id: form.id,
      emailjsService: EMAILJS_CONFIRMATION_SERVICE,
      emailjsTemplate: EMAILJS_CONFIRMATION_TEMPLATE
    });

    prepareEmailJs().catch((error) => {
      logEmailJsError("Preload failed (will retry on submit)", error);
    });

    let isSubmitting = false;

    form.addEventListener("submit", async function (event) {
      event.preventDefault();

      if (isSubmitting) {
        console.warn("[Application] Submit ignored because a submission is already in progress.");
        return;
      }

      normalizeOptionalCreditScore(form);

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton ? submitButton.textContent : "";
      const statusMessage = form.querySelector(".form-status");
      const usesApplicationServices = Boolean(form.dataset.formspreeEndpoint || FORMSPREE_APPLICATION_ENDPOINT);

      if (submitButton && submitButton.disabled) {
        return;
      }

      if (!usesApplicationServices) {
        window.PPMPageLoader?.show({ persist: true });
        window.location.href = form.dataset.confirmation || "application-received.html";
        return;
      }

      isSubmitting = true;
      window.PPMPageLoader?.show({ persist: true });

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
      }

      try {
        await submitMainApplication(form, submitButton, statusMessage);
      } catch (error) {
        isSubmitting = false;
        window.PPMPageLoader?.hide();
        logEmailJsError("Application submission failed", error);

        if (submitButton) {
          submitButton.disabled = false;
          submitButton.removeAttribute("aria-busy");
          submitButton.textContent = originalButtonText || "Submit Application";
        }

        if (statusMessage) {
          statusMessage.textContent = formatApplicationSubmitError(error);
          statusMessage.classList.remove("is-success", "is-info");
          statusMessage.classList.add("is-error");
        }
      }
    });
  }

  initApplicationDateDefaults();
  initApplicationFormSubmission();
})();
