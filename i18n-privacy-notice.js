(function (global) {
  "use strict";

  const entries = {
    "Privacy notice for rental applicants using the TenantFirst Management website.": {
      es: "Aviso de privacidad para solicitantes que utilizan el sitio web de TenantFirst Management.",
      zh: "TenantFirst Management 网站租赁申请人隐私声明。",
      fr: "Avis de confidentialité pour les candidats utilisant le site TenantFirst Management.",
      ar: "إشعار خصوصية للمتقدمين الذين يستخدمون موقع TenantFirst Management."
    },
    "How we handle applicant information submitted through this website.": {
      es: "Cómo manejamos la información de solicitantes enviada a través de este sitio web.",
      zh: "我们如何处理通过本网站提交的申请人信息。",
      fr: "Comment nous traitons les informations des candidats soumises via ce site.",
      ar: "كيف نتعامل مع معلومات المتقدمين المقدمة عبر هذا الموقع."
    },
    "Introduction": {
      es: "Introducción",
      zh: "简介",
      fr: "Introduction",
      ar: "مقدمة"
    },
    "TenantFirst Management respects your privacy and is committed to protecting the information you provide throughout the rental application process.": {
      es: "TenantFirst Management respeta su privacidad y se compromete a proteger la información que proporcione durante todo el proceso de solicitud de alquiler.",
      zh: "TenantFirst Management 尊重您的隐私，并致力于保护您在租赁申请全程中提供的信息。",
      fr: "TenantFirst Management respecte votre vie privée et s’engage à protéger les informations que vous fournissez tout au long du processus de demande de location.",
      ar: "تحترم TenantFirst Management خصوصيتك وتلتزم بحماية المعلومات التي تقدمها طوال عملية طلب الإيجار."
    },
    "This Privacy Notice explains how information submitted through this website may be collected, used, stored, and protected.": {
      es: "Este Aviso de Privacidad explica cómo puede recopilarse, utilizarse, almacenarse y protegerse la información enviada a través de este sitio web.",
      zh: "本隐私声明说明通过本网站提交的信息可能如何被收集、使用、存储和保护。",
      fr: "Le présent avis de confidentialité explique comment les informations soumises via ce site peuvent être collectées, utilisées, stockées et protégées.",
      ar: "يوضح إشعار الخصوصية هذا كيفية جمع المعلومات المقدمة عبر هذا الموقع واستخدامها وتخزينها وحمايتها."
    },
    "Information We Collect": {
      es: "Información que recopilamos",
      zh: "我们收集的信息",
      fr: "Informations que nous collectons",
      ar: "المعلومات التي نجمعها"
    },
    "Information may include:": {
      es: "La información puede incluir:",
      zh: "信息可能包括：",
      fr: "Les informations peuvent inclure :",
      ar: "قد تتضمن المعلومات:"
    },
    "Email address": {
      es: "Correo electrónico",
      zh: "电子邮件",
      fr: "Adresse e-mail",
      ar: "البريد الإلكتروني"
    },
    "Name": {
      es: "Nombre",
      zh: "姓名",
      fr: "Nom",
      ar: "الاسم"
    },
    "Back to Application": {
      es: "Volver a la solicitud",
      zh: "返回申请",
      fr: "Retour à la demande",
      ar: "العودة إلى الطلب"
    },
    "Phone number": {
      es: "Número de teléfono",
      zh: "电话号码",
      fr: "Numéro de téléphone",
      ar: "رقم الهاتف"
    },
    "Current and previous address information": {
      es: "Información de dirección actual y anterior",
      zh: "当前及以往地址信息",
      fr: "Informations sur l’adresse actuelle et les adresses précédentes",
      ar: "معلومات العنوان الحالي والسابق"
    },
    "Employment information": {
      es: "Información laboral",
      zh: "就业信息",
      fr: "Informations professionnelles",
      ar: "معلومات التوظيف"
    },
    "Rental application information": {
      es: "Información de la solicitud de alquiler",
      zh: "租赁申请信息",
      fr: "Informations de la demande de location",
      ar: "معلومات طلب الإيجار"
    },
    "Uploaded documents or payment confirmations": {
      es: "Documentos cargados o confirmaciones de pago",
      zh: "上传的文件或付款确认",
      fr: "Documents téléversés ou confirmations de paiement",
      ar: "المستندات المرفوعة أو تأكيدات الدفع"
    },
    "Other information voluntarily provided during the application process": {
      es: "Otra información proporcionada voluntariamente durante el proceso de solicitud",
      zh: "申请过程中自愿提供的其他信息",
      fr: "Autres informations fournies volontairement pendant le processus de demande",
      ar: "معلومات أخرى تُقدَّم طواعية أثناء عملية التقديم"
    },
    "How Information Is Used": {
      es: "Cómo se utiliza la información",
      zh: "信息的使用方式",
      fr: "Utilisation des informations",
      ar: "كيفية استخدام المعلومات"
    },
    "Information may be used for:": {
      es: "La información puede utilizarse para:",
      zh: "信息可能用于：",
      fr: "Les informations peuvent être utilisées pour :",
      ar: "قد تُستخدم المعلومات من أجل:"
    },
    "Application review": {
      es: "Revisión de la solicitud",
      zh: "申请审核",
      fr: "Examen de la demande",
      ar: "مراجعة الطلب"
    },
    "Applicant verification": {
      es: "Verificación del solicitante",
      zh: "申请人核实",
      fr: "Vérification du candidat",
      ar: "التحقق من المتقدم"
    },
    "Communication regarding rental opportunities": {
      es: "Comunicación sobre oportunidades de alquiler",
      zh: "关于租赁机会的沟通",
      fr: "Communication concernant les opportunités de location",
      ar: "التواصل بشأن فرص الإيجار"
    },
    "Lease preparation": {
      es: "Preparación del contrato de arrendamiento",
      zh: "租约准备",
      fr: "Préparation du bail",
      ar: "إعداد عقد الإيجار"
    },
    "Payment confirmation processing": {
      es: "Procesamiento de confirmaciones de pago",
      zh: "付款确认处理",
      fr: "Traitement des confirmations de paiement",
      ar: "معالجة تأكيدات الدفع"
    },
    "Property management administration": {
      es: "Administración de gestión de la propiedad",
      zh: "物业管理行政事务",
      fr: "Administration de la gestion immobilière",
      ar: "إدارة شؤون إدارة العقار"
    },
    "Information Storage": {
      es: "Almacenamiento de la información",
      zh: "信息存储",
      fr: "Stockage des informations",
      ar: "تخزين المعلومات"
    },
    "Information submitted through this website may be stored securely using third-party services that assist with application processing and communication.": {
      es: "La información enviada a través de este sitio web puede almacenarse de forma segura mediante servicios de terceros que ayudan con el procesamiento de solicitudes y la comunicación.",
      zh: "通过本网站提交的信息可能会通过协助申请处理和沟通的第三方服务安全存储。",
      fr: "Les informations soumises via ce site peuvent être stockées en toute sécurité à l’aide de services tiers qui facilitent le traitement des demandes et la communication.",
      ar: "قد يتم تخزين المعلومات المقدمة عبر هذا الموقع بشكل آمن باستخدام خدمات طرف ثالث تساعد في معالجة الطلبات والتواصل."
    },
    "Reasonable measures are taken to protect submitted information.": {
      es: "Se adoptan medidas razonables para proteger la información enviada.",
      zh: "我们会采取合理措施保护所提交的信息。",
      fr: "Des mesures raisonnables sont prises pour protéger les informations soumises.",
      ar: "يتم اتخاذ تدابير معقولة لحماية المعلومات المقدمة."
    },
    "Payment Confirmations": {
      es: "Confirmaciones de pago",
      zh: "付款确认",
      fr: "Confirmations de paiement",
      ar: "تأكيدات الدفع"
    },
    "Payment confirmation screenshots uploaded through the website are used solely for verification and processing purposes.": {
      es: "Las capturas de pantalla de confirmación de pago cargadas a través del sitio web se utilizan únicamente con fines de verificación y procesamiento.",
      zh: "通过本网站上传的付款确认截图仅用于核实和处理目的。",
      fr: "Les captures d’écran de confirmation de paiement téléversées via le site sont utilisées uniquement à des fins de vérification et de traitement.",
      ar: "تُستخدم لقطات شاشة تأكيد الدفع المرفوعة عبر الموقع فقط لأغراض التحقق والمعالجة."
    },
    "Information Sharing": {
      es: "Compartición de información",
      zh: "信息共享",
      fr: "Partage des informations",
      ar: "مشاركة المعلومات"
    },
    "Personal information is not sold to third parties.": {
      es: "La información personal no se vende a terceros.",
      zh: "个人信息不会出售给第三方。",
      fr: "Les informations personnelles ne sont pas vendues à des tiers.",
      ar: "لا تُباع المعلومات الشخصية لأطراف ثالثة."
    },
    "Information may be shared only when necessary for application review, verification, legal compliance, or property management purposes.": {
      es: "La información puede compartirse solo cuando sea necesario para la revisión de la solicitud, verificación, cumplimiento legal o fines de administración de la propiedad.",
      zh: "仅在申请审核、核实、法律合规或物业管理所必要时，才可能共享信息。",
      fr: "Les informations peuvent être partagées uniquement lorsque cela est nécessaire pour l’examen de la demande, la vérification, la conformité légale ou la gestion immobilière.",
      ar: "قد تتم مشاركة المعلومات فقط عند الضرورة لمراجعة الطلب أو التحقق أو الامتثال القانوني أو لأغراض إدارة العقار."
    },
    "Contact": {
      es: "Contacto",
      zh: "联系方式",
      fr: "Contact",
      ar: "الاتصال"
    },
    "Questions regarding this Privacy Notice may be directed to:": {
      es: "Las preguntas sobre este Aviso de Privacidad pueden dirigirse a:",
      zh: "有关本隐私声明的问题请联系：",
      fr: "Les questions concernant le présent avis de confidentialité peuvent être adressées à :",
      ar: "يمكن توجيه الأسئلة المتعلقة بإشعار الخصوصية هذا إلى:"
    },
    "Email:": {
      es: "Correo electrónico:",
      zh: "电子邮件：",
      fr: "E-mail :",
      ar: "البريد الإلكتروني:"
    },
    "Phone:": {
      es: "Teléfono:",
      zh: "电话：",
      fr: "Téléphone :",
      ar: "الهاتف:"
    },
    "Email": {
      es: "Correo electrónico",
      zh: "电子邮件",
      fr: "E-mail",
      ar: "البريد الإلكتروني"
    },
    "Phone": {
      es: "Teléfono",
      zh: "电话",
      fr: "Téléphone",
      ar: "الهاتف"
    },
    "Last Updated": {
      es: "Última actualización",
      zh: "最后更新",
      fr: "Dernière mise à jour",
      ar: "آخر تحديث"
    },
    "Last Updated: June 2026": {
      es: "Última actualización: junio de 2026",
      zh: "最后更新：2026年6月",
      fr: "Dernière mise à jour : juin 2026",
      ar: "آخر تحديث: يونيو 2026"
    },
    "Privacy Notice": {
      es: "Aviso de privacidad",
      zh: "隐私声明",
      fr: "Avis de confidentialité",
      ar: "إشعار الخصوصية"
    }
  };

  const base = global.__PPM_I18N_EXTENSIONS__ || { es: {}, zh: {}, fr: {}, ar: {} };
  const langs = ["es", "zh", "fr", "ar"];

  Object.keys(entries).forEach((key) => {
    langs.forEach((lang) => {
      if (entries[key][lang]) {
        base[lang][key] = entries[key][lang];
      }
    });
  });

  global.__PPM_I18N_EXTENSIONS__ = base;
})(typeof window !== "undefined" ? window : globalThis);
