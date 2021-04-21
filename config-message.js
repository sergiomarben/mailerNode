const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sergio.martinbenitez@keifitech.com', // Cambialo por tu email
            pass: 'fzgiwkxvyzcjcnhw' // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: `Hola ${formulario.name} <${formulario.email}>`,
        to: `${formulario.email}`, // Cambia esta parte por el destinatario
        subject: 'Consulta web Keifitech',
        html: `
            <strong>name:</strong> ${formulario.name} <br/>
            <strong>E-mail:</strong> ${formulario.email} <br/>
            <strong>Mensaje:</strong> ${formulario.comment}
            `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}