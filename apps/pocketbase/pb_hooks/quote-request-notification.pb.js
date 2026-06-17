/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const name = e.record.get("name");
  const company = e.record.get("company");
  const phone = e.record.get("phone");
  const email = e.record.get("email");
  const serviceType = e.record.get("service_type");
  const message = e.record.get("message");
  const createdAt = e.record.get("created");

  const htmlBody = `
    <h2>Yeni Teklif Talebi</h2>
    <p><strong>Ad Soyad:</strong> ${name}</p>
    <p><strong>Şirket:</strong> ${company}</p>
    <p><strong>Telefon:</strong> ${phone}</p>
    <p><strong>E-posta:</strong> ${email}</p>
    <p><strong>Hizmet Türü:</strong> ${serviceType}</p>
    <p><strong>Mesaj:</strong><br>${message || 'Mesaj yok'}</p>
    <p><strong>Gönderim Tarihi:</strong> ${createdAt}</p>
  `;

  const mailMessage = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: "admin@bonolog.com.tr" }],
    subject: "Yeni Teklif Talebi - " + name,
    html: htmlBody
  });

  $app.newMailClient().send(mailMessage);
  e.next();
}, "quote_requests");